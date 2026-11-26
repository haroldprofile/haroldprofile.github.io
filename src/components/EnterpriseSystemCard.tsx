import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronDown, ChevronUp, GitBranch, Layers, Server } from 'lucide-react';
import type { EnterpriseSystemItem } from '../data/portfolio';
import { ITEM, VIEWPORT } from '../motion';
import { handleCardPointerMove } from '../utils/spotlight';
import { RequestFlow } from './RequestFlow';

interface EnterpriseSystemCardProps {
  system: EnterpriseSystemItem;
  staggerIndex?: number;
}

export function EnterpriseSystemCard({ system, staggerIndex = 0 }: EnterpriseSystemCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      className="card card-emerald spotlight-card enterprise-card"
      variants={ITEM}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      custom={staggerIndex}
      onPointerMove={handleCardPointerMove}
    >
      <div className="enterprise-top">
        <span className="badge-pill badge-emerald">{system.badge}</span>
        <span className="pattern-pill">{system.pattern}</span>
      </div>

      <h3 className="project-title">{system.title}</h3>
      <p className="project-tagline">{system.summary}</p>

      <ul className="project-highlights">
        {system.highlights.map((item) => (
          <li key={item} className="project-highlight-item">
            <CheckCircle2
              size={18}
              className="highlight-icon highlight-icon-emerald"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="tag-row" aria-label={`${system.title} tech stack`}>
        {system.stack.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="enterprise-footer">
        <button
          type="button"
          className="btn btn-secondary enterprise-toggle"
          aria-expanded={expanded}
          aria-controls={`arch-${system.id}`}
          onClick={() => setExpanded((prev) => !prev)}
        >
          <Layers size={16} aria-hidden="true" />
          <span>{expanded ? 'Hide Architecture & Modules' : 'Architecture & Modules'}</span>
          {expanded ? (
            <ChevronUp size={16} aria-hidden="true" />
          ) : (
            <ChevronDown size={16} aria-hidden="true" />
          )}
        </button>
      </div>

      {expanded && (
        <div id={`arch-${system.id}`} className="architecture-drawer">
          <div className="arch-group">
            <h4 className="arch-heading">
              <GitBranch size={14} aria-hidden="true" />
              <span>Request Flow</span>
            </h4>
            <RequestFlow steps={system.flow} />
          </div>

          <div className="arch-group">
            <h4 className="arch-heading">
              <Layers size={14} aria-hidden="true" />
              <span>Key Functional Modules</span>
            </h4>
            <ul className="arch-list">
              {system.keyModules.map((mod) => (
                <li key={mod}>{mod}</li>
              ))}
            </ul>
          </div>

          <div className="arch-group">
            <h4 className="arch-heading">
              <Server size={14} aria-hidden="true" />
              <span>Integrations &amp; Deployment</span>
            </h4>
            <ul className="arch-list">
              {system.integrationsOps.map((op) => (
                <li key={op}>{op}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.article>
  );
}
