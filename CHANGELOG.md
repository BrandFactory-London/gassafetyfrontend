# Changelog

All notable changes to this project are recorded here, in [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.
Versions follow semver. The site is pre-launch: nothing has been released or tagged yet.

## [Unreleased]

### Changed

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
