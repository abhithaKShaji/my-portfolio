import React from "react";
import { PROJECTS } from "../../data";
import { SectionLabel } from "../ui/SectionLabel";
import { Project } from "../../types";

const ProjectCard: React.FC<Project> = ({
  title,
  desc,
  tags,
  color,
  icon: Icon,
  live,
  github,
  thumbnail,
}) => (
  <div
    className="card-hover"
    style={{
      background: "#0d1220",
      borderRadius: 14,
      border: "1px solid rgba(255,255,255,0.06)",
      overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
  >
    {/* Thumbnail */}
    <div
      style={{
        width: "100%",
        height: 160,
        overflow: "hidden",
      }}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
          transition: "transform 0.4s ease",
        }}
        className="project-img"
      />
    </div>

    {/* Header */}
    <div
      style={{
        padding: "18px 18px 0",
        background: `linear-gradient(135deg, ${color}12, transparent)`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 10,
            background: `${color}20`,
            border: `1px solid ${color}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Icon && <Icon size={20} color={color} />}
        </div>
      </div>

      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 6,
          color: "#f1f5f9",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#64748b",
          fontSize: 13,
          lineHeight: 1.6,
          marginBottom: 14,
        }}
      >
        {desc}
      </p>
    </div>

    {/* Footer */}
    <div style={{ padding: "14px 18px 18px" }}>
      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          marginBottom: 14,
        }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 10,
              padding: "3px 8px",
              borderRadius: 100,
              background: `${color}15`,
              color,
              border: `1px solid ${color}30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 8 }}>
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          style={{
            flex: 1,
            textAlign: "center",
            padding: "8px",
            borderRadius: 6,
            background: `${color}20`,
            color,
            fontSize: 12,
            fontWeight: 600,
            textDecoration: "none",
            border: `1px solid ${color}30`,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget.style.background = `${color}35`))
          }
          onMouseLeave={(e) =>
            ((e.currentTarget.style.background = `${color}20`))
          }
        >
          Live ↗
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          style={{
            flex: 1,
            textAlign: "center",
            padding: "8px",
            borderRadius: 6,
            background: "transparent",
            color: "#64748b",
            fontSize: 12,
            fontWeight: 600,
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.1)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.color = "#e2e8f0";
            el.style.borderColor = "rgba(255,255,255,0.3)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.color = "#64748b";
            el.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          Code →
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

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);