# GSC Query Findings
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Source:** GA4_Organic_LandingPages_Last12Months.csv; GA4_TrafficAcquisition_KeyEvents_Last12Months.csv; GA4_Events_Last12Months.csv; GA4_Organic_LocationLandingPages_Last12Months.csv (project shared files).  
**Confidence:** Directional. The data available is GA4 organic landing page data, not a full GSC query export. Query-level impression and CTR data was not available directly — findings are inferred from landing page performance patterns and supplemented by known industry query patterns for autism therapy providers. All findings should be treated as **GSC-informed opportunities**, not confirmed rankings or guaranteed traffic projections.

> **Important caveat:** This document uses careful language throughout. "GSC-informed" means the finding is directionally supported by available data. "Preliminary" means the data may be incomplete. "Visibility opportunity" means there is evidence of search demand that the current site may not be fully capturing. Nothing in this document should be interpreted as a guarantee of rankings, traffic, or leads.

---

## Overview

The available GA4 data covers organic landing page performance for biermanautism.com over the last 12 months. This data shows which pages are receiving organic traffic, but does not show the specific queries that drove that traffic. Full query-level analysis requires a GSC export, which was not available to the audit team.

Despite this limitation, the landing page data combined with known autism therapy search patterns provides directional evidence for several content and architecture decisions in the proof layer.

---

## Finding 1 — Educational Query Opportunity (Directional)

**GSC-informed finding:** Organic landing page data shows that resource and educational pages on biermanautism.com receive meaningful organic traffic, but the conversion rate from these pages to intake inquiries appears low based on the GA4 key events data. This pattern is consistent with a common healthcare SEO dynamic: informational queries (e.g., "what is ABA therapy," "how to get autism diagnosis," "ASD vs autism") drive traffic to educational pages, but those pages do not have a clear path to intake.

**Known query patterns for autism therapy providers:** Industry research and competitive analysis of autism therapy provider websites consistently shows high search volume for educational queries including "what is ABA therapy," "ABA therapy for autism," "autism diagnosis process," and "how to get autism evaluation." These queries represent caregivers in the research phase — not yet ready to request services, but actively seeking information.

**Build decision:** The proof layer includes a caregiver education bridge section with 3 resource cards (What is ABA Therapy, Insurance Guide, What to Expect) and an intake CTA positioned immediately after the educational content. This is designed to capture caregivers who arrive via informational queries and move them toward intake without requiring a separate funnel step.

**Confidence:** Directional. The specific query volumes for biermanautism.com are not available. The pattern is well-established in healthcare SEO and is supported by the landing page performance data.

---

## Finding 2 — "Level 1 Autism" Visibility Opportunity (Directional)

**GSC-informed finding:** The shift in diagnostic terminology from "Asperger's Syndrome" to "Level 1 Autism Spectrum Disorder" (following DSM-5 in 2013) created a significant search behavior change. Many caregivers now search for "Level 1 autism" rather than "Asperger's." This is a high-volume, high-intent query that autism therapy providers are competing for.

**Relevance to Bierman:** If biermanautism.com has content that uses older terminology (Asperger's) without also addressing Level 1 ASD, it may be missing visibility for caregivers using current diagnostic language. The proof layer's FAQ section includes questions that use current DSM-5 terminology.

**Build decision:** FAQ content uses current diagnostic terminology (ASD, Level 1 Autism) rather than outdated terms. The schema `description` fields for services use current terminology.

**Confidence:** Directional. Specific impression data for Bierman's Level 1 Autism queries is not available.

---

## Finding 3 — ASD vs. Autism Terminology (Directional)

**GSC-informed finding:** Caregivers search using both "autism" and "ASD" (Autism Spectrum Disorder) interchangeably. Content that uses only one term may miss visibility for queries using the other. The proof layer uses both terms throughout the page content and schema.

**Build decision:** Page content, FAQ questions, and schema `description` fields use both "autism" and "ASD" where appropriate. The `LocalBusiness.description` field includes both terms.

**Confidence:** Directional. Standard SEO practice for healthcare providers.

---

## Finding 4 — "Can Autism Be Cured" Query Pattern (Directional)

**GSC-informed finding:** "Can autism be cured" is a high-volume informational query that represents caregivers seeking to understand the nature of autism and what therapy can realistically achieve. This query is not directly targeted by the proof layer, but it informs the tone and framing of the caregiver education content.

**Relevance to Bierman:** ABA therapy providers who address this query honestly — explaining that ABA therapy focuses on skill development and quality of life, not a "cure" — build trust with caregivers who have already encountered misleading information elsewhere. This is an E-E-A-T signal.

**Build decision:** The proof layer's caregiver education bridge and FAQ content uses honest, outcome-focused language about ABA therapy. No unsupported clinical claims are made.

**Confidence:** Directional. This is a content tone and framing decision, not a direct query-targeting decision.

---

## Finding 5 — Caregiver Training / Parent Support Opportunity (Directional)

**GSC-informed finding:** The GA4 landing page data shows that Bierman's caregiver training and parent support content receives organic traffic. This is consistent with a known search pattern: parents of children with autism actively search for support resources, training programs, and community connections.

**Relevance to Bierman:** Bierman's caregiver training program is a differentiator — not all ABA therapy providers offer structured parent training. If this differentiator is not visible on location pages, caregivers who are specifically searching for providers with parent training programs may not identify Bierman as a match.

**Build decision:** The proof layer's caregiver education bridge section highlights the parent partnership approach. The FAQ includes a question about parent involvement in the therapy process.

**Confidence:** Directional. Supported by landing page traffic data and known caregiver search patterns.

---

## Finding 6 — New Jersey / Near-Me Local Intent Opportunity (Directional)

**GSC-informed finding:** The GA4 organic location landing page data (GA4_Organic_LocationLandingPages_Last12Months.csv) shows that location-specific pages receive organic traffic, but the volume and conversion rate suggest that local intent queries ("ABA therapy Ramsey NJ," "autism center near me," "ABA therapy Bergen County") may not be fully captured by the current location page architecture.

**Known local intent query patterns:** "ABA therapy near me," "[city] ABA therapy," "[county] autism center," and "autism therapy [zip code]" are high-intent queries from caregivers who are ready to evaluate specific providers. These queries are best captured by location pages with strong local signals: GBP-aligned NAP, `areaServed` schema, location-specific content, and GBP review visibility.

**Build decision:** The Ramsey proof layer is specifically architected for local intent capture: location-specific H1 ("ABA Therapy in Ramsey, New Jersey"), GBP-aligned NAP card, `areaServed` array covering Ramsey, Bergen County, and surrounding communities, and `GeoCoordinates` for precise location signals.

**Confidence:** Directional. Specific local query impression data for Ramsey is not available. The architecture follows established local SEO best practices.

---

## How Educational Visibility Informed the "Support for Families" and ASD Education Sections

The caregiver education bridge section on the Ramsey page was directly informed by the pattern of educational query traffic to biermanautism.com. The logic is straightforward: if caregivers are arriving on educational pages but not converting to intake inquiries, the gap is not in the content — it is in the connection between the content and the intake flow.

The education bridge addresses this by placing an intake CTA immediately after the educational content, framed as the natural next step: "Ready to learn if Bierman Ramsey is the right fit for your family?" This is not a hard sell — it is a logical continuation of the caregiver's research journey.

---

## What Full GSC Access Would Add

If the audit team had full GSC query-level access for biermanautism.com, the following additional analysis would be possible:

| Analysis | Value |
|---|---|
| Top queries by location URL | Identify which queries are driving traffic to each location page |
| Impression-to-CTR gap by query | Identify high-impression, low-CTR queries where content improvements could increase clicks |
| Featured snippet opportunities | Identify queries where Bierman is ranking in positions 2–5 and could capture position 0 with FAQ or structured content |
| Local pack vs. organic split | Understand what share of location page traffic comes from local pack vs. organic results |
| Query trend analysis | Identify seasonal patterns in autism therapy search demand |

The agency or Bierman's internal team can run this analysis from GSC. The findings would directly inform FAQ content expansion, title tag optimization, and meta description improvements for each location page.
