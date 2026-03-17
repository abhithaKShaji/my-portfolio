import React, { useEffect, useState } from "react";
import { HERO_ROLES, SOCIAL_LINKS } from "../../data";
import { useTypewriter } from "../../hooks/useTypewriter";
import profile from "../../../assets/Abhitha.jpeg"

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
          padding: isMobile
            ? "40px 16px"
            : isTablet
            ? "60px 32px"
            : "80px 24px",
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
      ? "clamp(32px, 5vw, 48px)"
      : "clamp(32px, 4vw, 52px)", // 🔥 reduced desktop size
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: 16,
    whiteSpace: "nowrap", // ✅ prevents breaking
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
            <span style={{ animation: "pulse-ring 1s infinite" }}>|</span>
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

        {/* Right — Profile Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: isDesktop ? 1 : -1,
          }}
        >
          <div
            className="animate-float"
            style={{
              position: "relative",
              width: isMobile ? 220 : isTablet ? 280 : 340,
              height: isMobile ? 220 : isTablet ? 280 : 340,
              borderRadius: "50%",
              padding: 4,
              background:
                "linear-gradient(135deg, #00ff87, #60a5fa, #a78bfa)",
              boxShadow: "0 0 40px rgba(0,255,135,0.25)",
            }}
          >
            {/* Glow rings */}
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

            {/* Profile Image */}
            <img
              src={profile} // 👉 replace with your image
              alt="Abhitha K Shaji"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center-top",
                background: "#0d1627",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};