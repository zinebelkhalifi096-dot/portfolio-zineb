import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Clock } from 'lucide-react';
import { experiences } from '../data';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 relative"
      aria-label="Expérience professionnelle"
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
            Expérience
          </h2>
          <div className="section-line" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              className={`relative pl-12 md:pl-0 mb-12 last:mb-0 ${
                index % 2 === 0
                  ? 'md:pr-[calc(50%+2rem)] md:text-right'
                  : 'md:pl-[calc(50%+2rem)]'
              }`}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" />

              {/* Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-card shadow-lg card-hover border border-dark/5 dark:border-white/5">
                {/* Header */}
                <div className={`flex flex-wrap items-center gap-2 mb-3 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 dark:bg-dark-accent/15 text-accent dark:text-dark-accent text-xs font-semibold">
                    <Clock size={12} />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-dark/50 dark:text-gray-400">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-dark dark:text-white mb-1">
                  {exp.title}
                </h3>

                <div className={`flex flex-wrap items-center gap-3 mb-4 text-sm text-dark/60 dark:text-gray-400 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul className={`space-y-2 mb-4 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-dark/70 dark:text-gray-300 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent dark:text-dark-accent mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className={`flex flex-wrap gap-2 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-xs bg-mint/20 dark:bg-dark-mint/15 text-dark/70 dark:text-gray-300 border border-mint/30 dark:border-dark-mint/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
