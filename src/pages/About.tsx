import { motion } from 'framer-motion';
import { Linkedin, Github, Download, GraduationCap, Briefcase, Star, Globe } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { AnimeDev } from '@/components/AnimeDev';

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${developerInfo.name}, ${developerInfo.tagline}.`}
        image={developerInfo.portraitImage}
      />

      <div className="min-h-screen bg-background text-foreground">

        {/* ── Page Header ── */}
        <section className="pt-32 pb-16 px-6 lg:px-16 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                About Me
              </p>
              <h1
                className="text-5xl md:text-7xl font-light tracking-tight leading-none text-foreground"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Developer,
                <br />
                <span className="text-indigo-500 dark:text-indigo-400">Data Enthusiast</span>
                <br />
                & Japan Dreamer.
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ── Anime Character + Bio ── */}
        <section className="py-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[380px_1fr] gap-16 items-start">

            {/* Left: anime character + links */}
            <motion.div
              className="space-y-6 md:sticky md:top-24"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Anime SVG character */}
              <div className="w-full max-w-[340px] mx-auto">
                <AnimeDev />
              </div>

              {/* Social + resume links */}
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="/Rohith_Ram_H_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-sm transition-colors"
                >
                  <Download className="size-4" />
                  Resume
                </a>
                {developerInfo.socialLinks.github && (
                  <a
                    href={developerInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-border rounded-sm hover:border-indigo-500/50 hover:bg-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="size-5 text-muted-foreground" />
                  </a>
                )}
                {developerInfo.socialLinks.linkedin && (
                  <a
                    href={developerInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-border rounded-sm hover:border-indigo-500/50 hover:bg-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="size-5 text-muted-foreground" />
                  </a>
                )}
              </div>

              {/* Quick facts */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-mono tracking-[0.15em] text-indigo-500 dark:text-indigo-400 uppercase mb-3">
                  Quick Facts
                </p>
                {[
                  { label: 'Location', value: developerInfo.location },
                  { label: 'Japanese', value: 'JLPT N4 · Pursuing N3' },
                  { label: 'Status', value: 'Open to opportunities' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm border-b border-border pb-2">
                    <span className="text-muted-foreground font-mono text-xs">{label}</span>
                    <span className="text-foreground text-xs text-right max-w-[160px]">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: content sections */}
            <div className="space-y-16">

              {/* Bio */}
              <ScrollReveal>
                <div className="space-y-4">
                  {developerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Education */}
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="size-5 text-indigo-500 dark:text-indigo-400" />
                    <h2 className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                      Education
                    </h2>
                  </div>
                  <div className="p-6 bg-accent/50 border border-border rounded-sm">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <div>
                        <h3 className="font-medium text-foreground">{developerInfo.education.degree}</h3>
                        <p className="text-sm text-muted-foreground">
                          {developerInfo.education.institution}, {developerInfo.education.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-mono text-muted-foreground">{developerInfo.education.period}</p>
                        <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400">
                          CGPA {developerInfo.education.cgpa}
                        </p>
                      </div>
                    </div>
                    {developerInfo.education.relevantCourses && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {developerInfo.education.relevantCourses.map(c => (
                          <span key={c} className="px-2.5 py-1 text-xs border border-border text-muted-foreground rounded-sm bg-background">
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* Experience */}
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Briefcase className="size-5 text-indigo-500 dark:text-indigo-400" />
                    <h2 className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                      Experience
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {developerInfo.experience.map((exp, i) => (
                      <div key={i} className="p-6 bg-accent/50 border border-border rounded-sm hover:border-indigo-500/30 transition-colors">
                        <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                          <div>
                            <h3 className="font-medium text-foreground">{exp.title}</h3>
                            <p className="text-sm text-muted-foreground">{exp.company} · {exp.location}</p>
                          </div>
                          <span className="text-xs font-mono text-indigo-500 dark:text-indigo-400 whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                        {exp.highlights && (
                          <ul className="space-y-2">
                            {exp.highlights.map((h, j) => (
                              <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                                <span className="mt-2 shrink-0 block w-1 h-1 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Achievements */}
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Star className="size-5 text-indigo-500 dark:text-indigo-400" />
                    <h2 className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                      Achievements
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {developerInfo.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-4 py-3 border-b border-border">
                        <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Japan / Global mindset */}
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Globe className="size-5 text-indigo-500 dark:text-indigo-400" />
                    <h2 className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                      Global Mindset
                    </h2>
                  </div>
                  <div className="p-6 bg-accent/50 border border-indigo-500/20 rounded-sm">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">🇯🇵</span>
                      <div className="space-y-2">
                        <h3 className="font-medium text-foreground">Japanese Language & Japan Focus</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          JLPT N4 certified and actively pursuing N3. Trained at Trust Tokyo Japanese Language School.
                          Actively seeking roles at Japanese MNCs and Japan-collaborated companies.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {['JLPT N4', 'NAT-5Q', 'Pursuing N3'].map(tag => (
                            <span key={tag} className="px-2.5 py-1 text-xs border border-indigo-500/30 text-indigo-500 dark:text-indigo-400 rounded-sm bg-indigo-500/5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact strip */}
              <ScrollReveal>
                <div className="pt-4 space-y-3">
                  <p className="text-xs font-mono tracking-[0.15em] text-indigo-500 dark:text-indigo-400 uppercase mb-4">
                    Contact
                  </p>
                  <div className="flex gap-2 border-b border-border pb-3">
                    <span className="text-muted-foreground font-mono text-xs">Email</span>
                    <a href={`mailto:${developerInfo.email}`} className="text-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-xs ml-auto">
                      {developerInfo.email}
                    </a>
                  </div>
                  <div className="flex gap-2 border-b border-border pb-3">
                    <span className="text-muted-foreground font-mono text-xs">Phone</span>
                    <a href={`tel:${developerInfo.phone}`} className="text-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors text-xs ml-auto">
                      {developerInfo.phone}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}