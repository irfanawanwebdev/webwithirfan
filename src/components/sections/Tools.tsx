/* Tools — searchable / filterable free dev utilities. Ported from Tools in design/js/sections.jsx.
   Cards are non-links for now; standalone tool pages ship later. */
import { useState } from 'react';
import { Icons } from '../Icons';
import { SectionHead } from '../SectionHead';
import { TOOLS, TOOL_CATS } from '../../data/content';

export function Tools() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<(typeof TOOL_CATS)[number]>('All');
  const list = TOOLS.filter(
    (t) =>
      (cat === 'All' || t.cat === cat) &&
      (t.name + ' ' + t.desc).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <section id="tools" className="section container">
      <SectionHead
        eyebrow="Free tools"
        title="Dev utilities I built for my own workflow."
        lead="20+ CSS and frontend helpers from my DevTools Chrome extension. Standalone tool pages are coming soon."
      />
      <div className="tools-bar">
        <div className="tools-search">
          {Icons.search({ size: 16 })}
          <input
            type="search"
            placeholder="Search tools…"
            aria-label="Search tools"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div className="tools-filter" role="group" aria-label="Filter tools by category">
          {TOOL_CATS.map((c) => (
            <button
              key={c}
              className={'fchip' + (cat === c ? ' active' : '')}
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      {list.length === 0 ? (
        <p
          className="muted mono"
          style={{ padding: '30px 0', textAlign: 'center', fontSize: 'var(--fs-sm)' }}
        >
          No tools match "{q}"
        </p>
      ) : (
        <div className="tools-grid">
          {list.map((t) => (
            // No data-reveal: cards mount/unmount as filters change, and a
            // one-shot scroll reveal would leave remounted cards stuck hidden.
            <div key={t.id} className="card tool">
              <div className="tool-top">
                <span className="tool-ico">{Icons[t.icon]({ size: 20 })}</span>
                <span className="tool-cat">{t.cat}</span>
              </div>
              <h3 className="tool-h">{t.name}</h3>
              <p>{t.desc}</p>
              <div className="tool-use">
                <span>in DevTools ext.</span>
                <span>page soon</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
