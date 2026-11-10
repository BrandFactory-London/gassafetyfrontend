"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { mainNav, site } from "@/lib/site";

/** Phone and tablet menu. A details element, so it works before JavaScript loads. */
export default function SiteMenu() {
  const pathname = usePathname();
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  return (
    <details className="fd-menu" ref={ref}>
      <summary className="fd-icon-btn" aria-label="Menu">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      </summary>
      <nav aria-label="Mobile" className="fd-menu-panel">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact">Contact</Link>
        <a href={site.phoneHref}>Call {site.phone}</a>
        <Link href="/book" className="fd-btn fd-btn-primary">
          Get a price
        </Link>
      </nav>
    </details>
  );
}
