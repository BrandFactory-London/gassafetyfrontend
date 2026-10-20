import type { Metadata } from 'next';
import { CtaSection } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Landlord Compliance Guides',
  description: 'Plain-English guides to gas safety, EICRs, alarms and the Renters’ Rights Act for landlords in England.',
};

const guides = [
  ['Gas safety', 'Landlord gas safety certificate: the complete guide'],
  ['Electrical safety', 'EICR for landlords: rules, costs and what happens if it fails'],
  ['Electrical safety', 'C1, C2 and FI codes explained'],
  ['Fire and CO safety', 'Smoke and CO alarm rules for landlords'],
  ['Regulation', "Renters' Rights Act: what it means for safety certificates"],
  ['Checklists', 'Landlord compliance checklist for London'],
  ['HMOs', 'HMO electrical and fire safety requirements'],
  ['Electrical safety', 'EICR vs EIC: which one do you need?'],
];

export default function GuidesPage() {
  return (
    <>
      <section className="container hero" style={{ paddingBottom: 56 }}>
        <h1 className="display-xl">Landlord guides</h1>
        <p className="lead">The rules in plain English, written by registered engineers. Guides are being written and will appear here before launch.</p>
      </section>
      <section className="container section">
        <div className="grid-auto-lg">
          {guides.map(([cat, title]) => (
            <article key={title} className="card">
              <div style={{ aspectRatio: '16 / 9', borderRadius: 10, background: 'linear-gradient(150deg, #E4EFEC 0%, #E2D4C2 100%)' }} />
              <span className="caption" style={{ color: '#1B7A73', fontWeight: 600 }}>
                {cat} · Coming soon
              </span>
              <h2 className="heading-sm">{title}</h2>
            </article>
          ))}
        </div>
      </section>
      <CtaSection title="Want a quick answer now?" body="The compliance checker shows what applies to your property in 60 seconds." button="Start the compliance check" href="/compliance-check" />
    </>
  );
}
