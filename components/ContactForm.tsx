'use client';

import { useState, type FormEvent } from 'react';
import { site } from '@/lib/site';

/** Phase 1: front end only. Nothing is sent; Phase 2 wires this to the enquiries table. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="stack">
        <p style={{ fontWeight: 600, color: '#0C3536' }}>Thank you. We will reply within {site.quoteResponse}.</p>
        <p className="notice">Preview: this form is not connected yet, so nothing was sent.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="form-grid">
      <div className="field">
        <label htmlFor="ct-name" className="label">Name</label>
        <input id="ct-name" className="input" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="ct-email" className="label">Email</label>
        <input id="ct-email" className="input" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="ct-phone" className="label">
          Phone <span className="hint">(optional)</span>
        </label>
        <input id="ct-phone" className="input" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="ct-role" className="label">I am a</label>
        <select id="ct-role" className="select" defaultValue="Landlord">
          <option>Landlord</option>
          <option>Letting agent</option>
          <option>Tenant</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="ct-msg" className="label">Message</label>
        <textarea id="ct-msg" className="textarea" rows={4} required />
      </div>
      <div className="full">
        <button type="submit" className="btn btn-primary btn-lg">Send message</button>
      </div>
    </form>
  );
}
