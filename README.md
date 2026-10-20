# Landlord compliance site (working name: Keystone)

Phase 1 marketing site for a London and Essex gas and electrical compliance company. Built by BrandFactory Labs.

**Phase 1 is front end only.** Forms show a confirmation but send nothing. The site is set to `noindex` and `robots.txt` blocks crawlers until go-live at the end of Phase 2.

## Stack

- Next.js (App Router), React, TypeScript
- Plain CSS in `app/globals.css`, built from the Keystone design system tokens (teal and sand, Bricolage Grotesque and DM Sans)
- No database, API routes or third-party services in Phase 1

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build, as Vercel runs it
```

## Where to change things

| What | File |
| --- | --- |
| Business name, phone, email, hours, registration numbers, rating | `lib/site.ts` (`site`) |
| Prices | `lib/site.ts` (`prices`) |
| Navigation and footer links | `lib/site.ts` (`mainNav`, `footerNav`) |
| Area pages (names, postcodes, nearby areas, local copy) | `lib/areas.ts` |
| Photos | `lib/images.ts` (see below) |
| Colours, type, spacing, components | `app/globals.css` |
| Page copy | `app/**/page.tsx` |

Anything in `[square brackets]` is a placeholder waiting on the client.

## Adding photos

1. Put the image in `public/images/`, e.g. `public/images/hero-engineer.jpg`.
2. In `lib/images.ts`, set the slot's `src`, e.g. `hero: { src: '/images/hero-engineer.jpg', ... }`.
3. Slots with `src: null` show a labelled placeholder with the photo brief.

| Slot | Used on | Suggested size |
| --- | --- | --- |
| `hero` | Homepage hero | 1200 x 1500 (4:5 portrait) |
| `team` | About hero | 1500 x 1200 (5:4) |
| `area` | Area pages | 1500 x 1200 (5:4) |
| `engineer` | EICR engineer card | 600 x 700 |
| `eicr`, `gas` | Reserved for service pages | 1500 x 1200 |

## Pages

- `/` homepage
- `/landlord-certificates` hub, plus `/eicr`, `/gas-safety-certificate`, `/landlord-bundle`, `/smoke-co-alarms`
- `/remedial-works`, `/pricing`, `/letting-agents`, `/about`, `/contact`
- `/compliance-check` (interactive checker) and `/book` (three-step quote form, accepts `?service=` and `?postcode=`)
- `/gas`, `/electrical` hubs (draft copy, Batch 2 pages to follow)
- `/areas` and `/areas/[slug]` for 15 London and Essex areas (local copy to follow)
- `/guides` (holding page until the 8 launch guides are written)
- `/privacy`, `/terms`, `/cookies` (placeholders for solicitor-supplied text)

## Phase 2 checklist (go-live)

- Remove `robots` from `app/layout.tsx` and replace `app/robots.ts` with an allow rule plus sitemap
- Remove the preview banner in `app/layout.tsx`
- Wire forms to Supabase (`enquiries` table) and Resend
- Add booking, payments and admin
