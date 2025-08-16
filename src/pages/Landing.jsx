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
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-teal-900 to-gray-900 text-white text-center px-6"
    >
      <h1 className="text-5xl font-bold mb-4 text-teal-300">MavScript.Blu</h1>
      <p className="text-lg italic text-gray-300 mb-6">
        A portfolio powered by moonlight, espresso, and sea foam.
      </p>

      <Link
        to="/home"
        className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600 transition mb-4"
      >
        Enter Site →
      </Link>

      <button onClick={toggleAudio} className="text-sm text-teal-400 hover:text-teal-300 underline">
        {playing ? '🔊 Pause Ambient' : '🎧 Play Ambient'}
      </button>
    </motion.section>
  );
}

export default Landing;
