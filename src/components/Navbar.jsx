
import { useState } from "react";
import { Compass, Sparkles, UserRound, Sun, Menu } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`site-navbar ${darkMode ? "dark-nav" : ""}`}>
      <a className="nav-logo" href="/">
        <span className="nav-logo-icon">◉</span>
        <span>Unmapia</span>
      </a>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <a href="#explore">
          <Compass size={15} />
          EXPLORE <small>2526 PLACES</small>
        </a>

        <a href="#plan">
          <Sparkles size={15} />
          PLAN A TRIP
        </a>
      </nav>

      <div className="nav-actions">
        <span className="nav-time">INDIA · IST</span>

        <button type="button" onClick={() => alert("Sign in coming soon")}>
          <UserRound size={15} /> SIGN IN
        </button>

        <button
          type="button"
          aria-label="Toggle theme"
          onClick={() => setDarkMode(!darkMode)}
        >
          <Sun size={18} />
        </button>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={18} /> MENU
        </button>
      </div>
    </header>
  );
}

