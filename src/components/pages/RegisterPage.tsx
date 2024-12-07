import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "@components/pages/styles/register.scss"

import { RegisterForm } from "@components/forms/RegisterForm";

export const RegisterPage: React.FC = () => {
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
        <title>Register</title>
      </Helmet>
      <div className="container-register">
      <RegisterForm />
      </div>
    </>
  );
};
