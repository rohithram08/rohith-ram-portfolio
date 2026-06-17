import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { ContactForm } from '@/components/forms/ContactForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: developerInfo.email,
    href: `mailto:${developerInfo.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: developerInfo.phone,
    href: `tel:${developerInfo.phone}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: developerInfo.location,
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    handle: '@rohithram08',
    href: developerInfo.socialLinks.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'rohithram-haribabu',
    href: developerInfo.socialLinks.linkedin,
  },
];

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${developerInfo.name} for collaboration and opportunities.`}
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
                Contact
              </p>
              <h1
                className="text-5xl md:text-7xl font-light tracking-tight leading-none text-foreground"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Let's work
                <br />
                <span className="text-indigo-500 dark:text-indigo-400">together.</span>
              </h1>
              <p className="text-muted-foreground font-light max-w-xl pt-2 text-lg">
                {developerInfo.availability}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="py-20 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">

            {/* Left: info */}
            <div className="space-y-12">

              {/* Contact items */}
              <ScrollReveal>
                <div className="space-y-1">
                  <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase mb-6">
                    Direct Contact
                  </p>
                  {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4 py-4 border-b border-border">
                      <div className="p-2.5 bg-accent border border-border rounded-sm shrink-0">
                        <Icon className="size-4 text-indigo-500 dark:text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-muted-foreground mb-1">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Social links */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-1">
                  <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase mb-6">
                    Find Me Online
                  </p>
                  {socialLinks.map(({ icon: Icon, label, handle, href }) =>
                    href ? (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-4 border-b border-border hover:border-indigo-500/30 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 bg-accent border border-border rounded-sm group-hover:border-indigo-500/40 transition-colors">
                            <Icon className="size-4 text-muted-foreground group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" />
                          </div>
                          <div>
                            <p className="text-xs font-mono text-muted-foreground mb-0.5">{label}</p>
                            <p className="text-sm text-foreground">{handle}</p>
                          </div>
                        </div>
                        <ArrowRight className="size-4 text-muted-foreground group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                      </a>
                    ) : null
                  )}
                </div>
              </ScrollReveal>

              {/* Response note */}
              <ScrollReveal delay={0.2}>
                <div className="p-5 bg-accent/50 border border-border rounded-sm">
                  <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.15em] mb-2">
                    Response Time
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I typically respond within 24–48 hours. For urgent matters,
                    feel free to reach out via phone or LinkedIn directly.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: form */}
            <ScrollReveal delay={0.15}>
              <div className="p-8 bg-accent/50 border border-border rounded-sm">
                <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase mb-6">
                  Send a Message
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}