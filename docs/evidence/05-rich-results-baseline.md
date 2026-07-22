# Rich Results Test — Baseline and Progression
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Source:** Google Rich Results Test (search.google.com/test/rich-results); Schema Markup Validator (validator.schema.org).  
**Confidence:** High — Rich Results Test is a deterministic tool operated by Google. Results are reproducible.

---

## Overview

The Rich Results Test is Google's official tool for validating whether a page's structured data is eligible for rich results in Google Search. It tests the page's JSON-LD and microdata against Google's rich result specifications and returns a list of detected structured data types, their validity, and any issues.

This document records the baseline state of the production Ramsey page, the progression of the proof layer through multiple schema iterations, and the final confirmed state.

---

## Production Baseline — biermanautism.com/locations/ramsey/

The Rich Results Test was run on the live production Ramsey page at the start of the audit. Results:

| Group | Status | Count |
|---|---|---|
| Breadcrumbs | ✅ Valid | 1 |
| Organization | ✅ Valid | 1 |
| WebSite | ✅ Valid | 1 |
| LocalBusiness | ❌ Not detected | 0 |
| Review snippets | ❌ Not detected | 0 |
| FAQ | ❌ Not detected | 0 |
| Videos | ❌ Not detected | 0 |
| **Total valid** | | **3** |

The production page had 3 valid rich result groups. LocalBusiness/MedicalClinic, Review, FAQ, and VideoObject schema were absent. This is the baseline against which the proof layer's schema architecture is measured.

---

## Why Rich Results Test Only Shows Google-Eligible Groups

The Rich Results Test does not validate all schema types — it only validates schema types that Google has defined as eligible for rich results in Google Search. Schema types that are valid but not eligible for rich results (e.g., `Service`, `PostalAddress`, `GeoCoordinates`, `OpeningHoursSpecification`) are not shown in the Rich Results Test results.

This means the Rich Results Test result is always a subset of the full entity graph. The Schema Markup Validator shows the complete graph, including all types and relationships. Both tools are needed for a complete picture.

---

## Why Schema Validator Shows the Deeper Graph

The Schema Markup Validator (validator.schema.org) validates all schema types against the schema.org specification, regardless of whether they are eligible for Google rich results. It shows the complete entity graph, all relationships, all property values, and any validation warnings.

The proof layer's 26-node entity graph includes many types that are not eligible for rich results but are important for entity clarity and knowledge graph alignment: `Service`, `PostalAddress`, `GeoCoordinates`, `OpeningHoursSpecification`, `OfferCatalog`, `ImageObject`, and `AggregateRating` (when embedded in `LocalBusiness`). These nodes are validated by the Schema Markup Validator but not shown in the Rich Results Test.

---

## Proof Layer Progression

The proof layer schema was built incrementally. Each iteration added new schema types and was validated against both the Rich Results Test and the Schema Markup Validator.

| Version | Schema Added | Rich Results Test Result | Notes |
|---|---|---|---|
| v1 | WebSite, Organization, BreadcrumbList | 3 valid groups | Baseline parity with production |
| v2 | LocalBusiness / MedicalClinic, PostalAddress, GeoCoordinates, OpeningHoursSpecification | 4 valid groups | Local businesses group added |
| v3 | FAQPage (13 Q&A) | 5 valid groups | FAQ group added |
| v4 | VideoObject (Ramsey YouTube) | 6 valid groups | Videos group added; required YouTube source URL |
| v5 | Person ×2 (Hillary Genovese, Victoria Verdun) | 6 valid groups | Person schema added; no new rich result group |
| v6 | Service ×4, OfferCatalog | 6 valid groups | Service schema added; no new rich result group |
| v7 | Review ×5 (GBP reviews), AggregateRating | 13 items detected (some invalid) | Review snippets group added; invalid due to missing `reviewBody` and microdata conflict |
| v8 | Review ×6 (Nancy Passano added), `reviewBody` added to all 6 | 13 items detected (some invalid) | `reviewBody` added; microdata conflict still present |
| v9 | Microdata `itemScope`/`itemType`/`itemProp` removed from React component | **12 valid items, 0 invalid** | Microdata conflict resolved; Review snippets valid |
| v10 | ImageObject ×3 (theme card images) | 12 valid items, 0 invalid | ImageObject added; no new rich result group |

---

## Final Confirmed State — May 9, 2026

Rich Results Test run on `https://bierman-proof-layer.manus.space/` at 12:44 AM, May 9, 2026:

| Group | Status | Count | Notes |
|---|---|---|---|
| Breadcrumbs | ✅ Valid | 1 | |
| FAQ | ✅ Valid | 1 | 13 Q&A pairs |
| Local businesses | ✅ Valid | 1 | Non-critical issue (expected) |
| Organization | ✅ Valid | 1 | |
| Review snippets | ✅ Valid | 7 | 6 Review nodes + 1 AggregateRating node |
| Videos | ✅ Valid | 1 | |
| **Total valid** | | **12** | **0 invalid, 0 critical issues** |

The 7 Review Snippet items (not 6) is expected and correct. Google counts the `AggregateRating` node embedded in the `LocalBusiness` entity as a 7th Review Snippet item, in addition to the 6 individual `Review` nodes.

---

## Non-Critical Issues

Two groups show "Non-critical issues detected": Local businesses and Review snippets. Non-critical issues are warnings, not errors. They do not prevent rich result eligibility. Common non-critical issues at this schema level include missing optional properties such as `priceRange` on LocalBusiness and missing `datePublished` on Review nodes. These can be addressed in a future iteration without affecting the current valid status.

---

## Dual Schema Conflict — Resolved

During v7–v8, the React component had `itemScope`/`itemType`/`itemProp` microdata attributes alongside the JSON-LD. Google parsed these as a second set of 6 Review nodes, separate from the JSON-LD nodes. The microdata nodes lacked `itemReviewed`, triggering the "critical issue" flag. The JSON-LD nodes were correct throughout.

The fix was to remove all microdata attributes from the `GBPReviewCard` React component. JSON-LD is now the sole schema source. This is the recommended approach for React/SPA applications — microdata in dynamically rendered components creates parsing ambiguity.

---

## Comparison: Production vs. Proof Layer

| Metric | Production (biermanautism.com/locations/ramsey/) | Proof Layer |
|---|---|---|
| Valid rich result groups | 3 | 6 |
| Total valid items | 3 | 12 |
| Invalid items | 0 | 0 |
| LocalBusiness / MedicalClinic | ❌ | ✅ |
| Review snippets | ❌ | ✅ (7 items) |
| FAQ | ❌ | ✅ (13 Q&A) |
| Videos | ❌ | ✅ |
| Schema nodes (total) | ~3 | 26 |
| AggregateRating | ❌ | ✅ (5.0 / 6 reviews) |
| Person schema | ❌ | ✅ (×2) |
| Service schema | ❌ | ✅ (×4) |
