import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import NamePlate from "./NamePlate";

export default function SiteFooter() {
  return (
    <footer className="fd-footer">
      <div className="fd-tilerule" aria-hidden="true" />
      <div className="fd-wrap fd-cols-4 fd-footer-cols">
        <div>
          <NamePlate />
          <p style={{ margin: "18px 0 0", lineHeight: 1.6 }}>
            Gas, electrical and EPC certificates for landlords across London.
          </p>
        </div>
        {footerNav.map((group) => (
          <div key={group.title} className="fd-footer-col">
            <h2>{group.title}</h2>
            {group.links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="fd-footer-col">
          <h2>Contact</h2>
          <a href={site.phoneHref}>{site.phone}</a>
          <span>{site.email}</span>
          <span>{site.hours}</span>
        </div>
      </div>
      <div className="fd-wrap fd-footer-legal">
        <span>
          © {new Date().getFullYear()} {site.legalName} · Company No. {site.companyNumber}
        </span>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/cookies">Cookies</Link>
      </div>
    </footer>
  );
}
