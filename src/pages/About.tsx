import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${developerInfo.name}, ${developerInfo.tagline}.`}
        image={developerInfo.portraitImage}
      />
      
      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0.8, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">About</h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">Software Developer & Data Enthusiast</p>
            </motion.div>
          </div>
        </section>

        {/* Portrait + Bio */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div className="space-y-6" initial={{ opacity: 0.8, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted">
                  <img src={developerInfo.portraitImage} alt={developerInfo.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-4">
                  {developerInfo.socialLinks.github && (
                    <a href={developerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-3 border border-border rounded-sm hover:bg-accent transition-colors" aria-label="GitHub">
                      <Github className="size-5" />
                    </a>
                  )}
                  {developerInfo.socialLinks.linkedin && (
                    <a href={developerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 border border-border rounded-sm hover:bg-accent transition-colors" aria-label="LinkedIn">
                      <Linkedin className="size-5" />
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div className="space-y-8" initial={{ opacity: 0.8, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-light tracking-wide">{developerInfo.name}</h2>
                  <p className="text-xl text-muted-foreground font-light tracking-wide">{developerInfo.tagline}</p>
                </div>

                <Separator />

                <div className="space-y-4">
                  {developerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">{paragraph}</p>
                  ))}
                </div>

                {/* Education */}
                <div className="space-y-2 pt-4">
                  <h3 className="text-lg font-light tracking-wide">Education</h3>
                  <p className="text-muted-foreground font-light">{developerInfo.education.degree}</p>
                  <p className="text-sm text-muted-foreground font-light">{developerInfo.education.institution}, {developerInfo.education.location}</p>
                  <p className="text-sm text-muted-foreground font-light">{developerInfo.education.period} • CGPA: {developerInfo.education.cgpa}</p>
                </div>

                {/* Experience */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-lg font-light tracking-wide">Experience</h3>
                  {developerInfo.experience.map((exp, i) => (
                    <div key={i} className="space-y-2 border-l-2 border-border pl-4">
                      <p className="font-light">{exp.title}</p>
                      <p className="text-sm text-muted-foreground">{exp.company}, {exp.location}</p>
                      <p className="text-xs text-muted-foreground">{exp.period}</p>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-2 pt-4">
                  <h3 className="text-lg font-light tracking-wide">Achievements</h3>
                  <ul className="space-y-1">
                    {developerInfo.achievements.map((a, i) => (
                      <li key={i} className="text-sm text-muted-foreground font-light flex gap-2">
                        <span>•</span>{a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="pt-4 space-y-2">
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Email: </span>
                    <a href={`mailto:${developerInfo.email}`} className="text-foreground hover:text-muted-foreground transition-colors">{developerInfo.email}</a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Location: </span>
                    <span className="text-foreground">{developerInfo.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
