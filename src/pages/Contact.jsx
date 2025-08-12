/** @format */
import "./styles/contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-200 dark:bg-gray-800 py-16 px-6 text-center">
      <h3 className="text-3xl font-bold mb-4 text-teal-400">Let’s Connect</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Whether it’s collaboration, conversation, or curiosity—my inbox is
        always open.
      </p>
      <ul className="space-y-2 text-teal-600 dark:text-teal-300 text-lg">
        <li>
          <a href="mailto:darien@example.com" className="hover:underline">
            📧 darien@example.com
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/darienjohnas"
            className="hover:underline">
            💼 LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/darienjohnas" className="hover:underline">
            🧠 GitHub
          </a>
        </li>
      </ul>
    </motion.section>
  );
}

export default Contact;
