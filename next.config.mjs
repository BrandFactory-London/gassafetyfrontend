import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Stamped at build time and served by /version.json (Dev Standard §8.4).
  env: {
    APP_VERSION: pkg.version,
    BUILT_AT: new Date().toISOString(),
  },
  // Essex was dropped on 10 Nov 2026 (KSF-TKT-86): Greater London only. Old area URLs go to /areas.
  async redirects() {
    const essex = [
      "chelmsford",
      "southend-on-sea",
      "basildon",
      "brentwood",
      "grays",
      "harlow",
      "colchester",
    ];
    return essex.map((slug) => ({
      source: `/areas/${slug}`,
      destination: "/areas",
      permanent: true,
    }));
  },
};

export default nextConfig;
