import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/auth/AuthProvider";
import Index from "@/pages/Index";
import PrivacyPolicy from "@/pages/privacy-policy";
import Apps from "@/pages/Apps";
import NotFound from "@/pages/NotFound";
import Login from "@/pages/Login";
import AuthCallback from "@/pages/AuthCallback";
import AppHome from "@/pages/AppHome";
import RequireAuth from "@/components/RequireAuth";

export default function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Index />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />

          {/* Protected */}
          <Route
            path="/app"
            element={
              <RequireAuth>
                <AppHome />
              </RequireAuth>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

