/**
 * Core TypeScript interfaces for Rohith Ram H's Developer Portfolio
 */

export type ProjectCategory = 'fullstack' | 'data-analytics' | 'cloud' | 'computer-vision' | 'ai';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  techStack: string[];
  highlights: string[];
  slug: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface DeveloperInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  skills: {
    languages: string[];
    toolsFrameworks: string[];
    databases: string[];
    softSkills: string[];
  };
  experience: {
    title: string;
    company: string;
    location: string;
    period: string;
    highlights: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
    relevantCourses: string[];
  };
  achievements: string[];
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'collaboration' | 'freelance' | 'fulltime' | 'other';
  message: string;
  timestamp: Date;
}
