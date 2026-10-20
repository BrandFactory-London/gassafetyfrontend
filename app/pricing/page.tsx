import type { Metadata } from 'next';
import Link from 'next/link';
import { prices } from '@/lib/site';
import { Button, CtaSection, FaqList, SectionHead, TickList } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Landlord Certificate Prices: EICR and Gas Safety Costs',
  description:
    'Fixed prices for Gas Safety Certificates, EICRs, alarm checks and bundles across London and Essex. VAT included, no hidden extras, certificates within 24 hours.',
};

const rows = [
  { service: 'Gas Safety Certificate (boiler and hob)', cells: ['£[XX]', '£[XX]', '£[XX]'] },
  { service: 'EICR', cells: ['£[XXX]', '£[XXX]', '£[XXX]'] },
  { service: 'Landlord Bundle (gas and EICR)', cells: ['£[XXX]', '£[XXX]', '£[XXX]'], featured: true },
  { service: 'Smoke and CO alarm check', cells: ['£[XX]', '£[XX]', '£[XX]'] },
  { service: 'Boiler service', cells: ['£[XX]', '£[XX]', '£[XX]'] },
];

export default function PricingPage() {
  return (
    <>
      <section className="container hero" style={{ maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' }}>
        <h1 className="display-xl">Fixed prices for landlord certificates</h1>
        <p className="lead">Every price below includes VAT and travel within our London and Essex area. You will see your exact price before you book.</p>
        <Button href="/book">Get my exact price</Button>
      </section>

      <section className="container section">
        <SectionHead title="Certificates and checks" />
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Studio or 1 bed</th>
                <th scope="col">2 to 3 bed</th>
                <th scope="col">4 to 5 bed</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.service}>
                  <td>
                    {row.service} {row.featured ? <span className="badge" style={{ marginLeft: 6 }}>Best value</span> : null}
                  </td>
                  {row.cells.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="caption" style={{ marginTop: 16 }}>
          Extra gas appliances {prices.extraAppliance} each. Extra consumer units {prices.extraConsumerUnit} each. HMOs, 6+ bedrooms and commercial properties priced on request.
        </p>
      </section>

      <section className="container section split split-top">
        <div>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            One price list for London and Essex
          </h2>
          <p className="body">[Prices are the same across our whole area.] OR [Essex prices are £[XX] lower than London. Client to confirm which.]</p>
        </div>
        <div className="panel-soft">
          <h3 className="heading-sm" style={{ marginBottom: 14 }}>
            Always included
          </h3>
          <TickList items={['Travel and parking within our area', 'Tenant access arranged for you', 'Certificate emailed within 24 hours', 'A copy ready for your tenant']} />
        </div>
      </section>

      <section className="container section">
        <div className="panel-amber split" style={{ gap: 28 }}>
          <div style={{ flex: '1 1 520px' }}>
            <h2 className="heading-md" style={{ marginBottom: 10 }}>
              Managing more than 10 properties?
            </h2>
            <p className="body">Agents and portfolio landlords get volume rates and monthly invoicing.</p>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <Link href="/letting-agents" className="btn btn-secondary">
              See agent pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="container-narrow section">
        <h2 className="heading-lg" style={{ marginBottom: 28 }}>
          Pricing questions
        </h2>
        <FaqList
          items={[
            { q: 'Are there any hidden extras?', a: 'No. If our engineer finds something that needs fixing, we quote it separately and nothing is done without your approval.' },
            { q: 'When do I pay?', a: '[At booking, or after the visit. Client to confirm.]' },
            { q: 'Is there a call-out charge for remedial work?', a: '[Client to confirm.]' },
          ]}
        />
      </section>

      <CtaSection title="See your exact price in under a minute" body="Postcode, property size and the certificates you need. That is all it takes." button="Get my exact price" />
    </>
  );
}
