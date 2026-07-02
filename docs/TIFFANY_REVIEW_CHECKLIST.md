# Tiffany Site Review — Implementation Checklist

**Document:** MFGSEOSiteReview — 06/30/26
**Compared Against:** Repo state at checkpoint `7f4cf4cc` (Phase A.6)
**Date:** July 2, 2026

---

## Status Key

| Status | Meaning |
|--------|---------|
| ✅ Complete | Implemented and verified in current codebase |
| ⏳ Pending | Not yet implemented — requires code changes |
| 🔲 Requires Client Decision | Needs Bierman team input before implementation |
| ➖ Not Applicable | No longer relevant or superseded by other work |

---

## General Branding Questions

| # | Item | Status | Notes |
|---|------|--------|-------|
| 1 | Incorporate Bierman brand colors more consistently | ⏳ Pending | Current palette uses generic teal/slate/navy. Brand Design Guidelines PDF received but not yet mapped to CSS custom properties. Planned for Phase B. |
| 2 | More use of branded elements and iconography | ⏳ Pending | Pilot Penguin mascot is present but limited. Brand iconography from Drive not yet integrated. Phase B. |
| 3 | Warmer, friendlier brand tone in messaging | ⏳ Pending | Copy is clinically accurate but reads as informational rather than warm. Phase C (content refinement). |
| 4 | Reference brand design guidelines | ✅ Complete | BAC_Design_Guidelines.pdf received and stored. Ready for Phase B execution. |

---

## New Jersey State Page (NJHub)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 5 | Locations listed alphabetically for easier navigation? | 🔲 Requires Client Decision | Currently ordered by county cluster for geographic coherence (Bergen → Union → Essex → Middlesex → Mercer → Monmouth → Morris → Burlington → Essex). Alphabetical would be: Berkeley Heights, Cranford, Eatontown, Moorestown, Parsippany, Piscataway, Princeton, Ramsey, Roseland, West Orange. |
| 6 | Move Parsippany from Coming Soon to active | ✅ Complete | Done in Phase A.3. `comingSoon: false` confirmed. |
| 7 | Update count from 7/3 to 8/2 | ✅ Complete | Done in Phase A.3. Dynamic count now shows "8 open locations · 2 coming soon". |
| 8 | Change "Pre-register interest" to "View location" for Coming Soon cards | ⏳ Pending | Currently reads "Pre-register interest" for Coming Soon cards (line 180 NJHub.tsx). Tiffany suggests using "View location" consistently. |
| 9 | NJ Hub phone number — use (847) 737-8584 or CallRail numbers? | 🔲 Requires Client Decision | Currently shows `(800) 931-8113`. Tiffany asks whether it should be `(847) 737-8584` (from current biermanautism.com NJ page) or a CallRail tracking number. |

---

## Location Card Navigation Behavior (Scroll Position)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 10 | Location cards should anchor to top of page or Welcoming Environment section | ⏳ Pending | No `scrollTo(0,0)` or scroll-to-top behavior exists in the SPA. When navigating from NJHub to a location page, React renders mid-page due to SPA routing without scroll reset. This affects all 10 locations. Fix: add `useEffect(() => window.scrollTo(0,0), [])` in LocationPage.tsx. |
| 11 | Desktop: Ramsey anchors high on page | ⏳ Pending | Same root cause as #10 — no scroll-to-top on route change. |
| 12 | Desktop: Berkeley Heights anchors at accreditation logos | ⏳ Pending | Same root cause. |
| 13 | Desktop: Cranford — correct | ✅ Complete | Works on desktop per Tiffany's report. |
| 14 | Desktop: West Orange — correct | ✅ Complete | Works on desktop per Tiffany's report. |
| 15 | Desktop: Piscataway — correct | ✅ Complete | Works on desktop per Tiffany's report. |
| 16 | Desktop: Princeton — correct | ✅ Complete | Works on desktop per Tiffany's report. |
| 17 | Desktop: Eatontown — Comprehensive Services section | ⏳ Pending | Same root cause as #10. |
| 18 | Desktop: Parsippany — middle of services cards | ⏳ Pending | Same root cause. |
| 19 | Desktop: Moorestown — middle of services cards | ⏳ Pending | Same root cause. |
| 20 | Desktop: Roseland — middle of services cards | ⏳ Pending | Same root cause. |
| 21 | Mobile: All locations have inconsistent anchor positions | ⏳ Pending | Same root cause — no scroll-to-top on SPA navigation. Single fix resolves all mobile issues. |

---

## Comprehensive Autism Support Across New Jersey (NJHub Services Section)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 22 | Service sections not linking anywhere — add content or link to Bierman service pages? | 🔲 Requires Client Decision | The NJHub services section currently has "Learn about ABA →" linking to biermanautism.com/aba-therapy-services/. Other cards link to blog posts. Tiffany asks if all should link to service pages or get supporting content. |

---

## Insurance & Access

| # | Item | Status | Notes |
|---|------|--------|-------|
| 23 | Remove "most major insurance plans" claim — list specific accepted plans instead | ⏳ Pending | NJHub line 369 says "accept most major insurance plans." All 10 location files use "accepts most major insurance plans" in `insuranceText` and FAQ answers. Tiffany flags this as potentially misleading. Currently lists Horizon BCBS NJ, Aetna, United Healthcare, Cigna. |
| 24 | Match insurance display to current NJ page on biermanautism.com | 🔲 Requires Client Decision | Need confirmation of exact accepted plans list from Bierman. Current list may be incomplete or inaccurate. |

---

## Initial Page Position

| # | Item | Status | Notes |
|---|------|--------|-------|
| 25 | Users land on second section instead of top when selecting a location | ⏳ Pending | Same root cause as #10. No `window.scrollTo(0,0)` on route change. Single fix resolves this. |

---

## Feedback Across All Pages

| # | Item | Status | Notes |
|---|------|--------|-------|
| 26 | Embed HubSpot form directly on pages instead of redirecting to biermanautism.com | 🔲 Requires Client Decision | Currently all CTAs link to `biermanautism.com/start-now/?loc=...&utm_...`. Embedding requires HubSpot form ID, CORS approval, and decision on whether pilot should capture leads directly or route through main site. Significant architectural change. |
| 27 | Footer logo — use white-and-teal or all-white version (blue gets lost on dark bg) | ⏳ Pending | Currently uses the 20th Anniversary logo (blue/teal on dark navy footer). White version available in Drive brand assets folder. Phase B. |
| 28 | Footer services links — should they link to biermanautism.com service pages? | ⏳ Pending | Footer "Services" section currently displays service names as plain text (no links). Could link each to corresponding biermanautism.com service page. Low effort. |

---

## Feedback Across All Location Pages

| # | Item | Status | Notes |
|---|------|--------|-------|
| 29 | Horizon logo should be resized to match other payer logos | ⏳ Pending | Currently uses a single combined insurance image (`bierman-autism-insurance-horizon-bcbs-new-jersey_8162212b.webp`) with `maxHeight: 80px`. Individual logo sizing not controllable with current approach. Requires splitting into individual logo images. |
| 30 | Remove white backgrounds from all insurance logos | ⏳ Pending | Same as #29 — requires individual transparent-background logo files. Available in Drive brand assets. |
| 31 | Rename services section to "Comprehensive and Focused Autism Support Services" | 🔲 Requires Client Decision | Currently reads "Comprehensive Autism Support Services". Tiffany suggests adding "and Focused". Simple text swap if approved. |
| 32 | Add disclaimer that not all services available at every location | 🔲 Requires Client Decision | No disclaimer currently exists. Tiffany suggests noting Speech, OT, and Diagnostics may not be at every center. Needs exact wording from Bierman. |
| 33 | Google Maps should link directly to GBP profile | ⏳ Pending | Map currently embeds via iframe with no click-through to GBP. `gbpUrl` field exists in all data files but is not used in the UI. Fix: wrap map or add "View on Google Maps" link using `gbpUrl`. |
| 34 | Show reviews/ratings on map like current location pages | ⏳ Pending | Current map is a plain embed. Adding GBP review widget or rating overlay requires either Places API integration or a visual overlay. Medium effort. |
| 35 | Update hours to 8:30 AM – 4:30 PM | ✅ Complete | Done in Phase A.2. All 10 locations show "8:30 AM – 4:30 PM". |

---

## A Gentle Story About Curiosity, Belonging, and Growth (Video Section)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 36 | Replace video with new branded Family Outcomes video | ⏳ Pending | Currently shows "Meet Pilot the Penguin" video (YouTube ID: QFufx0pye4U on all pages). New Family Outcomes video URL not yet provided by Bierman. |
| 37 | Add center tour videos for each location (two videos per page?) | 🔲 Requires Client Decision | Tiffany asks if two videos is too much. Each location has a `youtubeId` field — currently all share the same video. Individual tour video URLs not yet provided. |

---

## What Families Value Section

| # | Item | Status | Notes |
|---|------|--------|-------|
| 38 | Replace AI-generated imagery with authentic center photos | ⏳ Pending | Currently uses AI-generated theme images (`theme-card-bcba-guidance`, `theme-family-partnership`, `theme-progress-focused`). Quincy shoot stills available in Drive. Phase D (media updates). |
| 39 | Remove/rewrite "Public review evidence and Bierman testimonial themes suggest..." statement | ⏳ Pending | Line 589 in LocationPage.tsx. Tiffany flags this as sounding like "an AI analysis." Needs human-written replacement copy. Phase C. |

---

## Reviews Section

| # | Item | Status | Notes |
|---|------|--------|-------|
| 40 | Display first name + last initial only (not full names) | ⏳ Pending | Currently displays `review.name` (full names like "Ambar Arias", "Kim Sedlacek"). Fix: either truncate in display logic (`name.split(' ')[0] + ' ' + name.split(' ')[1]?.[0] + '.'`) or update data files. |
| 41 | Mobile shows "Bierman Parent" but desktop shows full name — inconsistency | ⏳ Pending | Likely a responsive display logic issue or mobile-specific override. Needs investigation in the review card component. Related to #40 — fixing #40 resolves both. |

---

## Team Section (Penguin)

| # | Item | Status | Notes |
|---|------|--------|-------|
| 42 | White box with penguin graphic feels disconnected — remove or restyle | ⏳ Pending | Penguin mascot section exists at lines 562-580 in LocationPage.tsx. Tiffany wants it either removed or restyled to match biermanautism.com brand treatment. Phase B. |

---

## FAQ Section

| # | Item | Status | Notes |
|---|------|--------|-------|
| 43 | Revise Speech/OT/Diagnostic FAQs — not available at every location | 🔲 Requires Client Decision | Tiffany suggests encouraging families to contact Intake Team to learn which services are available at their specific center. Needs exact wording approval. |

---

## More Bierman Centers Near You

| # | Item | Status | Notes |
|---|------|--------|-------|
| 44 | "All 35 Locations" button goes to NJ page — should go to all-locations page | ✅ Complete | Fixed in Phase A.5. Now reads "All 10 NJ Locations →" and links to `/` (NJ Hub). This is intentional for the NJ pilot — keeps users in the NJ experience. |
| 45 | Update count from 35 to 34 (Canal Winchester removed) | ✅ Complete | Fixed in Phase A.3. Footer shows "34 locations nationwide." Nearby section shows "All 10 NJ Locations →". |

---

## Header Logo Behavior

| # | Item | Status | Notes |
|---|------|--------|-------|
| 46 | Clicking logo does not navigate anywhere | ⏳ Pending | Header logo at line 260 is a bare `<img>` with no `<a>` wrapper. Should link to either `/` (NJ Hub) or `https://www.biermanautism.com`. Low effort fix. |

---

## Response to Alex's Questions

| # | Item | Status | Notes |
|---|------|--------|-------|
| 47 | Link pilot directly to live Privacy Policy | ✅ Complete | Done in Phase A. Footer links to `biermanautism.com/privacy-policy/` with UTM params. |
| 48 | Link pilot directly to live Terms of Use | ✅ Complete | Done in Phase A. Footer links to `biermanautism.com/terms-of-use/` with UTM params. |
| 49 | Remove Accessibility page from pilot | ✅ Complete | Done in Phase A.1. Route removed from App.tsx. Link removed from footer. |

---

## Summary

| Status | Count |
|--------|-------|
| ✅ Complete | 16 |
| ⏳ Pending | 24 |
| 🔲 Requires Client Decision | 8 |
| ➖ Not Applicable | 0 |

---

## Priority Grouping for Pending Items

### Quick Wins (< 30 min each, no client decision needed)

| Item # | Description | Effort |
|--------|-------------|--------|
| 10/25 | Add `scrollTo(0,0)` on route change — fixes ALL scroll position issues (items 10–21, 25) | 5 min |
| 46 | Wrap header logo in `<a href="/">` | 2 min |
| 8 | Change "Pre-register interest" to "View location" on Coming Soon cards | 2 min |
| 40/41 | Display reviewer first name + last initial only | 10 min |
| 28 | Add links to footer service names → biermanautism.com service pages | 10 min |
| 33 | Add "View on Google Maps" link using existing `gbpUrl` field | 5 min |

### Medium Effort (Phase B/C, no client decision needed)

| Item # | Description | Effort |
|--------|-------------|--------|
| 1–3 | Brand color mapping + iconography + tone | 4–6 hrs |
| 27 | Swap footer logo to white/teal version | 15 min |
| 42 | Restyle or remove penguin section | 30 min |
| 39 | Rewrite "AI analysis" statement | 10 min |
| 23 | Rewrite insurance language to list specific plans without "most major" claim | 30 min |
| 36 | Swap video when Family Outcomes URL is provided | 10 min |

### Requires Client Decision Before Implementation

| Item # | Description | Decision Needed |
|--------|-------------|-----------------|
| 5 | Alphabetical vs. geographic sort | Bierman preference |
| 9 | NJ Hub phone number | Which number to display |
| 22 | NJHub services — add content or link to service pages | Content strategy |
| 24 | Exact list of accepted insurance plans | Bierman compliance |
| 26 | Embed HubSpot form vs. redirect | Architecture + lead routing |
| 31 | Add "and Focused" to services section title | Copy approval |
| 32 | Services availability disclaimer wording | Legal/clinical approval |
| 37 | Two videos per page — too much? | UX preference |
| 43 | FAQ revision for location-specific services | Clinical team input |

### Blocked by Missing Assets

| Item # | Description | Asset Needed |
|--------|-------------|--------------|
| 29/30 | Individual insurance logos (transparent bg, uniform size) | Design team export |
| 36 | Family Outcomes video | YouTube URL from Bierman |
| 37 | Per-location tour videos | 10 YouTube URLs from Bierman |
| 38 | Authentic center photos | Selection from Quincy shoot stills |

---

## Recommended Execution Order

1. **Immediate (Quick Wins)** — Items 10, 46, 8, 40, 28, 33
2. **Send Client Decision Questions** — Items 5, 9, 22, 24, 26, 31, 32, 37, 43
3. **Phase B (Brand)** — Items 1–3, 27, 42
4. **Phase C (Content)** — Items 23, 39
5. **Phase D (Media)** — Items 29, 30, 36, 37, 38 (blocked by assets)
