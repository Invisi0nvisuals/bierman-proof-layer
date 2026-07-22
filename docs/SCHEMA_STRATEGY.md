# Schema Strategy
## Bierman Autism Centers — Proof Layer

**Last updated:** May 9, 2026

---

## Overview

The proof layer implements a single JSON-LD `@graph` array in `client/index.html`. This is the sole schema source for the page. No microdata attributes are used in the React components. The graph contains 26 nodes covering all Rich Results-eligible types relevant to a local healthcare/therapy provider.

---

## Rich Results Groups

| Group | Status | Notes |
|---|---|---|
| Breadcrumbs | ✅ Valid | `BreadcrumbList` with 3 items |
| FAQ | ✅ Valid | `FAQPage` with 13 Q&A pairs |
| Local businesses | ✅ Valid | `LocalBusiness` + `MedicalClinic` co-typed |
| Organization | ✅ Valid | Corporate `Organization` node |
| Review snippets | ✅ Valid (targeting) | 6 `Review` nodes; `reviewBody` + `itemReviewed` added in v16 |
| Videos | ✅ Valid | `VideoObject` with `contentUrl`, `thumbnailUrl`, `duration` |

**Total detected:** 13 items  
**Target:** 13 valid / 0 invalid

---

## Rich Results Test vs. Schema Markup Validator

These are two different tools with different purposes:

**Rich Results Test** (`search.google.com/test/rich-results`)
- Tests whether a page is eligible for Google rich results in search
- Checks for required fields per rich result type
- Reports "valid" or "invalid" per item
- Does not validate the full schema graph — only rich result-eligible types
- A 403 from the test tool means Google cannot crawl the page

**Schema Markup Validator** (`validator.schema.org`)
- Validates schema.org conformance for all node types
- Reports warnings and errors for any schema property
- Does not determine rich result eligibility
- More comprehensive than Rich Results Test — will flag issues the Rich Results Test ignores

**Rule:** Both tools should be run. Rich Results Test determines eligibility. Schema Markup Validator determines correctness.

---

## Current Schema Graph (26 Nodes)

### Node 1 — WebSite
```json
{
  "@type": "WebSite",
  "@id": "https://bierman-proof-layer.manus.space/#website",
  "url": "https://bierman-proof-layer.manus.space/",
  "name": "Bierman Autism Centers",
  "publisher": { "@id": ".../#organization" }
}
```

### Node 2 — WebPage
```json
{
  "@type": "WebPage",
  "@id": "https://bierman-proof-layer.manus.space/#webpage",
  "url": "https://bierman-proof-layer.manus.space/",
  "name": "ABA Therapy in Ramsey, NJ | Bierman Autism Centers",
  "description": "...",
  "isPartOf": { "@id": ".../#website" },
  "about": { "@id": ".../#localbusiness" },
  "breadcrumb": { "@id": ".../#breadcrumb" }
}
```

### Node 3 — Organization (Corporate)
```json
{
  "@type": "Organization",
  "@id": "https://bierman-proof-layer.manus.space/#organization",
  "name": "Bierman Autism Centers",
  "url": "https://www.biermanautism.com/",
  "logo": "...",
  "sameAs": ["https://www.facebook.com/BiermanAutism", "..."]
}
```

### Node 4 — LocalBusiness + MedicalClinic (Ramsey)
```json
{
  "@type": ["LocalBusiness", "MedicalClinic"],
  "@id": "https://bierman-proof-layer.manus.space/#localbusiness",
  "name": "Bierman Autism Centers — Ramsey",
  "address": { "@type": "PostalAddress", ... },
  "geo": { "@type": "GeoCoordinates", ... },
  "openingHoursSpecification": [...],
  "telephone": "(201) 596-8104",
  "hasMap": "https://www.google.com/maps/place/...",
  "parentOrganization": { "@id": ".../#organization" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "6" },
  "areaServed": ["Ramsey, NJ", "Bergen County, NJ", ...]
}
```

### Nodes 5–11 — OpeningHoursSpecification (×7)
Mon–Fri: 08:00–18:00. Sat–Sun: closed.

### Node 12 — BreadcrumbList
```
Home > New Jersey > Ramsey
```

### Node 13 — FAQPage
13 Q&A pairs covering insurance, age range, services, ABA therapy, local intent, and caregiver education topics.

### Node 14 — VideoObject
Ramsey ABA therapy overview video with `contentUrl`, `thumbnailUrl`, `uploadDate`, `duration`, `description`.

### Nodes 15–20 — Review (×6)
Each Review node contains:
- `@type`: `Review`
- `@id`: unique per reviewer (e.g., `#review-ambar-arias`)
- `itemReviewed`: `{ "@id": ".../#localbusiness" }` — points to the Ramsey LocalBusiness entity
- `author`: `{ "@type": "Person", "name": "..." }`
- `reviewRating`: `{ "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }`
- `reviewBody`: exact visible text from the DOM (matches `GBPReviewCard` component)
- `publisher`: `{ "@type": "Organization", "name": "Google" }`
- `datePublished`: only where exact date is known (Nancy Passano: `2025-03-10`)

### Node 21 — AggregateRating
```json
{
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": "6",
  "bestRating": "5",
  "worstRating": "1"
}
```
Embedded in the `LocalBusiness`/`MedicalClinic` node. Matches visible on-page content (6 review cards, all 5-star).

### Nodes 22–25 — Service (×4)
ABA Therapy, Speech-Language Therapy, Occupational Therapy, Diagnostic Evaluation — each with `name`, `description`, `provider`, `areaServed`.

### Nodes 23–25 — ImageObject (×3)
Theme card images with `contentUrl`, `url`, `caption`, `description`.

### Nodes 24–25 — Person (×2)
Hillary Genovese (Clinical Director, BCBA) and Victoria Verdun (BCBA) with `name`, `jobTitle`, `worksFor`.

---

## Schema Types Used

| Type | Purpose | Notes |
|---|---|---|
| `WebSite` | Site-level entity | Publisher reference |
| `WebPage` | Page-level entity | `about` → LocalBusiness |
| `Organization` | Corporate entity | Parent org for all locations |
| `LocalBusiness` | Location entity | Co-typed with MedicalClinic |
| `MedicalClinic` | Healthcare entity | Co-typed with LocalBusiness |
| `PostalAddress` | NAP address | Embedded in LocalBusiness |
| `GeoCoordinates` | Lat/lng | Embedded in LocalBusiness |
| `OpeningHoursSpecification` | Hours | ×7 (Mon–Fri + Sat/Sun) |
| `BreadcrumbList` | Navigation | 3 items |
| `FAQPage` | FAQ rich result | 13 Q&A pairs |
| `VideoObject` | Video rich result | Ramsey overview video |
| `Review` | Review snippet | ×6, all with `reviewBody` + `itemReviewed` |
| `Rating` | Embedded in Review | `ratingValue`, `bestRating`, `worstRating` |
| `AggregateRating` | Star rating | 5.0/6, embedded in LocalBusiness |
| `Service` | Service-location | ×4 services |
| `OfferCatalog` | Service grouping | Embedded in LocalBusiness |
| `ImageObject` | Image schema | ×3 theme cards |
| `Person` | Clinical leadership | ×2 BCBA profiles |
| `areaServed` | Service area | Array of city/county strings |
| `hasMap` | GBP map link | Points to GBP profile URL |
| `branchOf` / `parentOrganization` | Corporate hierarchy | Points to Organization node |

---

## Review Schema Rules

These rules apply to all Review nodes in this system:

1. **Visible content must match schema** — `reviewBody` must match the exact text visible in the DOM. Truncated display text is acceptable; the full text must be in `reviewBody`.
2. **No fake reviews** — all reviews must be sourced from real, public GBP reviews.
3. **No hidden review schema** — do not add `Review` nodes for reviews that are not visible on the page.
4. **No fake AggregateRating** — `reviewCount` must match the number of visible review cards. `ratingValue` must match the visible aggregate.
5. **`itemReviewed` required** — every `Review` node must have `itemReviewed` pointing to the `LocalBusiness`/`MedicalClinic` entity.
6. **No Physician schema** — do not use `Physician` type unless explicitly supported by verified MD credentials.
7. **No microdata + JSON-LD conflict** — do not use both `itemScope`/`itemProp` microdata and JSON-LD for the same entity on the same page. Use JSON-LD exclusively.

---

## Known Schema Issues (Historical)

| Issue | Version | Status |
|---|---|---|
| `reviewBody` missing from all 6 Review nodes | Pre-v16 | Fixed in v16 |
| Microdata `itemScope`/`itemProp` on `GBPReviewCard` creating duplicate invalid Review nodes | Pre-v17 | Fixed in v17 — all microdata stripped |

---

## Schema Scaling Rules

When replicating the schema for a new location:

1. Update all `@id` values to use the new location's canonical URL
2. Update `LocalBusiness`/`MedicalClinic` NAP, geo, hours, phone, and `hasMap`
3. Update `Review` nodes to match the new location's GBP reviews
4. Update `AggregateRating` to match the new location's review count and rating
5. Update `Person` nodes to match the new location's clinical staff
6. Update `Service` `areaServed` to match the new location's service area
7. Update `BreadcrumbList` to reflect the new location's state/city hierarchy
8. Update `FAQPage` to include location-specific questions
9. Do not reuse `@id` values across locations — each location must have unique IDs
