# Deck 02: Acquisition System Deck

**Status:** Outline — not yet built  
**Audience:** Acquisition stakeholders, private equity, strategic buyers, Bierman board-level leadership  
**Format:** 14 slides, formal presentation or leave-behind  
**Duration:** 30–45 minutes with Q&A  
**Goal:** Frame the proof layer as acquisition-ready infrastructure — not a website project. Demonstrate that Bierman's search-driven acquisition engine is measurable, scalable, and currently under-governed. Show that the proof layer provides the documentation, architecture, and pilot framework to address that gap.

**Connected repo docs:**
- [`docs/ACQUISITION_READINESS.md`](../ACQUISITION_READINESS.md)
- [`docs/OPERATING_SYSTEM.md`](../OPERATING_SYSTEM.md)
- [`docs/evidence/11-business-impact-audit-summary.md`](../evidence/11-business-impact-audit-summary.md)
- [`docs/DATA_LAYER_SPEC.md`](../DATA_LAYER_SPEC.md)
- [`docs/ROADMAP.md`](../ROADMAP.md)
- [`docs/evidence/00-evidence-index.md`](../evidence/00-evidence-index.md)

---

## Slide-by-Slide Outline

---

### Slide 01 — Cover

**Title:** Bierman Autism Centers — Search Acquisition System  
**Subtitle:** Infrastructure documentation for acquisition review.  
**Context line:** A scalable, evidence-based system for local search visibility, GBP governance, schema architecture, and center-level attribution — built as a proof layer for the Ramsey, NJ location.  
**Prepared by:** Alex Rodriguez | MFGSEO LLC dba alexseo.co  
**Date:** May 2026

---

### Slide 02 — Executive Summary

**Title:** What this deck establishes.  
**Subtitle:** Five claims, each with documented evidence.

**Content:**

| Claim | Evidence |
|---|---|
| Search is Bierman's dominant acquisition engine | 513 search-driven active clients; GMB 25.8% active rate — highest of any channel |
| GBP is an off-website conversion surface that bypasses GA4 | 221 GMB-attributed active clients; GBP activity does not create GA4 sessions |
| Attribution is structurally incomplete | 6,419-call gap between CallRail (21,089) and HubSpot-tagged contacts (7,085) |
| The proof layer demonstrates a scalable fix | 12 valid Rich Results items, 26-node schema graph, GBP-aligned NAP, documented data layer |
| The system can be repeated for all 33 locations | 9-variable swap from Ramsey to Piscataway; operating model documented for scale |

**Speaker note:** This deck does not make projections. It documents what is known, what is unknown, and what the proof layer provides as a foundation for answering the questions that matter in due diligence.

---

### Slide 03 — The Business Context

**Title:** Bierman is a 33-location ABA therapy network with a search-dominant acquisition model.  
**Subtitle:** The acquisition engine is working. The measurement layer is not.

**Content:**

**What is working:**
- 30,115 total leads in the CRM
- 513 search-driven active clients all-time
- GMB / Local: 221 active clients — the single largest channel when properly attributed
- Organic Search: 178 active clients
- Paid Search: 114 active clients

**What is not working:**
- GMB was previously categorized as "Offline Sources" — understating its contribution
- 6,419 calls are unattributed between CallRail and HubSpot
- Center-level outcome data does not exist — CRM is aggregate, not segmented by location
- GBP profiles have inconsistent review depth relative to interaction volume

**Source:** SEO Business Impact Audit + HubSpot/CallRail Attribution Addendum (May 2026)  
**Connected repo docs:** [`docs/evidence/11-business-impact-audit-summary.md`](../evidence/11-business-impact-audit-summary.md)

---

### Slide 04 — The Attribution Gap

**Title:** The system is already producing active clients. The data doesn't show it.  
**Subtitle:** Three paths from GBP to active client — only one is fully tracked.

**Content (diagram description):**

```
GOOGLE BUSINESS PROFILE
        |
   _____|_____________________
   |           |              |
A. Website    B. Phone       C. Direction
   Click        Call          Request
   |           |              |
   GA4       CallRail       Offline
   Session     |            Behavior
   |           |              |
 HubSpot    HubSpot       No GA4
 Contact    Contact        Session
            (possible    Outcome
              gap)       Unknown
```

**Key finding:** Path C (Direction Request) generates no GA4 session and no HubSpot contact. It is entirely invisible to the current measurement system. Path B (Phone Call) has a documented 6,419-call gap between CallRail and HubSpot.

**Connected repo docs:** [`docs/DATA_LAYER_SPEC.md`](../DATA_LAYER_SPEC.md) · [`docs/evidence/09-tracking-privacy-findings.md`](../evidence/09-tracking-privacy-findings.md)

---

### Slide 05 — The Review-to-Demand Gap

**Title:** High-visibility locations with zero reviews are a conversion bottleneck.  
**Subtitle:** Review depth is not keeping pace with local demand.

**Content:**

| Location | GBP Interactions (Dec 2025–May 2026) | Review Count | Risk Level |
|---|---|---|---|
| West Orange, NJ | 758 | 1 | High |
| Princeton, NJ | 737 | Low | High |
| Berkeley Heights, NJ | 703 | Low | High |
| Mason, OH | High | 0 | Critical |
| Blue Ash, OH | High | 0 | Critical |
| Danvers, MA | High | 0 | Critical |

**The friction point:** A caregiver who finds Bierman via "autism centers near me" but sees no reviews is more likely to abandon the inquiry before calling or clicking to the website. This is a conversion bottleneck that is measurable, addressable, and currently unaddressed.

**Connected repo docs:** [`docs/evidence/03-gbp-findings.md`](../evidence/03-gbp-findings.md) · [`docs/evidence/11-business-impact-audit-summary.md`](../evidence/11-business-impact-audit-summary.md)

---

### Slide 06 — The Proof Layer: What It Is

**Title:** The proof layer is not a website project. It is infrastructure documentation.  
**Subtitle:** Built on a separate domain. Zero production risk. Fully documented.

**Content:**

**What the proof layer demonstrates:**
- A fully functional Ramsey location page with GBP-verified NAP, 6 public reviews, clinical staff, FAQ, directions, and intake CTAs
- 12 valid Rich Results items across 6 Google rich result groups (vs. 3 on the current production page)
- A 26-node schema entity graph that connects the location to its GBP profile, clinical staff, services, reviews, and content
- A data layer event taxonomy that can be implemented in GTM without a new discovery engagement
- A reusable location data model that reduces the Piscataway build to 9 variable swaps

**What the proof layer is not:**
- A production deployment
- A redesign of the current site
- A replacement for the current agency
- A recommendation to rebuild all 33 location pages simultaneously

**Connected repo docs:** [`docs/PRD.md`](../PRD.md) · [`README.md`](../../README.md)

---

### Slide 07 — The Schema Architecture

**Title:** 26 schema nodes. 12 valid Rich Results items. 6 groups.  
**Subtitle:** The entity graph tells Google a coherent story about the Ramsey location.

**Content:**

**Before (production Ramsey page):** 3 valid groups — Breadcrumbs, Organization, WebSite.  
**After (proof layer):** 12 valid items across 6 groups — Breadcrumbs, FAQ, Local businesses, Organization, Review snippets (7), Videos.

**Why this matters for acquisition:**
- Rich Results eligibility is a direct ranking signal for local search
- Review Snippets with `aggregateRating` can display star ratings in search results — a trust signal that affects click-through rate before a caregiver ever reaches the page
- The schema architecture is documented, validated, and repeatable — it is not a one-time build

**Connected repo docs:** [`docs/SCHEMA_STRATEGY.md`](../SCHEMA_STRATEGY.md) · [`docs/evidence/05-rich-results-baseline.md`](../evidence/05-rich-results-baseline.md)

---

### Slide 08 — The Data Layer Architecture

**Title:** The data layer spec is the missing governance layer.  
**Subtitle:** A documented event taxonomy that makes center-level attribution possible.

**Content:**

**What the data layer spec defines:**
- 7 allowed events: `page_view`, `cta_click`, `phone_click`, `form_start`, `form_submit`, `directions_click`, `video_play`
- Required parameters: `location_id`, `location_name`, `cta_type`, `cta_position`, `page_type`
- Explicitly disallowed parameters: `user_id`, `email`, `phone`, `diagnosis`, `insurance_carrier`, `child_age`

**What it enables:**
- Center-level session and conversion tracking in GA4
- Location-specific CTA performance measurement
- Attribution of organic search traffic to specific location pages
- A foundation for answering: "How many new patients started at Ramsey in the last 12 months as a result of organic search?"

**What it does not do:** It does not resolve the CallRail-to-HubSpot gap. That requires a separate GTM → CallRail → HubSpot integration audit.

**Connected repo docs:** [`docs/DATA_LAYER_SPEC.md`](../DATA_LAYER_SPEC.md)

---

### Slide 09 — The Location Matrix

**Title:** 33 verified GBP profiles. One source-of-truth data model.  
**Subtitle:** The location matrix is the foundation for scaling the proof layer to all 33 locations.

**Content:**

**What the matrix contains:**
- 33 locations (vs. 32 in the internal tracking spreadsheet — discrepancy documented)
- GBP verification status, NAP fields, phone numbers, review counts, interaction data
- Discrepancy flags: Ramsey phone (3 conflicting values), Piscataway phone and address (2 conflicting values each), Avon/Avondale ambiguity, Brooklyn Park status unknown, Broad Ripple duplicate GBP

**What the data model provides:**
- A `LocationData` TypeScript interface that drives page content, schema, and GBP alignment simultaneously
- A single-source update model: changing the phone number in the constant updates the nav CTA, hero CTA, footer, schema `telephone` field, and GBP alignment check — in one place

**Connected repo docs:** [`docs/LOCATION_MATRIX_STRATEGY.md`](../LOCATION_MATRIX_STRATEGY.md) · [`docs/DATA_MODEL.md`](../DATA_MODEL.md) · [`docs/evidence/02-location-matrix-findings.md`](../evidence/02-location-matrix-findings.md)

---

### Slide 10 — The Operating System

**Title:** The proof layer was produced by a controlled, documented operating model.  
**Subtitle:** The question is not "could this be done for 33 locations?" — it is "how long does it take?"

**Content:**

**10 workflows in the operating model:**

| Workflow | Description |
|---|---|
| A. Location Research | GBP verification, NAP audit, review collection, discrepancy flagging |
| B. Schema Architecture | Entity graph design, JSON-LD generation, Rich Results validation |
| C. Content Strategy | FAQ research, caregiver education bridge, service-to-location mapping |
| D. Review Selection | GBP review audit, selection framework, schema integration |
| E. Asset Production | Image generation, card design, CDN upload |
| F. Build Execution | React component assembly, Tailwind styling, responsive layout |
| G. QA and Validation | TypeScript check, JSON-LD validation, Rich Results Test, schema validator |
| H. Documentation | Evidence trail, PRD, decision log, client confirmation questions |
| I. Client Confirmation | Question list generation, gap documentation, approval gate management |
| J. Scaling | Variable swap execution, template reuse, second-wave candidate identification |

**Scaling estimate:** Ramsey required full workflow A–J. Piscataway requires A (partial), B (minimal), C (minimal), D (new reviews), F (9 variable swaps), G, H (update), I (3 confirmations). Each subsequent location requires less effort than the previous.

**Connected repo docs:** [`docs/OPERATING_SYSTEM.md`](../OPERATING_SYSTEM.md)

---

### Slide 11 — The Pilot: Ramsey + Piscataway

**Title:** A controlled 60–90 day pilot to test the full attribution chain.  
**Subtitle:** Two locations. Four phases. One measurable outcome.

**Content:**

| Phase | Actions | Owner |
|---|---|---|
| 01 Capture | GBP UTMs, review generation, appointment URL standardization | Alex Rodriguez / Bierman ops |
| 02 Route | CallRail source tracking, phone routing validation, form location context | Bierman / agency |
| 03 Reconcile | HubSpot deal association, intake process QA, attribution definitions | Bierman / agency |
| 04 Measure | Calls & forms, booked consults, active clients, 30/60/90-day outcomes | Joint |

**Success metrics:**
- Baseline: current Ramsey and Piscataway GBP interactions, calls, and form submissions
- Target: measurable increase in attributed calls and form submissions from organic search
- Secondary: reduction in the CallRail-to-HubSpot gap for the two pilot locations

**Connected repo docs:** [`docs/ROADMAP.md`](../ROADMAP.md) · [`docs/evidence/11-business-impact-audit-summary.md`](../evidence/11-business-impact-audit-summary.md)

---

### Slide 12 — The Known Gaps

**Title:** What this system does not yet have.  
**Subtitle:** Documented gaps are not failures. They are priced risks.

**Content:**

| Gap | Confidence | Resolution Path |
|---|---|---|
| Ramsey canonical phone number | Unconfirmed | One call to front desk or GBP login |
| Piscataway phone and address | Unconfirmed | Same as above |
| Center-level booked-consult data | Low confidence | Pilot must establish center-level tracking |
| CallRail-to-HubSpot real-time integration | Root cause undiagnosed | GTM → CallRail → HubSpot integration audit |
| GBP UTM implementation | Not yet approved | Bierman to confirm whether UTMs can be added |
| Direction-request attribution | Low confidence | Structural gap — requires offline-to-online bridge |
| View-through attribution | Low confidence | Requires campaign-level tracking not currently in place |

**Speaker note:** A buyer who understands these gaps can price them accurately, plan for them operationally, and execute against them systematically. The proof layer provides the documentation and architecture to do exactly that.

**Connected repo docs:** [`docs/KNOWN_GAPS.md`](../KNOWN_GAPS.md) · [`docs/CLIENT_CONFIRMATION_QUESTIONS.md`](../CLIENT_CONFIRMATION_QUESTIONS.md)

---

### Slide 13 — The Scaling Model

**Title:** The 31st location page will take the same effort as the second.  
**Subtitle:** The architecture scales. The effort does not.

**Content:**

| Scale Target | What Is Already Built | What Remains |
|---|---|---|
| Ramsey (complete) | Full page, schema, reviews, docs | Phone confirmation |
| Piscataway (next) | Template, schema pattern, component library | 9 variable swaps + phone/address confirmation |
| NJ second wave (West Orange, Princeton, Berkeley Heights) | Matrix data, GBP findings, review-gap analysis | Per-location review collection, 9 variable swaps each |
| Review-gap wave (Danvers, Mason, Blue Ash) | Review-gap identification, risk matrix | Review generation program + per-location build |
| Full NJ network (10 locations) | Architecture, operating model, documentation | Execution |
| Multi-state rollout | Architecture, operating model, documentation | State-level URL strategy, per-state execution |
| Full 33-location network | Architecture, operating model, documentation | Execution at scale |

**Connected repo docs:** [`docs/ROADMAP.md`](../ROADMAP.md) · [`docs/OPERATING_SYSTEM.md`](../OPERATING_SYSTEM.md)

---

### Slide 14 — What a Buyer Can Evaluate

**Title:** This repo is acquisition-ready infrastructure documentation.  
**Subtitle:** A buyer can evaluate the system without commissioning a new discovery engagement.

**Content:**

**What is in the repo:**
- Full product requirements document (PRD)
- 22-row evidence map with every decision traceable to a source
- 26-node schema architecture, validated and Rich Results-eligible
- GBP alignment strategy for all 33 locations
- Data layer event taxonomy ready for GTM implementation
- Location data model with 33-location matrix
- Operating system with 10 workflows and 8 approval gates
- 8-phase scaling roadmap
- Client confirmation question list (26 items, 3 critical)
- Changelog from v1 to current

**What a buyer can answer from this repo:**
- What is the current search acquisition performance? (Evidence rows 01–22)
- What is the attribution gap and what causes it? (DATA_LAYER_SPEC, evidence rows 19–21)
- What would it cost to scale this to all 33 locations? (OPERATING_SYSTEM, ROADMAP)
- What is still unconfirmed or unresolved? (KNOWN_GAPS, CLIENT_CONFIRMATION_QUESTIONS)
- What is the pilot scope and success criteria? (ROADMAP, evidence row 19)

**Closing line:** That is the difference between a redesign pitch and a source-of-truth system.

**Connected repo docs:** [`docs/ACQUISITION_READINESS.md`](../ACQUISITION_READINESS.md) · [`README.md`](../../README.md)

---

## Deck Notes

**Tone:** Executive, evidence-based, calm. No hype. No projections. No promises. Every claim has a source.

**Visual direction:** Match the existing deck aesthetic — clean white background, bold black headlines, orange accent color, AR monogram logo, slide number bottom-right.

**Slide 03 (Business Context):** The channel comparison bar chart (GMB 221 / Organic 178 / Paid 114) is the most important visual in this deck. Reproduce it from the Attribution System Brief. The "previously hidden in Offline Sources" callout is the key insight.

**Slide 04 (Attribution Gap):** The three-path diagram is the second most important visual. Reproduce it from the Attribution System Brief. The "No GA4 Session / Outcome Unknown" box for Direction Requests is the key insight.

**Slide 14 (What a Buyer Can Evaluate):** This slide should feel like a table of contents for the repo — not a sales pitch. The goal is to demonstrate that the documentation is complete and that a buyer can do their own due diligence without additional work.
