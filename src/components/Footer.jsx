/** @format */
import React from 'react';
import './styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-text">
          &copy; {new Date().getFullYear()} MavScript. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
