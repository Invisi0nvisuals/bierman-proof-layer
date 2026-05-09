# URL Strategy Findings
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Source:** biermanautism.com URL audit; proof layer architecture decisions.  
**Confidence:** High for current production pattern (directly observable); Medium for future recommendations (requires client and agency approval).

---

## Current Production URL Pattern

The current biermanautism.com location pages use a flat URL pattern:

```
https://www.biermanautism.com/locations/{slug}/
```

Examples from the live site:
- `https://www.biermanautism.com/locations/ramsey/`
- `https://www.biermanautism.com/locations/piscataway/`
- `https://www.biermanautism.com/locations/westfield/`

This pattern is functional and has existing Google index equity. It is not broken. However, it has two structural limitations for a 33-location multi-state network.

**Limitation 1 — No state hierarchy.** The flat `/locations/{slug}/` pattern does not signal the state or region of the location. For a multi-state network operating in NJ, MA, IN, OH, and other states, a state-level hierarchy (`/locations/nj/ramsey/`) would create stronger geographic signals and enable state-level landing pages that could capture "ABA therapy in New Jersey" type queries.

**Limitation 2 — Slug collision risk.** As the network grows, there is a risk of slug collisions — two locations in different states with the same city name. For example, if Bierman were to open locations in both Springfield, NJ and Springfield, MA, the current pattern would require a disambiguation slug (e.g., `/locations/springfield-nj/`), which is less clean than a hierarchical pattern (`/locations/nj/springfield/`).

---

## Proof Layer URL Architecture

The proof layer uses a hierarchical URL pattern as a recommendation:

```
https://bierman-proof-layer.manus.space/locations/{state}/{city}/
```

The current proof layer is a single-page application with one location (Ramsey), so the actual URL is:

```
https://bierman-proof-layer.manus.space/
```

The proof layer does not implement multi-page routing yet — that is a Phase 3 build item. The URL architecture recommendation is documented here as a forward-looking specification, not a current implementation.

---

## Future Pilot URL Recommendation

When the proof layer moves to a pilot deployment on a subdomain of biermanautism.com, the recommended URL pattern is:

```
https://pilot.biermanautism.com/locations/{state}/{city}/
```

For the Ramsey and Piscataway pilot:
- `https://pilot.biermanautism.com/locations/nj/ramsey/`
- `https://pilot.biermanautism.com/locations/nj/piscataway/`

This pattern: creates a clean state-level hierarchy, avoids slug collisions, enables state-level landing pages in the future, and is consistent with the pattern used by other multi-location healthcare providers.

The pilot subdomain approach allows the new architecture to be tested and validated without touching the production URL structure or requiring redirects.

---

## Future Production URL Recommendation

If the proof layer architecture is approved for production deployment, the recommended production URL pattern is:

```
https://www.biermanautism.com/locations/{state}/{city}/
```

For Ramsey and Piscataway:
- `https://www.biermanautism.com/locations/nj/ramsey/`
- `https://www.biermanautism.com/locations/nj/piscataway/`

This would require 301 redirects from the current flat URLs to the new hierarchical URLs. Redirect mapping is documented in the ROADMAP.md file.

---

## Why This Is Not a Migration Yet

The proof layer does not implement any URL changes on biermanautism.com. It is a separate proof-of-concept environment. No redirects have been created. No production URLs have been changed.

The URL architecture recommendation is a forward-looking specification. It is documented here so that when the decision is made to migrate, the redirect mapping can be planned and executed correctly.

A URL migration on a 33-location website requires careful planning: every existing location URL has Google index equity, inbound links, and GBP profile links. Migrating without proper 301 redirects would destroy that equity. The migration should only be executed after the new architecture has been validated on the pilot subdomain and the redirect map has been reviewed by the agency.

---

## How Redirect Mapping Would Work Later (If Approved)

A redirect map is a spreadsheet that lists every current URL and its corresponding new URL. For a 33-location migration, the redirect map would have at minimum 33 rows (one per location page) plus any supporting pages (state landing pages, service pages, etc.).

The redirect map would be implemented in the CMS (WordPress) using a redirect plugin, or at the server level using Nginx or Apache rewrite rules. The implementation method depends on the hosting environment and the agency's preferred approach.

The redirect map is not included in this repository because it has not been approved or planned. It is mentioned here as a future work item that would be required before any production URL migration.

---

## Canonical URL Strategy

The proof layer uses a canonical URL tag in `index.html`:

```html
<link rel="canonical" href="https://bierman-proof-layer.manus.space/" />
```

In production, the canonical URL would be updated to the production URL:

```html
<link rel="canonical" href="https://www.biermanautism.com/locations/nj/ramsey/" />
```

The canonical URL is also referenced in the WebPage schema node:

```json
{
  "@type": "WebPage",
  "@id": "https://bierman-proof-layer.manus.space/#webpage",
  "url": "https://bierman-proof-layer.manus.space/"
}
```

Both the HTML canonical tag and the schema `url` property must be updated consistently when the page moves to production.
