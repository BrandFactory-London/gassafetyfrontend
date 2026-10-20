'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';

type Tone = 'valid' | 'due' | 'action' | 'neutral';
type Answers = Record<string, string>;
type Question = { id: string; title: string; help: string; options: [string, string][]; skipIfNoGas?: boolean };
type Result = { name: string; tone: Tone; status: string; note: string };

const QUESTIONS: Question[] = [
  { id: 'gas', title: 'Does the property have any gas appliances?', help: 'For example a gas boiler, cooker, hob or gas fire.', options: [['yes', 'Yes'], ['no', 'No'], ['unsure', 'Not sure']] },
  { id: 'gasDate', title: 'When was the last gas safety check?', help: 'The date is on your Gas Safety Certificate (CP12).', options: [['recent', 'Within the last 12 months'], ['old', 'More than 12 months ago'], ['unsure', 'Never, or not sure']], skipIfNoGas: true },
  { id: 'eicr', title: 'When was the last electrical inspection (EICR)?', help: 'The date is on your Electrical Installation Condition Report.', options: [['recent', 'Within the last 5 years'], ['old', 'More than 5 years ago'], ['unsure', 'Never, or not sure']] },
  { id: 'smoke', title: 'Is there a working smoke alarm on every storey used as living space?', help: 'This includes single-storey flats and every floor of a house.', options: [['yes', 'Yes'], ['no', 'No'], ['unsure', 'Not sure']] },
  { id: 'co', title: 'Is there a carbon monoxide alarm in every room with a fixed combustion appliance?', help: 'For example a boiler, gas fire or wood burner. Gas cookers are exempt.', options: [['yes', 'Yes'], ['no', 'No'], ['unsure', 'Not sure'], ['none', 'There are no such appliances']] },
  { id: 'hmo', title: 'Is the property an HMO?', help: 'Let to 3 or more people from 2 or more households who share a kitchen or bathroom.', options: [['yes', 'Yes'], ['no', 'No'], ['unsure', 'Not sure']] },
];

const visible = (a: Answers) => QUESTIONS.filter((q) => !(q.skipIfNoGas && a.gas === 'no'));

function buildResults(a: Answers): Result[] {
  const out: Result[] = [];
  const add = (name: string, tone: Tone, status: string, note: string) => out.push({ name, tone, status, note });

  if (a.gas === 'no') add('Gas Safety Certificate', 'neutral', 'Not required', 'No gas appliances reported.');
  else if (a.gas === 'unsure') add('Gas Safety Certificate', 'due', 'Check needed', 'Confirm whether the property has gas, then book a check if it does.');
  else if (a.gasDate === 'recent') add('Gas Safety Certificate', 'valid', 'In date', 'Renew before the 12-month anniversary.');
  else if (a.gasDate === 'old') add('Gas Safety Certificate', 'action', 'Overdue', 'A new gas safety check is needed now.');
  else add('Gas Safety Certificate', 'action', 'Book a check', 'Every gas appliance needs a check every 12 months.');

  if (a.eicr === 'recent') add('EICR', 'valid', 'In date', 'Renew before it reaches 5 years.');
  else if (a.eicr === 'old') add('EICR', 'action', 'Overdue', 'A new EICR is needed now.');
  else add('EICR', 'action', 'Book an EICR', 'Rented homes need an EICR at least every 5 years.');

  if (a.smoke === 'yes') add('Smoke alarms', 'valid', 'In place', 'Test them at the start of each tenancy.');
  else if (a.smoke === 'no') add('Smoke alarms', 'action', 'Action needed', 'One working alarm is required on every storey.');
  else add('Smoke alarms', 'due', 'Check needed', 'Confirm there is a working alarm on every storey.');

  if (a.co === 'yes') add('Carbon monoxide alarms', 'valid', 'In place', 'Test them at the start of each tenancy.');
  else if (a.co === 'no') add('Carbon monoxide alarms', 'action', 'Action needed', 'Required in every room with a fixed combustion appliance.');
  else if (a.co === 'none') add('Carbon monoxide alarms', 'neutral', 'Not required', 'No fixed combustion appliances reported.');
  else add('Carbon monoxide alarms', 'due', 'Check needed', 'Check rooms with a boiler, gas fire or wood burner.');

  if (a.hmo === 'yes') add('HMO rules', 'due', 'Extra rules apply', 'HMOs may need a licence, a fire risk assessment and extra fire safety measures.');
  else if (a.hmo === 'unsure') add('HMO rules', 'due', 'Check your status', 'If 3 or more unrelated tenants share facilities, extra rules may apply.');
  else add('HMO rules', 'neutral', 'Standard rules', 'Standard landlord rules apply.');

  return out;
}

export default function ComplianceChecker() {
  const [screen, setScreen] = useState<'intro' | 'question' | 'result'>('intro');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [emailSent, setEmailSent] = useState(false);

  const vis = visible(answers);
  const q = vis[Math.min(index, vis.length - 1)];

  const pick = (value: string) => {
    const next = { ...answers, [q.id]: value };
    const nextVis = visible(next);
    setAnswers(next);
    if (index + 1 < nextVis.length) setIndex(index + 1);
    else setScreen('result');
  };

  const restart = () => {
    setAnswers({});
    setIndex(0);
    setEmailSent(false);
    setScreen('intro');
  };

  const onEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailSent(true);
  };

  if (screen === 'intro') {
    return (
      <div className="panel-white" style={{ padding: 48 }}>
        <p className="eyebrow" style={{ marginBottom: 14 }}>
          Free compliance check
        </p>
        <h1 className="display-xl" style={{ fontSize: 'clamp(34px, 4.5vw, 44px)', marginBottom: 16 }}>
          Is your rental compliant?
        </h1>
        <p className="lead" style={{ marginBottom: 28 }}>
          Answer six quick questions about one property. You will get a clear checklist of what is in date, what is due and what needs action now.
        </p>
        <ul className="inline-ticks" style={{ marginBottom: 32 }}>
          <li>Takes about 60 seconds</li>
          <li>No sign-up needed</li>
          <li>Based on the rules for England</li>
        </ul>
        <button type="button" className="btn btn-primary btn-lg" onClick={() => setScreen('question')}>
          Start the check
        </button>
      </div>
    );
  }

  if (screen === 'question') {
    const pct = Math.round((index / vis.length) * 100);
    return (
      <div className="panel-white" style={{ padding: '40px 48px 44px' }}>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 12 }}>
          <button type="button" className="btn btn-ghost" onClick={() => (index === 0 ? setScreen('intro') : setIndex(index - 1))}>
            ← Back
          </button>
          <span className="small" style={{ fontWeight: 600 }}>
            Question {index + 1} of {vis.length}
          </span>
        </div>
        <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label="Progress" style={{ height: 6, background: '#F1E9DD', borderRadius: 999, marginBottom: 32 }}>
          <div style={{ height: 6, width: `${pct}%`, background: '#1B7A73', borderRadius: 999, transition: 'width 0.2s' }} />
        </div>
        <h1 className="heading-md" style={{ marginBottom: 10 }}>
          {q.title}
        </h1>
        <p className="muted" style={{ marginBottom: 28 }}>
          {q.help}
        </p>
        <div className="stack">
          {q.options.map(([value, label]) => (
            <button key={value} type="button" className="option" aria-pressed={answers[q.id] === value} onClick={() => pick(value)}>
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const results = buildResults(answers);
  const actions = results.filter((r) => r.tone === 'action').length;
  const dues = results.filter((r) => r.tone === 'due').length;
  let headline = 'Looks compliant';
  if (actions > 0) headline = `${actions} ${actions === 1 ? 'item needs' : 'items need'} action`;
  else if (dues > 0) headline = `Nearly there: ${dues} ${dues === 1 ? 'item' : 'items'} to check`;

  return (
    <div className="stack-lg">
      <div className="panel-white" style={{ padding: '44px 48px' }}>
        <p className="eyebrow" style={{ marginBottom: 12 }}>
          Your results
        </p>
        <h1 className="heading-lg" style={{ marginBottom: 10 }} aria-live="polite">
          {headline}
        </h1>
        <p className="body" style={{ marginBottom: 28 }}>
          Here is where this property stands against the main safety rules for landlords in England.
        </p>
        <div>
          {results.map((r) => (
            <div key={r.name} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px 16px', padding: '18px 0', borderTop: '1px solid #EAE3D9' }}>
              <div style={{ flex: '1 1 300px' }}>
                <div style={{ fontWeight: 600, color: '#0C3536' }}>{r.name}</div>
                <div className="small muted">{r.note}</div>
              </div>
              <span className={`pill pill-${r.tone}`}>{r.status}</span>
            </div>
          ))}
        </div>
        <div className="row" style={{ marginTop: 28 }}>
          <Link href="/book" className="btn btn-primary btn-lg">
            Get a price for what&apos;s due
          </Link>
          <button type="button" className="btn btn-ghost" onClick={restart}>
            Check another property
          </button>
        </div>
      </div>

      <div className="panel-amber" style={{ padding: '28px 32px' }}>
        <h2 className="heading-sm" style={{ fontSize: 22, marginBottom: 6 }}>
          Email me this checklist
        </h2>
        {emailSent ? (
          <div role="status">
            <p className="body">Thank you. Your checklist is on its way.</p>
            <p className="notice">Preview: this form is not connected yet, so nothing was sent.</p>
          </div>
        ) : (
          <>
            <p className="small" style={{ marginBottom: 16 }}>
              We will also remind you before anything is due. Unsubscribe any time.
            </p>
            <form className="inline-form" onSubmit={onEmail} style={{ maxWidth: 'none' }}>
              <div className="field">
                <label htmlFor="cc-email" className="label">
                  Email address
                </label>
                <input id="cc-email" className="input" type="email" autoComplete="email" placeholder="you@example.com" required />
              </div>
              <button type="submit" className="btn btn-secondary btn-lg">
                Send my checklist
              </button>
            </form>
          </>
        )}
      </div>
      <p className="caption">This check is a guide, not legal advice. Rules differ in Scotland, Wales and Northern Ireland.</p>
    </div>
  );
}
