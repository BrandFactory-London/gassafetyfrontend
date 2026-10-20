import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { Button, CtaSection, FaqList, SectionHead, Steps } from '@/components/ui';
import RemedialForm from '@/components/RemedialForm';

export const metadata: Metadata = {
  title: 'EICR Failed? Remedial Work for Landlords, London and Essex',
  description:
    'Failed EICR or gas check? Fixed-price remedial work across London and Essex, completed within the 28-day deadline with written confirmation for your records.',
};

const deadlines = [
  { code: 'C1', pill: 'action', meaning: 'Danger present', deadline: 'Straight away' },
  { code: 'C2', pill: 'action', meaning: 'Potentially dangerous', deadline: 'Within 28 days, or sooner if the report says' },
  { code: 'FI', pill: 'due', meaning: 'Further investigation needed', deadline: 'Within 28 days, or sooner if the report says' },
  { code: 'Immediately Dangerous (gas)', pill: 'action', meaning: 'Risk to life', deadline: 'Do not use until fixed' },
  { code: 'At Risk (gas)', pill: 'due', meaning: 'Could become dangerous', deadline: 'Repair before use' },
] as const;

export default function RemedialPage() {
  return (
    <>
      <section className="container split split-top hero">
        <div style={{ flex: '1 1 520px' }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Remedial works · 28-day deadline
          </p>
          <h1 className="display-xl">Failed EICR or gas check? We fix it within the deadline.</h1>
          <p className="lead">
            Send us your report, even if another company carried out the inspection. We quote every fix the same day, complete the work within the legal deadline and confirm it in writing.
          </p>
          <div className="row">
            <Button href="#upload">Upload your report</Button>
            <a href={site.phoneHref} className="link-strong">
              Or call {site.phone}
            </a>
          </div>
        </div>
        <div id="upload" style={{ flex: '1 1 440px' }} className="panel-white">
          <h2 className="heading-sm" style={{ fontSize: 22, marginBottom: 6 }}>
            Send us your report
          </h2>
          <p className="small" style={{ marginBottom: 18 }}>
            We will reply with a fixed quote within {site.quoteResponse}.
          </p>
          <RemedialForm />
        </div>
      </section>

      <section className="container section">
        <SectionHead title="The deadlines in plain English" />
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Meaning</th>
                <th scope="col">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {deadlines.map((d) => (
                <tr key={d.code}>
                  <td>
                    <span className={`pill pill-${d.pill}`}>{d.code}</span>
                  </td>
                  <td>{d.meaning}</td>
                  <td>{d.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="body" style={{ marginTop: 20, maxWidth: 760 }}>
          Once the work is done, you must give written confirmation to your tenant and your council within 28 days. We provide that confirmation for you.
        </p>
      </section>

      <section className="container section">
        <SectionHead title="How it works" />
        <Steps
          items={[
            { title: 'Send the report', text: `Upload it here or email it to ${site.remedialEmail}.` },
            { title: 'Get a fixed quote', text: 'Every item listed and priced in plain English, the same day.' },
            { title: 'We do the work', text: 'Registered engineers complete the fixes, with tenant access arranged.' },
            { title: 'Proof on record', text: 'You get written confirmation, ready to send to your tenant and council.' },
          ]}
        />
      </section>

      <section className="container section">
        <div className="panel-soft">
          <h2 className="heading-md" style={{ marginBottom: 16 }}>
            Common fixes we carry out
          </h2>
          <ul className="grid-auto" style={{ listStyle: 'none', gap: 12 }}>
            {[
              'Consumer unit (fuse board) replacements',
              'Missing or faulty RCD protection',
              'Earthing and bonding upgrades',
              'Damaged sockets, switches and fittings',
              'Gas appliance repairs and replacements',
              'Flue and ventilation fixes',
            ].map((item) => (
              <li key={item} className="body">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-narrow section">
        <h2 className="heading-lg" style={{ marginBottom: 28 }}>
          Remedial questions
        </h2>
        <FaqList
          items={[
            { q: 'Can you fix faults found by another company?', a: `Yes. Many of our remedial jobs come from reports written by other companies. Send us the EICR or Gas Safety Record and we will give you a fixed price for each item on it, so you can see exactly what you are paying for.\n\nBefore starting, our engineer checks the findings on site. Occasionally an item is coded differently from how we would code it, or a fault has been missed. If we disagree with a finding, we explain why in writing so you can make an informed decision. When the work is complete, you get written confirmation that the installation meets the standard, which is what you send to your tenant and council alongside the original report.` },
            { q: 'What if I cannot meet the 28-day deadline?', a: `Tell us your deadline when you send the report and we will book the work to meet it. C1 and C2 items are prioritised, and anything immediately dangerous is made safe first. If access, parts or the size of the job could cause a delay, we tell you straight away, not on day 27. [We can usually start within X working days of your approval.]\n\nThe 28 days run from the date of the inspection, not the date you received the report, and the report can set a shorter deadline. If a tenant refuses access, keep a record of every request you make, because the regulations say you are not in breach if you took all reasonable steps. Councils can fine landlords up to £40,000 for breaches, so a clear paper trail matters.` },
            { q: 'Do I need a new EICR after the fixes?', a: `No. You do not need a full new EICR after the remedial work. The regulations ask for written confirmation from a qualified person that the work has been completed and the installation now meets the required standard. We provide that confirmation, along with a certificate for the work itself.\n\nYour original EICR stays valid for its full term, normally five years from the inspection date. Within 28 days of the work being finished, send the written confirmation and the original report to your tenant and your local council. If you would like, we can send the tenant's copy for you.` },
          ]}
        />
      </section>

      <CtaSection title="Get your fixes quoted today" body="Send the report and we will reply with a fixed quote." button="Upload your report" href="#upload" />
    </>
  );
}
