import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { developerInfo } from '@/data/developer';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomepage = location.pathname === '/';
  const showSolid = isScrolled || !isHomepage || mobileMenuOpen;

  const initials = developerInfo.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          showSolid
            ? 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-16">

            {/* Logo mark */}
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="Home">
              <div className="w-7 h-7 bg-indigo-600 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-indigo-500 transition-colors">
                <span className="text-white text-[10px] font-mono font-bold leading-none">{initials}</span>
              </div>
              <span className="hidden sm:block text-xs font-mono tracking-widest text-muted-foreground group-hover:text-foreground transition-colors uppercase">
                {developerInfo.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        'relative text-xs font-mono tracking-widest uppercase transition-colors duration-200',
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-500 dark:bg-indigo-400"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
              >
                <ThemeToggle />
                <Link
                  to="/contact"
                  className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-mono tracking-widest uppercase rounded-sm transition-colors duration-200"
                >
                  Hire Me
                </Link>
              </motion.div>
            </nav>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background pt-20 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block py-4 text-2xl font-light border-b border-border transition-colors',
                        isActive
                          ? 'text-indigo-500 dark:text-indigo-400'
                          : 'text-foreground hover:text-indigo-500 dark:hover:text-indigo-400'
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              className="mt-auto pb-12 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              <p className="text-xs font-mono text-muted-foreground">{developerInfo.email}</p>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-mono rounded-sm transition-colors"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}