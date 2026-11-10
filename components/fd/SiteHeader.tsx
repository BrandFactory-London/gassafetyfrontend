import Link from "next/link";
import { mainNav, site } from "@/lib/site";
import NamePlate from "./NamePlate";
import SiteMenu from "./SiteMenu";

export default function SiteHeader() {
  return (
    <>
      <header className="fd-header">
        <div className="fd-wrap fd-header-bar">
          <NamePlate />
          <nav aria-label="Main" className="fd-nav">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="fd-header-actions">
            <a className="fd-header-phone" href={site.phoneHref}>
              {site.phone}
            </a>
            <Link href="/book" className="fd-btn fd-btn-primary">
              Get a price
            </Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <a
              className="fd-icon-btn fd-call-icon"
              href={site.phoneHref}
              aria-label={`Call ${site.phone}`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
              </svg>
            </a>
            <SiteMenu />
          </div>
        </div>
        <div className="fd-tilerule" aria-hidden="true" />
      </header>
    </>
  );
}
