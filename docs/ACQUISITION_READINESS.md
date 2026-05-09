# Acquisition Readiness
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026

---

## Why This Project Is Acquisition-Relevant

A website redesign is a cosmetic change. A scalable local entity architecture is an infrastructure change. The distinction matters in an acquisition context because infrastructure has durable value — it reduces technical debt, improves measurable performance, and provides a clear implementation roadmap that a buyer or leadership team can evaluate independently.

This proof layer is acquisition-relevant for three reasons.

First, it turns a documented problem into a structured system. Bierman's location page gaps — inconsistent NAP, weak schema, no review visibility, no clinical authority signals — are not isolated technical issues. They are measurable visibility and conversion gaps that compound across every location. A buyer evaluating Bierman's digital infrastructure will find these gaps. This system documents them honestly and demonstrates a clear path to resolution.

Second, it provides a source-of-truth data model for all 33+ locations. The Location Matrix (Matrix v3) and the `DATA_MODEL.md` specification give any stakeholder a complete picture of what data exists, what is confirmed, what is in conflict, and what needs resolution. This is the kind of structured documentation that reduces ambiguity in due diligence.

Third, it demonstrates a future-state system, not just a future-state design. The proof layer is a working implementation — schema-validated, Rich Results-eligible, GBP-aligned — not a mockup. A buyer can visit the proof layer URL, run the Rich Results Test, and see the system working. That is a different kind of evidence than a slide deck.

---

## What a Buyer or Stakeholder Can Evaluate

A buyer or leadership team conducting due diligence on Bierman's digital infrastructure can use this system to evaluate:

**Current-state gaps (documented, not assumed)**
The `KNOWN_GAPS.md` file catalogs every known discrepancy, unresolved data conflict, and pending confirmation. Phone number discrepancies, duplicate GBP profiles, location count uncertainty, and approval-pending assets are all documented with resolution paths. This is not a list of problems — it is a structured gap analysis with clear ownership.

**Future-state architecture (working, not theoretical)**
The proof layer is a live demonstration of what every Bierman location page could look like. It is accessible at `https://bierman-proof-layer.manus.space/`, passes the Rich Results Test, and is documented in 19 specification files. A buyer can evaluate the architecture without relying on a vendor's pitch.

**Technical debt exposure (quantified, not estimated)**
The `PRD.md` Problem Statement section documents the specific schema, GBP alignment, content, and URL architecture gaps across the current biermanautism.com location pages. These are not opinions — they are verifiable against the Rich Results Test, Schema Markup Validator, and GSC data.

**Implementation roadmap (phased, not vague)**
The `ROADMAP.md` file defines 8 phases from the Ramsey proof to full-network deployment, with clear prerequisites, decision points, and completion criteria for each phase. A buyer can evaluate the scope and cost of implementation without commissioning a new discovery engagement.

**Data layer and privacy architecture (specified, not assumed)**
The `DATA_LAYER_SPEC.md` file documents a safe, privacy-conscious event tracking taxonomy with explicit disallowed parameters. This demonstrates that the system was designed with privacy considerations from the start — a relevant signal for a healthcare provider.

---

## How Location Data, GBP, GSC, Schema, Content, and Conversion Architecture Are Unified

The proof layer is not a collection of independent improvements. It is a unified system where every component reinforces the others.

The `LOCATION` constant drives the page content, the schema graph, the GBP alignment, and the conversion architecture simultaneously. When the phone number is confirmed and updated in the constant, it updates the nav CTA, the hero CTA, the footer, the schema `telephone` field, and the GBP alignment check — in one place. This is the architecture of a maintainable system, not a one-time build.

The schema graph connects the location entity to its GBP profile (`hasMap`), its parent organization (`parentOrganization`), its clinical staff (`Person`), its services (`Service`), its reviews (`Review`), and its content (`FAQPage`, `VideoObject`). This is not a collection of independent schema nodes — it is an entity graph that tells a coherent story about the location to both Google and answer engines.

The conversion architecture connects informational content (caregiver education bridge, FAQ) to intake CTAs through a deliberate content flow. A caregiver who arrives via an informational query ("what is ABA therapy") has a clear path to the intake CTA without a separate redirect or funnel step.

---

## Why This Is More Valuable Than a Redesign

A redesign changes how the website looks. This system changes how the website works — how it is understood by Google, how it is indexed, how it is represented in rich results, how it aligns with GBP profiles, and how it converts informational traffic into intake inquiries.

A redesign is a one-time project. This system is a reusable framework. The Ramsey page took significant effort to build. The Piscataway page will take a fraction of that effort because the architecture, schema pattern, component library, and documentation are already complete. The 31st location page will take the same effort as the second.

A redesign does not produce a source-of-truth data model, a schema strategy document, a GBP alignment checklist, or a client confirmation question list. This system produces all of those — and they remain valuable regardless of whether the design is ever changed.

---

## What Remains Unapproved or Unconfirmed

This system is honest about what it does not yet have. The following items remain unapproved or unconfirmed as of May 2026:

| Item | Status |
|---|---|
| Ramsey canonical phone number | Unconfirmed — 3 conflicting values |
| Piscataway phone and address | Unconfirmed — 2 conflicting values each |
| Team headshot usage approval | Pending Bierman confirmation |
| Video usage approval | Pending Bierman confirmation |
| Review usage approval | Pending Bierman confirmation |
| Insurance list accuracy | Unconfirmed |
| Location count (32 vs 33) | Unconfirmed |
| Avon vs Avondale | Unconfirmed |
| Brooklyn Park status | Unconfirmed |
| Broad Ripple duplicate GBP | Unresolved |
| Pilot subdomain interest | Pending Bierman decision |
| Production migration approval | Pending Bierman decision |

These are not failures of the system. They are documented open items with clear resolution paths. A buyer or stakeholder evaluating this system can see exactly what has been confirmed, what is pending, and what needs a decision — without ambiguity.

---

## Why the Audit Matters in Acquisition Context

The SEO Business Impact Audit and HubSpot/CallRail Attribution Addendum are not supplementary materials. They are the strategic foundation that separates this project from a front-end presentation exercise.

For a buyer or stakeholder conducting due diligence, the audit exposes five operational and data-governance issues that have direct implications for valuation, integration risk, and post-acquisition performance:

**Attribution model definitions are incomplete.** The audit identified a 6,419-call gap between CallRail (21,089 calls) and HubSpot-tagged contacts (7,085). This means that a significant portion of Bierman's inbound call volume is not currently attributable to a specific channel, campaign, or location in the CRM. A buyer who relies on HubSpot data to evaluate marketing ROI will undercount the contribution of local search and GBP by a material amount.

**Real-time CallRail/HubSpot integration is leaky.** The retroactive reconciliation of 326 active clients demonstrates operational sophistication, but it also demonstrates that the real-time integration is not reliable. A buyer inheriting this infrastructure will need to invest in tightening the GTM → CallRail → HubSpot pipeline before center-level outcome tracking is possible.

**GBP profile governance is inconsistent.** The audit confirmed 33 verified GBP profiles, but also identified duplicate profiles (Broad Ripple), ambiguous location names (Avon/Avondale), and profiles with severe review gaps relative to their interaction volume (West Orange: 758 interactions, 1 review). Inconsistent GBP governance creates attribution risk, local ranking risk, and brand consistency risk — all of which are relevant in a multi-location healthcare acquisition.

**Review depth does not match demand.** Several high-visibility profiles have near-zero review counts. This is a conversion bottleneck that is measurable, addressable, and currently unaddressed. A buyer who understands local search will recognize this as an immediate, low-cost opportunity — but also as evidence that the current operational model does not include a systematic review generation process.

**Center-level outcome tracking does not exist.** The CRM data is aggregate. Bierman cannot currently answer the question: "How many new patients started at Ramsey in the last 12 months as a result of organic search?" This is not a criticism of the current team — it is a structural gap in the data infrastructure. The proof layer's data-layer event taxonomy and location-specific attribution architecture are designed to create the foundation for answering that question.

These five issues are not reasons to discount the business. They are documented, addressable gaps with clear resolution paths. A buyer who understands them can price them accurately, plan for them operationally, and execute against them systematically. The proof layer provides the documentation, architecture, and pilot framework to do exactly that.

---

## Summary

This proof layer is acquisition-ready infrastructure documentation. It demonstrates a scalable system, exposes technical debt honestly, provides a clear implementation roadmap, and gives any stakeholder the information they need to evaluate, scope, and execute the next phase — without commissioning a new discovery engagement.

That is the difference between a redesign pitch and a source-of-truth system.
