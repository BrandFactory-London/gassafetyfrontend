# 0001. Visual direction: The Front Door, refined

- **Status:** Accepted
- **Date:** 10 Nov 2026
- **Source:** design round with Amir on 10 Nov 2026 (Impeccable direction roll, Claude Design canvas "Keystone Homepage Directions"). Mirrored in Notion Decisions as a Locked decision on P-L-09 (KSF-TKT-83).

## Context

The Phase 1 site used a teal and sand system (Bricolage Grotesque, DM Sans, yellow accent). Amir judged it too generic for a market where most competitors ship the same engineer photo, badges and service cards. The positioning is "hassle removed": tenant access arranged, every certificate in one visit, the landlord never needs to be there.

## Decision

Every page uses The Front Door, refined (`app/front-door.css`, `components/fd/`):

- Limestone-white ground, white header, near-black ink. Oxblood is reserved for the primary action; aged brass only on postcode inputs and the house numeral.
- A thin encaustic tile rule (black, white, terracotta) is the only pattern.
- Archivo (wide, heavy) for headings and nameplate caps, Public Sans for body, Bodoni Moda only for house-number numerals. Self-hosted from npm (`@fontsource-variable/*`).
- Green, amber and red are used only for certificate status. Certificate validity is drawn to scale.
- Homepage hero: a realistic Victorian door whose brass letterbox is the postcode input. On load the knocker taps twice, the fanlight lights and an example status card slides out; the letterbox flap lifts on focus. All motion stops under `prefers-reduced-motion`.
- Areas render as London street nameplates with the postcode district in red.

## Consequences

- Older pages inherit the new type, ground, header and footer immediately, and are restyled page by page under KSF-TKT-83.
- The previous Keystone design system is superseded.
- The Phase 1 rules still stand: forms send nothing, the site stays noindex.
