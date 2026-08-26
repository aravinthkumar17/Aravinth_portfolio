import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import { profile } from '../../data/resume.js';

export default function About() {
  return (
    <section id="about" className="x-section" aria-labelledby="about-heading">
      <div className="x-container--wide x-stack" style={{ '--stack-gap': 'var(--space-lg)' }}>
        <SectionHeading id="about-heading" eyebrow="01 — About" title="Front-end developer, systems thinker" />
        <Reveal delay={0.1} className="x-stack" style={{ '--stack-gap': 'var(--space-md)' }}>
          <p className="about__summary">{profile.summary}</p>
          <div className="x-cluster">
            <span className="x-badge">{profile.location}</span>
            <span className="x-badge">{profile.email}</span>
            <span className="x-badge">{profile.phone}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
