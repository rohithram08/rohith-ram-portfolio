import { useState } from 'react';
import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const categories = ['All', 'Full-Stack', 'AI/ML', 'Data'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (p) =>
            p.category?.toLowerCase().replace('-', '/').includes(activeCategory.toLowerCase()) ||
            p.techStack?.some((t) =>
              t.toLowerCase().includes(activeCategory.toLowerCase())
            )
        );

  const liveCount = projects.filter((p) => p.liveUrl).length;

  return (
    <>
      <SEOHead
        title="Projects"
        description="Browse my projects featuring full-stack development, cloud architecture, data analytics, and AI applications."
      />

      <div className="min-h-screen bg-background text-foreground">

        {/* ── Page Header ── */}
        <section className="pt-32 pb-16 px-6 lg:px-16 border-b border-border">
          <div className="max-w-6xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-xs font-mono tracking-[0.2em] text-indigo-500 dark:text-indigo-400 uppercase">
                Work
              </p>
              <h1
                className="text-5xl md:text-7xl font-light tracking-tight leading-none text-foreground"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Projects &amp;
                <br />
                <span className="text-indigo-500 dark:text-indigo-400">Case Studies</span>
              </h1>
              <p className="text-muted-foreground font-light max-w-xl pt-2 text-lg">
                Full-stack, AI, and data projects — from production deployments to research.
              </p>

              {/* Live badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-emerald-500/30 bg-emerald-500/5 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-500 dark:text-emerald-400">
                  {liveCount} projects live in production
                </span>
              </div>
            </motion.div>

            {/* Category filters */}
            <motion.div
              className="flex flex-wrap gap-2 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-mono tracking-wider rounded-sm border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'border-border text-muted-foreground hover:border-indigo-500/50 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
              <span className="ml-auto text-xs font-mono text-muted-foreground self-center">
                {filtered.length} project{filtered.length !== 1 ? 's' : ''}
              </span>
            </motion.div>
          </div>
        </section>

        {/* ── Projects Grid ── */}
        <section className="py-12 md:py-16 px-2 md:px-4">
          <PortfolioGrid projects={filtered} />
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}