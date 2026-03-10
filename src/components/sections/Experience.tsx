/*import React from "react";
import { EXPERIENCE } from "../../data";
import { SectionLabel } from "../ui/SectionLabel";

export const Experience: React.FC = () => (
  <section id="Experience" style={{ padding: "100px 24px", background: "#080c14" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <SectionLabel center>Experience</SectionLabel>
        <h2 style={{ fontSize: 42, fontWeight: 800 }}>
          Work <span className="gradient-text">History</span>
        </h2>
      </div>

      <div style={{ position: "relative" }}> */
        {/* Timeline line */}
       /* <div
          style={{
            position: "absolute",
            left: 24,
            top: 0,
            bottom: 0,
            width: 2,
            background: "linear-gradient(180deg, #00ff87, #60a5fa, #a78bfa)",
            opacity: 0.3,
          }}
        />

        {EXPERIENCE.map(({ role, company, period, desc, color }) => (
          <div
            key={role}
            style={{ display: "flex", gap: 32, marginBottom: 48, paddingLeft: 8 }}
          >*/
            {/* Dot */}
           /* <div style={{ position: "relative", flexShrink: 0 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: `${color}20`,
                  border: `2px solid ${color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  position: "relative",
                }}
              >
                <div
                  style={{ width: 10, height: 10, borderRadius: "50%", background: color }}
                />
              </div>
            </div> */

            {/* Card */}
           /*<div
              style={{
                flex: 1,
                background: "#0d1220",
                borderRadius: 14,
                padding: "24px 28px",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = `${color}30`)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)")
              }
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9" }}>{role}</h3>
                <span style={{ fontFamily: "'DM Mono'", fontSize: 12, color: "#475569" }}>
                  {period}
                </span>
              </div>
              <div
                style={{
                  color,
                  fontFamily: "'DM Mono'",
                  fontSize: 13,
                  marginBottom: 12,
                  fontWeight: 500,
                }}
              >
                {company}
              </div>
              <p style={{ color: "#64748b", lineHeight: 1.7, fontSize: 14 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);*/
