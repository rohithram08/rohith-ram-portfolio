import type { DeveloperInfo } from '@/types';
import portraitImage from '@/assets/rohith-portrait.jpg';

export const developerInfo: DeveloperInfo = {
  name: 'Rohith Ram H',
  tagline: 'Full-Stack Software Developer & Data Analyst',
  heroIntroduction: 'Building production-grade web applications and data-driven solutions. Experienced in Python, FastAPI, React, and AWS — with a track record of shipping real products used by real people.',
  biography: `Full-Stack Software Developer with a B.E. in Computer Science (Top 20%, CGPA 8.16/10). Experienced in building and deploying production-grade web applications using Python, FastAPI, React, Node.js, and AWS.

Proficient in REST API development, microservices architecture, and cloud-based automation — with hands-on internship experience across software development and data analytics. JLPT N4 certified and pursuing N3, combining strong technical skills with a global mindset.`,

  approach: `I believe in writing clean, maintainable code and building solutions that make a real impact. Whether it's developing full-stack applications, designing cloud architectures, or analysing data — I focus on delivering quality results with attention to detail.`,

  skills: {
    languages: ['Python', 'SQL', 'Java'],
    toolsFrameworks: [
      'FastAPI', 'React', 'Node.js', 'LangChain', 'Pydantic',
      'NumPy', 'Pandas', 'scikit-learn', 'OpenCV',
      'AWS Lambda', 'Amazon Connect', 'Amazon Lex', 'CloudWatch',
      'Vercel', 'Git', 'GitHub', 'REST APIs', 'Microservices',
      'Power BI', 'Streamlit', 'Postman',
    ],
    databases: ['MySQL', 'PostgreSQL'],
    softSkills: [
      'Agile / Sprint delivery',
      'System Design',
      'Problem-Solving',
      'Effective Communication',
      'Teamwork & Collaboration',
      'Attention to Detail',
    ],
  },

  experience: [
    {
      title: 'Software Developer Intern',
      company: 'AVASOFT Software Solutions Pvt. Ltd.',
      location: 'Chennai',
      period: 'Sep 2025 – Feb 2026',
      highlights: [
        'Developed and integrated 3 full-stack e-commerce applications using Python (FastAPI) and React — built REST APIs for product catalogs, cart management, and inventory tracking across 3 Agile sprint cycles, delivered on schedule.',
        'Automated IVR workflows across voice and chat channels using Amazon Connect and Amazon Lex, reducing manual call-routing configuration from ~2 hours/day to zero.',
        'Streamlined 3+ ITSM incident workflow categories via ServiceNow client scripts, reducing manual ticket-handling steps by 40% per resolution cycle.',
      ],
    },
    {
      title: 'Data Analyst Intern',
      company: 'The Ramco Cements Pvt. Ltd.',
      location: 'Chennai',
      period: 'Jan 2025 – Feb 2025',
      highlights: [
        'Queried and analysed data across 3 supply chain functions (logistics, warehousing, geo-tracking) using SQL, uncovering inventory patterns that directly supported procurement planning decisions.',
        'Developed 2 interactive Power BI dashboards tracking 10+ operational KPIs, enabling stakeholders to monitor real-time stock levels and reducing data-to-decision turnaround time.',
      ],
    },
  ],

  education: {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'PERI Institute of Technology (Anna University)',
    location: 'Chennai',
    period: 'Sep 2022 – Apr 2026',
    cgpa: '8.16/10 · Top 20%',
    relevantCourses: [
      'Data Structures & Algorithms',
      'DBMS',
      'Machine Learning',
      'Operating Systems',
      'Software Engineering',
      'Computer Networks',
    ],
  },

  achievements: [
    'JLPT N4 Certified – Japanese Language Proficiency Test (Dec 2023); actively pursuing N3',
    'NAT-N5 Certified – Japanese Language Assessment',
    'NPTEL – Data Structures and Algorithms with Java, IIT Madras (Mar 2025)',
    'Unstop Talent Park 2025 – Pre-Finalist (national-level competition)',
    'Participated in 3 Hackathons and 5+ Technical Symposiums',
    '5+ Online Course Certificates across data science and cloud domains',
  ],

  location: 'Chennai, India',
  email: 'rohithramharibabu@gmail.com',
  phone: '+91 90436 30691',
  availability: 'Open to full-time roles in Software Development & Data Engineering — willing to relocate anywhere',

  socialLinks: {
    github: 'https://github.com/rohithram08',
    linkedin: 'https://www.linkedin.com/in/rohithram-haribabu',
  },

  portraitImage,
};