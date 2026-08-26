import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { education, languages } from '../../data/resume.js';

export default function Education() {
  return (
    <section id="education" className="x-section" aria-labelledby="education-heading">
      <div className="x-container--wide x-stack" style={{ '--stack-gap': 'var(--space-xl)' }}>
        <SectionHeading id="education-heading" eyebrow="06 — Background" title="Education & languages" />
        <Reveal delay={0.1} className="x-stack" style={{ '--stack-gap': 'var(--space-lg)' }}>
          <div className="x-stack" style={{ '--stack-gap': 'var(--space-sm)' }}>
            {education.map((edu) => (
              <div className="x-card" key={edu.school}>
                <div className="x-cluster education__card-header">
                  <h3 className="education__school">{edu.school}</h3>
                  <span className="x-badge x-badge--accent">{edu.year}</span>
                </div>
                <p className="education__degree">{edu.degree}</p>
                <p className="education__detail">
                  {edu.detail} · {edu.location}
                </p>
              </div>
            ))}
          </div>

          <div className="x-cluster">
            {languages.map((lang) => (
              <span className="x-badge" key={lang.name}>
                {lang.name} — {lang.level}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
