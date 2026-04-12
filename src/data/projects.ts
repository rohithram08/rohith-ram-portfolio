import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'MAX AI Voice Assistant',
    category: 'ai',
    year: '2025',
    slug: 'max-voice-assistant',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1080&q=80',
    description: 'Python-based voice assistant with 10+ integrated features including speech recognition, text-to-speech, web search, and system automation. Achieved 85% command recognition accuracy in testing.',
    techStack: ['Python', 'SpeechRecognition', 'pyttsx3', 'APIs'],
    githubUrl: 'https://github.com/rohithram08/Max-voice-assistant-',
    highlights: [
      '10+ integrated voice-controlled features',
      '85% command recognition accuracy',
      'Natural language processing for intuitive interaction',
    ],
    images: [
      { id: '1-1', src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1080&q=80', alt: 'Voice assistant interface' },
      { id: '1-2', src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1080&q=80', alt: 'AI speech recognition visualization' },
      { id: '1-3', src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1080&q=80', alt: 'Python code and terminal' },
    ],
  },
  {
    id: '2',
    title: 'PDF Based Chatbot using RAG',
    category: 'ai',
    year: '2025',
    slug: 'pdf-chatbot-rag',
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1080&q=80',
    description: 'An intelligent chatbot that leverages Retrieval-Augmented Generation (RAG) to answer questions from uploaded PDF documents. Built with Streamlit for an interactive user experience.',
    techStack: ['Python', 'LangChain', 'Streamlit', 'RAG', 'LLM'],
    liveUrl: 'https://rag-pdf-chatbot-007.streamlit.app/',
    highlights: [
      'Upload and query any PDF document instantly',
      'RAG pipeline for accurate, context-aware answers',
      'Interactive Streamlit-based web interface',
    ],
    images: [
      { id: '2-1', src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1080&q=80', alt: 'AI chatbot conversation' },
      { id: '2-2', src: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&w=1080&q=80', alt: 'PDF document processing' },
      { id: '2-3', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1080&q=80', alt: 'Streamlit web application' },
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
      { id: '3-2', src: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1080&q=80', alt: 'OpenCV color detection' },
      { id: '3-3', src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1080&q=80', alt: 'Real-time video processing' },
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
      { id: '4-1', src: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1080&q=80', alt: 'Japanese calligraphy' },
      { id: '4-2', src: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1080&q=80', alt: 'Japan culture and learning' },
      { id: '4-3', src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1080&q=80', alt: 'Language learning interface' },
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
