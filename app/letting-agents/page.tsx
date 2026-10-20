import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { ClockIcon, DocIcon, FlameIcon, LockIcon } from '@/components/icons';
import { Button, FaqList, FeaturePanel, SectionHead, Steps } from '@/components/ui';
import AgentForm from '@/components/AgentForm';

export const metadata: Metadata = {
  title: 'Landlord Compliance for Letting Agents, London and Essex',
  description:
    'Gas and electrical certificates for letting agents across London and Essex. Tenant access handled, volume pricing and one monthly invoice for every property.',
};

const benefits = [
  { icon: <LockIcon />, tile: 'electric', title: 'Tenant access handled', text: 'We contact tenants directly, agree a slot and confirm it with you. Fewer wasted visits, less chasing.' },
  { icon: <FlameIcon />, tile: 'gas', title: 'Gas and electrics in one visit', text: 'Gas Safe and NAPIT registered engineers, so one booking covers CP12, EICR and alarms.' },
  { icon: <DocIcon />, tile: 'neutral', title: 'One monthly invoice', text: 'No card payments per job. Every visit itemised by property, ready to recharge to landlords.' },
  { icon: <ClockIcon />, tile: 'alarm', title: 'Renewals tracked for you', text: 'We remind you before anything expires. A full agent dashboard is coming soon.' },
];

export default function LettingAgentsPage() {
  return (
    <>
      <section className="container split hero">
        <div style={{ flex: '1 1 560px' }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            For letting agents and property managers
          </p>
          <h1 className="display-xl">One compliance partner for your whole London and Essex book</h1>
          <p className="lead">
            Gas and electrical certificates across every property you manage. We arrange access with tenants, send certificates to you and your landlords, and invoice you once a month.
          </p>
          <div className="row">
            <Button href="#agent-form">Set up an agent account</Button>
            <a href={site.phoneHref} className="link-strong">
              Or call {site.phone}
            </a>
          </div>
        </div>
        <div style={{ flex: '1 1 420px' }} className="panel-white">
          <div className="row" style={{ justifyContent: 'space-between', marginBottom: 14 }}>
            <span style={{ fontWeight: 700, color: '#0C3536' }}>Monthly compliance summary</span>
            <span className="caption">[Agency name]</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10, marginBottom: 16 }}>
            <Stat bg="#EBF3D9" ink="#3F6B12" value="[XX]" label="In date" />
            <Stat bg="#FFF1D6" ink="#7A4B00" value="[X]" label="Due in 60 days" />
            <Stat bg="#FBE3E1" ink="#8A1C14" value="[X]" label="Action needed" />
          </div>
          <div className="caption" style={{ marginBottom: 6 }}>
            Booked this month
          </div>
          {[
            ['Flat 4, 18 High Street, E15', 'CP12 · Tue'],
            ['22 Oak Avenue, Basildon', 'Bundle · Thu'],
            ['7 Station Road, Ilford', 'EICR · Fri'],
          ].map(([address, job]) => (
            <div key={address} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '10px 0', borderTop: '1px solid #EAE3D9', fontSize: 15 }}>
              <span>{address}</span>
              <span style={{ fontWeight: 600 }}>{job}</span>
            </div>
          ))}
          <p className="caption" style={{ marginTop: 12 }}>
            Illustrative example
          </p>
        </div>
      </section>

      <section className="container section">
        <SectionHead title="Built around how agencies work" />
        <div className="grid-auto">
          {benefits.map((b) => (
            <article key={b.title} className="card">
              <div className={`icon-tile tile-${b.tile}`}>{b.icon}</div>
              <h3>{b.title}</h3>
              <p className="card-text">{b.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <FeaturePanel>
          <h2 className="heading-lg" style={{ marginBottom: 36 }}>
            How an agent account works
          </h2>
          <Steps
            dark
            items={[
              { title: 'Send us your list', text: 'Share the properties you manage and their current expiry dates, in any format.' },
              { title: 'We plan the renewals', text: 'We schedule each check ahead of its deadline and agree access with tenants.' },
              { title: 'Certificates delivered', text: 'Sent to you within 24 hours, with copies for landlords and tenants.' },
              { title: 'One invoice a month', text: 'Itemised by property and landlord, on [30-day] terms.' },
            ]}
          />
        </FeaturePanel>
      </section>

      <section className="container section split split-top">
        <div style={{ flex: '1 1 340px' }}>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            Volume pricing
          </h2>
          <p className="body">The more properties you manage with us, the less each certificate costs. Rates apply to every service.</p>
        </div>
        <div style={{ flex: '1 1 620px' }} className="grid-auto">
          <Tier label="1 to 10 properties" value="Standard" text="Monthly invoicing included" />
          <Tier label="11 to 50 properties" value="[X]% off" text="Plus a named account manager" featured />
          <Tier label="51+ properties" value="Bespoke" text="Agreed rates and service levels" />
        </div>
      </section>

      <section className="container section">
        <figure className="review" style={{ maxWidth: 860, padding: '40px 44px' }}>
          <div className="stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>
          <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 26, lineHeight: 1.35, color: '#0C3536' }}>
            [Review from a letting agent client, pulled from Google]
          </blockquote>
          <figcaption>[Name], [Role] at [Agency], [Area]</figcaption>
        </figure>
      </section>

      <section id="agent-form" className="container section split split-top">
        <div style={{ flex: '1 1 340px' }}>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            Set up an agent account
          </h2>
          <p className="body" style={{ marginBottom: 20 }}>
            Tell us about your agency and we will call you within [one working day] to agree rates and take your property list.
          </p>
          <p className="small muted">
            Prefer to talk now? Call {site.phone}, {site.hours}.
          </p>
        </div>
        <div style={{ flex: '1 1 620px' }} className="panel-white">
          <AgentForm />
        </div>
      </section>

      <section className="container-narrow section">
        <h2 className="heading-md" style={{ marginBottom: 24 }}>
          Agent questions
        </h2>
        <FaqList
          items={[
            { q: 'Can certificates go straight to our landlords?', a: `Yes. By default we send every certificate and report to you as the agent, so your records stay complete. If you want, we also copy the landlord and the tenant at the same time, which covers the duty to give existing tenants a copy within 28 days.\n\nYou can set this per landlord, so landlords who prefer to deal only through you never hear from us directly. Each email includes the property address, the expiry date and a PDF of the certificate, so it is easy to file against the right property. [A monthly summary of upcoming renewals across your portfolio can be added on request. Client to confirm.]` },
            { q: 'What happens if a tenant does not give access?', a: `We do not give up after one missed appointment. We contact the tenant by phone, email and text to book a time, offer alternative dates [including early mornings and Saturdays], and confirm each appointment in writing. If they do not respond or are not in, we record every attempt with the date and time.\n\nThat record matters. The Health and Safety Executive expects landlords to take reasonable steps to complete the gas check and looks for at least three attempts, and the electrical regulations say a landlord is not in breach if they took all reasonable steps to gain access. We send you the log so the evidence is on file, and we rebook [at no extra cost: policy to confirm].` },
            { q: 'Do you handle remedial work too?', a: `Yes. If a check finds faults, we send an itemised fixed quote the same day, so you can pass it to your landlord for approval. Once approved, we book the work around the tenant and complete it within the legal deadline, which for EICR faults is 28 days from the inspection.\n\nWhen the work is done, you receive written confirmation for the landlord's records, plus the copies needed for the tenant and the council. Dangerous gas appliances and C1 electrical faults are made safe on the day of the visit, so a property is never left unsafe while you wait for approval.` },
            { q: 'Can you take over properties mid-cycle?', a: `Yes. Send us a list of your properties with the current gas and EICR expiry dates, or the existing certificates, and we will plan each renewal from there. Nothing is redone early unless it makes sense, so your landlords do not pay for checks they do not yet need.\n\nWe book each gas check in the two months before it is due, which keeps the original renewal date, and contact tenants well ahead of every expiry. If any certificates are missing or have already lapsed, we flag them first so they can be dealt with straight away. [Bulk onboarding for larger portfolios: process to confirm.]` },
          ]}
        />
      </section>
    </>
  );
}

function Stat({ bg, ink, value, label }: { bg: string; ink: string; value: string; label: string }) {
  return (
    <div style={{ background: bg, borderRadius: 10, padding: 12 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: ink }}>{value}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: ink }}>{label}</div>
    </div>
  );
}

function Tier({ label, value, text, featured }: { label: string; value: string; text: string; featured?: boolean }) {
  return (
    <div className={featured ? 'card card-featured' : 'card'}>
      <div className="small" style={{ fontWeight: 600, color: featured ? '#C6DEDB' : '#4C5E5B' }}>
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: featured ? '#F2B705' : '#0C3536' }}>{value}</div>
      <div className="card-text">{text}</div>
    </div>
  );
}
