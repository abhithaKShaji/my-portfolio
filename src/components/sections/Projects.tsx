import React from "react";
import { PROJECTS } from "../../data";
import { SectionLabel } from "../ui/SectionLabel";
import { Project } from "../../types";

const ProjectCard: React.FC<Project> = ({ title, desc, tags, color, icon: Icon, live, github }) => (
  
  <div
    className="card-hover"
    style={{
      background: "#0d1220",
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.07)",
      overflow: "hidden",
      cursor: "pointer",
    }}
  >
    {/* Card Header */}
    <div style={{ padding: "28px 28px 0", background: `linear-gradient(135deg, ${color}15, transparent)` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 12,
            background: `${color}20`,
            border: `1px solid ${color}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
          }}
        >
          {Icon && <Icon size={24} color={color} />}
        </div>
        <span style={{ fontFamily: "'DM Mono'", fontSize: 12, color: "#475569" }}></span>
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: "#f1f5f9" }}>{title}</h3>
      <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{desc}</p>
    </div>

    {/* Card Footer */}
    <div style={{ padding: "16px 28px 24px" }}>
      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {tags.map((tag) => (
          <span
            key={tag}
            className="tag"
            style={{
              fontSize: 11,
              padding: "4px 10px",
              borderRadius: 100,
              background: `${color}15`,
              color,
              border: `1px solid ${color}30`,
              letterSpacing: 0.5,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: 12 }}>
        <a
          href={live}
          style={{
            flex: 1,
            textAlign: "center",
            padding: "10px",
            borderRadius: 8,
            background: `${color}20`,
            color,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            border: `1px solid ${color}30`,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.background = `${color}35`)}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.background = `${color}20`)}
        >
          Live Demo ↗
        </a>
        <a
          href={github}
          style={{
            flex: 1,
            textAlign: "center",
            padding: "10px",
            borderRadius: 8,
            background: "transparent",
            color: "#64748b",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.1)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.target as HTMLElement;
            el.style.color = "#e2e8f0";
            el.style.borderColor = "rgba(255,255,255,0.3)";
          }}
          onMouseLeave={(e) => {
            const el = e.target as HTMLElement;
            el.style.color = "#64748b";
            el.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          GitHub →
        </a>
      </div>
    </div>
  </div>
);

export const Projects: React.FC = () => (
  <section id="Projects" style={{ padding: "100px 24px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <SectionLabel center>Portfolio</SectionLabel>
        <h2 style={{ fontSize: 42, fontWeight: 800 }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 24,
        }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);
