import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { projects } from '../../data/resume.js';

export default function Projects() {
  const [openId, setOpenId] = useState(null);
  const prefersReduced = useReducedMotion();

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <section id="projects" className="x-section" aria-labelledby="projects-heading">
      <div className="x-container--wide x-stack" style={{ '--stack-gap': 'var(--space-xl)' }}>
        <SectionHeading
          id="projects-heading"
          eyebrow="04 — Selected work"
          title="Nine domains, one shipped standard"
          description="From accessibility-first nonprofits to a Dubai tech company and an international motorcycle racer — expand a row for details."
        />

        <div className="x-index-list">
          {projects.map((project, i) => {
            const isOpen = openId === project.id;
            const panelId = `project-panel-${project.id}`;

            const body = (
              <div className="x-index-row__body x-stack" style={{ '--stack-gap': 'var(--space-sm)' }}>
                <p className="projects__description">{project.description}</p>
                <ul className="x-stack" style={{ '--stack-gap': '0.4rem' }}>
                  {project.points.map((point) => (
                    <li key={point} className="projects__point">
                      <span aria-hidden="true" className="projects__point-mark">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="x-cluster projects__footer">
                  <div className="x-cluster">
                    {project.tags.map((tag) => (
                      <span key={tag} className="x-badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="projects__link">
                      Visit site ↗
                    </a>
                  )}
                </div>
              </div>
            );

            return (
              <Reveal
                as="div"
                key={project.id}
                delay={Math.min(i * 0.04, 0.3)}
                className={`x-index-row${isOpen ? ' x-index-row--open' : ''}`}
              >
                <button
                  type="button"
                  className="x-index-row__summary"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(project.id)}
                >
                  <span className="x-index-row__num" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="x-index-row__name">{project.name}</span>
                  <span className="x-index-row__domain">{project.domain}</span>
                  <span className="x-index-row__marker" aria-hidden="true">
                    +
                  </span>
                </button>

                {prefersReduced ? (
                  isOpen && (
                    <div id={panelId} role="region">
                      {body}
                    </div>
                  )
                ) : (
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        {body}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
