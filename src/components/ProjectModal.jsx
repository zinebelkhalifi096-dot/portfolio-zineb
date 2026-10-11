import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink, X, UserCheck, Sparkles } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const lastActiveElementRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Piégeage et restitution du focus pour l'accessibilité
  useEffect(() => {
    lastActiveElementRef.current = document.activeElement;

    // Blocage du scroll de la page principale
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus sur le conteneur modal au montage
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      // Rendu du focus à la carte qui a ouvert la modale
      if (lastActiveElementRef.current && typeof lastActiveElementRef.current.focus === 'function') {
        lastActiveElementRef.current.focus();
      }
    };
  }, []);

  // Gestion du clavier : touche Échap et piégeage du Tab
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
      return;
    }

    if (e.key === 'Tab') {
      if (!modalRef.current) return;
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  if (!project) return null;

  // Filtrage du rôle : masqué si absent ou s'il contient "[À COMPLÉTER]"
  const isRoleVisible =
    project.role &&
    typeof project.role === 'string' &&
    !project.role.includes('[À COMPLÉTER]') &&
    project.role.trim() !== '';

  const summaryText = project.summary || project.longDescription || project.shortDescription || '';
  const hasImages = Array.isArray(project.images) && project.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
      className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 16 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
        className="bg-white dark:bg-dark-card rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-dark/10 dark:border-white/10 flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* En-tête de la modale */}
        <div className="sticky top-0 z-20 bg-white/95 dark:bg-dark-card/95 backdrop-blur-md px-5 sm:px-8 py-5 border-b border-dark/5 dark:border-white/5 flex items-start justify-between gap-4">
          <div className="space-y-1.5 flex-1 pr-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <h3
                id="modal-project-title"
                className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-dark dark:text-white"
              >
                {project.title}
              </h3>
              {project.category && (
                <span className="px-3 py-0.5 rounded-full bg-accent/10 dark:bg-dark-accent/15 text-accent dark:text-dark-accent text-xs font-semibold">
                  {project.category}
                </span>
              )}
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-mint/20 dark:bg-dark-mint/20 text-dark/70 dark:text-gray-300 text-xs font-medium">
                  {project.badge}
                </span>
              )}
            </div>

            {/* Rôle éventuel */}
            {isRoleVisible && (
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-dark/60 dark:text-gray-400 font-medium">
                <UserCheck size={15} className="text-accent dark:text-dark-accent flex-shrink-0" />
                <span>Rôle : {project.role}</span>
              </div>
            )}
          </div>

          {/* Bouton de fermeture */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-dark/5 dark:bg-white/5 hover:bg-dark/10 dark:hover:bg-white/10 text-dark/60 dark:text-gray-300 transition-colors flex-shrink-0"
            aria-label="Fermer la boîte de dialogue"
          >
            <X size={20} />
          </button>
        </div>

        {/* Contenu principal */}
        <div className="p-5 sm:p-8 space-y-6 flex-1">
          {/* Résumé du projet */}
          {summaryText && (
            <div className="space-y-2">
              <p className="text-sm sm:text-base leading-relaxed text-dark/75 dark:text-gray-300 whitespace-pre-line">
                {summaryText}
              </p>
            </div>
          )}

          {/* Carrousel d'images de démonstration */}
          {hasImages ? (
            <div className="pt-2">
              <ImageCarousel images={project.images} projectTitle={project.title} />
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-cream/40 dark:bg-dark-bg/40 border border-dark/5 dark:border-white/5 text-center text-dark/50 dark:text-gray-400">
              <Sparkles size={28} className="mx-auto mb-2 text-accent/50 dark:text-dark-accent/50" />
              <p className="text-sm font-medium">Projet documenté</p>
              <p className="text-xs text-dark/40 dark:text-gray-500 mt-0.5">
                Consultez le code source ou la description détaillée ci-dessus.
              </p>
            </div>
          )}

          {/* Tags de technologies */}
          {project.tags && project.tags.length > 0 && (
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-dark/40 dark:text-gray-500 mb-2.5">
                Technologies & Outils
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm bg-cream dark:bg-dark-bg text-dark/70 dark:text-gray-300 border border-dark/5 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pied de la modale avec boutons d'action */}
        <div className="px-5 sm:px-8 py-4 bg-dark/[0.02] dark:bg-white/[0.02] border-t border-dark/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            {project.github && project.github.trim() !== '' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient px-5 py-2.5 rounded-full text-white font-medium flex items-center gap-2 text-sm shadow-sm hover:shadow transition-shadow"
              >
                <Github size={16} />
                Code source
              </a>
            )}
            {project.demo && project.demo.trim() !== '' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-2.5 rounded-full font-medium flex items-center gap-2 text-sm dark:border-dark-accent dark:text-dark-accent dark:hover:bg-dark-accent dark:hover:text-white"
              >
                <ExternalLink size={16} />
                Voir la démo
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-dark/60 dark:text-gray-400 hover:text-dark dark:hover:text-white hover:bg-dark/5 dark:hover:bg-white/5 transition-colors ml-auto"
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
