# Project TODO

## Completed
- [x] NJ Hub landing page with 10-pin dark blue hero map
- [x] 10 individual location pages (Berkeley Heights, Cranford, Eatontown, Moorestown, Parsippany, Piscataway, Princeton, Ramsey, Roseland, West Orange)
- [x] Phone number updated to (847) 232-4997 across all pages
- [x] Outcome stats bar on all location pages
- [x] Mobile hero crop fix (object-position: 30% 20%)
- [x] GA4 tracking (G-0L2R25L1T7) installed
- [x] Brand color audit — all off-brand hex values replaced
- [x] FAQ hyperlinks to intake form and Google Maps
- [x] Per-route OG images uploaded and wired
- [x] Pre-render script for per-route canonical/og:url/og:image
- [x] Server catch-all route to serve per-route pre-rendered index.html
- [x] Upgrade to web-db-user for Express server in production
- [x] Add { index: false } to express.static to fix directory URL routing
- [x] Verify canonical/og:url fix is working in production after deploy
- [x] CallRail phone: confirmed (847) 232-4997 pool number everywhere (OC-01, OC-05 resolved)
- [x] VI-01: Swap bird feet images with penguin feet in What Families Value section
- [x] BR-17: Apply Copy Blocks warm messaging (hero subhead, services, safety, getting started, insurance)
- [x] BR-06: Replace 'Verified Bierman Location' label with 'Bierman Autism Centers in [City]'
- [x] BR-14: Nearby module updated — all 9 other cities listed A-Z + 'All 10 NJ Locations' link
- [x] BR-09: Add noindex for manus.space domain only (X-Robots-Tag header, hostname-conditional)
- [x] CV-02: FacilityGallery component for 5 no-video locations (BH own photos; Moorestown/Parsippany/Roseland/West Orange use Cranford+Piscataway fallback mix)

## Blocked on Client
- [ ] Quincy penguin hero photos (need assets from Google Drive)
- [ ] Location-specific center tour videos (need video assets)
- [ ] Hotjar pixel (need Tiffany to provide access)
- [ ] CallRail per-location numbers (pending their team meeting confirmation)
- [ ] Google Places API live ratings (need decision/API key)
- [x] CV-03: Facility section hides when no video/gallery/facility image — hide logic implemented. Per-location YouTube IDs pending from Bierman (add facilityYoutubeId to each data file when provided)
- [x] GA4 custom event tracking: form_submit (HubSpot postMessage), phone_click, cta_click, get_directions, video_play — implemented in NJHub.tsx and LocationPage.tsx with hub_location and hub_city parameters on all events
- [x] Audited CallRail DNI phone-link hydration behavior across NJHub.tsx and LocationPage.tsx — no fix warranted because the app uses React createRoot client rendering, not SSR hydration; current CallRail script placement and phone links are compatible
