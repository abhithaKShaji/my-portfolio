import React, { useState } from "react";
import { SKILLS } from "../../data";
import { useInView } from "../../hooks/useInView";
import { SectionLabel } from "../ui/SectionLabel";

export const Skills: React.FC = () => {
  const [skillTab, setSkillTab] = useState<string>("Frontend");
  const [ref, inView] = useInView();

  return (
    <section id="Skills" ref={ref} style={{ padding: "100px 24px", background: "#080c14" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <SectionLabel center>Skills &amp; Expertise</SectionLabel>
          <h2 style={{ fontSize: 42, fontWeight: 800 }}>
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 50, flexWrap: "wrap" }}>
          {Object.keys(SKILLS).map((tab) => (
            <button
              key={tab}
              onClick={() => setSkillTab(tab)}
              style={{
                padding: "10px 24px",
                borderRadius: 8,
                border: `1px solid ${skillTab === tab ? "#00ff87" : "rgba(255,255,255,0.1)"}`,
                background: skillTab === tab ? "rgba(0,255,135,0.1)" : "transparent",
                color: skillTab === tab ? "#00ff87" : "#64748b",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s",
                fontFamily: "inherit",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {SKILLS[skillTab].map(({ name, level, icon }, i) => (
            <div
              key={name}
              style={{
                padding: "20px 24px",
                background: "#0d1220",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.06)",
                animation: `fadeUp 0.5s ${i * 0.07}s ease forwards`,
                opacity: 0,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <span style={{ fontWeight: 600, fontSize: 15 }}>{name}</span>
                </div>
                <span style={{ fontFamily: "'DM Mono'", fontSize: 13, color: "#00ff87" }}>
                  {level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div style={{ background: "#1e293b", borderRadius: 100, height: 6, overflow: "hidden" }}>
                <div
                  className="skill-bar"
                  style={{
                    width: inView ? `${level}%` : "0%",
                    height: "100%",
                    borderRadius: 100,
                    background: "linear-gradient(90deg, #00ff87, #60a5fa)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
