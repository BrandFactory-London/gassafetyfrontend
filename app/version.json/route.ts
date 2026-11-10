import { versionInfo } from "@/lib/version";

// Prerendered at build so the values are the build's, not the request's.
export const dynamic = "force-static";

export function GET() {
  return Response.json(versionInfo(), {
    headers: { "Cache-Control": "no-store" },
  });
}
