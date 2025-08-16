/** @format */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MavScript</div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navbar-item">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="navbar-item">
          <Link to="/who-is-blue">Who is Blue?</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
