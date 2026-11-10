"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

/**
 * Postcode entry that hands off to the quote form. Phase 1: no back end.
 * "door" draws it as the brass letter plate on the front door; "band" is the plain version.
 */
export default function PostcodeLetterbox({
  id,
  variant,
  note,
}: {
  id: string;
  variant: "door" | "band";
  note?: string;
}) {
  const router = useRouter();
  const [postcode, setPostcode] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pc = postcode.trim();
    router.push(pc ? `/book?postcode=${encodeURIComponent(pc)}` : "/book");
  };

  const input = (className: string) => (
    <input
      id={id}
      className={className}
      type="text"
      autoComplete="postal-code"
      placeholder="E17 4PP"
      value={postcode}
      onChange={(e) => setPostcode(e.target.value)}
    />
  );

  if (variant === "door") {
    return (
      <form className="fd-door-form" onSubmit={onSubmit} aria-label="Get a fixed price">
        <div className="fd-letterplate">
          <label htmlFor={id}>Property postcode</label>
          <div className="fd-flap" aria-hidden="true" />
          {input("fd-slot")}
        </div>
        <button type="submit" className="fd-btn fd-btn-paper">
          Get my fixed price
        </button>
        {note ? <p className="fd-door-note">{note}</p> : null}
      </form>
    );
  }

  return (
    <form className="fd-cta-form" onSubmit={onSubmit} aria-label="Get a fixed price">
      <label htmlFor={id}>Property postcode</label>
      <div className="fd-cta-row">
        {input("fd-cta-input")}
        <button
          type="submit"
          className="fd-btn fd-btn-paper"
          style={{ height: 60, padding: "0 26px", fontSize: 17 }}
        >
          Get my fixed price
        </button>
      </div>
      {note ? (
        <p className="fd-door-note" style={{ fontSize: 14 }}>
          {note}
        </p>
      ) : null}
    </form>
  );
}
