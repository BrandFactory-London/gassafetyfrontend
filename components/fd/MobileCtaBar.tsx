"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Sticky booking bar for phones. Hidden while the page's main action is on screen, so it
 * never covers it; shown once the visitor scrolls past. `watch` is a CSS selector for that
 * action (a form is watched whole when the selector points inside one).
 */
export default function MobileCtaBar({
  label,
  sub = "Tenant access arranged",
  button = "Get a price",
  href = "/book",
  watch = "#door-postcode",
}: {
  label: string;
  sub?: string;
  button?: string;
  href?: string;
  watch?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = document.querySelector(watch);
    const target = el?.closest("form") ?? el;
    if (!target || !("IntersectionObserver" in window)) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setShow(!entry?.isIntersecting));
    io.observe(target);
    return () => io.disconnect();
  }, [watch]);

  return (
    <div className="fd-mobile-bar" data-show={show ? "true" : "false"} aria-hidden={!show}>
      <div className="fd-mobile-bar-text">
        <strong>{label}</strong>
        <span className="fd-small">{sub}</span>
      </div>
      <Link
        href={href}
        className="fd-btn fd-btn-primary"
        style={{ fontSize: 15 }}
        tabIndex={show ? 0 : -1}
      >
        {button}
      </Link>
    </div>
  );
}
