/** @format */
import './styles/contact.css';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="contact-section"
    >
      <h3 className="contact-title">Let's Connect</h3>
      <p className="contact-description">
        Whether it's collaboration, conversation, or curiosity—my inbox is always open.
      </p>
      <ul className="contact-links">
        <li className="contact-item">
          <a href="mailto:darienmaverick@outlook.com" className="contact-link">
            📧 darienmaverick@outlook.com
          </a>
        </li>
        <li className="contact-item">
          <a href="https://linkedin.com/in/darien-blue" className="contact-link">
            💼 LinkedIn
          </a>
        </li>
        <li className="contact-item">
          <a href="https://github.com/iiBamBlue" className="contact-link">
            🧠 GitHub
          </a>
        </li>
      </ul>
    </motion.section>
  );
}

export default Contact;
