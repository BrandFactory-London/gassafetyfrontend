'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { prices } from '@/lib/site';

const TYPES = ['Flat', 'House', 'HMO', 'Commercial'];
const BEDS = ['Studio', '1', '2', '3', '4', '5+'];
const ROLES = ['I am the landlord', 'I am a letting agent'];
const SERVICES = [
  { id: 'bundle', label: 'Landlord Bundle', sub: 'Gas Safety Certificate and EICR in one visit', price: prices.bundle },
  { id: 'cp12', label: 'Gas Safety Certificate (CP12)', sub: 'Every 12 months', price: prices.cp12 },
  { id: 'eicr', label: 'EICR', sub: 'Every 5 years', price: prices.eicr },
  { id: 'alarms', label: 'Smoke and CO alarm check', sub: 'Checked and fitted to current rules', price: prices.alarmCheck },
  { id: 'boiler', label: 'Boiler service', sub: 'Annual service and safety check', price: prices.boilerService },
  { id: 'other', label: 'Repairs or remedial work', sub: 'Tell us more in the next step', price: 'Quote' },
];
const STEP_LABELS = ['Property', 'Services', 'Your details'];

export default function QuoteForm() {
  const params = useSearchParams();
  const initialService = params.get('service');
  const [step, setStep] = useState(1);
  const [postcode, setPostcode] = useState(params.get('postcode') ?? '');
  const [type, setType] = useState('Flat');
  const [beds, setBeds] = useState('2');
  const [role, setRole] = useState(ROLES[0]);
  const [picked, setPicked] = useState<Record<string, boolean>>(() => {
    const valid = SERVICES.some((s) => s.id === initialService);
    return valid && initialService ? { [initialService]: true } : { bundle: true };
  });
  const [error, setError] = useState('');

  const chosen = SERVICES.filter((s) => picked[s.id]);
  const toggle = (id: string) => setPicked((p) => ({ ...p, [id]: !p[id] }));

  const next = () => {
    if (step === 1 && !/^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/.test(postcode.trim())) {
      setError('Enter a full UK postcode, for example E17 4PP.');
      return;
    }
    if (step === 2 && chosen.length === 0) {
      setError('Choose at least one service.');
      return;
    }
    setError('');
    setStep(step + 1);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(4);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setStep(1);
    setPicked({ bundle: true });
    setPostcode('');
  };

  return (
    <div className="split split-top" style={{ gap: 32 }}>
      <div style={{ flex: '1 1 620px', minWidth: 0 }}>
        {step < 4 ? (
          <ol style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }} aria-label="Steps">
            {STEP_LABELS.map((label, i) => {
              const n = i + 1;
              const active = n === step;
              const past = n < step;
              return (
                <li
                  key={label}
                  aria-current={active ? 'step' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 14px 8px 8px',
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 600,
                    background: active ? '#0C3536' : past ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                    color: active ? '#FFFFFF' : past ? '#0C3536' : '#4C5E5B',
                    border: active ? 'none' : '1px solid #EAE3D9',
                  }}
                >
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 999,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13,
                      background: active ? '#F2B705' : past ? '#EBF3D9' : '#F1E9DD',
                      color: active ? '#0C3536' : past ? '#3F6B12' : '#4C5E5B',
                    }}
                  >
                    {past ? '✓' : n}
                  </span>
                  {label}
                </li>
              );
            })}
          </ol>
        ) : null}

        {error ? (
          <p role="alert" className="pill pill-action" style={{ marginBottom: 12, whiteSpace: 'normal' }}>
            {error}
          </p>
        ) : null}

        {step === 1 ? (
          <div className="panel-white stack-lg" style={{ gap: 28 }}>
            <div className="field" style={{ maxWidth: 360 }}>
              <label htmlFor="qf-pc" className="label">
                Property postcode
              </label>
              <input id="qf-pc" className="input" type="text" autoComplete="postal-code" placeholder="e.g. RM1 3ER" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
              <span className="hint">We cover all London boroughs and most of Essex.</span>
            </div>
            <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
              <legend className="label" style={{ marginBottom: 10 }}>
                Property type
              </legend>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: 10 }}>
                {TYPES.map((t) => (
                  <button key={t} type="button" className="option" style={{ textAlign: 'center' }} aria-pressed={type === t} onClick={() => setType(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
              <legend className="label" style={{ marginBottom: 10 }}>
                Bedrooms
              </legend>
              <div className="chips">
                {BEDS.map((b) => (
                  <button key={b} type="button" className="option option-pill" style={{ minWidth: 64, textAlign: 'center' }} aria-pressed={beds === b} onClick={() => setBeds(b)}>
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="button" className="btn btn-primary btn-lg" onClick={next}>
                Continue
              </button>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="panel-white stack-lg">
            <h2 className="heading-sm" style={{ fontSize: 24 }}>
              What do you need?
            </h2>
            <div className="stack">
              {SERVICES.map((s) => {
                const on = !!picked[s.id];
                return (
                  <button
                    key={s.id}
                    type="button"
                    className="option"
                    aria-pressed={on}
                    onClick={() => toggle(s.id)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, minHeight: 64 }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <span
                        aria-hidden="true"
                        style={{
                          width: 22,
                          height: 22,
                          flex: 'none',
                          borderRadius: 6,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 14,
                          fontWeight: 700,
                          color: '#fff',
                          background: on ? '#1B7A73' : '#fff',
                          border: `1.5px solid ${on ? '#1B7A73' : '#8F8070'}`,
                        }}
                      >
                        {on ? '✓' : ''}
                      </span>
                      <span>
                        <span style={{ display: 'block' }}>{s.label}</span>
                        <span className="small muted" style={{ display: 'block', fontWeight: 400 }}>
                          {s.sub}
                        </span>
                      </span>
                    </span>
                    <span style={{ fontWeight: 700, color: '#0C3536', whiteSpace: 'nowrap' }}>{s.price}</span>
                  </button>
                );
              })}
            </div>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>
                ← Back
              </button>
              <button type="button" className="btn btn-primary btn-lg" onClick={next}>
                Continue
              </button>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <form className="panel-white stack-lg" onSubmit={submit}>
            <h2 className="heading-sm" style={{ fontSize: 24 }}>
              Your details
            </h2>
            <div className="chips">
              {ROLES.map((r) => (
                <button key={r} type="button" className="option option-pill" aria-pressed={role === r} onClick={() => setRole(r)}>
                  {r}
                </button>
              ))}
            </div>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="qf-name" className="label">Full name</label>
                <input id="qf-name" className="input" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="qf-phone" className="label">Phone</label>
                <input id="qf-phone" className="input" type="tel" autoComplete="tel" required />
              </div>
              <div className="field full">
                <label htmlFor="qf-email" className="label">Email</label>
                <input id="qf-email" className="input" type="email" autoComplete="email" required />
              </div>
            </div>
            <div style={{ background: '#FAF7F2', border: '1px solid #EAE3D9', borderRadius: 12, padding: 20 }}>
              <p style={{ fontWeight: 600, color: '#0C3536', marginBottom: 12 }}>
                Is the property occupied? <span className="muted" style={{ fontWeight: 400 }}>Optional: we will arrange access with your tenant.</span>
              </p>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="qf-tname" className="label">Tenant name</label>
                  <input id="qf-tname" className="input" type="text" />
                </div>
                <div className="field">
                  <label htmlFor="qf-tphone" className="label">Tenant phone</label>
                  <input id="qf-tphone" className="input" type="tel" />
                </div>
              </div>
            </div>
            <div className="field">
              <label htmlFor="qf-notes" className="label">
                Anything else? <span className="hint">Preferred dates, access notes, key collection</span>
              </label>
              <textarea id="qf-notes" className="textarea" rows={3} />
            </div>
            <label className="check">
              <input type="checkbox" required />
              <span>
                I agree to be contacted about this request. See our <Link href="/privacy">privacy policy</Link>.
              </span>
            </label>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <button type="button" className="btn btn-ghost" onClick={() => setStep(2)}>
                ← Back
              </button>
              <button type="submit" className="btn btn-primary btn-lg">
                Request my price
              </button>
            </div>
          </form>
        ) : null}

        {step === 4 ? (
          <div className="panel-white" role="status" style={{ padding: 48 }}>
            <svg width="56" height="56" viewBox="0 0 36 36" aria-hidden="true">
              <circle cx="18" cy="18" r="17" fill="#EBF3D9" />
              <path d="M11 18.5l4.5 4.5L25 13.5" fill="none" stroke="#3F6B12" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="heading-md" style={{ margin: '18px 0 8px' }}>
              Request received
            </h2>
            <p className="body" style={{ marginBottom: 24 }}>
              Thank you. We will email your fixed price within [X working hours]. Your reference is <strong>[KS-0000]</strong>.
            </p>
            <h3 className="heading-sm" style={{ fontSize: 17, marginBottom: 10 }}>
              What happens next
            </h3>
            <ol className="body" style={{ paddingLeft: 20, marginBottom: 20, display: 'grid', gap: 6 }}>
              <li>We confirm your price and suggest visit dates.</li>
              <li>We contact your tenant to arrange access, if you gave their details.</li>
              <li>Your engineer visits and your certificate is emailed within 24 hours.</li>
            </ol>
            <p className="notice" style={{ marginBottom: 24 }}>
              Preview: this form is not connected yet, so nothing was sent.
            </p>
            <div className="row">
              <Link href="/" className="btn btn-secondary">
                Back to home
              </Link>
              <button type="button" className="btn btn-ghost" onClick={restart}>
                Price another property
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <aside className="panel-soft" style={{ flex: '1 1 320px', minWidth: 0 }}>
        <h2 className="heading-sm" style={{ marginBottom: 16 }}>
          Your request
        </h2>
        <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '8px 16px', fontSize: 15 }}>
          <dt className="muted">Postcode</dt>
          <dd style={{ margin: 0, fontWeight: 600 }}>{postcode.trim() ? postcode.toUpperCase() : 'Not entered'}</dd>
          <dt className="muted">Property</dt>
          <dd style={{ margin: 0, fontWeight: 600 }}>{type}</dd>
          <dt className="muted">Bedrooms</dt>
          <dd style={{ margin: 0, fontWeight: 600 }}>{beds}</dd>
          <dt className="muted">You are</dt>
          <dd style={{ margin: 0, fontWeight: 600 }}>{role === ROLES[0] ? 'Landlord' : 'Letting agent'}</dd>
        </dl>
        <div style={{ borderTop: '1px solid #EAE3D9', margin: '18px 0 14px' }} />
        <p className="small muted" style={{ marginBottom: 8 }}>
          Services
        </p>
        {chosen.length > 0 ? (
          <ul style={{ listStyle: 'none', display: 'grid', gap: 6, fontSize: 15 }}>
            {chosen.map((c) => (
              <li key={c.id} style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <span>{c.label}</span>
                <strong>{c.price}</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p className="small muted">None chosen yet</p>
        )}
        <div style={{ borderTop: '1px solid #EAE3D9', margin: '18px 0 14px' }} />
        <ul style={{ listStyle: 'none', display: 'grid', gap: 8, fontSize: 14 }} className="body">
          <li>Gas Safe, NAPIT and NIC registered</li>
          <li>Fixed prices, VAT included</li>
          <li>Certificate within 24 hours</li>
        </ul>
      </aside>
    </div>
  );
}
