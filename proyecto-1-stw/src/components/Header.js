import React from "react";
import logo from "../images/logo-spacex.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="index.html">
          <img src={logo} alt="SpaceX" />
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
            <a href="index.htmly">Starlink</a>
          </li>
        </ul>
      </nav>
      <button id="menu-btn" className="hamburger" type="button">
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </header>
  );
}

export default Header;