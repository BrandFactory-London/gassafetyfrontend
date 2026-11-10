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
};

export default nextConfig;
