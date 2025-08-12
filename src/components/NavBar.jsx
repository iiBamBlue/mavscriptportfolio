/** @format */
import React from "react";
import "./styles/navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MavScript</div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/projects">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="/skills">Skills</a>
        </li>
        <li className="navbar-item">
          <a href="/whoisblue">Who is Blue?</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
