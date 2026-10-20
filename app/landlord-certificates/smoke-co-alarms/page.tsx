import type { Metadata } from 'next';
import Link from 'next/link';
import { prices } from '@/lib/site';
import { AlarmIcon } from '@/components/icons';
import { Breadcrumbs, Button, CtaSection, FactCards, FaqList, MobileBar, SectionHead, Steps } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Smoke and CO Alarms for Landlords, London and Essex',
  description:
    'Smoke and carbon monoxide alarms checked and fitted to the current landlord rules across London and Essex. Fixed prices, tenant access arranged.',
};

export default function AlarmsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Landlord certificates', href: '/landlord-certificates' }, { label: 'Smoke and CO alarms' }]} />

      <section className="container split hero-inner">
        <div style={{ flex: '1 1 560px' }} className="hero">
          <p className="eyebrow" style={{ marginBottom: 18 }}>
            Fire and CO safety · Checked every tenancy
          </p>
          <h1 className="display-xl">Smoke and carbon monoxide alarms for landlords</h1>
          <p className="lead">We check, supply and fit alarms to the current rules for rented homes in England, and record what we did for your files.</p>
          <div className="row">
            <div>
              <div className="caption">Alarm check from</div>
              <div className="price-lg">{prices.alarmCheck}</div>
              <div className="caption">Supply and fit from {prices.alarmFit} per alarm</div>
            </div>
            <Button href="/book?service=alarms">Book an alarm check</Button>
          </div>
        </div>
        <div style={{ flex: '1 1 360px', display: 'flex', justifyContent: 'center' }}>
          <div className="icon-tile tile-alarm" style={{ width: 160, height: 160, borderRadius: 40 }}>
            <AlarmIcon size={88} />
          </div>
        </div>
      </section>

      <section className="container section">
        <SectionHead title="The law in plain English" intro="What the Smoke and Carbon Monoxide Alarm (England) Regulations ask of landlords." />
        <FactCards
          items={[
            { title: 'Smoke alarms', text: 'At least one working smoke alarm on every storey with a room used as living accommodation.' },
            { title: 'CO alarms', text: 'A carbon monoxide alarm in every room with a fixed combustion appliance, such as a boiler, gas fire or wood burner. Gas cookers are exempt.' },
            { title: 'Start of each tenancy', text: 'You must check every alarm works on the day a new tenancy starts.' },
            { title: 'Repairs', text: 'If a tenant reports a faulty alarm, you must repair or replace it promptly.' },
          ]}
        />
        <p className="caption" style={{ marginTop: 16 }}>
          HMOs and licensed properties often need more, such as linked fire alarm systems. <Link href="/contact">Ask us about fire alarm certification</Link>.
        </p>
      </section>

      <section className="container section">
        <SectionHead title="What we do" />
        <Steps
          items={[
            { title: 'Check every alarm', text: 'We test each smoke and CO alarm and confirm the positions meet the rules.' },
            { title: 'Fit what is missing', text: 'We supply and fit sealed 10-year battery or mains-wired alarms, depending on the property.' },
            { title: 'Record it', text: 'You get a dated record of the check for your files, ready to show your council or agent.' },
          ]}
        />
      </section>

      <section className="container-narrow section">
        <h2 className="heading-lg" style={{ marginBottom: 28 }}>
          Alarm questions
        </h2>
        <FaqList
          items={[
            { q: 'Which alarms do you fit?', a: `[Sealed 10-year battery smoke and CO alarms as standard, or mains-wired interlinked alarms where required. Brands to confirm.]\n\nSealed 10-year alarms suit most rented homes. The battery cannot be removed, so it cannot be borrowed for a TV remote, and the alarm runs for its full life without battery changes. Where a property already has mains-wired alarms, or building regulations require them after work such as a loft conversion, we replace like for like so the system stays compliant.\n\nIn England, you need at least one smoke alarm on every storey with a room used as living accommodation, and a CO alarm in any room with a fixed combustion appliance, such as a gas boiler, wood burner or oil boiler. Gas cookers are excluded. We fit each alarm in the right position and test it before we leave.` },
            { q: 'Can you check alarms during my gas or EICR visit?', a: `Yes. Alarm checks are included in the Landlord Bundle and can be added to a standalone gas or EICR visit for ${prices.alarmCheck}. Our engineer tests every smoke and carbon monoxide alarm, checks they are in the right places and within their replacement dates, and records the results so you have evidence they were working.\n\nIf an alarm is missing, faulty or past its replacement date, we can fit a new one on the same visit from ${prices.alarmFit} per alarm, so you do not need a second appointment. This is especially useful at the start of a new tenancy, when the law requires every alarm to be working on the day the tenancy begins.` },
            { q: 'Who tests the alarms during the tenancy?', a: `Responsibility is shared. As the landlord, you must make sure every required alarm is working on the day each new tenancy begins, and it is worth keeping a record that you checked, such as a note on the check-in inventory or a dated photo. During the tenancy, tenants should test the alarms regularly, ideally once a month, by pressing the test button.\n\nIf a tenant reports a faulty alarm, you must repair or replace it once you have been told, so act on reports quickly. Councils can fine landlords up to £5,000 for breaching the alarm regulations. Adding an alarm check to your annual gas safety visit gives you a dated record of working alarms at least once a year.` },
          ]}
        />
      </section>

      <CtaSection title="Get your alarms checked" body="Fixed price, tenant access arranged, a dated record for your files." button="Book an alarm check" href="/book?service=alarms" />
      <MobileBar label="Alarm check from" price={prices.alarmCheck} href="/book?service=alarms" />
    </>
  );
}
