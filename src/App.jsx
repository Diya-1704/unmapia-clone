
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BrowseByDistrict from "./components/BrowseByDistrict";
import AnimatedStats from "./components/AnimatedStats";
import FooterSection from "./components/Footer";

import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  MapPin,
  Compass,
} from "lucide-react";

const states = [
  { name: "Uttar Pradesh", count: 142, districts: 75, image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85" },
  { name: "Madhya Pradesh", count: 118, districts: 55, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85" },
  { name: "Tamil Nadu", count: 126, districts: 38, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=85" },
  { name: "Himachal Pradesh", count: 84, districts: 12, image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=85" },
  { name: "Kerala", count: 96, districts: 14, image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=85" },
  { name: "Uttarakhand", count: 82, districts: 13, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85" },
  { name: "West Bengal", count: 92, districts: 23, image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=900&q=85" },
  { name: "Odisha", count: 68, districts: 30, image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85" },
  { name: "Gujarat", count: 102, districts: 33, image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=900&q=85" },
  { name: "Andhra Pradesh", count: 76, districts: 26, image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=85" },
  { name: "Arunachal Pradesh", count: 38, districts: 28, image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85" },
  { name: "Assam", count: 64, districts: 35, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85" },
  { name: "Bihar", count: 58, districts: 38, image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=900&q=85" },
  { name: "Meghalaya", count: 42, districts: 12, image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85" },
  { name: "Haryana", count: 45, districts: 22, image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85" },
  { name: "Manipur", count: 31, districts: 16, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85" },
  { name: "Goa", count: 54, districts: 2, image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85" },
  { name: "Mizoram", count: 28, districts: 11, image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85" },
];


const territories = [
  {
    name: "Jammu and Kashmir",
    count: 57,
    districts: 8,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Delhi (NCT)",
    count: 38,
    districts: 7,
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    count: 31,
    districts: 4,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Ladakh",
    count: 20,
    districts: 2,
    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Andaman and Nicobar Islands",
    count: 16,
    districts: 5,
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Puducherry",
    count: 13,
    districts: 6,
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Chandigarh",
    count: 11,
    districts: 3,
    image:
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Lakshadweep",
    count: 11,
    districts: 3,
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=85",
  },
];


const categories = [
  "Nature & Wildlife",
  "Historical Place",
  "Spiritual Place",
  "Aesthetic Café",
  "Miscellaneous",
  "Offbeat Spot",
  "Authentic Food",
  "Trekking Spot",
  "Hill Station",
];

const photos = {
  hero: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2200&q=90",
  featured: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=90",
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

function TopographicLines() {
  return (
    <svg className="topo-lines" viewBox="0 0 500 500" fill="none">
      {Array.from({ length: 18 }, (_, i) => (
        <motion.path
          key={i}
          d={`M ${-100 + i * 13} ${80 + i * 8}
              C ${100 + i * 10} ${-80 + i * 7},
                ${150 + i * 9} ${300 + i * 6},
                ${600 - i * 4} ${180 + i * 10}`}
          stroke="currentColor"
          strokeWidth=".7"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.65 }}
          transition={{ duration: 1.8, delay: i * 0.045 }}
        />
      ))}
    </svg>
  );
}

function IntroLoader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1900);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="intro-loader"
      exit={{ opacity: 0, scale: 1.025 }}
      transition={{ duration: 0.7 }}
    >
      <TopographicLines />

      <div className="intro-brand">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Compass size={44} strokeWidth={1.2} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Unmapia
        </motion.h1>

        <p>100 — ACROSS INDIA</p>
      </div>
    </motion.div>
  );
}

function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationIndex, setLocationIndex] = useState(0);

  const locations = ["KERALA", "GUJARAT", "RAJASTHAN", "SIKKIM", "GOA"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setLocationIndex((i) => (i + 1) % locations.length),
      2500
    );

    return () => clearInterval(timer);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a
        className="brand"
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          goTo("home");
        }}
      >
        <span className="brand-icon">
          <MapPin size={22} />
        </span>

        <span>unmapia</span>
      </a>

      <nav className="desktop-nav">
        <button onClick={() => goTo("states")}>
          EXPLORE <span>2526</span>
        </button>

        <button onClick={() => goTo("categories")}>
          PLAN A TRIP
        </button>

        <span className="location-label">
          <span className="live-dot" />
          {locations[locationIndex]} · INDIA
        </span>

        <button onClick={() => alert("Sign-in page can be connected here.")}>
          SIGN IN
        </button>

        <button
          className="icon-button"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X /> : <Menu />}
        <span>MENU</span>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <button onClick={() => goTo("states")}>
              Explore destinations
            </button>

            <button onClick={() => goTo("featured")}>
              Today's pick
            </button>

            <button onClick={() => goTo("categories")}>
              Browse categories
            </button>

            <button onClick={() => setDark(!dark)}>
              Toggle theme
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url("${photos.hero}")` }}
    >
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
              delayChildren: 0.15,
            },
          },
        }}
      >
        <motion.p className="eyebrow light" variants={fadeUp}>
          FIELD NOTES FROM ACROSS INDIA
        </motion.p>

        <motion.span className="hero-coordinates" variants={fadeUp}>
          12.42° N &nbsp; 75.19° E
        </motion.span>

        <motion.h1 variants={fadeUp}>
          Places worth
          <br />
          the <em>detour.</em>
        </motion.h1>

        <motion.p className="hero-description" variants={fadeUp}>
          Offbeat spots, forts, treks and honest food across
          26 states and territories of India, picked and
          written up district by district.
        </motion.p>

        <motion.button
          className="hero-button"
          onClick={() =>
            document.getElementById("states")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          variants={fadeUp}
        >
          FIND YOUR SOMEWHERE <ArrowRight size={17} />
        </motion.button>
      </motion.div>

      <span className="hero-index">01 / INDIA, UNFILTERED</span>
      <span className="hero-scroll">SCROLL TO WANDER ↓</span>
    </section>
  );
}

function CategoryMarquee() {
  const items = [...categories, ...categories];

  return (
    <section
      className="marquee-section"
      aria-label="Explore place categories"
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <button
            key={`${item}-${i}`}
            className="marquee-item"
            onClick={() => {
              document.getElementById("categories")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {item} <span>✳</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function FeaturedDestination() {
  return (
    <section className="featured section-wrap" id="featured">
      <div className="section-meta">
        <span>01 — TODAY'S PICK</span>
        <span>12.42° N &nbsp; 75.19° E</span>
      </div>

      <div className="featured-grid">
        <motion.div
          className="featured-image image-hover"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={photos.featured}
            alt="Green landscape in Kerala, India"
            loading="lazy"
          />

          <span className="image-tag">KERALA, INDIA</span>
        </motion.div>

        <motion.div
          className="featured-copy"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="outline-tag">AUTHENTIC FOOD</span>

          <h2>
            Nileshwaram<span>.</span>
          </h2>

          <p className="featured-subtitle">Town / heritage</p>
          <p className="featured-location">KASARAGOD · KERALA</p>

          <p className="featured-description">
            A slower side of the Malabar coast. Discover the
            landscapes, local flavours, and hidden stories that
            make this corner of Kerala worth the journey.
          </p>

          <button
            className="green-button"
            onClick={() =>
              alert("Destination story can be added here.")
            }
          >
            Read the story <ArrowUpRight size={17} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function StateCard({ place, index, onSelect }) {
  return (
    <motion.button
      className="state-card"
      onClick={() => onSelect(place)}
      style={{ "--card-image": `url("${place.image}")` }}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.07,
      }}
    >
      <span className="card-arrow">
        <ArrowUpRight size={20} />
      </span>

      <div className="card-content">
        <span className="card-meta">
          {place.count} PLACES · {place.districts} DISTRICTS
        </span>

        <h3>{place.name}</h3>
      </div>
    </motion.button>
  );
}

function StateGrid() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = states.filter((state) =>
    state.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="states-section section-wrap" id="states">
      <div className="section-meta">
        <span>02 — BROWSE BY STATE</span>
        <span>FIND YOUR OWN WAY</span>
      </div>

      <div className="section-heading-row">
        <h2>
          2526 places,
          <br />
          26 states and territories<span>.</span>
        </h2>

        <p>
          Big landscapes. Small detours.
          <br />
          A whole country waiting to be found.
        </p>
      </div>

      <div className="state-tools">
        <span>THE COUNTRY, DISTRICT BY DISTRICT</span>

        <input
          type="search"
          placeholder="Find a state..."
          aria-label="Search states"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="state-grid">
        {filtered.map((place, index) => (
          <StateCard
            key={place.name}
            place={place}
            index={index}
            onSelect={setSelected}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="destination-modal"
              initial={{ y: 20, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X />
              </button>

              <span className="eyebrow">EXPLORE INDIA</span>

              <h2>{selected.name}</h2>

              <p>
                {selected.count} sample places · {selected.districts} districts
              </p>

              <p>
                Discover the landscapes, culture and local experiences
                of {selected.name}.
              </p>

              <button
                className="green-button"
                onClick={() => setSelected(null)}
              >
                Continue exploring <ArrowRight size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


function UnionTerritories() {
  return (
    <section
      className="territories-section section-wrap"
      id="union-territories"
    >
      <div className="section-meta">
        <span>03 — UNION TERRITORIES</span>
        <span>08 LITTLE WORLDS</span>
      </div>

      <div className="territory-grid">
        {territories.map((place, i) => (
          <motion.button
            key={place.name}
            type="button"
            className="territory-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            onClick={() =>
              alert(`Explore ${place.name} — destination page coming soon.`)
            }
          >
            <img
              className="territory-image"
              src={place.image}
              alt={place.name}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.visibility = "hidden";
              }}
            />

            <span className="territory-overlay" />

            <span className="territory-number">
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className="territory-arrow">
              <ArrowUpRight size={20} />
            </span>

            <div className="territory-content">
              <h3>{place.name}</h3>

              <div className="territory-meta">
                <span>{place.count} PLACES</span>
                <span>{place.districts} DISTRICTS</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function CategoryFilters() {
  const [active, setActive] = useState("");

  return (
    <section className="categories-section section-wrap" id="categories">
      <div className="section-meta">
        <span>04 — FIND YOUR KIND OF PLACE</span>
        <span>FOLLOW YOUR CURIOSITY</span>
      </div>

      <h2>
        Or by kind of <em>place.</em>
      </h2>

      <div className="category-pills">
        {categories.map((category, i) => (
          <button
            key={category}
            className={`category-pill ${
              active === category ? "active" : ""
            }`}
            onClick={() =>
              setActive(active === category ? "" : category)
            }
          >
            {category}{" "}
            <span>
              {[84, 112, 76, 42, 68, 53, 91, 37, 49][i]}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <motion.p
          className="filter-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Exploring: <strong>{active}</strong> — selected category.
          Connect this selection to your destination dataset to show
          matching places.

          <button onClick={() => setActive("")}>Clear</button>
        </motion.p>
      )}
    </section>
  );
}

// Main App
export default function App() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark-theme" : "app"}>
      <AnimatePresence>
        {loading && (
          <IntroLoader
            key="intro"
            onComplete={() => setLoading(false)}
          />
        )}
      </AnimatePresence>

      <Navbar dark={dark} setDark={setDark} />

      <main>
        {/* Existing homepage sections - kept unchanged */}
        <HeroSection />
        <CategoryMarquee />
        <FeaturedDestination />
        <StateGrid />
        <UnionTerritories />
        <CategoryFilters />

        {/* Newly added lower homepage sections */}
        <BrowseByDistrict />
        <AnimatedStats />
      </main>

      {/* Premium footer */}
      <FooterSection dark={dark} setDark={setDark} />
    </div>
  );
}
