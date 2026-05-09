# Known Gaps
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026

---

## Overview

This document catalogs all known gaps, discrepancies, pending confirmations, and open issues in the proof layer system. Items are categorized by type and include a resolution path and current status.

Nothing in this document is a blocker for the proof layer itself — the proof layer is a demonstration environment. These items are blockers for production deployment and must be resolved before any location page goes live on biermanautism.com.

---

## Schema Issues

### Review Schema — `itemReviewed` (Historical)

**Issue:** All 6 Review nodes were missing `itemReviewed`, causing the "critical issue" flag in Rich Results Test.  
**Status:** Fixed in v16. `itemReviewed` was already present; `reviewBody` was the missing field.  
**Resolution:** `reviewBody` added to all 6 Review nodes in v16. Microdata attributes stripped from `GBPReviewCard` in v17 to eliminate duplicate invalid Review nodes.  
**Retest needed:** Yes — Rich Results Test rerun needed to confirm 13 valid / 0 invalid.

---

## Phone Discrepancies

### Ramsey Phone Number

**Issue:** Three conflicting phone values appear across source documents:
- `(201) 596-8104` — proof layer (current)
- `(201) 308-3735` — GBP review report
- `(201) 928-5245` — directions report

**Impact:** High. The phone number appears in the nav, hero, footer, schema, and GBP alignment. An incorrect phone number creates a NAP inconsistency that suppresses local rankings.  
**Resolution:** Bierman to call the Ramsey front desk or check the GBP profile directly to confirm the canonical number.  
**Status:** Unresolved. Blocking Piscataway build start.

### Piscataway Phone Number

**Issue:** Two conflicting phone values:
- `(732) 426-5470`
- `(732) 479-7225`

**Impact:** High. Same as Ramsey.  
**Resolution:** Bierman to confirm.  
**Status:** Unresolved. Blocking Piscataway page build.

---

## Location Count Uncertainty

### 32 vs. 33 Locations

**Issue:** The matrix contains 33 verified GBP profiles, but there is uncertainty about whether the client-facing count is 32 or 33.  
**Impact:** Medium. Affects the "All Locations" page count and any marketing materials that cite the location count.  
**Resolution:** Bierman to confirm the canonical client-facing location count.  
**Status:** Unresolved.

---

## Location Name / Status Issues

### Avon vs. Avondale

**Issue:** A location entry appears as both "Avon" and "Avondale" in different source documents. These are different cities in different states.  
**Impact:** High. Building a page for the wrong city/state would create a significant NAP error.  
**Resolution:** Bierman to confirm the correct city name and state. Check the GBP profile directly.  
**Status:** Unresolved. Do not build a page for this location until confirmed.

### Brooklyn Park

**Issue:** The Brooklyn Park location has an uncertain status — active, planned, or closed.  
**Impact:** Medium. If the location is closed or not yet open, it should not have a page.  
**Resolution:** Bierman to confirm the status of the Brooklyn Park location.  
**Status:** Unresolved. Do not build a page for this location until confirmed.

### Broad Ripple Duplicate GBP Profiles

**Issue:** The Broad Ripple location (Indianapolis area) appears to have duplicate GBP profiles.  
**Impact:** High. Duplicate profiles split review equity, create NAP inconsistency, and can suppress rankings.  
**Resolution:** Bierman to identify the canonical GBP profile and mark the duplicate as such in Google Business Profile.  
**Status:** Unresolved. Do not create schema for both profiles.

---

## Piscataway Address Discrepancy

**Issue:** Two conflicting address values for Piscataway:
- `200 Centennial Ave`
- `280 Centennial Ave`

**Impact:** High. An incorrect address creates a NAP error and could send caregivers to the wrong location.  
**Resolution:** Bierman to confirm the correct address. Check the GBP profile directly.  
**Status:** Unresolved. Blocking Piscataway page build.

---

## Approval-Pending Items

### Team Image Approval

**Issue:** Team headshots for Hillary Genovese and Victoria Verdun are used in the proof layer but have not received explicit Bierman approval.  
**Impact:** Medium. Employee image usage requires consent. Cannot deploy to production without approval.  
**Resolution:** Bierman to confirm that headshot usage is approved for the proof layer and for production.  
**Status:** Pending.

### Video Usage Approval

**Issue:** The Ramsey ABA therapy overview video is embedded in the proof layer but has not received explicit Bierman approval.  
**Impact:** Medium. Video content usage rights need confirmation.  
**Resolution:** Bierman to confirm that video usage is approved.  
**Status:** Pending.

### Review Usage Approval

**Issue:** 6 public GBP reviews are displayed in the proof layer but have not received explicit Bierman approval.  
**Impact:** Low-Medium. Reviews are public; usage is standard practice. Bierman may have preferences about which reviews are featured.  
**Resolution:** Bierman to confirm that review usage is approved and to review the selected reviews.  
**Status:** Pending.

---

## Data Confirmation Gaps

### Insurance Plans by Location

**Issue:** The proof layer displays 9 insurance plans for Ramsey, but the accepted insurance list has not been confirmed by Bierman.  
**Impact:** High. Displaying incorrect insurance information could mislead caregivers.  
**Resolution:** Bierman to confirm the accepted insurance plans for Ramsey and for each location.  
**Status:** Unresolved.

### Hours Confirmation

**Issue:** The proof layer displays Mon–Fri 8am–6pm, Sat–Sun closed for Ramsey. This has not been confirmed against the current GBP profile.  
**Impact:** Medium. Incorrect hours could mislead caregivers.  
**Resolution:** Bierman to confirm current operating hours for Ramsey.  
**Status:** Unresolved.

### Geo / Map Confirmation

**Issue:** The map embed and `GeoCoordinates` values are based on Google Maps data but have not been confirmed by Bierman.  
**Impact:** Low. Google Maps data is generally accurate for verified GBP locations.  
**Resolution:** Bierman to confirm the map embed shows the correct location.  
**Status:** Unresolved (low priority).

---

## Social Preview

### Facebook Sharing Debugger 403

**Issue:** The Meta Sharing Debugger returns a 403 when scraping `bierman-proof-layer.manus.space`. This is caused by the Manus CDN infrastructure blocking the `facebookexternalhit` user agent.  
**Impact:** Low. The OG tags are correct in the HTML. The 403 is a Manus CDN infrastructure issue, not an OG tag problem. Resolves automatically on custom domain deployment.  
**Resolution:** Deploy to a custom domain (e.g., `pilot.biermanautism.com`) to resolve. Not fixable in the proof layer environment.  
**Status:** Partially addressed (robots.txt updated in v18). Full resolution requires custom domain.

---

## Clean Preview / Public Crawl Strategy

**Issue:** The proof layer is currently set to `index, follow` for Rich Results Test validation. This means Google could theoretically crawl and index the page. However, the noindex/nofollow banner and safety guardrails are in place.  
**Impact:** Low. The proof layer URL is not linked from any production page and is not in the biermanautism.com sitemap.  
**Resolution:** Confirm with Bierman whether the proof layer should be publicly crawlable for validation purposes or switched back to noindex after Rich Results Test is complete.  
**Status:** Pending Bierman decision.

---

## Audit-Informed Gaps (Added May 2026)

The SEO Business Impact Audit and HubSpot/CallRail Attribution Addendum identified the following gaps that are not currently documented in the proof layer but are directly relevant to the pilot and production deployment.

### CallRail → HubSpot Real-Time Integration Gap

**Issue:** The audit identified a 6,419-call gap between CallRail (21,089 calls tracked) and HubSpot-tagged contacts (7,085 with phone attribution). The retroactive reconciliation of 326 active clients demonstrates that the gap is real and material.  
**Impact:** High. Center-level outcome tracking is not possible without a reliable real-time integration. A buyer evaluating marketing ROI will undercount the contribution of local search and GBP.  
**Resolution:** Bierman/agency to audit the GTM → CallRail → HubSpot pipeline and implement real-time field mapping before the pilot measurement phase begins.  
**Status:** Unresolved. Requires CRM and CallRail access.

---

### GBP Website Links Lack Location-Specific UTM Parameters

**Issue:** GBP website links for all locations point to the biermanautism.com homepage or a generic location URL without UTM parameters. Clicks from GBP to the website are not attributable to a specific location in GA4.  
**Impact:** High. Without UTMs, GBP-driven website traffic is reported as "direct" or "organic" in GA4, not as "local" or "gbp." Center-level attribution is impossible.  
**Resolution:** Add `?utm_source=gbp&utm_medium=local&utm_campaign={location-slug}` to the GBP website link for each location. Requires GBP edit access.  
**Status:** Unresolved. Requires Bierman approval and GBP edit access.

---

### Appointment URLs Absent from GBP Profiles

**Issue:** Most GBP profiles do not have an appointment URL set. This means the GBP profile does not provide a direct path to the intake form — a missed conversion opportunity for caregivers who find the profile but do not click through to the website.  
**Impact:** Medium-High. GBP appointment URLs are a direct conversion surface. Their absence means demand that resolves at the GBP level never enters the intake funnel.  
**Resolution:** Add the intake form URL as the GBP appointment URL for each location. Requires GBP edit access.  
**Status:** Unresolved. Requires Bierman approval and GBP edit access.

---

### GBP Phone Numbers Not Confirmed as CallRail Tracked Numbers

**Issue:** It is not confirmed whether the phone numbers on GBP profiles are CallRail tracked numbers or direct lines. If they are direct lines, calls from GBP are not tracked in CallRail and do not appear in HubSpot.  
**Impact:** High. If GBP phones are not CallRail numbers, the 6,419-call gap is partially explained by untracked GBP calls. This is a measurement gap, not just an attribution gap.  
**Resolution:** Bierman/agency to confirm whether GBP phone numbers are CallRail tracked numbers for Ramsey and Piscataway. If not, evaluate whether to replace with CallRail numbers.  
**Status:** Unresolved. Requires CallRail account access.

---

### Review Generation Process Not Systematized

**Issue:** Several high-visibility GBP profiles have near-zero review counts relative to their interaction volume (West Orange: 758 interactions, 1 review; Princeton: 737 interactions, 3 reviews). There is no documented systematic review generation process.  
**Impact:** High. Review depth is a local ranking signal and a conversion trust signal. The gap between interaction volume and review count suggests that demand exists but is not being captured.  
**Resolution:** Bierman to approve and implement a systematic review generation process for the pilot locations. The process must comply with Google's review policies (no incentivized reviews, no review gating).  
**Status:** Unresolved. Requires Bierman approval of the review generation process.

---

### Center-Level Outcome Tracking Not Possible

**Issue:** The CRM data is aggregate. Bierman cannot currently answer: "How many new patients started at Ramsey in the last 12 months as a result of organic search?" The data-layer event taxonomy in `DATA_LAYER_SPEC.md` is designed to address this, but it has not been implemented.  
**Impact:** High. Without center-level outcome tracking, the pilot cannot produce the measurement data needed to justify Phase 3+ investment.  
**Resolution:** Implement the data-layer event taxonomy in GTM for the pilot locations before the pilot measurement phase begins. Requires GTM and GA4 access.  
**Status:** Unresolved. Requires Bierman/agency GTM access and approval.
