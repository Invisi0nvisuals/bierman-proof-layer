# Current Site Audit Findings
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Source:** Direct review of biermanautism.com, specifically the Ramsey and Piscataway location pages, homepage, and supporting pages.  
**Confidence:** High — all findings are directly observable from the live site.

---

## Audit Scope

This audit reviewed the current biermanautism.com website with a focus on: homepage CTA architecture, location page structure, schema implementation, local trust signals, service-to-location content mapping, review visibility, clinical leadership presentation, caregiver education content, and conversion flow. The audit did not access the CMS, GTM container, GA4 property, or GSC account directly — those are covered in separate evidence files.

---

## Finding 1 — Homepage CTA Fragmentation

**Observation:** The biermanautism.com homepage presents multiple competing CTAs without a clear primary action. "Start Now," "Find a Location," "Learn More," and phone numbers appear in proximity without a clear hierarchy. The primary intake action — requesting services — is not consistently the most prominent CTA.

**Impact:** Caregiver intent is diluted at the top of the funnel. A caregiver arriving via a branded search or referral who is ready to inquire faces friction in identifying the next step.

**Proof-layer response:** The Ramsey location page establishes a single primary CTA ("Request Services in Ramsey") and a secondary CTA (phone number) in the hero section. The nav also carries a persistent "Request Services" CTA. All CTAs link to the biermanautism.com intake form — no dead ends, no competing actions.

---

## Finding 2 — Location Page Duplication Without Differentiation

**Observation:** The current location pages (Ramsey, Piscataway, and others reviewed) share nearly identical content. The only differentiating elements are the location name, address, and phone number. There is no location-specific clinical leadership, no location-specific review content, no location-specific directions module, and no location-specific caregiver education content.

**Impact:** Duplicate or near-duplicate content across 33+ location pages creates thin content risk. More importantly, it misses the opportunity to build genuine local relevance — the signals that drive local pack rankings and caregiver trust.

**Proof-layer response:** The Ramsey page is built entirely from location-specific data: Ramsey-specific clinical leaders (Hillary Genovese, Victoria Verdun), Ramsey-specific GBP reviews, Ramsey-specific directions (from Mahwah, Ridgewood, Paramus, Hackensack), and Ramsey-specific schema. The `LOCATION` constant in `Home.tsx` makes every element location-specific by design.

---

## Finding 3 — Intake Friction ("Start Now" Flow)

**Observation:** The primary intake CTA on the current site is "Start Now," which leads to a general intake form. The form is not location-specific — a caregiver who arrived on the Ramsey page and clicks "Start Now" lands on a form that does not pre-populate the location or indicate that they are requesting services at Ramsey specifically.

**Impact:** Intake form abandonment risk increases when the form does not reflect the caregiver's context. Location-specific intake flows (or at minimum, location-pre-selected forms) reduce friction and improve conversion.

**Proof-layer response:** All CTAs on the Ramsey page use location-specific language: "Request Services in Ramsey." The CTA links to the biermanautism.com intake form. The proof layer does not implement a live form (by design — no patient data collection), but the CTA architecture is designed to support a location-specific intake URL parameter when production is ready.

---

## Finding 4 — Service-to-Location Disconnect

**Observation:** The current location pages do not list the specific services offered at each location. A caregiver visiting the Ramsey page cannot confirm from that page alone whether Ramsey offers speech-language therapy, occupational therapy, or diagnostic evaluations — they must navigate to a separate services page.

**Impact:** Service-to-location disconnect creates a navigation gap that increases bounce rate and reduces conversion. It also weakens the service + location keyword signals that drive local search rankings.

**Proof-layer response:** The Ramsey page includes 4 service cards (ABA Therapy, Speech-Language Therapy, Occupational Therapy, Diagnostic Evaluation) with descriptions and intake CTAs. Each service has a corresponding `Service` schema node with `areaServed` pointing to Ramsey and Bergen County. This creates explicit service-location relationships in both the content and the entity graph.

---

## Finding 5 — Limited Local Trust Signals

**Observation:** The current location pages do not display GBP reviews, GBP-verified NAP information, trust badges, or clinical leadership credentials. A caregiver visiting the Ramsey page has no visible evidence of the location's reputation, accreditation, or clinical team.

**Impact:** Trust signals are a documented factor in healthcare provider selection. Caregivers evaluating ABA therapy providers are making high-stakes decisions for their children. The absence of visible trust signals increases the likelihood that a caregiver will leave the page to search for reviews on Google Maps or Yelp.

**Proof-layer response:** The Ramsey page includes: a GBP-verified NAP card with the "GBP Verified Location" badge; 6 native HTML/CSS review cards sourced from public GBP reviews; trust badges (Group of the Year 2022, BACB ACE, CASP); and clinical leadership profiles for Hillary Genovese (Clinical Director, BCBA) and Victoria Verdun (BCBA). All trust signals are above the fold or within the first scroll.

---

## Finding 6 — Map and Directions Weakness

**Observation:** The current location pages do not include an embedded map, driving directions, transit information, or parking information. The only location-finding aid is an address displayed in text.

**Impact:** Caregivers who are evaluating whether a location is accessible from their home or workplace cannot make that assessment from the location page. This is a documented local action signal — Google tracks "get directions" clicks from GBP profiles as a measure of local intent. The absence of a directions module on the website means this intent signal is only captured at the GBP level, not the website level.

**Proof-layer response:** The Ramsey page includes a full directions section: an embedded Google Maps iframe centered on the Ramsey location, driving directions from 4 nearby areas (Mahwah, Ridgewood, Paramus, Hackensack), NJ Transit bus route information, and parking information. The `hasMap` schema property links the LocalBusiness entity to the GBP profile map URL.

---

## Finding 7 — Schema Limitations on Production Location Pages

**Observation:** The current biermanautism.com location pages have minimal structured data. The Rich Results Test on the Ramsey production page returns 3 valid groups: Breadcrumbs, Organization, and WebSite. There is no LocalBusiness/MedicalClinic schema, no Review schema, no FAQPage schema, no VideoObject schema, and no Person schema.

**Impact:** The absence of LocalBusiness schema means Google cannot confirm the location's NAP, hours, or service area from structured data. The absence of Review schema means the location is not eligible for Review Snippet rich results. The absence of FAQPage schema means the location is not eligible for FAQ rich results. These are measurable gaps in rich result eligibility.

**Proof-layer response:** The Ramsey proof layer has a 26-node JSON-LD entity graph covering: WebSite, WebPage, Organization, LocalBusiness/MedicalClinic, PostalAddress, GeoCoordinates, OpeningHoursSpecification, BreadcrumbList, FAQPage (13 Q&A), VideoObject, OfferCatalog, Service (×4), Person (×2), Review (×6), AggregateRating, and ImageObject (×3). Rich Results Test result: 12 valid items, 0 invalid, across 6 groups.

---

## Finding 8 — Review Visibility Opportunity

**Observation:** The Ramsey GBP profile has multiple 5-star reviews. None of these reviews are visible on the biermanautism.com Ramsey location page. Caregivers who want to read reviews must leave the website and go to Google Maps.

**Impact:** Reviews are a primary trust signal in healthcare provider selection. Keeping reviews off the website creates an unnecessary exit point in the conversion flow. It also means the website is not eligible for Review Snippet rich results, which can display star ratings directly in Google Search results.

**Proof-layer response:** 6 public GBP reviews are displayed as native HTML/CSS review cards on the Ramsey page. Review schema with `reviewBody`, `itemReviewed`, `reviewRating`, and `author` is present for all 6 reviews. AggregateRating (5.0/6) is embedded in the LocalBusiness entity. The Rich Results Test confirms Review Snippets as a valid group (7 items, including the AggregateRating node).

---

## Finding 9 — Clinical Leadership Not Surfaced at Location Level

**Observation:** Bierman has a team page (biermanautism.com/team/) with clinical leadership profiles. However, the individual location pages do not surface the clinical leaders at that specific location. A caregiver visiting the Ramsey page cannot see who leads the clinical team at Ramsey without navigating to the general team page.

**Impact:** Clinical leadership visibility is a trust and authority signal. For a healthcare provider, the credentials and experience of the clinical team are a primary decision factor. Surfacing BCBA credentials at the location level strengthens both caregiver trust and Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals.

**Proof-layer response:** The Ramsey page includes a clinical leadership section with profiles for Hillary Genovese (Clinical Director, BCBA) and Victoria Verdun (BCBA). Each profile has a headshot, name, title, credentials, and a brief bio. Person schema nodes are present for both, with `worksFor` relationships linking them to the Ramsey LocalBusiness entity.

---

## Finding 10 — Caregiver Education Content Not Connected to Intake

**Observation:** biermanautism.com has caregiver education content (resources, blog posts, FAQ pages) that addresses informational queries about autism, ABA therapy, and the intake process. However, this content is not connected to the location page intake flow. A caregiver who arrives via an informational query (e.g., "what is ABA therapy") lands on a resource page that does not have a clear path to requesting services at a specific location.

**Impact:** GSC data (directional) shows high-impression, low-CTR queries around autism education and caregiver support. These queries represent caregivers in the research phase who are not yet ready to request services — but who could be moved toward intake with a well-placed education bridge. The current architecture does not capture this opportunity.

**Proof-layer response:** The Ramsey page includes a caregiver education bridge section with 3 resource cards (What is ABA Therapy, Insurance Guide, What to Expect) and an intake CTA positioned immediately after the educational content. The framing positions the intake as the natural next step after learning — not as a separate funnel.

---

## Summary Table

| Finding | Current State | Proof-Layer Response | Impact Level |
|---|---|---|---|
| CTA fragmentation | Multiple competing CTAs, no clear primary | Single primary CTA + persistent nav CTA | High |
| Location page duplication | Near-identical content across 33+ pages | Location-specific data model via LOCATION constant | High |
| Intake friction | Generic "Start Now" form, not location-specific | "Request Services in Ramsey" CTA with location context | High |
| Service-to-location disconnect | No services listed on location pages | 4 service cards + Service schema with areaServed | High |
| Limited local trust signals | No reviews, no GBP NAP, no badges | GBP NAP card, 6 reviews, trust badges, BCBA profiles | High |
| Map/directions weakness | Address text only | Embedded map, 4 driving directions, transit, parking | Medium |
| Schema limitations | 3 valid Rich Results groups | 12 valid items, 6 groups, 26-node entity graph | High |
| Review visibility | No reviews on page | 6 native HTML/CSS review cards + Review schema | High |
| Clinical leadership | Team page only, not at location level | 2 BCBA profiles + Person schema at location level | Medium |
| Caregiver education disconnect | Resources exist but not connected to intake | Education bridge section with intake CTA | Medium |
