import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionLabel } from "../ui/SectionLabel";

const CONTACT_META = [
  { icon: "📧", text: "abhithakshaji08@gmail.com" },
  { icon: "📞", text: "+91 6238388210" },
  { icon: "📍", text: "Ernakulam, Kerala" },
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_as2omxq",
        "template_8kvjzhu",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "G781wmzguFigACyg1"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="Contact" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <SectionLabel center>Contact</SectionLabel>

        <h2 style={{ fontSize: 48, fontWeight: 800, marginBottom: 16 }}>
          Let's <span className="gradient-text">Build Together</span>
        </h2>

        <p style={{ color: "#64748b", fontSize: 17, lineHeight: 1.7, marginBottom: 48 }}>
          Have a project in mind or looking for a talented developer? I'm always open to discussing
          new opportunities.
        </p>

        {/* Form */}
        <form
          onSubmit={sendEmail}
          style={{
            background: "#0d1220",
            borderRadius: 20,
            padding: "40px",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: "14px 18px",
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                color: "#e2e8f0",
                fontSize: 15,
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                padding: "14px 18px",
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                color: "#e2e8f0",
                fontSize: 15,
              }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                padding: "14px 18px",
                background: "#111827",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10,
                color: "#e2e8f0",
                fontSize: 15,
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              background: "linear-gradient(135deg, #00ff87, #00d4aa)",
              color: "#080c14",
              borderRadius: 10,
              border: "none",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 0 40px rgba(0,255,135,0.25)",
            }}
          >
            Send Message ✉️
          </button>
        </form>

        {/* Contact Meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            marginTop: 48,
            flexWrap: "wrap",
          }}
        >
          {CONTACT_META.map(({ icon, text }) => (
            <div
              key={text}
              style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 13 }}
            >
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};