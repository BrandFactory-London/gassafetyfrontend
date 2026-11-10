"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Site-wide motion, applied automatically so pages need no extra markup.
 *
 * 1. Entrances: headings fade in; rows, cards, panels and tables fade and rise
 *    16px as they scroll into view. Siblings in a list or grid stagger.
 * 2. Growers: validity bars and the tile rule (.fd-grow) fill from the left
 *    when they come into view, staggered top to bottom.
 * 3. Parallax: the front door and section headings drift a little against the
 *    scroll. Desktop with a mouse only, and uses the CSS `translate` property so
 *    it never fights the entrance `transform`.
 *
 * Only items that start below the fold are hidden, and only once JS is running,
 * so nothing on screen flashes out and nothing is hidden if the script fails.
 * Reduced motion turns all of it off.
 */
const FADE = [
  ".section-head",
  "main section > h2",
  "main section > .row > h2",
  ".breadcrumb",
  "main .fd-h2",
  ".fd-area-label",
];
const UP = [
  ".grid-auto > *",
  ".grid-auto-lg > *",
  ".grid-steps > li",
  ".feature",
  ".panel-amber",
  ".panel-white",
  ".panel-soft",
  ".table-wrap",
  ".trust",
  ".faq > details",
  ".chips",
  "main .review",
  ".fd-steps > li",
  ".fd-sched-head",
  ".fd-sched-row",
  ".fd-card",
  ".fd-status-row",
  ".fd-table-box",
  ".fd-plates > *",
  ".fd-review",
  ".fd-guide",
  ".fd-split > div > .fd-lead",
];
/** Parents whose children reveal one after another. */
const STAGGER_PARENT =
  /grid-auto|grid-steps|faq|fd-steps|fd-plates|fd-guides|fd-card|fd-wrap|fd-sched/;
const STAGGER_MS = 70;
const STAGGER_CAP = 6;

/**
 * Parallax: selector, speed, max px, mode. "scroll" moves with page scroll from
 * zero (hero items, so they start exactly in place); "centre" drifts relative to
 * the viewport centre (items further down the page).
 */
type ParallaxMode = "scroll" | "centre";
const PARALLAX: [string, number, number, ParallaxMode][] = [
  [".fd-doorway", 0.12, 40, "scroll"],
  ["main .fd-h2", -0.04, 24, "centre"],
  ["main section > .heading-lg", -0.04, 24, "centre"],
];

function staggerIndex(el: Element): number {
  const parent = el.parentElement;
  if (!parent || !STAGGER_PARENT.test(parent.className)) return 0;
  const siblings = Array.prototype.filter.call(
    parent.children,
    (c: Element) => c.getAttribute("data-rv") === el.getAttribute("data-rv"),
  ) as Element[];
  return Math.min(siblings.indexOf(el), STAGGER_CAP);
}

export default function RevealController() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const main = document.querySelector("main");
    if (!main) return;
    const cleanups: (() => void)[] = [];

    /* 1. Entrances */
    const seen = new Set<Element>();
    const tag = (selectors: string[], mode: "fade" | "up") => {
      main.querySelectorAll(selectors.join(",")).forEach((el) => {
        if (seen.has(el)) return;
        // Skip anything nested inside an element already being revealed,
        // except rows inside a card, which stagger in after the card.
        for (const parent of seen) {
          if (parent.contains(el) && !parent.classList.contains("fd-card")) return;
        }
        seen.add(el);
        el.setAttribute("data-rv", mode);
      });
    };
    tag(UP, "up");
    tag(FADE, "fade");

    const pending: HTMLElement[] = [];
    seen.forEach((node) => {
      const el = node as HTMLElement;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;
      el.style.transitionDelay = `${staggerIndex(el) * STAGGER_MS}ms`;
      el.classList.add("rv", `rv-${el.getAttribute("data-rv")}`, "rv-pending");
      pending.push(el);
    });

    /* 2. Growers: always animate, even above the fold, so the bars visibly fill. */
    const growers = Array.from(main.querySelectorAll<HTMLElement>(".fd-grow"));
    growers.forEach((el, i) => {
      el.style.transitionDelay = `${150 + (i % STAGGER_CAP) * 90}ms`;
      el.classList.add("grow-pending");
    });

    // A grower scaled to zero has no area, so watch its track (parent) instead.
    const targets = new Map<Element, HTMLElement[]>();
    const watch = (target: Element, el: HTMLElement) =>
      targets.set(target, [...(targets.get(target) ?? []), el]);
    pending.forEach((el) => watch(el, el));
    growers.forEach((el) => watch(el.parentElement ?? el, el));

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          for (const el of targets.get(entry.target) ?? []) {
            el.classList.remove("rv-pending", "grow-pending");
            // Clear the stagger once revealed so hover effects respond instantly.
            timers.push(window.setTimeout(() => (el.style.transitionDelay = ""), 1400));
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    targets.forEach((_, target) => observer.observe(target));
    cleanups.push(() => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      pending.forEach((el) => {
        el.classList.remove("rv", "rv-up", "rv-fade", "rv-pending");
        el.style.transitionDelay = "";
      });
      growers.forEach((el) => {
        el.classList.remove("grow-pending");
        el.style.transitionDelay = "";
      });
    });

    /* 3. Parallax: desktop with a mouse only. */
    const desktop = window.matchMedia("(min-width: 900px) and (hover: hover)");
    if (desktop.matches) {
      const items = PARALLAX.flatMap(([sel, speed, max, mode]) =>
        Array.from(main.querySelectorAll<HTMLElement>(sel)).map((el) => ({
          el,
          speed,
          max,
          mode,
        })),
      );
      let frame = 0;
      const update = () => {
        frame = 0;
        const mid = window.innerHeight / 2;
        for (const { el, speed, max, mode } of items) {
          let raw: number;
          if (mode === "scroll") {
            raw = window.scrollY * speed;
          } else {
            // Measure without the current offset so the motion stays stable.
            const offset = parseFloat(el.dataset.px ?? "0");
            const rect = el.getBoundingClientRect();
            raw = (rect.top - offset + rect.height / 2 - mid) * speed;
          }
          const y = Math.max(-max, Math.min(max, raw));
          el.dataset.px = String(y);
          el.style.translate = `0 ${y.toFixed(1)}px`;
        }
      };
      const onScroll = () => {
        if (!frame) frame = window.requestAnimationFrame(update);
      };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (frame) window.cancelAnimationFrame(frame);
        items.forEach(({ el }) => {
          el.style.translate = "";
          delete el.dataset.px;
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
