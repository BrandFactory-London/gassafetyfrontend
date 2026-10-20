import type { Metadata } from 'next';
import LegalPlaceholder from '@/components/LegalPlaceholder';

export const metadata: Metadata = { title: 'Cookie policy' };

export default function CookiesPage() {
  return <LegalPlaceholder title="Cookie policy" />;
}
