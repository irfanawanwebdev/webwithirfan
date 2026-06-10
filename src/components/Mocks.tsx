/* ProjectMock — clean CSS faux-UI mockups (no external images).
   Ported from design/js/mocks.jsx. The whole frame is decorative, so it is
   marked aria-hidden; replace with real screenshots when the owner provides them. */
import type { ReactElement } from 'react';
import type { MockVariant } from '../data/content';

function MockBar({ h, on }: { h: number; on?: boolean }) {
  return <span className={'mk-cbar' + (on ? ' on' : '')} style={{ height: h + '%' }} />;
}

function MockDashboard() {
  const bars = [42, 60, 38, 72, 55, 84, 66, 92, 78];
  return (
    <div className="mk mk-dash">
      <aside className="mk-side">
        <span className="mk-brand" />
        <i className="on" /><i /><i /><i /><i />
      </aside>
      <div className="mk-content">
        <div className="mk-kpis">
          {[0, 1, 2].map((i) => (
            <div className="mk-kpi" key={i}>
              <span className="l1" /><span className="l2" /><span className="spark" />
            </div>
          ))}
        </div>
        <div className="mk-chart">
          <div className="mk-chart-head"><span /><span className="pill" /></div>
          <div className="mk-bars">
            {bars.map((h, i) => (
              <MockBar key={i} h={h} on={i === bars.length - 2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MockFlow() {
  const cols = [['Trigger'], ['Classify', 'Enrich'], ['Route', 'Reply']];
  return (
    <div className="mk mk-flow">
      <div className="mk-flowline" />
      {cols.map((nodes, c) => (
        <div className="mk-fcol" key={c}>
          {nodes.map((n, i) => (
            <div className={'mk-node' + (c === 0 ? ' trigger' : '')} key={i}>
              <span className="nd" />
              {n}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function MockStore() {
  return (
    <div className="mk mk-store">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div className="mk-tile" key={i}>
          <span className="mk-img" /><span className="mk-tline" /><span className="mk-price" />
        </div>
      ))}
    </div>
  );
}

function MockTools() {
  return (
    <div className="mk mk-toolsg">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div className="mk-tcard" key={i}>
          <span className="mk-tico" /><span className="mk-tl1" /><span className="mk-tl2" />
        </div>
      ))}
    </div>
  );
}

function MockExtension() {
  const tools: Array<[string, boolean]> = [
    ['Clamp Calculator', false],
    ['CSS Inspector', true],
    ['Broken Links', false],
    ['Box Shadow', false],
    ['Gradient', false],
    ['Animation Builder', false],
  ];
  return (
    <div className="mk mk-ext">
      <aside className="mk-extside">
        <span className="mk-extbrand">DEVTOOLS</span>
        {tools.map(([t, on], i) => (
          <div className={'mk-extrow' + (on ? ' on' : '')} key={i}>
            <i />
            <span>{t}</span>
          </div>
        ))}
      </aside>
      <div className="mk-extmain">
        <span className="mk-exth">Broken Links Checker</span>
        <div className="mk-extchecks">
          {[0, 1, 2, 3].map((i) => (
            <span className="mk-extcheck" key={i} />
          ))}
        </div>
        <div className="mk-extbtns">
          <span className="mk-extbtn on" /><span className="mk-extbtn" /><span className="mk-extbtn" />
        </div>
      </div>
    </div>
  );
}

function MockSite() {
  return (
    <div className="mk mk-site">
      <div className="mk-sitenav">
        <span className="mk-sitelogo" />
        <span className="mk-sitelinks"><i /><i /><i /><i /></span>
      </div>
      <div className="mk-sitehero">
        <div className="mk-sitehcopy">
          <span className="l1" /><span className="l2" /><span className="l3" /><span className="mk-sitecta" />
        </div>
        <div className="mk-sitehimg" />
      </div>
      <div className="mk-sitecards">
        {[0, 1, 2].map((i) => (
          <span className="mk-sitecard" key={i} />
        ))}
      </div>
    </div>
  );
}

const MOCKS: Record<MockVariant, () => ReactElement> = {
  dashboard: MockDashboard,
  flow: MockFlow,
  store: MockStore,
  tools: MockTools,
  extension: MockExtension,
  site: MockSite,
};

const URLS: Record<MockVariant, string> = {
  dashboard: 'app.teamflow.io/workload',
  store: 'shop.example.co',
  flow: 'atlas.ai/pipeline',
  tools: 'devkit.tools',
  extension: 'chrome://extension/devtools',
  site: 'renovation-co.com',
};

export function ProjectMock({ variant }: { variant: MockVariant }) {
  const Body = MOCKS[variant] ?? MockDashboard;
  const url = URLS[variant] ?? '';
  return (
    <div className="mockframe" aria-hidden="true">
      <div className="mk-bar">
        <span className="mk-dots"><i /><i /><i /></span>
        <span className="mk-urlbar mono">{url}</span>
      </div>
      <div className="mk-viewport">
        <Body />
      </div>
    </div>
  );
}
