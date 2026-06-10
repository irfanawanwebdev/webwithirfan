/* Shared section header. Ported from SectionHead in design/js/sections.jsx. */
import type { ReactNode } from 'react';

export function SectionHead({
  eyebrow,
  title,
  lead,
  center,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={'sec-head' + (center ? ' center' : '')}>
      <span className="eyebrow" data-reveal>{eyebrow}</span>
      <h2 data-reveal>{title}</h2>
      {lead && <p className="lead" data-reveal>{lead}</p>}
    </div>
  );
}
