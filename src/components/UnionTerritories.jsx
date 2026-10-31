import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { unionTerritories } from '../data/destinations';

export default function UnionTerritories() {
  return (
    <section className="ut-section" id="union-territories">
      <header className="ut-header">
        <span className="ut-eyebrow">UNION TERRITORIES</span>
      </header>
      <div className="ut-divider" />
      <div className="ut-count-header">
        <span>{unionTerritories.length}</span>
      </div>

      <div className="ut-grid">
        {unionTerritories.map((ut, i) => (
          <motion.a
            key={ut.id}
            href={`#${ut.id}`}
            className="ut-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            {/* Background Image */}
            <img src={ut.image} alt={ut.name} loading="lazy" className="ut-card-img" />
            
            {/* Dark Gradient Overlay */}
            <div className="ut-card-overlay" />
            
            {/* Content */}
            <div className="ut-card-content">
              <div className="ut-card-top">
                <h3 className="ut-card-title">{ut.name}</h3>
                <div className="ut-card-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="ut-card-bottom">
                <span>{ut.places} PLACES</span>
                <span>{ut.districts} DISTRICTS</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}