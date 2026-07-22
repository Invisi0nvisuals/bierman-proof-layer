# Operating System

## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Status:** Active — governs all proof-layer build, QA, and documentation work

---

## 1. Purpose

This document explains how the proof layer was built, why it is repeatable, and what transfers to Bierman versus what remains internal to the operating team.

It exists for four reasons. First, to show how the proof layer was produced — not just what it contains, but the controlled workflow that generated each artifact, validated each decision, and documented each finding. Second, to demonstrate repeatability — the same operating model that produced the Ramsey page can produce the Piscataway page, the New Jersey cluster, and all 33+ verified locations without starting from scratch. Third, to support acquisition review — a buyer or stakeholder evaluating this project can understand the build methodology, the governance model, and the distinction between deliverables and internal methods. Fourth, to separate deliverables from internal orchestration — the repo contains the outputs; the internal agent skills, prompt chains, and orchestration logic are not transferred unless separately agreed.

> **Framing:** This proof layer was produced using a controlled multi-agent workflow with reusable operational skills for research, browser QA, evidence capture, schema validation, implementation, documentation, and governance. The repo documents the outputs, decisions, and scalable implementation pattern. Internal agent skills and orchestration methods are not transferred unless separately agreed.

---

## 2. System Overview

The proof layer was built using a layered operating model with five agent types and four governance layers. Each agent type has a defined scope, risk level, and approval gate. No agent type has permission to change production systems without explicit approval.

**Agent types used in this project:**

**Research agents** gather and synthesize information from public sources — GSC, GBP, Rich Results Test, Schema Markup Validator, public review platforms, and publicly accessible web pages. Research agents are read-only. They do not change settings, submit forms, or interact with authenticated systems beyond what is required to retrieve data.

**Browser QA agents** inspect web pages, validation tools, dashboards, and public assets in a controlled, read-only mode. Their outputs are screenshots, structured findings, and evidence logs. They do not save, publish, or activate anything without explicit approval.

**Build agents** implement the page architecture, schema graph, component library, and data model. Build agents operate in the proof-layer environment only. They do not touch production systems, DNS, GBP, GTM, GA4, HubSpot, CallRail, or WordPress.

**Documentation agents** convert findings, decisions, and build artifacts into structured documentation — PRD, evidence trail, decision log, QA checklist, roadmap, and this operating system document. Documentation agents do not make implementation decisions; they record them.

**Validation workflows** run structured checks against external validators (Google Rich Results Test, Schema Markup Validator, Meta Sharing Debugger) and internal QA checklists. Validation outputs are stored in `docs/evidence/` as part of the evidence trail.

**Approval gates** are decision points where work stops until explicit human approval is received. No production change, GBP edit, DNS change, or live form connection proceeds without passing through an approval gate.

**Source-of-truth files** are the canonical data sources for all build decisions. The Location Matrix (Matrix v3), the `LOCATION` constant in `Home.tsx`, the schema graph in `index.html`, and the `ASSET_MANIFEST.md` are the source-of-truth files. If a value in a source-of-truth file conflicts with a value in another document, the source-of-truth file governs — and the conflict is documented in `KNOWN_GAPS.md`.

**Evidence-to-decision mapping** is the practice of connecting every build decision to a specific evidence source. Every decision in `docs/evidence/10-decision-log.md` references the evidence that drove it. This is not documentation for its own sake — it is the mechanism that makes the project defensible, auditable, and repeatable.

---

## 3. Skill / Workflow Inventory

The following table documents the 10 operational workflows used to build the proof layer. Each workflow has a defined intent, primary use, inputs, outputs, risk level, approval gate, and ownership/transfer status.

| Skill / Workflow | Intent | Primary Use | Inputs | Outputs | Risk Level | Approval Gate | Ownership / Transfer Status |
|---|---|---|---|---|---|---|---|
| **A. Read-Only Browser QA** | Inspect web pages, dashboards, validation tools, and public assets without changing settings | GSC, GBP, Rich Results Test, Schema Markup Validator, image/media audits, social preview checks | Public URLs, validation tool outputs, screenshots | Evidence logs, findings docs, QA checklist items | Low | No production changes permitted | Internal workflow; outputs documented in repo |
| **B. Controlled Browser Executor** | Perform approved browser actions one step at a time with stop-before-save / stop-before-publish gates | Reddit setup, scheduled post QA, controlled admin workflows if authorized | Explicit task instructions, approval confirmation | Completed browser actions with audit trail | Medium–High | Explicit approval required before save / publish / activation | Internal workflow; not transferred |
| **C. Source-of-Truth Builder** | Turn findings into PRD, repo docs, evidence logs, decision logs, and project state | Acquisition-ready documentation | Research outputs, build decisions, validation results, audit findings | PRD, README, evidence trail, decision log, roadmap, this document | Low | Review before client-facing use | Repo outputs transfer; internal method does not unless agreed |
| **D. Location Matrix Workflow** | Map GBP/location data into a structured page-generation model | Scaling Ramsey to Piscataway and all verified locations | GBP data, NAP, URL patterns, services, reviews, insurance, team, media, schema IDs | Location variables, confirmation flags, build requirements | Medium if used for production without confirmation | Client confirmation required before production | Delivered matrix and data model transfer; internal generation method does not unless agreed |
| **E. Schema Validation Workflow** | Validate structured data through Google Rich Results Test and Schema Markup Validator | Breadcrumbs, FAQ, LocalBusiness, Organization, Video, Review, Person, ImageObject, Service graph | Schema nodes in `index.html`, Rich Results Test results, validator output | Validation logs, schema strategy doc, decision log entries | Medium if schema is unsupported or hidden | Only visible, accurate, defensible schema allowed | Process documented in `SCHEMA_STRATEGY.md`; validation results stored in `docs/evidence/` |
| **F. Evidence Trail Workflow** | Connect source data to findings, build decisions, and scaling rules | Acquisition-readiness and defensibility | GSC, GBP, GA4, GTM, HubSpot/CallRail audit, live-page audit, review evidence | Evidence index, decision log, PRD support, `11-business-impact-audit-summary.md` | Low | Client-sensitive data stays private | Evidence outputs transfer with repo; internal orchestration method does not unless agreed |
| **G. Privacy-Conscious Data Layer Workflow** | Design safe event taxonomy without collecting PII or PHI | `request_services_click`, `phone_click`, `directions_click`, review interactions, resource clicks | Behavioral intent requirements, privacy constraints, healthcare provider context | `DATA_LAYER_SPEC.md` — allowed events, allowed parameters, disallowed parameters | Medium | Legal/privacy review required before production tracking implementation | Spec transfers with repo; internal governance process remains proprietary unless agreed |
| **H. Asset Verification Workflow** | Verify, classify, and localize public assets | Insurance logos, facility images, team images, videos, OG image, review cards | GBP photos, Bierman-provided assets, public web assets | `ASSET_MANIFEST.md` — CDN paths, alt text, approval status, schema usage | Medium for people/patient imagery | Client approval required before production use of people, headshots, or video | Approved asset manifest transfers; internal generation prompts and image generation methods do not unless agreed |
| **I. Review Evidence Workflow** | Use public review evidence safely and visibly | Review section, Review schema, AggregateRating rules | Public GBP reviews, review text, reviewer names, dates | Review card components, Review schema nodes, `REVIEW_STRATEGY.md` | Medium | No hidden review schema; all schema reviews must be visibly present on page; client approval before production | Documented strategy and schema pattern transfer; internal selection and generation methods do not unless agreed |
| **J. Multi-Agent Build Workflow** | Coordinate research, implementation, QA, documentation, and validation across tools | Ramsey proof-layer build — all phases from research to checkpoint | All inputs from workflows A–I | All outputs from workflows A–I; the proof layer itself | Depends on task | Production changes always require explicit approval | Delivered artifacts transfer; orchestration methods, agent coordination logic, and internal skill configurations remain internal unless separately agreed |

---

## 4. Approval Gates

The following approval gates govern all work in this project. No gate may be bypassed without explicit documentation of the exception and the approver.

**Production system gates — never bypassed:**

The proof layer does not change, touch, or interact with any production system without explicit written approval. This includes biermanautism.com (WordPress), DNS, Google Business Profile, Google Search Console, Google Tag Manager, GA4, HubSpot, CallRail, and any other live system in Bierman's technology stack. The proof layer is a standalone demonstration environment. Its URL (`bierman-proof-layer.manus.space`) is not linked from any production page and is not in the biermanautism.com sitemap.

**Schema and content gates:**

No schema node is added for content that is not visibly present on the page. No review schema is added for reviews that are not displayed as HTML content. No `AggregateRating` is added unless the rating value and review count match the visible on-page content exactly. No claims of HIPAA compliance or guaranteed search rankings appear anywhere in the proof layer or its documentation.

**People and asset gates:**

No person's image, name, or credentials are used without confirmation that Bierman has approved their use. Team headshots and clinical leader profiles are flagged as pending approval in `ASSET_MANIFEST.md` and `CLIENT_CONFIRMATION_QUESTIONS.md`. No patient imagery, patient names, or patient-identifiable information appears anywhere in the proof layer.

**Data and tracking gates:**

No tracking code (GTM, GA4, Meta Pixel, CallRail, HubSpot tracking) is implemented in the proof layer. No live forms are connected. No form field values are captured. The data-layer event taxonomy in `DATA_LAYER_SPEC.md` is a specification only — it requires explicit Bierman approval and legal/privacy review before production implementation.

**GBP and attribution gates:**

No GBP profile is edited without explicit Bierman approval and GBP edit access. No UTM parameters are added to GBP website links without approval. No appointment URLs are added to GBP profiles without approval. No CallRail phone number changes are made without approval.

---

## 5. Deliverables vs. Internal Methods

The following table distinguishes between what is included in this repo (and therefore transferable to Bierman or a future buyer) and what remains internal to the operating team.

| Category | Item | Status |
|---|---|---|
| **Deliverable** | `README.md` | Included in repo |
| **Deliverable** | `docs/PRD.md` | Included in repo |
| **Deliverable** | `docs/PROJECT_STATE.md` | Included in repo |
| **Deliverable** | `docs/SCHEMA_STRATEGY.md` | Included in repo |
| **Deliverable** | `docs/URL_STRATEGY.md` | Included in repo |
| **Deliverable** | `docs/DATA_MODEL.md` | Included in repo |
| **Deliverable** | `docs/LOCATION_MATRIX_STRATEGY.md` | Included in repo |
| **Deliverable** | `docs/REVIEW_STRATEGY.md` | Included in repo |
| **Deliverable** | `docs/DATA_LAYER_SPEC.md` | Included in repo |
| **Deliverable** | `docs/SEO_AEO_STRATEGY.md` | Included in repo |
| **Deliverable** | `docs/GBP_ALIGNMENT_STRATEGY.md` | Included in repo |
| **Deliverable** | `docs/ASSET_MANIFEST.md` | Included in repo |
| **Deliverable** | `docs/QA_CHECKLIST.md` | Included in repo |
| **Deliverable** | `docs/KNOWN_GAPS.md` | Included in repo |
| **Deliverable** | `docs/CLIENT_CONFIRMATION_QUESTIONS.md` | Included in repo |
| **Deliverable** | `docs/CHANGELOG.md` | Included in repo |
| **Deliverable** | `docs/BUILD_NOTES.md` | Included in repo |
| **Deliverable** | `docs/ROADMAP.md` | Included in repo |
| **Deliverable** | `docs/ACQUISITION_READINESS.md` | Included in repo |
| **Deliverable** | `docs/OPERATING_SYSTEM.md` | Included in repo |
| **Deliverable** | `docs/evidence/` (all 11 evidence files) | Included in repo |
| **Deliverable** | `docs/evidence/source-artifacts/` (audit addendum, location matrix) | Included in repo |
| **Deliverable** | All React components, schema graph, data model, and page architecture | Included in repo |
| **Deliverable** | All CDN-hosted assets (images, review cards) | Accessible via Manus CDN URLs |
| **Internal Method** | Prompt chains and agent instruction sets | Not transferred unless separately agreed |
| **Internal Method** | Proprietary agent skills (research, browser QA, build, documentation) | Not transferred unless separately agreed |
| **Internal Method** | Orchestration logic and multi-agent coordination methods | Not transferred unless separately agreed |
| **Internal Method** | Private operational rules and governance configurations | Not transferred unless separately agreed |
| **Internal Method** | Internal tool setup, API keys, and environment configuration | Not transferred unless separately agreed |
| **Internal Method** | Image generation prompts and visual asset generation methods | Not transferred unless separately agreed |

---

## 6. Why This Matters for Acquisition

A page prototype demonstrates what a location page could look like. An operating system demonstrates how one page becomes a location system — and how that system can scale across all 33+ verified locations without starting from scratch each time.

For a buyer or stakeholder evaluating this project, the operating system provides five specific forms of evidence that a prototype alone cannot provide.

**Repeatability.** The Ramsey page took significant effort to build because the architecture, schema pattern, component library, and documentation did not exist before. The Piscataway page will take a fraction of that effort because they do exist. The 31st location page will take the same effort as the second. This is not a claim — it is a documented architectural decision with a clear implementation path in `docs/ROADMAP.md`.

**Evidence-based decision-making.** Every build decision in this project traces to a specific evidence source. The `docs/evidence/10-decision-log.md` documents 12 major decisions with the evidence that drove each one, the alternatives considered, and the current status. A buyer can evaluate whether the decisions were sound without relying on the operating team's word.

**Documented risk and governance.** The `docs/KNOWN_GAPS.md` file catalogs every known discrepancy, unresolved data conflict, and pending confirmation. The `docs/CLIENT_CONFIRMATION_QUESTIONS.md` file documents 26 questions that require Bierman's answer before production deployment. These are not failures — they are evidence that the operating model flags unknowns instead of hiding them.

**Scalable implementation pattern.** The `DATA_MODEL.md` TypeScript interface, the `LOCATION` constant architecture, and the schema generation pattern are designed to be location-agnostic. Any of the 33+ verified GBP locations can be built by populating the data model and running the same build workflow. The operating system documents how that workflow operates.

**Separation of deliverables from methods.** A buyer who acquires the repo acquires the documentation, architecture, schema strategy, data model, evidence trail, and implementation pattern. They do not automatically acquire the internal agent skills, prompt chains, or orchestration methods that produced them. This distinction is documented explicitly in Section 5 of this document and is relevant to any IP or methodology discussion in an acquisition context.

---

## 7. Scaling Model

The same operating model that produced the Ramsey proof layer applies directly to every subsequent location. The scaling model is not theoretical — it is the documented implementation path in `docs/ROADMAP.md`, informed by the SEO Business Impact Audit and the 33-location GBP analysis.

**Piscataway (Phase 2):** 9 variable swaps from the Ramsey template. Same schema architecture, same component library, same review card system, same data model. The only new work is confirming the 3 critical data items (phone, address, clinical staff) and generating 6 Piscataway-specific review cards. Estimated build time: significantly less than Ramsey.

**New Jersey cluster (Phase 3):** 8–12 NJ locations built using the same template. New work required: state-level hub page (`/locations/new-jersey/`), NJ-specific FAQ content based on GSC data, and internal linking between NJ location pages. The operating model handles all of this using the same workflows documented in Section 3.

**All 33+ verified GBP locations (Phase 4):** Each location is a data-model population exercise. The Location Matrix (Matrix v3) drives the build. Locations with unresolved discrepancies (Avon/Avondale, Brooklyn Park, Broad Ripple) are held until their confirmation flags are resolved. The operating model's approval gates prevent any unconfirmed location from being built.

**Review-gap locations:** The audit identified several high-visibility profiles with near-zero review counts (West Orange: 758 interactions, 1 review; Princeton: 737 interactions, 3 reviews). The Review Evidence Workflow (I) and the review generation process documented in `REVIEW_STRATEGY.md` apply directly to these locations. The operating model includes an approval gate for review generation — no process is initiated without Bierman approval.

**Duplicate and special-case profiles:** The Broad Ripple duplicate GBP profile and the Avon/Avondale ambiguity are documented in `KNOWN_GAPS.md`. The operating model's source-of-truth governance rules prevent schema from being built for unresolved profiles. Resolution requires Bierman confirmation, after which the standard build workflow applies.

**Service/location hub pages (Phase 5):** The same schema architecture that powers location pages also powers service-level hub pages. The `Service` nodes already present in the Ramsey schema graph are the foundation for `/services/aba-therapy/`, `/services/speech-language-therapy/`, and other service hub pages. The operating model handles this as a content architecture extension, not a new build from scratch.

**Caregiver education routing (Phase 6):** The caregiver education bridge section on the Ramsey page is the foundation for a full topic cluster architecture. Resource pages (`/resources/what-is-aba-therapy/`, `/resources/insurance-guide/`) connect to location pages via internal links. The operating model handles this as an internal linking and content architecture task, using the same evidence-to-decision mapping and approval gate structure.

---

## 8. Scaling Summary

| Scale Target | Operating Model Component | Approval Gate | Status |
|---|---|---|---|
| Piscataway | Location Matrix Workflow + Build Workflow | Phone/address confirmation | Pending |
| New Jersey cluster | Location Matrix + Build + Schema Validation | All NJ data confirmed | Planned |
| All 33+ locations | Location Matrix + Build + Schema Validation | Per-location confirmation | Planned |
| Review-gap locations | Review Evidence Workflow | Review generation process approved | Pending |
| Duplicate/special-case profiles | Source-of-Truth Builder + KNOWN_GAPS governance | Bierman confirmation | Pending |
| Service/location hubs | Schema Validation + Build Workflow | Phase 4 complete | Planned |
| Caregiver education routing | Source-of-Truth Builder + Build Workflow | Phase 5 complete | Planned |
