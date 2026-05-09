# Roadmap
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026

---

## Overview

The proof layer roadmap is structured in 8 phases, moving from the Ramsey master proof to a full-network deployment. Each phase has a clear scope, decision point, and prerequisite. No phase should begin without completing the prerequisites of the previous phase.

Phases 1–4 are implementation phases (building pages). Phases 5–6 are content architecture phases (building the topic cluster). Phases 7–8 are strategic decision phases that require explicit Bierman approval.

---

## Phase 1 — Ramsey Master Proof

**Status:** Active  
**Scope:** Build and validate the Ramsey, NJ location page as the master template for all future location pages.

The Ramsey page establishes the architecture: page structure, schema graph, data model, GBP alignment strategy, review module, clinical leadership section, directions section, education bridge, and FAQ. Every subsequent location page is a data swap of this template.

**Completion criteria:**
- Rich Results Test: 13 items detected, 0 invalid
- Schema Markup Validator: no critical errors
- All documentation files complete and committed
- Bierman confirmation questions sent and tracked

**Current state:** Page complete. Schema fixes applied (v16, v17). Rich Results Test rerun needed to confirm 13 valid / 0 invalid. Documentation complete.

---

## Phase 2 — Piscataway, NJ

**Status:** Pending  
**Prerequisite:** Ramsey phone number confirmed; Piscataway phone and address confirmed  
**Scope:** Build the Piscataway, NJ location page using the Ramsey template.

Piscataway is the second NJ location and the first replication of the Ramsey template. It validates that the data model and schema architecture are truly location-agnostic. The 9 variable swaps required are: location name, address, city, county, phone, GBP URL, map embed URL, YouTube video ID, and nearby locations.

**Decision point:** If Piscataway replication takes more than 4 hours of build time, the template is not sufficiently abstracted. Refactor before proceeding to Phase 3.

---

## Phase 3 — New Jersey Cluster

**Status:** Planned  
**Prerequisite:** Phase 2 complete; all NJ location data confirmed  
**Scope:** Build all remaining New Jersey location pages.

New Jersey is Bierman's largest state cluster. Building all NJ locations creates a complete state-level content cluster that supports internal linking, state-level hub pages, and "ABA therapy in New Jersey" query coverage.

**Estimated locations:** 8–12 NJ locations (pending matrix confirmation)

**New work required in this phase:**
- State-level hub page: `/locations/new-jersey/`
- Internal linking between NJ location pages
- NJ-specific FAQ content based on GSC data

---

## Phase 4 — All 33+ Verified GBP Locations

**Status:** Planned  
**Prerequisite:** Phase 3 complete; all location data confirmed (phone, address, hours, insurance)  
**Scope:** Build location pages for all 33+ verified GBP locations across all states.

This phase requires confirmed data for every location. The matrix must be complete and all `confirmation_flags` resolved before this phase begins. Locations with unresolved discrepancies (Avon/Avondale, Brooklyn Park, Broad Ripple) must be resolved before their pages are built.

**New work required in this phase:**
- State-level hub pages for each state
- State-specific FAQ content
- Cross-state internal linking strategy

---

## Phase 5 — Service-to-Location Hub Pages

**Status:** Planned  
**Prerequisite:** Phase 4 complete  
**Scope:** Build service-level hub pages that aggregate all locations offering a specific service.

Examples:
- `/services/aba-therapy/` — all Bierman locations offering ABA therapy
- `/services/speech-language-therapy/` — all Bierman locations offering SLT
- `/services/diagnostic-evaluation/` — all Bierman locations offering diagnostic evaluations

These pages create a service-location matrix that supports "ABA therapy near [city]" queries at scale. They also provide strong internal linking targets for location pages.

---

## Phase 6 — Caregiver / Resource Internal Linking

**Status:** Planned  
**Prerequisite:** Phase 5 complete  
**Scope:** Build caregiver resource pages and connect them to location pages via internal links.

Examples:
- `/resources/what-is-aba-therapy/` → links to all location pages
- `/resources/insurance-guide/` → links to insurance section on location pages
- `/resources/what-to-expect/` → links to intake CTA on location pages

This creates a full topic cluster architecture where resource pages support location page authority and location pages support resource page relevance.

---

## Phase 7 — Optional Pilot Subdomain Mapping

**Status:** Pending Bierman decision  
**Prerequisite:** Phase 2 complete; Bierman approval for pilot subdomain  
**Scope:** Deploy 2 location pages (Ramsey + Piscataway) to `pilot.biermanautism.com` for live testing.

The pilot subdomain allows:
- Live testing of the new architecture without touching production
- GSC comparison between pilot and production performance
- Bierman team review of the new architecture in a live environment
- Gradual rollout validation before full network deployment

**Decision point:** Bierman must approve the pilot subdomain and provide DNS access. This phase cannot proceed without explicit approval.

---

## Phase 8 — Optional Production Migration Planning

**Status:** Pending Bierman decision  
**Prerequisite:** Phase 7 complete; pilot performance data available; Bierman approval  
**Scope:** Plan and execute the migration of biermanautism.com location pages to the new URL structure and architecture.

This phase includes:
- Redirect mapping for all existing location URLs
- GSC verification of redirect implementation
- GBP website URL updates
- Internal link audit and update
- Sitemap update
- Canonical tag update
- Agency coordination for CMS migration

**Decision point:** This phase requires explicit Bierman approval, agency coordination, and a confirmed implementation timeline. It should not be initiated without a full stakeholder review of the pilot performance data.

---

## Roadmap Summary

| Phase | Scope | Status | Prerequisite |
|---|---|---|---|
| 1 | Ramsey master proof | Active | — |
| 2 | Piscataway, NJ | Pending | Phone/address confirmed |
| 3 | New Jersey cluster | Planned | Phase 2 complete |
| 4 | All 33+ verified locations | Planned | Phase 3 complete |
| 5 | Service-to-location hub pages | Planned | Phase 4 complete |
| 6 | Caregiver/resource internal linking | Planned | Phase 5 complete |
| 7 | Pilot subdomain mapping | Pending Bierman decision | Phase 2 + approval |
| 8 | Production migration planning | Pending Bierman decision | Phase 7 + pilot data |
