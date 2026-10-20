import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { Button } from '@/components/ui';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us: Landlord Certificates London and Essex',
  description:
    'Call, email or message us about Gas Safety Certificates, EICRs and remedial work across London and Essex. Open Monday to Saturday, 8am to 6pm.',
};

export default function ContactPage() {
  const options = [
    { title: 'Call', detail: site.phone, note: site.hours },
    { title: 'Email', detail: site.email, note: `We reply within ${site.quoteResponse}` },
    { title: 'WhatsApp', detail: site.whatsapp, note: 'Send photos of a report or appliance' },
    { title: 'Remedial reports', detail: site.remedialEmail, note: 'Or upload on the remedial works page' },
  ];

  return (
    <>
      <section className="container hero" style={{ paddingBottom: 56 }}>
        <h1 className="display-xl">Contact us</h1>
        <p className="lead">For a fixed price, the quickest route is our online quote. For anything else, we are here {site.hours}.</p>
        <Button href="/book">Get a price online</Button>
      </section>

      <section className="container section">
        <div className="grid-auto">
          {options.map((o) => (
            <article key={o.title} className="card">
              <h2 className="heading-sm">{o.title}</h2>
              <p style={{ fontWeight: 600, color: '#0C3536' }}>{o.detail}</p>
              <p className="card-text">{o.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section split split-top">
        <div className="panel-white" style={{ flex: '1 1 560px' }}>
          <h2 className="heading-md" style={{ marginBottom: 18 }}>
            Send us a message
          </h2>
          <ContactForm />
        </div>
        <div style={{ flex: '1 1 360px' }} className="stack-lg">
          <div className="feature" style={{ borderRadius: 16 }}>
            <div className="feature-body" style={{ padding: 32 }}>
              <h2 className="heading-sm" style={{ fontSize: 22, marginBottom: 10 }}>
                Are you a tenant?
              </h2>
              <p className="on-dark" style={{ fontSize: 15 }}>
                If you smell gas, leave the property, call the National Gas Emergency Service on <strong style={{ color: '#fff' }}>0800 111 999</strong> and do not use switches or flames. For a visit we have booked, reply to the text or email we sent you to change the time.
              </p>
            </div>
          </div>
          <p className="body">We cover all London boroughs and [Essex areas to confirm].</p>
        </div>
      </section>
    </>
  );
}
