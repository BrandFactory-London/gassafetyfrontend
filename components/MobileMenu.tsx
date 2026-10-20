'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { mainNav, site } from '@/lib/site';
import { MenuIcon } from './icons';

export default function MobileMenu() {
  const pathname = usePathname();
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  return (
    <details className="mobile-menu" ref={ref}>
      <summary>
        <MenuIcon />
        Menu
      </summary>
      <nav aria-label="Mobile" className="mobile-menu-panel">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact">Contact</Link>
        <a href={site.phoneHref}>Call {site.phone}</a>
        <Link href="/book" className="btn btn-primary">
          Get a price
        </Link>
      </nav>
    </details>
  );
}
