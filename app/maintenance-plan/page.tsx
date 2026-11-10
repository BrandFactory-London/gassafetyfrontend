import type { Metadata } from "next";
import { Button, FaqList, FeaturePanel, SectionHead, Steps, TickList } from "@/components/ui";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Landlord Maintenance Plan, London (Coming Soon)",
  description:
    "Every property, certificate and renewal in one place. We book the engineer before anything expires. Join the waiting list for our London landlord maintenance plan.",
};

export default function MaintenancePlanPage() {
  return (
    <>
      <section className="container split split-top hero">
        <div style={{ flex: "1 1 520px" }}>
          <span className="badge">Coming soon</span>
          <h1 className="display-xl" style={{ marginTop: 16 }}>
            Never chase a certificate again
          </h1>
          <p className="lead">
            The maintenance plan puts every property you own in one place. We track each
            certificate, tell you before anything is due and book the engineer for you, with your
            tenant&apos;s access arranged.
          </p>
          <Button href="#waitlist">Join the waiting list</Button>
        </div>
        <aside style={{ flex: "1 1 400px" }} className="panel-white">
          <h2 className="heading-sm" style={{ fontSize: 22, marginBottom: 18 }}>
            What the plan covers
          </h2>
          <TickList
            items={[
              "Your properties and certificates in one online account",
              "Reminders well before every gas, EICR, EPC and alarm deadline",
              "The engineer booked automatically, with tenant access arranged",
              "Every certificate stored and ready to download or send",
              "[Plan pricing and what is included: client to confirm]",
            ]}
          />
        </aside>
      </section>

      <section className="container section">
        <FeaturePanel>
          <h2 className="heading-lg" style={{ marginBottom: 36 }}>
            How it will work
          </h2>
          <Steps
            dark
            items={[
              {
                title: "Add your properties",
                text: "Tell us each address and upload the certificates you already have.",
              },
              {
                title: "We track every date",
                text: "Gas every 12 months, EICR every 5 years, EPC every 10, alarms each tenancy.",
              },
              {
                title: "We book the visit",
                text: "Before anything expires, we arrange a slot with your tenant and confirm it with you.",
              },
              {
                title: "Certificates on file",
                text: "Each new certificate lands in your account and goes to your tenant.",
              },
            ]}
          />
        </FeaturePanel>
      </section>

      <section id="waitlist" className="container section split split-top">
        <div style={{ flex: "1 1 340px" }}>
          <SectionHead title="Join the waiting list" size="md" />
          <p className="body">
            The plan opens to a small group of London landlords and letting agents first. Leave your
            details and we will email you when it is ready.
          </p>
        </div>
        <div style={{ flex: "1 1 560px" }} className="panel-white">
          <WaitlistForm />
        </div>
      </section>

      <section className="container-narrow section">
        <h2 className="heading-lg" style={{ marginBottom: 28 }}>
          Maintenance plan questions
        </h2>
        <FaqList
          items={[
            {
              q: "Can I book certificates now?",
              a: "Yes. You do not need to wait for the plan. Every certificate on this site can be booked today at a fixed price, and we will move your properties across when the plan opens.",
            },
            {
              q: "Is it for letting agents too?",
              a: "Yes. Agents will see every managed property in one account, with renewals tracked and one monthly invoice. Agents with 11 or more properties already get volume rates.",
            },
            {
              q: "When does it open?",
              a: "[Launch date: client to confirm.] Join the waiting list and we will tell you first.",
            },
          ]}
        />
      </section>
    </>
  );
}
