import type { Metadata } from "next";
import { site } from "@/lib/site";
import { AlarmIcon, DocIcon, WrenchIcon } from "@/components/icons";
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
  title: "Fire Alarm Systems and Panels for HMOs and Flats, London",
  description:
    "Fire alarm panels and interlinked systems designed, installed, serviced and certified for HMOs, blocks of flats and flats above shops across London. Fixed quote after survey.",
};

const services = [
  {
    icon: <AlarmIcon />,
    title: "New fire alarm systems",
    text: "Grade A panel systems for larger HMOs and blocks, and mains-wired interlinked Grade D systems for smaller HMOs and flats, designed to the right category for your building.",
  },
  {
    icon: <WrenchIcon />,
    title: "Upgrades and panel replacements",
    text: "Old or faulty panels replaced, extra detectors and sounders added, and systems brought up to what your licence or fire risk assessment asks for.",
  },
  {
    icon: <DocIcon />,
    title: "Servicing and certificates",
    text: "Periodic inspection and servicing, with the certificate your council or insurer asks for at licensing or renewal.",
  },
];

export default function FireAlarmsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Fire alarms and panels" }]} />

      <section className="container split split-top hero-inner">
        <div style={{ flex: "1 1 560px" }} className="hero">
          <h1 className="display-xl">Fire alarm systems for HMOs and flats</h1>
          <p className="lead">
            We design, install, service and certify fire alarm panels and interlinked systems for
            HMOs, blocks of flats and flats above shops across London. One survey, a fixed quote,
            and the paperwork your council and insurer will ask for.
          </p>
          <div className="row">
            <Button href="/book?service=fire">Book a survey</Button>
            <a href={site.phoneHref} className="link-strong">
              Or call {site.phone}
            </a>
          </div>
        </div>
        <aside style={{ flex: "1 1 400px" }} className="panel-white">
          <h2 className="heading-sm" style={{ fontSize: 22, marginBottom: 18 }}>
            Who this is for
          </h2>
          <TickList
            items={[
              "Licensed and unlicensed HMOs",
              "Houses converted into self-contained flats",
              "Flats above shops, restaurants and offices",
              "Blocks with shared hallways and stairs",
              "Landlords told to upgrade by the council or a fire risk assessment",
            ]}
          />
          <p className="small muted" style={{ marginTop: 16 }}>
            [Accreditation, for example BAFE SP203-1 or FIA membership: client to confirm.]
          </p>
        </aside>
      </section>

      <section className="container section">
        <SectionHead title="What we do" />
        <div className="grid-auto">
          {services.map((s) => (
            <article key={s.title} className="card">
              <div className="icon-tile tile-alarm">{s.icon}</div>
              <h3>{s.title}</h3>
              <p className="card-text">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHead
          title="How a fire alarm job works"
          intro="Every building is different, so we price after a survey, never from a list."
        />
        <Steps
          items={[
            {
              title: "Survey",
              text: "An engineer visits, checks the layout, escape routes and any existing system.",
            },
            {
              title: "Fixed quote",
              text: "You get the right system category for the building, itemised in writing.",
            },
            {
              title: "Install",
              text: "We fit the panel, detectors and sounders with tenants given notice of each visit.",
            },
            {
              title: "Certificate",
              text: "Commissioning and installation certificates, then servicing reminders from us.",
            },
          ]}
        />
      </section>

      <section className="container-narrow section">
        <h2 className="heading-lg" style={{ marginBottom: 28 }}>
          Fire alarm questions
        </h2>
        <FaqList
          items={[
            {
              q: "Does my HMO need a fire alarm panel?",
              a: `It depends on the size and layout of the building. Smaller HMOs usually need mains-wired, interlinked smoke and heat alarms. Larger HMOs, and buildings with more storeys or shared escape routes, usually need a Grade A system with a control panel, as set out in the national fire safety guidance for HMOs and the British Standard for fire detection in homes (BS 5839-6).\n\nYour council's licence conditions or your fire risk assessment will say which system the building needs. We survey the property and quote for the system that meets it, not the most expensive one.`,
            },
            {
              q: "I have flats above a shop. What applies to me?",
              a: `Where a building has shared parts such as a hallway or stairs, the person responsible for it must have a fire risk assessment for those areas under the Regulatory Reform (Fire Safety) Order 2005. With a commercial unit underneath, the assessment often calls for detection that warns the flats of a fire in the shop below.\n\nWe can work from your existing fire risk assessment, or tell you if you need one first.`,
            },
            {
              q: "How often does a fire alarm system need servicing?",
              a: `Panel systems should be inspected and serviced by a competent person at least every six months, and your licence or insurer may ask for the certificate. Smaller interlinked systems still need testing and a record kept. We can put your building on a servicing schedule and remind you before each visit.`,
            },
            {
              q: "How much does a fire alarm system cost?",
              a: `It depends on the number of floors, rooms and detectors, and whether a panel is needed. We give you a fixed, itemised quote after a survey, so you know the full cost before any work starts. [Survey fee policy: client to confirm.]`,
            },
          ]}
        />
      </section>

      <CtaSection
        title="Get your building surveyed"
        body="A fixed quote after one visit, with the paperwork your council asks for."
        button="Book a survey"
        href="/book?service=fire"
      />
    </>
  );
}
