import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { Tokens } from "@custom-types/tokens";
import authService from "services/auth.service";
import { AuthContextType, useAuth } from "contexts/AuthContext";
import { schemeLogin } from "@components/forms/LoginForm/scheme-login";

import "@components/forms/LoginForm/index.scss";

export const LoginForm: React.FC = () => {
  type FormData = z.infer<typeof schemeLogin>;

  const navigate: NavigateFunction = useNavigate();
  const { login }: AuthContextType = useAuth();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schemeLogin),
  });

  const onSubmit = async (input: FormData) => {
    try {
      const tokens: Tokens = await authService.signIn({
        email: input.email,
        password: input.password,
      });

      login(tokens.accessToken);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="content-login">
      <h1 className="title-login">Sign In</h1>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <input className="input-login" {...register("email")} />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="input-login"
          {...register("password")}
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
        <button className="button-login-submit" type="submit">
          Sign In
        </button>
      </form>
      <div className="register-link">
        You dont have an account? <a href="/register">Sign Up</a>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};
