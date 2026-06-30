/* Floating action buttons: WhatsApp chat (always shown) and back-to-top
   (fades in after the user scrolls). Back-to-top reuses goSection('top'),
   so it rides the Lenis smooth scroll when that is active. */
import { useEffect, useState } from 'react';
import { Icons } from './Icons';
import { LINKS } from '../config/links';
import { goSection } from '../lib/scroll';

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fab-stack">
      <button
        type="button"
        className={'fab fab-top' + (showTop ? ' show' : '')}
        onClick={() => goSection('top')}
        aria-label="Back to top"
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
      >
        {Icons.arrowUp({ size: 22 })}
      </button>
      <a
        className="fab fab-wa"
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        {Icons.whatsapp({ size: 26 })}
      </a>
    </div>
  );
}
