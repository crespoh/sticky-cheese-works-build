import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/AuthProvider";

export function useAuthGuard({ requireEmailConfirmed = false }: { requireEmailConfirmed?: boolean } = {}) {
  const { loading, session, emailConfirmed } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (loading) return;
    if (!session) {
      navigate(`/login`, { replace: true, state: { from: location } });
      return;
    }
    if (requireEmailConfirmed && !emailConfirmed) {
      navigate(`/login?needs_confirmation=1`, { replace: true, state: { from: location } });
    }
  }, [loading, session, emailConfirmed, requireEmailConfirmed, navigate, location]);

  return { loading, session, emailConfirmed };
}

