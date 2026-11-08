import { Project } from "@/data/resumeData";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <>
      <div className="cell s12 label-cell" id="projects">
        <h2>Projects</h2>
        <span className="mono">Examples to replace with your own</span>
      </div>

      {projects.map((project) => (
        <article key={project.id} className="cell s4 card">
          <div className="card-top">
            <span className="mono">{project.category}</span>
            {project.statusLabel && (
              <span className="pill">{project.statusLabel}</span>
            )}
          </div>
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          {project.href ? (
            <a
              href={project.href}
              className="note link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkText || "View Project →"}
            </a>
          ) : (
            <span className="note">
              {project.linkText || "Link: add when published"}
            </span>
          )}
        </article>
      ))}
    </>
  );
}
