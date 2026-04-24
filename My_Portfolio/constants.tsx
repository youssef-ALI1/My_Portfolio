
import { Project, Experience, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'healthcare-ai',
    title: 'Healthcare Disease Prediction System',
    description: 'AI-powered diagnostic assistant supporting multi-disease screening.',
    problem: 'Limited access to immediate medical screening tools and language barriers in Arabic-speaking regions.',
    solution: 'An AI platform predicting Heart, Breast, and Skin cancer risk using Python/Flask, featuring seamless English/Arabic multi-lingual support.',
    techStack: ['Python', 'Flask', 'Machine Learning', 'HTML/CSS', 'i18n'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'parking-sensor',
    title: 'Parking Sensor Simulation',
    description: 'Embedded ultrasonic monitoring system for precision distance tracking.',
    problem: 'Need for high-accuracy distance monitoring in automotive safety systems during simulation phases.',
    solution: 'Developed an Embedded C firmware integrated with Proteus simulation, utilizing ultrasonic sensors for real-time distance calculation.',
    techStack: ['Embedded C', 'Proteus', 'Microcontrollers', 'Ultrasonic Sensors'],
    imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=800'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'iti',
    company: 'ITI (Information Technology Institute)',
    role: 'Software Development Intern',
    period: 'Summer 2023',
    description: 'Intensive training on full-stack web development, focusing on modern architectures and professional coding standards.'
  },
  {
    id: 'suez-oil',
    company: 'SUEZ OIL COMPANY',
    role: 'Engineering Intern',
    period: '2022',
    description: 'Gained practical experience in industrial systems and technical infrastructure, bridging the gap between theoretical engineering and field operations.'
  },
  {
    id: 'mcit',
    company: 'MCIT',
    role: 'Technical Intern',
    period: '2021',
    description: 'Explored digital transformation initiatives and the application of modern communication technologies in public infrastructure.'
  }
];

export const SKILL_MATRIX: SkillCategory[] = [
  {
    category: 'Front-End',
    skills: ['React', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Back-End',
    skills: ['.NET Core', 'Python', 'Flask', 'REST APIs', 'SQL Server']
  },
  {
    category: 'Mobile',
    skills: ['Flutter', 'Dart', 'State Management']
  },
  {
    category: 'Embedded Systems',
    skills: ['Embedded C', 'Microcontrollers (AVR/ARM)', 'Proteus', 'Circuit Design']
  }
];

export const CONTACT_LINKS = {
  github: 'https://github.com/sofa314',
  linkedin: 'https://linkedin.com/in/youssefali', // Placeholder
  email: 'mailto:youssef.ali@example.com' // Placeholder
};
