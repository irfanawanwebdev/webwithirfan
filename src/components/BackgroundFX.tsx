/* Fixed background FX layers (aurora, grid, glow, noise) + cursor glow.
   Ported from the static markup in design/WebWithIrfan.html.
   Film grain + cursor glow are hardcoded ON (the Tweaks defaults); the cursor
   glow is gated to hover/fine-pointer devices in CSS + the motion engine. */
import { useEffect } from 'react';

export function BackgroundFX() {
  // Pause the aurora drift while the tab is hidden (perf + battery).
  useEffect(() => {
    const aurora = document.querySelector('.fx-aurora');
    if (!aurora) return;
    const onVis = () => aurora.classList.toggle('paused', document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  return (
    <>
      <div className="fx-aurora" aria-hidden="true" />
      <div className="fx-grid" aria-hidden="true" />
      <div className="fx-glow" aria-hidden="true" />
      <div className="fx-noise" id="fx-noise" aria-hidden="true" />
      <div id="cursor-glow" aria-hidden="true" />
    </>
  );
}
