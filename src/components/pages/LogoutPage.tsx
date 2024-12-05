import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useAuth } from "contexts/AuthContext";

export const LogoutPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
  }, [logout, navigate]);

  return null;
};
