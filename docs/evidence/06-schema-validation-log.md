# Schema Validation Log
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Source:** Schema Markup Validator (validator.schema.org); Google Rich Results Test; index.html JSON-LD graph.  
**Confidence:** High — schema validation is deterministic.

---

## Overview

This document records the complete schema architecture of the Ramsey proof layer, the validation milestones reached during development, the issues encountered and resolved, and the current state of the entity graph. It is intended as a technical reference for any developer, SEO, or agency team member who needs to understand how the schema was built and why.

---

## Schema Architecture: 26-Node Entity Graph

The proof layer uses a single JSON-LD `@graph` block in `index.html`. All 26 nodes are in one graph, connected by `@id` references. This is the recommended approach for complex multi-entity schema — it allows Google to understand the relationships between entities without requiring separate script blocks.

| Node | Type | @id | Key Relationships |
|---|---|---|---|
| 1 | WebSite | `#website` | `url`, `name`, `potentialAction` (SearchAction) |
| 2 | WebPage | `#webpage` | `isPartOf` → WebSite, `about` → LocalBusiness, `breadcrumb` → BreadcrumbList |
| 3 | Organization | `#organization` | `name`, `url`, `logo`, `sameAs` (social profiles) |
| 4 | LocalBusiness / MedicalClinic | `#localbusiness` | `address`, `geo`, `openingHours`, `hasMap`, `aggregateRating`, `employee` ×2 |
| 5 | PostalAddress | `#address` | `streetAddress`, `addressLocality`, `addressRegion`, `postalCode` |
| 6 | GeoCoordinates | `#geo` | `latitude`, `longitude` |
| 7 | OpeningHoursSpecification ×5 | `#hours-mon` through `#hours-fri` | `dayOfWeek`, `opens`, `closes` |
| 8 | BreadcrumbList | `#breadcrumb` | 3 `ListItem` nodes (Home → Locations → Ramsey) |
| 9 | FAQPage | `#faqpage` | 13 `Question` + `Answer` pairs |
| 10 | VideoObject | `#video` | `name`, `description`, `thumbnailUrl`, `uploadDate`, `embedUrl` |
| 11 | OfferCatalog | `#services` | 4 `Service` nodes |
| 12–15 | Service ×4 | `#service-aba` through `#service-diagnostic` | `name`, `description`, `areaServed`, `provider` → LocalBusiness |
| 16–17 | Person ×2 | `#person-hillary`, `#person-victoria` | `name`, `jobTitle`, `hasCredential`, `worksFor` → LocalBusiness |
| 18–23 | Review ×6 | `#review-ambar-arias` through `#review-nancy-passano` | `itemReviewed` → LocalBusiness, `author`, `reviewRating`, `reviewBody` |
| 24 | AggregateRating | (embedded in LocalBusiness) | `ratingValue: 5.0`, `reviewCount: 6`, `bestRating: 5` |
| 25–27 | ImageObject ×3 | `#image-bcba`, `#image-family`, `#image-progress` | `contentUrl`, `name`, `description` |

---

## Validation Milestones

### Milestone 1 — LocalBusiness / MedicalClinic

The `LocalBusiness` node uses dual typing: `"@type": ["LocalBusiness", "MedicalClinic"]`. This is valid schema.org syntax and is the recommended approach for healthcare providers. `MedicalClinic` is a subtype of `LocalBusiness` in the schema.org hierarchy, so using both types ensures the entity is recognized as both a local business (for local pack eligibility) and a medical clinic (for healthcare-specific entity signals).

The `LocalBusiness` node includes `areaServed` as an array of strings covering Ramsey, Bergen County, Mahwah, Ridgewood, Paramus, and Hackensack. This is a deliberate choice to signal the service area beyond the immediate address.

**Validation result:** Valid. No errors. Non-critical warning for missing `priceRange` (expected — ABA therapy pricing is not publicly listed).

---

### Milestone 2 — VideoObject Issue and Fix

The initial VideoObject implementation used a placeholder `embedUrl` that was not a real YouTube embed URL. The Rich Results Test flagged this as an issue because Google validates that the `embedUrl` resolves to a real video.

The fix was to use the actual Ramsey ABA therapy overview video from Bierman's YouTube channel. The `embedUrl` was updated to the correct YouTube embed URL, and `thumbnailUrl` was set to the YouTube thumbnail URL. After this fix, the Videos group appeared in the Rich Results Test as a valid group.

**Lesson:** VideoObject schema requires a real, resolvable `embedUrl`. Placeholder URLs will cause the Videos group to fail validation.

---

### Milestone 3 — Review Schema Expansion

The initial Review schema implementation had `itemReviewed` pointing to the `#localbusiness` `@id` but was missing `reviewBody`. Google's Rich Results Test requires `reviewBody` for Review Snippet eligibility — without it, the Review node is detected but flagged as invalid.

After adding `reviewBody` to all 6 Review nodes (matching the exact text visible in the DOM), the Review Snippets group became valid.

**Lesson:** `reviewBody` is required for Review Snippet eligibility. The text must match what is visible on the page.

---

### Milestone 4 — Dual Schema Conflict (Microdata vs. JSON-LD)

During development, the `GBPReviewCard` React component had `itemScope`/`itemType`/`itemProp` microdata attributes alongside the JSON-LD. Google's Rich Results Test parsed both the JSON-LD and the microdata, resulting in 13 detected items (7 valid from JSON-LD + 6 invalid from microdata). The microdata nodes lacked `itemReviewed`, triggering the critical issue flag.

The fix was to remove all microdata attributes from the React component. JSON-LD is now the sole schema source. The Rich Results Test result after the fix: 12 valid items, 0 invalid.

**Lesson:** Do not use both JSON-LD and microdata for the same entity type on the same page. Choose one. For React/SPA applications, JSON-LD in `index.html` is the correct approach.

---

### Milestone 5 — Person Schema Strategy

Person schema was added for Hillary Genovese (Clinical Director, BCBA) and Victoria Verdun (BCBA). Each Person node includes: `name`, `jobTitle`, `hasCredential` (BCBA credential), `image` (headshot CDN URL), and `worksFor` pointing to the `#localbusiness` `@id`.

The `worksFor` relationship is the key connection — it links the clinical leaders to the specific location, not just to the organization. This is important for E-E-A-T signals: Google can identify that specific credentialed individuals work at this specific location.

Person schema does not generate a new rich result group in the Rich Results Test, but it contributes to the entity graph's E-E-A-T signals and may influence how Google represents the location in knowledge graph entries and AI-generated answers.

---

### Milestone 6 — ImageObject Strategy

Three ImageObject nodes were added for the theme card images (BCBA Guidance, Family Partnership, Progress-Focused). Each ImageObject includes: `contentUrl` (CDN URL), `name`, `description`, and `representativeOfPage: false`.

ImageObject schema does not generate a new rich result group, but it helps Google understand the visual content of the page and may influence image search visibility and knowledge graph representation.

---

### Milestone 7 — FAQ Expansion

The FAQPage node contains 13 Question/Answer pairs covering: what ABA therapy is, what to expect at Bierman Ramsey, how to get started, insurance coverage, parent involvement, the clinical team, the difference between ABA and other therapies, and the intake process.

The FAQ content was written to target informational queries identified in the GSC analysis. Each answer is concise (under 300 characters where possible) to maximize FAQ rich result display eligibility.

---

## Known Warnings (Non-Critical)

| Warning | Node | Reason | Resolution |
|---|---|---|---|
| Missing `priceRange` | LocalBusiness | ABA therapy pricing is not publicly listed | Acceptable — `priceRange` is optional |
| Missing `datePublished` | Review ×6 | Exact publication dates were not available for all reviews | Can be added when dates are confirmed |
| Non-critical issue on Local businesses | LocalBusiness | Likely `priceRange` or `telephone` confidence | Low priority |
| Non-critical issue on Review snippets | Review | Likely `datePublished` | Low priority |

None of these warnings affect rich result eligibility. They are optional properties that can be added in a future iteration.

---

## Current Schema State Summary

| Metric | Value |
|---|---|
| Total schema nodes | 26 |
| Rich result groups (valid) | 6 |
| Rich result items (valid) | 12 |
| Invalid items | 0 |
| Critical issues | 0 |
| Non-critical warnings | 2 groups |
| JSON-LD validation | ✅ Clean |
| TypeScript compilation | ✅ No errors |
