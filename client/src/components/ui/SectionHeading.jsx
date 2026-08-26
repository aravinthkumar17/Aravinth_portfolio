import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <Reveal className="x-stack section-heading" style={{ '--stack-gap': 'var(--space-sm)' }}>
      {eyebrow && <span className="x-eyebrow">{eyebrow}</span>}
      <h2 id={id} className="x-heading">
        {title}
      </h2>
      {description && <p className="section-heading__description">{description}</p>}
    </Reveal>
  );
}
