import type { Metadata } from 'next';
import Link from 'next/link';
import { areas } from '@/lib/areas';
import { CtaSection } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Areas We Cover: London and Essex',
  description: 'Gas and electrical certificates for landlords across London boroughs and Essex towns. Find your area for local prices and availability.',
};

export default function AreasPage() {
  const groups: ('London' | 'Essex')[] = ['London', 'Essex'];
  return (
    <>
      <section className="container hero" style={{ paddingBottom: 56 }}>
        <h1 className="display-xl">Areas we cover</h1>
        <p className="lead">All London boroughs and [Essex areas to confirm]. Choose your area for local prices and availability.</p>
      </section>
      {groups.map((region) => (
        <section key={region} className="container section" style={{ paddingBottom: 64 }}>
          <h2 className="heading-md" style={{ marginBottom: 20 }}>
            {region}
          </h2>
          <div className="chips">
            {areas
              .filter((a) => a.region === region)
              .map((a) => (
                <Link key={a.slug} href={`/areas/${a.slug}`} className="chip">
                  {a.name}
                </Link>
              ))}
          </div>
        </section>
      ))}
      <CtaSection title="Not on the list?" body="Enter your postcode and we will confirm whether we cover you." button="Check my postcode" />
    </>
  );
}
