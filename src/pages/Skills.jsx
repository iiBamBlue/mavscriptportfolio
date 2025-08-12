/** @format */
import "./styles/skills.css";
import { motion } from "framer-motion";

const Skills = [
  "⚙️ PowerShell scripting & system automation",
  "🌐 HTML, CSS, JavaScript, React, Express, MongoDB",
  "🎨 UI/UX design with Figma & Tailwind",
  "📊 Infographic & visual storytelling",
  "🧠 Servant leadership & team empowerment",
];

function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto py-16 px-6">
      <h3 className="text-3xl font-bold mb-6 text-teal-400">Skills</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
        {Skills.map((skill, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded shadow text-center transition">
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Skills;
