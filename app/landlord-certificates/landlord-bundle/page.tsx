import type { Metadata } from 'next';
import { prices } from '@/lib/site';
import { Breadcrumbs, Button, CtaSection, FaqList, MobileBar, SectionHead, TickList } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Landlord Gas and Electrical Certificate Bundle, London',
  description:
    'Gas Safety Certificate and EICR in one visit across London and Essex. One booking, one invoice, a fixed bundle price and both certificates within 24 hours.',
};

export default function BundlePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Landlord certificates', href: '/landlord-certificates' }, { label: 'Landlord Bundle' }]} />

      <section className="container split split-top hero-inner">
        <div style={{ flex: '1 1 560px' }} className="hero">
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Landlord Bundle · Best value
          </p>
          <h1 className="display-xl">Gas and electrical certificates in one visit</h1>
          <p className="lead">
            Your Gas Safety Certificate and EICR from one registered team, on one day. One booking, one invoice, one visit for your tenant.
          </p>
          <div className="row">
            <div>
              <div className="caption">From</div>
              <div className="price-lg">{prices.bundle}</div>
              <div className="caption">Save {prices.bundleSaving} against booking separately</div>
            </div>
            <Button href="/book?service=bundle">Book the bundle</Button>
          </div>
        </div>
        <aside style={{ flex: '1 1 400px' }} className="panel-white">
          <h2 className="heading-sm" style={{ fontSize: 22, marginBottom: 18 }}>
            What&apos;s included
          </h2>
          <TickList
            items={[
              'Landlord Gas Safety Record (CP12) for every gas appliance you provide',
              'Full EICR of the fixed electrical installation',
              `Smoke and CO alarm check on the same visit (fitting from ${prices.alarmFit} if needed)`,
              'Both certificates emailed within 24 hours, with copies for your tenant',
            ]}
          />
        </aside>
      </section>

      <section className="container section">
        <SectionHead title="Why landlords bundle" />
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Comparison</span>
                </th>
                <th scope="col">Booked separately</th>
                <th scope="col">Landlord Bundle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Visits to arrange with your tenant</td>
                <td>2</td>
                <td><strong style={{ color: '#0C3536' }}>1</strong></td>
              </tr>
              <tr>
                <td>Bookings and invoices</td>
                <td>2</td>
                <td><strong style={{ color: '#0C3536' }}>1</strong></td>
              </tr>
              <tr>
                <td>Price for a 2 to 3 bedroom property</td>
                <td>£[XXX]</td>
                <td><strong style={{ color: '#0C3536' }}>£[XXX]</strong></td>
              </tr>
              <tr>
                <td>Certificates on record</td>
                <td>Separately</td>
                <td><strong style={{ color: '#0C3536' }}>Together, same day</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container section split split-top">
        <div>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            One date to remember
          </h2>
          <p className="body">
            Gas checks are due every year and EICRs every five. Booking them together means your EICR lands on a gas visit you were already arranging. Every fifth year, your tenant sees one engineer visit instead of two.
          </p>
        </div>
        <div className="panel-soft">
          <h3 className="heading-sm" style={{ marginBottom: 12 }}>
            Optional add-ons
          </h3>
          <ul className="stack" style={{ listStyle: 'none' }}>
            <li>Boiler service · {prices.boilerService}</li>
            <li>Smoke and CO alarm supply and fit · from {prices.alarmFit}</li>
            <li>PAT testing for furnished lets · [to confirm if offered]</li>
          </ul>
        </div>
      </section>

      <section className="container-narrow section">
        <h2 className="heading-lg" style={{ marginBottom: 28 }}>
          Bundle questions
        </h2>
        <FaqList
          items={[
            { q: 'Can I bundle if only one certificate is due?', a: `Yes. Many landlords bundle when their gas check is due and their EICR has a year or less left to run. We carry out the EICR early on the same visit, so you get a fresh five years from that date and both certificates are handled together from then on.\n\nIf your EICR still has several years left, bringing it forward means paying for cover you already have, and we will tell you when it is not worth it. Your gas check can also be done up to two months before it is due without losing your renewal date, which gives us room to line the two up without cutting your gas record short.` },
            { q: 'Do both engineers come together?', a: `[Yes. A Gas Safe registered engineer and a NAPIT registered electrician attend on the same visit, or one engineer qualified for both. Client to confirm.]\n\nEither way, your tenant only gives access once and you deal with one booking. Each certificate is issued by the person qualified for that work, with their registration number on it, so you can check them on the Gas Safe Register and NAPIT websites. [The gas check runs alongside the EICR, so the visit takes about as long as the EICR on its own. Client to confirm.]` },
            { q: 'What if one part fails?', a: `You still get both reports, and the part that passed stands on its own. A Gas Safety Record is issued even when defects are found, listing what needs attention, and an EICR marked unsatisfactory lists every C1, C2 and FI observation with an explanation of each.\n\nAnything that needs fixing is quoted the same day at a fixed price, and nothing is done until you approve it. Dangerous gas appliances and C1 electrical faults are made safe before the engineer leaves. Electrical remedial work must be finished within 28 days of the inspection, and once it is done we send you written confirmation to pass on to your tenant and council.` },
          ]}
        />
      </section>

      <CtaSection title="Book both certificates in one visit" body="One booking, one invoice, both certificates within 24 hours." button="Book the bundle" href="/book?service=bundle" />
      <MobileBar label="Bundle from" price={prices.bundle} href="/book?service=bundle" />
    </>
  );
}
