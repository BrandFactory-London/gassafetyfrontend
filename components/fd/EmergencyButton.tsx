"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

/**
 * Round red emergency button, bottom right on phones. Opens a card with the 24/7 number,
 * an engineers-available indicator and the national gas emergency advice. Sits above the
 * Get a price bar when that bar is showing (see .fd-sos in front-door.css).
 */
export default function EmergencyButton() {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { emergency } = site;

  useEffect(() => {
    if (!open) return;
    cardRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!cardRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <div className="fd-sos" data-open={open ? "true" : "false"}>
      {open ? (
        <div
          ref={cardRef}
          className="fd-sos-card"
          role="dialog"
          aria-modal="false"
          aria-labelledby="sos-title"
          tabIndex={-1}
        >
          <button
            type="button"
            className="fd-sos-close"
            aria-label="Close"
            onClick={() => {
              setOpen(false);
              buttonRef.current?.focus();
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <p className="fd-sos-kicker">24/7 emergency line</p>
          <h2 id="sos-title" className="fd-sos-title">
            Need a Gas Safe engineer or an electrician now?
          </h2>
          <p className="fd-sos-text">
            For a gas or electrical emergency in London, call our 24/7 line and we will send the
            nearest engineer.
          </p>
          <p className="fd-sos-status">
            <span className="fd-pulse-dot" aria-hidden="true" />
            {emergency.engineersAvailable} engineers available now
          </p>
          <a href={emergency.phoneHref} className="fd-btn fd-sos-call">
            Call {emergency.phone}
          </a>
          <p className="fd-sos-safety">
            Smell gas? Leave the property, do not use switches or flames, and call the National Gas
            Emergency Service free on <a href="tel:0800111999">0800 111 999</a>.
          </p>
        </div>
      ) : null}
      <button
        ref={buttonRef}
        type="button"
        className="fd-sos-button"
        aria-expanded={open}
        aria-label={open ? "Close emergency call-out" : "Emergency call-out, 24/7"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="fd-sos-ring" aria-hidden="true" />
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {/* Beacon: dome, base and light rays */}
          <path d="M7 17v-4a5 5 0 0 1 10 0v4" fill="currentColor" />
          <rect x="5" y="17" width="14" height="3" rx="1" fill="currentColor" />
          <path
            d="M12 3v2M4.2 6.2l1.4 1.4M19.8 6.2l-1.4 1.4M2 12h2M20 12h2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
