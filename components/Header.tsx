import Link from 'next/link';
import { mainNav, site } from '@/lib/site';
import { LogoMark } from './icons';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container bar">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <LogoMark />
          <span className="brand-name">{site.name}</span>
        </Link>
        <nav aria-label="Main" className="main-nav">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={site.phoneHref}>
            {site.phone}
          </a>
          <Link href="/book" className="btn btn-secondary">
            Get a price
          </Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
