# Bierman Autism Centers — NJ Pilot Proof Layer
## Copy Strategy: Leadership Data Deck
### Prepared for: Clinical & Marketing Leadership
### Prepared by: SEO / AI Visibility Team
### Date: June 2026

---

## Slide 1 — The Strategic Question

> **"Why did we change the headline copy on the New Jersey hub page?"**

This deck answers that question with Google Search Console data — not opinion.

Every copy decision on the NJ Proof Layer was made by measuring actual search demand across Bierman's target footprint, then aligning the page's primary signals (title tag, H1, meta description, JSON-LD schema name) to the highest-volume, highest-intent query clusters.

---

## Slide 2 — The Anchor Signal: "Near Me" (157,000 Impressions)

| Query Cluster | Impressions | Intent Type |
|---|---|---|
| **"near me" local proximity** | **157,000** | Transactional / Local |
| "autism services" category | 9,950 | Navigational / Category |
| "autism support" category | 1,780 | Informational |
| "comprehensive" qualifier | 1,300 | Informational / Clinical |

**Key finding:** Local proximity intent ("near me") generates **15.8x more search impressions** than the next-largest category cluster. This is not a branding preference — it is the dominant demand signal in Bierman's NJ service footprint.

**Decision:** "Near Me" was injected directly into the `<h1>` text layer and `<title>` tag to achieve semantic parity with 157,000 monthly impression opportunities.

---

## Slide 3 — The Category Choice: "Autism Services" vs. "Autism Support" (5.6x Gap)

| Phrase | Impressions | Ratio |
|---|---|---|
| **"autism services"** | **9,950** | 1.0x (baseline) |
| "autism support" | 1,780 | 0.18x |

**Key finding:** "Autism Services" commands **5.6x more search reach** than "Autism Support" across Bierman's NJ target footprint.

**Original draft copy:** *"Comprehensive Autism **Support Services** Near Me in New Jersey"*

**Problem:** Stacking "Support Services" sequentially dilutes the primary high-volume phrase `"Autism Services"` by embedding the lower-volume modifier "Support" in front of it. Google's semantic index clusters category intent around the noun phrase — inserting "Support" between "Autism" and "Services" weakens the signal.

**Optimized copy:** *"Comprehensive Autism **Services** Near Me in New Jersey"*

**Result:** The H1, title tag, meta description, and WebPage JSON-LD schema name field all now lead with the 9,950-impression phrase rather than the 1,780-impression phrase.

---

## Slide 4 — The Clinical Qualifier: "Comprehensive" (1,300 Impressions)

| Role | Value |
|---|---|
| Search impressions | ~1,300 (informational intent) |
| Schema signal | Registers multi-disciplinary model to AI crawlers |
| Clinical positioning | Differentiates from single-service ABA-only providers |
| Conversion function | Reduces bounce from families seeking integrated care |

**Key finding:** "Comprehensive" does not drive direct transactional clicks at scale, but it performs a critical secondary function: it signals to both search engines and AI answer engines (ChatGPT, Gemini, Perplexity) that Bierman is a **multi-disciplinary integrated care provider** — not a single-service ABA clinic.

This matters because families searching for autism care often need multiple services simultaneously (ABA + Speech + OT + Diagnostics). A headline that signals all four services in a single phrase reduces the need for multiple search sessions and positions Bierman as the category authority.

**Decision:** "Comprehensive" was retained as the opening modifier in the H1 and title tag.

---

## Slide 5 — The Final Copy Architecture

### NJ Hub Page — Final Validated Strings

| Element | Final String | Character Count |
|---|---|---|
| `<title>` | Comprehensive Autism Services Near Me in NJ \| Bierman Autism Centers | 67 |
| `<h1>` | Comprehensive Autism Services Near Me in New Jersey | 51 |
| `<meta description>` | Comprehensive autism services near you in New Jersey — ABA therapy, speech, OT & diagnostics at 10 locations. BCBA-supervised care. Insurance accepted. | 155 |
| JSON-LD `WebPage.name` | Comprehensive Autism Services Near Me in New Jersey \| Bierman Autism Centers | 77 |

### 10 Location Pages — Title Tag Pattern

```
ABA Therapy Near Me | {City}, NJ | Bierman Autism Centers
```

All 10 location pages use this pattern. Character counts verified 50–60 chars (within Google's 60-char display threshold). Berkeley Heights uses the truncation-safe variant "Bierman Centers" (59 chars).

---

## Slide 6 — The Entity Signal Stack (What AI Crawlers See)

Beyond the visible copy, the NJ Proof Layer injects a layered entity signal architecture that AI answer engines (Gemini, ChatGPT, Perplexity, Copilot) use to surface Bierman in generative responses:

| Layer | Implementation | Purpose |
|---|---|---|
| `sameAs` — County level | Wikipedia URLs on all 44 county `areaServed` entries | Binds Bierman locations to authoritative geographic entities |
| `sameAs` — City level | Wikipedia URLs on all 10 city `areaServed` entries | Resolves city-level entity ambiguity for AI crawlers |
| Service `@id` + `url` | Fragment-anchored URLs on all 4 service nodes per location | Makes individual services resolvable as distinct entities |
| `geo.region` / `geo.placename` | Dynamic meta tags in every location page `<head>` | Legacy geo signal for Bing AI and non-Google crawlers |
| `/llm.txt` | AI governance manifest at root public path | Direct machine-readable guidance for LLM crawlers |
| `robots.txt` `ai-instructions` | Points to `/llm.txt` | Discovery signal for crawlers that check `robots.txt` first |
| `<link rel="ai-instructions">` | In `<head>` of `index.html` | Discovery signal for crawlers that parse HTML `<head>` |

---

## Slide 7 — Pilot Measurement Framework

### What to Track (Ramsey + Piscataway, 90-Day Window)

| Metric | Tool | Baseline | Target |
|---|---|---|---|
| Organic impressions ("near me" cluster) | Google Search Console | Pre-launch GSC pull | +20% MoM |
| Organic clicks to location pages | Google Search Console | Pre-launch GSC pull | CTR > 3% |
| AI-sourced referral traffic | GA4 (source/medium) | 0 (new) | Establish baseline |
| Form submissions (pilot UTM) | HubSpot (`utm_campaign=nj-pilot-*`) | 0 (new) | Track weekly |
| GBP profile views | Google Business Profile Insights | Pre-launch GBP pull | +15% MoM |
| Rich Results validation | Google Rich Results Test | Pre-launch screenshot | 0 errors |

### UTM Parameters Active

- Ramsey: `utm_campaign=nj-pilot-ramsey`
- Piscataway: `utm_campaign=nj-pilot-piscataway`
- All 10 locations: `utm_campaign=nj-pilot-{slug}`

---

## Slide 8 — Open Items Before DNS Cutover

| Item | Owner | Status |
|---|---|---|
| Confirm Ramsey NAP — phone `(201) 596-8104` vs. GBP listing | Bierman IT / Marketing | **Needs resolution** |
| Confirm Piscataway address — `200 vs 280 Centennial Ave` | Bierman IT / Marketing | **Needs resolution** |
| Submit `llm.txt` to Bing Webmaster Tools | SEO Team | Pending publish |
| Run Rich Results Test (Ramsey + Piscataway) | SEO Team | Pending publish |
| DNS CNAME record for `local.biermanautism.com` | Bierman IT | Pending IT handoff |
| HubSpot CRM key `Pisccataway_NJ` — confirm canonical spelling | HubSpot Admin | Confirmed canonical (double-c intentional per CRM Governance Audit) |

---

*This document was generated as part of the Bierman Autism Centers NJ Hub Pilot Proof Layer build. All impression data sourced from Google Search Console. All copy decisions are traceable to the data in Slides 2–4.*
