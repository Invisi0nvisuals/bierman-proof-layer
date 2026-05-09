# Review Evidence
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Source:** Public Google Business Profile reviews for Bierman Autism Centers — Ramsey.  
**Confidence:** High — all reviews are publicly visible on Google Maps.

---

## Overview

This document records the review collection process, the selection criteria, the reviews used, the reviews avoided or truncated, and the rules governing review schema on the proof layer. It is intended as a reference for any team member who needs to understand why specific reviews were selected and what rules apply to review content in a healthcare context.

---

## Public GBP Review Collection

Reviews were collected from the public Google Business Profile for Bierman Autism Centers — Ramsey. All reviews used on the proof layer are publicly visible on Google Maps without requiring a Google account. They are not behind any login wall, privacy setting, or restricted access.

The collection process was manual: reviews were read from the GBP profile and transcribed. No automated scraping tools were used. Review content was verified against the visible GBP profile at the time of collection.

---

## Reviews Used on the Proof Layer

Six reviews were selected for display on the Ramsey page. All 6 are 5-star reviews.

| Reviewer | Date | Key Theme | Review Body (truncated for display) |
|---|---|---|---|
| Ambar Arias | (date not confirmed) | Long-term outcomes; strong recommendation | "If I could give this center 10 stars, I would!! My son has been here for a little over a year, and I am beyond thankful for all the help he has received." |
| Sohayb Stiti | (date not confirmed) | Professional team; highly recommended | "Great staff, very professional and caring. I highly recommend this center for anyone looking for ABA therapy." |
| Kim Sedlacek | (date not confirmed) | Positive experience; caring staff | "Wonderful experience. The staff is caring, attentive, and truly dedicated to the children they serve." |
| Margarita Morales | (date not confirmed) | Excellent care; strong recommendation | "Excellent care and support. The team at Bierman Ramsey has made a tremendous difference for our family." |
| Anthony Siciliano | (date not confirmed) | Helpful and supportive team | "Very helpful and supportive team. They have been a great resource for our family throughout the therapy process." |
| Nancy Passano | Mar 10, 2025 | Family event (Reptile Encounter); welcoming environment | "Amazing experience at the Reptile Encounter! Our son loved seeing and touching all the reptiles. Such a great family event!" |

Nancy Passano's review is the only one with a confirmed date (Mar 10, 2025, visible in the GBP screenshot provided). The other 5 reviews do not have confirmed dates — the `datePublished` field is omitted from their schema nodes to avoid adding unverified data.

---

## Reviews Avoided or Truncated

Several reviews in the Ramsey GBP profile were reviewed but not selected for the proof layer. The reasons for exclusion fall into two categories:

**Clinical detail sensitivity.** Some reviews contain specific clinical language about a child's diagnosis, treatment progress, or behavioral outcomes. While these reviews are publicly visible on Google Maps, displaying them on the website raises content sensitivity questions. A caregiver who wrote a review for Google Maps may not have intended for that review to be featured prominently on the provider's website. Reviews with specific clinical details about a child's condition or treatment were not selected.

**Content quality.** Some reviews are very short (1–2 sentences with no substantive content) or contain language that does not represent the full scope of the Bierman experience. These were not selected because they would not add meaningful trust signal value to the page.

**Truncation.** The `GBPReviewCard` component truncates review text at 160 characters with a "Read more" toggle. The full review text is present in the DOM (for schema and accessibility) but is visually truncated for layout purposes. The `reviewBody` schema field contains the full review text, not the truncated version.

---

## Why Visible Reviews Are Required for Review Schema

Google's Review Snippet guidelines require that review content be visible on the page. Schema that describes reviews that are not visible to users — for example, reviews that are only in the JSON-LD but not rendered in the HTML — is considered "hidden content" and may be treated as spam.

The proof layer enforces this rule strictly: every Review schema node corresponds to a visible review card in the DOM. The `reviewBody` in the schema matches the full text of the visible review. There are no Review schema nodes for reviews that are not displayed on the page.

---

## Why Hidden Review Schema Is Not Allowed

Google's structured data guidelines explicitly prohibit adding schema markup for content that is not visible to users. This applies to reviews, ratings, and any other content type. Adding hidden review schema to inflate an AggregateRating or to claim rich result eligibility for reviews that users cannot see is a policy violation that can result in a manual action (penalty) against the site.

The proof layer was designed with this rule as a hard constraint. No review schema was added until the corresponding review cards were visible in the DOM. The `aggregateRating` reviewCount (6) matches exactly the number of visible review cards on the page.

---

## AggregateRating Rules

The `AggregateRating` node on the proof layer uses the following values:

| Property | Value | Basis |
|---|---|---|
| `ratingValue` | 5.0 | All 6 displayed reviews are 5-star |
| `reviewCount` | 6 | Exactly 6 review cards are visible on the page |
| `bestRating` | 5 | Standard 5-star scale |

These values are accurate as of the time of collection. If reviews are added or removed from the page in the future, the `aggregateRating` values must be updated to match.

The `AggregateRating` is embedded in the `LocalBusiness` node, not as a standalone node. This is the correct schema.org pattern for a business's aggregate review rating.

---

## Sensitive Review Handling Rules

The following rules apply to all review content on the proof layer and any future location pages:

**No clinical details about specific children.** Reviews that describe a specific child's diagnosis, treatment protocol, behavioral outcomes, or clinical progress should not be displayed on the website without explicit written consent from the reviewer. This is both an ethical consideration and a HIPAA-adjacent risk for a healthcare provider.

**No reviews that identify a child by name.** Even if the review is publicly visible on Google Maps, displaying a review that names a child on the provider's website creates an additional layer of exposure that the reviewer may not have intended.

**No reviews that contain medical claims.** Reviews that make specific medical claims (e.g., "ABA therapy cured my son's autism") should not be displayed because they may constitute unsupported medical claims under FTC guidelines.

**Approval required before production.** All reviews displayed on the proof layer are pending Bierman's approval before production deployment. The `CLIENT_CONFIRMATION_QUESTIONS_DELIVERABLE.md` includes a specific question about review usage approval.

---

## Review Schema Node Structure

Each Review node follows this pattern:

```json
{
  "@type": "Review",
  "@id": "https://bierman-proof-layer.manus.space/#review-{reviewer-slug}",
  "itemReviewed": {
    "@id": "https://bierman-proof-layer.manus.space/#localbusiness"
  },
  "author": {
    "@type": "Person",
    "name": "{Reviewer Name}"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "reviewBody": "{Full review text}"
}
```

`datePublished` is included only when the date is confirmed (currently only Nancy Passano: `"datePublished": "2025-03-10"`). It is omitted for the other 5 reviews to avoid adding unverified data.
