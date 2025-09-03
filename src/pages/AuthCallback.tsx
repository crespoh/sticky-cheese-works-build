import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function finalize() {
      try {
        // If PKCE code param present, exchange explicitly; otherwise detectSessionInUrl handles it
        const code = params.get("code");
        if (code) {
          const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
          if (exchangeError) throw exchangeError;
        }
        // After finalizing session, go to protected area
        if (isMounted) navigate("/app", { replace: true });
      } catch (e: any) {
        setError(e?.message ?? "Authentication failed. Please try again.");
      }
    }
    finalize();
    return () => {
      isMounted = false;
    };
  }, [navigate, params]);

  if (error) {
    return (
      <div style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
        <div>
          <h1>Authentication error</h1>
          <p>{error}</p>
          <p>
            <a href="/login">Try again</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
      <div>
        <h1>Signing you in…</h1>
        <p>Please wait while we complete your login.</p>
      </div>
    </div>
  );
}

