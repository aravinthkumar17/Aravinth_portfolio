import { useId } from 'react';

export default function RotatingBadge() {
  const pathId = useId();

  return (
    <div className="rotating-badge">
      <svg className="rotating-badge__ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id={pathId} d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text fontSize="7.4" letterSpacing="2">
          <textPath href={`#${pathId}`} startOffset="0%">
            FRONT-END DEVELOPER • FRONT-END DEVELOPER •
          </textPath>
        </text>
      </svg>
      <span className="rotating-badge__center" aria-hidden="true">
        <img src="/logo_white_bgTransperent.png" alt="" className="rotating-badge__logo" />
      </span>
    </div>
  );
}
