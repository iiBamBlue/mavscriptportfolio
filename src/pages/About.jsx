/** @format */
import "./styles/about.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto py-16 px-6 text-gray-300 dark:text-gray-200">
      <h3 className="text-3xl font-bold mb-6 text-teal-400">About Me</h3>

      <p className="leading-relaxed mb-4">
        I’m Darien—a systems thinker with a soul for storytelling. My journey
        started in manufacturing, where I led with grit and precision. When life
        shifted, I pivoted to tech, bringing that same clarity to cloud
        development and automation.
      </p>

      <p className="italic text-gray-400">
        I build like I live: open windows, warm breezes, and code that breathes.
        MavScript.Blu is my space to explore the intersection of logic and
        vibe—where espresso meets sea foam, and syntax meets soul.
      </p>
    </motion.section>
  );
}

export default About;
