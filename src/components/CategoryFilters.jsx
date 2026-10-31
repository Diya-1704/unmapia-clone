import { useState } from 'react';
import { categories } from '../data/destinations';

export default function CategoryFilters() {
  const [active, setActive] = useState(null);

  return (
    <section className="filters-section" id="categories">
      <div className="filters-header">
        <span className="filters-eyebrow">OR BY KIND OF PLACE</span>
      </div>

      <ul className="filters-row">
        {categories.map((c) => {
          const isActive = active === c.id;
          return (
            <li key={c.id}>
              <button
                type="button"
                className={`filter-pill ${isActive ? 'is-active' : ''}`}
                onClick={() => setActive(isActive ? null : c.id)}
              >
                <span className="pill-label">{c.label.toUpperCase()}</span>
                <span className="pill-count">{c.count}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}