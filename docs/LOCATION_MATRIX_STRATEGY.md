# Location Matrix Strategy
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026

---

## Overview

The Location Matrix (Matrix v3) is the source of truth for all verified Bierman Autism Centers locations. It drives location page generation, schema population, GBP alignment, and the nearby locations module on each page. The matrix is maintained as a structured data file and must be confirmed by Bierman before any production deployment.

---

## Current Matrix Status

| Metric | Value | Notes |
|---|---|---|
| Verified GBP profiles | 33 | As of Matrix v3 |
| Internal tracking rows | 35 | Includes 2 placeholder/flag rows |
| Client-facing location count | 32 or 33 | **Discrepancy — needs Bierman confirmation** |
| States represented | Multiple | NJ, MA, IN, OH, and others |
| Proof layer locations built | 1 | Ramsey, NJ |
| Proof layer locations in progress | 1 | Piscataway, NJ |

---

## Matrix Fields

Each row in the matrix contains the following fields:

| Field | Description |
|---|---|
| `location_name` | Display name |
| `city` | City |
| `state` | State abbreviation |
| `county` | County |
| `address` | Street address |
| `phone` | Phone number |
| `phone_confidence` | `confirmed` / `unconfirmed` / `discrepancy` |
| `zip` | ZIP code |
| `gbp_url` | GBP profile URL |
| `gbp_place_id` | Google Place ID |
| `geo_lat` | Latitude |
| `geo_lng` | Longitude |
| `hours` | Operating hours |
| `status` | `active` / `placeholder` / `unverified` |
| `notes` | Any known discrepancies or flags |

---

## Known Discrepancies

### 32 vs. 33 Location Count

The matrix contains 33 verified GBP profiles, but there is uncertainty about the client-facing location count. Two possible explanations:

1. One location is a duplicate GBP profile (see Broad Ripple below)
2. One location is not yet open or is in a soft-launch state

**Resolution required:** Bierman to confirm the canonical location count for client-facing communications and the website location finder.

---

### Avon vs. Avondale

The matrix contains a location entry where the city name appears as both "Avon" and "Avondale" in different source documents. These are different cities (Avon, OH vs. Avondale, AZ or Avondale, PA). The GBP profile must be checked to confirm the correct city name and state.

**Resolution required:** Bierman to confirm the correct city name and state for this location. Do not build a page for this location until confirmed.

---

### Brooklyn Park

The Brooklyn Park location has an uncertain status in the matrix. It is unclear whether this location is:
- Active with a verified GBP profile
- A planned location not yet open
- A closed location that should be removed from the matrix

**Resolution required:** Bierman to confirm the status of the Brooklyn Park location before it is included in any page build or schema.

---

### Broad Ripple Duplicate GBP Profiles

The Broad Ripple location (Indianapolis, IN area) appears to have duplicate GBP profiles. Duplicate profiles create NAP inconsistency, split review equity, and potential ranking confusion for the location.

**Resolution required:** Bierman to confirm which GBP profile is the canonical profile for Broad Ripple. The non-canonical profile should be marked as a duplicate in Google Business Profile. Do not create schema for both profiles.

---

### Ramsey Phone Discrepancy

Three conflicting phone values appear across source documents for the Ramsey location:

| Value | Source |
|---|---|
| `(201) 596-8104` | Proof layer (current) |
| `(201) 308-3735` | GBP review report |
| `(201) 928-5245` | Directions report |

**Resolution required:** Bierman to confirm the canonical phone number for Ramsey by calling the front desk or checking the GBP profile directly. This is the highest-priority data confirmation needed before Piscataway build starts.

---

### Piscataway NAP Discrepancy

Two conflicting address values appear for the Piscataway location:

| Field | Value A | Value B |
|---|---|---|
| Address | 200 Centennial Ave | 280 Centennial Ave |
| Phone | (732) 426-5470 | (732) 479-7225 |

**Resolution required:** Bierman to confirm the canonical address and phone for Piscataway before the Piscataway page build begins.

---

## How Matrix Fields Drive Pages and Schema

Every location page is generated from the matrix data. The mapping is:

| Matrix Field | Page Element | Schema Node |
|---|---|---|
| `location_name` | H1, nav, title tag | `LocalBusiness.name` |
| `address` | NAP card, footer | `PostalAddress` |
| `phone` | Nav CTA, hero CTA, footer | `LocalBusiness.telephone` |
| `hours` | Footer, schema | `OpeningHoursSpecification` |
| `geo_lat` / `geo_lng` | Map embed | `GeoCoordinates` |
| `gbp_url` | Directions link | `LocalBusiness.hasMap` |
| `county` | Hero badge, `areaServed` | `LocalBusiness.areaServed` |
| `reviews` | Review card grid | `Review` ×N |
| `aggregate_rating` | (if displayed) | `AggregateRating` |
| `clinical_leaders` | Leadership section | `Person` ×N |
| `nearby_locations` | Nearby section | Internal links |

---

## Matrix Maintenance Rules

1. **Do not build pages for unconfirmed locations.** Every location in the matrix must have `status: active` and `phone_confidence: confirmed` before a page is built.
2. **Do not create schema for duplicate GBP profiles.** Only the canonical GBP profile should be used as the data source.
3. **Flag all discrepancies in the matrix.** Do not silently resolve discrepancies — document them and escalate to Bierman.
4. **Update the matrix when GBP data changes.** GBP profiles are the source of truth for NAP data. If a GBP profile is updated, the matrix must be updated to match.
5. **Version the matrix.** Each matrix update should be versioned (v1, v2, v3, etc.) with a changelog entry.
