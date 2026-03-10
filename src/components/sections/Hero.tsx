import React from "react";
import { HERO_ROLES, TECH_ORBIT, SOCIAL_LINKS } from "../../data";
import { useTypewriter } from "../../hooks/useTypewriter";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const typed = useTypewriter(HERO_ROLES);

  return (
    <section
      id="Home"
      className="mesh-bg grid-pattern"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 68 }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* Left — Text */}
        <div style={{ animation: "fadeUp 0.8s ease forwards" }}>
          {/* Status badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0,255,135,0.08)",
              border: "1px solid rgba(0,255,135,0.2)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#00ff87",
                display: "inline-block",
                animation: "pulse-ring 1.5s infinite",
              }}
            />
            <span style={{ fontFamily: "'DM Mono'", fontSize: 12, color: "#00ff87", letterSpacing: 1 }}>
              AVAILABLE FOR WORK
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
            Hi, I'm <span className="gradient-text">Abhitha K Shaji</span>
          </h1>

          {/* Typewriter */}
          <div
            style={{
              fontSize: "clamp(18px, 3vw, 26px)",
              fontWeight: 600,
              color: "#60a5fa",
              marginBottom: 24,
              fontFamily: "'DM Mono'",
              minHeight: 40,
            }}
          >
            &gt; {typed}
            <span style={{ animation: "pulse-ring 1s infinite", opacity: 0.8 }}>|</span>
          </div>

          <p style={{ fontSize: 17, color: "#94a3b8", lineHeight: 1.8, marginBottom: 36, maxWidth: 500 }}>
            I craft high-performance web applications using the MERN stack. Passionate about clean
            architecture, scalable APIs, and pixel perfect UIs.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() => onNavigate("Projects")}
              style={{
                background: "linear-gradient(135deg, #00ff87, #00d4aa)",
                color: "#080c14",
                padding: "14px 32px",
                borderRadius: 8,
                border: "none",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 0 30px rgba(0,255,135,0.3)",
                transition: "all 0.3s",
              }}
            >
              View Projects →
            </button>
            <button
              onClick={() => onNavigate("Contact")}
              style={{
                background: "transparent",
                color: "#e2e8f0",
                padding: "14px 32px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", gap: 20, marginTop: 36 }}>
            {SOCIAL_LINKS.map(({ label, href, icon:Icon }) => (
              <a
                key={label}
                href={href}
                style={{ color: "#64748b", fontSize: 22, transition: "color 0.2s", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#00ff87")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#64748b")}
              >
                {Icon && <Icon size={24}  />}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Orbit Visual */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="animate-float" style={{ position: "relative", width: 340, height: 340 }}>
            {/* Pulse rings */}
            <div
              style={{
                position: "absolute",
                inset: -20,
                borderRadius: "50%",
                border: "1px solid rgba(0,255,135,0.15)",
                animation: "pulse-ring 3s ease-out infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: -40,
                borderRadius: "50%",
                border: "1px solid rgba(96,165,250,0.1)",
                animation: "pulse-ring 3s 1.5s ease-out infinite",
              }}
            />

            {/* Avatar */}
            <div
              style={{
                width: 340,
                height: 340,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00ff87, #60a5fa, #a78bfa)",
                padding: 3,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#0d1627",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 80 }}>👨‍💻</span>
                <span style={{ fontFamily: "'DM Mono'", fontSize: 12, color: "#00ff87", letterSpacing: 2 }}>
                  MERN STACK
                </span>
              </div>
            </div>

            {/* Orbiting Tech Badges */}
            {TECH_ORBIT.map(({ icon, label, angle, dist, color }) => {
              const rad = (angle * Math.PI) / 180;
              const x = 170 + dist * Math.cos(rad) - 28;
              const y = 170 + dist * Math.sin(rad) - 28;
              return (
                <div
                  key={label}
                  style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: 56,
                    height: 56,
                    borderRadius: 12,
                    background: "#111827",
                    border: `1px solid ${color}33`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                    boxShadow: `0 0 20px ${color}22`,
                    gap: 2,
                  }}
                >
                  {icon}
                  <span style={{ fontSize: 8, color, fontFamily: "'DM Mono'", letterSpacing: 0.5 }}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
