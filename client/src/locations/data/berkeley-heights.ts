/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: Berkeley Heights, NJ
 *
 * Source of truth for all Berkeley Heights-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Confirmed from Bierman website (May 2026)
 * Address: 550 Springfield Ave., Berkeley Heights, NJ 07922
 * Phone: (908) 493-5270 — Final Public Phone per Launch Readiness Workbook SOT
 * County: Union County (primary)
 */

import type { LocationData } from "../types";

export const berkeleyHeightsData: LocationData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  slug: "berkeley-heights",
  displayName: "Berkeley Heights, NJ",
  entityName: "Bierman Autism Centers — Berkeley Heights",

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: {
    street: "550 Springfield Ave.",
    city: "Berkeley Heights",
    state: "NJ",
    zip: "07922",
    county: "Union County",
  },
  phone: "(847) 232-4997",
  geo: {
    lat: 40.6801,
    lng: -74.4354,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=berkeley-heights-nj&utm_source=local-hub&utm_medium=referral&utm_campaign=nj-pilot-berkeley-heights",
  gbpUrl: "https://www.google.com/search?q=Bierman+Autism+Centers+-+Berkeley+Heights&stick=H4sIAAAAAAAA_-NgU1I1qLCwTDZOSjI0NrOwNEw2S0qxMqgwTTRJMkyySDE0tUg2tUxNW8Sq6ZSZWpSbmKfgWFqSWZyr4JyaV5JaVKygq-CUWpSdmpNaqeCRmpmeUVIMAPSdhyJVAAAA&hl=en&mat=CULpyazErjluElYBa0lj_x3gPyjyQyfkBXbYunUEaFG80ssRpGBmZQOjBgk6Sqn09hUkB7UDYribTLfC7YIocZtLXoHgiD-E1m93waPSDkymRA5sQ2Cr2UmXV3xOuNXlsg&authuser=0&safe=active&ssui=on",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.605545872972!2d-74.44618902383776!3d40.68265943941117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3bb136891c6bd%3A0x5a4b1b8d158c59ef!2sBierman%20Autism%20Centers%20-%20Berkeley%20Heights!5e0!3m2!1sen!2sus!4v1784901117142!5m2!1sen!2sus",
  googlePlaceId: "0x89c3bb136891c6bd:0x5a4b1b8d158c59ef",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday–Friday, 8:30 AM – 4:30 PM",
  openingHours: "Mo-Fr 08:30-16:30",

  // ── Video ─────────────────────────────────────────────────────────────────
  youtubeId: "QFufx0pye4U",
  videoTitle: "Inside Our Berkeley Heights, NJ Autism Center (A Safe & Fun Tour for Parents)",
  videoDescription:
    "A parent-facing tour of the Bierman Autism Centers clinic in Berkeley Heights, New Jersey. See the therapy spaces, meet the team, and learn about ABA therapy services.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Progress should be something you can see. Our Berkeley Heights team measures your child's growth every day and adjusts quickly, so small wins build into real milestones like communication, independence, and school readiness.",
  insuranceText:
    "Bierman Berkeley Heights works with a variety of insurance providers, including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact our Intake Team to verify your coverage before your first visit.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  reviews: [
    {
      slug: "bierman-parent-bh-1",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "I can't thank the Bierman team enough. Our child was there for 4 years, beginning at age 20 months. We didn't know what ABA was at all prior to starting. Now he is thriving in public school, chattering away about his favorite dinosaurs.",
      initials: "BP",
      avatarColor: "#004C97",
    },
    {
      slug: "bierman-parent-bh-2",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "Bierman truly saved my life at a time when I could not manage my child's behaviors and had no hope that our lives would get better. My child was able to build her tolerance and patience, coping, and calming strategies.",
      initials: "BP",
      avatarColor: "#EF4E72",
    },
    {
      slug: "bierman-parent-bh-3",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "This place saved my son's and my family's lives. They have extremely high-quality care, communication, problem-solving, support, environment, and staff. Everything and every experience we had with Bierman was top-notch.",
      initials: "BP",
      avatarColor: "#003B71",
    },
    {
      slug: "bierman-parent-bh-4",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "Great facility and caring and supportive team. My son has been attending full-time for over five years now.",
      initials: "BP",
      avatarColor: "#05C3DE",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Does Bierman Autism Centers in Berkeley Heights accept insurance?",
      a: "Yes. Bierman Berkeley Heights works with a variety of insurance providers, including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. <a href='#request-services'>Contact us</a> to verify your specific coverage.",
    },
    {
      q: "What age groups does the Berkeley Heights center serve?",
      a: "The Berkeley Heights center serves children from early intervention age through adolescence. Services are individualized based on each child's needs and developmental stage.",
    },
    {
      q: "How do I get started with services at the Berkeley Heights location?",
      a: "The first step is <a href='#request-services'>completing our intake request</a>. A member of our team will contact you to discuss your child's needs, verify insurance, and schedule an initial consultation.",
    },
    {
      q: "Where is the Bierman Autism Centers Berkeley Heights clinic located?",
      a: "The Berkeley Heights clinic is located at <a href='https://maps.app.goo.gl/RrzHDfH2aKM3QNPu8' target='_blank' rel='noopener noreferrer'>550 Springfield Ave., Berkeley Heights, NJ 07922</a>, serving families in Union County and surrounding areas.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child's goals and delivered by trained therapists.",
    },
    {
      q: "Is ABA therapy available near Berkeley Heights, NJ?",
      a: "Yes. Bierman Autism Centers operates a clinic in Berkeley Heights, NJ at <a href='https://maps.app.goo.gl/RrzHDfH2aKM3QNPu8' target='_blank' rel='noopener noreferrer'>550 Springfield Ave.</a>, providing ABA therapy to families in Union County, Somerset County, and surrounding communities including Summit, New Providence, and Westfield.",
    },
    {
      q: "Does Bierman Berkeley Heights offer speech therapy for children with autism?",
      a: "Yes. Speech-language therapy is available at the Berkeley Heights center, delivered by licensed speech-language pathologists as part of a coordinated care plan. Service availability may vary. <a href='#request-services'>Contact our Intake Team</a> to confirm availability at your preferred center.",
    },
    {
      q: "Does Bierman Berkeley Heights offer occupational therapy?",
      a: "Yes. Occupational therapy services are available at the Berkeley Heights location, focusing on sensory integration, fine motor skills, and daily living activities. Service availability may vary. <a href='#request-services'>Contact our Intake Team</a> to confirm availability at your preferred center.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Cranford, NJ", url: "/locations/nj/cranford/" },
    { name: "Eatontown, NJ", url: "/locations/nj/eatontown/" },
    { name: "Moorestown, NJ", url: "/locations/nj/moorestown/" },
    { name: "Parsippany, NJ", url: "/locations/nj/parsippany/" },
    { name: "Piscataway, NJ", url: "/locations/nj/piscataway/" },
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
      role: "Director of Clinical Excellence · New Jersey",
      headshot: "/manus-storage/bierman-team-victoria-verdun_4dbdee42.webp",
      tags: ["Clinical Excellence", "BCBA Supervision", "Caregiver Training", "ABA Therapy"],
    },
    {
      name: "Hillary Genovese",
      credentials: "M.A., BCBA",
      role: "Director of Services · New Jersey",
      headshot: "/manus-storage/bierman-team-hillary-genovese_19abd385.webp",
      tags: ["Service Delivery", "BCBA Supervision", "ABA Therapy", "New Jersey"],
    },
  ],

  // ── Assets ────────────────────────────────────────────────────────────────
  assets: {
    facility: "/manus-storage/bierman-autism-new-jersey-ramsey-facility-main_296feafd.webp",
    facilityAlt: "Bierman Autism Centers Berkeley Heights, NJ — clinic interior",
    heroImage: "/manus-storage/nj_city_hero_static_light_2abb0770.png",
    ogImage: "/manus-storage/bierman-autism-centers-aba-therapy-berkeley-heights-nj-og_56cfcce2.jpg",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
    facilityGallery: [
      "/manus-storage/bh_1_05954d33.jpg",
      "/manus-storage/bh_2_3167a99c.jpg",
      "/manus-storage/bh_3_2091e7f8.jpg",
    ],
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://local.biermanautism.com/locations/nj/berkeley-heights/",
    baseId: "https://local.biermanautism.com/locations/nj/berkeley-heights/",
    pageTitle: "ABA Therapy Near Me | Berkeley Heights, NJ | Bierman Centers",
    pageDescription:
      "BCBA-supervised ABA therapy near Berkeley Heights, NJ. Bierman Autism Centers serves Union County families with evidence-based autism care. Insurance accepted.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    // areaServed: Verified from biermanautism.com/location/berkeley-heights-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Union County, NJ", sameAs: "https://en.wikipedia.org/wiki/Union_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Somerset County, NJ", sameAs: "https://en.wikipedia.org/wiki/Somerset_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Morris County, NJ", sameAs: "https://en.wikipedia.org/wiki/Morris_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Essex County, NJ", sameAs: "https://en.wikipedia.org/wiki/Essex_County,_New_Jersey" },
      { type: "City", name: "Berkeley Heights, NJ", sameAs: "https://en.wikipedia.org/wiki/Berkeley_Heights,_New_Jersey" },
      { type: "City", name: "Summit, NJ" },
      { type: "City", name: "New Providence, NJ" },
      { type: "City", name: "Mountainside, NJ" },
      { type: "City", name: "Scotch Plains, NJ" },
      { type: "City", name: "Fanwood, NJ" },
      { type: "City", name: "Westfield, NJ" },
      { type: "City", name: "Watchung, NJ" },
      { type: "City", name: "Warren, NJ" },
      { type: "City", name: "Bridgewater, NJ" },
      { type: "City", name: "Bound Brook, NJ" },
      { type: "City", name: "Somerville, NJ" },
      { type: "City", name: "Florham Park, NJ" },
      { type: "City", name: "Morris Plains, NJ" },
      { type: "City", name: "Morristown, NJ" },
      { type: "City", name: "Millburn, NJ" },
      { type: "City", name: "Maplewood, NJ" },
      { type: "City", name: "South Orange, NJ" },
      { type: "City", name: "West Orange, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/berkeley-heights-nj/ (May 2026)

  serviceArea: [
    "Berkeley Heights", "Summit", "New Providence", "Mountainside",
    "Scotch Plains", "Fanwood", "Westfield",
    "Watchung", "Warren", "Bridgewater", "Bound Brook", "Somerville",
    "Florham Park", "Morris Plains", "Morristown",
    "Millburn", "Maplewood", "South Orange", "West Orange",
  ],

  // visitLogistics: Verbatim from biermanautism.com/location/berkeley-heights-nj/ — "Accessible Location" bullet (May 2026)
  visitLogistics: {
    parking: "Free parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Near major landmarks",
  },

  // schoolRelationships: Verbatim from biermanautism.com/location/berkeley-heights-nj/ — "Why Choose" section (May 2026)
  schoolRelationships:
    "Working relationships with Berkeley Heights Public Schools and area districts",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};
