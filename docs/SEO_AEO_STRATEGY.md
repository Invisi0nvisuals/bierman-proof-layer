# SEO / AEO Strategy
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026

---

## Overview

The SEO and AEO strategy for the Bierman proof layer is built around three pillars: local entity strength, answer engine eligibility, and content-to-intent alignment. These pillars work together to improve visibility in traditional local search, in Google's AI-powered search features (SGE/AI Overviews), and in third-party answer engines (Perplexity, ChatGPT, Bing Copilot).

---

## Local SEO Approach

### Entity-First Architecture

The foundation of the local SEO strategy is a strong, well-structured local entity. The `LocalBusiness`/`MedicalClinic` co-typed schema node establishes Bierman Autism Centers — Ramsey as a verified, structured entity with:

- Full NAP (name, address, phone) matching the GBP profile
- `GeoCoordinates` for precise location signals
- `OpeningHoursSpecification` for hours-related queries
- `hasMap` pointing to the GBP profile URL
- `areaServed` listing Ramsey, Bergen County, and surrounding communities
- `parentOrganization` linking to the corporate `Organization` node
- `aggregateRating` and `Review` nodes for review visibility

This entity structure tells Google — and answer engines — that this is a real, verified, locally-operating business with a specific service area.

### GBP Alignment

Every NAP field on the location page matches the GBP profile. This alignment is critical because Google uses NAP consistency as a local ranking signal. Inconsistencies between the website and GBP create entity ambiguity that can suppress local pack rankings.

The proof layer documents all known NAP discrepancies (see `KNOWN_GAPS.md`) and flags them for Bierman confirmation before production deployment.

### Service-Location Mapping

Each service (ABA Therapy, Speech-Language Therapy, Occupational Therapy, Diagnostic Evaluation) is implemented with:
- A dedicated service card on the page
- A `Service` schema node with `name`, `description`, `provider`, and `areaServed`
- An `OfferCatalog` grouping all services under the location entity

This creates explicit service-location relationships in the entity graph, which supports ranking for service + location queries (e.g., "ABA therapy Ramsey NJ", "speech therapy Bergen County").

### Near-Me / Local Intent Strategy

The page targets the following local intent query patterns:

| Query Pattern | Page Element | Schema Support |
|---|---|---|
| "ABA therapy [city] NJ" | H1, meta title | `LocalBusiness.name`, `areaServed` |
| "autism therapy [county]" | Hero description | `areaServed` |
| "ABA therapy near me" | `areaServed` array | `GeoCoordinates` |
| "autism center [city]" | NAP card | `PostalAddress` |
| "speech therapy autism NJ" | Service card | `Service.name` |
| "autism diagnostic evaluation NJ" | Service card | `Service.name` |

---

## AEO / Entity Approach

### What AEO Is

Answer Engine Optimization (AEO) is the practice of structuring content and schema to be surfaced by AI-powered answer engines — Google AI Overviews, Perplexity, ChatGPT, Bing Copilot, and similar systems. These engines extract answers from structured content and schema, not just from ranked pages.

### How This System Supports AEO

**1. FAQ schema as answer source**
The `FAQPage` schema with 13 Q&A pairs provides structured, extractable answers to common caregiver questions. Answer engines can surface these answers directly without the user visiting the page.

**2. Entity graph as knowledge base**
The 26-node JSON-LD graph provides a machine-readable description of the Bierman Ramsey entity — its services, location, staff, hours, reviews, and relationships. This is the format that knowledge graph systems use to understand and represent entities.

**3. Review schema as social proof signal**
`Review` nodes with `reviewBody` provide extractable review content that answer engines can use to describe the quality and reputation of the location.

**4. `VideoObject` schema as multimedia signal**
The `VideoObject` node makes the Ramsey overview video discoverable by video-capable answer engines and Google's video rich results.

**5. `Person` schema as authority signal**
`Person` nodes for BCBA clinical leaders establish human expertise signals that answer engines use to evaluate the authority of healthcare content.

### GSC-Informed Content Opportunities

GA4 and GSC data for biermanautism.com (last 12 months) reveals high-impression, low-CTR queries that represent content opportunities:

- Informational queries about autism diagnosis, ABA therapy process, and insurance coverage
- "Near me" queries for ABA therapy and autism centers
- Location-specific queries for cities near Ramsey (Mahwah, Ridgewood, Paramus, etc.)

The FAQ section addresses the highest-volume informational queries. The education bridge section addresses the informational-to-intake conversion gap.

---

## FAQ Expansion Strategy

The current FAQ set (13 questions) covers:

| Category | Questions |
|---|---|
| Insurance | Does Bierman accept insurance? What insurance plans? |
| Services | What services does Bierman Ramsey offer? What is ABA therapy? |
| Age range | What ages does Bierman serve? |
| Process | How do I get started? What is the intake process? |
| Local intent | Is there an autism center near Ramsey NJ? |
| Caregiver education | What is the difference between ABA and speech therapy? |

For production, the FAQ set should be expanded based on GSC query data for each specific location. Questions with high impression volume and low CTR are the highest-priority additions.

---

## Caregiver Education Bridge

The education bridge section connects informational caregiver content to the intake CTA. This addresses a documented gap in the current biermanautism.com architecture: high-volume informational queries (e.g., "what is ABA therapy", "how to get autism diagnosis") land on pages that do not have a clear path to intake.

The education bridge provides:
- 3 resource cards linking to caregiver education content
- An intake CTA positioned after the educational content
- A framing that positions the intake as the natural next step after learning

---

## Internal Linking from Resource Pages

When the system scales to include caregiver resource pages (Phase 6), those pages should link back to the relevant location pages. For example:

- "ABA Therapy in New Jersey" resource page → links to all NJ location pages
- "What to Expect at Your First ABA Session" → links to the intake CTA on location pages
- "Insurance Guide for Autism Therapy" → links to the insurance section on location pages

This creates a content cluster architecture where resource pages support location page authority.

---

## How This Scales to All Locations

The SEO/AEO architecture is location-agnostic. For each new location:

1. Update the `LOCATION` constant with the new location's data
2. Update the `FAQPage` schema with location-specific questions (sourced from GSC data for that location's URL)
3. Update the `areaServed` array to reflect the new location's service area
4. Update the `BreadcrumbList` to reflect the new location's state/city hierarchy
5. Update the education bridge with location-specific resource links

No architectural changes are required. The SEO/AEO strategy is identical across all locations — only the data changes.
