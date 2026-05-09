# Deck 03: Technical Validation Deck

**Status:** Outline — not yet built  
**Audience:** Current SEO agency, technical reviewers, GSC/GTM/GA4 team, Bierman technical stakeholders  
**Format:** 10 slides, screen-share or technical review meeting  
**Duration:** 20–30 minutes with Q&A  
**Goal:** Provide a technical peer review of the proof layer — schema architecture, Rich Results validation, tracking approach, privacy compliance, and GBP alignment. Establish that the proof layer's technical claims are verifiable, not asserted.

**Tone:** Collaborative, not adversarial. This deck is not a critique of the current agency's work. It is a technical documentation of what the proof layer built and how it was validated. The agency is a potential implementation partner for the production migration.

**Connected repo docs:**
- [`docs/SCHEMA_STRATEGY.md`](../SCHEMA_STRATEGY.md)
- [`docs/DATA_LAYER_SPEC.md`](../DATA_LAYER_SPEC.md)
- [`docs/evidence/05-rich-results-baseline.md`](../evidence/05-rich-results-baseline.md)
- [`docs/evidence/06-schema-validation-log.md`](../evidence/06-schema-validation-log.md)
- [`docs/evidence/09-tracking-privacy-findings.md`](../evidence/09-tracking-privacy-findings.md)
- [`docs/QA_CHECKLIST.md`](../QA_CHECKLIST.md)
- [`docs/BUILD_NOTES.md`](../BUILD_NOTES.md)

---

## Slide-by-Slide Outline

---

### Slide 01 — Cover

**Title:** Bierman Proof Layer — Technical Validation  
**Subtitle:** Schema architecture, Rich Results validation, tracking approach, and GBP alignment.  
**Context line:** A technical peer review of the Ramsey, NJ proof layer — built to validate the architecture before production migration.  
**Prepared by:** Alex Rodriguez | MFGSEO LLC dba alexseo.co  
**Date:** May 2026

---

### Slide 02 — Scope and Boundaries

**Title:** What this deck covers — and what it does not.  
**Subtitle:** Technical validation of the proof layer only. Production is untouched.

**Content:**

| In Scope | Out of Scope |
|---|---|
| Proof layer schema architecture | Current production site schema |
| Rich Results Test results (proof layer) | Current production Rich Results status |
| Tracking approach (proof layer) | Current production GTM/GA4 configuration |
| GBP alignment methodology | Current production GBP management |
| Privacy compliance (proof layer) | HIPAA compliance assessment |
| QA process and validation log | Full site technical audit |

**Key boundary:** The proof layer is hosted at `bierman-proof-layer.manus.space` — a separate domain with `noindex` and `nofollow` directives active. It is not indexed by Google. It is not connected to any production analytics. It cannot affect the current site's rankings, tracking, or user experience.

**Connected repo docs:** [`docs/evidence/09-tracking-privacy-findings.md`](../evidence/09-tracking-privacy-findings.md) · [`docs/BUILD_NOTES.md`](../BUILD_NOTES.md)

---

### Slide 03 — Schema Architecture Overview

**Title:** 26 schema nodes. One coherent entity graph.  
**Subtitle:** Every node has a purpose. Every relationship is documented.

**Content:**

**Entity graph (text representation):**

```
Organization (Bierman Autism Centers — parent)
  └── LocalBusiness / MedicalClinic (Bierman Autism Centers — Ramsey)
        ├── Person (Clinical Director — BCBA)
        ├── Person (Clinical Supervisor — BCBA)
        ├── Service (ABA Therapy)
        ├── Review × 6 (public GBP reviews)
        │     └── AggregateRating (5.0 / 6 reviews)
        ├── FAQPage
        │     └── Question × 5
        ├── VideoObject (Ramsey location video)
        ├── BreadcrumbList
        └── ImageObject × 3 (theme card images)
```

**Node count by type:**

| Type | Count |
|---|---|
| LocalBusiness / MedicalClinic | 1 |
| Organization | 1 |
| Person | 2 |
| Service | 1 |
| Review | 6 |
| AggregateRating | 1 |
| FAQPage | 1 |
| Question | 5 |
| VideoObject | 1 |
| BreadcrumbList | 1 |
| ImageObject | 3 |
| WebSite | 1 |
| WebPage | 1 |
| **Total** | **26** |

**Connected repo docs:** [`docs/SCHEMA_STRATEGY.md`](../SCHEMA_STRATEGY.md)

---

### Slide 04 — Rich Results Validation

**Title:** 12 valid items. 6 groups. 0 invalid. 0 critical issues.  
**Subtitle:** Validated by Google Rich Results Test on May 9, 2026.

**Content:**

**Test result:**

| Group | Items | Status | Notes |
|---|---|---|---|
| Breadcrumbs | 1 | ✅ Valid | Clean |
| FAQ | 1 | ✅ Valid | Clean |
| Local businesses | 1 | ✅ Valid | Non-critical note (expected) |
| Organization | 1 | ✅ Valid | Clean |
| Review snippets | 7 | ✅ Valid | Non-critical note (expected); 6 reviews + 1 aggregate |
| Videos | 1 | ✅ Valid | Clean |
| **Total** | **12** | **✅ All valid** | **0 invalid, 0 critical** |

**Baseline comparison (current production Ramsey page):**

| Group | Production | Proof Layer |
|---|---|---|
| Breadcrumbs | ✅ 1 valid | ✅ 1 valid |
| Organization | ✅ 1 valid | ✅ 1 valid |
| WebSite | ✅ 1 valid | ✅ 1 valid |
| FAQ | ❌ Not present | ✅ 1 valid |
| Local businesses | ❌ Not present | ✅ 1 valid |
| Review snippets | ❌ Not present | ✅ 7 valid |
| Videos | ❌ Not present | ✅ 1 valid |

**Non-critical notes:** The "non-critical issues" flags on Local businesses and Review snippets are expected. Common causes include missing `priceRange` on LocalBusiness (not applicable for ABA therapy) and missing `datePublished` on reviews (dates were not confirmed at time of build). Neither flag affects rich result eligibility.

**Connected repo docs:** [`docs/evidence/05-rich-results-baseline.md`](../evidence/05-rich-results-baseline.md) · [`docs/evidence/06-schema-validation-log.md`](../evidence/06-schema-validation-log.md)

---

### Slide 05 — Schema Validation Log

**Title:** Every schema issue was identified, diagnosed, and resolved.  
**Subtitle:** The validation log is the audit trail for the schema build.

**Content:**

| Issue | Root Cause | Resolution | Status |
|---|---|---|---|
| VideoObject `@type` error | Invalid `@type` value | Corrected to `VideoObject` | ✅ Resolved |
| Dual schema conflict (13 invalid items) | `itemScope`/`itemType`/`itemProp` microdata attributes in React component conflicted with JSON-LD | Removed all microdata attributes; JSON-LD is sole schema source | ✅ Resolved |
| Review nodes missing `reviewBody` | `reviewBody` field absent from all 6 Review nodes | Added `reviewBody` matching visible DOM text for all 6 nodes | ✅ Resolved |
| `itemReviewed` already present | Confirmed present on all 6 nodes before fix; was not the cause of invalid flag | No change needed | ✅ Confirmed |
| AggregateRating reviewCount | Bumped from 5 to 6 after Nancy Passano added | Updated in schema | ✅ Resolved |

**Key lesson from the dual schema conflict:** Google's Rich Results Test parses both JSON-LD and HTML microdata. If both are present, both are validated. The microdata attributes in the React component were creating a second set of 6 Review nodes — each missing `itemReviewed` — which triggered the "13 items detected, some are invalid" result. Removing the microdata attributes resolved it immediately.

**Connected repo docs:** [`docs/evidence/06-schema-validation-log.md`](../evidence/06-schema-validation-log.md)

---

### Slide 06 — Review Schema: Selection and Validation Rules

**Title:** Every review in the schema is visible on the page. Every review on the page is in the schema.  
**Subtitle:** The review schema follows Google's documented requirements for Review Snippets.

**Content:**

**Required fields per Review node:**

| Field | Value | Status |
|---|---|---|
| `@type` | `Review` | ✅ Present on all 6 |
| `@id` | Unique URI per review | ✅ Present on all 6 |
| `itemReviewed` | `@id` → Ramsey LocalBusiness entity | ✅ Present on all 6 |
| `author` | `@type: Person`, `name` | ✅ Present on all 6 |
| `reviewRating` | `@type: Rating`, `ratingValue`, `bestRating` | ✅ Present on all 6 |
| `reviewBody` | Matches visible DOM text exactly | ✅ Present on all 6 |
| `publisher` | `@type: Organization`, `name: Google` | ✅ Present on all 6 |

**Selection rules (documented in REVIEW_STRATEGY.md):**
- Public GBP reviews only
- No child names, diagnoses, or clinical outcomes
- No protected health information
- All 5-star ratings
- Reviewer has not deleted or edited the review
- Review text is visible as HTML on the page — not image-only

**Connected repo docs:** [`docs/REVIEW_STRATEGY.md`](../REVIEW_STRATEGY.md) · [`docs/evidence/07-review-evidence.md`](../evidence/07-review-evidence.md)

---

### Slide 07 — Tracking Architecture: What Is and Is Not on the Page

**Title:** Zero tracking on the proof layer. Fully documented for production implementation.  
**Subtitle:** The absence of tracking is intentional and documented.

**Content:**

**What is NOT on the proof layer:**
- Google Analytics 4 (no `gtag.js`, no measurement ID)
- Google Tag Manager (no GTM container)
- Meta Pixel (no `fbq` script)
- CallRail (no dynamic number insertion)
- HubSpot tracking pixel
- Any third-party analytics or advertising script

**Why:**
- The proof layer is a documentation and validation tool — not a production page
- Adding tracking to a non-production page creates false sessions and events in GA4 and HubSpot
- The privacy-first approach is a deliberate architectural decision documented in the evidence trail

**What IS documented for production implementation:**

| Event | Trigger | Parameters |
|---|---|---|
| `page_view` | Page load | `location_id`, `location_name`, `page_type` |
| `cta_click` | Any CTA button click | `cta_type`, `cta_position`, `location_id` |
| `phone_click` | Phone number tap/click | `location_id`, `location_name` |
| `form_start` | First form field focus | `location_id`, `page_type` |
| `form_submit` | Form submission | `location_id`, `cta_type` |
| `directions_click` | Directions button click | `location_id`, `location_name` |
| `video_play` | Video play event | `location_id`, `video_title` |

**Connected repo docs:** [`docs/DATA_LAYER_SPEC.md`](../DATA_LAYER_SPEC.md) · [`docs/evidence/09-tracking-privacy-findings.md`](../evidence/09-tracking-privacy-findings.md)

---

### Slide 08 — GBP Alignment: Technical Approach

**Title:** NAP alignment is enforced at the data model level, not the content level.  
**Subtitle:** One source of truth. One place to update. Propagates to schema, CTAs, and directions simultaneously.

**Content:**

**How NAP alignment works in the proof layer:**

The `LOCATION` constant in `Home.tsx` is the single source of truth for all location-specific data. Changing the phone number in this constant updates:
- The nav bar CTA phone number
- The hero section phone number
- The footer phone number
- The `telephone` field in the LocalBusiness schema node
- The `hasMap` field (GBP URL) in the LocalBusiness schema node
- The directions module address

**GBP alignment fields in the LocalBusiness schema node:**

| Schema Field | Value | Source |
|---|---|---|
| `name` | Bierman Autism Centers — Ramsey | GBP profile |
| `address` | 1050 NJ-17, Ramsey, NJ 07446 | GBP profile |
| `telephone` | TBD (pending confirmation) | Requires client confirmation |
| `url` | `https://www.biermanautism.com/locations/ramsey-nj/` | Production URL |
| `hasMap` | GBP profile URL | GBP profile |
| `geo` | Latitude / Longitude | GBP coordinates |
| `openingHoursSpecification` | Mon–Fri 8am–6pm | GBP hours |

**Open gap:** The Ramsey canonical phone number has 3 conflicting values across documents. This is the only unresolved NAP alignment issue. It requires one confirmation from Bierman ops or a GBP login check.

**Connected repo docs:** [`docs/GBP_ALIGNMENT_STRATEGY.md`](../GBP_ALIGNMENT_STRATEGY.md) · [`docs/evidence/03-gbp-findings.md`](../evidence/03-gbp-findings.md)

---

### Slide 09 — QA Process

**Title:** 80-item QA checklist. Validated before every checkpoint.  
**Subtitle:** The QA process is documented, repeatable, and version-controlled.

**Content:**

**QA checklist categories:**

| Category | Items | Key Checks |
|---|---|---|
| Safety and production isolation | 8 | `noindex`, `nofollow`, no tracking, no hotlinks to production |
| Schema and structured data | 12 | JSON-LD valid, all required fields present, no duplicate nodes |
| Rich Results validation | 6 | Google Rich Results Test, Schema Markup Validator |
| Content accuracy | 10 | NAP matches GBP, review text matches DOM, FAQ answers accurate |
| Accessibility | 8 | Alt text, ARIA labels, keyboard navigation, color contrast |
| Performance | 6 | No local media files, CDN assets only, no blocking scripts |
| Privacy | 8 | No PII in schema, no tracking, no third-party scripts |
| GBP alignment | 6 | Phone, address, hours, map embed, GBP URL |
| TypeScript | 4 | No type errors, no unused imports |
| Documentation | 8 | Evidence trail updated, decision log updated, changelog updated |
| Responsive design | 4 | Mobile, tablet, desktop breakpoints tested |

**Connected repo docs:** [`docs/QA_CHECKLIST.md`](../QA_CHECKLIST.md)

---

### Slide 10 — Production Migration Path

**Title:** What the agency would need to implement this in production.  
**Subtitle:** The proof layer is a migration specification, not just a demo.

**Content:**

**What the proof layer provides to the agency:**

| Deliverable | Format | Location |
|---|---|---|
| Schema architecture | JSON-LD in `client/index.html` | Repo |
| Rich Results validation | Screenshot + test URL | `docs/evidence/05-rich-results-baseline.md` |
| Data layer event taxonomy | Markdown spec | `docs/DATA_LAYER_SPEC.md` |
| Location data model | TypeScript interface | `docs/DATA_MODEL.md` |
| GBP alignment fields | Table in `GBP_ALIGNMENT_STRATEGY.md` | `docs/GBP_ALIGNMENT_STRATEGY.md` |
| Review selection framework | Markdown doc | `docs/REVIEW_STRATEGY.md` |
| QA checklist | 80-item checklist | `docs/QA_CHECKLIST.md` |
| Client confirmation questions | 26 questions | `docs/CLIENT_CONFIRMATION_QUESTIONS.md` |

**What the agency would need to do:**
1. Confirm 3 critical data points (Ramsey phone, Piscataway phone + address)
2. Implement the JSON-LD schema in the production CMS
3. Implement the data layer event taxonomy in GTM
4. Add GBP UTMs to the website link in each GBP profile
5. Validate Rich Results Test on production URL after implementation

**What the agency would NOT need to do:**
- Redesign the current site
- Restructure the URL architecture
- Replace the current CMS
- Rebuild all 33 location pages simultaneously

**Connected repo docs:** [`docs/ROADMAP.md`](../ROADMAP.md) · [`docs/CLIENT_CONFIRMATION_QUESTIONS.md`](../CLIENT_CONFIRMATION_QUESTIONS.md) · [`docs/BUILD_NOTES.md`](../BUILD_NOTES.md)

---

## Deck Notes

**Tone:** Technical, collaborative, evidence-based. This deck is for a peer review, not a sales meeting. The agency is a potential implementation partner. The goal is to establish that the proof layer's technical claims are verifiable and that the migration path is documented.

**Visual direction:** Match the existing deck aesthetic — clean white background, bold black headlines, orange accent color, AR monogram logo, slide number bottom-right. Consider a slightly more technical visual style (code blocks, schema diagrams) compared to the other decks.

**Slide 04 (Rich Results Validation):** The Rich Results Test screenshot showing "12 valid items detected" with all 6 green checkmarks is the single most important visual in this deck. Use it. Show the before/after comparison table.

**Slide 05 (Schema Validation Log):** The dual schema conflict story is the most technically interesting part of the build. The fact that it was identified, diagnosed, and resolved — and that the resolution is documented — is evidence of a rigorous QA process.

**Slide 10 (Production Migration Path):** Frame this slide as a handoff document, not a critique. The agency can use the proof layer's deliverables to implement the schema and data layer in production without a new discovery engagement. That is a time and cost saving, not a threat.
