# Project State
## Bierman Autism Centers — Proof Layer

**Last updated:** May 9, 2026  
**Current version:** v18 (checkpoint `7d8303c5`)  
**Preview URL:** [https://bierman-proof-layer.manus.space/](https://bierman-proof-layer.manus.space/)  
**Production URL (untouched):** [https://www.biermanautism.com/location/ramsey/](https://www.biermanautism.com/location/ramsey/)

---

## Current Build Version

| Field | Value |
|---|---|
| Version | v18 |
| Checkpoint | `7d8303c5` |
| Branch | `main` |
| Framework | React 19 + Vite + TypeScript + Tailwind CSS 4 |
| Schema nodes | 26 (JSON-LD `@graph`) |
| Rich Results groups | 6 (Breadcrumbs, FAQ, Local businesses, Organization, Review snippets, Videos) |
| Rich Results items | 13 detected |
| Rich Results valid | 11 confirmed clean; targeting 13 valid after v16/v17 fixes |

---

## What Is Built

### Page Architecture
- Full single-page React application for Bierman Autism Centers — Ramsey, NJ
- Proof-layer safety banner (dismissible, sessionStorage-backed)
- Navigation: logo, location name, phone, intake CTA
- Hero: H1, description, dual CTAs, GBP verified NAP card, trust badges
- Services: 4 service cards (ABA Therapy, Speech-Language Therapy, Occupational Therapy, Diagnostic Evaluation)
- Clinical leadership: 2 BCBA profiles (Hillary Genovese, Victoria Verdun) with `Person` schema
- What families value: 3 AI-generated theme cards (BCBA Guidance, Family Partnership, Progress-Focused)
- GBP reviews: 6 native HTML/CSS review cards (Ambar Arias, Sohayb Stiti, Kim Sedlacek, Margarita Morales, Anthony Siciliano, Nancy Passano)
- Education bridge: caregiver resources section with intake CTA
- Directions: embedded map, driving/transit/parking information
- Insurance: 9 insurance logos + Horizon BCBS NJ feature card
- FAQ: 13 questions with `FAQPage` schema
- Nearby locations: 5 nearby Bierman locations
- Footer: NAP, hours, trust badges, BACB/CASP credentials

### Schema (26 nodes)
- `WebSite`
- `WebPage`
- `Organization` (Bierman Autism Centers corporate)
- `LocalBusiness` + `MedicalClinic` (co-typed, Ramsey location)
- `PostalAddress`
- `GeoCoordinates`
- `OpeningHoursSpecification` ×7 (Mon–Fri + Sat/Sun)
- `BreadcrumbList`
- `FAQPage` (13 Q&A pairs)
- `VideoObject`
- `Review` ×6 (all with `reviewBody`, `itemReviewed`, `reviewRating`, `author`)
- `AggregateRating` (5.0/6)
- `Service` ×4
- `ImageObject` ×3 (theme cards)
- `Person` ×2 (clinical leaders)

### Assets (all on Manus CDN)
- Bierman 20th anniversary logo
- Ramsey facility photo
- Speech therapy room photo
- NJ Penguin mascot
- Horizon BCBS NJ insurance card
- Ramsey video poster
- Ramsey ABA therapy overview video
- Hillary Genovese headshot
- Victoria Verdun headshot
- 3 AI-generated theme card images
- 9 insurance logos
- Trust badges (Group of the Year 2022, BACB ACE, CASP)
- OG image (1731×909)

### Documentation
- `README.md` — complete
- `docs/PRD.md` — complete
- `docs/PROJECT_STATE.md` — this file
- `docs/SCHEMA_STRATEGY.md` — complete
- `docs/URL_STRATEGY.md` — complete
- `docs/DATA_MODEL.md` — complete
- `docs/LOCATION_MATRIX_STRATEGY.md` — complete
- `docs/REVIEW_STRATEGY.md` — complete
- `docs/DATA_LAYER_SPEC.md` — complete
- `docs/SEO_AEO_STRATEGY.md` — complete
- `docs/GBP_ALIGNMENT_STRATEGY.md` — complete
- `docs/ASSET_MANIFEST.md` — complete
- `docs/QA_CHECKLIST.md` — complete
- `docs/KNOWN_GAPS.md` — complete
- `docs/CLIENT_CONFIRMATION_QUESTIONS.md` — complete
- `docs/CHANGELOG.md` — complete
- `docs/BUILD_NOTES.md` — complete
- `docs/ROADMAP.md` — complete
- `docs/ACQUISITION_READINESS.md` — complete

---

## What Is In Progress

- **Review schema validation** — v16 added `reviewBody` to all 6 JSON-LD Review nodes; v17 stripped conflicting microdata attributes from `GBPReviewCard`. Rich Results Test rerun needed to confirm 13 valid / 0 invalid.
- **Facebook Sharing Debugger** — 403 response from Manus CDN infrastructure block. `robots.txt` updated in v18 with `facebookexternalhit` allowlist. Resolves on custom domain deployment.

---

## What Is Pending

- **Piscataway, NJ page** — template ready; blocked on phone number confirmation (3 conflicting values in source documents)
- **New Jersey cluster** — pending Piscataway completion
- **All 33+ locations** — pending NJ cluster completion
- **Pilot subdomain mapping** — pending Bierman decision on `pilot.biermanautism.com`
- **Production migration planning** — pending Bierman approval

---

## What Is Blocked

| Blocker | Reason | Resolution |
|---|---|---|
| Piscataway build | Phone number unconfirmed — 3 conflicting values | Bierman to confirm canonical phone |
| Team image production use | No explicit Bierman approval | Bierman to confirm headshot usage |
| Video production use | No explicit Bierman approval | Bierman to confirm video usage |
| Review production use | No explicit Bierman approval | Bierman to confirm review usage |
| Pilot subdomain | DNS change requires Bierman approval | Bierman to decide on pilot subdomain |

---

## Latest Rich Results Status

| Metric | Value | Notes |
|---|---|---|
| Items detected | 13 | After Review schema expansion |
| Valid items | 11 (prior clean state) | Targeting 13 valid after v16/v17 fixes |
| Invalid items | 6 Review nodes (prior) | `reviewBody` added in v16; microdata stripped in v17 |
| Groups | 6 | Breadcrumbs, FAQ, Local businesses, Organization, Review snippets, Videos |
| Last tested | May 9, 2026 | Rerun needed to confirm v16/v17 fix |

---

## Known Schema Issues

| Issue | Status | Fix |
|---|---|---|
| `reviewBody` missing from all 6 Review nodes | Fixed in v16 | Added exact visible DOM text to each node |
| Microdata `itemScope`/`itemType`/`itemProp` on `GBPReviewCard` creating duplicate Review nodes without `itemReviewed` | Fixed in v17 | Stripped all microdata attributes; JSON-LD is sole schema source |
| Facebook Sharing Debugger 403 | Partially addressed in v18 | `robots.txt` updated; full resolution on custom domain |

---

## Known Data Discrepancies

| Field | Issue | Status |
|---|---|---|
| Ramsey phone | 3 conflicting values: `(201) 596-8104`, `(201) 308-3735`, `(201) 928-5245` | Unresolved — needs Bierman confirmation |
| Piscataway address | 2 conflicting values: `200 Centennial Ave` vs `280 Centennial Ave` | Unresolved — needs Bierman confirmation |
| Piscataway phone | 2 conflicting values: `(732) 426-5470` vs `(732) 479-7225` | Unresolved — needs Bierman confirmation |
| Location count | 32 vs 33 client-facing uncertainty | Unresolved — needs Bierman confirmation |
| Avon vs Avondale | Location name discrepancy in matrix | Unresolved — needs Bierman confirmation |
| Brooklyn Park | Status uncertain | Unresolved — needs Bierman confirmation |
| Broad Ripple | Duplicate GBP profiles | Unresolved — needs Bierman confirmation |

---

## Next Recommended Tasks

1. **Rerun Rich Results Test** — confirm 13 valid / 0 invalid after v16/v17 fixes
2. **Confirm Ramsey phone number** — one call to the Ramsey front desk resolves the 3-way discrepancy
3. **Start Piscataway build** — 9 variable swaps from Ramsey template once phone is confirmed
4. **Get Bierman confirmation** on team images, video, and review usage for production
5. **Commit documentation branch** — `docs/acquisition-ready-prd`
6. **Present to Bierman/agency** — use proof layer URL + Rich Results Test screenshot as proof points
