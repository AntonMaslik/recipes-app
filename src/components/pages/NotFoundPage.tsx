import "@components/pages/styles/404page.scss";
import { Helmet } from "react-helmet";
import React from "react";

export const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="container-404">
        <div className="container-content">
          <div className="emoji">🍳</div>
          <h1>404</h1>
          <p>Oops! This page not found!</p>
          <a href="/" className="home-link">
            Back to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
