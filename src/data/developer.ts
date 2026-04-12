import type { DeveloperInfo } from '@/types';
import portraitImage from '@/assets/rohith-portrait.jpg';

export const developerInfo: DeveloperInfo = {
  name: 'Rohith Ram H',
  tagline: 'Software Developer & Data Enthusiast',
  heroIntroduction: 'Building data-driven solutions and full-stack applications with a passion for clean code and impactful technology.',
  biography: `Computer Science graduate with strong foundations in data analysis, full-stack development, and cloud technologies. Proficient in Python, SQL, and key data science tools, with hands-on internship and project experience applying data-driven solutions.

JLPT N4 certified and studying for N3, combining technical expertise with a global mindset. Passionate about building software that solves real-world problems through clean architecture and thoughtful engineering.`,
  approach: `I believe in writing clean, maintainable code and building solutions that make a real impact. Whether it's developing full-stack applications, designing cloud architectures, or analyzing data — I focus on delivering quality results with attention to detail.`,
  skills: {
    languages: ['Python', 'SQL', 'Java'],
    toolsFrameworks: ['FastAPI', 'React', 'Pydantic', 'AWS (Lambda, Amazon Connect, CloudWatch)', 'ServiceNow', 'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn', 'Power BI', 'OpenCV'],
    databases: ['MySQL', 'PostgreSQL'],
    softSkills: ['Effective Communication', 'Teamwork & Collaboration', 'Problem-Solving', 'Adaptability', 'Time Management', 'Attention to Detail'],
  },
  experience: [
    {
      title: 'Software Developer Intern',
      company: 'AVASOFT Software Solutions Pvt. Ltd.',
      location: 'Chennai',
      period: 'Sep 2025 – Feb 2026',
      highlights: [
        'Developed 3 full-stack e-commerce sites using Python (FastAPI) and React, implementing file I/O and JSON for product catalogs, user carts, and inventory management.',
        'Designed and deployed a cloud-based contact center using Amazon Connect, building custom IVR contact flows and integrating Amazon Lex for AI-driven conversational support.',
        'Learned ServiceNow fundamentals and developed incident forms, client scripts, and basic configurations for IT service workflows.',
      ],
    },
    {
      title: 'Data Analyst Intern',
      company: 'The Ramco Cements Pvt. Ltd.',
      location: 'Chennai',
      period: 'Jan 2025 – Feb 2025',
      highlights: [
        'Observed and supported data analytics workflows in logistics, warehousing, and geo-tracking.',
        'Assisted with data cleaning, validation, and stock monitoring using Power BI.',
      ],
    },
  ],
  education: {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'PERI Institute of Technology',
    location: 'Chennai',
    period: 'Sep 2022 – Apr 2026',
    cgpa: '8.16 (Till 7th Sem)',
    relevantCourses: ['Data Structures', 'Databases', 'Software Engineering'],
  },
  achievements: [
    'Japanese Language Proficiency – JLPT N4 and NAT-5Q Certified, studying JLPT N3',
    'NPTEL – Data Structures and Algorithms with Java (Mar 2025)',
    'Unstop Talent Park 2025 – Pre-Finalist',
    'Participated in 3 hackathons and 5+ symposiums',
    'Completed 5+ Online Courses',
  ],
  location: 'Chennai, India',
  email: 'rohithramharibabu@gmail.com',
  phone: '+91 90436 30691',
  availability: 'Open to opportunities in Data Science, Analytics & Software Development',
  socialLinks: {
    github: 'https://github.com/rohithram08',
    linkedin: 'https://linkedin.com/in/rohithram-haribabu',
  },
  portraitImage,
};
