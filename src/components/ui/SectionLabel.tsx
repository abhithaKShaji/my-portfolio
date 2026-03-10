import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  center?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children, center }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 16,
      ...(center ? { justifyContent: "center", width: "100%" } : {}),
    }}
  >
    <span
      style={{
        width: 24,
        height: 2,
        background: "#00ff87",
        display: "inline-block",
        borderRadius: 2,
      }}
    />
    <span
      style={{
        fontFamily: "'DM Mono'",
        fontSize: 12,
        color: "#00ff87",
        letterSpacing: 2,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
    <span
      style={{
        width: 24,
        height: 2,
        background: "#00ff87",
        display: "inline-block",
        borderRadius: 2,
      }}
    />
  </div>
);
