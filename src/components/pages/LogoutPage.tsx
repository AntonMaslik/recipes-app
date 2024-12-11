import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { AuthContextType, useAuth } from "contexts/AuthContext";

export const LogoutPage: React.FC = () => {
  const { logout }: AuthContextType = useAuth();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      await logout();
      navigate("/login");
    };

    performLogout();
  }, [logout, navigate]);

  return null;
};
