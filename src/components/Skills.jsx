import { motion } from 'framer-motion';
import { skillCategories } from '../data';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { useScrollReveal } from '../hooks/useScrollReveal';

function LanguageBar({ name, level, percent }) {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-dark dark:text-gray-200">{name}</span>
        <span className="text-xs text-dark/50 dark:text-gray-400">{level}</span>
      </div>
      <div className="h-2 bg-dark/10 dark:bg-white/10 rounded-full overflow-hidden">
        <div
          className="progress-bar h-full rounded-full bg-gradient-to-r from-accent to-mint dark:from-dark-accent dark:to-dark-mint"
          style={{ width: isVisible ? `${percent}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-white/50 dark:bg-dark-card/30 relative"
      aria-label="Compétences"
    >
      {/* Background decoration */}
      <div className="blob w-72 h-72 bg-mint/50 -top-20 -right-20" />
      <div className="blob w-64 h-64 bg-accent/30 bottom-10 -left-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white">
            Compétences
          </h2>
          <div className="section-line" />
        </motion.div>

        {/* Skill categories grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isLanguages = category.title === 'Langues';

            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`p-6 rounded-2xl bg-white dark:bg-dark-card shadow-md card-hover border border-dark/5 dark:border-white/5 ${
                  isLanguages ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-accent/10 dark:bg-dark-accent/15">
                    <Icon size={22} className="text-accent dark:text-dark-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-dark dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                {isLanguages ? (
                  <div className="space-y-4">
                    {category.skills.map((lang, i) => (
                      <LanguageBar key={i} {...lang} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="skill-tag px-3 py-1.5 rounded-full text-sm bg-cream dark:bg-dark-bg text-dark/70 dark:text-gray-300 border border-dark/5 dark:border-white/10 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
