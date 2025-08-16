/** @format */
import './styles/contact.css';
import { motion } from 'framer-motion';
import { config } from '../config/env.js';

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
          <a href={`mailto:${config.contact.email}`} className="contact-link">
            📧 {config.contact.email}
          </a>
        </li>
        <li className="contact-item">
          <a href={config.contact.linkedinUrl} className="contact-link">
            💼 LinkedIn
          </a>
        </li>
        <li className="contact-item">
          <a href={config.contact.githubUrl} className="contact-link">
            🧠 GitHub
          </a>
        </li>
      </ul>
    </motion.section>
  );
}

export default Contact;
