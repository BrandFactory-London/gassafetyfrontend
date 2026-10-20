import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-narrow" style={{ paddingTop: 80, paddingBottom: 140, textAlign: 'center' }}>
      <p className="eyebrow" style={{ marginBottom: 14 }}>
        Page not found
      </p>
      <h1 className="display-xl" style={{ marginBottom: 16 }}>
        We could not find that page
      </h1>
      <p className="lead" style={{ margin: '0 auto 28px' }}>
        It may have moved. Try one of these instead.
      </p>
      <div className="row" style={{ justifyContent: 'center' }}>
        <Link href="/" className="btn btn-secondary">
          Home
        </Link>
        <Link href="/landlord-certificates" className="btn btn-secondary">
          Certificates
        </Link>
        <Link href="/book" className="btn btn-primary">
          Get a price
        </Link>
      </div>
    </section>
  );
}
