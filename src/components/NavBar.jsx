/** @format */
import "./styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link
              to="/home"
              className="hover:text-blue-500 dark:hover:text-teal-300">
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-blue-500 dark:hover:text-teal-300">
              About
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className="hover:text-blue-500 dark:hover:text-teal-300">
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="/skills"
              className="hover:text-blue-500 dark:hover:text-teal-300">
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-blue-500 dark:hover:text-teal-300">
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/whoisblue"
              className="hover:text-blue-500 dark:hover:text-teal-300">
              Who is Blue
            </Link>
          </li>

          <li>
            <Link
              to="/404"
              className="hover:text-blue-500 dark:hover:text-teal-300">
              404
            </Link>
          </li>
        </ul>

        <div className="ml-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-sm">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
