/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: Berkeley Heights, NJ
 *
 * Source of truth for all Berkeley Heights-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Confirmed from Bierman website (May 2026)
 * Address: 550 Springfield Ave., Berkeley Heights, NJ 07922
 * Phone: (908) 768-2333
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
  phone: "(908) 768-2333",
  geo: {
    lat: 40.6801,
    lng: -74.4354,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=berkeley-heights-nj&utm_source=local-hub&utm_medium=referral&utm_campaign=nj-pilot-berkeley-heights",
  gbpUrl: "https://maps.app.goo.gl/RrzHDfH2aKM3QNPu8",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0!2d-74.4354!3d40.6801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s550+Springfield+Ave%2C+Berkeley+Heights%2C+NJ+07922!5e0!3m2!1sen!2sus!4v1620000000003",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday–Friday, 8:30 AM – 6:00 PM",
  openingHours: "Mo-Fr 08:30-18:00",

  // ── Video ─────────────────────────────────────────────────────────────────
  youtubeId: "QFufx0pye4U",
  videoTitle: "Inside Our Berkeley Heights, NJ Autism Center (A Safe & Fun Tour for Parents)",
  videoDescription:
    "A parent-facing tour of the Bierman Autism Centers clinic in Berkeley Heights, New Jersey. See the therapy spaces, meet the team, and learn about ABA therapy services.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Bierman Autism Centers in Berkeley Heights provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Union County and surrounding New Jersey communities.",
  insuranceText:
    "Bierman Berkeley Heights accepts most major insurance plans. We work with families to verify coverage and navigate the insurance process. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.",

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
      avatarColor: "#2563eb",
    },
    {
      slug: "bierman-parent-bh-2",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "Bierman truly saved my life at a time when I could not manage my child's behaviors and had no hope that our lives would get better. My child was able to build her tolerance and patience, coping, and calming strategies.",
      initials: "BP",
      avatarColor: "#ea580c",
    },
    {
      slug: "bierman-parent-bh-3",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "This place saved my son's and my family's lives. They have extremely high-quality care, communication, problem-solving, support, environment, and staff. Everything and every experience we had with Bierman was top-notch.",
      initials: "BP",
      avatarColor: "#7c3aed",
    },
    {
      slug: "bierman-parent-bh-4",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "Great facility and caring and supportive team. My son has been attending full-time for over five years now.",
      initials: "BP",
      avatarColor: "#16a34a",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Does Bierman Autism Centers in Berkeley Heights accept insurance?",
      a: "Yes. Bierman Berkeley Heights accepts most major insurance plans including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact us to verify your specific coverage.",
    },
    {
      q: "What age groups does the Berkeley Heights center serve?",
      a: "The Berkeley Heights center serves children from early intervention age through adolescence. Services are individualized based on each child's needs and developmental stage.",
    },
    {
      q: "How do I get started with services at the Berkeley Heights location?",
      a: "The first step is completing our intake request. A member of our team will contact you to discuss your child's needs, verify insurance, and schedule an initial consultation.",
    },
    {
      q: "Where is the Bierman Autism Centers Berkeley Heights clinic located?",
      a: "The Berkeley Heights clinic is located at 550 Springfield Ave., Berkeley Heights, NJ 07922, serving families in Union County and surrounding areas.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child's goals and delivered by trained therapists.",
    },
    {
      q: "Is ABA therapy available near Berkeley Heights, NJ?",
      a: "Yes. Bierman Autism Centers operates a clinic in Berkeley Heights, NJ at 550 Springfield Ave., providing ABA therapy to families in Union County, Somerset County, and surrounding communities including Summit, New Providence, and Westfield.",
    },
    {
      q: "Does Bierman Berkeley Heights offer speech therapy for children with autism?",
      a: "Yes. Speech-language therapy is available at the Berkeley Heights center, delivered by licensed speech-language pathologists as part of a coordinated care plan.",
    },
    {
      q: "Does Bierman Berkeley Heights offer occupational therapy?",
      a: "Yes. Occupational therapy services are available at the Berkeley Heights location, focusing on sensory integration, fine motor skills, and daily living activities.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Cranford, NJ", url: "/locations/nj/cranford/" },
    { name: "West Orange, NJ", url: "/locations/nj/west-orange/" },
    { name: "Parsippany, NJ", url: "/locations/nj/parsippany/" },
    { name: "Princeton, NJ", url: "/locations/nj/princeton/" },
    { name: "Roseland, NJ", url: "/locations/nj/roseland/" },
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
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://bierman-proof-layer.manus.space/locations/nj/berkeley-heights/",
    baseId: "https://bierman-proof-layer.manus.space/locations/nj/berkeley-heights/",
    pageTitle: "ABA Therapy in Berkeley Heights, NJ | Bierman Autism Centers",
    pageDescription:
      "Bierman Autism Centers in Berkeley Heights, NJ provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Union County and surrounding New Jersey communities.",
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
