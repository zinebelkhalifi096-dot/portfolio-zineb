import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '../data';
import { fadeInUp } from '../utils/animations';

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 md:py-28 relative"
      aria-label="Formation"
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
            Formation
          </h2>
          <div className="section-line" />
        </motion.div>

        {/* Education cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-white dark:bg-dark-card shadow-lg card-hover border border-dark/5 dark:border-white/5 relative overflow-hidden"
            >
              {/* Decorative gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-mint" />

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 p-3 rounded-2xl bg-accent/10 dark:bg-dark-accent/15">
                  <GraduationCap size={32} className="text-accent dark:text-dark-accent" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-dark dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-accent dark:text-dark-accent font-medium mb-2">
                    {edu.school}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-dark/50 dark:text-gray-400 mb-3">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-sm text-dark/60 dark:text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
