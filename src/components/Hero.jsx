import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download, Send } from 'lucide-react';
import { personalInfo, typingTitles } from '../data';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { fadeInUp, fadeIn } from '../utils/animations';

export default function Hero() {
  const typedText = useTypingEffect(typingTitles, 100, 50, 2000);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Section d'accueil"
    >
      {/* Decorative blobs */}
      <div className="blob w-72 h-72 md:w-96 md:h-96 bg-accent top-10 -right-20 animate-float" />
      <div className="blob w-64 h-64 md:w-80 md:h-80 bg-mint bottom-20 -left-16 animate-float" style={{ animationDelay: '2s' }} />
      <div className="blob w-48 h-48 bg-accent/50 top-1/2 left-1/3 animate-pulse-soft" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {/* Stage badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 dark:bg-dark-accent/15 text-accent dark:text-dark-accent text-sm font-medium border border-accent/20 dark:border-dark-accent/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-soft" />
                {personalInfo.stageInfo}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-dark dark:text-white leading-tight mb-4"
            >
              {personalInfo.name.split(' ').map((word, i) => (
                <span key={i}>
                  {i === 0 ? word : <span className="gradient-text"> {word}</span>}
                </span>
              ))}
            </motion.h1>

            {/* Typing effect */}
            <motion.div variants={fadeInUp} className="mb-6">
              <p className="font-heading text-xl sm:text-2xl md:text-3xl text-dark/70 dark:text-gray-300 font-medium h-10">
                {typedText}
                <span className="typing-cursor" />
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-dark/60 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={scrollToProjects}
                className="btn-gradient px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2"
              >
                <ArrowDown size={18} />
                Voir mes projets
              </button>
              <a
                href={personalInfo.cvPath}
                download
                className="btn-outline px-6 py-3 rounded-full font-semibold flex items-center gap-2 dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-white"
              >
                <Download size={18} />
                Télécharger mon CV
              </a>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-full font-semibold text-dark/70 dark:text-gray-300 hover:text-accent dark:hover:text-dark-accent transition-colors flex items-center gap-2 border-2 border-dark/10 dark:border-gray-600 hover:border-accent dark:hover:border-dark-accent"
              >
                <Send size={18} />
                Me contacter
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark/5 dark:bg-white/5 hover:bg-accent/20 dark:hover:bg-dark-accent/20 transition-colors group"
                aria-label="GitHub"
              >
                <Github size={22} className="text-dark/60 dark:text-gray-400 group-hover:text-accent dark:group-hover:text-dark-accent transition-colors" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark/5 dark:bg-white/5 hover:bg-accent/20 dark:hover:bg-dark-accent/20 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} className="text-dark/60 dark:text-gray-400 group-hover:text-accent dark:group-hover:text-dark-accent transition-colors" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full bg-dark/5 dark:bg-white/5 hover:bg-accent/20 dark:hover:bg-dark-accent/20 transition-colors group"
                aria-label="Email"
              >
                <Mail size={22} className="text-dark/60 dark:text-gray-400 group-hover:text-accent dark:group-hover:text-dark-accent transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 dark:border-dark-card/50 relative z-10">
                {personalInfo.profilePhoto ? (
                  <img
                    src={personalInfo.profilePhoto}
                    alt={`Photo de ${personalInfo.name}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Placeholder – À REMPLACER par une vraie photo */
                  <div className="profile-placeholder w-full h-full flex items-center justify-center">
                    <span className="text-white text-6xl font-heading font-bold">ZE</span>
                  </div>
                )}
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30 dark:border-dark-accent/30 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute -inset-4 rounded-full border border-mint/20 dark:border-dark-mint/20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} className="text-accent/50 dark:text-dark-accent/50" />
      </motion.div>
    </section>
  );
}
