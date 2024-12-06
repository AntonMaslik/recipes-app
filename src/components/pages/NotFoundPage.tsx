import React from "react";

import "@components/pages/styles/404page.scss";

const NotFound: React.FC = () => {
  return (
    <>
      <div className="container">
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
