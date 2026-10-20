import Link from 'next/link';
import { areas } from '@/lib/areas';
import { images } from '@/lib/images';
import { prices } from '@/lib/site';
import { AlarmIcon, BoltIcon, FlameIcon, TickCircleIcon } from '@/components/icons';
import { Button, CtaSection, FeaturePanel, ImageBox, Reviews, SectionHead, ServiceCard, Steps, TrustBar } from '@/components/ui';
import PostcodeForm from '@/components/PostcodeForm';

export default function HomePage() {
  const london = areas.filter((a) => a.region === 'London');
  const essex = areas.filter((a) => a.region === 'Essex');

  return (
    <>
      <section className="container split hero">
        <div style={{ flex: '1 1 520px' }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>
            London and Essex · Gas Safe, NAPIT and NIC registered
          </p>
          <h1 className="display-xl">Gas and electrical certificates for landlords, done properly and on record.</h1>
          <p className="lead">
            CP12s, EICRs and alarm checks in one visit. Fixed prices up front, we arrange access with your tenant, and your certificate is emailed within 24 hours.
          </p>
          <PostcodeForm id="hero-postcode" />
          <div className="row small" style={{ marginTop: 28 }}>
            <span>
              Gas Safety Certificate <strong style={{ color: '#0C3536' }}>from {prices.cp12}</strong>
            </span>
            <span>
              EICR <strong style={{ color: '#0C3536' }}>from {prices.eicr}</strong>
            </span>
            <span>
              Landlord Bundle <strong style={{ color: '#0C3536' }}>from {prices.bundle}</strong>
            </span>
          </div>
        </div>
        <div style={{ flex: '1 1 420px' }}>
          <ImageBox slot={images.hero}>
            <div className="float-card" style={{ left: -24, bottom: 32 }}>
              <TickCircleIcon size={36} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: '#0C3536' }}>EICR issued: Satisfactory</div>
                <div className="caption">Emailed to landlord and tenant</div>
              </div>
            </div>
          </ImageBox>
        </div>
      </section>

      <TrustBar />

      <section className="container section" style={{ paddingTop: 120 }}>
        <SectionHead title="The certificates your rental needs" intro="Each one explained in plain English, priced up front and kept on record." />
        <div className="grid-auto">
          <ServiceCard
            icon={<FlameIcon />}
            tile="gas"
            title="Gas Safety Certificate (CP12)"
            text="Required every 12 months for every gas appliance, flue and pipework in the property."
            price={prices.cp12}
            href="/landlord-certificates/gas-safety-certificate"
            linkLabel="Book a CP12"
          />
          <ServiceCard
            icon={<BoltIcon />}
            tile="electric"
            title="EICR"
            text="An electrical safety report required at least every 5 years. Any C1 or C2 faults must be fixed within 28 days."
            price={prices.eicr}
            href="/landlord-certificates/eicr"
            linkLabel="Book an EICR"
          />
          <ServiceCard
            featured
            badge="Best value"
            title="Landlord Bundle"
            text={`Gas and electrical certificates in one visit. One booking, one invoice, save ${prices.bundleSaving}.`}
            price={prices.bundle}
            href="/landlord-certificates/landlord-bundle"
            linkLabel="Book the bundle"
          />
          <ServiceCard
            icon={<AlarmIcon />}
            tile="alarm"
            title="Smoke and CO alarms"
            text="One working smoke alarm on every storey, and a CO alarm in every room with a boiler, gas fire or wood burner."
            price={prices.alarmCheck}
            href="/landlord-certificates/smoke-co-alarms"
            linkLabel="Book an alarm check"
          />
        </div>
      </section>

      <section className="container section">
        <SectionHead title="How it works" />
        <Steps
          items={[
            { title: 'Request a price', text: 'Tell us the postcode and property size. You see the price before you commit.' },
            { title: 'We arrange the visit', text: 'We contact your tenant to agree a time, and a registered engineer attends.' },
            { title: 'Certificate on record', text: 'Your certificate is emailed within 24 hours, with a copy ready for your tenant.' },
          ]}
        />
      </section>

      <section className="container section">
        <FeaturePanel>
          <div className="split">
            <div>
              <h2 className="heading-lg" style={{ marginBottom: 16 }}>
                Is your rental compliant?
              </h2>
              <p className="on-dark" style={{ fontSize: 18, marginBottom: 28 }}>
                Answer six quick questions about your property and get a checklist of what is in date, what is due and what needs action now.
              </p>
              <Button href="/compliance-check">Start the 60-second check</Button>
            </div>
            <div style={{ background: '#fff', color: '#182826', borderRadius: 14, padding: 28 }}>
              <p style={{ fontWeight: 600, color: '#0C3536', marginBottom: 12 }}>Example result</p>
              <ResultRow label="Gas Safety Certificate" pill="valid" status="In date" />
              <ResultRow label="EICR" pill="due" status="Due within 60 days" />
              <ResultRow label="CO alarm by boiler" pill="action" status="Action needed" last />
            </div>
          </div>
        </FeaturePanel>
      </section>

      <section className="container section split">
        <div style={{ flex: '1 1 380px' }}>
          <p className="eyebrow" style={{ marginBottom: 12 }}>
            Coming soon
          </p>
          <h2 className="heading-lg" style={{ marginBottom: 16 }}>
            Every property, every certificate, one place.
          </h2>
          <p className="body">Your landlord account will keep every certificate on file and remind you 60, 30 and 7 days before anything is due.</p>
        </div>
        <div style={{ flex: '1 1 560px' }} className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Property</th>
                <th scope="col">Gas</th>
                <th scope="col">EICR</th>
                <th scope="col">Alarms</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Flat 2, Elm Road, E17</td>
                <td><span className="pill pill-valid">Valid</span></td>
                <td><span className="pill pill-due">34 days</span></td>
                <td><span className="pill pill-valid">Valid</span></td>
              </tr>
              <tr>
                <td>12 Park Lane, Romford</td>
                <td><span className="pill pill-action">Expired</span></td>
                <td><span className="pill pill-valid">Valid</span></td>
                <td><span className="pill pill-valid">Valid</span></td>
              </tr>
              <tr>
                <td>5 Mill Close, Chelmsford</td>
                <td><span className="pill pill-valid">Valid</span></td>
                <td><span className="pill pill-valid">Valid</span></td>
                <td><span className="pill pill-due">Check due</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container section">
        <div className="panel-amber split" style={{ gap: 28 }}>
          <div style={{ flex: '1 1 520px' }}>
            <h2 className="heading-md" style={{ marginBottom: 10 }}>
              For letting agents and portfolio landlords
            </h2>
            <p className="body">Volume pricing, tenant access handled for you, and one monthly invoice across London and Essex.</p>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <Button href="/letting-agents" variant="secondary" size="md">
              Talk to us about an account
            </Button>
          </div>
        </div>
      </section>

      <section className="container section">
        <SectionHead title="Covering London and Essex" />
        <div className="split split-top" style={{ gap: 40 }}>
          <div>
            <h3 className="eyebrow" style={{ fontFamily: 'inherit', marginBottom: 14 }}>
              London
            </h3>
            <div className="chips">
              {london.map((a) => (
                <Link key={a.slug} href={`/areas/${a.slug}`} className="chip">
                  {a.name}
                </Link>
              ))}
              <Link href="/areas" className="chip">
                All London boroughs
              </Link>
            </div>
          </div>
          <div>
            <h3 className="eyebrow" style={{ fontFamily: 'inherit', marginBottom: 14, color: '#8A5A00' }}>
              Essex
            </h3>
            <div className="chips">
              {essex.map((a) => (
                <Link key={a.slug} href={`/areas/${a.slug}`} className="chip">
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <SectionHead title="What landlords say" />
        <Reviews captions={['[Reviewer name], landlord in [area]', '[Reviewer name], letting agent in [area]', '[Reviewer name], landlord in [area]']} />
      </section>

      <section className="container section">
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 32 }}>
          <h2 className="heading-lg">Landlord guides</h2>
          <Link href="/guides" className="link-strong">
            All guides
          </Link>
        </div>
        <div className="grid-auto-lg">
          {[
            ['Electrical safety', 'EICR for landlords: rules, costs and what happens if it fails'],
            ['Gas safety', 'Landlord gas safety certificate: the complete guide'],
            ['Regulation', "Renters' Rights Act: what it means for your safety certificates"],
          ].map(([cat, title]) => (
            <Link key={title} href="/guides" style={{ textDecoration: 'none', display: 'grid', gap: 14 }}>
              <div style={{ aspectRatio: '16 / 9', borderRadius: 10, background: 'linear-gradient(150deg, #E4EFEC 0%, #E2D4C2 100%)' }} />
              <span className="caption" style={{ color: '#1B7A73', fontWeight: 600 }}>
                {cat}
              </span>
              <span style={{ fontSize: 20, fontWeight: 600, color: '#0C3536', lineHeight: 1.35 }}>{title}</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection title="Know your rental is compliant, and have the paperwork to prove it." body="Get a fixed price for your property in under a minute." button="Get a price" />
    </>
  );
}

function ResultRow({ label, pill, status, last }: { label: string; pill: 'valid' | 'due' | 'action'; status: string; last?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '14px 0', borderBottom: last ? 'none' : '1px solid #EAE3D9', fontSize: 15 }}>
      <span>{label}</span>
      <span className={`pill pill-${pill}`}>{status}</span>
    </div>
  );
}
