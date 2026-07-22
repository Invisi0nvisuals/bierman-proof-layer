# Decision Log
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Purpose:** A chronological record of every major architectural, content, and schema decision made during the proof layer build. Each entry documents the evidence that informed the decision, the alternatives considered, and the current status.

---

## How to Read This Log

Each entry represents a decision point — a moment where a choice was made that shaped the architecture, content, or schema of the proof layer. The log is chronological, from the earliest decisions (project framing) to the most recent (documentation). Entries are not exhaustive — they cover decisions with meaningful alternatives or evidence requirements.

---

## Decision 01 — Ramsey First as the Atomic Location Template

| Field | Detail |
|---|---|
| **Date / Stage** | Project initiation |
| **Decision** | Build Ramsey, NJ as the first and only location in the proof layer. Use it as the atomic template for all future location pages. |
| **Evidence** | Ramsey is a verified GBP location with public reviews, a YouTube video, and confirmed clinical leadership. It has enough data to build a fully populated page without placeholders. |
| **Reason** | An atomic template built from a real, data-rich location is more convincing as a proof of concept than a template built from placeholder data. Ramsey also has the most complete data of any NJ location reviewed. |
| **Alternatives Considered** | Piscataway first (rejected — NAP discrepancy unresolved); generic template with placeholder data (rejected — reduces proof value); both Ramsey and Piscataway simultaneously (rejected — doubles build time before validation). |
| **Status** | Implemented. Ramsey is the master template. |

---

## Decision 02 — Use 33 GBP Profiles as Internal Target Until Confirmed

| Field | Detail |
|---|---|
| **Date / Stage** | Location matrix build |
| **Decision** | Use 33 verified GBP profiles as the internal target location count. Do not use the client-facing "32 locations" count until confirmed. |
| **Evidence** | GBP Manager screenshot confirmed 33 verified profiles. The client-facing count (32 or 33) is unconfirmed. |
| **Reason** | Building to 33 ensures no location is missed. If the confirmed count is 32, one location is removed. If the confirmed count is 33, no adjustment is needed. It is safer to build to the higher number. |
| **Alternatives Considered** | Use 32 (rejected — risk of missing a location); use "33+" as a hedge (rejected — imprecise). |
| **Status** | Implemented. Matrix v3 tracks 33 verified GBP profiles. |

---

## Decision 03 — Use Clean `/locations/{state}/{city}/` Proof-Layer Architecture

| Field | Detail |
|---|---|
| **Date / Stage** | URL architecture planning |
| **Decision** | Recommend a hierarchical `/locations/{state}/{city}/` URL pattern for the proof layer and future production deployment. |
| **Evidence** | Current production pattern `/locations/{slug}/` is flat and does not signal state hierarchy. Multi-state network with 33+ locations creates slug collision risk and misses state-level landing page opportunities. |
| **Reason** | Hierarchical URLs create stronger geographic signals, enable state-level landing pages, and eliminate slug collision risk. They are consistent with URL patterns used by other multi-location healthcare providers. |
| **Alternatives Considered** | Keep flat `/locations/{slug}/` (rejected — misses state hierarchy opportunity); use `/locations/{state-abbrev}/{city}/` (considered — cleaner but less readable than full state name). |
| **Status** | Documented as recommendation. Not yet implemented in production. No redirects created. |

---

## Decision 04 — Make Page Crawlable for Google Validation

| Field | Detail |
|---|---|
| **Date / Stage** | Proof layer deployment |
| **Decision** | Deploy the proof layer as a publicly accessible URL that Google can crawl. Use `noindex`/`nofollow` to prevent indexing, but allow crawling for Rich Results Test and Schema Markup Validator validation. |
| **Evidence** | Rich Results Test and Schema Markup Validator both require a live, crawlable URL to validate structured data. A localhost or password-protected environment cannot be validated by these tools. |
| **Reason** | The proof layer's primary purpose is to validate the schema architecture against Google's tools. That validation requires a live, crawlable URL. The `noindex`/`nofollow` directives prevent the page from appearing in search results while still allowing tool access. |
| **Alternatives Considered** | Use Google's Rich Results Test URL input (allows pasting HTML — rejected because it does not test the full rendered page); use a password-protected environment (rejected — blocks validation tools). |
| **Status** | Implemented. Page is publicly accessible. `noindex`/`nofollow` active. Rich Results Test confirmed 200 response. |

---

## Decision 05 — Keep Production Untouched

| Field | Detail |
|---|---|
| **Date / Stage** | Project framing |
| **Decision** | Make zero changes to biermanautism.com, GBP profiles, GSC, GA4, GTM, HubSpot, CallRail, or WordPress. The proof layer is a separate environment. |
| **Evidence** | The audit is a review and recommendation engagement, not an implementation engagement. Changes to production require client approval and agency coordination. |
| **Reason** | Keeping production untouched protects the client's existing rankings, tracking, and content while the proof layer is being developed and validated. It also ensures that any issues with the proof layer do not affect the live site. |
| **Alternatives Considered** | Make small production improvements in parallel (rejected — scope creep risk, agency coordination required). |
| **Status** | Implemented. Zero production changes made. |

---

## Decision 06 — Use Visible Public Google Reviews

| Field | Detail |
|---|---|
| **Date / Stage** | Review module design |
| **Decision** | Display 6 public GBP reviews as visible HTML/CSS review cards on the Ramsey page. Source all reviews from publicly visible Google Maps reviews. |
| **Evidence** | Google's Review Snippet guidelines require that review content be visible on the page. Reviews that are only in schema but not visible in the DOM are considered hidden content. |
| **Reason** | Visible reviews serve two purposes: they are a trust signal for caregivers, and they are required for Review Snippet schema eligibility. Using public GBP reviews avoids the need to collect new reviews or create testimonials. |
| **Alternatives Considered** | Use testimonials from Bierman's website (rejected — not sourced from a third-party platform, less credible for Review schema); use hidden review schema only (rejected — policy violation). |
| **Status** | Implemented. 6 visible review cards. Review schema confirmed valid. Pending Bierman approval for production use. |

---

## Decision 07 — Add Review Schema Only When Visible

| Field | Detail |
|---|---|
| **Date / Stage** | Schema architecture |
| **Decision** | Add a Review schema node only for reviews that are displayed as visible HTML elements on the page. Never add Review schema for reviews that are not visible. |
| **Evidence** | Google's structured data guidelines prohibit schema markup for content not visible to users. |
| **Reason** | Policy compliance. Hidden review schema is a spam signal and can result in a manual action. |
| **Alternatives Considered** | Add schema for all GBP reviews regardless of visibility (rejected — policy violation). |
| **Status** | Implemented. 6 Review nodes match 6 visible review cards exactly. |

---

## Decision 08 — Use Caregiver Education Bridge

| Field | Detail |
|---|---|
| **Date / Stage** | Content architecture |
| **Decision** | Include a caregiver education bridge section with 3 resource cards and an intake CTA positioned after the educational content. |
| **Evidence** | GA4 landing page data shows educational pages receive organic traffic with low conversion rates. GSC-informed analysis suggests informational queries (what is ABA therapy, autism diagnosis process) are driving traffic that is not being converted to intake inquiries. |
| **Reason** | Caregivers in the research phase need educational content before they are ready to request services. Connecting educational content to intake CTAs reduces the gap between research and action. |
| **Alternatives Considered** | Link to existing resource pages (considered — less direct than an on-page bridge); omit educational content entirely (rejected — misses the research-phase caregiver). |
| **Status** | Implemented. Education bridge section with 3 resource cards and intake CTA. |

---

## Decision 09 — Add Clinical Leadership Signals

| Field | Detail |
|---|---|
| **Date / Stage** | Content architecture |
| **Decision** | Include a clinical leadership section with 2 BCBA profiles (Hillary Genovese, Victoria Verdun) on the Ramsey page. Add Person schema with `worksFor` relationship. |
| **Evidence** | Current production location pages do not surface clinical leadership. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) guidelines from Google emphasize the importance of surfacing expert credentials on healthcare pages. |
| **Reason** | BCBA credentials are a primary trust signal for caregivers evaluating ABA therapy providers. Surfacing them at the location level (not just on a general team page) strengthens both caregiver trust and Google's E-E-A-T assessment. |
| **Alternatives Considered** | Link to general team page only (rejected — requires navigation away from location page); omit clinical leadership (rejected — misses E-E-A-T opportunity). |
| **Status** | Implemented. 2 BCBA profiles with headshots, titles, credentials, and Person schema. Pending headshot usage approval from Bierman. |

---

## Decision 10 — Document Meta / Facebook 403 as Manus Hosting Limitation

| Field | Detail |
|---|---|
| **Date / Stage** | QA and validation |
| **Decision** | Document the Meta Sharing Debugger 403 response as a Manus CDN infrastructure limitation, not an OG tag issue. Do not attempt to fix it at the application level. |
| **Evidence** | The 403 response persisted after adding `facebookexternalhit` to `robots.txt`. The OG tags in `index.html` are correct and verified. The issue is at the CDN/firewall level, not the application level. |
| **Reason** | Attempting to fix an infrastructure-level block at the application level is not possible and would waste development time. The issue resolves automatically on a custom domain deployment. |
| **Alternatives Considered** | Continue attempting robots.txt fixes (rejected — confirmed ineffective); upgrade to a different hosting tier (rejected — not necessary for a proof layer). |
| **Status** | Documented. Will resolve on custom domain deployment. |

---

## Decision 11 — Use JSON-LD Only (No Microdata)

| Field | Detail |
|---|---|
| **Date / Stage** | Schema architecture — after dual schema conflict |
| **Decision** | Remove all microdata `itemScope`/`itemType`/`itemProp` attributes from React components. Use JSON-LD in `index.html` as the sole schema source. |
| **Evidence** | The dual schema conflict (JSON-LD + microdata) caused Google to parse two separate sets of Review nodes, with the microdata nodes failing validation due to missing `itemReviewed`. This resulted in 6 invalid Review items in the Rich Results Test. |
| **Reason** | For React/SPA applications, JSON-LD in `index.html` is the correct approach. Microdata in dynamically rendered components creates parsing ambiguity. JSON-LD is easier to maintain, audit, and update. |
| **Alternatives Considered** | Keep microdata and fix `itemReviewed` (rejected — microdata in React components is harder to maintain and creates ongoing parsing risk); use microdata only (rejected — JSON-LD is the preferred format for complex entity graphs). |
| **Status** | Implemented. Zero microdata attributes in React components. JSON-LD is sole schema source. Rich Results Test: 12 valid, 0 invalid. |

---

## Decision 12 — Build Documentation as an Acquisition Asset

| Field | Detail |
|---|---|
| **Date / Stage** | Documentation phase |
| **Decision** | Build the GitHub repository documentation to acquisition-ready standards: PRD, evidence trail, decision log, data model, schema strategy, URL strategy, review strategy, data layer spec, QA checklist, known gaps, and client confirmation questions. |
| **Evidence** | The proof layer is positioned as a demonstration of a scalable location-page SEO/AEO/entity system. A potential acquirer conducting due diligence would review the repository documentation as part of their technology assessment. |
| **Reason** | Documentation that explains the "why" behind every decision — not just the "what" — is more valuable than code alone. It demonstrates systematic thinking, evidence-based decision-making, and a scalable architecture. |
| **Alternatives Considered** | Minimal README only (rejected — does not demonstrate the depth of the system); documentation without evidence trail (rejected — reduces credibility of the architecture claims). |
| **Status** | Implemented. 19 documentation files + 11 evidence trail files. |
