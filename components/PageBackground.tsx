'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * One continuous gradient behind the whole page, with faint dot matrices,
 * circuit traces and waves. Positions are percentages of page height so the
 * same layer works on short and long pages. Scroll drives a --scroll variable
 * that the parallax classes read; reduced-motion users get a static layer.
 */
export default function PageBackground({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        el.style.setProperty('--scroll', String(Math.round(window.scrollY)));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="page" ref={ref}>
      <div className="bg-layer" aria-hidden="true">
        <div className="bg-glow" style={{ top: -260, right: -220, width: 760, height: 760, background: 'radial-gradient(circle, rgba(242,183,5,0.16) 0%, rgba(242,183,5,0) 65%)' }} />
        <div className="bg-glow" style={{ top: '24%', left: -320, width: 900, height: 900, background: 'radial-gradient(circle, rgba(27,122,115,0.09) 0%, rgba(27,122,115,0) 65%)' }} />
        <div className="bg-glow" style={{ top: '52%', right: -300, width: 860, height: 860, background: 'radial-gradient(circle, rgba(242,169,59,0.10) 0%, rgba(242,169,59,0) 65%)' }} />
        <div className="bg-glow" style={{ top: '80%', left: -260, width: 820, height: 820, background: 'radial-gradient(circle, rgba(47,163,150,0.08) 0%, rgba(47,163,150,0) 65%)' }} />

        <div className="parallax-fast" style={{ position: 'absolute', top: 110, right: 48, width: 380, height: 320 }}>
          <div className="bg-dots" style={{ inset: 0 }} />
        </div>
        <div className="parallax-slow" style={{ position: 'absolute', top: '26%', left: 24, width: 300, height: 380 }}>
          <div className="bg-dots reveal" style={{ inset: 0 }} />
        </div>
        <div className="parallax-rev" style={{ position: 'absolute', top: '56%', right: 40, width: 340, height: 280 }}>
          <div className="bg-dots reveal" style={{ inset: 0, backgroundImage: 'radial-gradient(rgba(178,128,10,0.30) 1.6px, transparent 1.7px)' }} />
        </div>
        <div className="parallax-slow" style={{ position: 'absolute', top: '84%', left: 64, width: 320, height: 260 }}>
          <div className="bg-dots reveal" style={{ inset: 0 }} />
        </div>

        <svg className="parallax-rev" width="720" height="460" viewBox="0 0 720 460" style={{ position: 'absolute', top: 520, right: -80 }}>
          <g fill="none" stroke="#1B7A73" strokeOpacity="0.11" strokeWidth="1.5">
            <path d="M720 40H520l-40 40H300l-30 30H0" />
            <path d="M720 120H560l-30 30H380l-40 40H140" />
            <path d="M720 220H600l-50-50H420" />
            <path d="M720 300H480l-40 40H260l-30-30H60" />
            <path d="M720 400H640l-30-30H360" />
            <path d="M480 80v-60M380 150v80M300 110v120" />
          </g>
          <g fill="#FFFFFF" stroke="#1B7A73" strokeOpacity="0.16" strokeWidth="1.5">
            <circle cx="300" cy="80" r="4" />
            <circle cx="140" cy="190" r="4" />
            <circle cx="420" cy="170" r="4" />
            <circle cx="60" cy="310" r="4" />
            <circle cx="360" cy="370" r="4" />
            <circle cx="480" cy="20" r="4" />
          </g>
          <rect x="430" y="240" width="64" height="44" rx="4" fill="none" stroke="#1B7A73" strokeOpacity="0.12" strokeWidth="1.5" />
          <path className="trace-pulse" d="M720 40H520l-40 40H300l-30 30H0" fill="none" stroke="#F2B705" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
          <path className="trace-pulse-slow" d="M720 300H480l-40 40H260l-30-30H60" fill="none" stroke="#2FA396" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <svg width="1800" height="200" viewBox="0 0 1800 200" style={{ position: 'absolute', top: '17%', left: -120 }}>
          <g className="wave" fill="none" strokeWidth="1.5">
            <path d="M0 80C100 40 200 120 300 80S500 40 600 80S800 120 900 80S1100 40 1200 80S1400 120 1500 80S1700 40 1800 80" stroke="#1B7A73" strokeOpacity="0.10" />
            <path d="M0 110C100 70 200 150 300 110S500 70 600 110S800 150 900 110S1100 70 1200 110S1400 150 1500 110S1700 70 1800 110" stroke="#1B7A73" strokeOpacity="0.07" />
            <path d="M0 140C100 100 200 180 300 140S500 100 600 140S800 180 900 140S1100 100 1200 140S1400 180 1500 140S1700 100 1800 140" stroke="#F2A93B" strokeOpacity="0.12" />
          </g>
        </svg>

        <svg className="parallax-slow" width="640" height="420" viewBox="0 0 640 420" style={{ position: 'absolute', top: '40%', left: -60 }}>
          <g fill="none" stroke="#1B7A73" strokeOpacity="0.10" strokeWidth="1.5">
            <path d="M0 60H200l40 40h180l30-30h190" />
            <path d="M0 160H120l30 30h210l40-40h240" />
            <path d="M0 260H260l40 40h120l30-30h190" />
            <path d="M0 360H180l30-30h150" />
            <path d="M240 100v90M420 100v-60M300 300v-80" />
          </g>
          <g fill="#FFFFFF" stroke="#1B7A73" strokeOpacity="0.16" strokeWidth="1.5">
            <circle cx="240" cy="190" r="4" />
            <circle cx="420" cy="40" r="4" />
            <circle cx="300" cy="220" r="4" />
            <circle cx="360" cy="330" r="4" />
          </g>
          <path className="trace-pulse" d="M0 160H120l30 30h210l40-40h240" fill="none" stroke="#2FA396" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <svg width="1800" height="200" viewBox="0 0 1800 200" style={{ position: 'absolute', top: '76%', left: -200 }}>
          <g className="wave" fill="none" strokeWidth="1.5">
            <path d="M0 80C100 40 200 120 300 80S500 40 600 80S800 120 900 80S1100 40 1200 80S1400 120 1500 80S1700 40 1800 80" stroke="#1B7A73" strokeOpacity="0.09" />
            <path d="M0 115C100 75 200 155 300 115S500 75 600 115S800 155 900 115S1100 75 1200 115S1400 155 1500 115S1700 75 1800 115" stroke="#F2A93B" strokeOpacity="0.11" />
          </g>
        </svg>

        <svg className="parallax-fast" width="640" height="380" viewBox="0 0 640 380" style={{ position: 'absolute', top: '66%', right: -60 }}>
          <g fill="none" stroke="#1B7A73" strokeOpacity="0.10" strokeWidth="1.5">
            <path d="M640 50H420l-40 40H200l-30-30H0" />
            <path d="M640 170H500l-30 30H260" />
            <path d="M640 290H380l-40-40H120" />
            <path d="M380 90v160M500 200v100" />
          </g>
          <g fill="#FFFFFF" stroke="#1B7A73" strokeOpacity="0.16" strokeWidth="1.5">
            <circle cx="200" cy="90" r="4" />
            <circle cx="260" cy="200" r="4" />
            <circle cx="120" cy="250" r="4" />
          </g>
          <path className="trace-pulse-slow" d="M640 50H420l-40 40H200l-30-30H0" fill="none" stroke="#F2B705" strokeOpacity="0.65" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="page-content">{children}</div>
    </div>
  );
}
