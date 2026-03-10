import React, { useState } from "react";
import { NAV_LINKS } from "../../data";

interface NavbarProps {
  active: string;
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ active, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (link: string) => {
    onNavigate(link);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(8,12,20,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,255,135,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 18,
            color: "#00ff87",
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          &lt;<span style={{ color: "#60a5fa" }}>AKS</span>/&gt;
        </div>

        {/* Desktop Links */}
        <div
          style={{ display: "flex", gap: 32, alignItems: "center" }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className={`nav-link ${active === l ? "active" : ""}`}
              style={{
                background: "none",
                border: "none",
                color: active === l ? "#00ff87" : "#94a3b8",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                letterSpacing: 0.5,
                transition: "color 0.2s",
                fontFamily: "inherit",
              }}
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => handleNav("Contact")}
            style={{
              background: "linear-gradient(135deg, #00ff87, #00d4aa)",
              color: "#080c14",
              padding: "8px 20px",
              borderRadius: 6,
              border: "none",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: 0.5,
            }}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#00ff87",
            fontSize: 24,
            cursor: "pointer",
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "#0d1220",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            borderTop: "1px solid rgba(0,255,135,0.1)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              style={{
                background: "none",
                border: "none",
                color: active === l ? "#00ff87" : "#94a3b8",
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
