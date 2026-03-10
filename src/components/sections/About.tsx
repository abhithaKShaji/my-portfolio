import React from "react";
import { ABOUT_INFO, ABOUT_STRENGTHS } from "../../data";
import { SectionLabel } from "../ui/SectionLabel";

export const About: React.FC = () => (
  <section id="About" style={{ padding: "100px 24px" }}>
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
      }}
    >
      {/* Left — Text */}
      <div>
        <SectionLabel>About Me</SectionLabel>
        <h2 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.2, marginBottom: 24 }}>
          Turning ideas into <span className="gradient-text">scalable reality</span>
        </h2>
        <p style={{ color: "#94a3b8", lineHeight: 1.9, marginBottom: 20 }}>
          I am a self-taught web developer with hands-on experience building full-stack applications using Node.js and React.js. As part of my learning journey, I built an e-commerce application from scratch, gaining practical experience in both frontend and backend development. I am a passionate MERN stack developer focused on writing scalable, maintainable code and building efficient web applications that solve real-world problems. 
          I am driven, inquisitive, analytical, and committed to continuous learning and improvement.
        </p>
        <p style={{ color: "#94a3b8", lineHeight: 1.9, marginBottom: 32 }}>
          From architecting RESTful APIs and microservices to crafting pixel-perfect React UIs — I
          love every layer of the stack.
        </p>

        {/* Strengths Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {ABOUT_STRENGTHS.map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 16px",
                background: "rgba(0,255,135,0.04)",
                border: "1px solid rgba(0,255,135,0.1)",
                borderRadius: 8,
              }}
            >
              <span style={{ fontSize: 18 }}>{icon}</span>
              <span style={{ fontSize: 14, color: "#cbd5e1", fontWeight: 500 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Info Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {ABOUT_INFO.map(({ label, value, highlight }) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 20px",
              background: "#0d1220",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ color: "#64748b", fontFamily: "'DM Mono'", fontSize: 13 }}>
              {label}:
            </span>
            <span
              style={{ color: highlight ? "#00ff87" : "#e2e8f0", fontWeight: 600, fontSize: 14 }}
            >
              {value}
            </span>
          </div>
        ))}

        {/*<a
          href="#"
          style={{
            display: "block",
            textAlign: "center",
            background: "transparent",
            color: "#00ff87",
            padding: "14px",
            borderRadius: 8,
            border: "1px solid rgba(0,255,135,0.3)",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.3s",
            marginTop: 4,
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "rgba(0,255,135,0.08)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "transparent")
          }
        >
          📄 Download Resume
        </a>*/}
      </div>
    </div>
  </section>
);
