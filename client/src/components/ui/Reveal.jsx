import { motion, useReducedMotion as useFramerReducedMotion } from 'framer-motion';

/**
 * Scroll-triggered reveal. Framer Motion already reads
 * prefers-reduced-motion via useReducedMotion, so we collapse to an
 * instant, non-animated mount in that case.
 */
export default function Reveal({ children, delay = 0, y = 24, as = 'div', className, ...rest }) {
  const prefersReduced = useFramerReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (prefersReduced) {
    const Static = as;
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
