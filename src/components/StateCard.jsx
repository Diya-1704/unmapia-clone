
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function StateCard({ state, onClick }) {
  return (
    <motion.article
      className="state-card"
      whileHover={{ y: -8 }}
      onClick={() => onClick(state)}
    >
      <img src={state.image} alt={state.name} loading="lazy" />
      <div className="state-card-overlay">
        <span>{state.category} · {state.places} PLACES</span>
        <h3>{state.name}</h3>
        <p>{state.description}</p>
        <ArrowUpRight className="card-arrow" />
      </div>
    </motion.article>
  );
}
