import Link from "next/link";
import { site } from "@/lib/site";

/** The wordmark, set like a London street nameplate. */
export default function NamePlate() {
  return (
    <Link href="/" className="fd-plate-mark" aria-label={`${site.name} home`}>
      <span className="fd-plate-name">{site.name}</span>
      <span className="fd-plate-district">LONDON · ESSEX</span>
    </Link>
  );
}
