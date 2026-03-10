import React, { useEffect, useState } from "react";
import { ABOUT_INFO, ABOUT_STRENGTHS } from "../../data";
import { SectionLabel } from "../ui/SectionLabel";

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

export const About: React.FC = () => {
  const width = useWindowWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  return (
    <section
      id="About"
      style={{
        padding: isMobile ? "60px 16px" : isTablet ? "80px 32px" : "100px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
          gap: isMobile ? 40 : isTablet ? 52 : 80,
          alignItems: "center",
        }}
      >
        {/* Left — Text */}
        <div>
          <SectionLabel>About Me</SectionLabel>
          <h2
            style={{
              fontSize: isMobile ? 28 : isTablet ? 34 : 42,
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Turning ideas into{" "}
            <span className="gradient-text">scalable reality</span>
          </h2>
          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.9,
              marginBottom: 20,
              fontSize: isMobile ? 14 : 15,
            }}
          >
            I am a self-taught web developer with hands-on experience building
            full-stack applications using Node.js and React.js. As part of my
            learning journey, I built an e-commerce application from scratch,
            gaining practical experience in both frontend and backend
            development. I am a passionate MERN stack developer focused on
            writing scalable, maintainable code and building efficient web
            applications that solve real-world problems. I am driven,
            inquisitive, analytical, and committed to continuous learning and
            improvement.
          </p>
          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.9,
              marginBottom: 32,
              fontSize: isMobile ? 14 : 15,
            }}
          >
            From architecting RESTful APIs and microservices to crafting
            pixel-perfect React UIs — I love every layer of the stack.
          </p>

          {/* Strengths Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 12 : 16,
            }}
          >
            {ABOUT_STRENGTHS.map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: isMobile ? "10px 14px" : "12px 16px",
                  background: "rgba(0,255,135,0.04)",
                  border: "1px solid rgba(0,255,135,0.1)",
                  borderRadius: 8,
                }}
              >
                <span style={{ fontSize: isMobile ? 16 : 18, flexShrink: 0 }}>
                  {icon}
                </span>
                <span
                  style={{
                    fontSize: isMobile ? 13 : 14,
                    color: "#cbd5e1",
                    fontWeight: 500,
                  }}
                >
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Info Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 12 : 20 }}>
          {ABOUT_INFO.map(({ label, value, highlight }) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: isMobile ? "12px 16px" : "14px 20px",
                background: "#0d1220",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.06)",
                gap: 12,
                flexWrap: isMobile ? "wrap" : "nowrap",
              }}
            >
              <span
                style={{
                  color: "#64748b",
                  fontFamily: "'DM Mono'",
                  fontSize: isMobile ? 11 : 13,
                  flexShrink: 0,
                }}
              >
                {label}:
              </span>
              <span
                style={{
                  color: highlight ? "#00ff87" : "#e2e8f0",
                  fontWeight: 600,
                  fontSize: isMobile ? 13 : 14,
                  textAlign: "right",
                  wordBreak: "break-word",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};