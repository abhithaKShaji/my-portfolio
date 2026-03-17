import { SkillCategory, Project, Experience, Stat, SocialLink } from "../types";
import { FaShoppingCart, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuConstruction, LuSchool } from "react-icons/lu";
import { MdSell, MdMovie, MdMail } from "react-icons/md";
import pro1 from "../../assets/pro1.png";
import pro2 from "../../assets/pro2.png";
import pro3 from "../../assets/pro3.png";
import pro4 from "../../assets/pro4.png";
import pro5 from "../../assets/pro5.png";
import pro6 from "../../assets/pro6.png";

export const NAV_LINKS: string[] = [
  "Home",
  "About",
  "Skills",
  "Projects",
  //"Experience",
  "Contact",
];

export const SKILLS: SkillCategory = {
  Frontend: [
    { name: "React.js", level: 95, icon: "⚛️" },
    { name: "JavaScript", level: 90, icon: "🔷" },
    { name: "TypeScript", level: 85, icon: "▲" },
    { name: "Tailwind CSS", level: 92, icon: "🎨" },
    { name: "Redux", level: 80, icon: "🔴" }
  ],
  Backend: [
    { name: "Node.js", level: 92, icon: "🟢" },
    { name: "Express.js", level: 90, icon: "🚀" },
    { name: "REST APIs", level: 95, icon: "🔗" }
  ],
  Database: [
    { name: "MongoDB", level: 90, icon: "🍃" },
    { name: "Mongoose", level: 88, icon: "🔧" },
    { name: "Firebase", level: 80, icon: "🔥" }
  ],
  DevOps: [
    { name: "Git & GitHub", level: 95, icon: "🐙" },
  ],
};

export const PROJECTS: Project[] = [
  {
    title: "Shopycart",
    desc: "Full-stack e-commerce platform with product search and filtering, Razorpay payments, real-time inventory, and an admin dashboard, built using MERN stack, JWT authentication, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Razorpay", "Chart.js"],
    color: "#00ff87",
    gradient: "from-emerald-500/20 to-teal-500/10",
    icon: FaShoppingCart,
    live: "https://ecommerceshopycart.netlify.app/",
    github: "https://github.com/abhithaKShaji/E-Commerce-ShopyCart.git",
    thumbnail: {pro1},
    year: "2024",
  }, 
  {
    title: "Walk-in Style",
    desc: "Full-stack e-commerce platform with product search and filtering, Razorpay payments, real-time inventory, and an admin dashboard, built using MERN stack, JWT authentication",
    tags: ["React", "Node.js", "Express", "MongoDB",  "JWT", "Razorpay", "Chart.js"],
    color: "#60a5fa",
    gradient: "from-blue-500/20 to-indigo-500/10",
    icon: FaShoppingCart,
    live: "https://github.com/abhithaKShaji/Ecommerce-Walk-in-Style.git",
    github: "https://github.com/abhithaKShaji/Ecommerce-Walk-in-Style.git",
    thumbnail: {pro2},
    year: "2024",
  },
  {
    title: "Cobuild",
    desc: "Responsive construction landing page, emphasizing clean UI design, responsive layouts, and performance optimization to deliver a smooth user experience across devices.",
    tags: ["React", "Tailwind CSS", "Responsive Design", "Landing Page", "UI Design"],
    color: "#a78bfa",
    gradient: "from-violet-500/20 to-purple-500/10",
    icon: LuConstruction,
    live: "https://brilliant-gumption-4479e4.netlify.app/",
    github: "https://github.com/abhithaKShaji/ConstructionPage.git",
    thumbnail: {pro3},
    year: "2023",
  },
  {
    title: "Olx Clone",
    desc: "OLX-style marketplace application using React.js with Firebase authentication (Google Sign-In) and real-time database to enable users to post, browse, and manage product listings.",
    tags: ["React", "Firebase", "Google Auth", "Firestore", "JavaScript"],
    color: "#fb923c",
    gradient: "from-orange-500/20 to-amber-500/10",
    icon: MdSell,
    live: "https://transcendent-axolotl-14c935.netlify.app/",
    github: "https://github.com/abhithaKShaji/olx-clone.git",
    thumbnail: {pro4},
    year: "2023",
  },
  {
    title: "Netflix Clone",
    desc: "Netflix-style movie streaming UI using React.js with Firebase authentication (Google Sign-In) and a movie API to dynamically fetch and display trending films and categories.",
    tags: ["React", "JavaScript", "Firebase", "Google Auth",  "TMDB API", "Responsive Design"],
    color: "#f472b6",
    gradient: "from-pink-500/20 to-rose-500/10",
    icon: MdMovie,
    live: "https://jocular-boba-7a40df.netlify.app/",
    github: "https://github.com/abhithaKShaji/Netflix-clone.git",
    thumbnail: {pro5},
    year: "2023",
  },
  {
    title: "eStudy",
    desc: "Responsive educational landing page using React.js and Tailwind CSS, featuring a modern UI and optimized layout to showcase courses, features, and call-to-action sections.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Responsive Design", "Landing Page", "UI Design"],
    color: "#34d399",
    gradient: "from-emerald-500/20 to-cyan-500/10",
    icon: LuSchool,
    live: "https://frolicking-kitten-2c1c14.netlify.app/",
    github: "https://github.com/abhithaKShaji/LandingPage.git",
    thumbnail: {pro6},
    year: "2022",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior MERN Stack Developer",
    company: "TechNova Labs",
    period: "2023 – Present",
    desc: "Led a team of 5 engineers building microservices with Node.js. Improved API response time by 60% through Redis caching and database optimization.",
    color: "#00ff87",
  },
  {
    role: "Full Stack Developer",
    company: "Pixelcraft Studio",
    period: "2021 – 2023",
    desc: "Built and maintained 8+ production applications for international clients. Implemented CI/CD pipelines reducing deployment time by 40%.",
    color: "#60a5fa",
  },
  {
    role: "Frontend Developer",
    company: "StartupXYZ",
    period: "2020 – 2021",
    desc: "Developed responsive React applications with complex state management. Migrated legacy codebase to TypeScript improving code reliability by 35%.",
    color: "#a78bfa",
  },
];

export const STATS: Stat[] = [
  { value: 50, label: "Projects Completed", suffix: "+" },
  { value: 4, label: "Years Experience", suffix: "+" },
  { value: 30, label: "Happy Clients", suffix: "+" },
  { value: 99, label: "Uptime Achieved", suffix: "%" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/abhithaKShaji", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhitha-k-shaji", icon: FaLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/abhitha_k_shaji/", icon: FaInstagram },
  { label: "Email", href: "mailto:abhithakshaji08@gmail.com", icon: MdMail },
];

export const ABOUT_INFO = [
  { label: "Name", value: "Abhitha K Shaji" },
  { label: "Role", value: "MERN Stack Developer" },
  { label: "Location", value: "Ernakulam, Kerala" },
  { label: "Availability", value: "Open to Opportunities", highlight: true },
  { label: "Education", value: "BTech. Electronics and Communication Engineering" },
];

export const ABOUT_STRENGTHS = [
  { icon: "🎯", text: "Problem Solving" },
  { icon: "🏗️", text: "System Design" },
  { icon: "⚡", text: "Performance Optimization" },
  { icon: "🔒", text: "Security Best Practices" },
];

export const HERO_ROLES: string[] = [
  "MERN Stack Developer",
  "Frontend Developer",
  "React Developer"
];

export const TECH_ORBIT = [
  { icon: "⚛️", label: "React", angle: 0, dist: 170, color: "#61dafb" },
  { icon: "🟢", label: "Node", angle: 72, dist: 170, color: "#68a063" },
  { icon: "🍃", label: "Mongo", angle: 144, dist: 170, color: "#4DB33D" },
  { icon: "🔷", label: "TS", angle: 216, dist: 170, color: "#3178c6" },
  { icon: "🚀", label: "Express", angle: 288, dist: 170, color: "#fff" },
];
