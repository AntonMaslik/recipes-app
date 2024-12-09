import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { AuthContextType, useAuth } from "contexts/AuthContext";

export const LogoutPage: React.FC = () => {
  const { logout }: AuthContextType = useAuth();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
  }, [logout, navigate]);

  return null;
};
