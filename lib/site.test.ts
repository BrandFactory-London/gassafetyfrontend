import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { footerNav, mainNav } from "./site";
import { areas } from "./areas";

const root = join(__dirname, "..");

/** True when an App Router page exists for a site path such as /pricing. */
function routeExists(href: string): boolean {
  const path = href.split("?")[0]!.split("#")[0]!;
  const dir = join(root, "app", path);
  return existsSync(join(dir, "page.tsx"));
}

function filesUnder(dir: string, exts: string[]): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return filesUnder(full, exts);
    return exts.some((e) => name.endsWith(e)) ? [full] : [];
  });
}

describe("navigation", () => {
  it("every main and footer link has a page", () => {
    const links = [...mainNav, ...footerNav.flatMap((g) => g.links)];
    const missing = links.filter((l) => !routeExists(l.href)).map((l) => l.href);
    expect(missing).toEqual([]);
  });
});

describe("areas", () => {
  it("have unique slugs and only point to areas that exist", () => {
    const slugs = areas.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    const broken = areas.flatMap((a) =>
      a.nearby.filter((n) => !slugs.includes(n)).map((n) => `${a.slug} -> ${n}`),
    );
    expect(broken).toEqual([]);
  });
});

describe("copy rules", () => {
  it("no em dashes in site copy (house style)", () => {
    const files = [
      ...filesUnder(join(root, "app"), [".tsx", ".ts"]),
      ...filesUnder(join(root, "components"), [".tsx"]),
      ...filesUnder(join(root, "lib"), [".ts"]),
    ].filter((f) => !f.endsWith(".test.ts"));
    const offenders = files.filter((f) => readFileSync(f, "utf8").includes("—"));
    expect(offenders).toEqual([]);
  });
});
