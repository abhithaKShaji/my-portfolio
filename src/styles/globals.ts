export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #080c14; }
  ::-webkit-scrollbar-thumb { background: #00ff87; border-radius: 2px; }

  .glow-text { text-shadow: 0 0 40px rgba(0,255,135,0.4); }

  .card-hover { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
  .card-hover:hover { transform: translateY(-6px); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-12px); }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
  }
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50%       { background-position: 100% 50%; }
  }

  .animate-fadeUp  { animation: fadeUp 0.7s ease forwards; }
  .animate-float   { animation: float 4s ease-in-out infinite; }

  .gradient-text {
    background: linear-gradient(135deg, #00ff87, #60a5fa, #a78bfa);
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-shift 4s ease infinite;
  }

  .skill-bar { transition: width 1.2s cubic-bezier(0.4,0,0.2,1); }

  .nav-link { position: relative; }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 2px;
    background: #00ff87;
    transition: width 0.3s ease;
  }
  .nav-link:hover::after,
  .nav-link.active::after { width: 100%; }

  .mesh-bg {
    background:
      radial-gradient(ellipse at 20% 50%, rgba(0,255,135,0.06) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(96,165,250,0.06) 0%, transparent 60%),
      radial-gradient(ellipse at 50% 80%, rgba(167,139,250,0.06) 0%, transparent 60%);
  }

  .grid-pattern {
    background-image:
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .border-glow {
    box-shadow: 0 0 0 1px rgba(0,255,135,0.2), inset 0 0 30px rgba(0,255,135,0.02);
  }

  .tag { font-family: 'DM Mono', monospace; }

  @media (max-width: 768px) {
    .hidden-mobile { display: none !important; }
    .mobile-menu-btn { display: block !important; }
  }
`;
