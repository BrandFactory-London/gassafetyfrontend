import type { Metadata } from 'next';
import { prices } from '@/lib/site';
import { AlarmIcon, BoltIcon, DocIcon, FlameIcon, WrenchIcon } from '@/components/icons';
import { Button, CtaSection, SectionHead, ServiceCard, TrustBar } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Landlord Safety Certificates in London and Essex',
  description:
    'Every safety certificate a London or Essex landlord needs: Gas Safety (CP12), EICR, alarm checks and more. Fixed prices and certificates within 24 hours.',
};

export default function CertificatesHubPage() {
  return (
    <>
      <section className="container hero" style={{ paddingBottom: 56 }}>
        <p className="eyebrow" style={{ marginBottom: 18 }}>
          Landlord certificates
        </p>
        <h1 className="display-xl" style={{ maxWidth: 820 }}>
          Every safety certificate your rental needs, from one registered team
        </h1>
        <p className="lead">Fixed prices, tenant access arranged and certificates emailed within 24 hours, across London and Essex.</p>
        <Button href="/book">Get a price</Button>
      </section>

      <TrustBar />

      <section className="container section" style={{ paddingTop: 96 }}>
        <SectionHead title="Certificates and checks" />
        <div className="grid-auto">
          <ServiceCard icon={<FlameIcon />} tile="gas" title="Gas Safety Certificate (CP12)" text="Required every 12 months for every gas appliance, flue and pipework." price={prices.cp12} href="/landlord-certificates/gas-safety-certificate" linkLabel="Gas Safety Certificate" />
          <ServiceCard icon={<BoltIcon />} tile="electric" title="EICR" text="Required at least every 5 years, with C1 and C2 faults fixed within 28 days." price={prices.eicr} href="/landlord-certificates/eicr" linkLabel="EICR" />
          <ServiceCard featured badge="Best value" title="Landlord Bundle" text="Gas and electrical certificates in one visit, one invoice." price={prices.bundle} href="/landlord-certificates/landlord-bundle" linkLabel="Landlord Bundle" />
          <ServiceCard icon={<AlarmIcon />} tile="alarm" title="Smoke and CO alarms" text="Checked and fitted to current rules at the start of every tenancy." price={prices.alarmCheck} href="/landlord-certificates/smoke-co-alarms" linkLabel="Smoke and CO alarms" />
          <ServiceCard icon={<WrenchIcon />} tile="neutral" title="Remedial works" text="Failed EICR or gas check? Fixes quoted the same day and completed within the deadline." href="/remedial-works" linkLabel="Remedial works" />
          <ServiceCard icon={<DocIcon />} tile="neutral" title="Fire alarms, EIC and Minor Works" text="Fire alarm certification for HMOs, and certificates for new electrical work. [Pages coming in Batch 2.]" href="/contact" linkLabel="Ask us" />
        </div>
      </section>

      <CtaSection title="Not sure what you need?" body="Answer six quick questions and we will show you what is in date, what is due and what needs action." button="Start the compliance check" href="/compliance-check" />
    </>
  );
}
