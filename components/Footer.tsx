import Link from 'next/link';
import { footerNav, site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container cols">
        <div>
          <div className="footer-brand">{site.name}</div>
          <p>Gas and electrical certificates for landlords across London and Essex.</p>
        </div>
        {footerNav.map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>{site.email}</li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="container footer-legal">
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
