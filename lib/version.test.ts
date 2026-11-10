import { describe, expect, it } from "vitest";
import { versionInfo } from "./version";

describe("versionInfo", () => {
  it("returns the four build fields from the environment", () => {
    expect(
      versionInfo({
        APP_VERSION: "0.1.0",
        VERCEL_GIT_COMMIT_SHA: "abc123",
        BUILT_AT: "2026-11-10T14:00:00.000Z",
        VERCEL_ENV: "preview",
      }),
    ).toEqual({
      version: "0.1.0",
      sha: "abc123",
      builtAt: "2026-11-10T14:00:00.000Z",
      env: "preview",
    });
  });

  it("reads unknown for missing or blank values", () => {
    expect(versionInfo({ APP_VERSION: " " })).toEqual({
      version: "unknown",
      sha: "unknown",
      builtAt: "unknown",
      env: "unknown",
    });
  });
});
