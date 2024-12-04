import React from "react";

import "@components/pages/styles/login.scss";

export function LoginPage() {
  return (
    <div className="container-login">
      <div className="content-login">
        <h1 className="title-login">Sign In</h1>
        <form className="login-form" action="/sign-in" method="POST">
          <label htmlFor="email">Email:</label>
          <input
            className="input-login"
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            className="input-login"
            type="password"
            id="password"
            name="password"
            required
          />

          <button className="button-login-submit" type="submit">
            Sign In
          </button>
        </form>
        <div className="register-link">
          You dont have an account? <a href="/sign-up">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
