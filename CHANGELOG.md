# Changelog

All notable changes to this project are recorded here, in [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.
Versions follow semver. The site is pre-launch: nothing has been released or tagged yet.

## [Unreleased]

### Added

- Client meeting changes (KSF-TKT-86): fire alarms and panels page, boiler installation page and a
  maintenance plan coming-soon page with a waiting list form (sends nothing); both services in the quote
  form, hubs, main nav (fire alarms) and a new Services footer group. A thin red urgent call-out banner
  above the header and a round red emergency button on phones that opens a 24/7 call card with an
  engineers-available indicator and the national gas emergency advice. Number and engineer count are
  placeholders.

### Removed

- Essex (KSF-TKT-86): Greater London only. Seven Essex area pages removed and redirected to /areas; all
  copy, titles and the nameplate updated. The header hides its phone number below 1520px (the urgent
  banner carries the number) so the nav stays on one line.

### Changed

- Site-wide motion (KSF-TKT-83): entrance fades and staggered rises, validity bars that grow in every
  browser (including Safari), gentle parallax on the door and section headings on desktop, and hover
  colour on schedule rows, prices, bars, links, nameplates, cards, buttons and tables. All off for reduced
  motion; no parallax on phones.
- Prices set from London competitor research, just below the market average, VAT included and the same
  across London and Essex: CP12 from £69, EICR from £99, EPC £79, bundle from £149, boiler service £115,
  alarm check free with any certificate and 20% off for agents with 11 to 50 properties (KSF-TKT-83).
- Every remaining page restyled in The Front Door system: older page styles re-skinned to the new palette,
  type and shapes, small capitals labels removed (facts moved into the intro lines), old teal and yellow
  colours replaced, and the phone booking bar now appears only after the main button scrolls away.
- Homepage: removed the small capitals labels above the hero and section headings (KSF-TKT-83).

### Added

- EPC page at /landlord-certificates/epc with the October 2030 EPC C rules (KSF-TKT-83), plus EPC in the
  quote form, the certificates hub and the footer.
- New visual system, The Front Door (KSF-TKT-83, ADR 0001): homepage rebuilt with the letterbox postcode door,
  certificate schedule with validity to scale, street-nameplate areas, new header, footer and phone menu, a
  sticky Get a price bar on phones, self-hosted fonts and an EPC price placeholder.
- Repo baseline (KSF-TKT-84): pnpm with a committed lockfile, Node 24, ESLint, Prettier, Vitest, CI with
  the gitleaks secrets job, `/version.json`, CLAUDE.md, AGENTS.md, PR template and this changelog.
- Phase 1 marketing site (before this changelog existed): homepage, certificate pages, pricing, letting
  agents, about, contact, compliance checker, three-step quote form, 15 area pages, guides holding page and
  legal placeholders.
