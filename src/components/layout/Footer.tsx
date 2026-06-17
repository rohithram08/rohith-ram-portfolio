import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';
import { developerInfo } from '@/data/developer';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-16">

        {/* Top row */}
        <div className="grid md:grid-cols-[1fr_auto] gap-10 mb-12">

          {/* Brand + tagline */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-indigo-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-mono font-bold">RR</span>
              </div>
              <span className="font-mono text-sm text-foreground tracking-wide">
                {developerInfo.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              {developerInfo.tagline}. Open to opportunities anywhere - willing to relocate.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-3">
            <p className="text-xs font-mono tracking-[0.15em] text-indigo-500 dark:text-indigo-400 uppercase mb-1">
              Navigation
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider + bottom bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs font-mono text-muted-foreground">
              © {currentYear} {developerInfo.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a
                href={`mailto:${developerInfo.email}`}
                className="text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="size-4" />
              </a>
              {developerInfo.socialLinks.github && (
                <a
                  href={developerInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="size-4" />
                </a>
              )}
              {developerInfo.socialLinks.linkedin && (
                <a
                  href={developerInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}