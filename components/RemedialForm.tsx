'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/lib/site';

/** Phase 1: front end only. Nothing is sent; Phase 2 wires this to the enquiries table. */
export default function RemedialForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="stack">
        <p style={{ fontWeight: 600, color: '#0C3536' }}>Report received.</p>
        <p className="small">We will reply with a fixed quote within {site.quoteResponse}.</p>
        <p className="notice">Preview: this form is not connected yet, so nothing was sent.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="form-grid">
      <div className="field full">
        <label htmlFor="rw-file" className="label">
          Report (PDF or photo)
        </label>
        <input id="rw-file" type="file" accept=".pdf,image/*" className="input" style={{ paddingTop: 14 }} />
      </div>
      <div className="field">
        <label htmlFor="rw-postcode" className="label">
          Property postcode
        </label>
        <input id="rw-postcode" className="input" type="text" autoComplete="postal-code" required />
      </div>
      <div className="field">
        <label htmlFor="rw-date" className="label">
          Date of inspection
        </label>
        <input id="rw-date" className="input" type="date" />
      </div>
      <div className="field">
        <label htmlFor="rw-name" className="label">
          Your name
        </label>
        <input id="rw-name" className="input" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="rw-phone" className="label">
          Phone
        </label>
        <input id="rw-phone" className="input" type="tel" autoComplete="tel" />
      </div>
      <div className="field full">
        <label htmlFor="rw-email" className="label">
          Email
        </label>
        <input id="rw-email" className="input" type="email" autoComplete="email" required />
      </div>
      <div className="field full">
        <label htmlFor="rw-tenant" className="label">
          Tenant contact <span className="hint">(optional)</span>
        </label>
        <input id="rw-tenant" className="input" type="text" />
      </div>
      <div className="full">
        <button type="submit" className="btn btn-primary btn-lg">
          Get my fixed quote
        </button>
      </div>
    </form>
  );
}
