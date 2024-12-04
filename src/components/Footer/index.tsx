import React from "react";

import "@components/Footer/index.scss";
import { navigation } from "@components/Footer/navigation";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Recipes. Sharing the joy of cooking every day.</p>
        <div className="footer-links">
          {navigation.links.map((link, index) => (
            <a key={index} href={link.to}>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
