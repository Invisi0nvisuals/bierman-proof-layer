# Bierman Proof-Layer System Deck — Slide Content Outline
**Filename:** `Bierman_ProofLayer_System_Deck_v1`
**Prepared by:** Alex Rodriguez | MFGSEO LLC dba alexseo.co | May 2026
**Slides:** 18
**Design language:** Dark navy (#0B1A2E), teal (#00B5AD), white, warm orange accent (#E8631A), clean sans-serif, executive consulting style

---

## Slide 1 — Cover

**Title:** Bierman Proof-Layer System

**Subtitle:** A production-isolated local SEO/AEO proof layer built to demonstrate scalable location-page architecture across Bierman's network.

**Footer:** Prepared by Alex Rodriguez | MFGSEO LLC dba alexseo.co | May 2026

**Design notes:** Full dark navy background. Teal horizontal rule under title. Bierman logo top-left. alexseo.co mark bottom-right. Minimal — no bullets, no body text.

---

## Slide 2 — Executive Summary

**Headline:** This is not a redesign. It is a scalable local visibility system.

**Body — 4 key points:**
1. Ramsey is the first working prototype — a complete, production-isolated location page with real data, real schema, and real trust signals.
2. The system connects GBP, GSC insights, reviews, schema, clinical leadership, caregiver resources, and attribution thinking in a single governed architecture.
3. The repo documents the PRD, evidence trail, operating system, QA checklist, known gaps, and scaling plan — making the system reviewable, repeatable, and acquisition-ready.
4. The pilot path is clear: Ramsey → Piscataway → NJ cluster → verified location network.

**Design notes:** White slide. Two-column layout: bold headline left, 4 numbered points right. Teal left border on the points column.

---

## Slide 3 — Why This Exists

**Headline:** Search is working. Governance is the gap.

**Body — evidence-backed findings:**
- Search-driven active client acquisition exists at scale across Bierman's network.
- Google Business Profile is a major acquisition surface — but GBP actions (calls, directions, appointment clicks) largely bypass GA4.
- CallRail and HubSpot reconciliation gaps mean center-level outcomes are not fully measurable.
- Review depth is not keeping pace with demand signals across the network.
- Location data (NAP, phone, address) has discrepancies across sources — GBP, website, and internal records do not always agree.

**Visual — conversion funnel diagram:**
```
Visibility → Action → Intake → Deal → Active Client
   ✓ GSC        ? GBP    ? CRM    ? CallRail   ? Center
```
Label where signal is currently lost: GBP actions, call routing, center-level outcomes.

**Design notes:** Dark navy background. Teal funnel diagram. White text. Orange "?" markers at signal-loss points.

---

## Slide 4 — Evidence Trail

**Headline:** Every build decision traces back to evidence.

**Table:**

| Evidence Source | Finding | Build Decision |
|---|---|---|
| GBP data (33 locations) | Off-site local actions matter — calls, directions, website clicks | Plan Your Visit + directions CTA + hasMap schema |
| GSC / resource traffic | Education traffic has real value — ASD, Level 1, ABA queries rank | Caregiver/ASD education bridge on location page |
| Public GBP reviews | Trust signals exist — 5-star reviews with specific staff mentions | Review module + Review schema (visible only) |
| Rich Results baseline | Production schema surface was limited | Expanded entity graph — 6 rich result groups |
| Matrix v3 (32 locations) | Locations need a source-of-truth data model | Scalable LocationData interface + data model doc |
| Business Impact Audit | Attribution governance gap — 6,419 calls, GBP-to-CRM path unclear | Data-layer spec + pilot roadmap |
| SEO + Attribution Brief | GBP is an off-website conversion surface | GBP alignment strategy + UTM opportunity doc |

**Design notes:** White slide. Full-width table. Teal header row. Alternating light/white rows. Small caption: "Source: docs/evidence/00-evidence-index.md"

---

## Slide 5 — What We Built

**Headline:** Ramsey is the master location prototype.

**Body — modular page map (12 modules):**

| Module | Status |
|---|---|
| Hero / NAP (name, address, phone) | ✅ Live |
| Services at Ramsey (ABA, SLP, OT, Eval) | ✅ Live |
| Insurance / payer section | ✅ Live (pending Bierman confirmation) |
| Directions / Plan Your Visit | ✅ Live |
| Video (YouTube embed) | ✅ Live (usage rights pending) |
| Public review highlights (6 GBP reviews) | ✅ Live (approval pending) |
| Caregiver education bridge | ✅ Live |
| ASD education bridge | ✅ Live |
| Clinical leadership (Victoria Verdun, Hillary Genovese) | ✅ Live (approval pending) |
| FAQ (16 questions with FAQ schema) | ✅ Live |
| Nearby locations (5 NJ locations) | ✅ Live |
| Final CTA | ✅ Live |

**Screenshot:** proof-layer-hero.webp (right side of slide)

**Design notes:** Two-column layout. Table left. Screenshot right. Dark navy header bar.

---

## Slide 6 — Proof-Layer Architecture

**Headline:** Every module has a user purpose and an entity purpose.

**Table:**

| Module | User Purpose | SEO / AEO Purpose | Scaling Variable |
|---|---|---|---|
| Hero / NAP | Confirm local clinic | LocalBusiness / MedicalClinic entity | Name, address, phone |
| Services | Understand what's offered | Service schema, areaServed | Service list per location |
| Insurance | Reduce intake friction | Payer list (no schema required) | Payer list per location |
| Directions | Wayfinding | hasMap, GeoCoordinates, PostalAddress | Map URL, geo coords |
| Video | Build trust before visit | VideoObject schema | YouTube video ID |
| Reviews | Social proof | Review schema (visible only) | Public GBP reviews |
| Caregiver resources | Education-to-intake bridge | Internal links, about/mentions | Resource links |
| ASD education | Answer intent | FAQ schema, entity mentions | FAQ set |
| Clinical leadership | Authority and trust | Person schema, BCBA credentials | Regional leaders |
| FAQ | Answer local questions | FAQPage schema | FAQ set per location |
| Nearby locations | Reduce bounce | Internal linking, areaServed | Location list |
| Final CTA | Convert | N/A | CTA copy, phone |

**Design notes:** White slide. Full-width table. Teal header. Caption: "Source: docs/SCHEMA_STRATEGY.md + docs/SEO_AEO_STRATEGY.md"

---

## Slide 7 — Schema / Rich Results Proof

**Headline:** The proof layer expanded the structured data surface.

**Left column — progression:**
- Production baseline: 3 rich result groups (limited schema, no Review, no Video)
- Proof layer v1: 11 valid items across 6 groups
- After review schema cleanup: 12 valid items, 0 invalid, 0 critical issues

**Right column — 6 valid groups:**
1. ✅ Breadcrumbs — 1 valid item
2. ✅ FAQ — 1 valid item
3. ✅ Local businesses — 1 valid item (1 non-critical note)
4. ✅ Organization — 1 valid item
5. ✅ Review snippets — 7 valid items (includes AggregateRating; 1 non-critical note)
6. ✅ Videos — 1 valid item

**Note:** Google Rich Results Test shows eligible rich-result groups only. The full entity graph (26 nodes: WebPage, Organization, MedicalClinic, LocalBusiness, Service, Person, Review, VideoObject, ImageObject, FAQPage, BreadcrumbList, PostalAddress, GeoCoordinates, hasMap, areaServed) is documented in Schema Markup Validator and repo docs.

**Design notes:** Dark navy background. White text. Two-column layout. Green checkmarks. Rich Results Test screenshot as supporting visual (placeholder if not available).

---

## Slide 8 — Entity Graph Strategy

**Headline:** The location page is built as a connected entity graph.

**Diagram — entity hierarchy:**
```
Bierman Organization (WebSite + Organization)
  └── Ramsey MedicalClinic / LocalBusiness
        ├── Services (ABA, SLP, OT, Eval)
        ├── Reviews (6 × Review nodes)
        ├── Video (VideoObject)
        ├── Images (3 × ImageObject)
        ├── Clinical Leaders (2 × Person)
        ├── FAQs (FAQPage + 16 Question/Answer)
        ├── Directions (hasMap, GeoCoordinates)
        └── Caregiver Resources (mentions, about)
```

**Schema types used:**
WebPage, Organization, MedicalClinic, LocalBusiness, Service, Person, Review, AggregateRating, VideoObject, ImageObject, FAQPage, BreadcrumbList, PostalAddress, GeoCoordinates, hasMap, areaServed

**Total nodes:** 26

**Design notes:** White slide. Left: entity tree diagram in teal/navy. Right: schema type list in two columns. Caption: "Source: docs/SCHEMA_STRATEGY.md"

---

## Slide 9 — Review + Trust Layer

**Headline:** Public review evidence becomes structured trust.

**Left column — what was built:**
- 6 public Google reviews displayed as native HTML/CSS cards (no screenshots, no edit icons)
- Reviewer name, star rating, review text, "Posted on Google" attribution
- Review schema only applied to reviews visible in the DOM
- No fake reviews. No hidden schema. No AggregateRating unless verified and visible.
- Sensitive reviews (mentioning specific children, diagnoses) excluded

**Right column — review evidence:**
- Ambar Arias: "If I could give this center 10 stars, I would!!"
- Sohayb Stiti: "Dr. Catherine Lark was incredibly helpful during our son's assessment."
- Kim Sedlacek: "The Practice Manager, Kelsey, and all the Behavior Technicians are very knowledgeable."
- Margarita Morales: "Staff was great! Nice experience!"
- Anthony Siciliano: "Nice, clean center and friendly staff."
- Nancy Passano: "Amazing experience at the Reptile Encounter!"

**Network gap:** Review depth across the 33-location network is uneven. Review generation strategy is a second-wave priority.

**Screenshot:** proof-layer-reviews.webp

**Design notes:** Two-column layout. White slide. Screenshot right. Teal accent left border on review list.

---

## Slide 10 — GBP + Local Action Layer

**Headline:** GBP is not just a listing. It is an off-website conversion surface.

**Diagram — GBP conversion path:**
```
GBP Profile
  ├── Website click → GA4 (tracked)
  ├── Phone call → CallRail? (gap)
  ├── Directions → Google Maps (untracked)
  └── Appointment URL → HubSpot? (gap)
```

**5 GBP alignment opportunities:**
1. UTM parameters on GBP website URL — currently missing across most locations
2. Appointment URL — not set or inconsistent across locations
3. Call tracking / routing validation — CallRail integration unconfirmed
4. Directions as local-intent signal — hasMap schema + Plan Your Visit CTA
5. Review depth — uneven across network; generation strategy needed

**NAP confirmation status:**
- Ramsey: 3 conflicting phone values across sources (pending confirmation)
- Piscataway: 2 conflicting address values (pending confirmation)

**Design notes:** Dark navy background. White text. Teal diagram. Orange "gap" markers. Caption: "Source: docs/GBP_ALIGNMENT_STRATEGY.md + docs/DATA_LAYER_SPEC.md"

---

## Slide 11 — Education-to-Intake Bridge

**Headline:** High-value education traffic should route families to local support.

**Left column — GSC-informed content topics on the location page:**
- Caregiver training
- Functional communication
- Building independence
- Behavior support at home
- ASD education (What is ASD?)
- Level 1 Autism (formerly Asperger's)
- ASD vs Autism
- Can Autism Be Cured?
- ABA therapy

**Right column — architecture:**
- The location page summarizes and routes — it does not replace the resource pages
- Each topic links to the deeper resource destination on biermanautism.com
- Internal linking connects the location page into the existing content cluster
- This creates a local entry point for education-intent queries

**Design notes:** White slide. Two-column layout. Left: topic list with teal bullets. Right: architecture diagram showing location page as routing hub. Caption: "Source: docs/SEO_AEO_STRATEGY.md + docs/evidence/04-gsc-query-findings.md"

---

## Slide 12 — Clinical Leadership Layer

**Headline:** Local pages should show clinical trust, not just location data.

**Body:**

| Leader | Title | Role |
|---|---|---|
| Victoria Verdun, Ph.D., BCBA-D, LBA | Senior Clinical Director | New Jersey regional clinical leadership |
| Hillary Genovese, M.A., BCBA | Clinical Director | Ramsey / NJ clinical oversight |

**Why it matters:**
- Visible clinical leadership supports family trust before the first call
- Person schema (name, jobTitle, credential) connects the individual to the location entity
- BCBA-level credentials are a meaningful trust signal in the ABA therapy market
- Note: Bierman approval required before production use of team images and bios

**Correct terminology:** Clinical leadership, BCBA leadership, regional support. Not "physicians."

**Design notes:** White slide. Two-column layout. Left: table with leader details. Right: placeholder for team photo (labeled "Team image — Bierman approval required"). Caption: "Source: docs/evidence/07-review-evidence.md + docs/SCHEMA_STRATEGY.md"

---

## Slide 13 — Source-of-Truth Repo

**Headline:** The system is documented, not just designed.

**Repo structure — 3 columns:**

**Core docs:**
- README.md
- PRD.md
- ACQUISITION_READINESS.md
- OPERATING_SYSTEM.md
- ROADMAP.md
- CHANGELOG.md

**Strategy docs:**
- SCHEMA_STRATEGY.md
- SEO_AEO_STRATEGY.md
- GBP_ALIGNMENT_STRATEGY.md
- DATA_LAYER_SPEC.md
- LOCATION_MATRIX_STRATEGY.md
- REVIEW_STRATEGY.md
- URL_STRATEGY.md

**Evidence + QA:**
- evidence/00-evidence-index.md (22 sources)
- evidence/11-business-impact-audit-summary.md
- QA_CHECKLIST.md (80 items)
- KNOWN_GAPS.md
- CLIENT_CONFIRMATION_QUESTIONS.md (26 items)
- decks/ (2 existing + 3 new outlines)

**Message:** The repo makes the build reviewable, repeatable, and acquisition-ready. Every decision has a source. Every gap is documented.

**Design notes:** Dark navy background. White text. Three-column layout with teal section headers. Caption: "github.com/Invisi0nvisuals/bierman-proof-layer"

---

## Slide 14 — Operating System

**Headline:** The proof layer was built with a repeatable workflow layer.

**Table — 8 core workflows:**

| Workflow | Purpose | Ownership |
|---|---|---|
| Read-only QA | Validate without touching production | Transferable output |
| Evidence trail | Document every decision with source | Transferable output |
| Location matrix | Source-of-truth for all 33 locations | Transferable output |
| Schema validation | Verify structured data against Google standards | Transferable output |
| Asset verification | Confirm CDN paths, alt text, approval status | Transferable output |
| Privacy-conscious data layer | Track without exposing PHI/PII | Transferable output |
| Source-of-truth builder | Resolve NAP discrepancies across sources | Transferable output |
| Multi-agent build | Coordinate parallel documentation and build tasks | Internal method |

**Ownership note:** Internal agent skills and orchestration methods are not transferred unless separately agreed. The repo documents the outputs, decisions, and scalable implementation patterns — not the internal tooling.

**Design notes:** White slide. Full-width table. Teal header. Orange row for "Multi-agent build" with "Internal method" label. Caption: "Source: docs/OPERATING_SYSTEM.md"

---

## Slide 15 — Why This Matters in Acquisition

**Headline:** This converts a website problem into a governed system asset.

**7 acquisition-relevant properties:**
1. **Exposes technical and data gaps** — NAP discrepancies, tracking blind spots, and schema gaps are documented, not hidden
2. **Documents source-of-truth decisions** — every location, phone, address, and content choice has a traceable source
3. **Makes location data scalable** — the LocationData model supports all 33 locations with the same architecture
4. **Shows repeatable SEO/AEO architecture** — Ramsey is a template, not a one-off
5. **Separates prototype from production** — zero risk to the live site during development
6. **Clarifies open risks and confirmation needs** — 26 client confirmation items documented
7. **Creates a path from pilot to rollout** — 8-phase roadmap from Ramsey to full network

**Design notes:** Dark navy background. White text. 7 numbered points in two columns. Teal numbering. Caption: "Source: docs/ACQUISITION_READINESS.md"

---

## Slide 16 — Scaling Plan

**Headline:** Ramsey becomes Piscataway. Piscataway becomes the network.

**8-phase roadmap:**

| Phase | Scope | Status |
|---|---|---|
| 1. Ramsey master proof | Full location page prototype, schema, evidence trail | ✅ Complete |
| 2. Piscataway comparison | 9-variable swap from Ramsey template | 🔲 Blocked: NAP confirmation |
| 3. New Jersey cluster | Ramsey + Piscataway + West Orange + Princeton + Cranford + Parsippany | 🔲 Next |
| 4. Verified location network | All 33 confirmed locations | 🔲 Planned |
| 5. Service-to-location hubs | ABA, SLP, OT, Eval pages linked to location pages | 🔲 Planned |
| 6. Caregiver/resource internal linking | Education pages linked to location pages | 🔲 Planned |
| 7. Optional pilot subdomain | biermanproof.biermanautism.com | 🔲 Optional |
| 8. Optional production migration | Replace or supplement existing location pages | 🔲 Decision point |

**Design notes:** White slide. Full-width table. Teal header. Green ✅ for complete, gray 🔲 for planned. Caption: "Source: docs/ROADMAP.md"

---

## Slide 17 — Known Gaps / Confirmation Items

**Headline:** The system is strong because it documents what is not yet confirmed.

**Two-column layout:**

**Data gaps (pending client confirmation):**
- Ramsey phone: 3 conflicting values — (201) 596-8104 / (201) 308-3735 / (201) 928-5245
- Piscataway NAP: 2 conflicting addresses across sources
- Location count: 32 (matrix) vs 33 (GBP) — one location unresolved
- Avon vs Avondale: name discrepancy across sources
- Brooklyn Park: GBP presence unconfirmed
- Broad Ripple: possible duplicate GBP listing

**Approval items (pending Bierman confirmation):**
- Review usage: 6 public GBP reviews used — Bierman approval needed for production
- Video usage: YouTube embed used — identifiable-person review needed
- Team images: clinical leadership photos — Bierman approval needed
- GBP UTMs: not yet set on any location
- CallRail/HubSpot real-time gap: reconciliation process unconfirmed
- Center-level outcomes: tracking path from GBP → intake → active client not yet validated

**Design notes:** Dark navy background. White text. Two-column layout. Orange "pending" labels. Caption: "Source: docs/KNOWN_GAPS.md + docs/CLIENT_CONFIRMATION_QUESTIONS.md"

---

## Slide 18 — Next Decision

**Headline:** Decide whether the proof layer becomes the pilot operating model.

**5 options:**

1. **Approve Ramsey/Piscataway pilot** — confirm the proof layer as the operating model for the 2-location pilot
2. **Confirm data blockers** — resolve Ramsey phone, Piscataway NAP, and content approval items
3. **Build Piscataway from the Ramsey template** — 9-variable swap, same architecture, same schema, same review system
4. **Validate tracking and center-level outcomes** — confirm CallRail/HubSpot integration path and GBP UTM strategy
5. **Prepare second-wave rollout** — NJ cluster (6 locations) using the same template

**Closing line:**
> This is not a request to rebuild the entire site immediately. It is a controlled path to validate a scalable location SEO/AEO system at two locations before network rollout.

**Footer:** Alex Rodriguez | MFGSEO LLC dba alexseo.co | alexseo.co | May 2026

**Design notes:** White slide. Dark navy left panel (1/3 width) with teal "Next Decision" label and closing quote. Right panel (2/3 width) with 5 numbered options. Orange CTA-style button: "Start with Ramsey + Piscataway →"

---

## Design System Reference

**Colors:**
- Primary background: `#0B1A2E` (dark navy)
- Accent: `#00B5AD` (teal)
- Action: `#E8631A` (warm orange)
- Text on dark: `#FFFFFF`
- Text on light: `#1A2B3C`
- Table header: `#00B5AD`
- Alternating rows: `#F8FAFB` / `#FFFFFF`

**Typography:**
- Headlines: Bold, 28–36pt
- Body: Regular, 14–16pt
- Captions: 10pt, muted gray
- Table headers: 11pt, white, uppercase

**Layout rules:**
- Dark navy slides: cover, executive summary, GBP layer, acquisition, known gaps
- White slides: evidence trail, architecture, schema, entity graph, repo, scaling
- Two-column layout preferred over bullet lists
- Tables preferred over prose
- Diagrams preferred over text for system flows

**Screenshot assets available:**
- `proof-layer-full-page.webp` — full page
- `proof-layer-hero.webp` — hero section
- `proof-layer-services.webp` — services section
- `proof-layer-insurance-directions.webp` — insurance + directions
- `proof-layer-intake-video.webp` — intake + video
- `proof-layer-video-reviews.webp` — video + review themes
- `proof-layer-reviews.webp` — GBP review cards

**Placeholder items (require Bierman confirmation before production use):**
- Team photos (clinical leadership)
- Rich Results Test screenshot (use current 12-valid-items version)
- GBP profile screenshots
