import { motion } from 'framer-motion';
import { developerInfo } from '@/data/developer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, MapPin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import profileImg from '@/assets/profile.jpg';

const roles = [
  'Software Developer',
  'Data Engineer',
  'Full-Stack Builder',
  'Cloud Enthusiast',
  'JLPT N4 · Pursuing N3',
];

function TerminalRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = roles[index];

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index]);

  return (
    <span className="font-mono text-indigo-500 dark:text-indigo-400 text-lg md:text-xl">
      {displayed}
      <span className="animate-pulse">_</span>
    </span>
  );
}

const skillGroups = [
  {
    label: 'Languages',
    items: developerInfo.skills.languages,
  },
  {
    label: 'Frameworks & Tools',
    items: developerInfo.skills.toolsFrameworks,
  },
  {
    label: 'Databases',
    items: developerInfo.skills.databases,
  },
];

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />

      <div className="min-h-screen bg-background text-foreground">

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Portrait — full bleed right panel */}
          <motion.div
            className="absolute inset-y-0 right-0 w-full lg:w-[80%]"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={profileImg}
              alt={developerInfo.name}
              className="w-full h-full object-cover object-[35%_20%]"
            />
            {/* Dark mode: deep fade. Light mode: lighter fade from background */}
            <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-background to-transparent hidden lg:block" />
            {/* Bottom fade to blend into next section */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
          </motion.div>

          {/* Ambient glow — subtle in light mode, more visible in dark */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/5 dark:bg-indigo-600/10 blur-[120px]" />
          </div>

          {/* Text content */}
          <div className="relative z-10 w-full px-6 lg:px-16 pt-24 pb-16">
            <div className="max-w-6xl mx-auto lg:max-w-none lg:pr-[55%]">
              {/* Eyebrow */}
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="block w-8 h-px bg-indigo-500 dark:bg-indigo-400" />
                <span className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                  Available for hire
                </span>
                <span className="block w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none mb-6"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {developerInfo.name.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'block text-indigo-500 dark:text-indigo-400' : 'block text-foreground'}>
                    {word}
                  </span>
                ))}
              </motion.h1>

              {/* Terminal role */}
              <motion.div
                className="mb-10 h-8 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <TerminalRole />
              </motion.div>

              {/* Location + email */}
              <motion.div
                className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-12 font-mono"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className="flex items-center gap-2">
                  <MapPin className="size-3.5" /> {developerInfo.location}
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="size-3.5" />
                  <a href={`mailto:${developerInfo.email}`} className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                    {developerInfo.email}
                  </a>
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium tracking-wide rounded-sm transition-all duration-200"
                >
                  View Projects
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="/Rohith_Ram_H_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-indigo-500/50 hover:bg-accent text-sm font-medium tracking-wide rounded-sm transition-all duration-200"
                >
                  Download Resume
                  <ExternalLink className="size-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-indigo-500/50 hover:bg-accent text-sm font-medium tracking-wide rounded-sm transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />
          </motion.div>
        </section>

        {/* ── About strip ── */}
        <section className="border-t border-border py-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <ScrollReveal>
              <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                About
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground">
                {developerInfo.heroIntroduction}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-mono">
                {['Python', 'FastAPI', 'React', 'AWS', 'MySQL', 'LangChain'].map(tag => (
                  <span key={tag} className="px-3 py-1 border border-border text-muted-foreground rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Experience Timeline ── */}
        <section className="border-t border-border py-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase mb-12">
                Experience
              </p>
            </ScrollReveal>

            <div className="space-y-0">
              {developerInfo.experience.map((exp, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group grid md:grid-cols-[200px_1fr] gap-6 py-8 border-t border-border hover:border-indigo-500/30 transition-colors">
                    <div className="space-y-1">
                      <p className="text-xs font-mono text-muted-foreground">{exp.period}</p>
                      <p className="text-sm text-indigo-500 dark:text-indigo-400 font-mono">{exp.location}</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-medium text-foreground">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                      {exp.highlights && (
                        <ul className="space-y-2">
                          {exp.highlights.map((h, j) => (
                            <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                              <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="border-t border-border py-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase mb-12">
                Skills & Technologies
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {skillGroups.map((group, i) => (
                <ScrollReveal key={group.label} delay={i * 0.1}>
                  <div className="p-6 bg-accent/50 border border-border rounded-sm hover:border-indigo-500/30 transition-colors">
                    <h3 className="text-xs font-mono tracking-[0.15em] text-indigo-500 dark:text-indigo-400 uppercase mb-4">
                      {group.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(s => (
                        <span key={s} className="px-2.5 py-1 text-xs border border-border text-muted-foreground rounded-sm bg-background">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Projects ── */}
        <section className="border-t border-border py-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-12">
                <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                  Featured Projects
                </p>
                <Link
                  to="/portfolio"
                  className="group text-xs font-mono text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors flex items-center gap-1"
                >
                  All projects <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  aspectRatio="landscape"
                  showCategory={true}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Achievements ── */}
        <section className="border-t border-border py-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <ScrollReveal>
              <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                Achievements
              </p>
            </ScrollReveal>
            <div className="space-y-4">
              {developerInfo.achievements.map((a, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-4 py-4 border-t border-border first:border-t-0">
                    <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="border-t border-border py-24 px-6 lg:px-16">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto text-center space-y-6">
              <h2
                className="text-4xl md:text-5xl font-light tracking-tight text-foreground"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Let's build something together.
              </h2>
              <p className="text-muted-foreground font-light max-w-xl mx-auto">
                {developerInfo.availability}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium tracking-wide rounded-sm transition-all duration-200"
              >
                Start a Conversation <ArrowRight className="size-4" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}