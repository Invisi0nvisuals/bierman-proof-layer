# Deck 01: Proof-Layer Demo Deck

**Status:** Outline — not yet built  
**Audience:** Bierman marketing team, operations leadership, content/SEO team  
**Format:** 12 slides, screen-share or in-person walkthrough  
**Duration:** 20–30 minutes with Q&A  
**Goal:** Show Bierman what was actually built for Ramsey, why each component was included, and what the same system would look like for Piscataway and beyond.

**Connected repo docs:**
- [`docs/PRD.md`](../PRD.md)
- [`docs/SCHEMA_STRATEGY.md`](../SCHEMA_STRATEGY.md)
- [`docs/REVIEW_STRATEGY.md`](../REVIEW_STRATEGY.md)
- [`docs/GBP_ALIGNMENT_STRATEGY.md`](../GBP_ALIGNMENT_STRATEGY.md)
- [`docs/evidence/01-current-site-audit.md`](../evidence/01-current-site-audit.md)
- [`docs/evidence/05-rich-results-baseline.md`](../evidence/05-rich-results-baseline.md)
- [`docs/evidence/07-review-evidence.md`](../evidence/07-review-evidence.md)

---

## Slide-by-Slide Outline

---

### Slide 01 — Cover

**Title:** The Ramsey Proof Layer  
**Subtitle:** What we built, why we built it, and what it proves.  
**Context line:** A location page architecture built to demonstrate what Bierman's search presence could look like — without touching production.  
**Presenter:** Alex Rodriguez | MFGSEO LLC dba alexseo.co  
**Date:** May 2026

---

### Slide 02 — The Problem with the Current Location Pages

**Title:** The current location pages are not doing the work they could.  
**Subtitle:** Three gaps between what caregivers search for and what they find.

**Content:**

| Gap | Current State | What It Costs |
|---|---|---|
| Schema | Minimal — no Review, FAQ, LocalBusiness, or Video rich results | Not eligible for 4 of 6 Google rich result groups |
| GBP Alignment | Phone, address, and hours not verified against GBP | NAP inconsistency risk; local ranking risk |
| Trust Signals | No visible reviews, no clinical credentials, no directions | Caregivers who find the page via search have no reason to call |

**Connected evidence:** [`docs/evidence/01-current-site-audit.md`](../evidence/01-current-site-audit.md)

**Speaker note:** This slide is not an attack on the current site. It is a gap analysis. The current site is generating active clients. The question is: how many more could it generate if the location pages were doing more of the work?

---

### Slide 03 — What the Proof Layer Is (and Is Not)

**Title:** A proof layer is not a redesign. It is a test.  
**Subtitle:** Built on a separate domain, zero production risk, fully documented.

**Content:**

| What It Is | What It Is Not |
|---|---|
| A fully functional Ramsey location page | A replacement for the current site |
| Built with the same content strategy as production | A redesign or visual overhaul |
| Schema-validated, Rich Results-eligible | A live page indexed by Google |
| Connected to GBP data, real reviews, real clinical staff | A mockup or wireframe |
| Documented with 30+ repo files explaining every decision | A one-time deliverable |

**Key point:** The proof layer is a working prototype that can be evaluated, validated, and migrated to production without a full rebuild.

**Connected repo docs:** [`README.md`](../../README.md) · [`docs/PRD.md`](../PRD.md)

---

### Slide 04 — The Page: What Was Built

**Title:** The Ramsey page — section by section.  
**Subtitle:** Every section has a purpose. Every purpose has evidence.

**Content (two-column layout: Section Name | Why It Was Built):**

| Section | Why It Was Built |
|---|---|
| Hero + NAP card | GBP-verified address, phone, hours — the first thing a caregiver needs |
| Clinical leadership | BCBA credentials surfaced at the location level — not buried on a team page |
| What families value (3 theme cards) | Converts informational intent into trust before the CTA |
| GBP reviews (6 cards) | Public 5-star reviews — visible on page and in schema |
| Insurance section | Reduces friction for caregivers who need to verify coverage before calling |
| Caregiver education bridge | Connects informational queries to intake CTAs without a redirect |
| FAQ section | Targets informational queries; eligible for FAQ rich result |
| Directions module | Embedded map, driving directions, transit, parking — GBP alignment |
| Nearby locations | Internal linking; local entity signal |
| Footer CTAs | Multiple intake paths: call, form, schedule |

**Connected repo docs:** [`docs/evidence/01-current-site-audit.md`](../evidence/01-current-site-audit.md) · [`docs/GBP_ALIGNMENT_STRATEGY.md`](../GBP_ALIGNMENT_STRATEGY.md)

---

### Slide 05 — The Schema: What Google Sees

**Title:** 26 schema nodes. 6 rich result groups. 12 valid items.  
**Subtitle:** The schema graph tells Google a coherent story about the Ramsey location.

**Content:**

**Before (production Ramsey page):** 3 valid groups — Breadcrumbs, Organization, WebSite. No LocalBusiness, no Review, no FAQ, no Video.

**After (proof layer):** 12 valid items across 6 groups.

| Rich Result Group | Items | Status |
|---|---|---|
| Breadcrumbs | 1 | ✅ Valid |
| FAQ | 1 | ✅ Valid |
| Local businesses | 1 | ✅ Valid |
| Organization | 1 | ✅ Valid |
| Review snippets | 7 (6 reviews + aggregate) | ✅ Valid |
| Videos | 1 | ✅ Valid |

**Key entity relationships in the schema graph:**  
`LocalBusiness / MedicalClinic` → `Person` (clinical staff) → `Service` (ABA therapy) → `Review` (6 nodes) → `FAQPage` → `VideoObject` → `BreadcrumbList` → `Organization` (parent)

**Connected repo docs:** [`docs/SCHEMA_STRATEGY.md`](../SCHEMA_STRATEGY.md) · [`docs/evidence/05-rich-results-baseline.md`](../evidence/05-rich-results-baseline.md) · [`docs/evidence/06-schema-validation-log.md`](../evidence/06-schema-validation-log.md)

---

### Slide 06 — The Reviews: Why These Six

**Title:** Six public, 5-star GBP reviews — visible on page and in schema.  
**Subtitle:** Every review was selected against a documented selection framework.

**Content:**

**Selection criteria:**
- Public GBP reviews only — no fabricated or solicited content
- No child names, diagnoses, or clinical outcomes mentioned
- No protected health information of any kind
- All 5-star ratings
- Reviewer has not deleted or edited the review

**The six reviewers:**

| Reviewer | Date | Key Theme |
|---|---|---|
| Ambar Arias | 2024 | Featured (longest, most detailed) |
| Margarita Morales | 2024 | Family partnership |
| Anthony Siciliano | 2024 | Staff quality |
| Sohayb Stiti | 2024 | Progress and outcomes |
| Kim Sedlacek | 2024 | Caregiver experience |
| Nancy Passano | Mar 2025 | Community events |

**Schema treatment:** Each review has `reviewBody`, `itemReviewed` (→ Ramsey LocalBusiness entity), `reviewRating`, `author`, and `publisher` (Google). `aggregateRating` on LocalBusiness: 5.0 / 6 reviews.

**Connected repo docs:** [`docs/REVIEW_STRATEGY.md`](../REVIEW_STRATEGY.md) · [`docs/evidence/07-review-evidence.md`](../evidence/07-review-evidence.md)

---

### Slide 07 — GBP Alignment: What It Means in Practice

**Title:** The page and the GBP profile tell the same story.  
**Subtitle:** NAP alignment, review integration, directions, and map embed.

**Content:**

**What GBP alignment means:**
- Phone number, address, and hours on the page match the GBP profile exactly
- The `hasMap` schema field links the LocalBusiness entity to the GBP URL
- The directions module uses the same address as the GBP profile
- The embedded map uses the GBP-verified coordinates
- The 6 reviews on the page are the same reviews visible on the GBP profile

**What is still pending:**
- Ramsey canonical phone number — 3 conflicting values across documents; requires client confirmation
- GBP UTM governance — website links in GBP profiles do not currently carry location-specific UTMs

**Why this matters:** A caregiver who finds Bierman Ramsey via Google Maps, clicks through to the website, and sees the same address, phone, and reviews they saw on the GBP profile has a consistent experience. Inconsistency at this point creates doubt.

**Connected repo docs:** [`docs/GBP_ALIGNMENT_STRATEGY.md`](../GBP_ALIGNMENT_STRATEGY.md) · [`docs/evidence/03-gbp-findings.md`](../evidence/03-gbp-findings.md)

---

### Slide 08 — The Data Layer: What Is Not on the Page

**Title:** Zero tracking. Fully documented. Intentional.  
**Subtitle:** The proof layer has no analytics, no pixels, no third-party scripts.

**Content:**

**Why zero tracking:**
- The proof layer is a documentation and validation tool, not a production page
- Adding tracking to a non-production page creates false data in GA4 and HubSpot
- The privacy-first approach is documented as a deliberate architectural decision

**What the data layer spec documents:**
- Safe event taxonomy for future production implementation
- Allowed events: `page_view`, `cta_click`, `phone_click`, `form_start`, `form_submit`, `directions_click`, `video_play`
- Allowed parameters: `location_id`, `location_name`, `cta_type`, `cta_position`, `page_type`
- Explicitly disallowed: `user_id`, `email`, `phone`, `diagnosis`, `insurance_carrier`, `child_age`

**What this means for production:** When the Ramsey page migrates to production, the data layer spec is the implementation guide. The GTM container can be built from this spec without a new discovery engagement.

**Connected repo docs:** [`docs/DATA_LAYER_SPEC.md`](../DATA_LAYER_SPEC.md) · [`docs/evidence/09-tracking-privacy-findings.md`](../evidence/09-tracking-privacy-findings.md)

---

### Slide 09 — The Documentation: What the Repo Contains

**Title:** 30+ documentation files. Every decision is traceable.  
**Subtitle:** The repo is not just code. It is the source of truth for the entire system.

**Content (selected key files):**

| File | What It Documents |
|---|---|
| `docs/PRD.md` | Full product requirements — problem, goals, constraints, success metrics |
| `docs/SCHEMA_STRATEGY.md` | 26-node entity graph, Rich Results groups, rules, scaling |
| `docs/evidence/00-evidence-index.md` | Master evidence map — 22 rows, every decision traceable |
| `docs/LOCATION_MATRIX_STRATEGY.md` | 33-location matrix, all discrepancies, source of truth |
| `docs/OPERATING_SYSTEM.md` | How the build was executed, 10 workflows, 8 approval gates |
| `docs/ACQUISITION_READINESS.md` | Why this system is acquisition-relevant |
| `docs/CLIENT_CONFIRMATION_QUESTIONS.md` | 26 questions Bierman must answer before production |
| `docs/ROADMAP.md` | 8-phase scaling roadmap from Ramsey to full network |

**Connected repo docs:** [`README.md`](../../README.md)

---

### Slide 10 — What Piscataway Would Look Like

**Title:** Piscataway is 9 variable swaps from the Ramsey template.  
**Subtitle:** The architecture scales. The effort does not.

**Content:**

**What changes between Ramsey and Piscataway:**

| Variable | Ramsey | Piscataway |
|---|---|---|
| Location name | Ramsey, NJ | Piscataway, NJ |
| Address | 1050 NJ-17, Ramsey, NJ 07446 | TBD — conflicting values |
| Phone | TBD — 3 conflicting values | TBD — 2 conflicting values |
| County | Bergen County | Middlesex County |
| GBP URL | Ramsey GBP link | Piscataway GBP link |
| Map embed | Ramsey coordinates | Piscataway coordinates |
| YouTube video | Ramsey video ID | Piscataway video ID (if available) |
| Clinical staff | Ramsey BCBA team | Piscataway BCBA team |
| Nearby locations | Ramsey neighbors | Piscataway neighbors |

**What stays the same:** Schema architecture, component library, review card system, insurance section, FAQ structure, directions module, caregiver education bridge, data layer spec, documentation framework.

**Blocker:** Piscataway phone and address require client confirmation before build starts. See [`docs/CLIENT_CONFIRMATION_QUESTIONS.md`](../CLIENT_CONFIRMATION_QUESTIONS.md).

---

### Slide 11 — What We Need from Bierman

**Title:** Three confirmations unlock the next build.  
**Subtitle:** Everything else is ready.

**Content:**

| # | Question | Why It Matters | Priority |
|---|---|---|---|
| 1 | What is the correct Ramsey phone number? | 3 conflicting values in documents; affects NAP, schema, CTAs | Critical |
| 2 | What is the correct Piscataway address? | 2 conflicting values; affects schema, map, directions | Critical |
| 3 | What is the correct Piscataway phone number? | 2 conflicting values; affects NAP, schema, CTAs | Critical |

**Secondary confirmations (can follow after pilot approval):**
- Team headshot usage approval
- Video usage approval
- Review usage approval (6 reviews already on page — confirm before production)
- Insurance list accuracy per location

**Full list:** [`docs/CLIENT_CONFIRMATION_QUESTIONS_DELIVERABLE.md`](../CLIENT_CONFIRMATION_QUESTIONS_DELIVERABLE.md)

---

### Slide 12 — Next Steps

**Title:** Three decisions. One clear sequence.  
**Subtitle:** Same decision path as the proposal deck — now with the proof layer as evidence.

**Content:**

| Step | Action | Owner | Timing |
|---|---|---|---|
| 01 | Confirm 3 critical data points (Ramsey phone, Piscataway phone + address) | Bierman ops/marketing | This week |
| 02 | Approve Piscataway build | Bierman leadership | After Step 01 |
| 03 | Approve pilot (Ramsey + Piscataway, 60–90 day window) | Bierman leadership | After Step 02 |
| 04 | Second-wave sequence (West Orange, Princeton, NJ wave) | Joint — after pilot results | After Step 03 |

**What is explicitly NOT on this path:**
- Full site rebuild
- URL restructure
- Agency replacement

**Closing line:** The system is already producing active clients. The proof layer shows what it could look like if the location pages were doing more of the work.

---

## Deck Notes

**Tone:** Direct, evidence-based, non-political. Do not position this as criticism of the current agency or the current site. Position it as a gap analysis with a documented solution.

**Visual direction:** Match the existing deck aesthetic — clean white background, bold black headlines, orange accent color (`#C84B11` or similar), AR monogram logo top-left, slide number bottom-right. Prepared by Alex Rodriguez, MFGSEO LLC dba alexseo.co.

**Slide 04 (The Page):** Consider a split-screen layout — current production page on the left, proof layer on the right — to make the gap visual without a word.

**Slide 05 (Schema):** The Rich Results Test screenshot is the strongest visual in this deck. Use it. Show the green checkmarks. Show the "12 valid items detected" banner.

**Slide 06 (Reviews):** Show the actual review cards from the proof layer — not the screenshots, the native HTML/CSS cards. They look clean and professional.
