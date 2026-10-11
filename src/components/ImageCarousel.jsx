import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ImageOff,
  Layers,
} from 'lucide-react';

export default function ImageCarousel({ images = [], projectTitle = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const thumbnailsRef = useRef(null);

  const currentImage = images[currentIndex] || {};
  const total = images.length;

  const goToNext = useCallback(() => {
    if (total <= 1) return;
    setImageLoaded(false);
    setHasError(false);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    if (total <= 1) return;
    setImageLoaded(false);
    setHasError(false);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const selectIndex = useCallback(
    (index) => {
      if (index === currentIndex) return;
      setImageLoaded(false);
      setHasError(false);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Préchargement de l'image suivante et précédente
  useEffect(() => {
    if (total <= 1) return;
    const nextIdx = (currentIndex + 1) % total;
    const prevIdx = (currentIndex - 1 + total) % total;

    if (images[nextIdx]?.src) {
      const imgNext = new Image();
      imgNext.src = images[nextIdx].src;
    }
    if (images[prevIdx]?.src) {
      const imgPrev = new Image();
      imgPrev.src = images[prevIdx].src;
    }
  }, [currentIndex, images, total]);

  // Défilement automatique de la bandelette de miniatures pour garder la miniature visible
  useEffect(() => {
    if (!thumbnailsRef.current) return;
    const activeThumb = thumbnailsRef.current.children[currentIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentIndex, shouldReduceMotion]);

  // Navigation clavier locale (flèches et Échap pour dézoomer)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isZoomed) {
        if (e.key === 'Escape') {
          e.stopPropagation();
          setIsZoomed(false);
        }
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, isZoomed]);

  // Gestion des gestes tactiles (swipe)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      goToNext();
    } else if (diff < -minSwipeDistance) {
      goToPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-4">
      {/* Cadre façon fenêtre de navigateur */}
      <div className="rounded-2xl border border-dark/10 dark:border-white/10 overflow-hidden bg-cream/40 dark:bg-dark-bg/60 shadow-lg">
        {/* Barre supérieure style navigateur */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-dark/5 dark:bg-white/5 border-b border-dark/5 dark:border-white/5 select-none">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 border border-[#e0443e]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 border border-[#dea123]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 border border-[#1aab29]" />
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white/70 dark:bg-dark-card/70 text-xs text-dark/60 dark:text-gray-400 font-mono max-w-[280px] truncate border border-dark/5 dark:border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent dark:bg-dark-accent" />
            <span className="truncate">{currentImage.title || projectTitle}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent/15 dark:bg-dark-accent/20 text-accent dark:text-dark-accent">
              {currentIndex + 1} / {total}
            </span>
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-1.5 rounded-lg hover:bg-dark/10 dark:hover:bg-white/10 text-dark/60 dark:text-gray-300 transition-colors"
              aria-label={isZoomed ? 'Réduire la vue' : 'Agrandir en plein écran'}
              title="Agrandir l'image"
            >
              <Maximize2 size={15} />
            </button>
          </div>
        </div>

        {/* Zone d'affichage de l'image */}
        <div
          className="relative bg-white dark:bg-dark-card min-h-[260px] sm:min-h-[340px] md:min-h-[420px] max-h-[58vh] flex items-center justify-center p-2 sm:p-4 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image ou message d'erreur */}
          {hasError ? (
            <div className="flex flex-col items-center justify-center py-16 text-center text-dark/50 dark:text-gray-400">
              <ImageOff size={42} className="mb-3 text-dark/30 dark:text-white/20" />
              <p className="font-medium text-sm">Image indisponible</p>
              <p className="text-xs text-dark/40 dark:text-gray-500 mt-1">
                La capture n'a pas pu être chargée.
              </p>
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={currentImage.src}
                alt={currentImage.alt || currentImage.title || `Capture ${currentIndex + 1}`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setHasError(true);
                  setImageLoaded(true);
                }}
                onClick={() => setIsZoomed(true)}
                className={`max-h-[52vh] w-auto max-w-full object-contain rounded-lg cursor-zoom-in transition-all duration-300 ${
                  imageLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-[0.98]'
                }`}
              />

              {/* Loader discret pendant le chargement */}
              {!imageLoaded && !hasError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                </div>
              )}
            </div>
          )}

          {/* Flèches de navigation gauche / droite */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white/80 dark:bg-dark-card/80 text-dark dark:text-white shadow-md hover:bg-white dark:hover:bg-dark-card hover:scale-105 active:scale-95 transition-all border border-dark/10 dark:border-white/10 z-10"
                aria-label="Image précédente"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white/80 dark:bg-dark-card/80 text-dark dark:text-white shadow-md hover:bg-white dark:hover:bg-dark-card hover:scale-105 active:scale-95 transition-all border border-dark/10 dark:border-white/10 z-10"
                aria-label="Image suivante"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Cartouche descriptif sous l'image */}
      {(currentImage.title || currentImage.caption || currentImage.description) && (
        <div className="p-4 rounded-xl bg-cream/50 dark:bg-dark-bg/60 border border-dark/5 dark:border-white/5 space-y-1.5">
          {currentImage.title && (
            <h4 className="font-heading text-base font-bold text-dark dark:text-white">
              {currentImage.title}
            </h4>
          )}
          {currentImage.caption && (
            <p className="text-xs sm:text-sm font-medium text-accent dark:text-dark-accent">
              {currentImage.caption}
            </p>
          )}
          {currentImage.description && (
            <p className="text-xs sm:text-sm leading-relaxed text-dark/70 dark:text-gray-300">
              {currentImage.description}
            </p>
          )}
          {currentImage.tags && currentImage.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {currentImage.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white dark:bg-dark-card text-dark/60 dark:text-gray-400 border border-dark/5 dark:border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bandelette de miniatures cliquables */}
      {total > 1 && (
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs text-dark/50 dark:text-gray-400">
            <Layers size={13} />
            <span>Toutes les captures ({total})</span>
          </div>
          <div
            ref={thumbnailsRef}
            className="flex gap-2 overflow-x-auto pb-2 pt-1 px-0.5 scrollbar-thin scrollbar-thumb-dark/10 dark:scrollbar-thumb-white/10"
          >
            {images.map((img, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => selectIndex(idx)}
                  className={`flex-shrink-0 relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 focus:outline-none ${
                    isSelected
                      ? 'border-accent dark:border-dark-accent shadow-md scale-105 opacity-100 ring-2 ring-accent/20 dark:ring-dark-accent/20'
                      : 'border-transparent opacity-60 hover:opacity-90 hover:border-dark/20 dark:hover:border-white/20'
                  }`}
                  aria-label={`Afficher la capture ${idx + 1} : ${img.title || ''}`}
                  aria-current={isSelected ? 'true' : undefined}
                >
                  <img
                    src={img.src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 px-1 py-0.2 bg-black/70 text-[9px] text-white font-mono rounded-tl">
                    {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Vue plein écran / Zoom modal */}
      <AnimatePresence>
        {isZoomed && !hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none"
            onClick={() => setIsZoomed(false)}
          >
            <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
              <span className="text-xs text-white/70 font-mono bg-white/10 px-3 py-1 rounded-full">
                {currentIndex + 1} / {total} — Échap pour fermer
              </span>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Fermer le plein écran"
              >
                <Minimize2 size={20} />
              </button>
            </div>

            <img
              src={currentImage.src}
              alt={currentImage.alt || currentImage.title || ''}
              className="max-h-[85vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
