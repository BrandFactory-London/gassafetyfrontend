# CLAUDE.md

## Read first: BrandFactory Labs

This repo is a BrandFactory Labs project: Keystone Landlord Compliance Website (Lab Projects Ref P-L-09, Code KSF).

- Before changing any code, run the `labs-session-open` skill (SOP L3).
- At the end of every session, run the `labs-session-close` skill (SOP L5).
- Every piece of work has a ticket. If the prompt doesn't name one, create it per L3 step 1.
- If Amir types `/define` followed by a term, or asks to "define and save" one: add it to Amir's Dictionary (https://app.notion.com/p/40f3cf592e438184b3eee4dcd7b5cde6), filed under its letter, with a plain-English definition and a real example from our projects. Check it isn't already there first.

Standards (Current versions in Notion; Notion wins over any copy):

- Engineering Methodology: https://app.notion.com/p/4083cf592e438162b16afd10371fabe2
- Dev Standard: https://app.notion.com/p/4083cf592e438110aa6edd42d620abad
- Labs System Standard: https://app.notion.com/p/40e3cf592e4381eca9b7d33bcbf3a2c4
- Labs SOPs: https://app.notion.com/p/40e3cf592e43814095add475e2c2af71

This project's Pack:

- Lab Projects row: https://app.notion.com/p/4143cf592e43816e990bf3432b94f7be
- Technical Overview: https://app.notion.com/p/4143cf592e43819c873ed37b30d8fef7
- Runbook: https://app.notion.com/p/4143cf592e43819ebbb7c09993842e15
- App Addendum: none

Rules that always apply:

- If a Current doc and the code disagree, stop and say so.
- Never claim work is done until it's verified; say what was checked versus inspected.
- Never paste secrets, keys or tokens into Notion, commits or chat.
- Describe the work, never Amir's state.

## Production

- Vercel project `gassafetyfrontend` (team BrandFactory London). Production deploys from `main` only; every other branch gets a preview.
- Phase 1: front end only. Forms show a confirmation and send nothing. The site is `noindex` and `robots.txt` blocks crawlers until go-live (Phase 2). Do not remove either without a ticket that says so.
- Client-visible: everything served on production. There are no real users yet.

## Workflow

- **Never commit to, merge into, or push `main`.** Push your branch and open a PR. Amir merges (squash by default).
- Branches: `<type>/TKT-<n>-<slug>`, e.g. `feat/TKT-83-front-door-home`. Commits: Conventional Commits with a `Refs: TKT-<n>` trailer.
- Each PR adds a line under `## [Unreleased]` in `CHANGELOG.md`.

## Checks before pushing

Run all of these and paste the runner's summary lines verbatim in the PR:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm format:check
pnpm typecheck
pnpm test
pnpm build
```

## Data safety

No database in Phase 1. Phase 2 adds Supabase: live-data rules from the Dev Standard §10 apply from then.

## Secrets

None exist yet. When they do, they live in Vercel environment variables and the password manager only. Adding a variable means `.env.example` + Vercel (Preview and Production) + the Technical Overview, in the same PR.

## Verifying a deploy

`/version.json` returns `{ version, sha, builtAt, env }`. After a merge, the production `sha` must equal the merge commit.

## Notion linkage

Ticket Ref in the branch, PR title and `Refs:` trailer. Build Log rows per session (L5). Technical Overview Current State refreshed at every session close.

## Conventions

- British English. **No em dashes in copy or docs**; use commas, hyphens or a new sentence (a test enforces this in `app/`, `components/` and `lib/`).
- Anything in `[square brackets]` is a placeholder waiting on the client. Never invent prices, reviews, ratings, registration numbers or customer names.
- Business facts, prices and navigation live in `lib/site.ts`; areas in `lib/areas.ts`; photo slots in `lib/images.ts`.
- Design: `PRODUCT.md` (product brief) and `.impeccable/surfaces/` (direction contracts) on the redesign branch; the approved direction is the Locked decision "The Front Door, refined" (10 Nov 2026).

## Standing instructions

- **Confirm with Amir before major or irreversible changes.** Standing instruction from Amir, 10 Nov 2026, set as a working preference.
