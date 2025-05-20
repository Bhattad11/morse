import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="left-section">
        <img src="/logo.svg" alt="Huly Logo" className="logo-icon" />
        <span className="logo-text">huly</span>
      </div>

      {/* Nav Links */}
      <nav className="nav-section">
        <a href="#" className="nav-link active">Pricing</a>

        <div
          className="nav-link dropdown"
          onClick={() => toggleDropdown("resources")}
        >
          Resources <span className="arrow">⌄</span>
          {openDropdown === "resources" && (
            <div className="dropdown-content">
              <a href="#">Docs</a>
              <a href="#">Tutorials</a>
              <a href="#">Examples</a>
            </div>
          )}
        </div>

        <div
          className="nav-link dropdown"
          onClick={() => toggleDropdown("community")}
        >
          Community <span className="arrow">⌄</span>
          {openDropdown === "community" && (
            <div className="dropdown-content">
              <a href="#">Blog</a>
              <a href="#">Forum</a>
              <a href="#">Events</a>
            </div>
          )}
        </div>

        <a href="#" className="nav-link">Download</a>
      </nav>

      {/* Right Buttons */}
      <div className="right-section">
        <button className="star-button">
          <img src="/github.svg" alt="GitHub" className="github-icon" />
          Star Us
        </button>
        <button className="btn-outline">Sign In</button>
        <button className="btn-solid">Get Started</button>
      </div>
    </header>
  );
}
