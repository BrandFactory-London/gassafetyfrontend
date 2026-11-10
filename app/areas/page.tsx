import type { Metadata } from "next";
import Link from "next/link";
import { areas } from "@/lib/areas";
import { CtaSection } from "@/components/ui";

export const metadata: Metadata = {
  title: "Areas We Cover in Greater London",
  description:
    "Gas and electrical certificates for landlords in every Greater London borough. Find your area for local availability.",
};

export default function AreasPage() {
  return (
    <>
      <section className="container hero" style={{ paddingBottom: 56 }}>
        <h1 className="display-xl">Areas we cover</h1>
        <p className="lead">
          Every borough in Greater London, at one price list. Choose your area for local
          availability.
        </p>
      </section>
      <section className="container section" style={{ paddingBottom: 64 }}>
        <h2 className="heading-md" style={{ marginBottom: 20 }}>
          Greater London
        </h2>
        <div className="chips">
          {areas.map((a) => (
            <Link key={a.slug} href={`/areas/${a.slug}`} className="chip">
              {a.name}
            </Link>
          ))}
        </div>
      </section>
      <CtaSection
        title="Not on the list?"
        body="Enter your postcode and we will confirm whether we cover you."
        button="Check my postcode"
      />
    </>
  );
}
