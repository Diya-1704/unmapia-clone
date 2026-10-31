import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

// isDarkMode ને પ્રોપ્સ તરીકે લઈએ છીએ
export default function BrowseByDistrict({ isDarkMode }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX + 40); 
    mouseY.set(e.clientY - 200); 
  };

  // થીમ મુજબના કલર્સ
  const colors = {
    bg: isDarkMode ? "#111111" : "#f5f1e8", // ડાર્કમાં કાળું
    text: isDarkMode ? "#f5f1e8" : "#241d18", // ડાર્કમાં સફેદ
    muted: isDarkMode ? "#888888" : "#777067", // નાના લખાણ માટે
    border: isDarkMode ? "#333333" : "#dcd6ca", // લાઈન માટે
    hover: isDarkMode ? "#d37450" : "#1a3b2b", // હોવર કરતાં નારંગી કે લીલો
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      style={{ 
        padding: "80px 5vw", 
        backgroundColor: colors.bg, 
        position: "relative", 
        overflow: "hidden",
        transition: "background-color 0.4s ease"
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        
        <p style={{ fontFamily: "monospace", fontSize: "12px", letterSpacing: "2px", color: colors.muted, marginBottom: "40px", textTransform: "uppercase" }}>
          03 — Browse by District
        </p>
        
        <h2 style={{ 
          fontFamily: "Georgia, 'Times New Roman', serif", 
          fontSize: "clamp(40px, 5vw, 75px)", 
          lineHeight: 1.1, 
          color: colors.text, 
          fontWeight: 500, 
          letterSpacing: "-1.5px", 
          marginBottom: "60px", 
          maxWidth: "900px",
          transition: "color 0.4s ease"
        }}>
          Start from a district, end up <br /> somewhere unmapped.
        </h2>

        <div style={{ position: "relative" }}>
          {districts.map((district, index) => (
            <div
              key={district.name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "35px 0",
                borderBottom: `1px solid ${colors.border}`, // બોર્ડર કલર ડાયનેમિક
                cursor: "pointer",
                position: "relative",
                zIndex: 2,
                transition: "border-color 0.4s ease"
              }}
            >
              <h3 style={{ 
                fontFamily: "Georgia, 'Times New Roman', serif", 
                fontSize: "clamp(40px, 5vw, 70px)", 
                color: hoveredIndex === index ? colors.hover : colors.text, // હોવર કલર ડાયનેમિક
                margin: 0, 
                transition: "color 0.3s ease", 
                fontWeight: 500,
                letterSpacing: "-1px"
              }}>
                {district.name}
              </h3>
              
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "40px", 
                fontFamily: "monospace", 
                fontSize: "13px", 
                color: colors.muted, 
                letterSpacing: "1px",
                transition: "color 0.4s ease"
              }}>
                <span>{district.lat} {district.lng}</span>
                <span>{district.places} PLACES</span>
                <ArrowUpRight size={20} color={colors.text} strokeWidth={1.5} />
              </div>
            </div>
          ))}

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
                  x: smoothX,
                  y: smoothY,
                  width: "320px",
                  height: "420px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
                  zIndex: 999,
                  pointerEvents: "none",
                  backgroundColor: colors.bg, // ડાર્ક મોડમાં પણ ઇમેજની પાછળ કાળું જ દેખાય
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