import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { experience } from '../../data/resume.js';

export default function Experience() {
  return (
    <section id="experience" className="x-section" aria-labelledby="experience-heading">
      <div className="x-container--wide x-stack" style={{ '--stack-gap': 'var(--space-xl)' }}>
        <SectionHeading id="experience-heading" eyebrow="02 — Experience" title="Where I've been building" />

        <ol className="x-stack experience__list" style={{ '--stack-gap': 'var(--space-lg)' }}>
          {experience.map((job, i) => (
            <Reveal as="li" key={job.id} delay={i * 0.08} className="experience__item">
              <span aria-hidden="true" className={`experience__marker ${job.current ? 'experience__marker--current' : ''}`} />
              <div className="x-cluster experience__header">
                <h3 className="experience__role">{job.role}</h3>
                <span className="x-badge x-badge--accent">
                  {job.start} – {job.end}
                </span>
              </div>
              <p className="experience__meta">
                {job.company} · {job.location}
              </p>
              <ul className="x-stack experience__points" style={{ '--stack-gap': '0.5rem' }}>
                {job.points.map((point) => (
                  <li key={point} className="experience__point">
                    <span aria-hidden="true" className="experience__point-mark">
                      —
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
