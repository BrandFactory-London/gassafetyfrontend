/**
 * Landing background dot field ("a hand under a tablecloth"): an even grid
 * of tiny, faint accent dots; around the pointer a soft gaussian bulge
 * where dots grow and are pushed outward, like a radial halftone. The bulge centre trails the pointer with exponential
 * smoothing and eases back to flat when the pointer leaves the window.
 *
 * Kept free of React so it can be unit-tested with stub window, document
 * and canvas objects. `DotFieldCanvas` (dot-field-canvas.tsx) calls
 * `attachDotField` from an effect and runs the returned cleanup on unmount.
 */

/** Tunables, reported to Amir so they can be adjusted by number. */
export const DOT_FIELD = {
  /** Grid spacing between dot centres, CSS px. */
  spacing: 22,
  /** Resting dot radius, CSS px. */
  restRadius: 0.9,
  /** Dot radius at the bulge centre, CSS px. */
  peakRadius: 3.2,
  /** Resting dot opacity. Keystone uses the yellow accent, which is light,
   *  so dots over text lighten rather than darken it: body text (--ink-body)
   *  stays well above 4.5:1 even under a full-strength dot. */
  restAlpha: 0.14,
  /** Dot opacity at the bulge centre: the accent glows near the pointer. */
  peakAlpha: 0.55,
  /** Gaussian sigma of the bulge, CSS px. The bulge reads to roughly
   *  2.4 x sigma (about 182px), where it has faded to ~5%. */
  sigma: 77,
  /** Peak outward displacement of a dot, CSS px (at distance = sigma). */
  push: 5.6,
  /** Time constant for the bulge centre following the pointer, ms.
   *  Larger trails more; ~63% of the way after one time constant. */
  followMs: 140,
  /** Time constant for the bulge rising / easing back to flat, ms. */
  strengthMs: 260,
  /** Settled when the centre is within this many px of the pointer and
   *  the strength within `settleStrength` of its target. */
  settlePx: 0.3,
  settleStrength: 0.004,
  /** Canvas backing-store scale cap. */
  maxDpr: 2,
  /** Resize debounce, ms. */
  resizeDebounceMs: 150,
} as const;

export const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export type Bulge = { x: number; y: number; strength: number };

/** Dot count for a viewport, for reporting. */
export function dotCount(width: number, height: number, spacing = DOT_FIELD.spacing): number {
  return (Math.ceil(width / spacing) + 1) * (Math.ceil(height / spacing) + 1);
}

/** Position, radius and opacity of the dot whose grid position is (gx, gy). */
export function dotAt(
  gx: number,
  gy: number,
  bulge: Bulge,
  p: typeof DOT_FIELD = DOT_FIELD,
): { x: number; y: number; r: number; a: number } {
  if (bulge.strength <= 0) return { x: gx, y: gy, r: p.restRadius, a: p.restAlpha };
  const dx = gx - bulge.x;
  const dy = gy - bulge.y;
  const d2 = dx * dx + dy * dy;
  const g = Math.exp(-d2 / (2 * p.sigma * p.sigma)) * bulge.strength;
  if (g < 0.002) return { x: gx, y: gy, r: p.restRadius, a: p.restAlpha };
  const d = Math.sqrt(d2);
  // Outward push peaks at d = sigma and is zero at the centre.
  const shift = d > 0 ? (p.push * (d / p.sigma) * g) / d : 0;
  return {
    x: gx + dx * shift,
    y: gy + dy * shift,
    r: p.restRadius + (p.peakRadius - p.restRadius) * g,
    a: p.restAlpha + (p.peakAlpha - p.restAlpha) * g,
  };
}

/** One exponential-smoothing step towards `target`. */
export function ease(current: number, target: number, dtMs: number, tauMs: number): number {
  return current + (target - current) * (1 - Math.exp(-dtMs / tauMs));
}

type Listener = (e: { clientX?: number; clientY?: number; relatedTarget?: unknown }) => void;

export type DotFieldWindow = {
  innerWidth: number;
  innerHeight: number;
  devicePixelRatio: number;
  matchMedia(query: string): { matches: boolean };
  addEventListener(type: string, l: Listener, o?: AddEventListenerOptions): void;
  removeEventListener(type: string, l: Listener): void;
  requestAnimationFrame(cb: (t: number) => void): number;
  cancelAnimationFrame(handle: number): void;
  setTimeout(cb: () => void, ms: number): number;
  clearTimeout(handle: number): void;
  getComputedStyle(el: unknown): { getPropertyValue(name: string): string };
};

export type DotFieldDocument = {
  visibilityState: string;
  addEventListener(type: string, l: () => void): void;
  removeEventListener(type: string, l: () => void): void;
};

export type DotFieldCtx = {
  setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;
  clearRect(x: number, y: number, w: number, h: number): void;
  beginPath(): void;
  arc(x: number, y: number, r: number, s: number, e: number): void;
  fill(): void;
  fillStyle: string;
  globalAlpha: number;
};

export type DotFieldCanvas = {
  width: number;
  height: number;
  getContext(type: "2d"): DotFieldCtx | null;
  classList: { add(c: string): void };
};

export type DotFieldHandle = {
  cleanup: () => void;
  /** For tests and reporting: whether a frame is currently scheduled. */
  isRunning: () => boolean;
  /** Whether the pointer-driven bulge is enabled (fine pointer, no
   *  reduced motion). */
  interactive: boolean;
};

/**
 * Draws the resting field and, on fine pointers without reduced motion,
 * runs the bulge. The rAF loop only runs while the bulge is moving or
 * settling, and is cancelled when the tab is hidden.
 */
export function attachDotField(
  win: DotFieldWindow,
  doc: DotFieldDocument,
  canvas: DotFieldCanvas,
  p: typeof DOT_FIELD = DOT_FIELD,
): DotFieldHandle {
  const ctx = canvas.getContext("2d");
  if (!ctx) return { cleanup: () => {}, isRunning: () => false, interactive: false };

  const interactive =
    win.matchMedia(FINE_POINTER_QUERY).matches && !win.matchMedia(REDUCED_MOTION_QUERY).matches;
  const color = win.getComputedStyle(canvas).getPropertyValue("--yellow-500").trim() || "currentColor";

  let w = 0;
  let h = 0;
  const size = () => {
    const dpr = Math.min(win.devicePixelRatio || 1, p.maxDpr);
    w = win.innerWidth;
    h = win.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  // Bulge state: current (drawn) and target (pointer).
  const bulge: Bulge = { x: 0, y: 0, strength: 0 };
  const target = { x: 0, y: 0, strength: 0 };
  let placed = false; // first pointer position: start the centre there

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = color;
    const s = p.spacing;
    for (let gy = 0; gy <= h + s; gy += s) {
      for (let gx = 0; gx <= w + s; gx += s) {
        const dot = dotAt(gx, gy, bulge, p);
        ctx.globalAlpha = dot.a;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  };

  let frame = 0;
  let last = 0;
  const settled = () =>
    Math.abs(target.x - bulge.x) < p.settlePx &&
    Math.abs(target.y - bulge.y) < p.settlePx &&
    Math.abs(target.strength - bulge.strength) < p.settleStrength;

  const tick = (t: number) => {
    frame = 0;
    const dt = last ? Math.min(t - last, 64) : 16;
    last = t;
    bulge.x = ease(bulge.x, target.x, dt, p.followMs);
    bulge.y = ease(bulge.y, target.y, dt, p.followMs);
    bulge.strength = ease(bulge.strength, target.strength, dt, p.strengthMs);
    if (settled()) {
      bulge.x = target.x;
      bulge.y = target.y;
      bulge.strength = target.strength;
      draw();
      last = 0;
      return; // loop stops until the next pointer event
    }
    draw();
    start();
  };
  const start = () => {
    if (!frame && doc.visibilityState !== "hidden") frame = win.requestAnimationFrame(tick);
  };
  const stop = () => {
    if (frame) win.cancelAnimationFrame(frame);
    frame = 0;
    last = 0;
  };

  const onMove: Listener = (e) => {
    target.x = e.clientX ?? target.x;
    target.y = e.clientY ?? target.y;
    target.strength = 1;
    if (!placed) {
      bulge.x = target.x;
      bulge.y = target.y;
      placed = true;
    }
    start();
  };
  // Pointer left the window: ease back to flat where it is.
  const onOut: Listener = (e) => {
    if (e.relatedTarget) return;
    target.strength = 0;
    start();
  };
  const onVisibility = () => {
    if (doc.visibilityState === "hidden") stop();
    else if (!settled()) start();
  };
  let resizeTimer = 0;
  const onResize = () => {
    if (resizeTimer) win.clearTimeout(resizeTimer);
    resizeTimer = win.setTimeout(() => {
      resizeTimer = 0;
      size();
      draw();
    }, p.resizeDebounceMs);
  };

  size();
  draw();
  canvas.classList.add("ks-dot-field-ready"); // fades the canvas in

  win.addEventListener("resize", onResize, { passive: true });
  if (interactive) {
    win.addEventListener("pointermove", onMove, { passive: true });
    win.addEventListener("pointerout", onOut, { passive: true });
    doc.addEventListener("visibilitychange", onVisibility);
  }

  return {
    interactive,
    isRunning: () => frame !== 0,
    cleanup: () => {
      stop();
      if (resizeTimer) win.clearTimeout(resizeTimer);
      win.removeEventListener("resize", onResize);
      if (interactive) {
        win.removeEventListener("pointermove", onMove);
        win.removeEventListener("pointerout", onOut);
        doc.removeEventListener("visibilitychange", onVisibility);
      }
    },
  };
}
