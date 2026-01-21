import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hasBothGithub = project?.frontendGithubUrl && project?.backendGithubUrl;
  const hasSingleGithub =
    project?.frontendGithubUrl || project?.backendGithubUrl;

  if (!project) {
    return (
      <section className="project-detail not-found">
        <div className="container">
          <h2 className="section-title">Project not found</h2>
          <p className="section-subtitle">
            We couldn&apos;t find the project you were looking for.
          </p>
          <Link to="/" className="project-detail-back">
            ← Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <div className="container project-detail-container">
        <div className="project-detail-header">
          <h1 className="project-detail-title">{project.title}</h1>
          <div className="project-detail-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="project-detail-gallery">
            {project.screenshots.map((shot, index) => (
              <figure key={index} className="project-detail-figure">
                <img
                  src={shot.src}
                  alt={
                    shot.caption
                      ? shot.caption
                      : `${project.title} screenshot ${index + 1}`
                  }
                  className="project-detail-gallery-image"
                />
                {shot.caption && (
                  <figcaption className="project-detail-caption">
                    {shot.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        <div className="project-detail-body">
          <p className="project-detail-description">{project.description}</p>

          {project.longDescription && (
            <div className="project-detail-long">
              {project.longDescription.split("\n\n").map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          )}

          <div className="project-detail-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                View Live Project
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
                      Frontend Code
                    </a>
                    <a
                      href={project.backendGithubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-dropdown-item"
                    >
                      Backend Code
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
                View Code
              </a>
            ) : null}
          </div>

          <Link to="/#projects" className="project-detail-back">
            ← Back to projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
