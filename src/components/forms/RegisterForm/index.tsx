import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import { Tokens } from "@apollo-custom/types/tokens";
import authService from "services/auth.service";
import { useAuth } from "contexts/AuthContext";

import { schemeRegister } from "./scheme-register";

import "@components/forms/RegisterForm/index.scss";

export const RegisterForm: React.FC = () => {
  type FormData = z.infer<typeof schemeRegister>;

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schemeRegister),
  });

  const onSubmit = async (input: FormData) => {
    try {
      const tokens: Tokens = await authService.signUp({
        name: input.name,
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
    <div className="container-register">
      <div className="content-register">
        <h1 className="title-register">Sign Up</h1>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Name:</label>
          <input className="input-register" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
          <label htmlFor="email">Email:</label>
          <input className="input-register" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="input-register"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button type="submit" className="button-register-submit">
            Sign Up
          </button>
        </form>
        <div className="login-link">
          Already have an account? <a href="/login">Sign In</a>
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </div>
  );
};
