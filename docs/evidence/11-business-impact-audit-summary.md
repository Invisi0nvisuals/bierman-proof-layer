# Business Impact Audit Summary
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Source:** SEO Business Impact Audit + HubSpot/CallRail Attribution Addendum (May 2026), prepared by Alex Rodriguez / MFGSEO LLC dba alexseo.co  
**Source file:** [`source-artifacts/seo-business-impact-audit-addendum.md`](source-artifacts/seo-business-impact-audit-addendum.md)  
**Confidence:** High for CRM/GBP findings (downstream data); Medium for center-level outcome attribution (requires pilot to confirm).

---

## Why This Audit Matters

The SEO Business Impact Audit and its HubSpot/CallRail Attribution Addendum are not supplementary documents. They are the primary strategic framing for why the proof layer was built the way it was built.

The audit shifted the project away from a technical SEO or redesign framing. It established that Bierman's challenge is a **location-level visibility-to-inquiry-to-client system problem** — not a URL structure problem, not a page design problem, and not a simple schema gap problem. The proof layer was designed to respond to that system problem: a scalable, location-specific architecture that addresses GBP alignment, review visibility, local conversion paths, data-layer event taxonomy, and attribution-ready tracking — all at the location level.

Without the audit, the proof layer would have been a schema demonstration. With the audit, it is a documented response to a measurable business problem.

---

## What the Audit Added to the Proof-Layer Strategy

The audit provided three things that shaped the proof layer's architecture:

**1. Evidence that search is already working.** The audit confirmed that Bierman's organic and local search visibility is functional. This reframed the project: the goal is not to fix a broken acquisition engine, but to improve conversion and attribution at the location level where the engine is already delivering traffic and calls.

**2. Evidence that GBP is an off-website conversion surface.** The audit confirmed that a significant portion of Bierman's local actions (calls, direction requests) happen directly on GBP profiles — bypassing the website entirely. This justified building the proof layer's directions module, GBP alignment strategy, and local action data-layer events as first-class features, not afterthoughts.

**3. Evidence that review depth is a conversion bottleneck.** The audit identified specific high-visibility profiles with severe review gaps. This validated the decision to build the review module as a core feature of the proof layer and to include Review schema as a primary Rich Results target.

---

## Search Is Already Working

The HubSpot/CallRail attribution addendum provides downstream CRM evidence that search visibility is highly functional at Bierman:

- Over a 12-month window, Bierman generated **30,115 real leads** resulting in **326 reconciled active clients**.
- Combined search channels (Google My Business, Organic Search, Paid Search) drove **513 all-time active clients**.
- **Google My Business** was identified as the single highest-converting channel, with a **25.8% active rate** and **221 active clients** all-time.
- CallRail analysis identified **21,089 calls**, with GMB driving approximately **67% (14,032 calls)** of all tracked calls.

This evidence definitively refutes the hypothesis that technical URL defects are causing a catastrophic failure in organic acquisition. The acquisition engine is working. The gaps are in conversion, attribution, and location-level governance — not in visibility.

**Implication for the proof layer:** The proof layer does not need to prove that Bierman can rank. It needs to demonstrate that a location-specific page architecture can improve the conversion path from search visibility to intake inquiry — and that the attribution infrastructure can measure that improvement at the center level.

---

## GBP Is an Off-Website Conversion Surface

The audit's GBP Pass 2 review (December 2025–May 2026) confirmed that GBP actions routinely bypass the website:

- High-interaction profiles like Berkeley Heights (703 interactions, 133 calls), Princeton (737 interactions, 116 calls), and West Orange (758 interactions, 112 calls) generate significant call and direction volume directly from GBP.
- Appointment URLs are generally absent from GBP profiles.
- Location-specific UTM parameters are not currently applied to GBP website links.

This means that a meaningful portion of Bierman's local demand is invisible to the website analytics stack. Calls and direction requests that originate from GBP and do not result in a website visit are not captured in GA4 or GTM. They may be captured in CallRail (if the GBP phone number is a tracked number), but the CallRail-to-HubSpot reconciliation has documented gaps.

**Implication for the proof layer:** The proof layer's GBP alignment strategy, directions module, and local action data-layer events are designed to address this gap. The `directions_click`, `phone_click`, and `request_services_click` events in the data-layer spec are specifically designed to capture local intent signals that are currently invisible in the analytics stack.

---

## Review-to-Demand Gap

The audit identified a specific conversion risk at several high-visibility NJ profiles:

| Location | GBP Interactions (6 mo) | Review Count | Risk Profile |
|---|---|---|---|
| West Orange | 758 | 1 | High visibility, near-zero trust signals |
| Princeton | 737 | 3 | High visibility, near-zero trust signals |
| Piscataway | 424 | 4 | Moderate visibility, low trust signals |

Parents are finding these profiles and taking action, but the lack of reviews creates unnecessary friction before the intake call. A caregiver who finds a GBP profile with 1 review and then visits the location page to find no reviews displayed is more likely to continue researching than to submit an intake inquiry.

**Implication for the proof layer:** The review module was built as a core feature — not a nice-to-have. The 6 visible review cards on the Ramsey page, backed by `Review` schema and `AggregateRating`, demonstrate what a trust-signal-complete location page looks like. The pilot should include aggressive review generation for Piscataway as a first-wave action.

---

## Attribution and CallRail/HubSpot Reconciliation Gap

The audit identified a **6,419-call gap** between CallRail calls (21,089) and HubSpot-tagged contacts (7,085 with phone attribution). This gap confirms that the real-time integration between GTM, CallRail, and HubSpot remains leaky — even though Bierman has successfully performed retroactive reconciliation of 326 active clients.

The retroactive reconciliation demonstrates operational sophistication. The gap demonstrates that the real-time integration is not yet reliable enough to use for center-level outcome tracking.

**Implication for the proof layer:** The data-layer spec and local action event taxonomy are designed to be attribution-ready — meaning they preserve location context (location name, state, city) in every event so that when the CallRail/HubSpot integration is tightened, the location-level data is available for reconciliation. The proof layer does not attempt to fix the attribution gap; it creates the data foundation that makes fixing it possible.

---

## Ramsey/Piscataway Pilot Rationale

The audit validates the Ramsey-first, Piscataway-comparison pilot structure:

**Ramsey (Primary):** Retained as the primary candidate. 566 GBP interactions, 287 website clicks, 73 calls. Balanced activity profile makes it suitable for measuring the impact of CRO and CTA improvements. Enough review depth to demonstrate the review module.

**Piscataway (Comparison):** Retained as the comparison candidate. Direction-heavy profile (217 directions vs. 31 calls) suggests it may be serving existing families navigating to the center rather than new families in the research phase. This makes it useful for testing whether current visibility is serving existing families, new families, or both — and whether a stronger page architecture changes the call-to-direction ratio.

**Updated pilot tasks from the audit:**
- Initiate aggressive review generation for Piscataway (4 reviews is insufficient for a profile with 424 interactions).
- Implement location-specific UTM tracking on all GBP website links.
- Shift the CRM objective from "begin reconciliation" to "automate and QA the current retroactive reconciliation process."
- Validate CTA and form paths to ensure location context survives the submission.

---

## Second-Wave Location Candidates

Based on the audit's Pass 2 GBP review and business context, the following locations are identified as second-wave candidates after the Ramsey/Piscataway pilot:

| Location | Reason |
|---|---|
| West Orange | Highest GBP visibility (758 interactions); severe review gap (1 review) |
| Princeton | Strong non-branded/call activity; severe review gap (3 reviews) |
| Berkeley Heights | High call volume (133 calls); ideal for attribution validation |
| Eatontown | Strongest visible non-branded capture; ideal for content/SEO learning |
| Canal Winchester | Review-gap profile with active demand |
| Massachusetts & North Carolina | Broader market candidates based on strategic business priorities |

---

## How the Proof Layer Responds to the Audit

Every major proof-layer feature maps to a specific audit finding:

| Audit Finding | Proof Layer Response |
|---|---|
| GBP is an off-website conversion surface | Directions/Plan Your Visit module; `directions_click` data-layer event |
| Review-to-demand gap | 6-card review module with Review schema and AggregateRating |
| Attribution gap at center level | Location-specific data-layer event taxonomy preserving `location_name`, `location_state`, `location_city` |
| GBP UTM absence | `utm_source=gbp&utm_medium=local&utm_campaign={location}` pattern documented in GBP_ALIGNMENT_STRATEGY.md |
| Appointment URL absence | CTA architecture includes intake link; GBP appointment URL documented as a gap |
| Clinical leadership E-E-A-T gap | BCBA profiles with Person schema and `worksFor` relationship |
| NAP inconsistency across locations | Matrix-driven LOCATION constant; all NAP fields in a single source-of-truth object |
| Scalable pilot execution | Atomic location template; 9-variable swap to replicate any location |
| Acquisition-readiness documentation | 30+ documentation files including PRD, evidence trail, decision log, and this audit summary |

---

## Open Questions Created by the Audit

The audit resolved several strategic questions but created new operational questions that the pilot must address:

1. **Can center-level outcome data be segmented by Ramsey and Piscataway?** The current CRM data is aggregate. The pilot requires location-specific booked-consult and patient-start data to measure impact.

2. **What is the canonical source of truth for CallRail-to-HubSpot mapping?** The 6,419-call gap requires a defined reconciliation protocol, not just retroactive matching.

3. **Can GBP website links receive location-specific UTMs?** This requires Bierman's approval and coordination with whoever manages the GBP profiles.

4. **What review generation process is approved?** Aggressive review generation is recommended for Piscataway, but the process (who asks, how, when) requires Bierman's approval.

5. **Which phone numbers are canonical by location?** The audit confirms that phone routing complexity is a real issue. The proof layer documents 3 conflicting Ramsey phone values. This must be resolved before the pilot launches.

6. **How should duplicate or secondary GBP profiles be handled?** Several locations have duplicate or secondary profiles (Avon/Avondale, Broad Ripple). The attribution implications of these duplicates are not yet resolved.
