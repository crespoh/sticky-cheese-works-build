import { PropsWithChildren } from "react";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export function RequireAuth({ children, requireEmailConfirmed = false }: PropsWithChildren<{ requireEmailConfirmed?: boolean }>) {
  const { loading } = useAuthGuard({ requireEmailConfirmed });

  if (loading) {
    return (
      <div style={{ display: "grid", placeItems: "center", minHeight: "60vh" }}>
        <div>
          <h1>Loading…</h1>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default RequireAuth;

