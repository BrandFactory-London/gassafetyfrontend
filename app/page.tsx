import Link from "next/link";
import { areas } from "@/lib/areas";
import { prices, site } from "@/lib/site";
import MobileCtaBar from "@/components/fd/MobileCtaBar";
import PostcodeLetterbox from "@/components/fd/PostcodeLetterbox";

// Validity drawn to scale across 10 years (Locked decision, 10 Nov 2026).
const certificates = [
  {
    name: "Gas Safety (CP12)",
    rule: "Every gas appliance, flue and pipework checked every 12 months. Your tenant gets a copy within 28 days.",
    every: "Every 12 months",
    years: 1,
    price: prices.cp12,
    href: "/landlord-certificates/gas-safety-certificate",
  },
  {
    name: "EICR",
    rule: "Fixed wiring inspected at least every 5 years. Any C1 or C2 fault is fixed within 28 days.",
    every: "At least every 5 years",
    years: 5,
    price: prices.eicr,
    href: "/landlord-certificates/eicr",
  },
  {
    name: "EPC",
    rule: "Needed before you let, rated A to G, with a minimum rating to let.",
    every: "Lasts 10 years",
    years: 10,
    price: prices.epc,
    href: "/landlord-certificates/epc",
  },
  {
    name: "Smoke and CO alarms",
    rule: "A smoke alarm on every storey and a CO alarm by every fixed combustion appliance, checked at the start of each tenancy.",
    every: "Every new tenancy",
    years: 0.4,
    price: `${prices.alarmCheck} check`,
    href: "/landlord-certificates/smoke-co-alarms",
  },
];

const steps = [
  {
    title: "Post your postcode",
    text: "Pick the certificates you need and see a fixed price before you commit.",
  },
  {
    title: "We call your tenant",
    text: "We agree a time with them directly. You do not need to be there or pass on messages.",
  },
  {
    title: "One visit, everything",
    text: "A registered engineer does gas, electrics, alarms and EPC in a single appointment.",
  },
  {
    title: "On record in 24 hours",
    text: "Certificates are emailed to you, the tenant copy is sent for you, and we remind you before renewal.",
  },
];

const portfolio = [
  {
    addr: "Flat 2, Elm Road, E17",
    gas: ["Valid", "ok"],
    eicr: ["34 days", "due"],
    epc: ["C", "ok"],
  },
  {
    addr: "12 Park Lane, Romford",
    gas: ["Expired", "bad"],
    eicr: ["Valid", "ok"],
    epc: ["D", "ok"],
  },
  {
    addr: "5 Mill Close, Walthamstow",
    gas: ["Valid", "ok"],
    eicr: ["Valid", "ok"],
    epc: ["Renew", "due"],
  },
  {
    addr: "88 Albion Street, Ilford",
    gas: ["21 days", "due"],
    eicr: ["Valid", "ok"],
    epc: ["C", "ok"],
  },
] as const;

const guides = [
  ["Landlord gas safety certificate: the complete guide", "Gas safety"],
  ["EICR for landlords: rules, costs and what happens if it fails", "Electrical"],
  ["C1, C2 and FI codes explained", "Electrical"],
  ["Renters' Rights Act: what it means for your certificates", "Regulation"],
];

const reviewSlots = [
  "[Reviewer name], landlord in [area]",
  "[Reviewer name], letting agent in [area]",
  "[Reviewer name], landlord in [area]",
];

export default function HomePage() {
  const london = areas;

  return (
    <>
      <section className="fd-wrap fd-hero">
        <div className="fd-hero-copy">
          <div className="fd-hero-intro">
            <h1 className="fd-h1">
              We&apos;ll knock.
              <br />
              You won&apos;t have&nbsp;to.
            </h1>
          </div>
          <div className="fd-hero-lead">
            <p className="fd-lead" style={{ maxWidth: 520 }}>
              We arrange access with your tenant, complete your landlord certificates in one visit,
              and your paperwork is on record within 24 hours.
            </p>
          </div>
          <div className="fd-hero-prices">
            <table className="fd-prices">
              <caption className="sr-only">Prices from</caption>
              <tbody>
                <tr>
                  <td>Gas Safety Certificate (CP12)</td>
                  <td>from {prices.cp12}</td>
                </tr>
                <tr>
                  <td>EICR</td>
                  <td>from {prices.eicr}</td>
                </tr>
                <tr>
                  <td>EPC</td>
                  <td>from {prices.epc}</td>
                </tr>
                <tr>
                  <td>Landlord Bundle, gas and electrical in one visit</td>
                  <td>from {prices.bundle}</td>
                </tr>
              </tbody>
            </table>
            <p className="fd-small" style={{ marginTop: 20 }}>
              Gas Safe {site.registrations.gasSafe} · NICEIC {site.registrations.nic} · Insured to{" "}
              {site.liability} · Prices include VAT
            </p>
          </div>
        </div>

        <div className="fd-doorway">
          <div className="fd-keystone" aria-hidden="true" />
          <div className="fd-surround">
            <div className="fd-reveal">
              <div className="fd-fanlight" aria-hidden="true">
                <div className="fd-fanglow" />
                <div className="fd-fanbars" />
                <div className="fd-fanhub" />
                <span className="fd-numeral">17</span>
              </div>
              <div className="fd-leaf">
                <div className="fd-knockmount" aria-hidden="true" />
                <div className="fd-knocker" aria-hidden="true" />
                <div className="fd-panels" aria-hidden="true">
                  <div className="fd-panel" />
                  <div className="fd-panel" />
                </div>
                <PostcodeLetterbox
                  id="door-postcode"
                  variant="door"
                  note="No need to be home. We call your tenant."
                />
                <div className="fd-yale" aria-hidden="true" />
                <div className="fd-panels fd-panels-lower" aria-hidden="true">
                  <div className="fd-panel" />
                  <div className="fd-panel" />
                </div>
              </div>
            </div>
            <div className="fd-step" aria-hidden="true" />
          </div>

          <section className="fd-status-card" aria-label="Example property status">
            <div className="fd-status-head">
              <span style={{ fontWeight: 600, fontSize: 15 }}>Flat 2, Elm Road, E17</span>
              <span className="fd-small" style={{ fontSize: 12 }}>
                Example
              </span>
            </div>
            <div style={{ marginTop: 12 }}>
              <div className="fd-status-row">
                <span>Gas Safety (CP12)</span>
                <span className="fd-ok">Valid to Mar 2027</span>
              </div>
              <div className="fd-status-row">
                <span>EICR</span>
                <span className="fd-due">Due in 34 days</span>
              </div>
              <div className="fd-status-row">
                <span>EPC</span>
                <span className="fd-ok">C, valid to 2033</span>
              </div>
              <div className="fd-status-row">
                <span>CO alarm</span>
                <span className="fd-bad">Fit on next visit</span>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="fd-trust" aria-label="Registrations and insurance">
        <div className="fd-wrap fd-cols-4">
          <div>
            <div style={{ fontWeight: 700 }}>Gas Safe registered</div>
            <div className="fd-small" style={{ fontSize: 15 }}>
              No. {site.registrations.gasSafe} ·{" "}
              <a className="fd-link" href={site.registers.gasSafe}>
                check
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>NICEIC approved</div>
            <div className="fd-small" style={{ fontSize: 15 }}>
              No. {site.registrations.nic} ·{" "}
              <a className="fd-link" href={site.registers.nic}>
                check
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>Fully insured</div>
            <div className="fd-small" style={{ fontSize: 15 }}>
              {site.liability} public liability
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>{site.rating} on Google</div>
            <div className="fd-small" style={{ fontSize: 15 }}>
              from {site.reviewCount} reviews
            </div>
          </div>
        </div>
      </section>

      <section className="fd-wrap fd-section" aria-labelledby="how-heading">
        <h2 id="how-heading" className="fd-h2" style={{ maxWidth: 820 }}>
          From your postcode to a certificate on file. You never set foot on the path.
        </h2>
        <div
          className="fd-tilerule fd-tilerule-thick fd-grow"
          aria-hidden="true"
          style={{ margin: "56px 0 40px" }}
        />
        <ol className="fd-steps fd-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <div className="fd-step-num" aria-hidden="true">
                {i + 1}
              </div>
              <h3 className="fd-h3">{s.title}</h3>
              <p className="fd-body">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="fd-wrap fd-section" aria-labelledby="certs-heading">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
          }}
        >
          <div>
            <h2 id="certs-heading" className="fd-h2" style={{ maxWidth: 760 }}>
              What your rental needs, and how long each one lasts.
            </h2>
          </div>
          <Link href="/pricing" className="fd-link">
            See full pricing
          </Link>
        </div>
        <div style={{ marginTop: 48, borderTop: "2px solid var(--fd-ink)" }}>
          <div className="fd-sched-head" aria-hidden="true">
            <span>Certificate</span>
            <span>The rule</span>
            <span>Validity, to scale (10 years)</span>
            <span>Price</span>
            <span />
          </div>
          {certificates.map((c) => (
            <div key={c.name} className="fd-sched-row">
              <h3 className="fd-h3">{c.name}</h3>
              <p className="fd-body fd-sched-rule" style={{ fontSize: 15 }}>
                {c.rule}
              </p>
              <div className="fd-sched-bar">
                <div className="fd-bar-track">
                  <div className="fd-bar fd-grow" style={{ width: `${(c.years / 10) * 100}%` }} />
                </div>
                <div className="fd-small" style={{ marginTop: 6 }}>
                  {c.every}
                </div>
              </div>
              <span className="fd-sched-price">{c.price}</span>
              <Link href={c.href} className="fd-link" style={{ fontSize: 15 }}>
                {`${c.name} details`}
              </Link>
            </div>
          ))}
          <div className="fd-sched-row fd-sched-bundle">
            <h3 className="fd-h3">Landlord Bundle</h3>
            <p className="fd-body fd-sched-rule" style={{ fontSize: 15 }}>
              Gas Safety Certificate and EICR together. One booking, one invoice, one tenant
              appointment. Add EPC and alarms to the same visit.
            </p>
            <div className="fd-sched-bar fd-small" style={{ fontSize: 14 }}>
              Save {prices.bundleSaving} against booking separately
            </div>
            <span className="fd-sched-price">{prices.bundle}</span>
            <Link
              href="/book?service=bundle"
              className="fd-btn fd-btn-primary"
              style={{ fontSize: 15 }}
            >
              Book bundle
            </Link>
          </div>
        </div>
      </section>

      <section
        className="fd-dark"
        style={{ marginTop: "var(--fd-section)" }}
        aria-labelledby="check-heading"
      >
        <div className="fd-wrap fd-split" style={{ paddingBlock: 112 }}>
          <div>
            <h2 id="check-heading" className="fd-h2">
              Is your rental compliant right now?
            </h2>
            <p className="fd-lead" style={{ marginTop: 22, maxWidth: 500, fontSize: 18 }}>
              Answer six questions about the property. You get a plain-English list of what is in
              date, what is due and what needs doing now.
            </p>
            <Link
              href="/compliance-check"
              className="fd-btn fd-btn-primary"
              style={{ marginTop: 34, padding: "16px 24px" }}
            >
              Start the check
            </Link>
          </div>
          <div className="fd-card" aria-label="Example result">
            <div className="fd-status-head">
              <span style={{ fontWeight: 700 }}>Your result</span>
              <span className="fd-small" style={{ fontSize: 12 }}>
                Example
              </span>
            </div>
            <div style={{ marginTop: 14, fontSize: 15 }}>
              <div className="fd-status-row" style={{ padding: "13px 0", fontSize: 15 }}>
                <span>Gas Safety Certificate</span>
                <span className="fd-ok">In date</span>
              </div>
              <div className="fd-status-row" style={{ padding: "13px 0", fontSize: 15 }}>
                <span>EICR</span>
                <span className="fd-due">Due within 60 days</span>
              </div>
              <div className="fd-status-row" style={{ padding: "13px 0", fontSize: 15 }}>
                <span>EPC</span>
                <span className="fd-ok">In date</span>
              </div>
              <div className="fd-status-row" style={{ padding: "13px 0", fontSize: 15 }}>
                <span>CO alarm by boiler</span>
                <span className="fd-bad">Action needed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fd-wrap fd-section fd-split" aria-labelledby="agents-heading">
        <div>
          <h2 id="agents-heading" className="fd-h2">
            Every property, every certificate, one list.
          </h2>
          <p className="fd-lead" style={{ marginTop: 22, maxWidth: 500, fontSize: 18 }}>
            Volume pricing, tenant access handled for you, one monthly invoice. Your account will
            show what is due across every address, with reminders 60, 30 and 7 days out.
          </p>
          <Link
            href="/letting-agents"
            className="fd-link"
            style={{ display: "inline-block", marginTop: 30 }}
          >
            Talk to us about an account
          </Link>
        </div>
        <div className="fd-table-box">
          <table className="fd-table">
            <caption className="sr-only">Example portfolio</caption>
            <thead>
              <tr>
                <th scope="col">Property</th>
                <th scope="col">Gas</th>
                <th scope="col">EICR</th>
                <th scope="col">EPC</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((p) => (
                <tr key={p.addr}>
                  <td style={{ fontWeight: 600 }}>{p.addr}</td>
                  <td className={`fd-${p.gas[1]}`}>{p.gas[0]}</td>
                  <td className={`fd-${p.eicr[1]}`}>{p.eicr[0]}</td>
                  <td className={`fd-${p.epc[1]}`}>{p.epc[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="fd-small" style={{ margin: 0, padding: "10px 0 14px", fontSize: 12 }}>
            Example portfolio · accounts arrive with the landlord portal
          </p>
        </div>
      </section>

      <section className="fd-wrap fd-section" aria-labelledby="areas-heading">
        <h2 id="areas-heading" className="fd-h2">
          Greater London, street by street.
        </h2>
        <div className="fd-plates" style={{ marginTop: 44 }}>
          {london.map((a) => (
            <Link key={a.slug} href={`/areas/${a.slug}`} className="fd-plate">
              {a.name} <span className="fd-plate-pc">{a.postcodes[0]}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="fd-wrap fd-section" aria-labelledby="reviews-heading">
        <h2 id="reviews-heading" className="fd-h2">
          What landlords say
        </h2>
        <div className="fd-cols-3" style={{ marginTop: 44 }}>
          {reviewSlots.map((who, i) => (
            <figure key={i} className="fd-review">
              <blockquote>[Real Google review from the client&apos;s profile goes here]</blockquote>
              <figcaption className="fd-small" style={{ marginTop: 16, fontSize: 14 }}>
                {who}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="fd-wrap fd-section" aria-labelledby="guides-heading">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 16,
          }}
        >
          <h2 id="guides-heading" className="fd-h2">
            Landlord guides
          </h2>
          <Link href="/guides" className="fd-link">
            All guides
          </Link>
        </div>
        <div className="fd-guides">
          {guides.map(([title, cat]) => (
            <Link key={title} href="/guides" className="fd-guide">
              <span className="fd-guide-title">{title}</span>
              <span className="fd-guide-cat">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="fd-cta" aria-labelledby="cta-heading">
        <div className="fd-wrap fd-split" style={{ paddingBlock: 96 }}>
          <h2 id="cta-heading" className="fd-h2" style={{ fontSize: "clamp(34px, 3.8vw, 56px)" }}>
            Know it&apos;s done, without being there.
          </h2>
          <PostcodeLetterbox
            id="cta-postcode"
            variant="band"
            note="Fixed price before you commit. We arrange the rest with your tenant."
          />
        </div>
      </section>

      <MobileCtaBar label={`CP12 from ${prices.cp12}`} />
    </>
  );
}
