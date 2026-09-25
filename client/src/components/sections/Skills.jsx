import { useId, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import SkillIcon from '../ui/SkillIcon.jsx';
import { skills } from '../../data/resume.js';

const categories = Object.entries(skills);

export default function Skills() {
  const [active, setActive] = useState(0);
  const tabsId = useId();
  const tabRefs = useRef([]);
  const listRef = useRef(null);
  const prefersReduced = useReducedMotion();

  const selectTab = (index) => {
    setActive(index);
    // Pin the chosen tab to the start of the strip so the following tabs stay in view
    const list = listRef.current;
    const tab = tabRefs.current[index];
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    const pad = parseFloat(getComputedStyle(list).paddingLeft) || 0;
    const offset = tab.getBoundingClientRect().left - list.getBoundingClientRect().left - pad;
    list.scrollBy({ left: offset, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  const focusTab = (index) => {
    selectTab(index);
    tabRefs.current[index]?.focus({ preventScroll: true });
  };

  const handleKeyDown = (e, index) => {
    const last = categories.length - 1;
    if (e.key === 'ArrowRight') focusTab(index === last ? 0 : index + 1);
    else if (e.key === 'ArrowLeft') focusTab(index === 0 ? last : index - 1);
    else if (e.key === 'Home') focusTab(0);
    else if (e.key === 'End') focusTab(last);
    else return;
    e.preventDefault();
  };

  return (
    <section id="skills" className="x-section" aria-labelledby="skills-heading">
      <div className="x-container--wide x-stack" style={{ '--stack-gap': 'var(--space-xl)' }}>
        <SectionHeading id="skills-heading" eyebrow="05 — Toolbox" title="Skills & tools" />

        <Reveal as="div" className="skills-tabs">
          <div ref={listRef} className="x-cluster skills-tabs__list" role="tablist" aria-label="Skill categories">
            {categories.map(([category], i) => (
              <button
                key={category}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                id={`${tabsId}-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`${tabsId}-panel-${i}`}
                tabIndex={active === i ? 0 : -1}
                className={`x-btn skills-tabs__tab ${active === i ? 'skills-tabs__tab--active' : 'x-btn--ghost'}`}
                onClick={() => selectTab(i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="skills-tabs__panel-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                id={`${tabsId}-panel-${active}`}
                role="tabpanel"
                aria-labelledby={`${tabsId}-tab-${active}`}
                className="x-cluster skills-tabs__panel"
                initial={prefersReduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {categories[active][1].map((item) => (
                  <span className="x-badge x-badge--accent skills-tabs__badge" key={item}>
                    <SkillIcon name={item} />
                    {item}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
