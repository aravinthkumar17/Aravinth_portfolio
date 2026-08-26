import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme.js';
import { useActiveSection } from '../../hooks/useActiveSection.js';
import { profile } from '../../data/resume.js';
import ThemeToggle from '../ui/ThemeToggle.jsx';

const LINKS = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#xira', label: 'Xira', id: 'xira' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export default function PillNav() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const activeId = useActiveSection(LINKS.map((l) => l.id));

  return (
    <>
      <div className="nav-pill-wrap">
        <nav className="nav-pill" aria-label="Primary">
          <a href="#top" className="nav-pill__identity" onClick={() => setOpen(false)}>
            <img className="nav-pill__avatar" src="/favicon.svg" alt="" />
            <span className="nav-pill__id-text">
              <span className="nav-pill__name">{profile.name.split(' ').slice(0, 2).join(' ')}</span>
              <span className="nav-pill__role">{profile.role}</span>
            </span>
          </a>

          {/* <span className="nav-pill__status">
            <span className="nav-pill__status-dot" aria-hidden="true" />
            Available for work
          </span> */}

          <ul className="nav-pill__links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a className="nav-pill__link" href={link.href} aria-current={activeId === link.id ? 'true' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="x-btn x-btn--primary nav-pill__cta">
            Hire me
          </a>

          <button
            type="button"
            className="nav-pill__menu-btn"
            aria-expanded={open}
            aria-controls="pill-nav-dropdown"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>

          {open && (
            <div className="nav-pill__dropdown" id="pill-nav-dropdown">
              {LINKS.map((link) => (
                <a key={link.id} className="nav-pill__link" href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="x-btn x-btn--primary" onClick={() => setOpen(false)}>
                Hire me
              </a>
            </div>
          )}
        </nav>
      </div>

      <div className="nav-corner-icons">
        <a href={`mailto:${profile.email}`} aria-label="Email me">
          <span aria-hidden="true">✉</span>
        </a>
        <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} aria-label="Call me">
          <span aria-hidden="true">☎</span>
        </a>
        <ThemeToggle key={theme} />
      </div>
    </>
  );
}
