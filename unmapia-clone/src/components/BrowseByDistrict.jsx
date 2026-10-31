import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { districts } from '../data/districts';

export default function BrowseByDistrict() {
  const [activeDistrict, setActiveDistrict] = useState(null);

  return (
    <motion.section
      className="browse-stage"
      id="browse-by-district"
      initial={{ opacity: 0, y: 74 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby="district-heading"
    >
      <div className="district-section-inner">
        <div className="lower-section-meta">
          <span>03 — BROWSE BY DISTRICT</span>
          <span>{String(districts.length).padStart(2, '0')} DISTRICTS IN VIEW</span>
        </div>

        <h2 className="district-heading" id="district-heading">
          Start from a district, end up<br className="district-heading-break" /> somewhere <em>unmapped.</em>
        </h2>

        <div className="district-list-wrap" onMouseLeave={() => setActiveDistrict(null)}>
          <div className="district-list" role="list" aria-label="Browse districts">
            {districts.map((district, index) => (
              <button
                type="button"
                className={`district-row ${activeDistrict?.id === district.id ? 'is-hovered' : ''}`}
                key={district.id}
                role="listitem"
                onMouseEnter={() => setActiveDistrict({ ...district, index })}
                onFocus={() => setActiveDistrict({ ...district, index })}
                onBlur={() => setActiveDistrict(null)}
                onClick={() => setActiveDistrict({ ...district, index })}
                aria-label={`${district.name}, ${district.places} sample places`}
              >
                <span className="district-name">{district.name}</span>
                <span className="district-details">
                  <span className="district-coordinates">{district.coordinates}</span>
                  <span className="district-place-count">{district.places} PLACES</span>
                  <ArrowUpRight className="district-arrow" size={22} strokeWidth={1.7} />
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeDistrict && (
              <motion.figure
                className="district-hover-preview"
                key={activeDistrict.id}
                style={{ '--preview-index': activeDistrict.index }}
                initial={{ opacity: 0, scale: 0.94, y: 12, rotate: 1.5 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -8 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <img src={activeDistrict.image} alt={activeDistrict.imageAlt} loading="lazy" />
                <figcaption>
                  <span>{activeDistrict.name}</span>
                  <small>{activeDistrict.coordinates}</small>
                </figcaption>
              </motion.figure>
            )}
          </AnimatePresence>
        </div>

        <p className="district-footnote">Move through the list. Find a place you did not know you were looking for.</p>
      </div>
    </motion.section>
  );
}
