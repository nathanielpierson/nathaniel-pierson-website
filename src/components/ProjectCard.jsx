import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hasBothGithub = project.frontendGithubUrl && project.backendGithubUrl;
  const hasSingleGithub = project.frontendGithubUrl || project.backendGithubUrl;

  return (
    <div className={`project-card ${dropdownOpen ? 'dropdown-open' : ''}`}>
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-placeholder">
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <Link to={`/projects/${project.slug}`} className="project-link">
            Learn More
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo
            </a>
          )}
          {hasBothGithub ? (
            <div className="github-dropdown-wrapper">
              <button
                className="project-link github-dropdown-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
              >
                GitHub
              </button>
              {dropdownOpen && (
                <div className="github-dropdown">
                  <a
                    href={project.frontendGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-dropdown-item"
                  >
                    Frontend
                  </a>
                  <a
                    href={project.backendGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-dropdown-item"
                  >
                    Backend
                  </a>
                </div>
              )}
            </div>
          ) : hasSingleGithub ? (
            <a
              href={project.frontendGithubUrl || project.backendGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link with-arrow"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
