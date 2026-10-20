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
            { q: 'Which alarms do you fit?', a: '[Sealed 10-year battery smoke and CO alarms as standard, or mains-wired interlinked alarms where required. Brands to confirm.]' },
            { q: 'Can you check alarms during my gas or EICR visit?', a: 'Yes. It is included with the Landlord Bundle.' },
            { q: 'Who tests the alarms during the tenancy?', a: 'Tenants should test them regularly. You are responsible for checking them at the start of each tenancy and fixing faults once reported.' },
          ]}
        />
      </section>

      <CtaSection title="Get your alarms checked" body="Fixed price, tenant access arranged, a dated record for your files." button="Book an alarm check" href="/book?service=alarms" />
      <MobileBar label="Alarm check from" price={prices.alarmCheck} href="/book?service=alarms" />
    </>
  );
}
