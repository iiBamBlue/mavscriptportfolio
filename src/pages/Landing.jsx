/** @format */
import './styles/landing.css';
import { useAmbientAudio } from '../components/AmbientAudioProvider';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Landing() {
  const { playing, toggleAudio } = useAmbientAudio();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="landing-page"
    >
      <h1 className="landing-title">MavScript.Blu</h1>
      <p className="landing-subtitle">A portfolio powered by moonlight, espresso, and sea foam.</p>

      <Link to="/home" className="landing-button">
        Enter Site →
      </Link>

      <button onClick={toggleAudio} className="ambient-toggle">
        {playing ? '🔊 Pause Ambient' : '🎧 Play Ambient'}
      </button>
    </motion.section>
  );
}

export default Landing;
