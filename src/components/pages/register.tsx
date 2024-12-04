import React from "react";

import "@components/pages/styles/register.scss";

export function RegisterPage() {
  return (
    <div className="container-register">
      <div className="content-register">
        <h1 className="title-register">Sign Up</h1>
        <form className="register-form" action="/register" method="POST">
          <label htmlFor="username">Name:</label>
          <input
            className="input-register"
            type="text"
            id="username"
            name="username"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            className="input-register"
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            className="input-register"
            type="password"
            id="password"
            name="password"
            required
          />

          <button className="button-register-submit" type="submit">
            Create account
          </button>
        </form>
        <div className="login-link">
          Already have an account? <a href="login.html">Sign Up</a>
        </div>
      </div>
    </div>
  );
}
