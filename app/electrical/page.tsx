import type { Metadata } from 'next';
import { prices } from '@/lib/site';
import { BoltIcon, DocIcon, WrenchIcon } from '@/components/icons';
import { Button, CtaSection, SectionHead, ServiceCard } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Electricians for Landlords, London and Essex',
  description:
    'NAPIT registered electricians for EICRs, rewires, fuse board upgrades, lighting and commercial electrical work across London and Essex.',
};

// Draft copy: full Batch 2 copy to follow.
export default function ElectricalHubPage() {
  return (
    <>
      <section className="container hero" style={{ paddingBottom: 56 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>
          Electrical services · NAPIT and NIC registered
        </p>
        <h1 className="display-xl" style={{ maxWidth: 820 }}>
          Electrical testing, upgrades and repairs for landlords
        </h1>
        <p className="lead">Registered electricians for every job in your rental, from the five-yearly EICR to a full rewire.</p>
        <Button href="/book">Get a price</Button>
      </section>

      <section className="container section">
        <SectionHead title="Our electrical services" />
        <div className="grid-auto">
          <ServiceCard icon={<BoltIcon />} tile="electric" title="EICR" text="The landlord electrical safety report, required at least every 5 years." price={prices.eicr} href="/landlord-certificates/eicr" linkLabel="EICR" />
          <ServiceCard icon={<WrenchIcon />} tile="electric" title="Remedial works" text="Fixes for C1, C2 and FI items, completed within the 28-day deadline." href="/remedial-works" linkLabel="Remedial works" />
          <ServiceCard icon={<BoltIcon />} tile="electric" title="Rewiring" text="Full and partial rewires with an Electrical Installation Certificate. [Detail page in Batch 2.]" href="/contact" linkLabel="Ask for a quote" />
          <ServiceCard icon={<BoltIcon />} tile="electric" title="Fuse board upgrades" text="Consumer unit replacements with modern RCD protection. [Detail page in Batch 2.]" href="/contact" linkLabel="Ask for a quote" />
          <ServiceCard icon={<BoltIcon />} tile="electric" title="Lighting" text="Indoor, outdoor and security lighting. [Detail page in Batch 2.]" href="/contact" linkLabel="Ask for a quote" />
          <ServiceCard icon={<DocIcon />} tile="neutral" title="Commercial electrical" text="Lighting, power, maintenance and installations for commercial premises. [Detail page in Batch 2.]" href="/contact" linkLabel="Ask for a quote" />
        </div>
      </section>

      <CtaSection title="Need an electrician?" body="Fixed prices, registered electricians, tenant access arranged." button="Get a price" />
    </>
  );
}
