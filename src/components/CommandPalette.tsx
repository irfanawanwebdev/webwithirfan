/* ⌘K command palette. Ported from design/js/nav.jsx. */
import { useCallback, useEffect, useRef, useState } from 'react';
import { Icons, type IconName } from './Icons';
import { LINKS } from '../config/links';
import { goSection } from '../lib/scroll';
import { useScrollLock, useFocusTrap } from '../hooks/useUI';

interface CmdItem {
  id: string;
  icon: IconName;
  name: string;
  sub: string;
}

const CMD_GROUPS: Array<{ label: string; items: CmdItem[] }> = [
  {
    label: 'Navigate',
    items: [
      { id: 'top', icon: 'home', name: 'Home', sub: 'Back to top' },
      { id: 'services', icon: 'layers', name: 'Services', sub: 'What I build' },
      { id: 'projects', icon: 'grid', name: 'Projects', sub: 'Selected work' },
      { id: 'tools', icon: 'terminal', name: 'Tools', sub: 'Free dev utilities' },
      { id: 'process', icon: 'flow', name: 'Process', sub: 'How I work' },
      { id: 'about', icon: 'users', name: 'About', sub: 'The developer behind the work' },
      { id: 'testimonials', icon: 'star', name: 'Reviews', sub: 'What clients say' },
      { id: 'faq', icon: 'doc', name: 'FAQ', sub: 'Answers before you ask' },
      { id: 'contact', icon: 'mail', name: 'Contact', sub: 'Start a project' },
    ],
  },
  {
    label: 'Actions',
    items: [
      { id: '__email', icon: 'mail', name: 'Email Irfan', sub: LINKS.email },
      { id: '__github', icon: 'github', name: 'View GitHub', sub: 'Open profile' },
      { id: '__call', icon: 'phone', name: 'Call Irfan', sub: LINKS.phoneDisplay },
    ],
  },
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useScrollLock(open);
  useFocusTrap(dialogRef, open);

  const flat: CmdItem[] = [];
  const groups = CMD_GROUPS.map((g) => {
    const items = g.items.filter((it) =>
      (it.name + ' ' + it.sub).toLowerCase().includes(q.toLowerCase()),
    );
    items.forEach((it) => flat.push(it));
    return { ...g, items };
  }).filter((g) => g.items.length);

  useEffect(() => {
    if (open) {
      setQ('');
      setSel(0);
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(t);
    }
  }, [open]);
  useEffect(() => {
    setSel(0);
  }, [q]);

  const run = useCallback(
    (it: CmdItem) => {
      onClose();
      if (it.id === '__email') {
        window.location.href = 'mailto:' + LINKS.email;
        return;
      }
      if (it.id === '__github') {
        window.open(LINKS.github, '_blank', 'noopener');
        return;
      }
      if (it.id === '__call') {
        window.location.href = LINKS.tel;
        return;
      }
      goSection(it.id);
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSel((s) => Math.min(s + 1, flat.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSel((s) => Math.max(s - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (flat[sel]) run(flat[sel]);
      }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open, flat, sel, run, onClose]);

  if (!open) return null;
  let idx = -1;
  return (
    <div className="cmdk-overlay" onClick={onClose}>
      <div
        className="cmdk"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="cmdk-head">
          {Icons.search({ size: 18 })}
          <input
            ref={inputRef}
            className="cmdk-input"
            placeholder="Search or jump to…"
            aria-label="Search sections and actions"
            role="combobox"
            aria-expanded="true"
            aria-controls="cmdk-listbox"
            aria-activedescendant={flat[sel] ? 'cmdk-opt-' + flat[sel].id : undefined}
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <span className="cmdk-esc">ESC</span>
        </div>
        <div className="cmdk-list" id="cmdk-listbox" role="listbox" aria-label="Results">
          {groups.length === 0 && <div className="cmdk-empty">No results for "{q}"</div>}
          {groups.map((g) => (
            <div key={g.label}>
              <div className="cmdk-group-label">{g.label}</div>
              {g.items.map((it) => {
                idx++;
                const me = idx;
                return (
                  <div
                    key={it.id}
                    id={'cmdk-opt-' + it.id}
                    className="cmdk-item"
                    role="option"
                    aria-selected={sel === me}
                    onMouseEnter={() => setSel(me)}
                    onClick={() => run(it)}
                  >
                    <span className="ic">{Icons[it.icon]({ size: 16 })}</span>
                    <span className="meta">
                      <span>{it.name}</span>
                      <small>{it.sub}</small>
                    </span>
                    {Icons.arrow({ size: 15 })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
