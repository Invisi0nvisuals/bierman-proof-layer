# Location Matrix Findings
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Source:** Location Matrix v3 (internal spreadsheet); GBP Manager screenshot; source document cross-referencing.  
**Confidence:** Medium — matrix data is internally consistent but several fields require Bierman confirmation before production use.

---

## Overview

The Location Matrix (Matrix v3) is the internal source of truth for all Bierman Autism Centers location data. It was built by cross-referencing GBP profiles, source documents, and publicly available information. The matrix drives the proof layer's page generation model: every location page is a data swap of the Ramsey template, populated from the matrix.

This document records what the matrix contains, what it reveals about data quality across the network, and what must be confirmed before any location page goes to production.

---

## Matrix v3 Status

| Metric | Value | Notes |
|---|---|---|
| Verified GBP profiles | 33 | Confirmed via GBP Manager screenshot |
| Internal tracking rows | 35 | Includes 2 rows with unresolved status |
| Client-facing location count | 32 or 33 | **Discrepancy — needs Bierman confirmation** |
| States represented | NJ, MA, IN, OH, and others | Multi-state network |
| Proof layer pages built | 1 | Ramsey, NJ |
| Proof layer pages in progress | 1 | Piscataway, NJ — blocked pending NAP confirmation |

The 2-row gap between 35 internal tracking rows and 33 verified GBP profiles is explained by two rows that are flagged as unresolved: one for a location with uncertain status (Brooklyn Park) and one for a location with a naming ambiguity (Avon/Avondale). These are not missing locations — they are locations that cannot be confirmed from available data without Bierman input.

---

## How the Matrix Becomes the Source of Truth

The matrix is not just a spreadsheet. It is the data layer that drives the entire page generation system. Every field in the matrix maps directly to a page element or schema node:

| Matrix Field | Page Element | Schema Node |
|---|---|---|
| `location_name` | H1, nav, title tag, NAP card | `LocalBusiness.name` |
| `address` | NAP card, footer | `PostalAddress` |
| `phone` | Nav CTA, hero CTA, footer | `LocalBusiness.telephone` |
| `hours` | Footer | `OpeningHoursSpecification` |
| `geo_lat` / `geo_lng` | Map embed | `GeoCoordinates` |
| `gbp_url` | Directions link, hasMap | `LocalBusiness.hasMap` |
| `county` | Hero badge, areaServed | `LocalBusiness.areaServed` |
| `reviews` | Review card grid | `Review` ×N |
| `aggregate_rating` | (if displayed) | `AggregateRating` |
| `clinical_leaders` | Leadership section | `Person` ×N |
| `nearby_locations` | Nearby section | Internal links |

When the matrix is complete and confirmed, building a new location page is a single data swap. The architecture is already built. The template is already validated. The schema pattern is already Rich Results-eligible. The only variable is the data.

---

## Known Discrepancy: 32 vs. 33 Locations

The matrix contains 33 verified GBP profiles, but there is uncertainty about whether the client-facing location count is 32 or 33. Two possible explanations exist: one location may be in a soft-launch or pre-open state and not yet client-facing, or one GBP profile may be a duplicate that should be consolidated.

This discrepancy affects the "All Locations" count on the website and any marketing materials that cite the number of locations. It does not affect the proof layer build — the proof layer builds individual location pages, not a network count.

**Resolution required:** Bierman to confirm the canonical client-facing location count.

---

## Known Discrepancy: Avon vs. Avondale

One location in the matrix appears as "Avon" in some source documents and "Avondale" in others. These are different cities in different states:

- Avon, OH (suburb of Cleveland)
- Avondale, AZ (suburb of Phoenix)
- Avondale, PA (Chester County)

Building a page for the wrong city and state would create a significant NAP error — the address, phone, and GBP profile would not match. This location is flagged in the matrix as `status: unconfirmed` and will not be built until the correct city and state are confirmed.

**Resolution required:** Bierman to check the GBP profile directly and confirm the correct city name and state.

---

## Known Issue: Brooklyn Park Missing Status

The Brooklyn Park location appears in the internal tracking rows but does not have a confirmed GBP profile in the matrix. Its status is unclear — it may be active, planned, or closed. A page should not be built for a location that is not actively operating with a verified GBP profile.

**Resolution required:** Bierman to confirm whether Brooklyn Park is active, planned, or closed.

---

## Known Issue: Broad Ripple Duplicate GBP Profiles

The Broad Ripple location (Indianapolis, IN area) appears to have two separate GBP profiles. Duplicate GBP profiles create three measurable problems: they split review equity between two profiles (reducing the review count and average rating on each), they create NAP inconsistency if the two profiles have different addresses or phone numbers, and they can cause ranking confusion for the location.

The matrix flags this as a duplicate and marks both profiles as `status: unconfirmed`. Only the canonical profile should be used as the data source for the Broad Ripple page.

**Resolution required:** Bierman to identify the canonical GBP profile and mark the duplicate as such in Google Business Profile.

---

## Ramsey Phone Discrepancy

Three conflicting phone values appear across source documents for the Ramsey location:

| Value | Source | Confidence |
|---|---|---|
| `(201) 596-8104` | Proof layer (current) | Unconfirmed |
| `(201) 308-3735` | GBP review report | Unconfirmed |
| `(201) 928-5245` | Directions report | Unconfirmed |

The phone number appears in 5 places on the Ramsey page (nav, hero CTA, NAP card, footer, schema) and in the `LocalBusiness.telephone` schema field. An incorrect phone number creates a NAP inconsistency between the website and the GBP profile, which is a documented local ranking signal.

This is the highest-priority data confirmation needed before the Piscataway build can start — because if the Ramsey phone is wrong, the pattern for confirming phone numbers before building needs to be established before replicating it to Piscataway.

**Resolution required:** Bierman to call the Ramsey front desk or check the GBP profile while logged in as the account owner.

---

## Piscataway NAP Discrepancy

Two conflicting values appear for both the address and phone number of the Piscataway location:

| Field | Value A | Value B |
|---|---|---|
| Address | 200 Centennial Ave | 280 Centennial Ave |
| Phone | (732) 426-5470 | (732) 479-7225 |

Both fields must be confirmed before the Piscataway page is built. An incorrect address could direct caregivers to the wrong location. An incorrect phone number creates a NAP error.

**Resolution required:** Bierman to confirm the correct address and phone for Piscataway.

---

## Matrix Maintenance Rules Going Forward

The matrix is a living document. As GBP profiles are updated, locations open or close, and phone numbers change, the matrix must be updated to reflect the current state. The following rules apply:

No location page should be built for a location with `status: unconfirmed` or `phone_confidence: discrepancy`. Every matrix update should be versioned. The GBP profile is the authoritative source for NAP data — if the website and GBP disagree, the GBP value takes precedence until Bierman confirms otherwise.
