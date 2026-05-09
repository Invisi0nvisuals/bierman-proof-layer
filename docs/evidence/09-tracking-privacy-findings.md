# Tracking and Privacy Findings
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Source:** biermanautism.com page source audit; DATA_LAYER_SPEC.md; proof layer implementation.  
**Confidence:** High for production tracking observation (directly observable); Medium for GTM/GA4 configuration details (full access not available).

---

## Overview

This document records the tracking and privacy audit findings for biermanautism.com, the proof layer's zero-tracking implementation, the safe data-layer-only strategy for future measurement, and the rationale for treating tracking privacy as a business-critical concern for a healthcare provider.

---

## GTM / GA4 / GSC Audit Context

The audit team did not have direct access to the biermanautism.com GTM container, GA4 property, or GSC account. The following observations are based on page source analysis and the GA4 data exports provided as project shared files.

**What was observable from page source:**
- Google Tag Manager container is present on biermanautism.com
- Google Analytics (GA4) is firing via GTM
- Additional third-party scripts are present (specific vendors not documented here to avoid inaccuracy)
- No server-side GTM implementation was detected

**What was not accessible:**
- GTM container configuration (triggers, tags, variables)
- GA4 event configuration and conversion definitions
- GSC query-level data
- CallRail configuration (if present)
- HubSpot configuration (if present)

---

## Production Tracking Concerns

The following concerns are based on observable evidence and general healthcare tracking best practices. They are not accusations of policy violations — they are risk areas that warrant review.

**Concern 1 — Third-party scripts on healthcare pages.** The presence of multiple third-party tracking scripts on a healthcare provider's website creates HIPAA-adjacent risk. While HIPAA does not directly regulate website analytics, the FTC and HHS have issued guidance indicating that tracking technologies on healthcare websites that collect IP addresses, browsing behavior, or health-related search queries may constitute impermissible disclosures of protected health information (PHI) when combined with identifiable information.

In 2022 and 2023, the FTC and HHS issued guidance specifically addressing pixel tracking on healthcare websites. Several healthcare providers have faced enforcement actions related to third-party tracking pixels (Meta Pixel, Google Analytics) on pages that collect health information.

**Concern 2 — No documented data layer taxonomy.** Without a documented data layer specification, it is impossible to audit what data is being collected, how it is being used, and whether any prohibited fields (patient name, diagnosis, insurance information) are being captured.

**Concern 3 — No privacy firewall.** A server-side GTM implementation with a privacy firewall would allow Bierman to control what data is sent to third-party vendors, strip prohibited fields before they leave the server, and maintain an audit log of data flows. The current client-side GTM implementation does not provide these controls.

---

## No Live Tracking in the Proof Layer

The proof layer has zero tracking scripts. This is a deliberate design decision, not an oversight.

The proof layer is a development review environment. It is not connected to any analytics platform, advertising platform, or CRM. No user data is collected. No cookies are set for tracking purposes. No third-party scripts are loaded.

This was verified by page source audit: the proof layer `index.html` contains no GTM container, no GA4 script, no Meta Pixel, no CallRail script, and no other tracking code.

The proof layer's `robots.txt` includes `noindex` and `nofollow` directives to prevent search engine indexing. The page header includes a visible "Proof Layer · Development Review Environment · noindex · nofollow · No tracking · No patient data" banner.

---

## Safe Data-Layer-Only Strategy

When the proof layer architecture moves to production, the recommended tracking approach is a data-layer-only strategy: define a clean, documented data layer taxonomy first, implement it in the page code, and then configure GTM to read from the data layer rather than directly accessing DOM elements or URL parameters.

The data layer taxonomy is documented in `docs/DATA_LAYER_SPEC.md`. Key principles:

**Allowed fields:** `page_type`, `location_name`, `location_state`, `location_city`, `service_category`, `cta_label`, `cta_position`, `form_step`, `form_completion_status`.

**Prohibited fields:** Any field that could identify a specific patient, caregiver, or family member. This includes: `patient_name`, `caregiver_name`, `diagnosis`, `insurance_provider`, `date_of_birth`, `phone_number`, `email_address`, and any field derived from form inputs on the intake form.

The data layer fires events for: page views, CTA clicks, phone number clicks, form step completions, and video plays. It does not fire events for form field inputs or any data entered by users.

---

## Future Server-Side GTM / Privacy Firewall Recommendation

The recommended long-term tracking architecture for a healthcare provider with 33+ locations is:

**Server-side GTM container** — A GTM container running on a first-party server (e.g., `metrics.biermanautism.com`) that receives all tracking events from the client and controls what data is forwarded to third-party vendors. This eliminates the direct browser-to-vendor data flow that creates HIPAA-adjacent risk.

**Privacy firewall layer** — A configuration within the server-side GTM container that strips prohibited fields before forwarding events to GA4, Meta, or other platforms. This provides an audit-ready record of what data was and was not sent to each vendor.

**Consent management platform (CMP)** — A cookie consent banner that complies with CCPA (California) and any applicable state privacy laws. Even if HIPAA does not directly apply to website analytics, state privacy laws increasingly require explicit consent for health-related data collection.

This architecture is not required for the proof layer or the pilot. It is a production-readiness recommendation for when the new location page architecture is deployed at scale.

---

## Why This Matters for Healthcare and Acquisition Diligence

For a healthcare provider, tracking and privacy architecture is not just a compliance issue — it is a business risk and an acquisition diligence item.

**Business risk:** An enforcement action related to tracking pixels on a healthcare website can result in significant fines, reputational damage, and required remediation. The FTC has pursued healthcare providers for tracking pixel violations. The risk is real and growing.

**Acquisition diligence:** A potential acquirer conducting due diligence on Bierman Autism Centers would review the tracking and privacy architecture as part of their technology and compliance review. A documented, clean data layer taxonomy and a server-side GTM implementation would be viewed positively. Undocumented third-party tracking scripts on healthcare pages would be flagged as a risk item.

The proof layer's zero-tracking implementation and the DATA_LAYER_SPEC.md documentation demonstrate that the new architecture was designed with privacy compliance in mind from the start. This is a differentiator compared to a traditional agency-built website that adds tracking scripts without a documented taxonomy.

---

## Meta / Facebook 403 — Documented as Manus Hosting Limitation

The Meta Sharing Debugger returned a 403 response when attempting to scrape the proof layer URL (`https://bierman-proof-layer.manus.space/`). This is a Manus CDN infrastructure limitation — the hosting layer blocks certain scrapers at the infrastructure level before the request reaches the application.

This is not an OG tag issue. The OG tags in `index.html` are correct: `og:title`, `og:description`, `og:image`, `og:url`, and `og:type` are all present and properly formatted. The tags will work correctly when the architecture is deployed to a custom domain (e.g., `biermanautism.com` or a subdomain).

The 403 does not affect: Google Rich Results Test (returns 200), Schema Markup Validator (returns 200), Google Search Console crawling (would return 200 on production), or any other SEO validation tool. It is exclusively a Meta scraper limitation on the Manus hosting infrastructure.
