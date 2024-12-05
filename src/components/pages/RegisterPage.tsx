import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import "@components/pages/styles/register.scss";

import authService from "services/auth.service";
import { Tokens } from "@apollo-custom/types/tokens";
import { COOKIE_OPTIONS } from "config/cookie-options";

export const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["accessToken"]);

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const token: Tokens = await authService.signUp({ email, password, name });

      setCookie("accessToken", token.accessToken, COOKIE_OPTIONS);

      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("SignUp failed!");
      }
    }
  };

  return (
    <div className="container-register">
      <div className="content-register">
        <h1 className="title-register">Sign Up</h1>
        <form className="register-form">
          <label htmlFor="username">Name:</label>
          <input
            className="input-register"
            type="text"
            id="username"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            className="input-register"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            className="input-register"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p>Error: {error}</p>}
          <button
            type="button"
            className="button-register-submit"
            onClick={handleRegister}
          >
            Create account
          </button>
        </form>
        <div className="login-link">
          Already have an account? <a href="/sign-in">Sign In</a>
        </div>
      </div>
    </div>
  );
};
