import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data';
import { fadeInUp } from '../utils/animations';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-dark dark:bg-dark-bg border-t border-dark/5 dark:border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center gap-6"
        >
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-accent/20 hover:bg-accent/30 transition-colors group mb-2"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} className="text-accent group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-white/10 transition-colors group"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-400 group-hover:text-accent transition-colors" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-white/10 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-400 group-hover:text-accent transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full hover:bg-white/10 transition-colors group"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-400 group-hover:text-accent transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 flex items-center gap-1.5">
            © {new Date().getFullYear()} {personalInfo.name}. Fait avec
            <Heart size={14} className="text-accent fill-accent" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
