
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const statistics = [
  {
    label: "PLACES WRITTEN UP",
    value: 3116,
    display: "3116",
  },
  {
    label: "DISTRICTS",
    value: 637,
    display: "637",
  },
  {
    label: "STATES & TERRITORIES",
    value: 36,
    display: "36",
  },
  {
    label: "KINDS OF DETOUR",
    value: 9,
    display: "09",
  },
];

function Counter({ value, display, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId;
    const duration = 1800;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(value);
      }
    };

    frameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  const formattedCount =
    value === 9 ? String(count).padStart(2, "0") : count.toString();

  return (
    <span
      style={{
        display: "block",
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: "clamp(52px, 7vw, 100px)",
        lineHeight: 1,
        fontWeight: 400,
        letterSpacing: "-5px",
        color: "var(--ink, #241d18)",
      }}
      aria-label={`${display}`}
    >
      {formattedCount}
    </span>
  );
}

export default function AnimatedStats() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.25,
  });

  return (
    <section
      ref={sectionRef}
      id="unmapia-statistics"
      style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        boxSizing: "border-box",
        padding: "clamp(65px, 8vw, 115px) clamp(24px, 10vw, 165px)",
        background: "var(--paper, #f5f1e9)",
        color: "var(--ink, #241d18)",
        borderRadius: "30px 30px 0 0",
        overflow: "hidden",
      }}
    >
      {/* Section heading */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "15px",
          paddingBottom: "18px",
          borderBottom: "1px solid var(--line, #ded6ca)",
          marginBottom: "45px",
          fontFamily: "monospace",
          fontSize: "12px",
          letterSpacing: "1.5px",
          color: "var(--muted, #777067)",
        }}
      >
        <span>04 — SO FAR</span>
        <span>UNMAPIA / INDIA</span>
      </div>

      {/* Statistics grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "45px 30px",
        }}
      >
        {statistics.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
          >
            <p
              style={{
                margin: "0 0 18px",
                fontFamily: "monospace",
                fontSize: "12px",
                letterSpacing: "1.4px",
                color: "var(--muted, #777067)",
              }}
            >
              {item.label}
            </p>

            <Counter
              value={item.value}
              display={item.display}
              isInView={isInView}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
