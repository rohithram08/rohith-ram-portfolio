import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'MAX AI Voice Assistant',
    category: 'ai',
    year: '2025',
    slug: 'max-voice-assistant',
    coverImage: 'https://images.unsplash.com/photo-1589254065878-42c014d82834?auto=format&fit=crop&w=1080&q=80',
    description: 'Python-based voice assistant with 10+ integrated features including speech recognition, text-to-speech, web search, and system automation. Achieved 85% command recognition accuracy in testing.',
    techStack: ['Python', 'SpeechRecognition', 'pyttsx3', 'APIs'],
    githubUrl: 'https://github.com/rohithram08/Max-voice-assistant-',
    highlights: [
      '10+ integrated voice-controlled features',
      '85% command recognition accuracy',
      'Natural language processing for intuitive interaction',
    ],
    images: [
      { id: '1-1', src: 'https://images.unsplash.com/photo-1589254065878-42c014d82834?auto=format&fit=crop&w=1080&q=80', alt: 'Voice assistant interface' },
    ],
  },
  {
    id: '2',
    title: 'PDF Based Chatbot using RAG',
    category: 'ai',
    year: '2025',
    slug: 'pdf-chatbot-rag',
    coverImage: 'https://images.unsplash.com/photo-1677442135136-760c813028c4?auto=format&fit=crop&w=1080&q=80',
    description: 'An intelligent chatbot that leverages Retrieval-Augmented Generation (RAG) to answer questions from uploaded PDF documents. Built with Streamlit for an interactive user experience.',
    techStack: ['Python', 'LangChain', 'Streamlit', 'RAG', 'LLM'],
    liveUrl: 'https://rag-pdf-chatbot-007.streamlit.app/',
    highlights: [
      'Upload and query any PDF document instantly',
      'RAG pipeline for accurate, context-aware answers',
      'Interactive Streamlit-based web interface',
    ],
    images: [
      { id: '2-1', src: 'https://images.unsplash.com/photo-1677442135136-760c813028c4?auto=format&fit=crop&w=1080&q=80', alt: 'PDF Chatbot interface' },
    ],
  },
  {
    id: '3',
    title: 'Real-Time Invisibility Cloak',
    category: 'computer-vision',
    year: '2024',
    slug: 'invisibility-cloak',
    coverImage: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1080&q=80',
    description: 'Computer Vision application using OpenCV to mask specific colors in real-time video feeds, creating an "invisibility cloak" effect. Processes 30 frames per second with 90% color detection accuracy.',
    techStack: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
    liveUrl: 'https://rohithram08.github.io/real-time-invisibility-cloack-using-opencv/',
    highlights: [
      'Real-time video processing at 30 FPS',
      '90% color detection accuracy',
      'Dynamic background subtraction and masking',
    ],
    images: [
      { id: '3-1', src: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1080&q=80', alt: 'Computer vision demo' },
    ],
  },
  {
    id: '4',
    title: 'Nihongo Learning Platform',
    category: 'fullstack',
    year: '2025',
    slug: 'nihongo-learning-platform',
    coverImage: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1080&q=80',
    description: 'A full-stack Japanese language learning platform currently under development. Designed to help learners practice reading, writing, and vocabulary through interactive lessons and quizzes.',
    techStack: ['React', 'Python', 'FastAPI', 'Database'],
    highlights: [
      'Interactive Japanese language lessons and quizzes',
      'Progress tracking and spaced repetition system',
      'Currently under active development',
    ],
    images: [
      { id: '4-1', src: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1080&q=80', alt: 'Nihongo learning platform' },
    ],
  },
  {
    id: '5',
    title: 'Cloud Contact Center',
    category: 'cloud',
    year: '2025',
    slug: 'cloud-contact-center',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1080&q=80',
    description: 'Designed and deployed a cloud-based contact center using Amazon Connect. Built custom IVR contact flows and integrated Amazon Lex for AI-driven conversational support across voice and chat channels.',
    techStack: ['AWS', 'Amazon Connect', 'Amazon Lex', 'CloudWatch', 'Lambda'],
    highlights: [
      'Designed custom IVR contact flows for multi-channel support',
      'Integrated Amazon Lex for AI-driven conversational interactions',
      'Deployed monitoring and analytics with CloudWatch',
    ],
    images: [
      { id: '5-1', src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1080&q=80', alt: 'Cloud architecture' },
    ],
  },
  {
    id: '6',
    title: 'Data Analytics – Logistics',
    category: 'data-analytics',
    year: '2025',
    slug: 'logistics-analytics',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80',
    description: 'Supported data analytics workflows at Ramco Cements covering logistics, warehousing, and geo-tracking. Performed data cleaning, validation, and stock monitoring using Power BI dashboards.',
    techStack: ['Power BI', 'SQL', 'Data Cleaning', 'Analytics'],
    highlights: [
      'Built interactive Power BI dashboards for stock monitoring',
      'Performed data cleaning and validation on logistics datasets',
      'Supported geo-tracking analytics for fleet management',
    ],
    images: [
      { id: '6-1', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80', alt: 'Data analytics dashboard' },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};
