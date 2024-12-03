import React from "react";

import "@components/footer/index.scss"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 My Company. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
