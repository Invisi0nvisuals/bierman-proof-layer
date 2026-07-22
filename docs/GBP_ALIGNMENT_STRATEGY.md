# GBP Alignment Strategy
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026

---

## Overview

Google Business Profile (GBP) alignment is the practice of ensuring that the data on a location page exactly matches the data on the corresponding GBP profile. NAP consistency (Name, Address, Phone) between the website and GBP is a documented local ranking signal. Inconsistencies create entity ambiguity that can suppress local pack rankings and reduce trust signals for answer engines.

The proof layer treats the GBP profile as the authoritative source for NAP data. All location page content is sourced from or cross-referenced against the GBP profile.

---

## How GBP Profile Data Maps to Page Content

| GBP Field | Page Element | Schema Node | Notes |
|---|---|---|---|
| Business name | Nav, H1, NAP card, footer | `LocalBusiness.name` | Must match exactly |
| Address | NAP card, footer | `PostalAddress` | Must match exactly, including suite |
| Phone | Nav CTA, hero CTA, footer | `LocalBusiness.telephone` | **Discrepancy exists for Ramsey** |
| Hours | Footer | `OpeningHoursSpecification` | Must match GBP hours |
| Website URL | (not displayed) | `LocalBusiness.url` | Points to production URL |
| GBP profile URL | Directions link | `LocalBusiness.hasMap` | Direct link to GBP profile |
| Coordinates | Map embed | `GeoCoordinates` | Derived from Google Maps |
| Category | (not displayed) | `LocalBusiness.@type` | Drives MedicalClinic co-type |
| Reviews | Review card grid | `Review` ×N | Public reviews only |
| Photos | Facility images | `ImageObject` | Requires Bierman approval |
| Service area | Hero badge, footer | `LocalBusiness.areaServed` | Derived from GBP service area |

---

## NAP Alignment

NAP alignment means the Name, Address, and Phone on the website must match the GBP profile character-for-character. This includes:

- **Name:** "Bierman Autism Centers — Ramsey" (not "Bierman Autism Center" or "Bierman ABA Ramsey")
- **Address:** "500 N Franklin Tpke, Ste 203, Ramsey, NJ 07446" (not "500 North Franklin Turnpike" or "500 N Franklin Tpke #203")
- **Phone:** The canonical phone number confirmed by Bierman (currently unconfirmed — see below)

Formatting matters. "Ste 203" vs "Suite 203" vs "#203" are technically different strings. The format used on the website should match the format used on the GBP profile.

---

## Phone Discrepancy Handling

The Ramsey location has three conflicting phone values across source documents:

| Value | Source | Confidence |
|---|---|---|
| `(201) 596-8104` | Proof layer (current) | Unconfirmed |
| `(201) 308-3735` | GBP review report | Unconfirmed |
| `(201) 928-5245` | Directions report | Unconfirmed |

**This is the highest-priority data confirmation needed before Piscataway build starts.**

The correct approach:
1. Call the Ramsey front desk to confirm the canonical phone number
2. Check the GBP profile directly (logged in as the GBP owner)
3. Update the proof layer `LOCATION` constant with the confirmed value
4. Update the schema `LocalBusiness.telephone` field
5. Document the confirmed value in the matrix with `phone_confidence: confirmed`

Do not guess. Do not use the most common value. Confirm with Bierman.

---

## Review Integration

GBP reviews are integrated into the location page as described in `REVIEW_STRATEGY.md`. The key GBP alignment considerations are:

1. **Review source attribution** — the "Posted on Google" badge on each review card attributes the review to Google, which is the GBP platform
2. **Review count alignment** — the `AggregateRating.reviewCount` must match the number of displayed review cards, not the total number of GBP reviews
3. **Rating alignment** — the `AggregateRating.ratingValue` must match the average of the displayed reviews, not the GBP overall rating

If the GBP profile has 47 reviews with a 4.8 average, but the page displays 6 reviews (all 5-star), the `AggregateRating` should reflect the 6 displayed reviews (5.0/6), not the GBP aggregate (4.8/47).

---

## Directions and Local Action Behavior

The directions section provides:
- An embedded Google Maps iframe centered on the Ramsey location
- Driving directions from major nearby areas (Mahwah, Ridgewood, Paramus, Hackensack)
- Transit information (NJ Transit bus routes)
- Parking information (surface lot, accessible spaces)
- A "Get Directions" link pointing to the GBP profile map URL

The `hasMap` schema property points to the GBP profile URL, which Google uses to associate the location entity with its map presence.

---

## Map / `hasMap` Strategy

The `hasMap` property in the `LocalBusiness`/`MedicalClinic` schema node points to the GBP profile URL:

```json
"hasMap": "https://www.google.com/maps/place/Bierman+Autism+Centers+Ramsey/..."
```

This creates an explicit link between the schema entity and the GBP map presence. It is one of the signals Google uses to verify that the schema entity corresponds to a real, verified GBP location.

The map embed URL (used in the iframe) is a separate value from the `hasMap` URL. The embed URL uses the Google Maps Embed API format; the `hasMap` URL is the public GBP profile URL.

---

## Local Photos / Assets

GBP photos (facility exterior, interior, staff) are a potential source of visual assets for the location page. However, using GBP photos on the website requires:

1. Confirming that the photos are owned by Bierman (not user-uploaded photos)
2. Getting Bierman approval for website usage
3. Downloading the photos at full resolution for CDN upload

The proof layer uses a mix of Bierman-provided photos and AI-generated images. All photos requiring Bierman approval are flagged in `ASSET_MANIFEST.md`.

---

## Service Area Alignment

The `areaServed` array in the schema should reflect the service area defined in the GBP profile. For Ramsey, the service area includes:

- Ramsey, NJ (primary)
- Bergen County, NJ (county)
- Mahwah, NJ
- Ridgewood, NJ
- Paramus, NJ
- Hackensack, NJ
- Northern New Jersey

This array should be updated to match the GBP service area definition if Bierman has explicitly defined a service area in the GBP profile.

---

## GBP as an Off-Website Conversion Surface

The SEO Business Impact Audit and HubSpot/CallRail Attribution Addendum confirmed that GBP is not simply a citation source — it is an active conversion surface where a significant portion of Bierman's local demand is resolved without a website visit.

Key findings from the audit that are directly relevant to GBP alignment strategy:

- **Google My Business drove 221 active clients all-time** with a 25.8% active rate — the single highest-converting channel in the CRM analysis.
- **GMB drove approximately 67% of all tracked CallRail calls** (14,032 of 21,089 calls over 12 months).
- **Calls and direction requests routinely bypass the website.** A parent who finds the Ramsey GBP profile and calls directly never appears in GA4 or GTM. They may appear in CallRail if the GBP phone number is a tracked number, but the CallRail-to-HubSpot integration has a documented 6,419-call gap.
- **Appointment URLs are absent** from most GBP profiles. This means the GBP profile does not provide a direct path to the intake form — a missed conversion opportunity.
- **GBP website links lack location-specific UTM parameters.** Clicks from GBP to the website are not currently attributable to a specific location in GA4.

**Implications for the proof layer and pilot:**

| Gap | Recommended Action | Requires Bierman Approval |
|---|---|---|
| GBP website links lack UTMs | Add `?utm_source=gbp&utm_medium=local&utm_campaign=ramsey-nj` to GBP website link | Yes — GBP edit access required |
| Appointment URLs absent | Add intake form URL as GBP appointment URL | Yes — GBP edit access required |
| GBP phone not confirmed as CallRail tracked number | Confirm whether GBP phone is a CallRail number or a direct line | Yes — requires CallRail account access |
| Calls/directions bypass website attribution | Treat GBP calls and directions as local-intent signals, not automatically as leads | No — documentation only |
| GBP actions need CallRail/HubSpot reconciliation | Pilot should include CallRail/HubSpot QA as a first-wave task | Yes — requires CRM access |

These actions are documented in `CLIENT_CONFIRMATION_QUESTIONS.md` and `ROADMAP.md`. None of them should be implemented without explicit Bierman approval.

---

## Confirmation Process Before Production

Before any location page is deployed to production, the following GBP alignment checks must be completed:

| Check | Method | Status (Ramsey) |
|---|---|---|
| Business name matches GBP | Visual check of GBP profile | ✅ Confirmed |
| Address matches GBP | Visual check of GBP profile | ✅ Confirmed |
| Phone matches GBP | Call front desk + check GBP | ⚠️ Discrepancy — unresolved |
| Hours match GBP | Visual check of GBP profile | ⚠️ Needs confirmation |
| GBP profile URL correct | Click test | ✅ Confirmed |
| Map embed loads correctly | Visual check in browser | ✅ Confirmed |
| Reviews are public GBP reviews | Visual check of GBP profile | ✅ Confirmed |
| Bierman approval for review usage | Written confirmation | ⚠️ Pending |
