"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Sticky Get a price bar for phones. Hidden while the door's postcode form is on screen,
 * so it never covers the main action; shown once the visitor scrolls past it.
 */
export default function MobileCtaBar({
  label,
  watchId = "door-postcode",
}: {
  label: string;
  watchId?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById(watchId)?.closest("form") ?? null;
    if (!target || !("IntersectionObserver" in window)) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setShow(!entry?.isIntersecting));
    io.observe(target);
    return () => io.disconnect();
  }, [watchId]);

  return (
    <div className="fd-mobile-bar" data-show={show ? "true" : "false"} aria-hidden={!show}>
      <div className="fd-mobile-bar-text">
        <strong>{label}</strong>
        <span className="fd-small">Tenant access arranged</span>
      </div>
      <Link
        href="/book"
        className="fd-btn fd-btn-primary"
        style={{ fontSize: 15 }}
        tabIndex={show ? 0 : -1}
      >
        Get a price
      </Link>
    </div>
  );
}
