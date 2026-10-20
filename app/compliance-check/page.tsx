import type { Metadata } from 'next';
import ComplianceChecker from '@/components/ComplianceChecker';

export const metadata: Metadata = {
  title: 'Is My Rental Compliant? Free Landlord Compliance Check',
  description:
    'Answer six quick questions to see whether your rental meets the gas, electrical and alarm rules for landlords in England. Free, instant and no sign-up.',
};

export default function ComplianceCheckPage() {
  return (
    <section className="container-narrow" style={{ maxWidth: 808, paddingTop: 48, paddingBottom: 112 }}>
      <ComplianceChecker />
    </section>
  );
}
