/* 404 page — ported from the old public/404.html. Static export writes this
   to out/404.html, which Vercel serves automatically for unknown paths
   (including the thousands of dead spam URLs left over from the hacked
   WordPress site — they must keep returning 404, never a redirect). */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="nf-wrap">
      <style>{`
        .nf-wrap {
          min-height: 100vh; display: grid; place-items: center; text-align: center;
          padding: 24px;
          background-image:
            radial-gradient(40% 40% at 80% 10%, rgba(34, 211, 238, .14), transparent 62%),
            radial-gradient(46% 46% at 12% 86%, rgba(99, 102, 241, .17), transparent 62%);
        }
        .nf-inner { max-width: 480px; }
        .nf-mark {
          width: 56px; height: 56px; border-radius: 16px; margin: 0 auto 28px;
          display: grid; place-items: center; color: #fff; font-weight: 700; font-size: 26px;
          background: linear-gradient(140deg, #6366f1, #22d3ee);
          box-shadow: 0 8px 30px rgba(99, 102, 241, .5);
        }
        .nf-inner h1 { font-size: clamp(2.5rem, 8vw, 4rem); letter-spacing: -0.03em; color: #fbfcfe; }
        .nf-inner p { margin: 14px 0 28px; color: #aab6c8; line-height: 1.6; }
        .nf-btn {
          display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #fff;
          font-weight: 500; padding: 13px 24px; border-radius: 999px;
          background: linear-gradient(120deg, #6366f1, #22d3ee);
        }
      `}</style>
      <div className="nf-inner">
        <div className="nf-mark" aria-hidden="true">W</div>
        <h1>404</h1>
        <p>That page wandered off. Let&apos;s get you back to building something fast.</p>
        <a className="nf-btn" href="/">Back to home</a>
      </div>
    </div>
  );
}
