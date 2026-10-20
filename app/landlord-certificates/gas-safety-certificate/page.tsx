import type { Metadata } from 'next';
import Link from 'next/link';
import { prices, site } from '@/lib/site';
import { BoltIcon, FlameIcon, WrenchIcon } from '@/components/icons';
import { Breadcrumbs, Button, CtaSection, FactCards, FaqList, FeaturePanel, InlineTicks, MobileBar, SectionHead, ServiceCard, TickList } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Landlord Gas Safety Certificate (CP12), London and Essex',
  description:
    'Landlord Gas Safety Certificates by Gas Safe registered engineers across London and Essex. Fixed price, tenant access arranged, certificate within 24 hours.',
};

const classifications = [
  { label: 'Immediately Dangerous', pill: 'action', meaning: 'A risk to life right now', text: 'The appliance is disconnected with your permission, and must not be used until fixed.' },
  { label: 'At Risk', pill: 'due', meaning: 'Could become dangerous', text: 'The appliance is turned off with your permission and should be repaired before use.' },
  { label: 'Not to Current Standards', pill: 'neutral', meaning: 'Safe, but older than current rules', text: 'No immediate action needed. Worth planning an upgrade.' },
] as const;

export default function GasSafetyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Landlord certificates', href: '/landlord-certificates' }, { label: 'Gas Safety Certificate' }]} />

      <section className="container split split-top hero-inner">
        <div style={{ flex: '1 1 560px' }} className="hero">
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Gas safety · Required every 12 months
          </p>
          <h1 className="display-xl">Landlord Gas Safety Certificates in London and Essex</h1>
          <p className="lead">
            Your annual gas safety check (CP12) by a Gas Safe registered engineer. Fixed price, tenant access arranged for you, and your certificate emailed within 24 hours.
          </p>
          <div className="row" style={{ marginBottom: 28 }}>
            <div>
              <div className="caption">From</div>
              <div className="price-lg">{prices.cp12}</div>
            </div>
            <Button href="/book?service=cp12">Book a gas safety check</Button>
            <Link href="/landlord-certificates/landlord-bundle" className="link-strong">
              Add an EICR and save {prices.bundleSaving}
            </Link>
          </div>
          <InlineTicks items={['Gas Safe registered', 'Fully insured', `${site.rating} on Google`]} />
        </div>
        <aside style={{ flex: '1 1 400px' }} className="panel-white">
          <div className="row" style={{ gap: 14, marginBottom: 18 }}>
            <div className="icon-tile tile-gas">
              <FlameIcon />
            </div>
            <h2 className="heading-sm" style={{ fontSize: 22 }}>
              What&apos;s included
            </h2>
          </div>
          <TickList
            items={[
              'Safety check of every gas appliance you provide: boiler, cooker, hob and gas fires',
              'Gas tightness test on the pipework',
              'Flue and ventilation checks',
              'Safety devices tested to make sure they shut off correctly',
              'Landlord Gas Safety Record (CP12) emailed within 24 hours',
              'A copy ready to send to your tenant',
            ]}
          />
        </aside>
      </section>

      <section className="container section">
        <SectionHead title="The law in plain English" intro="What the Gas Safety (Installation and Use) Regulations 1998 ask of you as a landlord." />
        <FactCards
          items={[
            { figure: '12 months', title: 'How often', text: 'Every gas appliance, fitting and flue you provide needs a safety check every 12 months.' },
            { figure: '28 days', title: 'Copy to tenants', text: 'Existing tenants get a copy within 28 days of the check. New tenants get one before they move in.' },
            { figure: '2 years', title: 'Keep records', text: 'Keep each Gas Safety Record for at least two years. We keep a copy for you too.' },
            { figure: 'Criminal', title: 'Penalties', text: 'Breaking the gas safety rules is a criminal offence, enforced by the Health and Safety Executive.', highlight: true },
          ]}
        />
        <p className="caption" style={{ marginTop: 16 }}>
          You can book your check up to two months before it is due and keep your original renewal date, so there is no reason to cut it fine.
        </p>
      </section>

      <section className="container section split split-top">
        <div style={{ flex: '1 1 340px' }}>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            Gas Safety Certificate prices
          </h2>
          <p className="body" style={{ marginBottom: 20 }}>
            Fixed prices, VAT included. Book with an EICR and save.
          </p>
          <p className="small muted">HMOs and commercial properties priced on request.</p>
        </div>
        <div style={{ flex: '1 1 620px' }} className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Appliances</th>
                <th scope="col">Gas Safety Certificate</th>
                <th scope="col">With EICR (bundle)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Boiler only</td>
                <td>£[XX]</td>
                <td>
                  <strong style={{ color: '#0C3536' }}>£[XXX]</strong> <span className="badge badge-soft">Save £[XX]</span>
                </td>
              </tr>
              <tr>
                <td>Boiler and cooker or hob</td>
                <td>£[XX]</td>
                <td>
                  <strong style={{ color: '#0C3536' }}>£[XXX]</strong> <span className="badge badge-soft">Save £[XX]</span>
                </td>
              </tr>
              <tr>
                <td>Each extra appliance</td>
                <td>{prices.extraAppliance}</td>
                <td>{prices.extraAppliance}</td>
              </tr>
              <tr>
                <td>Boiler service added</td>
                <td>{prices.boilerService}</td>
                <td>{prices.boilerService}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container section">
        <FeaturePanel>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            If an appliance is unsafe
          </h2>
          <p className="on-dark" style={{ maxWidth: 640, marginBottom: 36 }}>
            If our engineer finds a problem, they explain it on the spot and record it on your certificate. Our Gas Safe engineers can usually repair the fault on the same visit or quote it the same day.
          </p>
          <div className="grid-auto">
            {classifications.map((c) => (
              <div key={c.label} style={{ background: '#fff', color: '#182826', borderRadius: 12, padding: 22 }}>
                <span className={`pill pill-${c.pill}`}>{c.label}</span>
                <h3 className="heading-sm" style={{ margin: '12px 0 6px', color: '#0C3536' }}>
                  {c.meaning}
                </h3>
                <p className="small">{c.text}</p>
              </div>
            ))}
          </div>
        </FeaturePanel>
      </section>

      <section className="container section">
        <div className="panel-amber split" style={{ gap: 28 }}>
          <div style={{ flex: '1 1 520px' }}>
            <h2 className="heading-md" style={{ marginBottom: 10 }}>
              Add a boiler service
            </h2>
            <p className="body">
              A gas safety check confirms an appliance is safe. A service keeps it efficient and less likely to break down mid-tenancy. Add one to the same visit for {prices.boilerService}.
            </p>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <Button href="/book?service=boiler" variant="secondary" size="md">
              Add a boiler service
            </Button>
          </div>
        </div>
      </section>

      <section className="container-narrow section">
        <h2 className="heading-lg" style={{ marginBottom: 28 }}>
          Gas safety questions
        </h2>
        <FaqList
          items={[
            { q: 'What does CP12 mean?', a: 'CP12 is the old name for the Landlord Gas Safety Record. Most landlords and agents still use it.' },
            { q: 'Do I need a certificate if the property has no gas?', a: 'No. If there is no gas supply or gas appliance, you do not need one. You still need an EICR and the right alarms.' },
            { q: "Are my tenant's own appliances covered?", a: 'You are responsible for appliances and pipework you provide. Appliances your tenant owns are their responsibility, though we check the pipework that feeds them.' },
            { q: 'Do I need to be there?', a: 'No. We arrange access with your tenant directly, or collect keys from you or your agent.' },
            { q: 'How long does it take?', a: 'Usually [30 to 60] minutes, depending on how many appliances there are.' },
            { q: 'Can you do the EICR at the same time?', a: 'Yes. The Landlord Bundle covers both in one visit, with one booking and one invoice.' },
          ]}
        />
      </section>

      <section className="container section">
        <SectionHead title="Related services" size="md" />
        <div className="grid-auto">
          <ServiceCard icon={<BoltIcon />} tile="electric" title="EICR" text="Every 5 years." price={prices.eicr} href="/landlord-certificates/eicr" linkLabel="Book an EICR" />
          <ServiceCard featured badge="Save" title="Landlord Bundle" text="Gas and EICR in one visit." price={prices.bundle} href="/landlord-certificates/landlord-bundle" linkLabel="Book the bundle" />
          <ServiceCard icon={<WrenchIcon />} tile="gas" title="Boiler servicing" text="Annual service and safety check." price={prices.boilerService} href="/gas" linkLabel="See gas services" />
        </div>
      </section>

      <CtaSection title="Book your gas safety check" body="Fixed price, tenant access arranged, certificate within 24 hours." button="Book a gas safety check" href="/book?service=cp12" />
      <MobileBar label="Gas Safety from" price={prices.cp12} href="/book?service=cp12" />
    </>
  );
}
