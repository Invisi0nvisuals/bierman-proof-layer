# URL Strategy
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026

---

## Current URL Inventory

| Environment | URL | Status |
|---|---|---|
| **Current production** | `https://www.biermanautism.com/location/ramsey/` | Live, untouched |
| **Proof layer** | `https://bierman-proof-layer.manus.space/` | Active, noindex |
| **Recommended pilot** | `https://pilot.biermanautism.com/locations/new-jersey/ramsey/` | Not deployed |
| **Future production** | `https://www.biermanautism.com/locations/new-jersey/ramsey/` | Not deployed |

---

## Why Clean State/City URLs Matter

The current production URL structure (`/location/ramsey/`) is flat. It does not reflect geographic hierarchy, does not support state-level hub pages, and does not provide a natural internal linking architecture for a multi-state, multi-location provider.

The recommended structure (`/locations/{state}/{city}/`) provides:

**1. Geographic hierarchy for internal linking**
A state-level hub page (`/locations/new-jersey/`) can aggregate all NJ locations, link to each city page, and serve as a topical authority node for "ABA therapy in New Jersey" queries. This is not possible with the flat structure.

**2. Crawl budget efficiency**
A clean hierarchy allows Googlebot to understand the site structure and prioritize crawling of location pages. Flat structures with no hierarchy provide no crawl signal about which pages are most important.

**3. Breadcrumb rich results**
The `BreadcrumbList` schema (`Home > New Jersey > Ramsey`) maps directly to the URL hierarchy. A flat URL structure produces a weaker breadcrumb signal.

**4. Scalability**
With 33+ locations across multiple states, a state/city hierarchy is the only structure that scales without URL conflicts or ambiguity. A flat `/location/` prefix does not differentiate between states.

**5. AEO/entity alignment**
Answer engines (Google SGE, Perplexity, ChatGPT) use URL structure as a signal for geographic entity relationships. A state/city hierarchy reinforces the entity relationship between the location, the state, and the parent organization.

---

## Why This Is Not a Migration Yet

The proof layer demonstrates the future-state URL architecture but does not implement a migration. A migration requires:

1. **Bierman approval** — production changes require explicit client sign-off
2. **Redirect mapping** — every existing location URL must have a confirmed 301 redirect to the new URL
3. **GSC verification** — redirect implementation must be verified in Google Search Console
4. **GBP update** — GBP website URLs must be updated to match the new canonical URLs
5. **Internal link audit** — all internal links pointing to old URLs must be updated
6. **Sitemap update** — sitemap must reflect new canonical URLs
7. **Canonical tag update** — all canonical tags must point to new URLs

None of these steps have been taken. The proof layer uses its own Manus domain (`bierman-proof-layer.manus.space`) with a self-referencing canonical and noindex/nofollow. It does not compete with production in search.

---

## Redirect Strategy (If Adopted)

If Bierman approves the URL migration, the redirect strategy is:

| Old URL | New URL | Type |
|---|---|---|
| `/location/ramsey/` | `/locations/new-jersey/ramsey/` | 301 |
| `/location/piscataway/` | `/locations/new-jersey/piscataway/` | 301 |
| `/location/{slug}/` | `/locations/{state}/{city}/` | 301 per location |

All redirects must be implemented server-side (not client-side JavaScript). All redirects must return HTTP 301 (permanent). All redirects must be verified in Google Search Console after implementation.

---

## Pilot Subdomain Recommendation

Before a full production migration, a pilot subdomain is recommended:

`https://pilot.biermanautism.com/locations/new-jersey/ramsey/`

This allows:
- Live testing of the new URL structure without touching the existing production pages
- GSC comparison between pilot and production performance
- Bierman team review of the new architecture in a live environment
- Gradual rollout — start with 2 locations (Ramsey + Piscataway), measure, then expand

The pilot subdomain requires:
- Bierman DNS access to create the `pilot.` subdomain
- Bierman approval for the subdomain creation
- A decision on whether the pilot pages should be indexed or noindex

---

## URL Naming Conventions

| Level | Pattern | Example |
|---|---|---|
| State hub | `/locations/{state-slug}/` | `/locations/new-jersey/` |
| City page | `/locations/{state-slug}/{city-slug}/` | `/locations/new-jersey/ramsey/` |
| Service page | `/locations/{state-slug}/{city-slug}/{service-slug}/` | `/locations/new-jersey/ramsey/aba-therapy/` |

State slugs: lowercase, hyphenated (`new-jersey`, `massachusetts`, `indiana`, etc.)  
City slugs: lowercase, hyphenated (`ramsey`, `piscataway`, `west-orange`, etc.)  
Service slugs: lowercase, hyphenated (`aba-therapy`, `speech-language-therapy`, etc.)

---

## Canonical Tag Strategy

- **Proof layer:** canonical points to `https://bierman-proof-layer.manus.space/` (self-referencing)
- **Pilot:** canonical points to the pilot URL (self-referencing)
- **Production (post-migration):** canonical points to the new production URL
- **During migration:** old production pages get canonical pointing to new URL before redirect is implemented

---

## Sitemap Strategy

- **Proof layer:** no sitemap submitted to GSC (noindex environment)
- **Pilot:** sitemap submitted to GSC only if pilot pages are indexed
- **Production (post-migration):** sitemap updated to reflect new URL structure; old URLs removed after redirect verification

---

## Impact Assessment

Migrating from `/location/ramsey/` to `/locations/new-jersey/ramsey/` carries standard URL migration risk:

- **Temporary ranking fluctuation** — expected for 4–8 weeks post-migration
- **Redirect chain risk** — if redirects are not implemented correctly, ranking signals are lost
- **GBP alignment** — GBP website URLs must be updated to avoid NAP inconsistency

These risks are manageable with proper implementation. They are not a reason to avoid migration — they are a reason to plan it carefully.
