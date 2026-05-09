# Review Strategy
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026

---

## Overview

The review module surfaces public Google Business Profile reviews on the location page. Reviews are rendered as native HTML/CSS cards in the DOM and matched by `reviewBody` in JSON-LD `Review` schema nodes. This approach provides both visible social proof for caregivers and structured data for Google's Review Snippets rich result.

---

## Public Google Review Usage

All reviews displayed in the proof layer are sourced from public GBP profiles. Google reviews are publicly visible to anyone who searches for the business on Google Maps or Google Search. Using public review content on a business's own website is a standard practice for local businesses and is not a violation of Google's Terms of Service.

However, Bierman's explicit approval is recommended before production deployment, for two reasons:

1. **Brand control** — Bierman may have preferences about which reviews are featured and how they are displayed
2. **Content sensitivity** — some reviews may contain details about children, diagnoses, or treatment outcomes that Bierman may prefer not to amplify

**Approval status:** Pending. All reviews in the proof layer are flagged as `approved: false` until Bierman confirms.

---

## Visible Review Requirement

A core rule of this system: **no review schema exists for reviews that are not visible on the page.**

This means:
- Every `Review` node in the JSON-LD graph must correspond to a visible review card in the DOM
- The `reviewBody` in the schema must match the text visible in the DOM (full text, not truncated)
- If a review card is removed from the page, its corresponding `Review` node must be removed from the schema
- If `AggregateRating` is present, `reviewCount` must match the number of visible review cards

This rule is enforced because Google's Rich Results guidelines require that review schema reflect content that is accessible to users on the page.

---

## Review Schema Rules

1. **`itemReviewed` is required.** Every `Review` node must have `itemReviewed` pointing to the `LocalBusiness`/`MedicalClinic` entity. Missing `itemReviewed` causes the "critical issue" flag in Rich Results Test.

2. **`reviewBody` is required.** Every `Review` node must have `reviewBody` containing the full review text. Missing `reviewBody` causes the "invalid" flag in Rich Results Test.

3. **`reviewRating` is required.** Every `Review` node must have `reviewRating` with `@type: Rating`, `ratingValue`, and `bestRating`.

4. **`author` is required.** Every `Review` node must have `author` with `@type: Person` and `name`.

5. **No fake reviews.** All reviews must be sourced from real, public GBP reviews. Do not fabricate review content.

6. **No hidden review schema.** Do not add `Review` nodes for reviews that are not visible on the page.

7. **No fake `AggregateRating`.** `reviewCount` must match the number of visible review cards. `ratingValue` must match the visible aggregate.

8. **No microdata conflict.** Do not use `itemScope`/`itemType`/`itemProp` microdata on review card components if JSON-LD is also present. Use JSON-LD exclusively.

---

## Current Ramsey Review Module

The Ramsey proof layer displays 6 review cards in a featured + grid layout:

| Reviewer | Rating | Date | Notes |
|---|---|---|---|
| Ambar Arias | 5★ | Unknown | Featured card (left column) |
| Sohayb Stiti | 5★ | Unknown | Grid card |
| Kim Sedlacek | 5★ | Unknown | Grid card |
| Margarita Morales | 5★ | Unknown | Grid card |
| Anthony Siciliano | 5★ | Unknown | Grid card |
| Nancy Passano | 5★ | Mar 10, 2025 | Grid card |

**Layout:** Featured card (Ambar Arias) in a left column, 5 supporting cards in a 2-column right grid. Fully responsive: 1-col mobile → 2-col tablet → featured+grid desktop.

**Card design:** Native HTML/CSS React components. White card, teal left accent bar, colored initials avatar, SVG polygon gold stars, reviewer name, review text with 160-char truncation + "Read more" toggle, "Posted on Google" badge footer.

---

## Long Review Safety Concerns

Some GBP reviews may contain:
- Detailed descriptions of a child's diagnosis or treatment progress
- Specific clinical outcomes or therapy milestones
- Personal family information

For the proof layer, long reviews are truncated at 160 characters with a "Read more" toggle. The full text is in the `reviewBody` schema field but is not immediately visible without user interaction.

**Recommendation for production:** Review all reviews for content sensitivity before deployment. Consider limiting displayed reviews to those that describe the general experience without clinical specifics.

---

## Child/Diagnosis Detail Caution

Reviews that contain specific references to a child's diagnosis, treatment outcomes, or clinical progress should be evaluated carefully before production deployment. While these reviews are publicly visible on GBP, amplifying them on the website may raise questions about:

- Whether the family intended for this information to be prominently featured
- Whether the content could be perceived as making clinical outcome claims
- Whether the content is appropriate for a healthcare provider's marketing materials

**This is not a legal or HIPAA issue** — the reviews are public and were voluntarily posted by the reviewers. It is a brand and sensitivity consideration.

---

## `AggregateRating` Rules

`AggregateRating` is present in the Ramsey proof layer with `ratingValue: 5.0` and `reviewCount: 6`. This is valid because:

1. The aggregate rating (5.0) matches the visible review cards (all 5-star)
2. The review count (6) matches the number of visible review cards
3. The `AggregateRating` is embedded in the `LocalBusiness`/`MedicalClinic` node

If the number of displayed reviews changes, `reviewCount` must be updated to match. If the displayed reviews include ratings below 5 stars, `ratingValue` must be recalculated.

**Do not display `AggregateRating` schema if the aggregate rating and review count are not visibly displayed on the page.** If the star rating and review count are not shown to users, the schema is not supported by visible content.

---

## How to Scale Review Handling by Location

For each new location:

1. **Source reviews from the location's GBP profile.** Use the GBP review export or manually copy public reviews.
2. **Select 4–6 reviews** that represent the location's strengths without clinical specifics.
3. **Get Bierman approval** for the selected reviews before production deployment.
4. **Create native HTML/CSS review cards** using the `GBPReviewCard` component pattern.
5. **Add matching `Review` nodes** to the location's JSON-LD schema with `reviewBody`, `itemReviewed`, `reviewRating`, and `author`.
6. **Set `AggregateRating`** to match the visible review count and average rating.
7. **Run Rich Results Test** to confirm Review Snippets are valid.

The review card generation script (`/home/ubuntu/webdev-static-assets/reviews/generate_review_cards.py`) can generate image-based review cards as an alternative, but native HTML/CSS cards are preferred for schema alignment and accessibility.
