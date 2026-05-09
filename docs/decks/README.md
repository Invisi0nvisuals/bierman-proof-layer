# /docs/decks — Deck Inventory and Outlines

**Last updated:** May 2026  
**Purpose:** This folder contains the existing Bierman presentation decks and outlines for three new decks that connect the proof layer, evidence trail, schema strategy, and acquisition-readiness materials into audience-specific presentations.

---

## Existing Decks

### 1. Bierman_Proposal_Deck_Final_v1.pdf

**File:** `Bierman_Proposal_Deck_Final_v1.pdf`  
**Prepared by:** Alex Rodriguez, MFGSEO LLC dba alexseo.co  
**Audience:** Bierman internal stakeholders — marketing, operations, executive leadership  
**Purpose:** The original proposal deck that reframed the audit from a technical SEO findings list to a business-impact system. Establishes the core thesis: *search is the acquisition engine, attribution is the governance gap.*

**Role in the repo:** This is the strategic foundation document. It is the "why we are doing this" deck — the one that explains to a Bierman stakeholder why the proof layer was built, why the pilot is Ramsey + Piscataway, and why the next phase is data governance rather than more traffic.

**Key slides:**

| Slide | Title | Core Claim |
|---|---|---|
| 02 | Executive Signal | Search is working. Attribution is breaking. |
| 03 | Original Audit Thesis | Technical warnings reframed to business impact |
| 04 | Search is the Acquisition Engine | GMB/Local: 221 active clients — highest of any channel |
| 05 | Attribution Blind Spot | GBP activity bypasses GA4 entirely |
| 06 | Review-to-Demand Risk Matrix | High visibility / low trust = conversion friction |
| 07 | Source-of-Truth Architecture | HubSpot can be the outcome source of truth |
| 08 | What Remains Unresolved | 5 gaps across the inquiry timeline |
| 09 | Pilot Operating Model | Ramsey + Piscataway: 4-phase controlled pilot |
| 10 | Decision Path | Three decisions. One clear sequence. |

**Connected repo docs:**
- [`docs/evidence/11-business-impact-audit-summary.md`](../evidence/11-business-impact-audit-summary.md)
- [`docs/GBP_ALIGNMENT_STRATEGY.md`](../GBP_ALIGNMENT_STRATEGY.md)
- [`docs/DATA_LAYER_SPEC.md`](../DATA_LAYER_SPEC.md)
- [`docs/ROADMAP.md`](../ROADMAP.md)
- [`docs/ACQUISITION_READINESS.md`](../ACQUISITION_READINESS.md)

---

### 2. Bierman_SEO_Attribution_System_Brief.pdf

**File:** `Bierman_SEO_Attribution_System_Brief.pdf`  
**Prepared by:** Alex Rodriguez, MFGSEO LLC dba alexseo.co  
**Audience:** Bierman executive leadership, potential acquisition stakeholders  
**Purpose:** A tighter, 10-slide intelligence brief version of the proposal deck. Same core thesis, more compressed. Designed for a 15-minute executive read or a pre-meeting leave-behind.

**Role in the repo:** This is the executive summary version of the proposal deck. It is the deck you send before a meeting, not the one you present in it. It establishes the three-decision sequence (Approve Addendum → Approve Pilot → Second-Wave Rollout) and explicitly closes the door on full site rebuild, URL restructure, and agency replacement as near-term paths.

**Key difference from the Proposal Deck:** The Intelligence Brief is more direct on the decision path. Slide 10 states: *"The system is already producing active clients. The goal is to govern and measure it better."* That framing is the brief's primary contribution.

**Connected repo docs:**
- [`docs/PRD.md`](../PRD.md)
- [`docs/evidence/04-gsc-query-findings.md`](../evidence/04-gsc-query-findings.md)
- [`docs/evidence/11-business-impact-audit-summary.md`](../evidence/11-business-impact-audit-summary.md)
- [`docs/CLIENT_CONFIRMATION_QUESTIONS.md`](../CLIENT_CONFIRMATION_QUESTIONS.md)

---

## New Deck Outlines

Three new deck outlines are documented below. Each outline is also available as a standalone Markdown file in this folder.

| Deck | File | Audience | Slides |
|---|---|---|---|
| Proof-Layer Demo Deck | [`DECK_01_PROOF_LAYER_DEMO.md`](DECK_01_PROOF_LAYER_DEMO.md) | Bierman marketing + ops team | 12 |
| Acquisition System Deck | [`DECK_02_ACQUISITION_SYSTEM.md`](DECK_02_ACQUISITION_SYSTEM.md) | Acquisition stakeholders / PE / strategic buyers | 14 |
| Technical Validation Deck | [`DECK_03_TECHNICAL_VALIDATION.md`](DECK_03_TECHNICAL_VALIDATION.md) | Agency, technical reviewers, GSC/GTM/GA4 team | 10 |

---

## How the Decks Relate to Each Other

```
Bierman_Proposal_Deck_Final_v1.pdf
  └── Strategic foundation: why this system, why now, why pilot-first
      └── DECK_01_PROOF_LAYER_DEMO.md
            └── Shows what was built: the Ramsey page, schema, reviews, GBP alignment
      └── DECK_02_ACQUISITION_SYSTEM.md
            └── Frames the system as acquisition-ready infrastructure
      └── DECK_03_TECHNICAL_VALIDATION.md
            └── Validates the technical claims: Rich Results, schema, tracking, privacy

Bierman_SEO_Attribution_System_Brief.pdf
  └── Executive summary: three decisions, one sequence
      └── All three new decks connect back to the brief's decision path
```

---

## Deck Usage Guide

| Situation | Recommended Deck |
|---|---|
| First meeting with Bierman marketing team | Proposal Deck (existing) |
| Pre-meeting executive leave-behind | Attribution System Brief (existing) |
| Showing Bierman what was actually built | Deck 01: Proof-Layer Demo |
| Acquisition due diligence conversation | Deck 02: Acquisition System |
| Agency or technical review meeting | Deck 03: Technical Validation |
| All three new decks reference | `docs/evidence/`, `docs/PRD.md`, `docs/SCHEMA_STRATEGY.md`, `docs/ACQUISITION_READINESS.md` |
