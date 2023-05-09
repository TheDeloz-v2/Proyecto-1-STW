import React, { useState, useEffect } from "react";
import logo from "../images/logo-spacex.png";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const [showHeader, setShowHeader] = useState(true);
const [prevScrollpos, setPrevScrollpos] = useState(0);

useEffect(() => {
  if (typeof window !== 'undefined') {
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      setShowHeader(prevScrollpos > currentScrollPos);
      setPrevScrollpos(currentScrollPos);
    };
  }
}, [prevScrollpos]);

  return (
    <header className={`header ${showHeader ? "" : "header-hidden"}`}>
      <div className="logo">
        <a href="index.html">
          <img src={logo.src} alt="SpaceX" />
        </a>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="index.html">Falcon 9</a>
          </li>
          <li>
            <a href="index.html">Falcon Heavy</a>
          </li>
          <li>
            <a href="index.html">Dragon</a>
          </li>
          <li>
            <a href="index.html">Starship</a>
          </li>
          <li>
            <a href="index.html">Human Spaceflight</a>
          </li>
          <li>
            <a href="index.html">Rideshare</a>
          </li>
          <li>
            <a href="index.html">Starshield</a>
          </li>
          <li>
            <a href="index.html">Starlink</a>
          </li>
        </ul>
      </nav>
      <nav className="navbar-right">
        <ul>
          <li>
            <a href="index.html">Shop</a>
          </li>
        </ul>
        <div className={`shadow ${isMobileNavOpen ? "active" : ""}`} />
        <button className={`hamburger ${isMobileNavOpen ? "active" : ""}`} onClick={handleMobileNavClick}>
          <span />
          <span />
          <span />
        </button>
        </nav>
      <nav className={`mobile-nav ${isMobileNavOpen ? "active" : ""}`} style={{ right: isMobileNavOpen ? "0" : "-280px" }}>
        <a href="index.html">Mission</a>
        <a href="index.html">Launches</a>
        <a href="index.html">Careers</a>
        <a href="index.html">Updates</a>
        <a href="index.html">Shop</a>
      </nav>
      
      
    </header>
  );
}

export default Header;
