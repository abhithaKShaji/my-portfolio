import React, { useEffect, useState } from "react";
import { HERO_ROLES, TECH_ORBIT, SOCIAL_LINKS } from "../../data";
import { useTypewriter } from "../../hooks/useTypewriter";

interface HeroProps {
  onNavigate: (section: string) => void;
}

// Responsive hook
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const typed = useTypewriter(HERO_ROLES);
  const width = useWindowWidth();

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  // Orbit visual scales down on smaller screens
  const orbitSize = isMobile ? 220 : isTablet ? 280 : 340;
  const orbitCenter = orbitSize / 2;

  return (
    <section
      id="Home"
      className="mesh-bg grid-pattern"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 68,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "40px 16px" : isTablet ? "60px 32px" : "80px 24px",
          display: "grid",
          gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
          gap: isMobile ? 40 : isTablet ? 48 : 60,
          alignItems: "center",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Left — Text */}
        <div
          style={{
            animation: "fadeUp 0.8s ease forwards",
            textAlign: isMobile ? "center" : "left",
          }}
        >
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
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'DM Mono'",
                fontSize: isMobile ? 10 : 12,
                color: "#00ff87",
                letterSpacing: 1,
              }}
            >
              AVAILABLE FOR WORK
            </span>
          </div>

          <h1
            style={{
              fontSize: isMobile
                ? "clamp(28px, 8vw, 40px)"
                : isTablet
                ? "clamp(32px, 5vw, 50px)"
                : "clamp(36px, 5vw, 62px)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Hi, I'm <span className="gradient-text">Abhitha K Shaji</span>
          </h1>

          {/* Typewriter */}
          <div
            style={{
              fontSize: isMobile
                ? "clamp(15px, 4vw, 20px)"
                : isTablet
                ? "clamp(16px, 3vw, 22px)"
                : "clamp(18px, 3vw, 26px)",
              fontWeight: 600,
              color: "#60a5fa",
              marginBottom: 24,
              fontFamily: "'DM Mono'",
              minHeight: isMobile ? 32 : 40,
            }}
          >
            &gt; {typed}
            <span style={{ animation: "pulse-ring 1s infinite", opacity: 0.8 }}>
              |
            </span>
          </div>

          <p
            style={{
              fontSize: isMobile ? 15 : 17,
              color: "#94a3b8",
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: isMobile ? "100%" : 500,
              margin: isMobile ? "0 auto 36px" : "0 0 36px",
            }}
          >
            I craft high-performance web applications using the MERN stack.
            Passionate about clean architecture, scalable APIs, and pixel
            perfect UIs.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <button
              onClick={() => onNavigate("Projects")}
              style={{
                background: "linear-gradient(135deg, #00ff87, #00d4aa)",
                color: "#080c14",
                padding: isMobile ? "12px 24px" : "14px 32px",
                borderRadius: 8,
                border: "none",
                fontSize: isMobile ? 14 : 15,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 0 30px rgba(0,255,135,0.3)",
                transition: "all 0.3s",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? 280 : "none",
              }}
            >
              View Projects →
            </button>
            <button
              onClick={() => onNavigate("Contact")}
              style={{
                background: "transparent",
                color: "#e2e8f0",
                padding: isMobile ? "12px 24px" : "14px 32px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: isMobile ? 14 : 15,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? 280 : "none",
              }}
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop: 36,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                style={{
                  color: "#64748b",
                  fontSize: 22,
                  transition: "color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#00ff87")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#64748b")
                }
              >
                {Icon && <Icon size={isMobile ? 20 : 24} />}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Orbit Visual */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // On mobile/tablet show below text; on desktop show on right
            order: isDesktop ? 1 : -1,
          }}
        >
          <div
            className="animate-float"
            style={{
              position: "relative",
              width: orbitSize,
              height: orbitSize,
              flexShrink: 0,
            }}
          >
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
                width: orbitSize,
                height: orbitSize,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #00ff87, #60a5fa, #a78bfa)",
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
                <span style={{ fontSize: isMobile ? 52 : isTablet ? 64 : 80 }}>
                  👨‍💻
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono'",
                    fontSize: isMobile ? 9 : 12,
                    color: "#00ff87",
                    letterSpacing: 2,
                  }}
                >
                  MERN STACK
                </span>
              </div>
            </div>

            {/* Orbiting Tech Badges — scale distance & size with orbitSize */}
            {TECH_ORBIT.map(({ icon, label, angle, dist, color }) => {
              const scaleFactor = orbitSize / 340;
              const scaledDist = dist * scaleFactor;
              const badgeSize = isMobile ? 40 : isTablet ? 48 : 56;
              const rad = (angle * Math.PI) / 180;
              const x = orbitCenter + scaledDist * Math.cos(rad) - badgeSize / 2;
              const y = orbitCenter + scaledDist * Math.sin(rad) - badgeSize / 2;

              return (
                <div
                  key={label}
                  style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: badgeSize,
                    height: badgeSize,
                    borderRadius: isMobile ? 8 : 12,
                    background: "#111827",
                    border: `1px solid ${color}33`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isMobile ? 13 : 18,
                    boxShadow: `0 0 20px ${color}22`,
                    gap: 2,
                  }}
                >
                  {icon}
                  <span
                    style={{
                      fontSize: isMobile ? 6 : 8,
                      color,
                      fontFamily: "'DM Mono'",
                      letterSpacing: 0.5,
                    }}
                  >
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