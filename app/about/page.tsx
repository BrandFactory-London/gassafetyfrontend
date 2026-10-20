import type { Metadata } from 'next';
import { images } from '@/lib/images';
import { site } from '@/lib/site';
import { Button, ImageBox, SectionHead } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Us: Registered Gas and Electrical Engineers',
  description:
    'Gas Safe, NAPIT and NIC registered engineers helping London and Essex landlords stay compliant. Meet the team, check our registrations and see how we work.',
};

const principles = [
  { title: 'Plain English', text: 'Every report is explained, every price is fixed and nothing is done without your approval.' },
  { title: 'Registered and checkable', text: 'Every engineer carries a Gas Safe, NAPIT or NIC registration you can look up before we arrive.' },
  { title: 'We arrange access', text: 'We deal with your tenant directly so you do not have to.' },
  { title: 'On record', text: 'Certificates within 24 hours, with copies for your tenant and agent.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="container split hero">
        <div style={{ flex: '1 1 520px' }}>
          <h1 className="display-xl">Registered engineers who explain the rules and handle the job</h1>
          <p className="lead">We help landlords and letting agents across London and Essex keep every property safe, certified and on record.</p>
          <Button href="/book">Get a price</Button>
        </div>
        <div style={{ flex: '1 1 420px' }}>
          <ImageBox slot={images.team} ratio="5 / 4" />
        </div>
      </section>

      <section className="container section split split-top">
        <div>
          <h2 className="heading-lg" style={{ marginBottom: 16 }}>
            Why we started
          </h2>
          <p className="body">
            [Client to supply: founder name, years in the trade, and the reason for starting. Suggested angle: after [X] years carrying out certificates for other companies, [Founder] saw landlords struggling with confusing rules, missed renewals and engineers who never turned up. {site.name} was set up to fix that: clear prices, plain explanations and a team that arranges everything with your tenant.]
          </p>
        </div>
        <div className="grid-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {principles.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p className="card-text">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHead title="Meet the team" />
        <div className="grid-auto">
          {[1, 2, 3].map((n) => (
            <article key={n} className="card">
              <div className="img-slot" style={{ aspectRatio: '1 / 1', boxShadow: 'none', fontSize: 13 }}>
                [Engineer photo]
              </div>
              <h3>[Name]</h3>
              <p className="card-text">[Role, e.g. Gas Safe registered engineer] · [X] years&apos; experience</p>
              <a href={site.registers.gasSafe} className="link-strong" style={{ fontSize: 14 }}>
                Registration No. [XXXXXX]
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHead title="Registrations and insurance" />
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Body</th>
                <th scope="col">What it means</th>
                <th scope="col">Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gas Safe Register</td>
                <td>The official register for anyone working on gas in the UK</td>
                <td><a href={site.registers.gasSafe}>{site.registrations.gasSafe}</a></td>
              </tr>
              <tr>
                <td>NAPIT</td>
                <td>Registered to carry out and certify electrical work</td>
                <td><a href={site.registers.napit}>{site.registrations.napit}</a></td>
              </tr>
              <tr>
                <td>NIC</td>
                <td>Approved electrical contractor</td>
                <td><a href={site.registers.nic}>{site.registrations.nic}</a></td>
              </tr>
              <tr>
                <td>Public liability insurance</td>
                <td>Cover for work in your property</td>
                <td>{site.liability}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="container section split">
        <div>
          <h2 className="heading-lg" style={{ marginBottom: 12 }}>
            Where we work
          </h2>
          <p className="body">All London boroughs and [Essex areas to confirm], from our base in {site.base}.</p>
        </div>
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <Button href="/book">Get a price</Button>
          <a href={site.phoneHref} className="link-strong">
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  );
}
