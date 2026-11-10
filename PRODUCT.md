# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary: private landlords with one to a handful of rented homes in London and Essex. They need their annual Gas Safety Certificate (CP12), five-yearly EICR, EPC and smoke/CO alarm compliance sorted without taking time off or chasing tenants.
- Secondary: letting agents and portfolio landlords who need volume pricing, tenant access handled and one monthly invoice.

## Product Purpose

A gas and electrical contractor's marketing site. It gets a landlord from "is my rental compliant?" to a fixed price and a booked visit, then keeps the certificate on record. Phase 1 is front end only: forms confirm but send nothing.

## Positioning

Hassle removed. The company arranges access with the tenant, does gas, electrical and alarm checks in one visit, and emails the certificate within 24 hours, so the landlord never has to be there or chase anyone.

## Operating Context

- Legal cadence: CP12 every 12 months; EICR at least every 5 years with C1/C2/FI remedials within 28 days; tenant copy within 28 days; smoke alarm per storey and CO alarm by fixed combustion appliances; EPC for letting.
- Landlords arrive from search, often near a deadline or after an agent asks for a certificate.
- Postcode-first quote flow at /book (accepts ?service= and ?postcode=), 60-second compliance checker at /compliance-check.
- Phase 3 adds a landlord portal with reminders 60, 30 and 7 days before anything is due.

## Capabilities and Constraints

- Services: CP12, EICR, EPC, smoke and CO alarms, Landlord Bundle, remedial works, boiler servicing and repairs, electrical upgrades.
- Covers 15 London boroughs and Essex towns.
- Stack: Next.js App Router on Vercel, plain CSS; Supabase arrives in Phase 2.
- Trading name not decided (working name Keystone). Prices, registration numbers, phone and email are placeholders in lib/site.ts.

## Brand Commitments

None binding. The current teal/sand look is a wireframe only and may be replaced.

## Evidence on Hand

Nothing yet: no photos, reviews, logo or confirmed prices. Use clearly labelled synthetic placeholders and never invent ratings, review quotes, customer names or prices.

## Product Principles

- The landlord should never need to be present or chase a tenant.
- Prices and what is included are stated before commitment.
- Every certificate is on record and easy to find again.
- Plain English about the law, never scare tactics.
