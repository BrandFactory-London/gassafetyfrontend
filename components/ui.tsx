import Link from 'next/link';
import type { ReactNode } from 'react';
import type { ImageSlot } from '@/lib/images';
import { site } from '@/lib/site';
import { TickCircleIcon, TickIcon } from './icons';

/* Buttons */
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
};

export function Button({ href, children, variant = 'primary', size = 'lg' }: ButtonProps) {
  const cls = ['btn', `btn-${variant}`, size === 'lg' && variant !== 'ghost' ? 'btn-lg' : ''].filter(Boolean).join(' ');
  const external = href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http') || href.startsWith('#');
  if (external) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/* Section heading */
type SectionHeadProps = { eyebrow?: string; title: string; intro?: ReactNode; size?: 'lg' | 'md' };

export function SectionHead({ eyebrow, title, intro, size = 'lg' }: SectionHeadProps) {
  return (
    <div className="section-head">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={size === 'lg' ? 'heading-lg' : 'heading-md'}>{title}</h2>
      {intro ? <p className="body">{intro}</p> : null}
    </div>
  );
}

/* Breadcrumbs */
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container breadcrumb">
      <ol>
        {items.map((item) =>
          item.href ? (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ) : (
            <li key={item.label} aria-current="page">
              {item.label}
            </li>
          ),
        )}
      </ol>
    </nav>
  );
}

/* Service card */
type ServiceCardProps = {
  title: string;
  text: string;
  price?: string;
  href: string;
  linkLabel: string;
  icon?: ReactNode;
  tile?: 'gas' | 'electric' | 'alarm' | 'neutral';
  featured?: boolean;
  badge?: string;
};

export function ServiceCard({ title, text, price, href, linkLabel, icon, tile = 'neutral', featured, badge }: ServiceCardProps) {
  return (
    <article className={featured ? 'card card-featured' : 'card'}>
      {badge ? <span className="badge">{badge}</span> : null}
      {icon && !featured ? <div className={`icon-tile tile-${tile}`}>{icon}</div> : null}
      <h3>{title}</h3>
      <p className="card-text">{text}</p>
      {price ? (
        <p className="small" style={featured ? { color: 'inherit' } : undefined}>
          From <span className="price">{price}</span>
        </p>
      ) : null}
      <Link href={href} className="link-strong">
        {linkLabel}
      </Link>
    </article>
  );
}

/* Fact cards (the law in plain English) */
export type FactCard = { figure?: string; title: string; text: string; highlight?: boolean };

export function FactCards({ items }: { items: FactCard[] }) {
  return (
    <div className="grid-auto">
      {items.map((item) => (
        <article key={item.title} className={item.highlight ? 'card card-featured' : 'card'}>
          {item.figure ? (
            <div className="price-lg" style={{ fontSize: 32, color: item.highlight ? '#F2B705' : '#1B7A73' }}>
              {item.figure}
            </div>
          ) : null}
          <h3>{item.title}</h3>
          <p className="card-text">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

/* Numbered steps */
export type Step = { title: string; text: string };

export function Steps({ items, dark }: { items: Step[]; dark?: boolean }) {
  return (
    <ol className="grid-steps">
      {items.map((item, i) => (
        <li key={item.title} className="step" style={!dark && i === items.length - 1 ? { borderTopColor: '#F2B705' } : undefined}>
          <div className="step-num">{i + 1}</div>
          <h3>{item.title}</h3>
          <p className={dark ? 'on-dark' : 'body'} style={{ fontSize: 16 }}>
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );
}

/* Dark feature panel */
export function FeaturePanel({ children }: { children: ReactNode }) {
  return (
    <div className="feature">
      <div className="feature-dots" aria-hidden="true" />
      <div className="feature-body">{children}</div>
    </div>
  );
}

/* FAQ */
export type Faq = { q: string; a: ReactNode };

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details key={item.q} open={i === 0}>
          <summary>{item.q}</summary>
          {/* A blank line (\n\n) in an answer starts a new paragraph. */}
          {typeof item.a === 'string' ? item.a.split('\n\n').map((para) => <p key={para}>{para}</p>) : <p>{item.a}</p>}
        </details>
      ))}
    </div>
  );
}

/* Tick lists */
export function TickList({ items }: { items: string[] }) {
  return (
    <ul className="ticks">
      {items.map((item) => (
        <li key={item}>
          <TickCircleIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function InlineTicks({ items }: { items: string[] }) {
  return (
    <ul className="inline-ticks">
      {items.map((item) => (
        <li key={item}>
          <TickIcon />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* Image slot: shows the image once a path is set in lib/images.ts, otherwise a labelled placeholder */
export function ImageBox({ slot, ratio = '4 / 5', children }: { slot: ImageSlot; ratio?: string; children?: ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <div className={slot.src ? 'img-slot has-img' : 'img-slot'} style={{ aspectRatio: ratio }}>
        {slot.src ? <img src={slot.src} alt={slot.alt} /> : <span>[Photo: {slot.brief}]</span>}
      </div>
      {children}
    </div>
  );
}

/* Trust bar */
export function TrustBar() {
  return (
    <section aria-label="Accreditations" className="container">
      <div className="trust">
        <div className="trust-item">
          <div className="logo-slot">Gas Safe</div>
          <span>
            Gas Safe Registered
            <br />
            <a href={site.registers.gasSafe} style={{ fontSize: 13 }}>
              Check No. {site.registrations.gasSafe}
            </a>
          </span>
        </div>
        <div className="trust-item">
          <div className="logo-slot">NAPIT</div>
          <span>
            NAPIT Registered
            <br />
            <a href={site.registers.napit} style={{ fontSize: 13 }}>
              Check on register
            </a>
          </span>
        </div>
        <div className="trust-item">
          <div className="logo-slot">NIC</div>
          <span>
            NIC Approved Contractor
            <br />
            <a href={site.registers.nic} style={{ fontSize: 13 }}>
              Check on register
            </a>
          </span>
        </div>
        <div>
          <strong>Fully insured</strong>
          <br />
          <span className="muted">{site.liability} public liability</span>
        </div>
        <div>
          <strong>{site.rating} on Google</strong>
          <br />
          <span className="muted">from {site.reviewCount} reviews</span>
        </div>
      </div>
    </section>
  );
}

/* Reviews (placeholders until the Google feed is connected) */
export function Reviews({ captions }: { captions: string[] }) {
  return (
    <div className="grid-auto-lg">
      {captions.map((caption, i) => (
        <figure className="review" key={`${caption}-${i}`}>
          <div className="stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>
          <blockquote>[Google review pulled from the client&apos;s profile]</blockquote>
          <figcaption>{caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/* Closing call to action */
export function CtaSection({ title, body, button, href = '/book' }: { title: string; body: string; button: string; href?: string }) {
  return (
    <section className="container section" style={{ textAlign: 'center' }}>
      <h2 className="heading-lg" style={{ maxWidth: 760, margin: '0 auto 16px' }}>
        {title}
      </h2>
      <p className="body" style={{ maxWidth: 560, margin: '0 auto 28px' }}>
        {body}
      </p>
      <Button href={href}>{button}</Button>
    </section>
  );
}

/* Sticky booking bar on phones */
export function MobileBar({ label, price, button = 'Book now', href = '/book' }: { label: string; price: string; button?: string; href?: string }) {
  return (
    <div className="mobile-bar">
      <div>
        <div className="caption">{label}</div>
        <div style={{ fontWeight: 700, color: '#0C3536' }}>{price}</div>
      </div>
      <Button href={href} size="md">
        {button}
      </Button>
    </div>
  );
}
