/** @format */
import './styles/projects.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'OneDrive Folder Mapping Automation',
    description:
      'PowerShell script to resolve localized folder issues and streamline sync across enterprise systems.',
    tools: 'PowerShell, Windows APIs',
    link: 'https://github.com/yourrepo',
  },
  {
    title: 'Azure Workflow Builder',
    description:
      'Cloud-native automation pipeline using Azure Developer CLI and GitHub Copilot to deploy scalable infrastructure.',
    tools: 'Azure CLI, GitHub Copilot, YAML',
    link: 'https://github.com/yourrepo',
  },
  {
    title: 'MavScript.Blu Portfolio Engine',
    description:
      'React-based portfolio infused with ambient design, dark mode, and poetic UI transitions.',
    tools: 'React, Tailwind CSS, Framer Motion',
    link: 'https://github.com/yourrepo',
  },
];

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="projects-section"
    >
      <div className="projects-container">
        <h3 className="projects-title">Projects</h3>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.02 }} className="project-card">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-description">{project.description}</p>
              <p className="project-tools">Tools: {project.tools}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
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
