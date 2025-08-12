/** @format */
import './styles/home.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="home-section"
    >
      <h2 className="home-title">Welcome to MavScript.Blu 🌙</h2>

      <p className="home-subtitle">
        Night-active, sun-drenched sleeper. Cozy tech with coastal planner-core.
      </p>
      <p className="home-description">
        Powered by moonlight. Recharged in sunspots. Coded in espresso and sea foam.
      </p>

      <motion.div whileHover={{ scale: 1.05 }} className="home-cta">
        <Link to="/projects" className="home-button">
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
