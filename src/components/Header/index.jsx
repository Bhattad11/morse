import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

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
        <Link to={"#"} className="nav-link active">Pricing</Link>

        <div
          className="nav-link dropdown"
          onClick={() => toggleDropdown("resources")}
        >
          Resources <span className="arrow">⌄</span>
          {openDropdown === "resources" && (
            <div className="dropdown-content">
              <Link to={"#"}>Docs</Link>
              <Link to={"#"}>Tutorials</Link>
              <Link to={"#"}>Examples</Link>
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
              <Link to={"#"}>Blog</Link>
              <Link to={"#"}>Forum</Link>
              <Link to={"#"}>Events</Link>
            </div>
          )}
        </div>

        <Link to={"#"} className="nav-link">Download</Link>
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
