# Product Requirements Document
## Bierman Autism Centers — Proof Layer System

**Version:** 1.0  
**Date:** May 2026  
**Status:** Active — Ramsey proof complete, Piscataway pending  
**Classification:** Acquisition-ready source of truth

---

## Executive Summary

The Bierman Autism Centers Proof Layer is a production-isolated system that demonstrates a scalable local entity architecture for a multi-location autism therapy provider. The system addresses documented SEO, schema, GBP alignment, and conversion gaps across Bierman's 33+ verified locations — without touching production infrastructure.

The Ramsey, NJ location page serves as the master proof: a fully instrumented, schema-validated, Rich Results-eligible location page that demonstrates what every Bierman location page could look like if the architecture were adopted. The system is designed to be evaluated by the Bierman team, agency partners, and acquisition stakeholders.

This is not a design mockup. It is a working proof of a scalable local conversion architecture.

---

## Acquisition Context

Bierman Autism Centers is a multi-state autism therapy provider operating 33+ verified Google Business Profile locations. The company's digital infrastructure — specifically its location page architecture — represents a measurable gap between current performance and potential performance.

From an acquisition-readiness perspective, this gap is both a risk and an opportunity:

- **Risk:** Inconsistent NAP data, weak schema, no review visibility, and no structured entity graph reduce local search visibility and conversion performance at scale. These are not isolated technical issues — they compound across every location.
- **Opportunity:** A structured, documented, scalable system that resolves these gaps is a demonstrable asset. It reduces technical debt, improves visibility, and provides a clear implementation roadmap that a buyer or leadership team can evaluate, scope, and execute.

This proof layer turns the gap into a documented system. It is acquisition-relevant because it provides:

1. A working demonstration of the future-state architecture
2. A source-of-truth data model for all 33+ locations
3. A documented gap analysis between current state and future state
4. A phased implementation roadmap with clear decision points
5. A privacy-conscious tracking taxonomy that avoids PHI/PII exposure

---

## Problem Statement

Bierman's current location pages (`/location/slug/`) have the following documented issues:

**Schema and Entity Gaps**
- No `LocalBusiness`/`MedicalClinic` co-typed entity with full NAP, geo, and hours
- No `Review` or `AggregateRating` schema — review visibility is zero in Rich Results
- No `FAQPage` schema — FAQ content is not eligible for rich result expansion
- No `VideoObject` schema — video content is not eligible for rich result indexing
- No `BreadcrumbList` schema — breadcrumb rich results are not available
- No `Service` or `OfferCatalog` schema — service-location relationships are not structured
- No `Person` schema for clinical leadership — BCBA authority signals are absent

**GBP Alignment Gaps**
- NAP data on location pages does not consistently match GBP profiles
- Phone number discrepancies exist across multiple locations (documented in `KNOWN_GAPS.md`)
- Review content from GBP is not surfaced on location pages
- GBP `hasMap` and `geo` data is not reflected in page schema

**Content and Conversion Gaps**
- No clinical leadership section — BCBA and clinical director profiles are absent
- No caregiver education bridge — informational content does not connect to intake CTAs
- No directions/local action section — driving, transit, and parking information is absent
- No insurance verification module — accepted insurance is not prominently displayed
- No review module — social proof from GBP is not visible on location pages

**URL Architecture**
- Current structure (`/location/ramsey/`) does not reflect state/city hierarchy
- No state-level hub pages to support internal linking and topic cluster architecture
- URL structure does not support scalable multi-location SEO

---

## Product Vision

A scalable local entity architecture for Bierman Autism Centers that:

- Aligns every location page with its corresponding GBP profile (NAP, reviews, photos, services)
- Implements a complete JSON-LD schema graph for every location (26+ nodes per page)
- Surfaces clinical leadership, review evidence, and service-location relationships on every page
- Connects informational caregiver content to intake conversion paths
- Provides a clean, privacy-conscious data layer taxonomy for future analytics integration
- Scales from 1 location (Ramsey) to all 33+ verified locations without architectural changes

---

## Goals

1. Demonstrate a complete, schema-validated, Rich Results-eligible location page for Ramsey, NJ
2. Document a reusable location data model that drives page content, schema, and GBP alignment
3. Establish a source-of-truth for all 33+ Bierman locations (Matrix v3)
4. Provide a phased roadmap from Ramsey proof to full-network deployment
5. Produce acquisition-ready documentation that a buyer or leadership team can evaluate independently
6. Maintain strict production isolation — no changes to biermanautism.com, DNS, GBP, GSC, GTM, or GA4

---

## Non-Goals

- This is not a production migration
- This is not a guarantee of rankings or leads
- This is not a HIPAA compliance system
- This is not a full CMS rebuild
- This does not include live form integration
- This does not include live tracking or analytics
- This does not include changes to any Bierman production system

---

## Scope

**In scope — Ramsey proof layer:**
- Location page architecture (hero, services, clinical leadership, reviews, directions, education, FAQ, nearby locations)
- JSON-LD schema graph (26 nodes)
- GBP review integration (6 public reviews, native HTML/CSS cards)
- Rich Results Test validation (13 items, targeting 0 invalid)
- Open Graph meta tags (title, description, image, url)
- Reusable location data model (`LOCATION` constant)
- Proof-layer safety guardrails (noindex, no tracking, no live forms)
- Documentation (19 files, this PRD)

**In scope — future phases:**
- Piscataway, NJ (Phase 2)
- New Jersey cluster — all NJ locations (Phase 3)
- All 33+ verified GBP locations (Phase 4)
- Service-to-location hub pages (Phase 5)
- Caregiver/resource internal linking (Phase 6)
- Optional pilot subdomain mapping (Phase 7)
- Optional production migration planning (Phase 8)

**Out of scope:**
- Production deployment without Bierman approval
- DNS changes
- GBP edits
- GSC, GTM, GA4, HubSpot, or CallRail changes
- Live form integration
- HIPAA compliance certification

---

## User Personas

**Caregiver (Primary)**
A parent or guardian of a child recently diagnosed with autism, or in the process of seeking a diagnosis. They are searching for local ABA therapy, speech therapy, or occupational therapy. They need to quickly understand: what services are available, whether insurance is accepted, where the clinic is located, and how to start. They are often in a high-stress, time-sensitive decision-making process.

**Referring Provider**
A pediatrician, school psychologist, or early intervention specialist referring a family to Bierman. They need to confirm the location, services, and contact information quickly. They may search by location or service type.

**Acquisition Stakeholder**
A buyer, investor, or leadership team member evaluating Bierman's digital infrastructure as part of due diligence. They need to understand the current state of the location page system, the documented gaps, the future-state architecture, and the implementation roadmap.

**SEO/Agency Partner**
An agency or consultant evaluating the proof layer as a reference implementation. They need to understand the schema architecture, the GBP alignment strategy, the URL structure, and the scaling plan.

---

## Page Architecture

The Ramsey proof-layer page is structured as a single-page React application with the following sections, in order:

| Section | Purpose | Key Elements |
|---|---|---|
| Proof-layer banner | Safety notice | noindex/nofollow, dismissible |
| Navigation | Brand + location + CTA | Logo, location name, phone, intake CTA |
| Hero | Primary conversion | H1, description, CTAs, GBP verified card, trust badges |
| Services | Service-location mapping | 4 service cards with schema |
| Clinical leadership | Authority signals | BCBA profiles, Person schema |
| What families value | Social proof themes | 3 theme cards from GBP review evidence |
| GBP reviews | Review visibility | 6 native HTML/CSS review cards, JSON-LD Review schema |
| Education bridge | Informational-to-intake | Caregiver resources, intake CTA |
| Directions | Local action | Map embed, driving/transit/parking |
| Insurance | Conversion support | 9 insurance logos, verification CTA |
| FAQ | Rich result eligibility | 13 FAQs with FAQPage schema |
| Nearby locations | Internal linking | 5 nearby locations + all locations link |
| Footer | NAP + trust | Address, phone, hours, trust badges |

---

## SEO/AEO Strategy

See [`docs/SEO_AEO_STRATEGY.md`](SEO_AEO_STRATEGY.md) for full detail.

The strategy is built around three pillars:

1. **Local entity strength** — co-typed `LocalBusiness`/`MedicalClinic`, full NAP, geo, hours, `areaServed`, `hasMap`, `branchOf`
2. **Answer engine eligibility** — `FAQPage` schema, `VideoObject` schema, `Review` schema, `BreadcrumbList` schema
3. **Content-to-intent alignment** — GSC-informed FAQ content, caregiver education bridge, service-location content depth

---

## Schema Strategy

See [`docs/SCHEMA_STRATEGY.md`](SCHEMA_STRATEGY.md) for full detail.

The schema is implemented as a single JSON-LD `@graph` array in `client/index.html`. The graph contains 26 nodes across the following types:

`WebSite`, `WebPage`, `Organization`, `LocalBusiness`/`MedicalClinic` (co-typed), `PostalAddress`, `GeoCoordinates`, `OpeningHoursSpecification` ×7, `BreadcrumbList`, `FAQPage`, `VideoObject`, `Review` ×6, `AggregateRating`, `Service` ×4, `ImageObject` ×3, `Person` ×2

---

## Review Strategy

See [`docs/REVIEW_STRATEGY.md`](REVIEW_STRATEGY.md) for full detail.

Reviews are sourced from public GBP profiles. They are rendered as native HTML/CSS cards in the DOM and matched by `reviewBody` in JSON-LD `Review` nodes. `itemReviewed` points to the `LocalBusiness`/`MedicalClinic` entity. `AggregateRating` (5.0/6) is present and matches visible on-page content.

---

## GBP Alignment Strategy

See [`docs/GBP_ALIGNMENT_STRATEGY.md`](GBP_ALIGNMENT_STRATEGY.md) for full detail.

Every field on the location page is sourced from or aligned with the corresponding GBP profile. NAP discrepancies are documented and flagged for Bierman confirmation before production deployment.

---

## GSC/Query Strategy

GSC data for biermanautism.com (last 12 months) informs the FAQ content and service descriptions. High-impression, low-CTR queries are addressed in FAQ content. Informational queries (e.g., "what is level 1 autism", "can autism be cured") are bridged to intake CTAs through the education section.

---

## Clinical Leadership Strategy

BCBA-level clinical directors are profiled in a dedicated section with `Person` schema. This provides:
- Authority signals for the location entity
- Trust signals for caregivers evaluating providers
- Differentiation from competitor pages that do not surface clinical staff

Team image usage requires Bierman approval before production deployment.

---

## Caregiver Education Strategy

A dedicated education bridge section connects informational caregiver content (ABA therapy overview, what to expect, insurance guidance) to the intake CTA. This addresses the documented gap between high-volume informational queries and low conversion rates on current location pages.

---

## Directions/Local Action Strategy

A dedicated directions section includes:
- Embedded Google Maps iframe
- Driving directions from major nearby areas
- Transit and parking information
- `hasMap` in schema pointing to the GBP map URL

---

## Conversion Strategy

Conversion architecture is built around three principles:

1. **Reduce friction** — intake CTA is present in the nav, hero, education section, and footer
2. **Build trust** — reviews, clinical leadership, trust badges, insurance logos, and BACB/CASP credentials are all visible
3. **Answer objections** — FAQ section addresses insurance, age range, process, and service questions before the caregiver needs to call

---

## Data-Layer Strategy

See [`docs/DATA_LAYER_SPEC.md`](DATA_LAYER_SPEC.md) for full detail.

The proof layer does not implement live tracking. The data-layer spec documents a safe, privacy-conscious event taxonomy for future implementation — with explicit disallowed parameters (name, email, phone, child name, diagnosis, insurance details, PHI/PII).

---

## Privacy/Compliance Guardrails

- No GTM, GA4, Meta Pixel, Google Ads, Bing UET, CallRail, Birdeye, or UserWay
- No live forms — intake CTAs link to existing biermanautism.com flow
- No patient data collection, storage, or transmission
- No PHI or PII in any data layer event or parameter
- No unsupported medical claims
- No Physician schema unless explicitly supported by credentials

---

## URL Strategy

See [`docs/URL_STRATEGY.md`](URL_STRATEGY.md) for full detail.

| Environment | URL |
|---|---|
| Current production | `https://www.biermanautism.com/location/ramsey/` |
| Proof layer | `https://bierman-proof-layer.manus.space/` |
| Recommended pilot | `https://pilot.biermanautism.com/locations/new-jersey/ramsey/` |
| Future production | `https://www.biermanautism.com/locations/new-jersey/ramsey/` |

---

## Asset Strategy

See [`docs/ASSET_MANIFEST.md`](ASSET_MANIFEST.md) for full detail.

All assets are served from the Manus CDN (`/manus-storage/` paths). No local binary assets are stored in the project directory. Assets requiring Bierman approval (team headshots, video) are flagged in the manifest.

---

## Scaling Plan

The location data model (`LOCATION` constant in `Home.tsx`) isolates all location-specific values. Replicating the Ramsey page to a new location requires updating 9 fields:

1. `name` — location display name
2. `address` — street address
3. `city` — city name
4. `state` / `zip` — state and ZIP
5. `county` — county name
6. `phone` — confirmed phone number
7. `gbpUrl` — GBP profile URL
8. `mapEmbedUrl` — Google Maps embed URL
9. `intakeUrl` — intake form URL with location parameter

Schema IDs, review content, clinical staff, and nearby locations are updated per location. The schema generation pattern is identical across all locations.

See [`docs/ROADMAP.md`](ROADMAP.md) for the 8-phase scaling roadmap.

---

## Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Phone number discrepancies | High | Confirm with Bierman before production; document in `KNOWN_GAPS.md` |
| Team image usage without approval | Medium | Flag all team images; do not deploy to production without approval |
| Review usage without approval | Medium | All reviews are public GBP data; document usage and get confirmation |
| Video usage without approval | Medium | Flag video; do not deploy to production without approval |
| Location count uncertainty (32 vs 33) | Low | Document in `LOCATION_MATRIX_STRATEGY.md`; confirm with Bierman |
| Duplicate GBP profiles (Broad Ripple) | Medium | Document; do not create schema for unverified locations |
| Facebook scraper 403 | Low | Manus CDN infrastructure block; resolves on custom domain deployment |

---

## Open Questions

See [`docs/CLIENT_CONFIRMATION_QUESTIONS.md`](CLIENT_CONFIRMATION_QUESTIONS.md) for the full list. Key open questions:

1. What is the canonical phone number for Ramsey?
2. What is the confirmed location count (32 or 33)?
3. Is Avondale or Avon the correct location name?
4. What is the status of the Brooklyn Park location?
5. Which insurance plans are accepted at each location?
6. Is clinical leader headshot usage approved for the proof layer?
7. Is video usage approved for the proof layer?
8. Is GBP review usage approved for the proof layer?
9. Is a pilot subdomain (`pilot.biermanautism.com`) of interest?

---

## Acceptance Criteria

The Ramsey proof layer is considered complete when:

- [ ] Rich Results Test: 13 items detected, 0 invalid
- [ ] Schema Markup Validator: all 26 nodes valid, no critical errors
- [ ] All 6 Review nodes have `reviewBody`, `itemReviewed`, `reviewRating`, and `author`
- [ ] `AggregateRating` matches visible on-page content
- [ ] All visible review text matches `reviewBody` in schema
- [ ] No microdata attributes conflict with JSON-LD
- [ ] Open Graph: `og:title`, `og:description`, `og:image`, `og:url` all correct
- [ ] Production untouched: biermanautism.com unchanged
- [ ] No tracking: zero GTM, GA4, pixels, or session recording
- [ ] No live forms: intake CTAs link to existing biermanautism.com flow
- [ ] No patient data: zero PHI/PII collection
- [ ] All documentation files complete and committed

---

## Roadmap

See [`docs/ROADMAP.md`](ROADMAP.md) for the full 8-phase roadmap.

| Phase | Scope | Status |
|---|---|---|
| Phase 1 | Ramsey master proof | Active |
| Phase 2 | Piscataway, NJ | Pending phone confirmation |
| Phase 3 | New Jersey cluster | Planned |
| Phase 4 | All 33+ verified GBP locations | Planned |
| Phase 5 | Service-to-location hub pages | Planned |
| Phase 6 | Caregiver/resource internal linking | Planned |
| Phase 7 | Optional pilot subdomain mapping | Pending Bierman decision |
| Phase 8 | Optional production migration planning | Pending Bierman decision |
