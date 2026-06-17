import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Code2, Layers, ExternalLink, Github, ArrowLeft, Globe } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug } from '@/data/projects';
import { ImageWithLightbox } from '@/components/portfolio/ImageWithLightbox';
import { Lightbox } from '@/components/portfolio/Lightbox';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />

      <div className="min-h-screen bg-background text-foreground">

        {/* ── Hero cover ── */}
        <motion.div
          className="relative w-full h-[55vh] overflow-hidden bg-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Gradient fade to background */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          {/* Back link */}
          <div className="absolute top-24 left-6 lg:left-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors bg-background/70 backdrop-blur-sm px-3 py-2 rounded-sm border border-border"
            >
              <ArrowLeft className="size-3" />
              All Projects
            </Link>
          </div>
        </motion.div>

        {/* ── Project Info ── */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16 -mt-20 relative z-10">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Title block */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.category && (
                  <span className="text-xs font-mono text-indigo-500 dark:text-indigo-400 border border-indigo-500/30 bg-indigo-500/5 px-2.5 py-1 rounded-sm capitalize">
                    {project.category.replace('-', ' / ')}
                  </span>
                )}
                {project.year && (
                  <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                    <Calendar className="size-3" />
                    {project.year}
                  </span>
                )}
              </div>

              <h1
                className="text-4xl md:text-6xl font-light tracking-tight leading-none text-foreground"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                {project.title}
              </h1>

              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>

            {/* Action links */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-mono rounded-sm transition-colors"
                >
                  <Globe className="size-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-indigo-500/50 hover:bg-accent text-sm font-mono rounded-sm transition-colors"
                >
                  <Github className="size-4" />
                  Source Code
                </a>
              )}
            </div>

            <div className="border-t border-border" />

            {/* Tech stack */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code2 className="size-4 text-indigo-500 dark:text-indigo-400" />
                <p className="text-xs font-mono tracking-[0.15em] text-indigo-500 dark:text-indigo-400 uppercase">
                  Tech Stack
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono border border-border text-muted-foreground rounded-sm bg-accent/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            {project.highlights?.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Layers className="size-4 text-indigo-500 dark:text-indigo-400" />
                  <p className="text-xs font-mono tracking-[0.15em] text-indigo-500 dark:text-indigo-400 uppercase">
                    Key Highlights
                  </p>
                </div>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </section>

        {/* ── Image Gallery ── */}
        {project.images?.length > 0 && (
          <section className="pb-20 px-0">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-8">
              <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                Screenshots
              </p>
            </div>
            <div className="space-y-6 md:space-y-10">
              {project.images.map((image, index) => (
                <ScrollReveal key={image.id} delay={index * 0.08}>
                  <ImageWithLightbox
                    image={image}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setLightboxOpen(true);
                    }}
                    priority={index === 0}
                    index={0}
                    className="w-full"
                  />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* ── Back nav ── */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-20">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Back to all projects
            </Link>
          </div>
        </ScrollReveal>

        <Lightbox
          images={project.images}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </>
  );
}