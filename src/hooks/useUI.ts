/* Shared UI hooks: command-palette hotkey, body scroll lock, focus trap.
   Ported from design/js/nav.jsx. */
import { useEffect, type RefObject } from 'react';

/** ⌘K / Ctrl-K opens something. */
export function useHotkey(onOpen: () => void) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpen();
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onOpen]);
}

/** Lock body scroll while an overlay is open. */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);
}

/** Trap Tab within a container; restore focus to the opener on close. */
export function useFocusTrap(ref: RefObject<HTMLElement>, active: boolean) {
  useEffect(() => {
    if (!active || !ref.current) return;
    const opener = document.activeElement as HTMLElement | null;
    const node = ref.current;
    const sel = 'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const h = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const items = [...node.querySelectorAll<HTMLElement>(sel)].filter(
        (el) => !(el as HTMLButtonElement).disabled && el.offsetParent !== null,
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    node.addEventListener('keydown', h);
    return () => {
      node.removeEventListener('keydown', h);
      if (opener && opener.focus) opener.focus();
    };
  }, [active, ref]);
}
