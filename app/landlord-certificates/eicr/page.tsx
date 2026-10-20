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
            { q: 'How long does an EICR take?', a: `Usually [2 to 4] hours for a typical flat or house. The main factor is the number of circuits: a one-bedroom flat with a modern consumer unit can be done in a couple of hours, while a large house with an older board, outbuildings or more than one consumer unit can take most of a day. HMOs and larger properties are quoted individually.\n\nThe electrician inspects the consumer unit, wiring, sockets, switches, light fittings and earthing, then tests each circuit. Where it is safe and practical, they also open up a sample of sockets and fittings to check the connections behind them. You receive the report by email, usually within 24 hours, with every observation explained in plain English.` },
            { q: 'Do I need to be at the property?', a: `No. We contact your tenant directly to arrange a time, confirm it in writing and remind them the day before. If the property is empty, between tenancies or the tenant prefers not to be in, we can collect keys from you or your agent.\n\nThe electrician needs to reach the consumer unit and as many sockets and fittings as possible, so we ask tenants to clear access beforehand, including any board in a cupboard or under the stairs. Anything that cannot be reached is recorded on the report as a limitation. Once the report is ready, we can send it to your tenant as well, which covers your duty to give existing tenants a copy within 28 days.` },
            { q: 'Will the power be off?', a: `Yes, in short spells. Some tests can only be done with the power off, so each circuit is switched off while it is tested and then switched back on. In most homes the power is off for short periods adding up to [around an hour] across the visit, rather than all day.\n\nWe tell your tenant beforehand so they can plan around it. It helps to save any work on computers, avoid running the oven or washing machine during the visit, and expect to reset clocks on ovens and other appliances afterwards. If anyone in the property relies on powered medical equipment, tell us when you book so we can plan the testing around it.` },
            { q: 'What if my property fails?', a: `An EICR is marked unsatisfactory if it records any C1 (danger present), C2 (potentially dangerous) or FI (further investigation needed) observation. C3 items are recommendations only and do not cause a fail. If anything is immediately dangerous, our electrician makes it safe before leaving.\n\nYou then receive a fixed quote for the remedial work the same day, and nothing is done without your approval. By law, the work must be completed within 28 days of the inspection, or sooner if the report says so. Once it is done, we give you written confirmation that the installation now meets the standard. You must send that confirmation, together with the original report, to your tenant and your local council within 28 days of the work being completed.` },
            { q: 'Is an EICR the same as an EIC?', a: `No, although the names are close. An Electrical Installation Certificate (EIC) is issued when new electrical work is installed, such as a full rewire, a new circuit or a new consumer unit. It confirms the new work was designed, installed and tested to the current wiring regulations.\n\nAn Electrical Installation Condition Report (EICR) is a periodic inspection of an existing installation, and it is the report landlords in England need at least every five years. If the whole property has been rewired recently, the EIC can stand in for your first EICR, and the next inspection falls due five years from the date of that certificate. Smaller jobs are covered by a Minor Works Certificate, which does not replace an EICR.` },
            { q: 'Can I book an EICR and Gas Safety Certificate together?', a: `Yes. The Landlord Bundle covers your EICR and Gas Safety Certificate in one visit, with one booking, one tenant appointment and one invoice, and saves ${prices.bundleSaving} against booking them separately. Smoke and carbon monoxide alarm checks are included in the same visit.\n\nBecause gas checks are annual and EICRs run for five years, your dates may not line up today. If your EICR is due within the next few months, we can do it alongside your gas check so the two stay together from then on. We keep both dates on record and remind you before each one is due.` },
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
