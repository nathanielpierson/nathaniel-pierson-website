import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetail.css";

function buildYouTubeEmbedUrl(youtubeUrl) {
  if (!youtubeUrl) return null;
  try {
    const url = new URL(youtubeUrl);
    const isYouTube =
      url.hostname === "www.youtube.com" ||
      url.hostname === "youtube.com" ||
      url.hostname === "youtu.be";
    if (!isYouTube) return null;

    let videoId = null;
    if (url.hostname === "youtu.be") {
      videoId = url.pathname.replace("/", "");
    } else {
      videoId = url.searchParams.get("v");
    }
    if (!videoId) return null;

    const t = url.searchParams.get("t");
    const start =
      t && /^\d+s?$/.test(t) ? String(parseInt(t.replace("s", ""), 10)) : null;

    const embed = new URL(`https://www.youtube.com/embed/${videoId}`);
    if (start && start !== "NaN") embed.searchParams.set("start", start);
    return embed.toString();
  } catch {
    return null;
  }
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hasBothGithub = project?.frontendGithubUrl && project?.backendGithubUrl;
  const hasSingleGithub =
    project?.frontendGithubUrl || project?.backendGithubUrl;
  const youtubeEmbedUrl = buildYouTubeEmbedUrl(project?.youtubeUrl);

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

        {project.longDescription && (
          <div className="project-detail-long project-detail-long-top">
            {project.longDescription.split("\n\n").map((para, index) => {
              // Check if paragraph contains bullet points (lines starting with "- ")
              const lines = para.split("\n");
              const hasBullets = lines.some((line) => line.trim().startsWith("- "));
              
              if (hasBullets) {
                return (
                  <ul key={index} className="project-detail-bullets">
                    {lines
                      .filter((line) => line.trim().startsWith("- "))
                      .map((line, bulletIndex) => (
                        <li key={bulletIndex}>
                          {line.trim().substring(2)}
                        </li>
                      ))}
                  </ul>
                );
              }
              return <p key={index}>{para}</p>;
            })}
          </div>
        )}

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

          {youtubeEmbedUrl && (
            <div className="project-detail-video">
              <h2 className="project-detail-video-title">Demo Video</h2>
              <div className="project-detail-video-frame">
                <iframe
                  src={youtubeEmbedUrl}
                  title={`${project.title} demo video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
