import type { Metadata } from 'next';
import { Suspense } from 'react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Fixed Price: Landlord Certificates London and Essex',
  description:
    'Get a fixed price for a Gas Safety Certificate, EICR or Landlord Bundle in three quick steps. London and Essex, VAT included, certificates within 24 hours.',
};

export default function BookPage() {
  return (
    <section className="container" style={{ paddingTop: 40, paddingBottom: 112 }}>
      <h1 className="display-xl" style={{ fontSize: 'clamp(34px, 4.5vw, 44px)', marginBottom: 8 }}>
        Get a fixed price
      </h1>
      <p className="lead" style={{ marginBottom: 32 }}>
        Three quick steps. No obligation, and we never share your details.
      </p>
      <Suspense fallback={<div className="panel-white">Loading the quote form…</div>}>
        <QuoteForm />
      </Suspense>
    </section>
  );
}
