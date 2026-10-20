import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { areas, getArea, type Area } from '@/lib/areas';
import { images } from '@/lib/images';
import { prices } from '@/lib/site';
import { Breadcrumbs, FaqList, FeaturePanel, ImageBox, Reviews, SectionHead, ServiceCard } from '@/components/ui';
import PostcodeForm from '@/components/PostcodeForm';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Landlord Gas and Electrical Certificates in ${area.name}`,
    description: `Gas Safety Certificates, EICRs and alarm checks for ${area.name} landlords. Local engineers, fixed prices and certificates within 24 hours.`,
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const nearby = area.nearby.map((s) => getArea(s)).filter((a): a is Area => Boolean(a));

  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Areas', href: '/areas' }, { label: area.region, href: '/areas' }, { label: area.name }]} />

      <section className="container split hero-inner">
        <div style={{ flex: '1 1 560px' }} className="hero">
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            {area.name} · {area.postcodes.slice(0, 3).join(', ')}
          </p>
          <h1 className="display-xl">Gas and electrical certificates for {area.name} landlords</h1>
          <p className="lead">
            Gas Safety Certificates, EICRs and alarm checks across {area.name} and nearby. Local engineers, fixed prices and certificates within 24 hours.
          </p>
          <PostcodeForm id="area-postcode" />
        </div>
        <div style={{ flex: '1 1 420px' }}>
          <ImageBox slot={images.area} ratio="5 / 4" />
        </div>
      </section>

      <section className="container section split split-top">
        <div style={{ flex: '1 1 560px' }} className="stack">
          <h2 className="heading-lg" style={{ marginBottom: 4 }}>
            Letting in {area.name}
          </h2>
          {area.intro.map((p) => (
            <p key={p} className="body">
              {p}
            </p>
          ))}
        </div>
        <aside style={{ flex: '1 1 320px' }} className="panel-white">
          <h3 className="heading-sm" style={{ marginBottom: 14 }}>
            Postcodes we cover
          </h3>
          <div className="chips" style={{ marginBottom: 20 }}>
            {area.postcodes.map((pc) => (
              <span key={pc} className="chip" style={{ fontWeight: 600 }}>
                {pc}
              </span>
            ))}
          </div>
          <p className="small">Not sure if we cover you? Enter your postcode above and we will confirm straight away.</p>
        </aside>
      </section>

      <section className="container section">
        <SectionHead title={`${area.name} prices`} />
        <div className="grid-auto">
          <ServiceCard title="Gas Safety Certificate (CP12)" text="Every 12 months." price={prices.cp12} href="/landlord-certificates/gas-safety-certificate" linkLabel={`Book in ${area.name}`} />
          <ServiceCard title="EICR" text="Every 5 years." price={prices.eicr} href="/landlord-certificates/eicr" linkLabel={`Book in ${area.name}`} />
          <ServiceCard featured badge="Best value" title="Landlord Bundle" text="Gas and EICR in one visit." price={prices.bundle} href="/landlord-certificates/landlord-bundle" linkLabel={`Book in ${area.name}`} />
          <ServiceCard title="Smoke and CO alarms" text="Checked and fitted to current rules." price={prices.alarmCheck} href="/landlord-certificates/smoke-co-alarms" linkLabel={`Book in ${area.name}`} />
        </div>
      </section>

      <section className="container section">
        <SectionHead title={`${area.name} landlords on us`} size="md" />
        <Reviews captions={[`[Reviewer name], landlord in ${area.name}`, `[Reviewer name], letting agent in ${area.name}`]} />
      </section>

      <section className="container section split split-top">
        <div style={{ flex: '1 1 520px' }}>
          <h2 className="heading-md" style={{ marginBottom: 20 }}>
            {area.name} questions
          </h2>
          <FaqList
            items={[
              { q: `How soon can you visit in ${area.name}?`, a: `Usually within [X working days] of booking in ${area.name}. If a certificate is about to expire, or you need a check before a new tenant moves in, tell us your deadline when you book and we will prioritise it.\n\nGas safety checks can be done up to two months before the current certificate expires without losing your renewal date, so booking a few weeks ahead gives your tenant more choice of times and avoids a last-minute rush. We contact your tenant directly to arrange access, so you do not need to be there.` },
              { q: 'Do you charge extra for travel?', a: `[No. ${area.name} is inside our standard area, so the prices above include travel.]\n\n[There is no congestion charge, ULEZ or parking surcharge added to your invoice. Client to confirm.] If parking is limited near the property, for example in a residents' permit zone, let us know when you book and we will plan around it.\n\nThe same fixed prices apply across every London and Essex area we cover, so a check in ${area.name} costs the same as anywhere else on our list. Extra appliances and consumer units are priced on our pricing page, so you can see the full cost before you book.` },
            ]}
          />
        </div>
        <div style={{ flex: '1 1 340px' }}>
          <h2 className="heading-md" style={{ marginBottom: 20 }}>
            Nearby areas
          </h2>
          <div className="chips">
            {nearby.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="chip">
                {a.name}
              </Link>
            ))}
            <Link href="/areas" className="chip">
              All areas
            </Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <FeaturePanel>
          <div style={{ textAlign: 'center' }}>
            <h2 className="heading-lg" style={{ marginBottom: 12 }}>
              Book your {area.name} certificate
            </h2>
            <p className="on-dark" style={{ maxWidth: 520, margin: '0 auto 28px' }}>
              Fixed price, local engineer, certificate within 24 hours.
            </p>
            <Link href="/book" className="btn btn-primary btn-lg">
              Get a price
            </Link>
          </div>
        </FeaturePanel>
      </section>
    </>
  );
}
