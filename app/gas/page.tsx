import type { Metadata } from 'next';
import { prices } from '@/lib/site';
import { FlameIcon, WrenchIcon } from '@/components/icons';
import { Button, CtaSection, SectionHead, ServiceCard } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Gas Engineers for Landlords, London and Essex',
  description:
    'Gas Safe registered engineers for landlord gas safety checks, boiler servicing, installations and repairs across London and Essex.',
};

// Draft copy: full Batch 2 copy to follow.
export default function GasHubPage() {
  return (
    <>
      <section className="container hero" style={{ paddingBottom: 56 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>
          Gas services · Gas Safe registered
        </p>
        <h1 className="display-xl" style={{ maxWidth: 820 }}>
          Gas safety, servicing and repairs for rented homes
        </h1>
        <p className="lead">Gas Safe registered engineers for every gas job in your rental, from the annual CP12 to a new boiler.</p>
        <Button href="/book">Get a price</Button>
      </section>

      <section className="container section">
        <SectionHead title="Our gas services" />
        <div className="grid-auto">
          <ServiceCard icon={<FlameIcon />} tile="gas" title="Gas Safety Certificate (CP12)" text="The annual landlord gas safety check, with your certificate within 24 hours." price={prices.cp12} href="/landlord-certificates/gas-safety-certificate" linkLabel="Gas Safety Certificate" />
          <ServiceCard icon={<WrenchIcon />} tile="gas" title="Boiler servicing" text="An annual service keeps your boiler efficient and less likely to fail mid-tenancy." price={prices.boilerService} href="/book?service=boiler" linkLabel="Book a service" />
          <ServiceCard icon={<FlameIcon />} tile="gas" title="Boiler installation" text="Replacement boilers fitted and registered, with your tenant kept informed. [Detail page in Batch 2.]" href="/contact" linkLabel="Ask for a quote" />
          <ServiceCard icon={<FlameIcon />} tile="gas" title="Gas cookers and hobs" text="Safe installation and connection of gas cookers and hobs. [Detail page in Batch 2.]" href="/contact" linkLabel="Ask for a quote" />
          <ServiceCard icon={<WrenchIcon />} tile="gas" title="Fault finding and repairs" text="Diagnostics and repairs for boilers and gas appliances. [Detail page in Batch 2.]" href="/contact" linkLabel="Report a fault" />
        </div>
      </section>

      <CtaSection title="Need a gas engineer?" body="Fixed prices, Gas Safe registered engineers, tenant access arranged." button="Get a price" />
    </>
  );
}
