import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects, representing a variety of
          accomplishments and technologies I've learned and mastered.
        </p>
        <p className="section-subtitle projects-intro">
          Click Learn More to see detailed explanations of my projects, samples of code, demo videos of me using the project, and more!
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
