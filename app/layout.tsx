import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/public-sans";
import "@fontsource-variable/bodoni-moda";
import "./globals.css";
import "./front-door.css";
import SiteHeader from "@/components/fd/SiteHeader";
import SiteFooter from "@/components/fd/SiteFooter";
import RevealController from "@/components/RevealController";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `Landlord Gas, Electrical and EPC Certificates, London and Essex | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Gas Safety Certificates, EICRs, EPCs and alarm checks for landlords across London and Essex. Fixed prices, tenant access arranged, certificates within 24 hours.",
  // Phase 1 is a private preview. Remove this at go-live (end of Phase 2).
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="preview-banner">
          Preview site. Reviews and forms are placeholders until launch.
        </div>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <RevealController />
      </body>
    </html>
  );
}
