/** @format */
import "./styles/projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "OneDrive Folder Mapping Automation",
    description:
      "PowerShell script to resolve localized folder issues and streamline sync across enterprise systems.",
    tools: "PowerShell, Windows APIs",
    link: "https://github.com/yourrepo",
  },
  {
    title: "Azure Workflow Builder",
    description:
      "Cloud-native automation pipeline using Azure Developer CLI and GitHub Copilot to deploy scalable infrastructure.",
    tools: "Azure CLI, GitHub Copilot, YAML",
    link: "https://github.com/yourrepo",
  },
  {
    title: "MavScript.Blu Portfolio Engine",
    description:
      "React-based portfolio infused with ambient design, dark mode, and poetic UI transitions.",
    tools: "React, Tailwind CSS, Framer Motion",
    link: "https://github.com/yourrepo",
  },
];

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-teal-400">Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600 dark:text-teal-300">
                {project.title}
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {project.description}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Tools: {project.tools}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline text-sm">
                View Code →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
