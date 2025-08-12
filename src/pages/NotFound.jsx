/** @format */
import "./styles/notfound.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center px-6">
      <motion.h1
        className="text-6xl font-bold text-blue-600 dark:text-teal-400 mb-4"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}>
        404
      </motion.h1>

      <motion.p
        className="text-xl text-gray-700 dark:text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}>
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      <motion.div whileHover={{ scale: 1.1 }}>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:bg-teal-500 dark:hover:bg-teal-600">
          Go Home
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default NotFound;

/* 🔥 What This Adds
- Fade + scale entrance for the whole section
- Bounce animation on the “404” header
- Delayed fade-in for the message
- Hover scale on the button

🧠 Bonus Ideas
Want to go further?
- Add a floating astronaut or rocket SVG with motion paths
- Use Lottie for animated illustrations
- Trigger confetti or particle effects on button click
Let me know your vibe—quirky, cosmic, minimalist—and I’ll tailor the animation style to match.
*/
