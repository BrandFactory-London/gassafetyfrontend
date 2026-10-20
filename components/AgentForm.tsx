'use client';

import { useState, type FormEvent } from 'react';

/** Phase 1: front end only. Nothing is sent; Phase 2 wires this to the enquiries table. */
export default function AgentForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="stack">
        <p style={{ fontWeight: 600, color: '#0C3536' }}>Thank you. We will call you within [one working day].</p>
        <p className="notice">Preview: this form is not connected yet, so nothing was sent.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="form-grid">
      <div className="field">
        <label htmlFor="ag-agency" className="label">Agency name</label>
        <input id="ag-agency" className="input" type="text" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="ag-name" className="label">Your name</label>
        <input id="ag-name" className="input" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="ag-email" className="label">Work email</label>
        <input id="ag-email" className="input" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="ag-phone" className="label">Phone</label>
        <input id="ag-phone" className="input" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="ag-count" className="label">Properties managed</label>
        <select id="ag-count" className="select" defaultValue="1 to 10">
          <option>1 to 10</option>
          <option>11 to 50</option>
          <option>51 to 200</option>
          <option>200+</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="ag-areas" className="label">Main areas</label>
        <input id="ag-areas" className="input" type="text" placeholder="e.g. Newham, Romford, Chelmsford" />
      </div>
      <div className="field full">
        <label htmlFor="ag-msg" className="label">Anything else we should know?</label>
        <textarea id="ag-msg" className="textarea" rows={3} />
      </div>
      <div className="full" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button type="submit" className="btn btn-primary btn-lg">Request a call back</button>
      </div>
    </form>
  );
}
