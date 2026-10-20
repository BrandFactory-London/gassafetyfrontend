import type { Metadata } from 'next';
import Link from 'next/link';
import { images } from '@/lib/images';
import { prices, site } from '@/lib/site';
import { AlarmIcon, BoltIcon, FlameIcon } from '@/components/icons';
import { Breadcrumbs, Button, CtaSection, FactCards, FaqList, FeaturePanel, InlineTicks, MobileBar, SectionHead, ServiceCard, TickList } from '@/components/ui';

export const metadata: Metadata = {
  title: 'EICR for Landlords in London and Essex, Fixed Price',
  description:
    'Landlord EICRs across London and Essex by NAPIT registered electricians. Fixed prices, tenant access arranged and your report emailed within 24 hours.',
};

const codes = [
  { code: 'C1', pill: 'action', title: 'Danger present', text: 'Made safe on the day where possible. Must be fixed straight away.' },
  { code: 'C2', pill: 'action', title: 'Potentially dangerous', text: 'Must be fixed within 28 days, or sooner if the report says.' },
  { code: 'FI', pill: 'due', title: 'Further investigation', text: 'Something needs a closer look. Must be investigated within 28 days.' },
  { code: 'C3', pill: 'valid', title: 'Improvement recommended', text: 'Not a fail on its own. Worth planning in, with no legal deadline.' },
] as const;

export default function EicrPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Landlord certificates', href: '/landlord-certificates' }, { label: 'EICR' }]} />

      <section className="container split split-top hero-inner">
        <div style={{ flex: '1 1 560px' }} className="hero">
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Electrical safety · Required every 5 years
          </p>
          <h1 className="display-xl">EICR for landlords in London and Essex</h1>
          <p className="lead">
            A full Electrical Installation Condition Report by a NAPIT registered electrician. Fixed price, tenant access arranged for you, and your report emailed within 24 hours.
          </p>
          <div className="row" style={{ marginBottom: 28 }}>
            <div>
              <div className="caption">From</div>
              <div className="price-lg">{prices.eicr}</div>
            </div>
            <Button href="/book?service=eicr">Book an EICR</Button>
            <Link href="/landlord-certificates/landlord-bundle" className="link-strong">
              Add a gas check and save {prices.bundleSaving}
            </Link>
          </div>
          <InlineTicks items={['NAPIT and NIC registered', 'Fully insured', `${site.rating} on Google`]} />
        </div>
        <aside style={{ flex: '1 1 400px' }} className="panel-white">
          <div className="row" style={{ gap: 14, marginBottom: 18 }}>
            <div className="icon-tile tile-electric">
              <BoltIcon />
            </div>
            <h2 className="heading-sm" style={{ fontSize: 22 }}>
              What&apos;s included
            </h2>
          </div>
          <TickList
            items={[
              'Visual inspection of wiring, sockets, switches and fittings',
              'Testing of every circuit at the consumer unit',
              'Earthing, bonding and RCD protection checks (the safety switch that cuts power if there is a fault)',
              'Every observation coded and explained in plain English',
              'Digital report emailed within 24 hours',
              'A copy ready to send to your tenant',
            ]}
          />
        </aside>
      </section>

      <section className="container section">
        <SectionHead
          title="The law in plain English"
          intro="What the Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 ask of you as a landlord."
        />
        <FactCards
          items={[
            { figure: '5 years', title: 'How often', text: 'Your rental needs an EICR at least every five years, or sooner if the last report says so.' },
            { figure: '28 days', title: 'Copy to tenants', text: 'Existing tenants get a copy within 28 days of the inspection. New tenants get one before they move in.' },
            { figure: '28 days', title: 'Fixing faults', text: 'Any C1, C2 or FI items must be fixed or investigated within 28 days, or sooner if the report says.' },
            { figure: '£30,000', title: 'Maximum penalty', text: 'Councils can fine landlords up to £30,000 for breaching the regulations.', highlight: true },
          ]}
        />
        <p className="caption" style={{ marginTop: 16 }}>
          You must also give a copy to your council within 7 days if they ask for one.
        </p>
      </section>

      <section className="container section split split-top">
        <div style={{ flex: '1 1 340px' }}>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            EICR prices
          </h2>
          <p className="body" style={{ marginBottom: 20 }}>
            Fixed prices by property size, VAT included. Book gas and electrics together and save.
          </p>
          <p className="small muted">
            Extra consumer units {prices.extraConsumerUnit} each. Larger properties and HMOs priced on request.
          </p>
        </div>
        <div style={{ flex: '1 1 620px' }} className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Property</th>
                <th scope="col">EICR</th>
                <th scope="col">With Gas Safety (bundle)</th>
              </tr>
            </thead>
            <tbody>
              {['Studio or 1 bedroom', '2 to 3 bedrooms', '4 to 5 bedrooms'].map((row) => (
                <tr key={row}>
                  <td>{row}</td>
                  <td>£[XXX]</td>
                  <td>
                    <strong style={{ color: '#0C3536' }}>£[XXX]</strong> <span className="badge badge-soft">Save £[XX]</span>
                  </td>
                </tr>
              ))}
              <tr>
                <td>HMO or 6+ bedrooms</td>
                <td colSpan={2}>
                  <Link href="/book?service=eicr" className="link-strong">
                    Request a quote
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container section">
        <FeaturePanel>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            What happens if it fails
          </h2>
          <p className="on-dark" style={{ maxWidth: 640, marginBottom: 36 }}>
            An unsatisfactory EICR is common in older properties. Each issue gets a code. Here is what they mean and what we do next.
          </p>
          <div className="grid-auto" style={{ marginBottom: 40 }}>
            {codes.map((c) => (
              <div key={c.code} style={{ background: '#fff', color: '#182826', borderRadius: 12, padding: 22 }}>
                <span className={`pill pill-${c.pill}`}>{c.code}</span>
                <h3 className="heading-sm" style={{ margin: '12px 0 6px', color: '#0C3536' }}>
                  {c.title}
                </h3>
                <p className="small">{c.text}</p>
              </div>
            ))}
          </div>
          <ol className="grid-steps">
            {[
              ['Fixed quote the same day', 'Every fix listed and priced in plain English.'],
              ['Work done within the deadline', 'Our electricians complete the fixes, with tenant access arranged.'],
              ['Written confirmation', 'Proof the work is complete, ready for your records, your tenant and your council if asked.'],
            ].map(([title, text], i) => (
              <li key={title} className="step">
                <div className="step-num" style={{ fontSize: 24 }}>
                  {i + 1}
                </div>
                <h3 style={{ fontSize: 18 }}>{title}</h3>
                <p className="on-dark" style={{ fontSize: 15 }}>
                  {text}
                </p>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: 28 }}>
            <Link href="/remedial-works" style={{ color: '#F2B705', fontWeight: 600 }}>
              More about remedial work
            </Link>
          </p>
        </FeaturePanel>
      </section>

      <section className="container section split">
        <div className="panel-white row" style={{ flex: '1 1 420px', gap: 24, flexWrap: 'nowrap', padding: 24 }}>
          <div className="img-slot" style={{ width: 120, height: 140, flex: 'none', padding: 8, fontSize: 12, boxShadow: 'none' }}>
            {images.engineer.src ? <img src={images.engineer.src} alt={images.engineer.alt} /> : '[Engineer photo]'}
          </div>
          <div>
            <div className="heading-sm" style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: '#0C3536' }}>
              [Engineer name]
            </div>
            <p className="small" style={{ marginBottom: 10 }}>
              Lead electrician, [X] years&apos; experience
            </p>
            <a href={site.registers.napit} className="link-strong" style={{ fontSize: 14 }}>
              Check NAPIT registration No. {site.registrations.napit}
            </a>
          </div>
        </div>
        <div style={{ flex: '1 1 520px' }}>
          <h2 className="heading-md" style={{ marginBottom: 12 }}>
            Carried out by registered electricians you can check
          </h2>
          <p className="body">Every EICR is completed and signed by a qualified, registered electrician. Check our registrations yourself before you book.</p>
        </div>
      </section>

      <section className="container-narrow section">
        <h2 className="heading-lg" style={{ marginBottom: 28 }}>
          EICR questions
        </h2>
        <FaqList
          items={[
            { q: 'How long does an EICR take?', a: 'Usually [2 to 4] hours for a typical flat or house. Larger properties with more circuits take longer.' },
            { q: 'Do I need to be at the property?', a: 'No. We arrange access with your tenant directly, or collect keys from you or your agent.' },
            { q: 'Will the power be off?', a: 'Each circuit is switched off briefly while it is tested. We tell your tenant beforehand so they can plan around it.' },
            { q: 'What if my property fails?', a: 'You get a fixed quote for the fixes the same day. Once the work is done, we confirm it in writing for your records.' },
            { q: 'Is an EICR the same as an EIC?', a: 'No. An EIC is issued when new wiring is installed, such as a full rewire. An EICR checks the condition of an existing installation.' },
            { q: 'Can I book an EICR and Gas Safety Certificate together?', a: 'Yes. The Landlord Bundle covers both in one visit, with one booking and one invoice.' },
          ]}
        />
      </section>

      <section className="container section">
        <SectionHead title="Related services" size="md" />
        <div className="grid-auto">
          <ServiceCard icon={<FlameIcon />} tile="gas" title="Gas Safety Certificate (CP12)" text="Every 12 months." price={prices.cp12} href="/landlord-certificates/gas-safety-certificate" linkLabel="Book a CP12" />
          <ServiceCard featured badge="Save" title="Landlord Bundle" text="Gas and EICR in one visit." price={prices.bundle} href="/landlord-certificates/landlord-bundle" linkLabel="Book the bundle" />
          <ServiceCard icon={<AlarmIcon />} tile="alarm" title="Smoke and CO alarms" text="Checked and fitted to current rules." price={prices.alarmCheck} href="/landlord-certificates/smoke-co-alarms" linkLabel="Book an alarm check" />
        </div>
      </section>

      <CtaSection title="Book your EICR today" body="Fixed price, tenant access arranged, report within 24 hours." button="Book an EICR" href="/book?service=eicr" />
      <MobileBar label="EICR from" price={prices.eicr} href="/book?service=eicr" />
    </>
  );
}
