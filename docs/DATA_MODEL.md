# Location Data Model
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026

---

## Overview

The location data model is the single source of truth for all location-specific content, schema, and GBP alignment data. In the proof layer, this model is implemented as a `LOCATION` constant in `client/src/pages/Home.tsx`. When the system scales to a full CMS or database, this model becomes the schema for the `locations` table or content type.

Every field in this model drives a corresponding element on the location page and/or a corresponding node in the JSON-LD schema graph. No location-specific value is hardcoded outside this model.

---

## Field Reference

| Field | Type | Description | Source | Confirmation Required |
|---|---|---|---|---|
| `location_name` | string | Display name (e.g., "Bierman Autism Centers — Ramsey") | GBP | No |
| `location_slug` | string | URL slug (e.g., `ramsey`) | Internal | No |
| `city` | string | City name (e.g., "Ramsey") | GBP | No |
| `state` | string | State abbreviation (e.g., "NJ") | GBP | No |
| `state_full` | string | Full state name (e.g., "New Jersey") | GBP | No |
| `state_slug` | string | URL-safe state slug (e.g., `new-jersey`) | Internal | No |
| `county` | string | County name (e.g., "Bergen County") | GBP | No |
| `address` | string | Street address (e.g., "500 N Franklin Tpke, Ste 203") | GBP | **Yes** |
| `suite` | string | Suite/unit number if separate | GBP | **Yes** |
| `zip` | string | ZIP code (e.g., "07446") | GBP | No |
| `phone` | string | Canonical phone number | GBP + Bierman | **Yes — discrepancy exists** |
| `phone_source` | string | Source of phone value (e.g., "GBP verified") | Internal | No |
| `phone_confidence` | enum | `confirmed` / `unconfirmed` / `discrepancy` | Internal | No |
| `hours` | object | Opening hours by day | GBP | **Yes** |
| `geo_lat` | number | Latitude | GBP / Google Maps | No |
| `geo_lng` | number | Longitude | GBP / Google Maps | No |
| `map_url` | string | Google Maps URL for the location | GBP | No |
| `map_embed_url` | string | Google Maps embed iframe URL | Google Maps | No |
| `gbp_url` | string | Full GBP profile URL | GBP | No |
| `gbp_place_id` | string | Google Place ID | GBP | No |
| `services_offered` | string[] | Array of service names | Bierman | **Yes** |
| `insurance_list` | string[] | Array of accepted insurance plans | Bierman | **Yes** |
| `reviews` | Review[] | Array of public GBP review objects | GBP | **Yes — usage approval** |
| `aggregate_rating` | number | Average star rating (e.g., 5.0) | GBP | **Yes** |
| `review_count` | number | Number of visible reviews | GBP | No |
| `clinical_leaders` | Person[] | Array of clinical staff profiles | Bierman | **Yes — image approval** |
| `video_url` | string | YouTube or hosted video URL | Bierman | **Yes — usage approval** |
| `video_poster_url` | string | Video thumbnail/poster image URL | Bierman | **Yes** |
| `facility_images` | ImageAsset[] | Array of facility photo objects | Bierman | **Yes** |
| `service_images` | ImageAsset[] | Array of service-related photo objects | Bierman/CDN | No |
| `nearby_locations` | NearbyLocation[] | Array of nearby Bierman location objects | Matrix v3 | No |
| `resource_links` | ResourceLink[] | Array of caregiver education resource links | Bierman | No |
| `faq_set` | FAQ[] | Array of FAQ question/answer pairs | Internal + GSC | No |
| `schema_ids` | object | Map of `@id` values for all schema nodes | Internal | No |
| `confirmation_flags` | object | Map of field-level confirmation status | Internal | No |
| `intake_url` | string | Intake form URL with location parameter | Bierman | **Yes** |
| `directions_from` | DirectionSet[] | Driving directions from nearby areas | Internal | No |
| `transit_notes` | string | Public transit information | Internal | No |
| `parking_notes` | string | Parking information | Internal | No |

---

## Sub-Object Schemas

### Review
```typescript
interface Review {
  id: string;           // e.g., "review-ambar-arias"
  author: string;       // reviewer name
  rating: number;       // 1–5
  body: string;         // full review text
  date?: string;        // ISO date if known (e.g., "2025-03-10")
  source: "google";     // always "google" for GBP reviews
  approved: boolean;    // Bierman usage approval status
}
```

### Person (Clinical Leader)
```typescript
interface Person {
  id: string;           // e.g., "person-hillary-genovese"
  name: string;
  title: string;        // e.g., "Clinical Director, BCBA"
  credentials: string[]; // e.g., ["BCBA", "M.S."]
  bio: string;
  imageUrl?: string;    // CDN URL — requires Bierman approval
  imageApproved: boolean;
}
```

### ImageAsset
```typescript
interface ImageAsset {
  id: string;
  url: string;          // Manus CDN URL
  alt: string;
  width: number;
  height: number;
  caption?: string;
  approved: boolean;
}
```

### NearbyLocation
```typescript
interface NearbyLocation {
  name: string;
  city: string;
  state: string;
  slug: string;
  url: string;          // links to biermanautism.com/location/{slug}/
}
```

### FAQ
```typescript
interface FAQ {
  question: string;
  answer: string;
  category?: string;    // e.g., "insurance", "services", "local"
}
```

---

## Current Ramsey Values

| Field | Value | Confidence |
|---|---|---|
| `location_name` | Bierman Autism Centers — Ramsey | Confirmed |
| `location_slug` | `ramsey` | Confirmed |
| `city` | Ramsey | Confirmed |
| `state` | NJ | Confirmed |
| `county` | Bergen County | Confirmed |
| `address` | 500 N Franklin Tpke, Ste 203 | Confirmed (GBP) |
| `zip` | 07446 | Confirmed |
| `phone` | (201) 596-8104 | **Unconfirmed — 3 conflicting values** |
| `geo_lat` | 41.0567 | Confirmed (Google Maps) |
| `geo_lng` | -74.1441 | Confirmed (Google Maps) |
| `aggregate_rating` | 5.0 | Confirmed (GBP) |
| `review_count` | 6 (displayed) | Confirmed |
| `hours` | Mon–Fri 8am–6pm, Sat–Sun closed | Needs confirmation |

---

## How This Scales Across All Locations

The data model is location-agnostic. Replicating the Ramsey page to any new location requires:

1. Creating a new `LOCATION` constant with the new location's values
2. Confirming all `confirmation_flags` fields before production deployment
3. Sourcing GBP reviews for the new location (6 reviews recommended)
4. Confirming clinical staff profiles and image usage approval
5. Updating schema `@id` values to use the new location's canonical URL
6. Updating `BreadcrumbList` to reflect the new location's state/city hierarchy
7. Updating `FAQPage` to include location-specific questions

No architectural changes are required. The page template, schema graph structure, and component architecture are identical across all locations. Only the data changes.

For a 33-location deployment, this model can be implemented as:
- A JSON file per location (`/data/locations/{slug}.json`)
- A TypeScript object per location (`/data/locations/{slug}.ts`)
- A database table with one row per location
- A headless CMS content type with one entry per location

The proof layer uses the TypeScript constant approach for simplicity. A production implementation would use a database or CMS.
