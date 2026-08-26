import { motion, useReducedMotion } from 'framer-motion';
import { profile, stats } from '../../data/resume.js';
import { resumeDownloadUrl } from '../../lib/api.js';
import RotatingBadge from '../ui/RotatingBadge.jsx';

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="top" className="x-section hero">
      <div className="x-container--wide">
        <div className="hero-grid">
          <div className="x-stack x-stack--start" style={{ '--stack-gap': 'var(--space-lg)' }}>
            <motion.h1
              className="hero__headline"
              initial={prefersReduced ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Anyone can ship a screen. I build ones that <span className="x-accent-text">feel inevitable.</span>
            </motion.h1>

            <motion.p
              className="hero__lead"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              className="x-stack x-stack--start"
              style={{ '--stack-gap': 'var(--space-xs)' }}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="x-cluster">
                <a href="#contact" className="x-btn x-btn--primary">
                  Get in touch
                </a>
                <a href="#projects" className="x-btn hero__secondary-btn">
                  See the work 
                </a>
              </div>
              <span className="hero__micro">
                Open to junior/mid roles ·{' '}
                <a href={resumeDownloadUrl()} download>
                  download resume
                </a>
              </span>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={prefersReduced ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/my_photo.png" alt={profile.name} className="hero-visual__photo" />
            <div className="hero-visual__badge">
              <RotatingBadge />
            </div>
          </motion.div>
        </div>

        <motion.dl
          className="hero-stats"
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stats__item">
              <dd>{stat.value}</dd>
              <dt>{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
