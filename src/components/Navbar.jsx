import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navLinks } from '../data';

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass bg-cream/80 dark:bg-dark-bg/80 shadow-lg'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="font-heading font-bold text-xl md:text-2xl gradient-text hover:opacity-80 transition-opacity"
          >
            Z.EK
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-accent dark:text-dark-accent bg-accent/10'
                      : 'text-dark/70 dark:text-gray-300 hover:text-accent dark:hover:text-dark-accent hover:bg-accent/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-full hover:bg-accent/10 transition-colors"
              aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              <motion.div
                key={isDark ? 'moon' : 'sun'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} className="text-dark/70" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent/10 transition-colors"
              aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-dark/70" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} className="text-dark dark:text-white" />
              ) : (
                <Menu size={24} className="text-dark dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass bg-cream/95 dark:bg-dark-bg/95 border-t border-accent/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'text-accent bg-accent/10'
                        : 'text-dark/70 dark:text-gray-300 hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
