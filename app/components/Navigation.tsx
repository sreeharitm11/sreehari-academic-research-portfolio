import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Research', id: 'research' },
  { label: 'Work', id: 'projects' },
  { label: 'Writing', id: 'blog' },
  { label: 'Publications', id: 'publications' },
  { label: 'Contact', id: 'contact' },
];

const sectionIds = navItems.map((i) => i.id);

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  // Scroll detection for nav background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme persistence
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Active section via IntersectionObserver + URL hash updater
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            // Replace hash state smoothly without adding back history items on scroll
            window.history.replaceState(null, '', `#${id}`);
          }
        },
        { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Scroll to hash section on initial page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sectionIds.includes(hash)) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Sreehari T M
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative flex flex-col items-center gap-1 cursor-pointer group"
                >
                  <span
                    className={`text-sm transition-colors duration-200 ${
                      isActive
                        ? 'text-foreground font-medium'
                        : 'text-muted-foreground group-hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </span>
                  {/* Active dot indicator */}
                  <span
                    className={`w-1 h-1 rounded-full bg-accent transition-all duration-200 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* CV Download */}
            <a
              href="/sreehari-tm-cv.pdf"
              download
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all cursor-pointer"
            >
              <Download size={12} />
              CV
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              aria-label="Navigate to contact section"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              Let's Connect
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-accent/50 rounded-lg"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-12"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-4xl font-display italic transition-colors cursor-pointer ${
                    activeSection === item.id ? 'text-accent' : 'text-foreground/80 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            {/* CV in mobile menu */}
            <a
              href="/sreehari-tm-cv.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground transition-all"
            >
              <Download size={14} />
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
