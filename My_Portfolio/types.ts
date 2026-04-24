
export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  imageUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
