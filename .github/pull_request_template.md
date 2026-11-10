<!-- Title = Conventional Commit subject, e.g.  feat(home): Front Door homepage (TKT-83) -->

## What & why

<!-- 2–4 lines. What changed for users/the system, and why. -->

## Links

- Notion ticket: <!-- URL (KSF-TKT-…) -->
- Design decisions / ADR: <!-- docs/decisions/NNNN-… or Notion Decisions URL, or "n/a" -->
- Vercel preview: <!-- URL -->

## Type

- [ ] feat - [ ] fix - [ ] hotfix - [ ] refactor/perf - [ ] chore/docs/test - [ ] breaking (`!`)

## Verification gate

<!-- Mandatory parts: -->
<!-- • Test runner summary lines, pasted verbatim, e.g.  Test Files 2 passed (2) / Tests 5 passed (5) -->
<!-- • Typecheck + lint result -->
<!-- • Consumer audit for changed contracts -->
<!-- • What was VERIFIED (how) vs CODE-INSPECTION ONLY (needs smoke) -->

## Smoke on the preview

<!-- Named checks with expected outcome. "Report back if X". -->

- [ ] …

## Checklist

- [ ] CI green (lint, format, typecheck, test, build, secrets)
- [ ] Preview opened and the smoke items above checked
- [ ] Env vars: added in Vercel (Preview **and** Production) + `.env.example` updated — or n/a
- [ ] Bug fix includes a regression test — or n/a
- [ ] `CHANGELOG.md` → line added under `## [Unreleased]`
- [ ] README / CLAUDE.md / Notion Technical Overview updated if setup, scripts, env, deploy or architecture changed
- [ ] No secrets, tokens or project refs in the diff, commit messages or this description

## After merge (Amir)

- [ ] `/version.json` SHA = merge SHA
- [ ] Production smoke done
- [ ] Notion Build Log entry · ticket status updated
