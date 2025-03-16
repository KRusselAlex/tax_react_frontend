import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedLoginProps {
  children: ReactNode;
}

export const ProtectedLogin = ({ children }: ProtectedLoginProps) => {
  const isAuthenticated = localStorage.getItem("access_token");
  const location = useLocation(); // Hook to access the current location

  // Check if the user is authenticated
  if (isAuthenticated) {
    // If already authenticated, navigate to the previous page or the homepage if not available
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  // If not authenticated, show the login page or requested component
  return children;
};
