import type { Metadata } from 'next';
import LegalPlaceholder from '@/components/LegalPlaceholder';

export const metadata: Metadata = { title: 'Terms and conditions' };

export default function TermsPage() {
  return <LegalPlaceholder title="Terms and conditions" />;
}
