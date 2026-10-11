import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye, Images, FolderGit2 } from 'lucide-react';
import { projects, projectCategories } from '../data';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter(
          (p) => p.category === activeFilter || p.secondaryCategory === activeFilter
        );

  const handleCardKeyDown = (e, project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedProject(project);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-white/50 dark:bg-dark-card/30 relative"
      aria-label="Projets"
    >
      <div className="blob w-72 h-72 bg-accent/30 top-20 -left-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white">
            Projets
          </h2>
          <div className="section-line" />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'filter-active shadow-md'
                  : 'bg-white dark:bg-dark-card text-dark/60 dark:text-gray-400 hover:bg-accent/10 dark:hover:bg-dark-accent/10 border border-dark/5 dark:border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const hasImages = Array.isArray(project.images) && project.images.length > 0;
              const coverImage = hasImages ? project.images[0] : null;
              const imageCount = hasImages ? project.images.length : 0;
              const description =
                project.shortDescription || project.summary || project.longDescription || '';

              return (
                <motion.div
                  key={project.title}
                  variants={staggerItem}
                  layout
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => handleCardKeyDown(e, project)}
                  className="group rounded-2xl bg-white dark:bg-dark-card shadow-md card-hover border border-dark/5 dark:border-white/5 overflow-hidden flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-dark-accent"
                  aria-label={`Voir les détails du projet ${project.title}`}
                >
                  {/* Image de couverture ou placeholder */}
                  <div className="relative aspect-video w-full overflow-hidden bg-cream/60 dark:bg-dark-bg/60 border-b border-dark/5 dark:border-white/5">
                    {coverImage ? (
                      <img
                        src={coverImage.src}
                        alt={coverImage.alt || coverImage.title || project.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-dark/30 dark:text-gray-500 p-6 bg-gradient-to-br from-cream to-mint/20 dark:from-dark-card dark:to-dark-bg">
                        <FolderGit2 size={40} className="mb-2 text-accent/50 dark:text-dark-accent/50 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-medium text-dark/50 dark:text-gray-400">
                          {project.category}
                        </span>
                      </div>
                    )}

                    {/* Badge nombre de captures */}
                    {hasImages && (
                      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark/70 dark:bg-black/70 backdrop-blur-md text-white text-xs font-medium shadow-sm">
                        <Images size={13} />
                        <span>
                          {imageCount} capture{imageCount > 1 ? 's' : ''}
                        </span>
                      </div>
                    )}

                    {/* Badge catégorie flottant en haut à gauche */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-dark-card/90 backdrop-blur-md text-accent dark:text-dark-accent text-xs font-semibold shadow-sm">
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-mint/90 dark:bg-dark-mint/90 backdrop-blur-md text-dark text-[11px] font-semibold shadow-sm">
                          {project.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Corps de la carte */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Titre */}
                      <h3 className="font-heading text-xl font-bold text-dark dark:text-white mb-2 group-hover:text-accent dark:group-hover:text-dark-accent transition-colors">
                        {project.title}
                      </h3>

                      {/* Description courte */}
                      <p className="text-sm text-dark/60 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                        {description}
                      </p>

                      {/* Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tags.slice(0, 4).map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md text-xs bg-cream dark:bg-dark-bg text-dark/60 dark:text-gray-400 border border-dark/5 dark:border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="px-2 py-0.5 rounded-md text-xs bg-cream dark:bg-dark-bg text-dark/40 dark:text-gray-500">
                              +{project.tags.length - 4}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Actions de la carte */}
                    <div className="flex items-center justify-between pt-4 border-t border-dark/5 dark:border-white/5">
                      <div className="flex items-center gap-3">
                        {project.github && project.github.trim() !== '' && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-xs font-medium text-dark/60 dark:text-gray-400 hover:text-accent dark:hover:text-dark-accent transition-colors"
                            aria-label={`Code source de ${project.title}`}
                          >
                            <Github size={14} />
                            Code
                          </a>
                        )}
                        {project.demo && project.demo.trim() !== '' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-xs font-medium text-dark/60 dark:text-gray-400 hover:text-accent dark:hover:text-dark-accent transition-colors"
                            aria-label={`Démo en ligne de ${project.title}`}
                          >
                            <ExternalLink size={14} />
                            Démo
                          </a>
                        )}
                      </div>

                      <span className="flex items-center gap-1.5 text-xs font-medium text-accent dark:text-dark-accent group-hover:translate-x-0.5 transition-transform">
                        <Eye size={14} />
                        Voir {hasImages ? 'la galerie' : 'le projet'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fenêtre modale du projet */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
