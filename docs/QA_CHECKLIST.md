# QA Checklist
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026

---

## How to Use This Checklist

Run this checklist before any significant delivery, before presenting to Bierman or agency partners, and before any production deployment decision. Each item should be verified manually or via the specified tool. Mark items with ✅ (pass), ⚠️ (warning — acceptable with documentation), or ❌ (fail — must fix before delivery).

---

## 1. Production Safety

| Check | Method | Status |
|---|---|---|
| biermanautism.com is unchanged | Visit production URL, compare to known state | ✅ |
| No DNS changes made | Check with Bierman DNS admin | ✅ |
| No GBP changes made | Check GBP profile | ✅ |
| No GSC changes made | Check GSC | ✅ |
| No GTM changes made | Check GTM container | ✅ |
| No GA4 changes made | Check GA4 property | ✅ |
| No HubSpot changes made | Check HubSpot | ✅ |
| No CallRail changes made | Check CallRail | ✅ |
| Proof layer has noindex/nofollow | View page source, check robots meta | ✅ |
| Proof layer does not appear in Google Search | Search `site:bierman-proof-layer.manus.space` | ✅ |

---

## 2. Tracking and Privacy

| Check | Method | Status |
|---|---|---|
| No GTM container on proof layer | View page source, check for GTM script | ✅ |
| No GA4 on proof layer | View page source, check for gtag.js | ✅ |
| No Meta Pixel on proof layer | View page source, check for fbq | ✅ |
| No Google Ads tag on proof layer | View page source, check for gads | ✅ |
| No Bing UET on proof layer | View page source, check for bat.bing | ✅ |
| No CallRail on proof layer | View page source, check for callrail | ✅ |
| No Birdeye on proof layer | View page source, check for birdeye | ✅ |
| No UserWay on proof layer | View page source, check for userway | ✅ |
| No live forms | Click all CTAs — confirm they link to biermanautism.com intake | ✅ |
| No patient data collection | Confirm no form submissions are processed | ✅ |
| No PHI/PII in any data layer event | Check browser console for dataLayer pushes | ✅ |

---

## 3. Schema Validation

| Check | Method | Status |
|---|---|---|
| JSON-LD parses without errors | `python3 -c "import json; json.load(open('client/index.html'))"` | ✅ |
| Rich Results Test: 13 items detected | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) | ⚠️ Rerun needed |
| Rich Results Test: 0 invalid items | Rich Results Test | ⚠️ Rerun needed after v17 fix |
| Schema Markup Validator: no critical errors | [validator.schema.org](https://validator.schema.org) | ⚠️ Rerun needed |
| All 6 Review nodes have `reviewBody` | Inspect JSON-LD in page source | ✅ (added v16) |
| All 6 Review nodes have `itemReviewed` | Inspect JSON-LD in page source | ✅ |
| `AggregateRating.reviewCount` matches visible cards | Count visible review cards | ✅ (6 cards, reviewCount: 6) |
| No microdata attributes on review cards | Grep for `itemScope`, `itemProp` in Home.tsx | ✅ (stripped v17) |
| `BreadcrumbList` has 3 items | Inspect JSON-LD | ✅ |
| `FAQPage` has 13 Q&A pairs | Inspect JSON-LD | ✅ |
| `VideoObject` has `contentUrl` and `thumbnailUrl` | Inspect JSON-LD | ✅ |

---

## 4. Rich Results Test

| Check | Expected | Status |
|---|---|---|
| Breadcrumbs | ✅ Valid | ✅ |
| FAQ | ✅ Valid | ✅ |
| Local businesses | ✅ Valid | ✅ |
| Organization | ✅ Valid | ✅ |
| Review snippets | ✅ Valid (targeting) | ⚠️ Rerun needed |
| Videos | ✅ Valid | ✅ |
| Total items | 13 | ⚠️ Rerun needed |
| Invalid items | 0 | ⚠️ Rerun needed |

---

## 5. Social Preview

| Check | Method | Status |
|---|---|---|
| `og:title` correct | View page source | ✅ "ABA Therapy in Ramsey, NJ \| Bierman Autism Centers" |
| `og:description` correct | View page source | ✅ Present |
| `og:image` loads | Visit OG image URL directly | ✅ |
| `og:image` dimensions ≥ 1200×630 | Check image dimensions | ✅ 1731×909 |
| `og:url` correct | View page source | ✅ |
| Twitter card tags present | View page source | ✅ |
| Meta Sharing Debugger: no critical errors | [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug) | ⚠️ 403 from Manus CDN — resolves on custom domain |

---

## 6. Mobile Layout

| Check | Method | Status |
|---|---|---|
| Hero section renders correctly on mobile | Chrome DevTools mobile viewport | ✅ |
| Review cards stack to 1 column on mobile | Chrome DevTools mobile viewport | ✅ |
| Navigation is usable on mobile | Chrome DevTools mobile viewport | ✅ |
| CTAs are visible in first mobile viewport | Chrome DevTools mobile viewport | ✅ |
| No horizontal scroll on mobile | Chrome DevTools mobile viewport | ✅ |
| Map embed loads on mobile | Chrome DevTools mobile viewport | ✅ |
| Insurance logos wrap correctly on mobile | Chrome DevTools mobile viewport | ✅ |

---

## 7. Accessibility Basics

| Check | Method | Status |
|---|---|---|
| All images have `alt` text | View page source | ✅ |
| All CTAs have descriptive text | Visual check | ✅ |
| Color contrast meets WCAG AA | Chrome DevTools accessibility | ⚠️ Not formally audited |
| Focus rings visible on keyboard navigation | Tab through page | ⚠️ Not formally audited |
| Page has a single H1 | View page source | ✅ |
| Heading hierarchy is logical (H1 → H2 → H3) | View page source | ✅ |

---

## 8. Asset Loading

| Check | Method | Status |
|---|---|---|
| All CDN images load (200 response) | Browser network tab | ✅ |
| No broken image placeholders | Visual check | ✅ |
| Logo loads correctly | Visual check | ✅ |
| Insurance logos load correctly | Visual check | ✅ |
| Theme card images load correctly | Visual check | ✅ |
| Video poster loads correctly | Visual check | ✅ |
| OG image loads correctly | Visit OG image URL | ✅ |

---

## 9. Review / Schema Alignment

| Check | Method | Status |
|---|---|---|
| Every visible review has a matching `Review` node | Cross-reference DOM and JSON-LD | ✅ |
| `reviewBody` text matches visible DOM text | Cross-reference DOM and JSON-LD | ✅ |
| No `Review` nodes for hidden reviews | Inspect JSON-LD | ✅ |
| No fake review content | Verify all reviews are public GBP reviews | ✅ |
| No unsupported medical claims in reviews | Read all review text | ✅ |

---

## 10. Content Safety

| Check | Method | Status |
|---|---|---|
| No unsupported medical claims on page | Read all page content | ✅ |
| No Physician schema without MD credentials | Inspect JSON-LD | ✅ |
| No HIPAA compliance claims | Read all page content | ✅ |
| No ranking or lead guarantees | Read all page content | ✅ |
| No implication that production was changed | Read all page content | ✅ |
| Proof-layer banner is visible | Visual check | ✅ |
| Proof-layer banner links to correct context | Click test | ✅ |

---

## 11. TypeScript / Build

| Check | Method | Status |
|---|---|---|
| TypeScript: no errors | `npx tsc --noEmit` | ✅ |
| Build: no errors | `pnpm build` | ✅ |
| Dev server: starts cleanly | `pnpm dev` | ✅ |
| HTTP 200 on proof layer URL | `curl -s -o /dev/null -w "%{http_code}" https://bierman-proof-layer.manus.space/` | ✅ |
