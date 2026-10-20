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
            { q: 'What does CP12 mean?', a: `CP12 stands for CORGI Proforma 12, the form gas engineers filled in when CORGI ran the gas safety register. Gas Safe Register replaced CORGI in 2009 and the official name is now the Landlord Gas Safety Record, but most landlords, agents and tenants still call it a CP12.\n\nWhatever it is called, it does the same job. It lists every gas appliance, flue and section of pipework you provide, the result of each safety test, any defects found and the engineer's Gas Safe registration number. You need a new one every year, existing tenants must receive a copy within 28 days of the check and new tenants before they move in, and you must keep each record for at least two years.` },
            { q: 'Do I need a certificate if the property has no gas?', a: `No. The annual gas safety check only applies where there is a gas supply or a gas appliance you provide, so an all-electric property does not need a Gas Safety Certificate. Bottled gas (LPG) counts as gas, so a property with an LPG heater or hob does need one. If the supply has been capped and nothing is connected, ask for that to be confirmed in writing so you have a record.\n\nYou still have other duties. Every rented home in England needs a valid EICR at least every five years and a working smoke alarm on each storey used as living space. A carbon monoxide alarm is required in any room with a fixed combustion appliance, which includes wood burners and oil boilers, so no gas does not always mean no CO alarm. If you are not sure what applies to your property, our free compliance checker will tell you in about a minute.` },
            { q: "Are my tenant's own appliances covered?", a: `Your legal duty covers the gas appliances, flues and pipework you provide as the landlord. If your tenant brings their own gas cooker or fire, the appliance itself is their responsibility, so it is not tested as part of your certificate.\n\nYou are still responsible for the pipework and installation that supply it, so our engineer checks that pipework and tests the whole system for gas tightness. If we see a tenant-owned appliance that looks unsafe or is connected to an unsuitable flue, we tell you and the tenant so it can be dealt with before anyone is put at risk. The Health and Safety Executive also recommends reminding tenants to have their own appliances serviced every year.` },
            { q: 'Do I need to be there?', a: `No. Most of our landlords never attend. Once you book, we contact your tenant directly to agree a time that suits them, confirm the appointment in writing and send a reminder the day before. If the property is empty or the tenant would rather not be home, we can collect keys from you or your agent and return them after the visit.\n\nYour certificate is emailed to you, usually within 24 hours, and we can send a copy straight to your tenant so the 28-day deadline is covered. If a tenant does not respond or misses the appointment, we keep a written record of every attempt to arrange access. The Health and Safety Executive expects landlords to show they took reasonable steps, and that record is your evidence.` },
            { q: 'How long does it take?', a: `Usually [30 to 60] minutes for a typical flat or house with a boiler and a hob. The time depends mainly on how many appliances there are, so a property with a boiler, a gas fire and a cooker takes longer than one with a boiler alone. A building split into flats on separate supplies is booked as one check per flat.\n\nDuring the visit the engineer tests the pipework for gas tightness, checks that each appliance is burning correctly and its safety devices work, and inspects flues and ventilation. The gas is only off briefly during the tightness test, so your tenant can carry on as normal for most of the visit. If an appliance is found to be dangerous, the engineer makes it safe before leaving and explains what needs to happen next.` },
            { q: 'Can you do the EICR at the same time?', a: `Yes. Our Landlord Bundle covers the Gas Safety Certificate and the EICR in one visit, with one booking, one tenant appointment and one invoice, and it costs ${prices.bundleSaving} less than booking them separately. Smoke and carbon monoxide alarm checks are included too, and your tenant only has to give access once.\n\nThe gas check is due every year and the EICR every five years, so they will not always fall due together. If your EICR is close to expiring, we can bring it forward so both are done on the same day. Once your dates are aligned, we remind you ahead of each renewal so nothing lapses.` },
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
