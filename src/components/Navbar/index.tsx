import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { getNavigation } from "@components/Navbar/navigation";
import { useAuth } from "contexts/AuthContext";

import "@components/Navbar/index.scss";

export const Navbar: React.FC = () => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = getNavigation(user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleMenu();
    }
  };

  return (
    <div className="navbar">
      <a className="navbar-brand" href={navigation.brand.to}>
        {navigation.brand.name}
      </a>

      <div className="navbar-search">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-input-button">
          <FaSearch />
        </button>
      </div>

      <nav className="navbar-links">
        {navigation.links.map((link, index) => (
          <a key={index} href={link.to}>
            {link.name}
          </a>
        ))}
      </nav>

      <nav className={`navbar-mobile ${isMenuOpen ? "open" : ""}`}>
        {navigation.links.map((link, index) => (
          <a key={index} href={link.to}>
            {link.name}
          </a>
        ))}
      </nav>

      <button
        className="burger-menu"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
    </div>
  );
};
export { getNavigation };
