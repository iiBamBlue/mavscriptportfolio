/** @format */
import "./styles/home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-20 bg-gradient-to-br from-slate-800 via-teal-900 to-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-4 text-teal-300">
        Welcome to MavScript.Blu 🌙
      </h2>

      <p className="text-lg italic text-gray-300">
        Night-active, sun-drenched sleeper. Cozy tech with coastal planner-core.
      </p>
      <p className="mt-4 text-sm text-gray-400">
        Powered by moonlight. Recharged in sunspots. Coded in espresso and sea
        foam.
      </p>

      <motion.div whileHover={{ scale: 1.05 }} className="mt-8">
        <Link
          to="/projects"
          className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600 transition">
          View My Work
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default Home;

/* 
🌌 Interactive Elements
🔦 Hover Effects
Buttons glow like moonlight on water

Cards ripple gently on hover (Framer Motion)

🖼️ Background Imagery
Subtle animated gradients (mint → slate → amber)

Optional SVGs: houseplants, open windows, tide pools
*/
