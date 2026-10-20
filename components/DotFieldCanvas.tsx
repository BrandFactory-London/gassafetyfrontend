'use client';

import { useEffect, useRef } from 'react';
import { attachDotField, type DotFieldCanvas as CanvasLike } from '@/lib/dot-field';

/**
 * Fixed, decorative canvas of accent dots that swell around the pointer
 * (ported from the BespokeQuotr landing page). Never interactive itself;
 * it listens to pointer moves on the window. Off on touch screens and for
 * reduced-motion users, where it draws the resting field only.
 */
export default function DotFieldCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    return attachDotField(window, document, canvas as unknown as CanvasLike).cleanup;
  }, []);
  return <canvas ref={ref} aria-hidden="true" className="ks-dot-field" />;
}
