import { useState, useEffect, useCallback } from 'react';

export function useTypingEffect(texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentFullText = texts[textIndex];

    if (!isDeleting) {
      // Typing
      setDisplayText(prev => currentFullText.substring(0, prev.length + 1));
    } else {
      // Deleting
      setDisplayText(prev => currentFullText.substring(0, prev.length - 1));
    }
  }, [texts, textIndex, isDeleting]);

  useEffect(() => {
    const currentFullText = texts[textIndex];
    let timeout;

    if (!isDeleting && displayText === currentFullText) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      // Move to next text
      setIsDeleting(false);
      setTextIndex(prev => (prev + 1) % texts.length);
    } else {
      // Continue typing/deleting
      timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, tick, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}
