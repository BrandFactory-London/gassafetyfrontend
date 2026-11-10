"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Step = "ask" | "call" | "help" | "sent";

const EMERGENCY_SIGNS = [
  "Smell of gas",
  "Carbon monoxide alarm sounding",
  "Sparking or a burning smell",
  "No power",
  "No heating or hot water",
];

/**
 * Round red emergency button, bottom right on phones. Opens a short flow:
 * 1. "Is this an emergency?" with common signs.
 * 2a. Yes: national gas emergency line first for gas or CO, then the 24/7 call button.
 * 2b. No: an urgent help form (Phase 1: shows a confirmation and sends nothing).
 * Sits above the Get a price bar when that bar is showing (see .fd-sos in front-door.css).
 */
export default function EmergencyButton() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("ask");
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { emergency } = site;

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    cardRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      // A step change removes the clicked button from the page; that is not an outside click.
      if (!target.isConnected) return;
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

  // Move focus to the card at each step so keyboard and screen reader users follow along.
  useEffect(() => {
    if (open) cardRef.current?.focus();
  }, [step, open]);

  const go = (next: Step) => setStep(next);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    go("sent");
  };

  const back = (to: Step) => (
    <button type="button" className="fd-sos-back" onClick={() => go(to)}>
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M15 6l-6 6 6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back
    </button>
  );

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
          data-step={step}
        >
          <button type="button" className="fd-sos-close" aria-label="Close" onClick={close}>
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

          {step === "ask" ? (
            <>
              <h2 id="sos-title" className="fd-sos-title">
                Is this an emergency?
              </h2>
              <ul className="fd-sos-signs">
                {EMERGENCY_SIGNS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="fd-sos-choices">
                <button type="button" className="fd-btn fd-sos-call" onClick={() => go("call")}>
                  Yes, it&apos;s an emergency
                </button>
                <button type="button" className="fd-btn fd-sos-alt" onClick={() => go("help")}>
                  No, but I need help today
                </button>
              </div>
            </>
          ) : null}

          {step === "call" ? (
            <>
              {back("ask")}
              <h2 id="sos-title" className="fd-sos-title">
                Call us now
              </h2>
              <div className="fd-sos-gas" role="note">
                <strong>Smell gas or a carbon monoxide alarm sounding?</strong> Leave the property,
                do not use switches or flames, and call the National Gas Emergency Service free on{" "}
                <a href="tel:0800111999">0800 111 999</a> first.
              </div>
              <p className="fd-sos-text">
                For any other urgent gas or electrical fault in London, our on-call engineer will
                answer and send the nearest engineer.
              </p>
              <a href={emergency.phoneHref} className="fd-btn fd-sos-call">
                Call now {emergency.phone}
              </a>
            </>
          ) : null}

          {step === "help" ? (
            <>
              {back("ask")}
              <h2 id="sos-title" className="fd-sos-title">
                Get urgent help
              </h2>
              <p className="fd-sos-text">
                Tell us what is wrong and we will call you back within {emergency.callbackTime}.
              </p>
              <form className="fd-sos-form" onSubmit={onSubmit}>
                <label className="fd-sos-field">
                  <span>Name</span>
                  <input className="input" type="text" autoComplete="name" required />
                </label>
                <label className="fd-sos-field">
                  <span>Phone</span>
                  <input className="input" type="tel" autoComplete="tel" required />
                </label>
                <label className="fd-sos-field">
                  <span>Property postcode</span>
                  <input
                    className="input"
                    type="text"
                    autoComplete="postal-code"
                    autoCapitalize="characters"
                    required
                  />
                </label>
                <label className="fd-sos-field">
                  <span>The problem</span>
                  <select className="select" defaultValue="" required>
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option>Gas appliance or boiler</option>
                    <option>No heating or hot water</option>
                    <option>Electrical fault</option>
                    <option>Smoke or CO alarm</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label className="fd-sos-field">
                  <span>I am the</span>
                  <select className="select" defaultValue="Landlord">
                    <option>Landlord</option>
                    <option>Tenant</option>
                    <option>Letting agent</option>
                  </select>
                </label>
                <label className="fd-sos-field">
                  <span>What is happening? (optional)</span>
                  <textarea className="input" rows={3} />
                </label>
                <button type="submit" className="fd-btn fd-sos-call">
                  Request a call back
                </button>
              </form>
            </>
          ) : null}

          {step === "sent" ? (
            <>
              <h2 id="sos-title" className="fd-sos-title">
                We&apos;ve got it
              </h2>
              <p className="fd-sos-text" role="status">
                An engineer will call you back within {emergency.callbackTime}. If things get worse,
                call us now on{" "}
                <a href={emergency.phoneHref} className="fd-sos-inline">
                  {emergency.phone}
                </a>
                .
              </p>
              <p className="fd-sos-safety">
                Preview: this form is not connected yet, so nothing was sent.
              </p>
            </>
          ) : null}

          {step === "ask" || step === "help" ? (
            <p className="fd-sos-safety">
              Smell gas? Call the National Gas Emergency Service free on{" "}
              <a href="tel:0800111999">0800 111 999</a>.
            </p>
          ) : null}
        </div>
      ) : null}
      <button
        ref={buttonRef}
        type="button"
        className="fd-sos-button"
        aria-expanded={open}
        aria-label={open ? "Close emergency call-out" : "Emergency call-out, 24/7"}
        onClick={() => {
          if (!open) setStep("ask");
          setOpen((v) => !v);
        }}
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
