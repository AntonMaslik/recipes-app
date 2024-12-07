import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@components/pages/styles/login.scss"

import { LoginForm } from "@components/forms/LoginForm";

export const LoginPage: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="container-login">
      <LoginForm />
      </div>
    </>
  );
};
