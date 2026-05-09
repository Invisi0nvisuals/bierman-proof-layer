# Evidence Index
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Purpose:** A high-level evidence map showing how the project moved from audit findings to the Ramsey proof-layer build. Every major architectural, content, and schema decision in this repo is traceable to a specific evidence source documented here.

---

## How to Read This Index

Each row represents a distinct evidence source. The **Key Finding** column summarizes what the evidence revealed. The **Build Decision** column documents what was built in response. The **Status / Confidence** column reflects how well-confirmed the finding is. The **Related Repo File** column points to the deeper documentation.

---

## Evidence Map

| # | Evidence Source | Artifact / Data Pulled | Key Finding | Build Decision | Status / Confidence | Related Repo File |
|---|---|---|---|---|---|---|
| 01 | Live site structural audit | biermanautism.com page review | Homepage CTA fragmentation; location pages lack local trust signals, schema, and review visibility; service-to-location disconnect | Built full location page architecture with GBP-verified NAP, schema graph, review module, clinical leadership, and intake CTAs | High confidence — directly observable | [01-current-site-audit.md](01-current-site-audit.md) |
| 02 | Current Ramsey page review | biermanautism.com/locations/ramsey/ | Minimal schema (no Review, no FAQ, no VideoObject, no Person); no GBP-verified NAP card; no review display; no directions module | Rebuilt Ramsey as master template with 26-node schema graph, GBP-aligned NAP, 6 visible reviews, directions section | High confidence | [01-current-site-audit.md](01-current-site-audit.md) |
| 03 | Current Piscataway page review | biermanautism.com/locations/piscataway/ | Same structural gaps as Ramsey; NAP discrepancy between site and GBP | Piscataway queued as Phase 2 build; NAP discrepancy flagged for client confirmation | High confidence — discrepancy documented | [02-location-matrix-findings.md](02-location-matrix-findings.md) |
| 04 | GBP Manager / 33 verified profiles | GBP Manager screenshot | 33 verified GBP profiles confirmed across network; duplicate profile detected at Broad Ripple | Used 33 as internal target; flagged Broad Ripple duplicate for client resolution | High confidence — GBP screenshot | [03-gbp-findings.md](03-gbp-findings.md) |
| 05 | Location Matrix v3 | Internal matrix spreadsheet | 35 internal tracking rows vs. 33 verified GBP profiles; Avon/Avondale ambiguity; Brooklyn Park status unknown; Ramsey phone discrepancy | Matrix used as source of truth for page generation; all discrepancies flagged in CLIENT_CONFIRMATION_QUESTIONS | Medium confidence — several fields unconfirmed | [02-location-matrix-findings.md](02-location-matrix-findings.md) |
| 06 | GBP review evidence | Public GBP reviews for Ramsey | 6 public 5-star reviews available; reviews contain social proof relevant to caregiver decision-making | Built native HTML/CSS review card module; added Review schema with reviewBody, itemReviewed, reviewRating | High confidence — reviews are public | [07-review-evidence.md](07-review-evidence.md) |
| 07 | GSC educational query findings | GA4_Organic_LandingPages_Last12Months.csv; GSC impressions data | High-impression, low-CTR queries around autism education, caregiver support, ASD vs. autism terminology | Built caregiver education bridge section; added FAQ targeting informational queries; added ASD education content | Directional — GSC data is preliminary | [04-gsc-query-findings.md](04-gsc-query-findings.md) |
| 08 | GSC local / near-me query findings | GSC query data; GA4 organic landing pages | "ABA therapy near me" and "[city] ABA therapy" queries generating impressions with low CTR on current location pages | Built location-specific H1, areaServed schema, GBP-aligned NAP card, and nearby locations module | Directional — GSC data is preliminary | [04-gsc-query-findings.md](04-gsc-query-findings.md) |
| 09 | Rich Results Test — production baseline | Rich Results Test on biermanautism.com/locations/ramsey/ | 3 valid groups (Breadcrumbs, Organization, WebSite); no Review, FAQ, LocalBusiness, or Video rich results | Built toward 6 valid groups; added LocalBusiness/MedicalClinic, FAQPage, Review, VideoObject schema | High confidence — test is deterministic | [05-rich-results-baseline.md](05-rich-results-baseline.md) |
| 10 | Rich Results Test — proof layer results | Rich Results Test on bierman-proof-layer.manus.space | 12 valid items, 0 invalid, 0 critical issues across 6 groups: Breadcrumbs, FAQ, Local businesses, Organization, Review snippets (7), Videos | Schema architecture confirmed eligible for all 6 rich result groups | High confidence — confirmed May 9, 2026 | [05-rich-results-baseline.md](05-rich-results-baseline.md) |
| 11 | Schema Markup Validator / entity graph | validator.schema.org on proof layer | 26-node entity graph validates cleanly; all required relationships present (LocalBusiness → Person, Service, Review, FAQPage, VideoObject) | Entity graph architecture confirmed as production-ready | High confidence | [06-schema-validation-log.md](06-schema-validation-log.md) |
| 12 | URL architecture findings | biermanautism.com URL audit | Current pattern `/locations/{slug}/` is flat and non-hierarchical; lacks state/city structure for multi-state network | Proof layer uses `/locations/{state}/{city}/` pattern as recommendation; no production migration yet | Medium confidence — migration requires client approval | [08-url-strategy-findings.md](08-url-strategy-findings.md) |
| 13 | Tracking / privacy audit findings | Page source audit; GTM container review | Multiple third-party tracking scripts on production; no privacy firewall; data layer not documented | Proof layer has zero tracking; DATA_LAYER_SPEC.md documents safe future taxonomy with explicit disallowed fields | High confidence — directly observable | [09-tracking-privacy-findings.md](09-tracking-privacy-findings.md) |
| 14 | Directions / local action findings | Current Ramsey page; GBP local actions | No directions module on current location pages; no driving directions, transit info, or parking info | Built full directions section with embedded map, driving directions from 4 nearby areas, transit and parking info | High confidence | [03-gbp-findings.md](03-gbp-findings.md) |
| 15 | Insurance logo / payer asset collection | Bierman insurance page; GBP profile | 9 insurance plans identified for NJ locations; logos sourced from public brand assets | Built insurance section with 9 carrier logos, Horizon BCBS NJ feature card, insurance verification CTA | Medium confidence — list not yet confirmed by Bierman | [CLIENT_CONFIRMATION_QUESTIONS_DELIVERABLE.md](../CLIENT_CONFIRMATION_QUESTIONS_DELIVERABLE.md) |
| 16 | Team / clinical leadership page findings | biermanautism.com/team/ | Clinical leadership not surfaced on location pages; BCBA credentials not visible to caregivers at the location level | Built clinical leadership section with 2 BCBA profiles; added Person schema with worksFor relationship | High confidence | [01-current-site-audit.md](01-current-site-audit.md) |
| 17 | Caregiver training / ASD education page findings | biermanautism.com/resources/; GSC query data | Caregiver education content exists but is not connected to location page intake flow | Built caregiver education bridge section with 3 resource cards and intake CTA positioned after educational content | High confidence | [04-gsc-query-findings.md](04-gsc-query-findings.md) |
| 18 | Social preview / Meta crawler limitation | Meta Sharing Debugger on proof layer URL | 403 response from Manus CDN infrastructure; OG tags are correct in HTML; issue is platform-level, not tag-level | Documented as known infrastructure limitation; resolves on custom domain deployment | High confidence — confirmed cause | [09-tracking-privacy-findings.md](09-tracking-privacy-findings.md) |
| 19 | SEO Business Impact Audit + HubSpot/CallRail Attribution Addendum | Downstream CRM data: 30,115 leads, 326 active clients, 513 search-driven active clients; GBP Pass 2 NJ review | Search is the dominant acquisition engine; GBP is an off-website conversion surface; Google My Business drove 25.8% active rate and 221 active clients all-time; 6,419-call gap between CallRail and HubSpot; review-to-demand gap at West Orange, Princeton, Piscataway | Review module, directions module, data-layer event taxonomy, GBP alignment strategy, matrix-driven scaling, pilot-first approach, acquisition-readiness documentation | High confidence for CRM/GBP findings; Medium for center-level outcomes | [11-business-impact-audit-summary.md](11-business-impact-audit-summary.md) · [source-artifacts/seo-business-impact-audit-addendum.md](source-artifacts/seo-business-impact-audit-addendum.md) |
| 20 | 32-Location Data Matrix v3 | Bierman_32Location_DataMatrix_v3.xlsx | Location-level data for 32+ locations including GBP status, NAP fields, phone numbers, review counts, and discrepancy flags | Used as source of truth for location data model; all discrepancies flagged for client confirmation | Medium confidence — several fields unconfirmed | [source-artifacts/bierman-location-data-matrix-v3.xlsx](source-artifacts/bierman-location-data-matrix-v3.xlsx) · [02-location-matrix-findings.md](02-location-matrix-findings.md) |
| 21 | GBP Pass 2 NJ review (Dec 2025–May 2026) | GBP interaction data for Tier 2 NJ profiles | Berkeley Heights: 703 interactions, 133 calls; Princeton: 737 interactions, 116 calls; West Orange: 758 interactions, 112 calls; appointment URLs absent; GBP website links lack UTMs | Second-wave location candidates identified; GBP UTM governance gap documented; appointment URL gap documented | High confidence — directly from GBP Manager data | [11-business-impact-audit-summary.md](11-business-impact-audit-summary.md) · [03-gbp-findings.md](03-gbp-findings.md) |
| 22 | Operating system documentation | 10 workflow definitions, 8 approval gates, deliverables-vs-internal-methods inventory | The proof layer was produced by a controlled multi-agent operating model with reusable workflows for research, QA, build, validation, and documentation; internal methods are not transferred unless separately agreed | All build decisions governed by documented approval gates; operating model documented for acquisition review and repeatability | High confidence — fully documented | [../OPERATING_SYSTEM.md](../OPERATING_SYSTEM.md) |

---

## Evidence Confidence Levels

| Level | Meaning |
|---|---|
| **High confidence** | Finding is directly observable, test-confirmed, or from a deterministic tool (Rich Results Test, Schema Validator, page source) |
| **Medium confidence** | Finding is based on data that may be incomplete, preliminary, or requires client confirmation |
| **Directional** | Finding is based on GSC/GA4 data that is preliminary or partial; indicates opportunity but does not guarantee outcome |

---

## What Is Still Missing

The following evidence items were referenced in the audit but could not be fully documented due to access limitations or pending client confirmation:

| Missing Item | Why Missing | Resolution Path |
|---|---|---|
| Full GSC query export for Ramsey URL | GSC access not available to audit team | Bierman or agency to export GSC data for `/locations/ramsey/` |
| Full GSC query export for Piscataway URL | GSC access not available | Same as above |
| GTM container audit | GTM access not available | Agency to provide GTM container export or audit |
| GA4 conversion event audit | GA4 access limited to exported CSVs | Agency to provide GA4 event configuration |
| GBP photo ownership confirmation | GBP access not available | Bierman to confirm which GBP photos are owner-uploaded vs. user-uploaded |
| Confirmed phone numbers | 3 conflicting values for Ramsey; 2 for Piscataway | Bierman to call front desk or check GBP while logged in |
| Insurance list confirmation | Not confirmed by Bierman | Bierman to confirm accepted plans per location |
| Center-level booked-consult and patient-start data | CRM data is aggregate (state-level); not segmented by Ramsey/Piscataway | Pilot must establish center-level outcome tracking to measure impact |
| CallRail-to-HubSpot real-time integration audit | 6,419-call gap identified but root cause not fully diagnosed | Bierman/agency to audit GTM → CallRail → HubSpot integration for real-time mapping |
| GBP UTM implementation approval | UTMs not currently applied to GBP website links | Bierman to confirm whether location-specific UTMs can be added to GBP website links |
| Appointment URL standardization | Appointment URLs absent from most GBP profiles | Bierman to confirm whether appointment URLs should be added and what the standard URL should be |
