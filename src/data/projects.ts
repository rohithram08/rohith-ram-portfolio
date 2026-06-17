import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'pathalytics',
    title: 'Pathalytics',
    category: 'fullstack',
    year: '2025–2026',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80',
    description: 'AI-powered career guidance platform for CS students — featuring an LLM chatbot, personalised career roadmaps, and curated learning recommendations. Built end-to-end and live in production.',
    techStack: ['React', 'Node.js', 'FastAPI', 'MySQL', 'LangChain', 'OpenAI API', 'Vercel', 'REST APIs'],
    liveUrl: 'https://pathalytics.vercel.app',
    githubUrl: 'https://github.com/rohithram08',
    highlights: [
      'Architected and deployed a full-stack AI platform across the complete SDLC — system design, schema design, REST API development, and zero-downtime production deployment via Vercel.',
      'Integrated an LLM-powered chatbot using OpenAI API and LangChain for context-aware career guidance and personalised CS roadmap generation.',
      'Designed a relational MySQL schema supporting user profiles, roadmap state, and recommendation history — optimised for low-latency queries.',
      'Implemented CI/CD pipeline via Vercel with automatic preview deployments on every pull request.',
    ],
    images: [
      { id: '1-1', src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80', alt: 'Pathalytics dashboard' },
      { id: '1-2', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80', alt: 'AI career roadmap interface' },
    ],
  },
  {
    id: '2',
    slug: 'mext-tracker',
    title: 'MEXT Scholarship Tracker',
    category: 'fullstack',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1080&q=80',
    description: 'A focused productivity tool for tracking MEXT scholarship application progress — deadlines, document checklists, university targets, and professor contact status in one clean dashboard.',
    techStack: ['React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://mext-tracker-one.vercel.app',
    githubUrl: 'https://github.com/rohithram08',
    highlights: [
      'Built a real-world tracker solving a personal pain point — managing the complex multi-step MEXT scholarship application process.',
      'Tracks university targets, professor contacts, document deadlines, and application stages in a single dashboard.',
      'Deployed on Vercel with instant load times and mobile-responsive design.',
    ],
    images: [
      { id: '2-1', src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1080&q=80', alt: 'MEXT tracker dashboard' },
    ],
  },
  {
    id: '3',
    slug: 'pdf-chatbot-rag',
    title: 'PDF Based Chatbot using RAG',
    category: 'ai',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1080&q=80',
    description: 'An intelligent chatbot that leverages Retrieval-Augmented Generation (RAG) to answer questions from uploaded PDF documents. Built with Streamlit for an interactive user experience.',
    techStack: ['Python', 'LangChain', 'FAISS', 'Streamlit', 'OpenAI API'],
    liveUrl: 'https://rag-pdf-chatbot-007.streamlit.app/',
    githubUrl: 'https://github.com/rohithram08',
    highlights: [
      'Built a RAG pipeline using LangChain with FAISS vector store — chunks, embeds, and retrieves relevant PDF sections before generating answers.',
      'Deployed as an interactive Streamlit app on Streamlit Cloud — zero-friction user experience with file upload and live Q&A.',
      'Handles multi-page, multi-document PDFs with accurate context retrieval, outperforming naive full-document prompting approaches.',
    ],
    images: [
      { id: '3-1', src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1080&q=80', alt: 'AI chatbot conversation' },
      { id: '3-2', src: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&w=1080&q=80', alt: 'PDF document processing' },
      { id: '3-3', src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1080&q=80', alt: 'Streamlit web application' },
    ],
  },
  {
    id: '4',
    slug: 'invisibility-cloak',
    title: 'Real-Time Invisibility Cloak',
    category: 'computer-vision',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1080&q=80',
    description: 'Computer vision application using OpenCV to mask specific colours in real-time video feeds, creating an invisibility cloak effect. Processes 30 frames per second with 90% colour detection accuracy.',
    techStack: ['Python', 'OpenCV', 'NumPy', 'Computer Vision'],
    liveUrl: 'https://rohithram08.github.io/real-time-invisibility-cloack-using-opencv/',
    githubUrl: 'https://github.com/rohithram08/real-time-invisibility-cloack-using-opencv',
    highlights: [
      'Achieved 90% colour-masking accuracy at 30 fps using an optimised OpenCV pipeline with HSV colour-range detection.',
      'Implemented real-time background capture, segmentation mask generation, and frame compositing for a seamless cloak effect.',
      'Explored morphological operations and Gaussian blur to reduce noise and sharpen mask edges under varying lighting conditions.',
    ],
    images: [
      { id: '4-1', src: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1080&q=80', alt: 'Computer vision demo' },
      { id: '4-2', src: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1080&q=80', alt: 'OpenCV colour detection' },
      { id: '4-3', src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1080&q=80', alt: 'Real-time video processing' },
    ],
  },
  {
    id: '5',
    slug: 'nihongo-learning-platform',
    title: 'Nihongo Learning Platform',
    category: 'fullstack',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1080&q=80',
    description: 'A full-stack Japanese language learning platform currently under development. Designed to help learners practice reading, writing, and vocabulary through interactive lessons and quizzes.',
    techStack: ['React', 'Python', 'FastAPI', 'MySQL'],
    githubUrl: 'https://github.com/rohithram08',
    highlights: [
      'Interactive Japanese language lessons covering hiragana, katakana, and kanji with spaced repetition.',
      'Progress tracking dashboard and personalised quiz system adapting to learner performance.',
      'Built from personal experience as a JLPT N4-certified learner — solving real study challenges.',
    ],
    images: [
      { id: '5-1', src: 'https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1080&q=80', alt: 'Japanese calligraphy' },
      { id: '5-2', src: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1080&q=80', alt: 'Japan culture and learning' },
      { id: '5-3', src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1080&q=80', alt: 'Language learning interface' },
    ],
  },
  {
    id: '6',
    slug: 'max-voice-assistant',
    title: 'MAX AI Voice Assistant',
    category: 'ai',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1080&q=80',
    description: 'Python-based voice assistant with 10+ integrated features including speech recognition, text-to-speech, web search, and system automation. Achieved 85% command recognition accuracy in testing.',
    techStack: ['Python', 'SpeechRecognition', 'pyttsx3', 'Weather API', 'Web Scraping'],
    githubUrl: 'https://github.com/rohithram08/Max-voice-assistant-',
    highlights: [
      'Achieved 85% command recognition accuracy across 10+ features using Python\'s SpeechRecognition library with noise-handling tuning.',
      'Modular architecture — each feature (web search, weather, reminders, task automation) is an independent plugin, making the system extensible.',
      'Integrated live weather API and real-time web search for dynamic, data-driven responses.',
    ],
    images: [
      { id: '6-1', src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1080&q=80', alt: 'Voice assistant interface' },
      { id: '6-2', src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1080&q=80', alt: 'AI speech recognition' },
      { id: '6-3', src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1080&q=80', alt: 'Python terminal' },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
};

export const getFeaturedProjects = (): Project[] =>
  projects.slice(0, 4);

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};