import { profile, stats } from '../../data/resume.js';

const LINKS = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#xira', label: 'Xira' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const featuredStats = stats.slice(0, 2);

export default function Footer() {
  return (
    <footer className="footer-dark">
      <div className="x-container--wide">
        <div className="footer-dark__grid">
          <div>
            <h2 className="footer-dark__heading">
              Building responsive, <em>accessible interfaces.</em>
            </h2>

            <span className="footer-dark__status">
              <span className="footer-dark__status-dot" aria-hidden="true" />
              Open to junior/mid front-end roles
            </span>

            <p className="footer-dark__email">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>

            
            
          </div>

          <div>
          
            <div className="footer-dark__stats">
              {featuredStats.map((stat) => (
                <span className="footer-dark__stat" key={stat.label}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </span>
              ))}
            </div>

            <address>
              <p>{profile.location}</p>
              <p>
                <span className="icon" aria-hidden="true">
                  ✉
                </span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
              <p>
                <span className="icon" aria-hidden="true">
                  ☎
                </span>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
              </p>
            </address>
          </div>
          
        </div>

        <div className="footer-dark__bottom">
        
          <span>
            © {new Date().getFullYear()}  All rights reserved.
          </span>
          <a href="#top" className="footer-dark__credit">
            Developed by <img src="/logo_white_bgTransperent.png" alt="" className="footer-dark__credit-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
