import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const statistics = [
  { label: 'PLACES WRITTEN UP', value: 3116, display: '3116' },
  { label: 'DISTRICTS', value: 637, display: '637' },
  { label: 'STATES & TERRITORIES', value: 36, display: '36' },
  { label: 'KINDS OF DETOUR', value: 9, display: '09' },
];

function CountUp({ value, display }) {
  const elementRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    let frame = 0;
    let hasStarted = false;
    let observer;

    const start = () => {
      if (hasStarted) return;
      hasStarted = true;
      const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
      if (reducedMotion) {
        setCount(value);
        return;
      }

      const duration = 1750;
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          start();
          observer?.disconnect();
        }
      }, { threshold: 0.25 });
      observer.observe(element);
    } else {
      start();
    }

    return () => {
      observer?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value]);

  const formatted = value === 9 && count === 9 ? display : String(count);
  return <span ref={elementRef} className="stat-number" aria-label={display}>{formatted}</span>;
}

export default function AnimatedStats() {
  return (
    <section className="stats-section" id="unmapia-statistics" aria-labelledby="stats-heading">
      <div className="stats-inner">
        <div className="lower-section-meta">
          <span id="stats-heading">04 — SO FAR</span>
          <span>THE COUNTRY, IN NUMBERS</span>
        </div>

        <div className="stats-grid">
          {statistics.map((stat, index) => (
            <motion.div
              className="stat-item"
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.09 }}
            >
              <span className="stat-label">{stat.label}</span>
              <CountUp value={stat.value} display={stat.display} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
