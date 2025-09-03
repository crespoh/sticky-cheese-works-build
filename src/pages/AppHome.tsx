import { useAuth } from "@/auth/AuthProvider";
import { supabase } from "@/lib/supabaseClient";

export default function AppHome() {
  const { user } = useAuth();

  return (
    <div style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
      <h1>Welcome</h1>
      <p>You are signed in.</p>
      <pre style={{ background: "#f6f6f6", padding: 12 }}>
        {JSON.stringify({ id: user?.id, email: user?.email }, null, 2)}
      </pre>
      <button onClick={() => supabase.auth.signOut()}>Sign out</button>
    </div>
  );
}

