import Reveal from '../ui/Reveal.jsx';
import { xira } from '../../data/resume.js';

export default function XiraSpotlight() {
  return (
    <section id="xira" className="x-section xira-spotlight" aria-labelledby="xira-heading">
      <div className="x-container--wide">
        <div className="x-stack" style={{ '--stack-gap': 'var(--space-lg)' }}>
          <Reveal className="x-stack" style={{ '--stack-gap': 'var(--space-sm)' }}>
            <span className="x-eyebrow">03 — Flagship project</span>
            <h2 id="xira-heading" className="xira-spotlight__heading">
              I created <span className="x-accent-text">{xira.name}</span>
            </h2>
            <p className="xira-spotlight__description">{xira.description}</p>
            <div className="x-cluster">
              {xira.stack.map((s) => (
                <span className="x-badge" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="x-grid x-grid--3">
            {xira.points.map((point, i) => (
              <div key={point} className="xira-spotlight__point">
                <span className="xira-spotlight__point-num">{String(i + 1).padStart(2, '0')}</span>
                <p className="xira-spotlight__point-text">{point}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="x-sidebar xira-spotlight__meta">
            <div className="x-stack" style={{ '--stack-gap': 'var(--space-xs)' }}>
              <h3 className="xira-spotlight__kicker">Layout primitives</h3>
              <div className="x-cluster">
                {xira.primitives.map((p) => (
                  <span className="x-badge x-badge--accent" key={p}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div className="x-stack" style={{ '--stack-gap': 'var(--space-xs)' }}>
              <h3 className="xira-spotlight__kicker">CLI workflow</h3>
              <div className="x-cluster xira-spotlight__cli">
                {xira.cli.map((cmd, i) => (
                  <span key={cmd}>
                    <code>xira {cmd}</code>
                    {i < xira.cli.length - 1 && <span className="xira-spotlight__cli-sep"> · </span>}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
