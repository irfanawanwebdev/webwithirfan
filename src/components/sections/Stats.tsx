/* Metrics strip — terminal-style system-status panel. Ported from Stats in design/js/sections.jsx.
   Count-ups use an aria-hidden animated span plus a visually-hidden static value
   so screen readers always read the real number. */
import { Icons } from '../Icons';
import { METRICS } from '../../data/content';

function Spark({ data, color }: { data: number[]; color: string }) {
  const w = 72;
  const h = 24;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const x = (i: number) => (i / (data.length - 1)) * w;
  const y = (v: number) => h - ((v - min) / (max - min || 1)) * (h - 5) - 3;
  const line = data.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const area = `0,${h} ${line} ${w},${h}`;
  const gid = 'sg' + Math.round(data[0] * 997 + data.length);
  return (
    <svg className="spark" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={area} fill={`url(#${gid})`} stroke="none" />
      <polyline points={line} fill="none" stroke={color} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function Stats() {
  return (
    <section className="section--tight container" data-reveal aria-label="Studio metrics">
      <div className="metrics" data-reveal>
        <div className="metrics-bar">
          <span className="tl" aria-hidden="true"><i /><i /><i /></span>
          <span className="path mono">irfan@studio:~$ status --metrics</span>
          <span className="chip live"><span className="dot" /> all systems operational</span>
        </div>
        <div className="metrics-grid">
          {METRICS.map((m) => (
            <div className="metric" key={m.k} style={{ ['--mc' as string]: m.color }}>
              <span className="mkey mono">{m.k}</span>
              <b className="mval">
                <span aria-hidden="true">
                  <span data-count={m.n}>{m.n}</span>
                  <span className="u">{m.u}</span>
                </span>
                <span className="sr-only">{m.n}{m.u}</span>
              </b>
              <span className="mlabel">{m.label}</span>
              <div className="mfoot">
                <span className="trend mono">{Icons.arrow({ size: 12 })}{m.trend}</span>
                <Spark data={m.spark} color={m.color} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
