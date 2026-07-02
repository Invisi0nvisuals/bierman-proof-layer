# Bierman Proof Layer — Version 1.0 Repository Audit

**Audit Type:** Read-only baseline documentation  
**Prepared by:** SEO / AI Visibility Team  
**Date:** July 2, 2026  
**Repository:** https://github.com/Invisi0nvisuals/bierman-proof-layer  
**Checkpoint at audit:** `a6d95482`  
**Purpose:** Establish a stable, documented Version 1.0 baseline before beginning Version 1.1 (Brand Refinement).

> **Constraint:** This document is the only file added during this audit. No source files, routes, components, styling, content, assets, package files, config files, or deployment settings were modified.

---

## Table of Contents

1. [Repository Health](#1-repository-health)
2. [Git Audit](#2-git-audit)
3. [Architecture Review](#3-architecture-review)
4. [SEO Baseline](#4-seo-baseline)
5. [UX Baseline](#5-ux-baseline)
6. [Asset Inventory](#6-asset-inventory)
7. [Component Inventory](#7-component-inventory)
8. [Technical Risk Assessment](#8-technical-risk-assessment)
9. [Version Snapshot](#9-version-snapshot)
10. [Change Management Plan](#10-change-management-plan)
11. [Git Workflow Recommendation](#11-git-workflow-recommendation)

---

## 1. Repository Health

### Framework & Runtime

| Item | Value |
|---|---|
| Framework | React 19.2.1 |
| Build tool | Vite 7.1.7 |
| Language | TypeScript 5.6.3 (strict mode) |
| Styling | Tailwind CSS 4.1.14 |
| Component library | shadcn/ui (Radix UI primitives) |
| Routing | Wouter 3.3.5 (patched — see `patches/wouter@3.7.1.patch`) |
| Package manager | pnpm 10.4.1 |
| Node target | ESNext / ESM |
| Server stub | Express 4.21.2 (placeholder only — not used in static deployment) |

### Build Status

TypeScript compilation (`tsc --noEmit`) passes with **zero errors** at checkpoint `a6d95482`. The production build (`vite build`) completes cleanly in approximately 4.64 seconds across 1,646 modules. One pre-existing Vite chunk size advisory is present for `Home.tsx` (85 KB) and `LocationPage.tsx` (54 KB) — this is a warning, not an error, and does not affect deployment.

### Dependencies

The project carries the full shadcn/ui Radix UI primitive set as installed by the template scaffold. Several packages are present in `package.json` but have zero or near-zero usage in the current codebase:

| Package | Usage in `client/src/` | Status |
|---|---|---|
| `framer-motion` | **0 files** | Installed, unused |
| `axios` | **0 files** | Installed, unused |
| `recharts` | 1 file (`ui/chart.tsx` — shadcn component) | Installed, indirectly used via shadcn |
| `embla-carousel-react` | 1 file (`ui/carousel.tsx` — shadcn component) | Installed, indirectly used via shadcn |
| `react-day-picker` | 1 file (`ui/calendar.tsx` — shadcn component) | Installed, indirectly used via shadcn |
| `input-otp` | 1 file (`ui/input-otp.tsx` — shadcn component) | Installed, indirectly used via shadcn |
| `cmdk` | 1 file (`ui/command.tsx` — shadcn component) | Installed, indirectly used via shadcn |
| `streamdown` | Not found in `client/src/` | Installed, unused |
| `nanoid` | Not found in `client/src/` | Installed, unused |
| `vaul` | 1 file (`ui/drawer.tsx` — shadcn component) | Installed, indirectly used via shadcn |

The Radix UI packages (`@radix-ui/react-accordion`, `@radix-ui/react-context-menu`, etc.) are each referenced only in their corresponding `ui/` shadcn wrapper files. They are not used directly in application pages. This is expected for a shadcn/ui installation — all primitives ship together.

**Technical debt note:** `framer-motion` and `axios` are the only packages with zero usage anywhere in the codebase and no shadcn dependency path. They are candidates for removal in a future cleanup pass but carry no runtime cost in a static build since tree-shaking eliminates unused imports.

### Deployment Configuration

The project is deployed as a static frontend via the Manus platform. The `vite.config.ts` configures the build output to `dist/public/`. The `server/index.ts` is a placeholder stub — it is compiled by the build script but not invoked in static deployment. Environment variables are injected at build time via `VITE_*` prefix. The `vite-plugin-manus-runtime` handles platform-specific dev server instrumentation (logging, storage proxy).

### Environment Variables

The following `VITE_*` variables are injected automatically by the Manus platform and are not stored in any `.env` file in the repository:

- `VITE_ANALYTICS_ENDPOINT` — Umami analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID` — Umami site ID
- `VITE_APP_ID`, `VITE_APP_TITLE`, `VITE_APP_LOGO` — Platform metadata
- `VITE_FRONTEND_FORGE_API_KEY`, `VITE_FRONTEND_FORGE_API_URL` — Storage proxy credentials
- `VITE_OAUTH_PORTAL_URL` — OAuth portal (unused in static deployment)

No secrets are hardcoded in source files. The `.gitignore` correctly excludes `.env*` files.

### Package Health

`pnpm-lock.yaml` is present and committed. One patch is applied: `patches/wouter@3.7.1.patch` — this is a custom fix to Wouter's routing behavior, likely addressing trailing-slash handling. The patch is committed and applied automatically by pnpm. One `pnpm.overrides` entry forces `tailwindcss>nanoid` to version `3.3.7`, likely to resolve a known vulnerability in older nanoid versions bundled with Tailwind.

---

## 2. Git Audit

### Current State

| Item | Value |
|---|---|
| Current branch | `main` |
| Total commits | 79 |
| Latest commit | `a6d95482` |
| Uncommitted changes | 1 file: `.gitignore` (1 line addition) |
| Tags | **None** |
| Remote | `user_github` → `https://github.com/Invisi0nvisuals/bierman-proof-layer` |

### Commit History Summary

The commit history is well-structured with descriptive checkpoint messages. Each checkpoint documents what changed, what was validated, and what was left unchanged. The 79 commits span the full build lifecycle from initial scaffold through the complete NJ entity/schema/metadata implementation. Key milestones in reverse chronological order:

| Commit | Description |
|---|---|
| `a6d95482` | NJHub title updated; `docs/LEADERSHIP_DATA_DECK.md` created; final GEO signal layer complete |
| `e41674ae` | GSC-data-validated h1 swap: "Autism Support Services" → "Autism Services" |
| `5f151704` | NJHub meta description updated; geo meta tags verified in Ramsey DOM |
| `cd8475cb` | Hub h1 updated; location card service snippets added; geo meta tags injected |
| `d056445b` | `pageDescription` strings updated across all 10 locations |
| `40c58e41` | "Near Me" title and description metadata updated across all 10 locations |
| `ec01b748` | `llm.txt` AI governance manifest added to `client/public/` |
| `2bec50f` | `robots.txt` updated with Sitemap and `ai-instructions` directives |
| `f658334c` | `<link rel="ai-instructions">` added to `index.html` `<head>` |
| `d63843b1` | City-level `sameAs` entity bindings added to all 10 location data files |
| `a38fa005` | Phase B: service nodes upgraded with `@id`, `url`, `provider` in `hasOfferCatalog` |
| `cb33ba14` | Phase A: `id="services"` and per-card `id` slugs added to `LocationPage.tsx` |
| `fa9b389c` | Phase C: `sameAs` entity bindings added to all 10 location data files |
| `c450ab4` | UTM parameters updated across all 10 `intakeUrl` fields |

### Uncommitted Change

The single uncommitted change is a one-line addition to `.gitignore`. This is a minor housekeeping item. It should be committed before tagging v1.0.

### Generated / Ignored Files

The `.gitignore` correctly excludes `node_modules/`, `dist/`, `.env*`, `.DS_Store`, `*.tsbuildinfo`, `.webdev/`, and `client/public/__manus__/version.json`. No generated files are tracked in the repository. The `client/public/__manus__/debug-collector.js` is a platform-injected file that is present in the working tree but excluded from tracking via `.gitignore`.

### Large Assets in Repository

The following files exceed 50 KB and are tracked in the repository:

| File | Size | Location | Notes |
|---|---|---|---|
| `docs/decks/Bierman_Proof_Layer_System_Deck_v1.pdf` | 2.1 MB | `docs/decks/` | Client-facing deck — intentionally tracked |
| `Bierman_Autism_Centers___Proof-Layer_System_Deck.pdf` | 2.1 MB | Root | **Duplicate** of `docs/decks/` version — see Risk §8 |
| `docs/decks/Bierman_SEO_Attribution_System_Brief.pdf` | 801 KB | `docs/decks/` | Client-facing brief |
| `docs/decks/Bierman_Proposal_Deck_Final_v1.pdf` | 795 KB | `docs/decks/` | Client-facing proposal |
| `docs/decks/assets/*.webp` | 166–350 KB each | `docs/decks/assets/` | Deck screenshot assets |
| `pnpm-lock.yaml` | 255 KB | Root | Expected — lockfile |
| `docs/evidence/source-artifacts/bierman-location-data-matrix-v3.xlsx` | 51 KB | `docs/evidence/` | Source data artifact |
| `client/src/pages/Home.tsx` | 85 KB | Source | Large page file — see Risk §8 |
| `client/src/locations/LocationPage.tsx` | 54 KB | Source | Large template file — see Risk §8 |
| `client/src/pages/Piscataway.tsx` | 51 KB | Source | Orphan page — see Risk §8 |

**Recommendation:** The root-level `Bierman_Autism_Centers___Proof-Layer_System_Deck.pdf` is a duplicate of `docs/decks/Bierman_Proof_Layer_System_Deck_v1.pdf`. It adds 2.1 MB to the repository with no functional purpose. Flag for removal in a future cleanup pass.

---

## 3. Architecture Review

### Routing

All routes are defined in `client/src/App.tsx` using Wouter. The routing table is flat and explicit — no dynamic route generation, no lazy loading. Routes with trailing slashes are enforced consistently.

| Route | Component | Notes |
|---|---|---|
| `/` | `NJHub` | Root — canonical NJ hub page |
| `/locations/nj/` | `NJHub` | Alias — canonical points to `/` |
| `/locations/nj/ramsey/` | `LocationPage` + `ramsey` data | Open |
| `/locations/nj/piscataway/` | `LocationPage` + `piscataway` data | Open |
| `/locations/nj/west-orange/` | `LocationPage` + `westOrange` data | Open |
| `/locations/nj/princeton/` | `LocationPage` + `princeton` data | Open |
| `/locations/nj/cranford/` | `LocationPage` + `cranford` data | Open |
| `/locations/nj/berkeley-heights/` | `LocationPage` + `berkeleyHeights` data | Open |
| `/locations/nj/eatontown/` | `LocationPage` + `eatontown` data | Open |
| `/locations/nj/moorestown/` | `LocationPage` + `moorestown` data | Coming Soon |
| `/locations/nj/roseland/` | `LocationPage` + `roseland` data | Coming Soon |
| `/locations/nj/parsippany/` | `LocationPage` + `parsippany` data | Coming Soon |
| `/privacy-policy/` | `PrivacyPolicy` | Legal |
| `/terms-of-use/` | `TermsOfUse` | Legal |
| `/accessibility/` | `Accessibility` | Legal |
| `/404` | `NotFound` | Explicit 404 route |

**Note:** `Home.tsx` (1,551 lines, 85 KB) is imported in `App.tsx` but is not assigned to any route. It is an orphan page — see Risk §8.

**Note:** `Piscataway.tsx` (909 lines, 51 KB) in `client/src/pages/` is also not routed. The Piscataway route uses `LocationPage` with `piscatawayData` — the standalone `Piscataway.tsx` is a legacy page from an earlier build phase and is now an orphan — see Risk §8.

### Layouts

There is no shared layout wrapper component. Each page manages its own navigation header and footer inline. `LocationPage.tsx` contains the full page structure for all 10 location routes. `NJHub.tsx` contains its own full page structure. This is intentional for the proof layer but creates duplication that will need to be addressed in a future refactor phase.

### Reusable Components

| Component | Purpose | Used In |
|---|---|---|
| `ErrorBoundary.tsx` | React error boundary wrapper | `App.tsx` |
| `HealthcareDisclaimer.tsx` | Proof layer disclaimer banner | `App.tsx` |
| `ManusDialog.tsx` | Platform-level dialog | `App.tsx` |
| `Map.tsx` | Google Maps integration stub | Available, not currently used in pages |

The `components/ui/` directory contains the full shadcn/ui component library (57 files). Of these, the following are actively used in application pages: `accordion`, `badge`, `button`, `card`, `separator`, `skeleton`, `sonner`, `tooltip`. The remainder are available but not currently referenced in `LocationPage.tsx`, `NJHub.tsx`, or any other page component.

### Design Tokens

Design tokens are defined in `client/src/index.css` using CSS custom properties in OKLCH color format (Tailwind 4 standard). Two themes are defined: a light theme (`:root`) and a dark theme (`.dark`). The application uses the light theme by default. The primary brand colors used in page components are hardcoded Tailwind utility classes (`text-[#1a2b47]`, `bg-teal-600`, `text-orange-500`) rather than CSS custom properties — this is a known gap for brand consistency enforcement in Version 1.1.

### Styling System

Tailwind CSS 4 via `@tailwindcss/vite`. Typography plugin (`@tailwindcss/typography`) is installed. Fonts are loaded from Google Fonts CDN: **DM Sans** (body) and **Source Serif 4** (display/headings). Both fonts are preconnected in `index.html`.

---

## 4. SEO Baseline

> **This section is documentation only. No modifications were made.**

### Page Titles

| Location | Title | Chars | Within 60? |
|---|---|---|---|
| NJ Hub | Comprehensive Autism Services Near Me in NJ \| Bierman Autism Centers | 67 | ⚠️ Over by 7 |
| Ramsey | ABA Therapy Near Me \| Ramsey, NJ \| Bierman Autism Centers | 57 | ✓ |
| Piscataway | ABA Therapy Near Me \| Piscataway, NJ \| Bierman Autism Centers | 61 | ⚠️ Over by 1 |
| Cranford | ABA Therapy Near Me \| Cranford, NJ \| Bierman Autism Centers | 59 | ✓ |
| Berkeley Heights | ABA Therapy Near Me \| Berkeley Heights, NJ \| Bierman Centers | 60 | ✓ (truncation variant) |
| West Orange | ABA Therapy Near Me \| West Orange, NJ \| Bierman Autism Centers | 62 | ⚠️ Over by 2 |
| Princeton | ABA Therapy Near Me \| Princeton, NJ \| Bierman Autism Centers | 60 | ✓ |
| Eatontown | ABA Therapy Near Me \| Eatontown, NJ \| Bierman Autism Centers | 60 | ✓ |
| Parsippany | ABA Therapy Near Me \| Parsippany, NJ \| Bierman Autism Centers | 61 | ⚠️ Over by 1 |
| Moorestown | ABA Therapy Near Me \| Moorestown, NJ \| Bierman Autism Centers | 61 | ⚠️ Over by 1 |
| Roseland | ABA Therapy Near Me \| Roseland, NJ \| Bierman Autism Centers | 59 | ✓ |

**Note:** Google's 60-character limit is a display truncation threshold, not a hard technical limit. Titles 1–2 characters over will typically display in full or with minimal truncation depending on pixel width. The NJ Hub title at 67 characters is the most likely to truncate in SERPs.

### Meta Descriptions

All 10 location pages have unique, keyword-dense meta descriptions ranging from 141 to 161 characters. All are within the 140–160 character target range except Ramsey (161 chars — 1 over). The NJ Hub meta description is 155 characters. All descriptions are confirmed unique across the 10 locations.

### Canonical Tags

Each location page emits a self-referencing canonical URL via `react-helmet-async` using the `schema.baseId` field from the location data file. The `index.html` contains a static canonical pointing to the root hub URL, which is overridden at runtime by React Helmet for each route. The `/locations/nj/` alias route correctly points its canonical to `/` (the root hub).

### Schema / Structured Data

Each location page emits a `@graph` array via `buildLocationSchema()` in `schema.ts`. The graph includes:

- `LocalBusiness` co-typed with `MedicalClinic`
- `WebPage`
- `BreadcrumbList`
- `FAQPage` (location-specific questions)
- `VideoObject` (YouTube embed)
- `AggregateRating` (computed from `reviews[]` array or override)
- `Review` nodes (one per review in the `reviews[]` array)
- `hasOfferCatalog` with 4 `itemOffered` service nodes: ABA Therapy, Speech-Language Therapy, Occupational Therapy, Diagnostic Evaluation for Autism — each with `@id`, `url`, and `provider`
- `areaServed` array with `AdministrativeArea` objects, each with `sameAs` Wikipedia URL (county-level for all 10 locations, city-level for all 10 locations)
- `parentOrganization` linking to the national Bierman entity

### Open Graph

Static OG tags are defined in `index.html` and are not dynamically updated per route by React Helmet. The OG title, description, and image all reference Ramsey as the default. This means all 10 location pages share the same OG preview when shared on social media. This is a known gap — see Risk §8.

### Twitter Cards

`summary_large_image` card type. Same static values as OG — Ramsey-specific title, description, and image. Same gap as OG.

### Robots

`index, follow` — crawling is fully open. This is intentional for the pre-launch Rich Results validation phase. A comment in `index.html` notes this should be reviewed before production DNS cutover.

### Sitemap

`client/public/sitemap.xml` is present and manually maintained. It includes the hub, `/locations/nj/` alias, 7 open location pages, Parsippany (coming soon), and 3 legal pages. **Two locations are missing from the sitemap:** Moorestown and Roseland. Both are `comingSoon: true` but are routed and indexable. This is a documentation gap — see Risk §8.

### Internal Linking

Each location page includes a "Nearby Locations" section that links to 3–5 other location pages using the `nearby[]` array in the location data file. The NJ Hub page links to all 10 location pages via the location grid. Legal pages (Privacy, Terms, Accessibility) are linked from the footer of `LocationPage.tsx` and `NJHub.tsx`.

### Breadcrumbs

`BreadcrumbList` schema is emitted for each location page. Visual breadcrumbs are rendered in the page UI using the `slug` and `displayName` fields.

### Heading Hierarchy

`LocationPage.tsx` uses a consistent heading hierarchy: `<h1>` for the location name + service type, `<h2>` for major sections (services, reviews, FAQ, etc.), `<h3>` for individual items within sections. `NJHub.tsx` uses `<h1>` for the hub headline, `<h2>` for the location grid section.

---

## 5. UX Baseline

> **This section documents the current implementation. No redesign recommendations are made.**

### NJ Hub Page (`NJHub.tsx`)

The hub page renders a full-page layout with: sticky navigation header, hero section with `<h1>` and two CTAs, stats bar (10 locations, 9 BCBAs, 150+ families, 20+ years), location grid (cards for all 10 locations with address, service snippet, and "Learn More" CTA), and footer with legal links.

**Desktop:** Two-column location grid. Hero is left-aligned with text and CTAs. Stats bar is a horizontal strip.  
**Tablet/Mobile:** Grid collapses to single column. Navigation collapses to hamburger menu (implementation in `LocationPage.tsx` nav — hub nav behavior should be verified separately).  
**Inconsistency noted:** The hub page navigation header is simpler than the `LocationPage.tsx` navigation header. The hub nav does not include the phone number CTA that appears in the location page nav.

### Location Pages (`LocationPage.tsx`)

All 10 location pages use the same template with data-driven content. Sections in order: sticky nav (logo, location name, phone, "Request Services" CTA), hero (location name, county badge, h1, description, two CTAs, GBP verified address card), trust bar (5 trust signals), accreditation badges, "Our [City] Clinic" section (address, hours, map embed, directions), services grid (4 service cards with `id` anchors), reviews carousel, insurance logos, clinical leadership, FAQ accordion, nearby locations, video section, footer.

**Desktop:** Services section renders as a 4-column grid. Reviews render as a horizontal scroll carousel.  
**Tablet:** Services grid collapses to 2 columns.  
**Mobile:** Services grid collapses to 1 column. Navigation collapses to hamburger.  
**Coming Soon locations:** Render the same template with a "Coming Soon" badge in the hero, modified CTA copy ("Pre-Register"), and a reduced review count (placeholder reviews used for Moorestown, Roseland, Parsippany).

**Inconsistency noted:** The `scroll-margin-top` property is not set on service card `id` anchors. When navigating to a fragment URL (e.g., `#speech-therapy`), the sticky navigation (65px) partially overlaps the top of the targeted card. Card title and body text remain fully visible. This is a known, documented UX gap — see Risk §8.

### Navigation

The navigation header in `LocationPage.tsx` is sticky (`position: sticky; top: 0`). It contains: Bierman logo (links to hub), location name, phone number (tel: link), and "Request Services" CTA button. On mobile, the phone and CTA collapse into a hamburger menu.

### Footer

The footer in `LocationPage.tsx` contains: logo, tagline, address, phone, hours, "Request Services" CTA, nearby location links, and legal links (Privacy Policy, Terms of Use, Accessibility). The NJHub footer is a simplified version with legal links only.

### CTAs

Two primary CTA types are used throughout: "Request Services in [City]" (links to `intakeUrl` with UTM parameters) and phone number (tel: link). The "Request Services" button uses orange (`bg-orange-500`) as the primary action color. Secondary CTAs use teal outlines.

### Forms

No forms are rendered in the proof layer. All "Request Services" CTAs link to the external Bierman HubSpot intake form URL. This is intentional — the proof layer does not collect patient data.

### Videos

Each location page includes a YouTube embed via `youtubeId` field. The video renders in a dedicated section with a `VideoObject` schema node. The video is embedded using a standard YouTube iframe with `loading="lazy"`.

---

## 6. Asset Inventory

### Logos & Brand Assets

| Asset | Path | Type | Status |
|---|---|---|---|
| Bierman 20th anniversary logo | `/manus-storage/bierman-logo-anniversary-20_3f19246b.webp` | Production logo | Production-ready |
| NJ Penguin accent | `/manus-storage/bierman-brand-nj-penguin-accent_64e9cbdd.webp` | Brand accent | Production-ready |
| Favicon (ICO) | `/favicon.ico` | Favicon | Production-ready |
| Favicon (WebP) | `/favicon.webp` | Favicon | Production-ready |
| Apple touch icon | `/apple-touch-icon.png` | Favicon | Production-ready |
| Favicon 192px | `/favicon-192.png` | PWA icon | Production-ready |

### Service Card Images

| Asset | Path | Type | Status |
|---|---|---|---|
| ABA Therapy card | `/manus-storage/bierman-service-aba-therapy-card_d7ddabc1.webp` | Service image | Production-ready |
| OT card | `/manus-storage/bierman-service-occupational-therapy-card_2cffd7a2.webp` | Service image | Production-ready |
| Speech-Language card | `https://d2xsxph8kpxj0f.cloudfront.net/…/bierman-service-speech-language-therapy-card-…webp` | Service image | **External CDN URL** |
| Diagnostic Evaluation card | `https://d2xsxph8kpxj0f.cloudfront.net/…/bierman-service-diagnostic-evaluation-card-…webp` | Service image | **External CDN URL** |

**Note:** Two of the four service card images are served from an external CloudFront CDN (`d2xsxph8kpxj0f.cloudfront.net`). These URLs are not under Bierman's or the proof layer's control. If the CDN origin removes or changes these assets, the cards will show broken images. These should be migrated to `/manus-storage/` in Version 1.1.

### Insurance Logos

11 insurance logos are stored in `/manus-storage/` as `.webp` files. All are production-ready. Carriers represented: Aetna, Ambetter, Carelon, Cigna, CompPsych, Horizon BCBS NJ, Meritain Health, Surest, UMR, United Healthcare, and one additional carrier.

### Trust / Accreditation Badges

| Asset | Path | Status |
|---|---|---|
| BACB ACE Provider | `/manus-storage/bierman-trust-bacb-ace-provider_f1995271.webp` | Production-ready |
| CASP Member | `/manus-storage/bierman-trust-casp-member_7cc1f427.webp` | Production-ready |
| Group of the Year 2022 | `/manus-storage/bierman-trust-group-of-year-2022_866c3645.webp` | Production-ready |

### Theme / Content Images

| Asset | Path | Status |
|---|---|---|
| BCBA Guidance theme card | `/manus-storage/theme-card-bcba-guidance_f4421e19.png` | Production-ready |
| Family Partnership theme card | `/manus-storage/theme-card-family-partnership_7fd858a1.png` | Production-ready |
| Progress Focused theme card | `/manus-storage/theme-card-progress-focused_1582d40e.png` | Production-ready |

### OG / Social Image

One OG image is defined in `index.html`: `/manus-storage/bierman-ramsey-og-final_a86c4957.png` (1731×909px). This is a Ramsey-specific image used as the default OG image for all pages. Per-location OG images are not yet implemented.

### Fonts

Two font families loaded from Google Fonts CDN:
- **DM Sans** — weights 400, 500, 600, 700 (body text)
- **Source Serif 4** — weights 400, 600, 700 (regular and italic) (display/headings)

### Colors (Brand)

The following brand colors are hardcoded in page components (not yet mapped to CSS custom properties):

| Role | Value | Usage |
|---|---|---|
| Navy (headings, footer) | `#1a2b47` | `text-[#1a2b47]` |
| Teal (brand accent) | `#0d9488` / `teal-600` | Buttons, borders, badges |
| Orange (CTA) | `#f97316` / `orange-500` | Primary CTA buttons |
| Off-white (background) | `#f0f9f7` / custom | Page backgrounds |

---

## 7. Component Inventory

| Component | File | Used On | Reusable? | Duplicate? | Needs Refactor Later? |
|---|---|---|---|---|---|
| `ErrorBoundary` | `components/ErrorBoundary.tsx` | `App.tsx` | Yes | No | No |
| `HealthcareDisclaimer` | `components/HealthcareDisclaimer.tsx` | `App.tsx` | Yes | No | No |
| `ManusDialog` | `components/ManusDialog.tsx` | `App.tsx` | Yes | No | No |
| `Map` | `components/Map.tsx` | Available, unused | Yes | No | No |
| `LocationPage` | `locations/LocationPage.tsx` | All 10 location routes | Yes — data-driven | No | Yes — 849 lines, inline nav/footer |
| `NJHub` | `pages/NJHub.tsx` | `/` and `/locations/nj/` | No — page-level | No | Yes — inline nav/footer |
| `Home` | `pages/Home.tsx` | **Not routed** | No | No | Yes — orphan, 1551 lines |
| `Piscataway` | `pages/Piscataway.tsx` | **Not routed** | No | Partial — duplicates LocationPage | Yes — orphan, legacy page |
| `PrivacyPolicy` | `pages/PrivacyPolicy.tsx` | `/privacy-policy/` | No | No | No |
| `TermsOfUse` | `pages/TermsOfUse.tsx` | `/terms-of-use/` | No | No | No |
| `Accessibility` | `pages/Accessibility.tsx` | `/accessibility/` | No | No | No |
| `NotFound` | `pages/NotFound.tsx` | `/404` | No | No | No |
| shadcn/ui `accordion` | `components/ui/accordion.tsx` | `LocationPage.tsx` (FAQ) | Yes | No | No |
| shadcn/ui `badge` | `components/ui/badge.tsx` | `LocationPage.tsx`, `NJHub.tsx` | Yes | No | No |
| shadcn/ui `button` | `components/ui/button.tsx` | Multiple | Yes | No | No |
| shadcn/ui `card` | `components/ui/card.tsx` | `NJHub.tsx` | Yes | No | No |
| shadcn/ui `separator` | `components/ui/separator.tsx` | `LocationPage.tsx` | Yes | No | No |
| shadcn/ui `skeleton` | `components/ui/skeleton.tsx` | `LocationPage.tsx` | Yes | No | No |
| shadcn/ui `sonner` | `components/ui/sonner.tsx` | `App.tsx` | Yes | No | No |
| shadcn/ui `tooltip` | `components/ui/tooltip.tsx` | `LocationPage.tsx` | Yes | No | No |
| All other shadcn/ui | `components/ui/*.tsx` (38 files) | Not used in pages | Yes | No | Candidates for pruning |

**Duplicate logic identified:** `STANDARD_SERVICES` is defined independently in both `client/src/locations/schema.ts` and `client/src/locations/LocationPage.tsx`. Both arrays define the same four services (ABA, Speech, OT, Diagnostics) but with different shapes — `schema.ts` carries `name`, `type`, `slug`; `LocationPage.tsx` carries `slug`, `title`, `desc`, `img`, `icon`. These are intentionally separate (schema vs. UI concerns) but share the same source of truth. A shared constant or a single source of truth would reduce the risk of drift in Version 1.1.

---

## 8. Technical Risk Assessment

> **No fixes were applied. All items below are documentation only.**

| # | Risk | Severity | Category | Description |
|---|---|---|---|---|
| R-01 | `Home.tsx` orphan page | Medium | Dead code | `Home.tsx` (1,551 lines, 85 KB) is imported in `App.tsx` but not assigned to any route. It is included in the bundle, increasing build size. |
| R-02 | `Piscataway.tsx` orphan page | Medium | Dead code | `Piscataway.tsx` (909 lines, 51 KB) in `pages/` is a legacy standalone page from an earlier build phase. It is not routed. The Piscataway route uses `LocationPage` with `piscatawayData`. This file duplicates logic and adds bundle weight. |
| R-03 | Duplicate root PDF | Low | Repository bloat | `Bierman_Autism_Centers___Proof-Layer_System_Deck.pdf` (2.1 MB) at the repository root is a duplicate of `docs/decks/Bierman_Proof_Layer_System_Deck_v1.pdf`. |
| R-04 | External CDN image URLs | Medium | Asset stability | Two service card images (Speech-Language Therapy, Diagnostic Evaluation) are served from `d2xsxph8kpxj0f.cloudfront.net`. These are not under proof layer control. If the CDN origin removes them, the cards will show broken images. |
| R-05 | OG/Twitter tags are static (Ramsey-only) | Medium | SEO/Social | `index.html` OG and Twitter card tags are hardcoded to Ramsey. All 10 location pages share the same OG preview image and title when shared on social. React Helmet does not currently override OG tags per route. |
| R-06 | NJ Hub title over 60 chars | Low | SEO | The NJ Hub `<title>` is 67 characters — 7 over Google's display threshold. May truncate in SERPs. |
| R-07 | Moorestown and Roseland missing from sitemap | Low | SEO | Both coming-soon locations are routed and indexable but absent from `sitemap.xml`. |
| R-08 | Scroll-margin-top not set on service card anchors | Low | UX | Fragment URLs (e.g., `#speech-therapy`) scroll the card to `rectTop: 0`, placing the card top 65px behind the sticky nav. Card title and body text are fully visible. A `scroll-margin-top: 72px` CSS rule would resolve this. |
| R-09 | Brand colors hardcoded as Tailwind utilities | Low | Maintainability | Primary brand colors (`#1a2b47`, `teal-600`, `orange-500`) are hardcoded in page components rather than mapped to CSS custom properties. This makes global brand color changes require multi-file edits. |
| R-10 | `STANDARD_SERVICES` defined in two files | Low | Maintainability | `schema.ts` and `LocationPage.tsx` each define their own `STANDARD_SERVICES` constant. If a service is added or renamed, both files must be updated. |
| R-11 | No shared layout wrapper | Low | Maintainability | Navigation and footer are duplicated inline in `LocationPage.tsx` and `NJHub.tsx`. Any nav/footer change requires edits in both files. |
| R-12 | `framer-motion` and `axios` installed but unused | Low | Bundle hygiene | Both packages are in `dependencies` but have zero usage in `client/src/`. Tree-shaking removes them from the bundle, but they remain in `node_modules` and `pnpm-lock.yaml`. |
| R-13 | Uncommitted `.gitignore` change | Low | Git hygiene | One line addition to `.gitignore` is unstaged. Should be committed before tagging v1.0. |
| R-14 | Parsippany/Moorestown/Piscataway NAP discrepancies | High (data) | Data integrity | Three open NAP discrepancies documented in `index.html` comments: Ramsey phone (3 conflicting values), Piscataway address (2 conflicting values). These must be resolved with Bierman before production DNS cutover. |
| R-15 | `hreflang` es path (`/es/`) does not exist | Low | SEO | `index.html` includes `<link rel="alternate" hreflang="es" href="…/es/">` but no `/es/` route exists. This creates a dangling hreflang reference. |

---

## 9. Version Snapshot

### Recommendation: Tag as `v1.0-validation-complete` — with one prerequisite

The repository is in a stable, validated state. TypeScript compiles with zero errors. All 10 location routes return HTTP 200. The full entity/schema/metadata/geo/AI signal stack is implemented and verified. The proof layer is functionally complete for its stated purpose: Rich Results validation, pre-launch SEO baseline, and DNS cutover readiness.

**One prerequisite before tagging:** Commit the outstanding `.gitignore` change (Risk R-13). This is a single `git add .gitignore && git commit -m "chore: update .gitignore"` operation. The tag should be applied to the resulting commit, not to the current dirty working tree.

**Items that do NOT block the v1.0 tag:** All 15 risks identified in §8 are low-to-medium severity and are appropriate for Version 1.1 or later. None represent broken functionality, security issues, or data loss risks. The two high-severity NAP discrepancies (R-14) are data integrity issues that must be resolved before production DNS cutover, but they do not block the proof layer from being tagged as a validated baseline.

### What Version 1.0 Represents

Version 1.0 is a fully implemented, TypeScript-clean, SEO-validated proof layer for Bierman Autism Centers' New Jersey Hub. It includes:

- 10 NJ location pages (7 open, 3 coming soon) using a single data-driven template
- Full JSON-LD `@graph` schema per location (LocalBusiness/MedicalClinic, OfferCatalog, FAQPage, VideoObject, AggregateRating, Review, BreadcrumbList)
- `sameAs` Wikipedia entity bindings at county and city level for all 10 locations
- "Near Me" optimized title tags and meta descriptions across all 10 locations
- AI governance layer (`llm.txt`, `robots.txt` directives, `<link rel="ai-instructions">`)
- Dynamic geo meta tags (`geo.region`, `geo.placename`) per location
- Fragment anchors for all 4 service types (`#aba-therapy`, `#speech-therapy`, `#occupational-therapy`, `#diagnostic-evaluation`)
- UTM-tagged intake URLs for all 10 locations (`utm_campaign=nj-pilot-{location}`)
- GSC-data-validated hub page copy

---

## 10. Change Management Plan

> **This is a planning document only. No implementation is included.**

The following phases organize all known future work based on Bierman's feedback and the risks identified in §8. Phases are ordered by dependency and business impact.

### Phase A — Functional Fixes

Items that address broken or missing functionality. Should be completed before Version 1.1 brand work begins.

| Item | Risk Ref | Priority |
|---|---|---|
| Commit outstanding `.gitignore` change | R-13 | Immediate |
| Resolve Ramsey NAP phone discrepancy (3 conflicting values) | R-14 | Before DNS cutover |
| Resolve Piscataway address discrepancy (200 vs 280 Centennial Ave) | R-14 | Before DNS cutover |
| Add Moorestown and Roseland to `sitemap.xml` | R-07 | Before DNS cutover |
| Remove or route `Home.tsx` orphan page | R-01 | Before DNS cutover |
| Remove or archive `Piscataway.tsx` orphan page | R-02 | Before DNS cutover |
| Remove duplicate root-level PDF | R-03 | Low urgency |
| Fix dangling `hreflang` es path | R-15 | Before DNS cutover |

### Phase B — Brand Alignment

Items that align the proof layer with Bierman's production brand guidelines. Requires brand assets and approval from Bierman marketing.

| Item | Risk Ref | Priority |
|---|---|---|
| Map brand colors to CSS custom properties | R-09 | High |
| Replace external CloudFront service card images with `/manus-storage/` equivalents | R-04 | High |
| Create per-location OG images and implement dynamic OG/Twitter tags via React Helmet | R-05 | Medium |
| Align hub page navigation with location page navigation (add phone CTA) | §5 | Medium |
| Apply Bierman production brand fonts if different from DM Sans / Source Serif 4 | — | Pending brand review |
| Apply Bierman production color palette if different from current implementation | — | Pending brand review |

### Phase C — Content Refinements

Items that improve content quality, accuracy, or completeness. Requires Bierman content approval.

| Item | Notes |
|---|---|
| Add `scroll-margin-top` to service card anchors | R-08 — 1-line CSS fix |
| Update NJ Hub title to reduce below 60 chars | R-06 — requires copy decision |
| Verify and populate `serviceArea[]` and `visitLogistics` fields in location data | Currently typed but unpopulated |
| Add `schoolRelationships` and `communityLinks` fields where verified | Currently typed but unpopulated |
| Populate `clinicalLeadership[]` arrays for all 10 locations | Currently empty for most locations |

### Phase D — Media Updates

Items that require new media assets.

| Item | Notes |
|---|---|
| Replace speech-language therapy CloudFront image | R-04 |
| Replace diagnostic evaluation CloudFront image | R-04 |
| Create per-location OG images (10 images) | R-05 |
| Add location-specific hero images if brand guidelines require | Pending brand review |

### Phase E — Launch QA

Final validation steps before production DNS cutover.

| Item | Notes |
|---|---|
| Run Google Rich Results Test on Ramsey and Piscataway | Post-publish baseline |
| Submit `llm.txt` to Bing Webmaster Tools | Post-publish |
| Confirm all 10 GBP profiles match proof layer NAP data | Requires Bierman IT |
| Confirm DNS CNAME record for `local.biermanautism.com` | Requires Bierman IT |
| Update `sitemap.xml` `<lastmod>` dates to reflect actual publish date | Before DNS cutover |
| Update `robots.txt` if crawling policy changes at DNS cutover | Before DNS cutover |

---

## 11. Git Workflow Recommendation

### Step 1 — Commit the Outstanding Change

Before any tagging, commit the one unstaged `.gitignore` change:

```bash
git add .gitignore
git commit -m "chore: update .gitignore"
git push user_github main
```

### Step 2 — Tag Version 1.0

After the commit above, create an annotated tag on the resulting commit:

```bash
git tag -a v1.0-validation-complete -m "Version 1.0 — NJ Hub Pilot Proof Layer, SEO/entity/schema/metadata/GEO signal stack complete. TypeScript clean. 10 NJ locations validated. Pre-DNS-cutover baseline."
git push user_github v1.0-validation-complete
```

An annotated tag (using `-a`) is preferred over a lightweight tag because it stores the tagger identity, timestamp, and message — making it a proper release marker in GitHub's Releases UI.

### Step 3 — Create a Feature Branch for Version 1.1

All Version 1.1 work (brand alignment, functional fixes, content refinements) should happen on a dedicated branch to keep `main` clean and recoverable:

```bash
git checkout -b feature/brand-refinement-v1.1
git push user_github feature/brand-refinement-v1.1
```

**Branch naming rationale:** `feature/brand-refinement-v1.1` is descriptive, follows the standard `feature/` prefix convention, and maps directly to the Version 1.1 scope defined in §10. If Phase A (functional fixes) and Phase B (brand alignment) are worked in parallel by different contributors, they can be split into `fix/v1.1-functional` and `feature/brand-refinement-v1.1` respectively.

### Step 4 — Merge Strategy

When Version 1.1 work is complete and approved, merge back to `main` using a squash merge or a standard merge commit (not rebase) to preserve the full commit history of the feature branch:

```bash
git checkout main
git merge --no-ff feature/brand-refinement-v1.1 -m "Merge Version 1.1 brand refinement into main"
git tag -a v1.1-brand-refinement -m "Version 1.1 — Brand alignment, functional fixes, content refinements."
git push user_github main v1.1-brand-refinement
```

### Summary

| Action | Command | When |
|---|---|---|
| Commit `.gitignore` | `git add .gitignore && git commit` | Immediately |
| Tag v1.0 | `git tag -a v1.0-validation-complete` | After `.gitignore` commit |
| Create v1.1 branch | `git checkout -b feature/brand-refinement-v1.1` | Before any Version 1.1 work |
| Merge v1.1 | `git merge --no-ff feature/brand-refinement-v1.1` | After v1.1 approval |
| Tag v1.1 | `git tag -a v1.1-brand-refinement` | After v1.1 merge |

---

*Audit completed July 2, 2026. No source files were modified during this audit. The only file added is this document at `docs/V1_AUDIT.md`.*
