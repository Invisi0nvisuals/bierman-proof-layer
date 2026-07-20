/**
 * Bierman Autism Centers — Proof Layer
 * Schema Utility: buildLocationSchema
 *
 * Generates a complete, unique JSON-LD @graph for a single location page.
 * All @id values, URLs, addresses, reviews, and FAQ entities are derived
 * from the LocationData object — no hardcoding, no copy-paste risk.
 *
 * Fixes the duplicate FAQ mainEntity issue:
 *   - Each FAQ question @id is scoped to the location's baseId
 *   - FAQPage @id is unique per location
 *   - No shared @id values across locations
 *
 * Usage:
 *   import { buildLocationSchema } from "@/locations/schema";
 *   import { ramseyData } from "@/locations/data/ramsey";
 *   const schemaJson = buildLocationSchema(ramseyData);
 *   // Inject as: <script type="application/ld+json">{schemaJson}</script>
 *
 * Note: Schema injection is handled in index.html for the proof layer.
 * This utility is the authoritative source — index.html blocks should be
 * replaced with script tags that call this utility in a production build.
 */

import { PILOT_VIDEO } from "./types";
import type { LocationData } from "./types";

// ─── Shared constants ─────────────────────────────────────────────────────────

const ORG_ID = "https://local.biermanautism.com/#organization";
const WEBSITE_ID = "https://local.biermanautism.com/#website";

const STANDARD_KNOWS_ABOUT = [
  "Applied Behavior Analysis",
  "Autism Spectrum Disorder",
  "Speech-Language Therapy",
  "Occupational Therapy",
  "Diagnostic Evaluation for Autism",
  "ABA Therapy for Children",
  "Early Intervention Autism Services",
];

const STANDARD_SERVICES = [
  { name: "ABA Therapy",                       type: "MedicalTherapy" as const,   slug: "aba-therapy" },
  { name: "Speech-Language Therapy",           type: "MedicalTherapy" as const,   slug: "speech-therapy" },
  { name: "Occupational Therapy",              type: "MedicalTherapy" as const,   slug: "occupational-therapy" },
  { name: "Diagnostic Evaluation for Autism",  type: "MedicalProcedure" as const, slug: "diagnostic-evaluation" },
];

// ─── Helper ───────────────────────────────────────────────────────────────────

function calcAggregateRating(data: LocationData) {
  if (data.schema.aggregateRatingOverride) {
    return data.schema.aggregateRatingOverride;
  }
  const count = data.reviews.length;
  const avg =
    count > 0
      ? (data.reviews.reduce((sum, r) => sum + r.stars, 0) / count).toFixed(1)
      : "5.0";
  return { ratingValue: avg, reviewCount: String(count) };
}

// ─── Main builder ─────────────────────────────────────────────────────────────

export function buildLocationSchema(data: LocationData): string {
  const { schema, address, geo, phone, openingHours, assets } = data;
  const base = schema.baseId.replace(/\/$/, ""); // strip trailing slash for @id fragments

  const rating = calcAggregateRating(data);

  const knowsAbout = [
    ...STANDARD_KNOWS_ABOUT,
    ...(schema.additionalKnowsAbout ?? []),
  ];

  // ── WebPage node ────────────────────────────────────────────────────────────
  const webPageNode = {
    "@type": "WebPage",
    "@id": `${base}/#webpage`,
    name: schema.pageTitle,
    url: schema.pageUrl,
    description: schema.pageDescription,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": `${base}/#localbusiness` },
    mainEntity: { "@id": `${base}/#localbusiness` },
    breadcrumb: { "@id": `${base}/#breadcrumb` },
    mentions: [
      { "@type": "MedicalCondition", name: "Autism Spectrum Disorder" },
      { "@type": "MedicalTherapy", name: "Applied Behavior Analysis" },
      { "@type": "MedicalTherapy", name: "ABA Therapy" },
      { "@type": "MedicalTherapy", name: "Speech-Language Therapy" },
      { "@type": "MedicalTherapy", name: "Occupational Therapy" },
      { "@type": "MedicalProcedure", name: "Diagnostic Evaluation for Autism" },
      { "@type": "AdministrativeArea", name: address.county },
      { "@type": "City", name: `${address.city}, ${address.state}` },
    ],
  };

  // ── LocalBusiness / MedicalClinic node ──────────────────────────────────────
  const localBusinessNode = {
    "@type": ["LocalBusiness", "MedicalClinic"],
    "@id": `${base}/#localbusiness`,
    name: data.entityName,
    alternateName: `Bierman Autism Centers ${address.city} ${address.state}`,
    description: schema.pageDescription,
    url: schema.pageUrl,
    telephone: phone,
    image: assets?.facility
      ? `https://local.biermanautism.com${assets.facility}`
      : "https://local.biermanautism.com/manus-storage/bierman-logo-anniversary-20_3f19246b.webp",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    },
    areaServed: schema.areaServed.map((a) => ({
      "@type": a.type,
      name: a.name,
      ...(a.sameAs ? { sameAs: a.sameAs } : {}),
    })),
    medicalSpecialty: "Pediatric",
    knowsAbout,
    knowsLanguage: ["English", "Spanish"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Autism Support Services \u2014 ${address.city}, ${address.state}`,
      itemListElement: STANDARD_SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": s.type,
          "@id": `${base}/#service-${s.slug}`,
          name: s.name,
          url: `${base}#${s.slug}`,
          provider: { "@id": `${base}/#localbusiness` },
        },
      })),
    },
    openingHours,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    hasMap: data.gbpUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.ratingValue,
      reviewCount: rating.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: data.reviews.map((r) => ({
      "@id": `${base}/#review-${r.slug}`,
    })),
    parentOrganization: { "@id": ORG_ID },
  };

  // ── BreadcrumbList node ─────────────────────────────────────────────────────
  const breadcrumbNode = {
    "@type": "BreadcrumbList",
    "@id": `${base}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://local.biermanautism.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://local.biermanautism.com/locations/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: address.state,
        item: `https://local.biermanautism.com/locations/${address.state.toLowerCase()}/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: address.city,
        item: schema.pageUrl,
      },
    ],
  };

  // ── FAQPage node ────────────────────────────────────────────────────────────
  // FIX: Each question @id is scoped to this location's base URL.
  // This prevents duplicate mainEntity @id collisions across location pages.
  const faqNode = {
    "@type": "FAQPage",
    "@id": `${base}/#faqpage`,
    mainEntity: data.faqs.map((faq, idx) => ({
      "@type": "Question",
      "@id": `${base}/#faq-${idx + 1}`,
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  // ── VideoObject node (shared Pilot the Penguin video) ──────────────────────────────────────────────────────────────────
  // @id is page-scoped using #pilot-video to prevent cross-page @id collisions.
  // All data comes from the shared PILOT_VIDEO constant in types.ts.
  const videoNode = {
    "@type": "VideoObject",
    "@id": `${base}/#pilot-video`,
    name: PILOT_VIDEO.title,
    description: PILOT_VIDEO.description,
    embedUrl: PILOT_VIDEO.embedUrl,
    contentUrl: PILOT_VIDEO.watchUrl,
    thumbnailUrl: PILOT_VIDEO.thumbnailUrl,
    uploadDate: PILOT_VIDEO.uploadDate,
    duration: PILOT_VIDEO.duration,
    mainEntityOfPage: { "@id": `${base}/#webpage` },
    publisher: { "@id": ORG_ID },
  };

  // ── Review nodes ────────────────────────────────────────────────────────────
  const reviewNodes = data.reviews.map((r) => ({
    "@type": "Review",
    "@id": `${base}/#review-${r.slug}`,
    itemReviewed: { "@id": `${base}/#localbusiness` },
    author: { "@type": "Person", name: r.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.stars),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: r.text,
    publisher: { "@type": "Organization", name: "Google" },
  }));

  // ── Assemble @graph ─────────────────────────────────────────────────────────
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode,
      localBusinessNode,
      breadcrumbNode,
      faqNode,
      videoNode,
      ...reviewNodes,
    ],
  };

  return JSON.stringify(graph, null, 2);
}

/**
 * Returns the schema as a parsed object (useful for testing/validation).
 */
export function buildLocationSchemaObject(data: LocationData): object {
  return JSON.parse(buildLocationSchema(data));
}
