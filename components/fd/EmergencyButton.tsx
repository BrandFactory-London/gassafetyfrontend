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
          <div className="fd-sos-head">
            <p className="fd-sos-kicker">24/7 emergency line</p>
            <p
              className="fd-sos-avail"
              aria-label={`${emergency.engineersAvailable} engineers available now`}
            >
              <span className="fd-pulse-dot" aria-hidden="true" />
              {emergency.engineersAvailable} available
            </p>
          </div>
          <h2 id="sos-title" className="fd-sos-title">
            Need a Gas Safe engineer or an electrician now?
          </h2>
          <p className="fd-sos-text">
            For a gas or electrical emergency in London, call our 24/7 line and we will send the
            nearest engineer.
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
        <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
          {/* Hazard sign: rounded white triangle with an exclamation mark */}
          <path
            d="M10.27 3.5a2 2 0 0 1 3.46 0l8.06 14A2 2 0 0 1 20.06 20.5H3.94a2 2 0 0 1-1.73-3l8.06-14z"
            fill="currentColor"
          />
          <path d="M12 9v4.5" stroke="var(--fd-sign-red)" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12" cy="16.8" r="1.25" fill="var(--fd-sign-red)" />
        </svg>
      </button>
    </div>
  );
}
