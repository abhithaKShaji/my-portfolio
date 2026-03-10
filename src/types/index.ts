export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  [category: string]: Skill[];
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  color: string;
  gradient: string;
  icon: any;
  live: string;
  github: string;
  year: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  desc: string;
  color: string;
}

export interface Stat {
  value: number;
  label: string;
  suffix: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: any;
}
