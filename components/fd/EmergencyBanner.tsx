import { site } from "@/lib/site";

/** Thin urgent call-out strip above the header. Number is a placeholder until the client confirms it. */
export default function EmergencyBanner() {
  const { emergency } = site;
  return (
    <div className="fd-urgent" role="region" aria-label="Urgent call-outs">
      <div className="fd-wrap fd-urgent-inner">
        <span className="fd-pulse-dot" aria-hidden="true" />
        <span className="fd-urgent-long">
          Urgent call-out in London? 24/7 {emergency.services} engineers:
        </span>
        <span className="fd-urgent-short">24/7 emergency call-outs:</span>
        <a href={emergency.phoneHref} className="fd-urgent-phone">
          Call {emergency.phone}
        </a>
      </div>
    </div>
  );
}
