export default function LegalPlaceholder({ title }: { title: string }) {
  return (
    <section className="container-narrow" style={{ paddingTop: 56, paddingBottom: 112 }}>
      <h1 className="display-xl" style={{ marginBottom: 20 }}>
        {title}
      </h1>
      <div className="panel-white">
        <p className="body">
          [{title} to be supplied by the client&apos;s solicitor or a vetted template before launch. It must name the trading company, registered address and, for privacy, how enquiry and tenant data is collected, stored and deleted.]
        </p>
      </div>
    </section>
  );
}
