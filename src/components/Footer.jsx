
import React from "react";
import { Sun, Moon } from "lucide-react";

export default function Footer({ dark, setDark }) {
  const isDarkMode = dark;

  const colors = {
    bg: isDarkMode ? "#d37450" : "#1a3b2b",
    text: isDarkMode ? "#111111" : "#f5f1e8",
    border: isDarkMode
      ? "rgba(0,0,0,0.2)"
      : "rgba(245, 241, 232, 0.15)",
    muted: isDarkMode
      ? "rgba(0,0,0,0.6)"
      : "rgba(245, 241, 232, 0.5)",
    lineColor: isDarkMode ? "%23000000" : "%23ffffff",
  };

  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: colors.bg,
        color: colors.text,
        padding: "clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px) 20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
      {/* Background lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: isDarkMode ? 0.08 : 0.15,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,500 C200,400 400,600 600,500 C800,400 900,600 1000,500 M0,600 C200,500 400,700 600,600 C800,500 900,700 1000,600 M0,400 C200,300 400,500 600,400 C800,300 900,500 1000,400' stroke='${colors.lineColor}' stroke-width='1.5' fill='none'/%3E%3Cpath d='M100,200 C300,100 500,300 700,200 C900,100 1000,300 1000,300 M-100,300 C100,200 300,400 500,300 C700,200 800,400 800,400' stroke='${colors.lineColor}' stroke-width='1.5' fill='none'/%3E%3Cpath d='M200,800 C400,700 600,900 800,800 C900,700 1000,900 1000,900 M-100,900 C100,800 300,1000 500,900 C700,800 800,1000 800,1000' stroke='${colors.lineColor}' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Top section */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "40px",
          paddingBottom: "60px",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: "380px" }}>
          <h3
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(24px, 3vw, 34px)",
              lineHeight: 1.3,
              fontWeight: 400,
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Places worth the detour, picked and written up by people who went.
          </h3>
        </div>

        <div
          style={{
            display: "flex",
            gap: "clamp(40px, 8vw, 100px)",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                letterSpacing: "1.5px",
                color: colors.muted,
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              DISTRICTS
            </h4>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "15px",
                fontFamily: "sans-serif",
              }}
            >
              {["Kolkata", "Dehradun", "Shimla", "Kullu"].map((item) => (
                <li
                  key={item}
                  style={{ cursor: "pointer", transition: "opacity 0.2s" }}
                  onMouseOver={(e) => (e.currentTarget.style.opacity = 0.7)}
                  onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: "31px" }}>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "15px",
                fontFamily: "sans-serif",
              }}
            >
              {["North Goa", "Patna", "East Khasi Hills", "Kangra"].map(
                (item) => (
                  <li
                    key={item}
                    style={{
                      cursor: "pointer",
                      transition: "opacity 0.2s",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.opacity = 0.7)
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.opacity = 1)
                    }
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Theme button */}
        <div>
          <h4
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "1.5px",
              color: colors.muted,
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            THEME
          </h4>

          <button
            onClick={() => setDark(!isDarkMode)}
            aria-label="Toggle theme"
            style={{
              background: "transparent",
              border: `1px solid ${colors.muted}`,
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: colors.text,
              transition: "all 0.3s ease",
            }}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {/* Large brand text */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "40px 0 20px",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(80px, 20vw, 280px)",
            lineHeight: 0.8,
            letterSpacing: "-0.04em",
            fontWeight: 700,
            margin: 0,
            color: colors.text,
            whiteSpace: "nowrap",
            transition: "color 0.5s ease",
          }}
        >
          Unmapia
        </h1>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "30px",
          fontSize: "11px",
          fontFamily: "monospace",
          color: colors.muted,
          letterSpacing: "1px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <p style={{ margin: 0 }}>© 2026 UNMAPIA</p>

        <div style={{ display: "flex", gap: "30px" }}>
          <span
            style={{ cursor: "pointer", textTransform: "uppercase" }}
            onMouseOver={(e) => (e.currentTarget.style.color = colors.text)}
            onMouseOut={(e) => (e.currentTarget.style.color = colors.muted)}
          >
            ABOUT
          </span>

          <span
            style={{ cursor: "pointer", textTransform: "uppercase" }}
            onMouseOver={(e) => (e.currentTarget.style.color = colors.text)}
            onMouseOut={(e) => (e.currentTarget.style.color = colors.muted)}
          >
            PRIVACY
          </span>
        </div>

        <p style={{ margin: 0, textTransform: "uppercase" }}>
          FIELD NOTES FROM ACROSS INDIA
        </p>
      </div>
    </footer>
  );
}
