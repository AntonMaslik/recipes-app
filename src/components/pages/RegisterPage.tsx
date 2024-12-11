import { Helmet } from "react-helmet";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "@components/pages/styles/register.scss";

import { RegisterForm } from "@components/forms/RegisterForm";

export const RegisterPage: React.FC = () => {
  const isAuthenticated: boolean | null = !!localStorage.getItem("accessToken");
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="container-register">
        <RegisterForm />
      </div>
    </>
  );
};
