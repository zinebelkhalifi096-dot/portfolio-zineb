import { motion } from 'framer-motion';
import { User, Briefcase, Rocket, Cpu } from 'lucide-react';
import { aboutText, keyFigures } from '../data';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const figureIcons = [Briefcase, Rocket, Cpu];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 relative"
      aria-label="À propos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white">
            À propos
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Decorative illustration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-mint/20 dark:from-dark-accent/10 dark:to-dark-mint/10 rotate-6" />
              <div className="absolute inset-0 rounded-3xl bg-white dark:bg-dark-card shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <User size={64} className="mx-auto mb-4 text-accent dark:text-dark-accent" />
                  <p className="font-heading font-semibold text-lg text-dark dark:text-white">Qui suis-je ?</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex-1"
          >
            <p className="text-lg md:text-xl leading-relaxed text-dark/70 dark:text-gray-300 mb-10">
              {aboutText}
            </p>

            {/* Key figures */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 md:gap-6"
            >
              {keyFigures.map((figure, index) => {
                const Icon = figureIcons[index];
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="text-center p-4 md:p-6 rounded-2xl bg-white dark:bg-dark-card shadow-md card-hover border border-dark/5 dark:border-white/5"
                  >
                    <Icon size={28} className="mx-auto mb-3 text-accent dark:text-dark-accent" />
                    <p className="font-heading text-2xl md:text-3xl font-bold gradient-text">
                      {figure.number}
                    </p>
                    <p className="text-sm md:text-base text-dark/60 dark:text-gray-400 mt-1">
                      {figure.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
