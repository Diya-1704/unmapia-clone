import { ArrowUpRight } from "lucide-react";

const states = [
  { name: "Rajasthan", image: "photo-1477587458883-47145ed94245" },
  { name: "Himachal Pradesh", image: "photo-1626621341517-bbf3d9990a23" },
  { name: "Gujarat", image: "photo-1514222134-b57cbb8ce073" },
  { name: "Kerala", image: "photo-1602216056096-3b40cc0c9944" },
  { name: "Uttarakhand", image: "photo-1464822759023-fed622ff2c3b" },
  { name: "Goa", image: "photo-1512343879784-a960bf40e7f2" },
];

export default function StateGrid() {
  return (
    <section className="states-section" id="states">
      <div className="section-label">EXPLORE INDIA BY STATE</div>
      <div className="states-grid">
        {states.map((state) => (
          <a className="state-card" href="#explore" key={state.name}>
            <img
              src={`https://images.unsplash.com/${state.image}?auto=format&fit=crop&w=700&q=80`}
              alt={state.name}
              loading="lazy"
            />
            <div className="state-card-content">
              <h3>{state.name}</h3>
              <ArrowUpRight size={22} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
