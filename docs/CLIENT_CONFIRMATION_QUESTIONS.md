# Client Confirmation Questions
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Audience:** Bierman Autism Centers team (marketing, operations, clinical leadership)

---

## How to Use This Document

This document contains all questions that require Bierman's direct confirmation before the proof layer architecture can be deployed to production. Questions are grouped by category and prioritized by impact.

**Priority levels:**
- 🔴 **Critical** — blocks production deployment for the affected location
- 🟡 **High** — affects multiple locations or significant content accuracy
- 🟢 **Standard** — important but not blocking

---

## 1. Phone Numbers (Critical)

🔴 **What is the canonical phone number for the Ramsey, NJ location?**

Three conflicting values appear across source documents: `(201) 596-8104`, `(201) 308-3735`, and `(201) 928-5245`. Please confirm the correct number by checking the GBP profile or calling the front desk.

---

🔴 **What is the canonical phone number for the Piscataway, NJ location?**

Two conflicting values appear: `(732) 426-5470` and `(732) 479-7225`. Please confirm.

---

🟡 **For each location in the network, what is the canonical phone number?**

The location matrix requires a confirmed phone number for every location before a page can be built. Please provide or confirm the phone number for each location, or confirm that the GBP profile phone number is canonical for all locations.

---

## 2. Location Count and Status (High)

🟡 **What is the canonical client-facing location count — 32 or 33?**

The matrix contains 33 verified GBP profiles, but there is uncertainty about the client-facing number. Please confirm the correct count for use on the website and in marketing materials.

---

🟡 **Is the location listed as "Avon" or "Avondale" — and in which state?**

These are different cities in different states. Please confirm the correct city name and state for this location, and check the GBP profile to confirm.

---

🟡 **What is the current status of the Brooklyn Park location?**

Is this location active, planned, or closed? Please confirm before a page is built for this location.

---

🟡 **What is the status of the Broad Ripple (Indianapolis area) location?**

There appear to be duplicate GBP profiles for this location. Please confirm which profile is the canonical one, and consider marking the duplicate as such in Google Business Profile.

---

## 3. Address Confirmation (Critical)

🔴 **What is the correct street address for the Piscataway, NJ location?**

Two conflicting values appear: `200 Centennial Ave` and `280 Centennial Ave`. Please confirm the correct address.

---

## 4. Content Usage Approval (High)

🟡 **Is it approved to display team headshots (Hillary Genovese, Victoria Verdun) on the proof layer and on production location pages?**

Employee image usage requires consent. Please confirm that both team members have consented to their headshots being used on the website.

---

🟡 **Is it approved to use the Ramsey ABA therapy overview video on the proof layer and on production location pages?**

Please confirm that the video content is approved for website use and that there are no licensing or content restrictions.

---

🟡 **Is it approved to display public GBP reviews on the proof layer and on production location pages?**

The 6 reviews displayed are public GBP reviews. Please review the selected reviews and confirm that their display on the website is approved. If any review should be excluded, please indicate which one.

---

## 5. Insurance (High)

🟡 **What insurance plans are accepted at the Ramsey, NJ location?**

The proof layer currently displays: Aetna, Cigna, United Healthcare, Horizon BCBS NJ, AmeriHealth NJ, Oxford Health, Tricare, Medicaid NJ, and Magellan Health. Please confirm this list is accurate and complete.

---

🟡 **Does the accepted insurance list vary by location?**

If insurance acceptance varies by location, please provide the correct list for each location, or confirm that the Ramsey list applies to all locations.

---

## 6. Hours (Standard)

🟢 **What are the current operating hours for the Ramsey, NJ location?**

The proof layer currently displays Mon–Fri 8am–6pm, Sat–Sun closed. Please confirm these hours are current and accurate.

---

🟢 **Do operating hours vary by location?**

If hours vary by location, please provide the correct hours for each location, or confirm that all locations use the same hours.

---

## 7. Clinical Leadership (Standard)

🟢 **Are Hillary Genovese and Victoria Verdun the current clinical leaders at the Ramsey location?**

Please confirm their names, titles, and credentials are current and accurate.

---

🟢 **Should clinical leader profiles be featured on all location pages, or only selected locations?**

The proof layer features 2 BCBA profiles on the Ramsey page. Please confirm whether this approach should be applied to all locations.

---

## 8. Pilot Subdomain (Standard)

🟢 **Is there interest in deploying the proof layer to a pilot subdomain (`pilot.biermanautism.com`) for live testing?**

A pilot subdomain would allow live testing of the new architecture without affecting production. This requires DNS access to create the subdomain. Please confirm if this is of interest.

---

🟢 **If a pilot subdomain is approved, what is the DNS process?**

Who manages DNS for biermanautism.com, and what is the approval process for creating a new subdomain?

---

## 9. Caregiver Training / Resources (Standard)

🟢 **Should caregiver training resources be featured on location pages?**

The proof layer includes a caregiver education bridge section. Please confirm whether this content is appropriate for location pages and whether there are specific resources Bierman would like to feature.

---

## 10. Future Production Migration (Standard)

🟢 **Is there interest in migrating the location page architecture to the new URL structure (`/locations/{state}/{city}/`) in the future?**

This would require a planned redirect strategy and coordination with the current agency. Please confirm if this is a direction Bierman would like to explore.

---

## 11. Attribution and Tracking (High — Audit-Informed)

🟡 **Are the phone numbers on GBP profiles CallRail tracked numbers or direct lines?**

The SEO Business Impact Audit identified a 6,419-call gap between CallRail and HubSpot. If GBP phone numbers are direct lines (not CallRail numbers), calls from GBP are not tracked. Please confirm whether the GBP phone numbers for Ramsey and Piscataway are CallRail tracked numbers.

---

🟡 **Can we add location-specific UTM parameters to the GBP website links for Ramsey and Piscataway?**

Currently, clicks from GBP to the website are not attributable to a specific location in GA4. Adding `?utm_source=gbp&utm_medium=local&utm_campaign={location-slug}` to the GBP website link would enable center-level attribution. This requires GBP edit access. Please confirm approval and provide GBP access if approved.

---

🟡 **Can we add the intake form URL as the appointment URL on the Ramsey and Piscataway GBP profiles?**

Most GBP profiles do not have an appointment URL set. Adding the intake form URL as the appointment URL creates a direct conversion path for caregivers who find the profile. This requires GBP edit access. Please confirm approval.

---

🟡 **Is there an approved process for systematically requesting Google reviews from families at the pilot locations?**

Several high-visibility GBP profiles have very few reviews relative to their interaction volume. A systematic, policy-compliant review generation process (no incentivized reviews, no review gating) could significantly improve local visibility and conversion. Please confirm whether Bierman has an approved process, or whether one needs to be developed.

---

🟡 **Can we get access to GTM and GA4 to implement location-specific event tracking for the pilot?**

The data-layer event taxonomy in `DATA_LAYER_SPEC.md` requires GTM implementation to produce center-level outcome data from the pilot. Without this, the pilot cannot measure whether the new architecture improves inquiry rates at the location level. Please confirm who manages GTM/GA4 and what the access process is.

---

## Summary Table

| # | Question | Priority | Status |
|---|---|---|---|
| 1 | Ramsey canonical phone | 🔴 Critical | Unresolved |
| 2 | Piscataway canonical phone | 🔴 Critical | Unresolved |
| 3 | Piscataway address | 🔴 Critical | Unresolved |
| 4 | Network phone confirmation | 🟡 High | Unresolved |
| 5 | Location count (32 vs 33) | 🟡 High | Unresolved |
| 6 | Avon vs Avondale | 🟡 High | Unresolved |
| 7 | Brooklyn Park status | 🟡 High | Unresolved |
| 8 | Broad Ripple duplicate GBP | 🟡 High | Unresolved |
| 9 | Team headshot approval | 🟡 High | Pending |
| 10 | Video usage approval | 🟡 High | Pending |
| 11 | Review usage approval | 🟡 High | Pending |
| 12 | Ramsey insurance list | 🟡 High | Unresolved |
| 13 | Insurance varies by location | 🟡 High | Unresolved |
| 14 | GBP phones — CallRail tracked? | 🟡 High | Unresolved |
| 15 | GBP UTM parameters approval | 🟡 High | Unresolved |
| 16 | GBP appointment URL approval | 🟡 High | Unresolved |
| 17 | Review generation process | 🟡 High | Unresolved |
| 18 | GTM/GA4 access for pilot | 🟡 High | Unresolved |
| 19 | Ramsey hours | 🟢 Standard | Unresolved |
| 20 | Hours vary by location | 🟢 Standard | Unresolved |
| 21 | Clinical leaders current | 🟢 Standard | Unresolved |
| 22 | Clinical leaders on all pages | 🟢 Standard | Unresolved |
| 23 | Pilot subdomain interest | 🟢 Standard | Pending |
| 24 | DNS process for pilot | 🟢 Standard | Pending |
| 25 | Caregiver resources on pages | 🟢 Standard | Unresolved |
| 26 | Future migration interest | 🟢 Standard | Pending |
