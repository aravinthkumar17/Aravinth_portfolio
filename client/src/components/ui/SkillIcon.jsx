import { skillIcons } from '../../data/skillIcons.js';

export default function SkillIcon({ name }) {
  const icon = skillIcons[name];
  if (!icon) return null;

  if (icon.img) {
    return <img src={icon.img} alt="" className="skill-icon skill-icon--raster" />;
  }

  return (
    <svg
      className="skill-icon"
      viewBox={icon.viewBox}
      style={icon.mono ? undefined : { '--skill-icon-color': `#${icon.hex}` }}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
