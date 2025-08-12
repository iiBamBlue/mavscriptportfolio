/** @format */
import './styles/about.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="about-section"
    >
      <h3 className="about-title">About Me</h3>

      <p className="about-description">
        I’m Darien—a systems thinker with a soul for storytelling. My journey started in
        manufacturing, where I led with grit and precision. When life shifted, I pivoted to tech,
        bringing that same clarity to cloud development and automation.
      </p>

      <p className="about-quote">
        I build like I live: open windows, warm breezes, and code that breathes. MavScript.Blu is my
        space to explore the intersection of logic and vibe—where espresso meets sea foam, and
        syntax meets soul.
      </p>
    </motion.section>
  );
}

export default About;
