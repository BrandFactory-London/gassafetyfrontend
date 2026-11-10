"use client";

import { useState, type FormEvent } from "react";

/** Phase 1: front end only. Nothing is sent; Phase 2 wires this to the enquiries table. */
export default function WaitlistForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="stack">
        <p style={{ fontWeight: 600, color: "#16181A" }}>
          You are on the list. We will email you as soon as the maintenance plan opens.
        </p>
        <p className="notice">Preview: this form is not connected yet, so nothing was sent.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="form-grid">
      <div className="field">
        <label htmlFor="wl-name" className="label">
          Name
        </label>
        <input id="wl-name" className="input" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="wl-email" className="label">
          Email
        </label>
        <input id="wl-email" className="input" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="wl-role" className="label">
          I am a
        </label>
        <select id="wl-role" className="select" defaultValue="Landlord">
          <option>Landlord</option>
          <option>Letting agent</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="wl-count" className="label">
          Properties
        </label>
        <select id="wl-count" className="select" defaultValue="1 to 3">
          <option>1 to 3</option>
          <option>4 to 10</option>
          <option>11 to 50</option>
          <option>51 or more</option>
        </select>
      </div>
      <div className="field full">
        <button type="submit" className="btn btn-primary">
          Join the waiting list
        </button>
      </div>
    </form>
  );
}
