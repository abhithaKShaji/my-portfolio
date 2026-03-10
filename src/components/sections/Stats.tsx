/*import React from "react";
import { STATS } from "../../data";
import { useInView } from "../../hooks/useInView";
import { AnimatedNumber } from "../ui/AnimatedNumber";

export const Stats: React.FC = () => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        background: "#0d1220",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
          textAlign: "center",
        }}
      >
        {STATS.map(({ value, label, suffix }) => (
          <div key={label}>
            <div
              style={{
                fontSize: 42,
                fontWeight: 800,
                color: "#00ff87",
                fontFamily: "'DM Mono'",
              }}
            >
              <AnimatedNumber value={value} inView={inView} />
              {suffix}
            </div>
            <div style={{ fontSize: 14, color: "#64748b", marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};*/
