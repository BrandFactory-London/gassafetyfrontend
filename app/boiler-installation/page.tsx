import type { Metadata } from "next";
import Link from "next/link";
import { prices, site } from "@/lib/site";
import {
  Breadcrumbs,
  Button,
  CtaSection,
  FaqList,
  SectionHead,
  Steps,
  TickList,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Boiler Installation for Landlords, London",
  description:
    "Replacement boilers for rented homes across London, fitted by Gas Safe registered engineers. Fixed quote after survey, old boiler removed, registered with Building Control.",
};

export default function BoilerInstallationPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Gas", href: "/gas" },
          { label: "Boiler installation" },
        ]}
      />

      <section className="container split split-top hero-inner">
        <div style={{ flex: "1 1 560px" }} className="hero">
          <h1 className="display-xl">New boilers for rented homes</h1>
          <p className="lead">
            Replacement boilers fitted by Gas Safe registered engineers, with your tenant kept
            informed and the old boiler taken away. One survey, one fixed quote, no surprises.
          </p>
          <div className="row">
            <Button href="/book?service=boiler-install">Book a survey</Button>
            <a href={site.phoneHref} className="link-strong">
              Or call {site.phone}
            </a>
          </div>
        </div>
        <aside style={{ flex: "1 1 400px" }} className="panel-white">
          <h2 className="heading-sm" style={{ fontSize: 22, marginBottom: 18 }}>
            Every installation includes
          </h2>
          <TickList
            items={[
              "Survey and a fixed, itemised quote",
              "Removal and disposal of the old boiler",
              "Registration with Building Control through Gas Safe Register",
              "Manufacturer warranty registered for you [length and brands: client to confirm]",
              "Tenant access arranged and the home left clean",
            ]}
          />
        </aside>
      </section>

      <section className="container section">
        <SectionHead title="How it works" />
        <Steps
          items={[
            {
              title: "Survey",
              text: "An engineer checks the property, the flue route and your hot water needs.",
            },
            {
              title: "Fixed quote",
              text: "The right boiler for the home, itemised, with the installation date agreed.",
            },
            {
              title: "Installation",
              text: "Usually completed in [one to two days], with your tenant told what to expect.",
            },
            {
              title: "Paperwork",
              text: "Building Regulations certificate, warranty and handover notes sent to you.",
            },
          ]}
        />
      </section>

      <section className="container section split split-top">
        <div>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            Keep it serviced, keep it covered
          </h2>
          <p className="body">
            Most manufacturer warranties need an annual service to stay valid. We can book the
            service alongside your yearly{" "}
            <Link href="/landlord-certificates/gas-safety-certificate" className="link-strong">
              Gas Safety Certificate
            </Link>
            , so your tenant only gives access once.
          </p>
        </div>
        <div className="panel-soft">
          <h3 className="heading-sm" style={{ marginBottom: 12 }}>
            After installation
          </h3>
          <ul className="stack" style={{ listStyle: "none" }}>
            <li>Boiler service · {prices.boilerService}</li>
            <li>Gas Safety Certificate · from {prices.cp12}</li>
          </ul>
        </div>
      </section>

      <section className="container-narrow section">
        <h2 className="heading-lg" style={{ marginBottom: 28 }}>
          Boiler installation questions
        </h2>
        <FaqList
          items={[
            {
              q: "How much does a new boiler cost?",
              a: `It depends on the boiler type, the size of the home and how much pipework or flue work is needed. We give you a fixed, itemised price after a survey, so you see the full cost before you commit. [Survey fee policy: client to confirm.]`,
            },
            {
              q: "Is the installation registered?",
              a: `Yes. A new boiler must be notified to Building Control. As Gas Safe registered engineers, we notify it through Gas Safe Register, which then sends you a Building Regulations Compliance Certificate. Keep it with your property records.`,
            },
            {
              q: "Can you work around my tenant?",
              a: `Yes. We agree the date with your tenant, explain how long the heating and hot water will be off, and keep you updated. [Temporary heaters for winter installations: client to confirm.]`,
            },
          ]}
        />
      </section>

      <CtaSection
        title="Replace the boiler without the hassle"
        body="A fixed quote after one visit, with your tenant looked after."
        button="Book a survey"
        href="/book?service=boiler-install"
      />
    </>
  );
}
