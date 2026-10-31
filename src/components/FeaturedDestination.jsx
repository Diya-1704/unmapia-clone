import { ArrowUpRight } from "lucide-react";

export default function FeaturedDestination() {
  return (
    <section className="featured-section" id="plan">
      <div className="section-label">THE EDITOR'S PICK</div>
      <div className="featured-card">
        <img
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=85"
          alt="Beautiful natural landscape"
        />
        <div className="featured-overlay">
          <span>FEATURED DESTINATION</span>
          <h2>Take the road<br />less travelled.</h2>
          <p>Discover a different side of India.</p>
          <a href="#states">
            EXPLORE DESTINATIONS <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
