# Bierman Autism Centers — Proof Layer

**Production-isolated proof-layer system demonstrating a scalable local entity architecture for Bierman Autism Centers.**

---

## What This Is

This repository contains a production-isolated proof-layer page for Bierman Autism Centers — Ramsey, NJ. It is not a redesign mockup. It is a working demonstration of a scalable system that can standardize Bierman's location pages, Google Business Profile alignment, schema/entity architecture, SEO/AEO visibility, local content, review structure, and conversion paths across every verified location.

The system is built to be evaluated — by the Bierman team, by agency partners, and by any stakeholder conducting acquisition-readiness due diligence.

---

## Acquisition Context

Bierman Autism Centers operates 33+ verified GBP locations across multiple states. The current location page architecture has documented SEO gaps: inconsistent NAP data, weak schema, no review visibility, no clinical leadership signals, and no structured local entity graph. These are not cosmetic problems. They are measurable visibility and conversion gaps that compound across every location.

This proof layer turns that problem into a structured, documented, scalable system. It demonstrates what a future-state Bierman location page system could look like if adopted — and provides the source-of-truth documentation needed to evaluate, scope, and execute that adoption.

**This is more valuable than a redesign. It is acquisition-ready infrastructure documentation.**

---

## Live URLs

| Environment | URL | Status |
|---|---|---|
| **Proof layer (live)** | [https://bierman-proof-layer.manus.space/](https://bierman-proof-layer.manus.space/) | Active — proof layer only |
| **Production (untouched)** | [https://www.biermanautism.com/location/ramsey/](https://www.biermanautism.com/location/ramsey/) | Unchanged |
| **Recommended pilot** | `https://pilot.biermanautism.com/locations/new-jersey/ramsey/` | Not yet deployed |
| **Future production** | `https://www.biermanautism.com/locations/new-jersey/ramsey/` | Not yet deployed |

---

## What the Proof Layer Demonstrates

- **Cleaner URL architecture** — state/city hierarchy vs. flat `/location/slug/`
- **Stronger local entity structure** — `LocalBusiness` + `MedicalClinic` co-typed, `branchOf` parent org, `areaServed`, `hasMap`
- **Richer schema** — 26-node JSON-LD graph: `WebPage`, `WebSite`, `Organization`, `LocalBusiness`/`MedicalClinic`, `BreadcrumbList`, `FAQPage`, `VideoObject`, `Review` ×6, `AggregateRating`, `Service` ×4, `ImageObject` ×3, `Person` ×2
- **Review visibility** — 6 public GBP reviews rendered as native HTML/CSS cards with matching JSON-LD `Review` nodes
- **Clinical leadership signals** — BCBA-level clinical director profiles with `Person` schema
- **Service-location relationships** — 4 services with `Service` schema, `OfferCatalog`, and `areaServed`
- **Directions/local action UX** — embedded map, driving directions, transit, parking
- **Education-to-intake pathways** — caregiver resource section bridging informational intent to intake CTA
- **Scalable location data model** — all location-specific values isolated in a `LOCATION` constant, ready for template replication
- **Privacy-conscious design** — no GTM, no GA4, no tracking pixels, no live forms, no patient data collection

---

## Rich Results Status

| Metric | Value |
|---|---|
| Items detected | 12 |
| Valid items | 12 |
| Invalid items | 0 |
| Critical issues | 0 |
| Groups | Breadcrumbs, FAQ, Local businesses, Organization, Review snippets (7), Videos |
| Last tested | May 9, 2026 — confirmed clean |

See [`docs/SCHEMA_STRATEGY.md`](docs/SCHEMA_STRATEGY.md) for full schema architecture and [`docs/evidence/05-rich-results-baseline.md`](docs/evidence/05-rich-results-baseline.md) for the full progression from baseline to current state.

---

## Quick Start

```bash
# Clone the repo
git clone <repo-url>
cd bierman-proof-layer

# Install dependencies
pnpm install

# Start development server
pnpm dev
# → http://localhost:3000
```

---

## Build & Deploy

```bash
# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

Deployment is managed via the Manus platform. Do not deploy to `biermanautism.com` without explicit Bierman approval and a confirmed migration plan.

---

## Safety Boundaries

This proof layer operates under strict production isolation:

- **No changes to biermanautism.com** — production is untouched
- **No changes to DNS** — no subdomain mapping without Bierman approval
- **No changes to GBP** — Google Business Profiles are read-only reference data
- **No changes to GSC, GTM, GA4, HubSpot, or CallRail**
- **No live forms** — intake CTAs link to the existing biermanautism.com intake flow
- **No tracking** — zero analytics, pixels, or session recording
- **No patient data** — no collection, storage, or transmission of any PHI or PII
- **noindex/nofollow** — the proof layer does not compete with production in search

---

## Evidence Trail

This proof layer was built from a documented audit trail. Every major architectural, content, and schema decision is traceable to a specific evidence source. See [`docs/evidence/00-evidence-index.md`](docs/evidence/00-evidence-index.md) for the master evidence map covering: live site audit findings, GBP data, GSC-informed query analysis, Rich Results Test progression, schema validation log, review evidence, URL strategy findings, tracking/privacy findings, and the full decision log.

| Evidence File | What It Covers |
|---|---|
| [`00-evidence-index.md`](docs/evidence/00-evidence-index.md) | Master evidence map — all sources, findings, and build decisions |
| [`01-current-site-audit.md`](docs/evidence/01-current-site-audit.md) | 10 current site findings tied to proof-layer improvements |
| [`02-location-matrix-findings.md`](docs/evidence/02-location-matrix-findings.md) | Matrix v3 status, discrepancies, source-of-truth rules |
| [`03-gbp-findings.md`](docs/evidence/03-gbp-findings.md) | 33 verified profiles, NAP findings, review evidence, directions |
| [`04-gsc-query-findings.md`](docs/evidence/04-gsc-query-findings.md) | GSC-informed query opportunities (directional) |
| [`05-rich-results-baseline.md`](docs/evidence/05-rich-results-baseline.md) | Production baseline vs. proof layer Rich Results progression |
| [`06-schema-validation-log.md`](docs/evidence/06-schema-validation-log.md) | 26-node entity graph, validation milestones, known warnings |
| [`07-review-evidence.md`](docs/evidence/07-review-evidence.md) | Review selection, exclusion criteria, schema rules |
| [`08-url-strategy-findings.md`](docs/evidence/08-url-strategy-findings.md) | Current URL pattern, pilot recommendation, migration path |
| [`09-tracking-privacy-findings.md`](docs/evidence/09-tracking-privacy-findings.md) | Production tracking concerns, zero-tracking proof layer, future recommendations |
| [`10-decision-log.md`](docs/evidence/10-decision-log.md) | Chronological log of 12 major decisions with evidence and alternatives |

---

## Documentation Index

| File | Purpose |
|---|---|
| [`docs/PRD.md`](docs/PRD.md) | Full Product Requirements Document |
| [`docs/PROJECT_STATE.md`](docs/PROJECT_STATE.md) | Current build state, known issues, next tasks |
| [`docs/SCHEMA_STRATEGY.md`](docs/SCHEMA_STRATEGY.md) | Full schema architecture and Rich Results strategy |
| [`docs/URL_STRATEGY.md`](docs/URL_STRATEGY.md) | URL architecture, pilot recommendation, migration path |
| [`docs/DATA_MODEL.md`](docs/DATA_MODEL.md) | Reusable location data model — all fields |
| [`docs/LOCATION_MATRIX_STRATEGY.md`](docs/LOCATION_MATRIX_STRATEGY.md) | 33-location matrix, known discrepancies |
| [`docs/REVIEW_STRATEGY.md`](docs/REVIEW_STRATEGY.md) | Review module architecture, schema rules, scaling |
| [`docs/DATA_LAYER_SPEC.md`](docs/DATA_LAYER_SPEC.md) | Safe tracking taxonomy — events, params, disallowed |
| [`docs/SEO_AEO_STRATEGY.md`](docs/SEO_AEO_STRATEGY.md) | Local SEO and AEO/entity strategy |
| [`docs/GBP_ALIGNMENT_STRATEGY.md`](docs/GBP_ALIGNMENT_STRATEGY.md) | GBP-to-page alignment and NAP strategy |
| [`docs/ASSET_MANIFEST.md`](docs/ASSET_MANIFEST.md) | All assets: CDN paths, alt text, approval status |
| [`docs/QA_CHECKLIST.md`](docs/QA_CHECKLIST.md) | Pre-delivery QA checklist |
| [`docs/KNOWN_GAPS.md`](docs/KNOWN_GAPS.md) | Open issues, discrepancies, pending confirmations |
| [`docs/CLIENT_CONFIRMATION_QUESTIONS.md`](docs/CLIENT_CONFIRMATION_QUESTIONS.md) | What Bierman must confirm before production |
| [`docs/CHANGELOG.md`](docs/CHANGELOG.md) | Chronological build history |
| [`docs/BUILD_NOTES.md`](docs/BUILD_NOTES.md) | Technical framework, components, asset paths |
| [`docs/ROADMAP.md`](docs/ROADMAP.md) | 8-phase scaling roadmap |
| [`docs/ACQUISITION_READINESS.md`](docs/ACQUISITION_READINESS.md) | Acquisition-readiness framing and value summary |
| [`docs/OPERATING_SYSTEM.md`](docs/OPERATING_SYSTEM.md) | Operating model, workflow inventory, approval gates, deliverables vs. internal methods |
| [`docs/CLIENT_CONFIRMATION_QUESTIONS_DELIVERABLE.md`](docs/CLIENT_CONFIRMATION_QUESTIONS_DELIVERABLE.md) | Client-ready confirmation questions document (26 questions) |

---

## Operating System

This project was built with a controlled multi-agent operating model for research, QA, build execution, schema validation, and evidence governance. The operating model documents 10 reusable workflows (A–J), 8 approval gates, and a full deliverables-vs-internal-methods inventory. See [`docs/OPERATING_SYSTEM.md`](docs/OPERATING_SYSTEM.md).

---

## Stack

- **Framework:** React 19 + Vite + TypeScript
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Schema:** JSON-LD in `client/index.html` — single `@graph` array, 26 nodes
- **Assets:** Manus CDN (`/manus-storage/` paths) — no local binary assets
- **Routing:** Wouter (client-side, single page)
- **Hosting:** Manus platform (proof layer only)

---

*This repository is maintained as a production-isolated proof-layer system. It is not a production deployment. It is not approved for migration. It is a source-of-truth demonstration of what a future-state Bierman location system could look like.*
