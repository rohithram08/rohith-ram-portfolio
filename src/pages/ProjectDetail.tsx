import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Code2, Layers, Github, ArrowLeft, Globe, ExternalLink } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug } from '@/data/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [iframeError, setIframeError] = useState(false);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const hasLive = Boolean(project.liveUrl);

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />

      <div className="min-h-screen bg-background text-foreground">

        {/* ── Top nav ── */}
        <div className="pt-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="size-3" />
              All Projects
            </Link>
          </div>
        </div>

        {/* ── Header ── */}
        <section className="pt-10 pb-12 px-6 lg:px-16 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category + year */}
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
                {hasLive && (
                  <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-500 dark:text-emerald-400 border border-emerald-500/30 bg-emerald-500/5 px-2.5 py-1 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    Live in Production
                  </span>
                )}
              </div>

              {/* Title */}
              <h1
                className="text-4xl md:text-6xl font-light tracking-tight leading-none text-foreground"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                {project.title}
              </h1>

              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Action links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-mono rounded-sm transition-colors"
                  >
                    <Globe className="size-4" />
                    Open Live Demo
                    <ExternalLink className="size-3 opacity-70" />
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
            </motion.div>
          </div>
        </section>

        {/* ── Live Preview ── */}
        {hasLive && !iframeError && (
          <section className="py-12 px-6 lg:px-16">
            <div className="max-w-6xl mx-auto space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                  Live Preview
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors flex items-center gap-1"
                >
                  Open in new tab <ExternalLink className="size-3" />
                </a>
              </div>

              {/* Browser chrome mockup */}
              <div className="rounded-sm border border-border overflow-hidden shadow-2xl">
                {/* Fake browser bar */}
                <div className="flex items-center gap-3 px-4 py-3 bg-accent/50 border-b border-border">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <span className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 bg-background border border-border rounded-sm px-3 py-1 text-xs font-mono text-muted-foreground truncate">
                    {project.liveUrl}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>

                {/* iframe */}
                <div className="relative w-full" style={{ height: '600px' }}>
                  <iframe
                    src={project.liveUrl}
                    title={`${project.title} live preview`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    onError={() => setIframeError(true)}
                  />
                </div>
              </div>

              <p className="text-xs font-mono text-muted-foreground text-center">
                Live embed of{' '}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 dark:text-indigo-400 hover:underline"
                >
                  {project.liveUrl}
                </a>
              </p>
            </div>
          </section>
        )}

        {/* Fallback if iframe blocked */}
        {hasLive && iframeError && (
          <section className="py-12 px-6 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center justify-center gap-6 p-16 border border-dashed border-border rounded-sm bg-accent/20 text-center">
                <Globe className="size-10 text-muted-foreground" />
                <div className="space-y-2">
                  <p className="text-sm font-mono text-foreground">Live preview blocked by browser security</p>
                  <p className="text-xs text-muted-foreground">The site disables embedding — open it directly instead.</p>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-mono rounded-sm transition-colors"
                >
                  <ExternalLink className="size-4" />
                  Open {project.title}
                </a>
              </div>
            </div>
          </section>
        )}

        {/* No live URL — placeholder */}
        {!hasLive && (
          <section className="py-12 px-6 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center justify-center gap-4 p-16 border border-dashed border-border rounded-sm bg-accent/20 text-center">
                <Github className="size-10 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-sm font-mono text-foreground">Source available on GitHub</p>
                  <p className="text-xs text-muted-foreground">No live deployment — view the code below.</p>
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-indigo-500/50 hover:bg-accent text-sm font-mono rounded-sm transition-colors"
                  >
                    <Github className="size-4" />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── Tech stack + Highlights ── */}
        <section className="py-12 px-6 lg:px-16 border-t border-border">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

            {/* Tech stack */}
            <ScrollReveal>
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
            </ScrollReveal>

            {/* Highlights */}
            {project.highlights?.length > 0 && (
              <ScrollReveal delay={0.1}>
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
              </ScrollReveal>
            )}
          </div>
        </section>

        {/* ── Back nav ── */}
        <ScrollReveal>
          <div className="max-w-6xl mx-auto px-6 lg:px-16 pb-20 pt-4">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Back to all projects
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
}