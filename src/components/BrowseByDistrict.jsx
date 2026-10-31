import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// તમારા સ્ક્રીનશોટ મુજબના બધા જ પ્લેસ અને તેમના ફોટા
const districts = [
  { name: "Kolkata", lat: "22.57° N", lng: "88.36° E", places: 38, img: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop" },
  { name: "North Goa", lat: "15.60° N", lng: "74.00° E", places: 36, img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop" },
  { name: "Dehradun", lat: "30.33° N", lng: "78.04° E", places: 32, img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800&auto=format&fit=crop" },
  { name: "Patna", lat: "25.61° N", lng: "85.12° E", places: 30, img: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=800&auto=format&fit=crop" },
  { name: "Shimla", lat: "31.10° N", lng: "77.17° E", places: 30, img: "https://images.unsplash.com/photo-1597074866923-dc058915b2f0?q=80&w=800&auto=format&fit=crop" },
  { name: "East Khasi Hills", lat: "25.40° N", lng: "91.83° E", places: 29, img: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=800&auto=format&fit=crop" },
  { name: "Kullu", lat: "31.96° N", lng: "77.11° E", places: 29, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop" },
  { name: "Kangra", lat: "32.08° N", lng: "76.30° E", places: 25, img: "https://images.unsplash.com/photo-1597074866923-dc058915b2f0?q=80&w=800&auto=format&fit=crop" },
  { name: "Amritsar", lat: "31.64° N", lng: "74.88° E", places: 23, img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800&auto=format&fit=crop" },
  { name: "Chamoli", lat: "30.50° N", lng: "79.62° E", places: 23, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop" },
  { name: "Chennai", lat: "13.08° N", lng: "80.28° E", places: 23, img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop" },
  { name: "Jaipur", lat: "26.92° N", lng: "75.82° E", places: 23, img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800&auto=format&fit=crop" },
];

export default function BrowseByDistrict() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // માઉસની પોઝિશન ટ્રેક કરવા માટે
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // સ્મૂથ એનિમેશન માટે સ્પ્રિંગ ઇફેક્ટ
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // જ્યારે માઉસ મૂવ થાય ત્યારે પોઝિશન અપડેટ કરવી
  const handleMouseMove = (e) => {
    // ફોટો માઉસની જમણી બાજુ અને થોડો ઉપર દેખાય તે માટે ઓફસેટ (Offset)
    mouseX.set(e.clientX + 40); 
    mouseY.set(e.clientY - 200); 
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      style={{ padding: "80px 5vw", backgroundColor: "#f5f1e8", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* ટોપ હેડિંગ */}
        <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "2px", color: "#777067", marginBottom: "40px", textTransform: "uppercase" }}>
          03 — Browse by District
        </p>
        
        {/* મુખ્ય ટાઇટલ (Playfair Display ફોન્ટ જેવો દેખાવ) */}
        <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(40px, 5vw, 75px)", lineHeight: 1.1, color: "#241d18", fontWeight: 500, letterSpacing: "-1.5px", marginBottom: "60px", maxWidth: "900px" }}>
          Start from a district, end up <br /> somewhere unmapped.
        </h2>

        {/* ડિસ્ટ્રિક્ટની લિસ્ટ */}
        <div style={{ position: "relative" }}>
          {districts.map((district, index) => (
            <div
              key={district.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline", // લખાણ નીચેની લાઈન સાથે એલાઇન થાય
                padding: "35px 0",
                borderBottom: "1px solid #dcd6ca", // સ્ક્રીનશોટ મુજબની પાતળી લાઈન
                cursor: "pointer",
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* ડિસ્ટ્રિક્ટનું નામ */}
              <h3 style={{ 
                fontFamily: "Georgia, 'Times New Roman', serif", 
                fontSize: "clamp(40px, 5vw, 70px)", 
                color: hoveredIndex === index ? "#1a3b2b" : "#241d18", 
                margin: 0, 
                transition: "color 0.3s ease", 
                fontWeight: 500,
                letterSpacing: "-1px"
              }}>
                {district.name}
              </h3>
              
              {/* જમણી બાજુની વિગતો (Lat, Long, Places) */}
              <div style={{ display: "flex", alignItems: "center", gap: "40px", fontFamily: "monospace", fontSize: "13px", color: "#777067", letterSpacing: "1px" }}>
                <span>{district.lat} {district.lng}</span>
                <span>{district.places} PLACES</span>
                <ArrowUpRight size={20} color="#241d18" strokeWidth={1.5} />
              </div>
            </div>
          ))}

          {/* માઉસની સાથે ફરતો ફોટો */}
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  x: smoothX, // માઉસની X પોઝિશન
                  y: smoothY, // માઉસની Y પોઝિશન
                  width: "320px",
                  height: "420px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
                  zIndex: 999, // બધાની ઉપર દેખાય
                  pointerEvents: "none", // જેથી માઉસ હોવરમાં બ્લોક ના થાય
                  backgroundColor: "#fff", // બેકગ્રાઉન્ડ સ્પષ્ટ રહે
                }}
              >
                <img
                  src={districts[hoveredIndex].img}
                  alt={districts[hoveredIndex].name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}