/** @format */
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-text">
          &copy; {new Date().getFullYear()} MavScript.blu All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
