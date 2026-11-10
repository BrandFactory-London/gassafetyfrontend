import type { Metadata } from "next";
import { prices } from "@/lib/site";
import {
  Breadcrumbs,
  Button,
  CtaSection,
  FactCards,
  FaqList,
  MobileBar,
  SectionHead,
  Steps,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "EPC for Landlords, London and Essex",
  description:
    "Energy Performance Certificates for rented homes across London and Essex, by an accredited energy assessor. Fixed price, tenant access arranged, and advice on the 2030 EPC C rules.",
};

// Rules checked 10 Nov 2026 against the government consultation outcome of 21 Jan 2026
// ("Improving the energy performance of privately rented homes: 2025 update").
export default function EpcPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Landlord certificates", href: "/landlord-certificates" },
          { label: "EPC" },
        ]}
      />

      <section className="container split hero-inner">
        <div style={{ flex: "1 1 560px" }} className="hero">
          <h1 className="display-xl">EPCs for landlords in London and Essex</h1>
          <p className="lead">
            An Energy Performance Certificate by an accredited energy assessor, valid for 10 years.
            Fixed price, tenant access arranged for you, and booked on the same visit as your gas
            and electrical checks if you like.
          </p>
          <div className="row">
            <div>
              <div className="caption">EPC from</div>
              <div className="price-lg">{prices.epc}</div>
            </div>
            <Button href="/book?service=epc">Book an EPC</Button>
          </div>
        </div>
        <div style={{ flex: "1 1 360px" }}>
          <div className="panel-white">
            <p className="caption" style={{ marginBottom: 14 }}>
              Ratings, A (best) to G
            </p>
            <div style={{ display: "grid", gap: 6 }} aria-hidden="true">
              {["A", "B", "C", "D", "E", "F", "G"].map((band, i) => (
                <div key={band} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      width: `${34 + i * 9}%`,
                      height: 26,
                      background: band === "C" ? "var(--fd-ink)" : "var(--fd-rule-soft)",
                      color: band === "C" ? "#fff" : "var(--fd-ink)",
                      fontWeight: 800,
                      fontSize: 14,
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: 10,
                    }}
                  >
                    {band}
                  </span>
                  {band === "C" ? <span className="caption">Required by 1 Oct 2030</span> : null}
                  {band === "E" ? <span className="caption">Minimum to let today</span> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <SectionHead
          title="The rules in plain English"
          intro="What landlords in England and Wales need for a private rented home."
        />
        <FactCards
          items={[
            {
              title: "Before you let",
              text: "You need a valid EPC before you advertise the property, and your tenant gets a copy at the start of the tenancy.",
            },
            {
              title: "Lasts 10 years",
              text: "An EPC is valid for 10 years, or until a new one replaces it.",
            },
            {
              title: "Minimum E today",
              text: "A private rented home must currently be rated E or above, unless a valid exemption is registered.",
            },
            {
              title: "C by October 2030",
              text: "From 1 October 2030, private rented homes must meet the equivalent of EPC C, with a spending cap of £10,000 per property.",
            },
          ]}
        />
      </section>

      <section className="container section">
        <SectionHead title="How it works" />
        <Steps
          items={[
            {
              title: "Book and we arrange access",
              text: "We agree a time with your tenant. Add the EPC to your gas or EICR visit to keep it to one appointment.",
            },
            {
              title: "The assessment",
              text: "Our accredited assessor measures the home and records insulation, windows, heating, hot water and lighting.",
            },
            {
              title: "Certificate and advice",
              text: "Your EPC is lodged on the national register and sent to you, with the recommended improvements explained in plain English.",
            },
          ]}
        />
      </section>

      <section className="container-narrow section">
        <h2 className="heading-lg" style={{ marginBottom: 28 }}>
          EPC questions
        </h2>
        <FaqList
          items={[
            {
              q: "What changes in 2030?",
              a: "In January 2026 the government confirmed that private rented homes in England and Wales must meet the equivalent of EPC C by 1 October 2030. The new standard looks first at how well the building holds heat, then at either the heating system or how ready the home is for smart energy use.\n\nLandlords will not have to spend more than £10,000 per property. If the home still falls short after that, an exemption can be registered for 10 years. A home with a current EPC rated C or above that was issued before 1 October 2029 counts as compliant until that certificate expires.",
            },
            {
              q: "My EPC is still valid. Do I need a new one?",
              a: "Not to let the property today, as long as it is rated E or above and has not expired. It can still be worth a fresh assessment if you have improved the home since, because a better rating can help with the 2030 standard and with marketing the property.\n\nIf your current rating is D or below, an assessment now gives you a clear list of improvements and time to plan them before October 2030.",
            },
            {
              q: "Can you do the EPC on the same visit as my gas and electrical checks?",
              a: `Yes. We can book the EPC on the same day as your Gas Safety Certificate and EICR, so your tenant only needs to give access once. The EPC is priced from ${prices.epc} on its own.`,
            },
          ]}
        />
      </section>

      <CtaSection
        title="Get your EPC sorted"
        body="Fixed price, tenant access arranged, and advice on the 2030 rules."
        button="Book an EPC"
        href="/book?service=epc"
      />
      <MobileBar label="EPC from" price={prices.epc} href="/book?service=epc" />
    </>
  );
}
