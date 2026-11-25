import { CheckCircle2, Code2, ExternalLink } from 'lucide-react';
import type { ProjectItem } from '../data/portfolio';
import { handleCardPointerMove } from '../utils/spotlight';

interface ProjectCardProps {
  project: ProjectItem;
  spotlight?: boolean;
}

export function ProjectCard({ project, spotlight = false }: ProjectCardProps) {
  const isGold = project.accent === 'gold';

  return (
    <article
      className={`card spotlight-card project-card ${spotlight ? 'project-card-spotlight' : ''} ${
        isGold ? 'card-gold' : 'card-emerald'
      }`}
      onPointerMove={handleCardPointerMove}
    >
      <div className="browser-chrome">
        <div className="chrome-left">
          <span className="chrome-dots" aria-hidden="true">
            <span className="chrome-dot" />
            <span className="chrome-dot" />
            <span className="chrome-dot" />
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="chrome-domain chrome-domain-link"
            aria-label={`Open ${project.title} live site (${project.domain})`}
          >
            <span>{project.domain}</span>
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
        <span className={`badge-pill ${isGold ? 'badge-gold' : 'badge-emerald'}`}>
          {project.badge}
        </span>
      </div>

      <div className={`project-body ${spotlight ? 'project-body-spotlight' : ''}`}>
        <div className="spotlight-main">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-tagline">{project.tagline}</p>
          {spotlight && <p className="spotlight-desc">{project.description}</p>}

          <ul className="project-highlights">
            {project.highlights.map((item) => (
              <li key={item} className="project-highlight-item">
                <CheckCircle2
                  size={18}
                  className={`highlight-icon ${isGold ? 'highlight-icon-gold' : 'highlight-icon-emerald'}`}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={spotlight ? 'spotlight-aside' : ''}>
          <div className="tag-row" aria-label="Technology stack">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="tech-tag"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="project-actions">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${isGold ? 'btn-gold' : 'btn-primary'}`}
            >
              <span>{project.ctaLabel}</span>
              <ExternalLink size={16} className="icon-glide" aria-hidden="true" />
            </a>

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Code2 size={16} aria-hidden="true" />
                <span>Source</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
