/** @format */
import "./styles/skills.css";
import { motion } from "framer-motion";

const SkillsList = [
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
      className="skills-section">
      <h3 className="skills-title">Skills</h3>
      <ul className="skills-list">
        {SkillsList.map((skill, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            className="skills-item">
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Skills;
