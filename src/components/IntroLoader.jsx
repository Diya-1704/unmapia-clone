
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function IntroLoader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="intro-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="intro-loader-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="intro-loader-icon">◉</span>
        <span>Unmapia</span>
      </motion.div>

      <motion.div
        className="intro-loader-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />

      <p>DISCOVER PLACES WORTH THE DETOUR</p>
    </motion.div>
  );
}
