export type VersionInfo = {
  version: string;
  sha: string;
  builtAt: string;
  env: string;
};

/** Build stamp served at /version.json. Missing values read "unknown". */
/** Values Next.js stamps at build. Each must be named in full so the bundler inlines it. */
function buildEnv(): Record<string, string | undefined> {
  return {
    APP_VERSION: process.env.APP_VERSION,
    BUILT_AT: process.env.BUILT_AT,
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    VERCEL_ENV: process.env.VERCEL_ENV,
  };
}

export function versionInfo(source: Record<string, string | undefined> = buildEnv()): VersionInfo {
  const pick = (value: string | undefined) => (value && value.trim() ? value : "unknown");
  return {
    version: pick(source.APP_VERSION),
    sha: pick(source.VERCEL_GIT_COMMIT_SHA),
    builtAt: pick(source.BUILT_AT),
    env: pick(source.VERCEL_ENV),
  };
}
