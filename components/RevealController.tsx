'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Scroll-triggered entrances, applied automatically so pages need no markup.
 * Headings fade in; cards, panels and tables float up from below; items in a
 * grid stagger. Only items that start below the fold are hidden (once JS
 * confirms it), so nothing on screen ever flashes out. Reduced motion: off.
 */
const FADE = ['.section-head', 'main section > h2', 'main section > .row > h2', '.breadcrumb'];
const UP = [
  '.grid-auto > *',
  '.grid-auto-lg > *',
  '.grid-steps > li',
  '.feature',
  '.panel-amber',
  '.panel-white',
  '.panel-soft',
  '.table-wrap',
  '.trust',
  '.faq > details',
  '.chips',
  'main .review',
];
const STAGGER_MS = 90;

export default function RevealController() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;

    const main = document.querySelector('main');
    if (!main) return;

    const seen = new Set<Element>();
    const tag = (selectors: string[], mode: 'fade' | 'up') => {
      main.querySelectorAll(selectors.join(',')).forEach((el) => {
        if (seen.has(el)) return;
        // Skip anything nested inside an element already being revealed.
        for (const parent of seen) if (parent.contains(el)) return;
        seen.add(el);
        el.setAttribute('data-rv', mode);
      });
    };
    tag(UP, 'up');
    tag(FADE, 'fade');

    const pending: HTMLElement[] = [];
    seen.forEach((node) => {
      const el = node as HTMLElement;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;
      const parent = el.parentElement;
      const isGridChild = parent ? /grid-auto|grid-steps|faq/.test(parent.className) : false;
      const index = isGridChild && parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
      el.style.transitionDelay = `${(index % 4) * STAGGER_MS}ms`;
      el.classList.add('rv', `rv-${el.getAttribute('data-rv')}`, 'rv-pending');
      pending.push(el);
    });
    if (pending.length === 0) return;

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.remove('rv-pending');
          observer.unobserve(el);
          // Clear the stagger once revealed so hover effects respond instantly.
          timers.push(window.setTimeout(() => (el.style.transitionDelay = ''), 1100));
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    pending.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      pending.forEach((el) => {
        el.classList.remove('rv', 'rv-up', 'rv-fade', 'rv-pending');
        el.style.transitionDelay = '';
      });
    };
  }, [pathname]);

  return null;
}
