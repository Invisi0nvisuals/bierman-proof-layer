# GBP Findings
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Source:** GBP Manager screenshot; public GBP profile review for Ramsey and Piscataway; GBP review exports.  
**Confidence:** High for profile count and review content (directly observable); Medium for NAP alignment (some fields unconfirmed).

---

## Overview

Google Business Profile (GBP) is the most important local SEO asset for a multi-location healthcare provider. It is the source of truth for NAP data, the primary review platform for caregivers, and the mechanism through which Google confirms that a business entity is real, verified, and locally operating. Every decision in the proof layer's local SEO architecture traces back to GBP alignment.

---

## GBP Manager: 33 Verified Profiles Confirmed

A GBP Manager screenshot confirmed 33 verified GBP profiles across the Bierman Autism Centers network. This is the authoritative count used in the Location Matrix v3. "Verified" means each profile has been claimed and verified by the business owner through Google's verification process — either by phone, postcard, or video verification.

Verified profiles are eligible for local pack rankings, GBP review collection, GBP photo uploads, and GBP local action tracking (calls, directions, website clicks). Unverified profiles are not eligible for these features and do not contribute to local rankings.

The 33 verified profiles represent the maximum scope of the location page build. No page should be built for a location that does not have a verified GBP profile.

---

## GBP NAP Findings

NAP (Name, Address, Phone) consistency between the website and GBP is a documented local ranking signal. Google uses NAP consistency to confirm that the schema entity on the website corresponds to the verified GBP profile. Inconsistencies create entity ambiguity that can suppress local pack rankings.

The proof layer treats the GBP profile as the authoritative NAP source. All location page content is sourced from or cross-referenced against the GBP profile. Known NAP discrepancies are documented in the Location Matrix and flagged for client confirmation.

**Ramsey NAP status:**

| Field | Proof Layer Value | GBP Confirmed? |
|---|---|---|
| Name | Bierman Autism Centers — Ramsey | ✅ Matches GBP |
| Address | 500 N Franklin Tpke, Ste 203, Ramsey, NJ 07446 | ✅ Matches GBP |
| Phone | (201) 596-8104 | ⚠️ Discrepancy — 3 conflicting values |
| Hours | Mon–Fri 8am–6pm | ⚠️ Not yet confirmed against GBP |
| Category | MedicalClinic / Healthcare | ✅ Consistent with GBP primary category |

**Piscataway NAP status:**

| Field | Value A | Value B | GBP Confirmed? |
|---|---|---|---|
| Address | 200 Centennial Ave | 280 Centennial Ave | ⚠️ Discrepancy |
| Phone | (732) 426-5470 | (732) 479-7225 | ⚠️ Discrepancy |

---

## GBP Review Findings

The Ramsey GBP profile has multiple public 5-star reviews. Six reviews were selected for display on the proof layer page:

| Reviewer | Rating | Key Theme |
|---|---|---|
| Ambar Arias | 5★ | Long-term positive outcomes; would give 10 stars |
| Sohayb Stiti | 5★ | Professional team; highly recommended |
| Kim Sedlacek | 5★ | Positive experience; caring staff |
| Margarita Morales | 5★ | Excellent care; strong recommendation |
| Anthony Siciliano | 5★ | Helpful and supportive team |
| Nancy Passano | 5★ | Fun family event (Reptile Encounter); welcoming environment |

All 6 reviews are publicly visible on Google Maps. They were selected to represent a range of themes (clinical outcomes, staff quality, family events, general experience) without featuring reviews that contain specific clinical details about a child's diagnosis or treatment progress.

The review selection was intentionally conservative. Several reviews in the Ramsey GBP profile contain more detailed clinical language. Those were not selected for the proof layer because they raise content sensitivity questions that require Bierman's review before production deployment.

---

## GBP Directions / Local Action Findings

GBP profiles track three primary local actions: calls (phone number clicks), direction requests (Google Maps directions clicks), and website clicks. These are the signals Google uses to measure local engagement and inform local pack rankings.

The current biermanautism.com location pages do not have a directions module. This means the "get directions" local action is only captured at the GBP level, not at the website level. A caregiver who wants directions must leave the website and go to Google Maps.

The proof layer addresses this by embedding a Google Maps iframe and providing driving directions from 4 nearby areas (Mahwah, Ridgewood, Paramus, Hackensack). The `hasMap` schema property links the LocalBusiness entity to the GBP profile map URL, creating an explicit connection between the website entity and the GBP map presence.

---

## Why GBP Alignment Matters for Local SEO and AEO

For a multi-location healthcare provider, GBP alignment is not optional — it is the foundation of local visibility. Google's local ranking algorithm uses three primary factors: relevance (does the business match the query?), distance (how close is the business to the searcher?), and prominence (how well-known and trusted is the business?).

GBP alignment affects all three factors. A well-optimized, NAP-consistent GBP profile with verified reviews signals relevance (through category and service area), distance (through verified address and coordinates), and prominence (through review count, rating, and local action volume).

For answer engines (Google AI Overviews, Perplexity, ChatGPT), GBP alignment matters because these systems use the knowledge graph to identify and describe local businesses. A business with a verified GBP profile, consistent NAP across web properties, and structured schema data is more likely to be accurately represented in AI-generated answers.

---

## What Still Needs Client Confirmation

| Item | Status | Blocking? |
|---|---|---|
| Ramsey canonical phone number | ⚠️ 3 conflicting values | Yes — blocks Piscataway build |
| Piscataway canonical phone and address | ⚠️ 2 conflicting values each | Yes — blocks Piscataway page build |
| Ramsey operating hours | ⚠️ Not confirmed against GBP | No — low risk |
| GBP photo ownership | ⚠️ Not confirmed | No — affects asset usage |
| Review usage approval | ⚠️ Pending | No — affects production deployment |
| Broad Ripple canonical GBP profile | ⚠️ Duplicate detected | No — blocks Broad Ripple page only |
