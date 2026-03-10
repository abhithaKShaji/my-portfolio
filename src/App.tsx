import React, { useState } from "react";
import { GLOBAL_STYLES } from "./styles/globals";

// Layout
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

// Sections
import { Hero } from "./components/sections/Hero";
//import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
//import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("Home");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div
      style={{
        fontFamily: "'Sora', 'DM Sans', sans-serif",
        background: "#080c14",
        color: "#e2e8f0",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Inject global styles */}
      <style>{GLOBAL_STYLES}</style>

      <Navbar active={activeSection} onNavigate={scrollTo} />

      <main>
        <Hero onNavigate={scrollTo} />
        {/* <Stats /> */}
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
