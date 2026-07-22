# Changelog
## Bierman Autism Centers — Proof Layer

All notable changes to the proof layer are documented in this file. Entries are listed in reverse chronological order.

---

## [v18] — May 9, 2026 — Checkpoint `7d8303c5`

**robots.txt — Facebook scraper allowlist**
- Added explicit `User-agent: facebookexternalhit / Allow: /` block to `robots.txt`
- Addresses 403 response from Meta Sharing Debugger
- Root cause: Manus CDN infrastructure block (not a robots.txt issue); full resolution requires custom domain deployment
- OG tags confirmed correct in `index.html`

---

## [v17] — May 9, 2026 — Checkpoint `716f705b`

**Schema fix — microdata conflict eliminated**
- Stripped all `itemScope`, `itemType`, and `itemProp` microdata attributes from `GBPReviewCard` component
- Root cause of 6 invalid Review Snippets in Rich Results Test: microdata attributes created a second set of 6 Review nodes without `itemReviewed`, separate from the JSON-LD nodes
- JSON-LD in `index.html` is now the sole schema source
- 0 microdata attributes remain in `Home.tsx`
- TypeScript clean

---

## [v16] — May 9, 2026 — Checkpoint `12e81344`

**Schema fix — `reviewBody` added to all 6 Review nodes**
- Added `reviewBody` field to all 6 `Review` nodes in `index.html` JSON-LD
- `reviewBody` text matches exact visible DOM text from `GBPReviewCard` component
- `itemReviewed` was already correctly pointing to `#localbusiness` — no change needed
- Resolves "invalid" flag for Review Snippets in Rich Results Test
- 26 schema nodes, all valid

---

## [v15] — May 9, 2026 — Checkpoint `c4ee1253`

**Review section rebuilt as native HTML/CSS React components**
- Replaced all 6 image-based review cards with native `GBPReviewCard` React components
- Features: colored initials avatar, SVG polygon gold stars, reviewer name + meta, review text with 160-char truncation + "Read more" toggle, "Posted on Google" badge
- Layout: featured card (Ambar Arias) in left column, 5 supporting cards in 2-column right grid
- Fully responsive: 1-col mobile → 2-col tablet → featured+grid desktop
- Added `itemScope`/`itemProp` microdata to review cards (later removed in v17 due to conflict)

---

## [v14] — May 9, 2026 — Checkpoint `89581b65`

**Nancy Passano review added; all review cards regenerated as clean images**
- Generated 6 clean review card images using Python/Pillow script
- Cards: warm white background, teal accent bar, colored initials avatar, polygon gold stars, "Posted on Google" badge — no edit/delete icons, no Google UI chrome
- Nancy Passano added as 6th review (Mar 10, 2025)
- Review grid updated to 3×2 layout
- Schema: `AggregateRating.reviewCount` updated to 6; Nancy Passano `Review` node added

---

## [v13] — May 9, 2026 — Checkpoint `26df0595`

**Theme card images + GBP review screenshots + schema expansion**
- 3 text-based SVG icon cards replaced with AI-generated theme card images (BCBA Guidance, Family Partnership, Progress-Focused)
- 5 real public GBP review screenshots added (Ambar Arias, Margarita Morales, Anthony Siciliano, Sohayb Stiti, Kim Sedlacek)
- Schema expanded: `aggregateRating` added to LocalBusiness (5.0/5, 5 reviews); 5 `Review` nodes added; 3 `ImageObject` nodes for theme cards
- Schema: 17 → 25 nodes

---

## [v12] — May 2026

**Rich Results Test — 11 valid items confirmed**
- Confirmed 11 valid items across 5 groups: Breadcrumbs, FAQ, Local businesses, Organization, Videos
- Schema Markup Validator: no critical errors
- TypeScript clean, JSON-LD valid

---

## [v11] — May 2026

**Video schema added**
- `VideoObject` node added to JSON-LD graph
- Ramsey ABA therapy overview video embedded with poster image
- Rich Results Test: Videos group added

---

## [v10] — May 2026

**FAQ section + schema**
- 13 FAQ Q&A pairs added to page
- `FAQPage` schema node added to JSON-LD graph
- Rich Results Test: FAQ group added

---

## [v9] — May 2026

**Insurance section**
- 9 insurance logos added (Aetna, Cigna, United Healthcare, Horizon BCBS NJ, AmeriHealth NJ, Oxford Health, Tricare, Medicaid NJ, Magellan Health)
- Horizon BCBS NJ feature card added
- Insurance verification CTA added

---

## [v8] — May 2026

**Directions section**
- Google Maps embed added
- Driving directions from Mahwah, Ridgewood, Paramus, Hackensack
- Transit and parking information
- `hasMap` added to `LocalBusiness` schema

---

## [v7] — May 2026

**Clinical leadership section**
- Hillary Genovese (Clinical Director, BCBA) and Victoria Verdun (BCBA) profiles added
- `Person` schema nodes added for both clinical leaders
- `worksFor` relationship to `LocalBusiness` entity

---

## [v6] — May 2026

**Service cards**
- 4 service cards added: ABA Therapy, Speech-Language Therapy, Occupational Therapy, Diagnostic Evaluation
- `Service` schema nodes added with `OfferCatalog`
- Service card images from Manus CDN

---

## [v5] — May 2026

**Nearby locations section**
- 5 nearby Bierman locations added (Piscataway, West Orange, Parsippany, Hackensack, Morristown)
- Internal links to biermanautism.com location pages

---

## [v4] — May 2026

**Caregiver education bridge**
- 3 resource cards added (What is ABA Therapy, Insurance Guide, What to Expect)
- Intake CTA positioned after educational content

---

## [v3] — May 2026

**Hero section + GBP verified card + trust badges**
- H1: "ABA Therapy in Ramsey, New Jersey"
- Dual CTAs: "Request Services in Ramsey" + phone number
- GBP verified NAP card (name, address, phone, hours)
- Trust badges: Group of the Year 2022, BACB ACE, CASP

---

## [v2] — May 2026

**Navigation + proof-layer banner**
- Bierman 20th anniversary logo
- Location name + phone in nav
- "Request Services" CTA
- Proof-layer safety banner (dismissible, sessionStorage-backed)

---

## [v1] — May 2026 — Checkpoint `c9312266`

**Initial proof layer scaffolded**
- React 19 + Vite + TypeScript + Tailwind CSS 4 + shadcn/ui
- Single-page application for Bierman Autism Centers — Ramsey, NJ
- `LOCATION` constant established as data model
- Basic JSON-LD schema: `WebSite`, `WebPage`, `Organization`, `LocalBusiness`/`MedicalClinic`, `PostalAddress`, `GeoCoordinates`, `BreadcrumbList`
- noindex/nofollow, no tracking, no live forms

---

## [docs] — May 9, 2026

**Acquisition-ready PRD documentation added**
- 19 documentation files created in `docs/` directory
- Branch: `docs/acquisition-ready-prd`
- Commit: `docs: add acquisition-ready PRD and proof-layer system documentation`
