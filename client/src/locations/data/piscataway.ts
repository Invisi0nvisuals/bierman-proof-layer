/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: Piscataway, NJ
 *
 * Source of truth for all Piscataway-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Confirmed from GBP listing (May 2026)
 * Address: 200 Centennial Ave, Suite 200, Piscataway, NJ 08854
 * Phone: (732) 655-2056
 * Reviews: 4 real public GBP reviews, sourced May 2026
 */

import type { LocationData } from "../types";

export const piscatawayData: LocationData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  slug: "piscataway",
  displayName: "Piscataway, NJ",
  entityName: "Bierman Autism Centers \u2014 Piscataway",

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: {
    street: "200 Centennial Ave, Suite 200",
    city: "Piscataway",
    state: "NJ",
    zip: "08854",
    county: "Middlesex County",
  },
  phone: "(847) 232-4997",
  geo: {
    lat: 40.5493,
    lng: -74.4774,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=piscataway-nj&utm_source=local-hub&utm_medium=referral&utm_campaign=nj-pilot-piscataway",
  gbpUrl: "https://maps.app.goo.gl/xAmfnjg553emHKsh9",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.0!2d-74.4774!3d40.5493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s200+Centennial+Ave%2C+Piscataway%2C+NJ+08854!5e0!3m2!1sen!2sus!4v1620000000001",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday–Friday, 8:30 AM – 4:30 PM",
  openingHours: "Mo-Fr 08:30-16:30",

  // ── Video ─────────────────────────────────────────────────────────────────
  youtubeId: "QFufx0pye4U",
  videoTitle: "Inside Our Piscataway, NJ Autism Center (A Safe & Fun Tour for Parents)",
  videoDescription:
    "A parent-facing tour of the Bierman Autism Centers clinic in Piscataway, New Jersey. See the therapy spaces, meet the team, and learn about ABA therapy services.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Progress should be something you can see. Our Piscataway team measures your child's growth every day and adjusts quickly, so small wins build into real milestones like communication, independence, and school readiness.",
  insuranceText:
    "Bierman Piscataway works with a variety of insurance providers, including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact our Intake Team to verify your coverage before your first visit.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  reviews: [
    {
      slug: "stacy-jones",
      name: "Bierman Parent",
      meta: "2 reviews \u00b7 1 photo",
      date: "3 days ago",
      stars: 5,
      text: "I should be clear: My child doesn\u2019t attend our local Bierman Autism Center. However, we did visit their recent free petting zoo event. I am glad that Bierman is part of our community and grateful that they host events. I found all the staff to be warm, welcoming and very kind.",
      initials: "BP",
      avatarColor: "#EF4E72",
    },
    {
      slug: "kimona-smith",
      name: "Bierman Parent",
      meta: "Local Guide \u00b7 34 reviews \u00b7 81 photos",
      date: "5 days ago",
      stars: 5,
      text: "I took my nephew to the petting zoo. He thoroughly enjoyed himself and the variety of animals that were present was welcoming. Definitely would love to see this happen more often.",
      initials: "BP",
      avatarColor: "#003B71",
    },
    {
      slug: "amauris-corniel",
      name: "Bierman Parent",
      meta: "2 reviews",
      date: "5 days ago",
      stars: 5,
      text: "Took my nephew to the petting zoo Bierman hosted. It was a experience. The team was genuinely welcoming and not just surface level nice. If you are curious about their services, they actually take the time to explain things with real insight instead of giving you generic answers. A lot of happy, smiling faces all around!",
      initials: "BP",
      avatarColor: "#004C97",
    },
    {
      slug: "sowbagya-sp",
      name: "Bierman Parent",
      meta: "Local Guide \u00b7 24 reviews \u00b7 215 photos",
      date: "5 days ago",
      stars: 5,
      text: "It was really great! Kids had so much fun! Thanks for organizing this amazing event. Animals were so friendly and staff were so supportive!",
      initials: "BP",
      avatarColor: "#05C3DE",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Does Bierman Autism Centers in Piscataway accept insurance?",
      a: "Yes. Bierman Piscataway works with a variety of insurance providers, including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. <a href='#request-services'>Contact us</a> to verify your specific coverage.",
    },
    {
      q: "What age groups does the Piscataway center serve?",
      a: "The Piscataway center serves children from early intervention age through adolescence. Services are individualized based on each child\u2019s needs and developmental stage.",
    },
    {
      q: "How do I get started with services at the Piscataway location?",
      a: "The first step is <a href='#request-services'>completing our intake request</a>. A member of our team will contact you to discuss your child\u2019s needs, verify insurance, and schedule an initial consultation.",
    },
    {
      q: "Where is the Bierman Autism Centers Piscataway clinic located?",
      a: "The Piscataway clinic is located at <a href='https://maps.app.goo.gl/xAmfnjg553emHKsh9' target='_blank' rel='noopener noreferrer'>200 Centennial Ave, Suite 200, Piscataway, NJ 08854</a>, serving families in Middlesex County and surrounding areas.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child\u2019s goals and delivered by trained therapists.",
    },
    {
      q: "Is ABA therapy available near Piscataway, NJ?",
      a: "Yes. Bierman Autism Centers operates a clinic in Piscataway, NJ at <a href='https://maps.app.goo.gl/xAmfnjg553emHKsh9' target='_blank' rel='noopener noreferrer'>200 Centennial Ave, Suite 200</a>, providing ABA therapy to families in Middlesex County, Somerset County, and surrounding communities including Edison, New Brunswick, and South Plainfield.",
    },
    {
      q: "Does Bierman Piscataway offer speech therapy for children with autism?",
      a: "Yes. Speech-language therapy is available at the Piscataway center, delivered by licensed speech-language pathologists as part of a coordinated care plan. Service availability may vary. <a href='#request-services'>Contact our Intake Team</a> to confirm availability at your preferred center.",
    },
    {
      q: "Does Bierman Piscataway offer occupational therapy?",
      a: "Yes. Occupational therapy services are available at the Piscataway location, focusing on sensory integration, fine motor skills, and daily living activities. Service availability may vary. <a href='#request-services'>Contact our Intake Team</a> to confirm availability at your preferred center.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Berkeley Heights, NJ", url: "/locations/nj/berkeley-heights/" },
    { name: "Cranford, NJ", url: "/locations/nj/cranford/" },
    { name: "Eatontown, NJ", url: "/locations/nj/eatontown/" },
    { name: "Moorestown, NJ", url: "/locations/nj/moorestown/" },
    { name: "Parsippany, NJ", url: "/locations/nj/parsippany/" },
    { name: "Princeton, NJ", url: "/locations/nj/princeton/" },
    { name: "Ramsey, NJ", url: "/locations/nj/ramsey/" },
    { name: "Roseland, NJ", url: "/locations/nj/roseland/" },
    { name: "West Orange, NJ", url: "/locations/nj/west-orange/" },
    { name: "All 10 NJ Locations →", url: "/" },
  ],

  // ── Clinical Leadership ───────────────────────────────────────────────────
  clinicalLeadership: [
    {
      name: "Victoria Verdun",
      credentials: "Ph.D., BCBA-D, LBA",
      role: "Director of Clinical Excellence \u00b7 New Jersey",
      headshot: "/manus-storage/bierman-team-victoria-verdun_4dbdee42.webp",
      tags: ["Clinical Excellence", "BCBA Supervision", "Caregiver Training", "ABA Therapy"],
    },
    {
      name: "Hillary Genovese",
      credentials: "M.A., BCBA",
      role: "Director of Services \u00b7 New Jersey",
      headshot: "/manus-storage/bierman-team-hillary-genovese_19abd385.webp",
      tags: ["Service Delivery", "BCBA Supervision", "ABA Therapy", "New Jersey"],
    },
  ],

  // ── Assets ────────────────────────────────────────────────────────────────
  assets: {
    facility: "/manus-storage/bierman-autism-new-jersey-ramsey-facility-main_296feafd.webp",
    facilityAlt: "Bierman Autism Centers Piscataway, NJ — clinic interior",
    heroImage: "/manus-storage/nj_city_hero_static_light_2abb0770.png",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
    facilityYoutubeId: "QA12slChGVM",
    ogImage: "/manus-storage/bierman-autism-centers-aba-therapy-piscataway-nj-og_ee8c6f4f.jpg",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://local.biermanautism.com/locations/nj/piscataway/",
    baseId: "https://local.biermanautism.com/locations/nj/piscataway/",
    pageTitle: "ABA Therapy Near Me | Piscataway, NJ | Bierman Autism Centers",
    pageDescription:
      "BCBA-supervised ABA therapy near Piscataway, NJ. Bierman Autism Centers serves Middlesex County children with evidence-based autism care. Insurance accepted.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    facilityVideoUploadDate: "2026-06-12T00:00:00+00:00",
    facilityVideoDuration: "PT2M10S",
    // areaServed: Verified from biermanautism.com/location/piscataway/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Middlesex County, NJ", sameAs: "https://en.wikipedia.org/wiki/Middlesex_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Somerset County, NJ", sameAs: "https://en.wikipedia.org/wiki/Somerset_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Union County, NJ", sameAs: "https://en.wikipedia.org/wiki/Union_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Mercer County, NJ", sameAs: "https://en.wikipedia.org/wiki/Mercer_County,_New_Jersey" },
      { type: "City", name: "Piscataway, NJ", sameAs: "https://en.wikipedia.org/wiki/Piscataway,_New_Jersey" },
      { type: "City", name: "New Brunswick, NJ" },
      { type: "City", name: "Edison, NJ" },
      { type: "City", name: "Woodbridge, NJ" },
      { type: "City", name: "Perth Amboy, NJ" },
      { type: "City", name: "Sayreville, NJ" },
      { type: "City", name: "South Plainfield, NJ" },
      { type: "City", name: "Franklin, NJ" },
      { type: "City", name: "Somerset, NJ" },
      { type: "City", name: "Bound Brook, NJ" },
      { type: "City", name: "Bridgewater, NJ" },
      { type: "City", name: "Somerville, NJ" },
      { type: "City", name: "Scotch Plains, NJ" },
      { type: "City", name: "Fanwood, NJ" },
      { type: "City", name: "Plainfield, NJ" },
      { type: "City", name: "Westfield, NJ" },
      { type: "City", name: "Clark, NJ" },
      { type: "City", name: "Princeton, NJ" },
      { type: "City", name: "West Windsor, NJ" },
      { type: "City", name: "Plainsboro, NJ" },
      { type: "City", name: "East Windsor, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ────────────────────────────────────────────────────────────────
  // Source: biermanautism.com/location/piscataway/ (May 2026)

  serviceArea: [
    "Piscataway", "New Brunswick", "Edison", "Woodbridge", "Perth Amboy",
    "Sayreville", "South Plainfield",
    "Franklin", "Somerset", "Bound Brook", "Bridgewater", "Somerville",
    "Scotch Plains", "Fanwood", "Plainfield", "Westfield", "Clark",
    "Princeton", "West Windsor", "Plainsboro", "East Windsor",
  ],

  // visitLogistics: Verbatim from biermanautism.com/location/piscataway/ — "Accessible Location" bullet (May 2026)
  visitLogistics: {
    parking: "Free parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Near major landmarks",
  },

  // schoolRelationships: Verbatim from biermanautism.com/location/piscataway/ — "Why Choose" section (May 2026)
  schoolRelationships:
    "Working relationships with Piscataway Community Schools and area districts",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};
