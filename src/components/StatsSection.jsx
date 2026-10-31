import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const statsData = [
  { label: 'PLACES WRITTEN UP', value: 3116 },
  { label: 'DISTRICTS', value: 637 },
  { label: 'STATES & TERRITORIES', value: 36 },
  { label: 'KINDS OF DETOUR', value: 9 }, // 09 દેખાડવા માટે
];

function Counter({ from, to }) {
  const nodeRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const node = nodeRef.current;
    if (node) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (value) => {
          setDisplayValue(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [from, to]);

  return <span ref={nodeRef}>{displayValue.toString().padStart(to < 10 ? 2 : 0, '0')}</span>;
}

export default function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} style={{ backgroundColor: '#f5f1e8', padding: '100px 5vw', borderTop: '1px solid #dcdcdc' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <p style={{ fontSize: '12px', letterSpacing: '2px', color: '#666', marginBottom: '60px', textTransform: 'uppercase' }}>
          04 — SO FAR
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          {statsData.map((stat, index) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '1.5px', color: '#555', textTransform: 'uppercase', fontWeight: 600 }}>
                {stat.label}
              </p>
              <div style={{ fontSize: '7vw', color: '#111', fontWeight: 600, fontFamily: "'Playfair Display', serif" }}>
                {isInView ? <Counter from={0} to={stat.value} /> : '0'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}