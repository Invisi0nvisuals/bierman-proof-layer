/**
 * Bierman Autism Centers — Proof Layer
 * Location Data Type System
 *
 * This is the single source of truth for all per-location variables.
 * Every location page is generated from one LocationData object.
 * The LocationPage renderer and buildLocationSchema utility both consume this type.
 *
 * To add a new location:
 *   1. Create client/src/locations/data/{city-slug}.ts
 *   2. Export a LocationData object
 *   3. Add a route in App.tsx pointing to <LocationPage data={locationData} />
 *   4. Done — no other files need to change.
 */

// ─── Shared Pilot Video ─────────────────────────────────────────────────────
// Single source of truth for the Family Outcomes video used across all location pages.
// To update the video globally, change only this object.
// Governance: BAC Pilot Design System & Asset Governance v3, Section 3G

export const PILOT_VIDEO = {
  youtubeId: "Fd_kRMa2chM",
  title: "Progress You Can See: ABA Therapy at Bierman Autism Centers",
  description:
    "See the progress children make through evidence-based ABA therapy at Bierman Autism Centers — real outcomes for real families.",
  embedUrl: "https://www.youtube.com/embed/Fd_kRMa2chM",
  watchUrl: "https://www.youtube.com/watch?v=Fd_kRMa2chM",
  thumbnailUrl: "https://img.youtube.com/vi/Fd_kRMa2chM/maxresdefault.jpg",
  thumbnailFallback: "https://img.youtube.com/vi/Fd_kRMa2chM/hqdefault.jpg",
  /** Confirmed via YouTube oEmbed metadata */
  uploadDate: "2024-10-15T00:00:00+00:00",
  duration: "PT2M30S",
} as const;

// ─── Core NAP + Geo ───────────────────────────────────────────────────────────

export interface LocationAddress {
  /** Street address only, e.g. "500 N Franklin Tpke, Ste 203" */
  street: string;
  city: string;
  state: string;
  zip: string;
  /** County label shown in hero breadcrumb, e.g. "Bergen County" */
  county: string;
}

export interface LocationGeo {
  lat: number;
  lng: number;
}

// ─── Review ───────────────────────────────────────────────────────────────────

export interface LocationReview {
  /** Unique slug used as schema @id suffix and React key */
  slug: string;
  name: string;
  /** Reviewer meta line, e.g. "Local Guide · 34 reviews · 81 photos" */
  meta: string;
  /** Human-readable date string, e.g. "3 days ago" or "8 weeks ago" */
  date: string;
  stars: 1 | 2 | 3 | 4 | 5;
  /** Full review text — used for display and schema reviewBody */
  text: string;
  /** Two-letter initials for avatar fallback */
  initials: string;
  /** Hex color for avatar background */
  avatarColor: string;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export interface LocationFaq {
  q: string;
  a: string;
}

// ─── Nearby Location Link ─────────────────────────────────────────────────────

export interface NearbyLocation {
  name: string;
  /** Internal route path or "#" if not yet built */
  url: string;
}

// ─── Clinical Leader ─────────────────────────────────────────────────────────

export interface ClinicalLeader {
  name: string;
  /** Credentials line, e.g. "Ph.D., BCBA-D, LBA" */
  credentials: string;
  /** Role line, e.g. "Director of Clinical Excellence · New Jersey" */
  role: string;
  /** CDN path to headshot image */
  headshot: string;
  /** Comma-separated specialty tags */
  tags: string[];
}

// ─── Assets ───────────────────────────────────────────────────────────────────

export interface LocationAssets {
  /** Facility / clinic interior hero image */
  facility: string;
  /** Optional: facility image alt text override */
  facilityAlt?: string;
  /** Optional: city-specific hero banner for the page hero section */
  heroImage?: string;
  /** Optional: location-specific video poster image */
  videoPoster?: string;
  /** Optional: location-specific video file (mp4) */
  videoFile?: string;
  /** Optional: YouTube video ID to show in place of the facility photo in the Welcoming Environment section */
  facilityYoutubeId?: string;
}

// ─── Schema Metadata ─────────────────────────────────────────────────────────

export interface LocationSchemaMetadata {
  /** Canonical URL for this location page, e.g. "https://local.biermanautism.com/locations/nj/piscataway/" */
  pageUrl: string;
  /** Schema @id base URL for this location, e.g. "https://local.biermanautism.com/locations/nj/piscataway/" */
  baseId: string;
  /** Page <title> tag value */
  pageTitle: string;
  /** Page meta description */
  pageDescription: string;
  /** ISO 8601 date string for VideoObject uploadDate, e.g. "2023-10-19T00:00:00+00:00" */
  videoUploadDate?: string;
  /** AggregateRating — calculated from reviews array if not overridden */
  aggregateRatingOverride?: {
    ratingValue: string;
    reviewCount: string;
  };
  /** areaServed entries for LocalBusiness schema */
  areaServed: Array<{
    type: "AdministrativeArea" | "City";
    name: string;
    /**
     * Optional Wikipedia or Wikidata URL for entity disambiguation.
     * Emitted as schema.org `sameAs` when present.
     * Example: "https://en.wikipedia.org/wiki/Bergen_County,_New_Jersey"
     */
    sameAs?: string;
  }>;
  /** Additional knowsAbout entries beyond the standard ABA/autism set */
  additionalKnowsAbout?: string[];
}

// ─── Visit Logistics ─────────────────────────────────────────────────────────
// Optional. Populate only with data confirmed from the production page or GBP listing.
// Do not infer or fabricate parking/accessibility claims.

export interface VisitLogistics {
  /** e.g. "Free on-site parking" — only if stated on production page */
  parking?: string;
  /** e.g. "Wheelchair accessible facility" — only if stated on production page */
  accessibility?: string;
  /** e.g. "Located off N Franklin Turnpike" — only if stated on production page */
  landmarks?: string;
}

// ─── Community Links ──────────────────────────────────────────────────────────
// Optional. Verified URLs only — confirm each link is active before populating.

export interface CommunityLinks {
  /** Verified Facebook group URL for NJ autism community */
  facebookGroup?: string;
  /** Verified events page URL */
  eventsUrl?: string;
}

// ─── Root LocationData ────────────────────────────────────────────────────────

export interface LocationData {
  // ── Identity ──────────────────────────────────────────────────────────────
  /** URL slug, e.g. "piscataway" — used in route path /locations/nj/{slug}/ */
  slug: string;
  /** Display name, e.g. "Piscataway, NJ" */
  displayName: string;
  /** Full entity name for schema, e.g. "Bierman Autism Centers — Piscataway" */
  entityName: string;

  /**
   * If true, renders a "Coming Soon" badge and adjusts CTA copy.
   * Flip to false when the location opens.
   */
  comingSoon?: boolean;
  /** Label shown in the Coming Soon badge, e.g. "Coming Summer 2026" */
  comingSoonLabel?: string;

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: LocationAddress;
  phone: string;
  geo: LocationGeo;

  // ── URLs ──────────────────────────────────────────────────────────────────
  /** Bierman intake form URL with location param */
  intakeUrl: string;
  /** Google Maps place URL for GBP card */
  gbpUrl: string;
  /** Google Maps embed URL for directions section */
  mapEmbedUrl: string;

  // ── Hours ─────────────────────────────────────────────────────────────────
  /** Human-readable hours, e.g. "Monday–Friday, 8:00 AM – 6:00 PM" */
  hoursDisplay: string;
  /** Schema-safe openingHours string, e.g. "Mo-Fr 08:00-18:00" */
  openingHours: string;

  // ── Video ─────────────────────────────────────────────────────────────────
  /** YouTube video ID — used for embed and VideoObject schema */
  youtubeId: string;
  /** Human-readable video title for VideoObject schema */
  videoTitle: string;
  /** Video description for VideoObject schema */
  videoDescription: string;

  // ── Content ───────────────────────────────────────────────────────────────
  /** Hero section intro paragraph */
  heroDescription: string;
  /** Insurance section body text (2 sentences max) */
  insuranceText: string;

  // ── Data Arrays ───────────────────────────────────────────────────────────
  reviews: LocationReview[];
  faqs: LocationFaq[];
  nearby: NearbyLocation[];
  clinicalLeadership: ClinicalLeader[];

  // ── Assets ────────────────────────────────────────────────────────────────
  assets: LocationAssets;

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: LocationSchemaMetadata;

  // ── Verified Local Trust Fields (Phase 2 — not yet rendered) ─────────────
  // These fields are typed and available for Phase 3 visible modules.
  // Populate ONLY with data confirmed from production pages or GBP listings.
  // Leave undefined if data is unverified — do not use empty strings as placeholders.

  /**
   * Verified service area towns/cities from production page "Counties Served" section.
   * Used for display in Phase 3 Service Area module.
   * Source: biermanautism.com/location/{slug}/ — "Counties Served" section.
   */
  serviceArea?: string[];

  /**
   * Verified logistics from production page "Why Choose" section.
   * Do not add parking/accessibility unless explicitly stated on the production page.
   */
  visitLogistics?: VisitLogistics;

  /**
   * School relationship language — use only "works with" or "collaborates with" phrasing.
   * Do not claim official partnerships unless verified in writing.
   * Source: production page "Why Choose" section only.
   */
  schoolRelationships?: string;

  /**
   * Verified community links — confirm URLs are active before populating.
   */
  communityLinks?: CommunityLinks;
}
