import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: `Landlord Gas and Electrical Certificates, London and Essex | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    'Gas Safety Certificates, EICRs and alarm checks for landlords across London and Essex. Fixed prices, tenant access arranged, certificates within 24 hours.',
  // Phase 1 is a private preview. Remove this at go-live (end of Phase 2).
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="preview-banner">Preview site. Prices, reviews and forms are placeholders until launch.</div>
        <PageBackground>
          <Header />
          <main id="main">{children}</main>
        </PageBackground>
        <Footer />
      </body>
    </html>
  );
}
