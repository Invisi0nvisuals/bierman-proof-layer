/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: Eatontown, NJ
 *
 * Source of truth for all Eatontown-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Confirmed from Bierman website (May 2026)
 * Address: 40 Christopher Way, Suite 103, Eatontown, NJ 07724
 * Phone: (732) 639-4723
 * County: Monmouth County (primary)
 */

import type { LocationData } from "../types";

export const eatontownData: LocationData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  slug: "eatontown",
  displayName: "Eatontown, NJ",
  entityName: "Bierman Autism Centers — Eatontown",

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: {
    street: "40 Christopher Way, Suite 103",
    city: "Eatontown",
    state: "NJ",
    zip: "07724",
    county: "Monmouth County",
  },
  phone: "(732) 639-4723",
  geo: {
    lat: 40.2926,
    lng: -74.0579,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=eatontown-nj&utm_source=local-hub&utm_medium=referral&utm_campaign=nj-pilot-eatontown",
  gbpUrl: "https://maps.app.goo.gl/eatontown-bierman",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.0!2d-74.0579!3d40.2926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s40+Christopher+Way%2C+Eatontown%2C+NJ+07724!5e0!3m2!1sen!2sus!4v1620000000006",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday–Friday, 8:30 AM – 6:00 PM",
  openingHours: "Mo-Fr 08:30-18:00",

  // ── Video ─────────────────────────────────────────────────────────────────
  youtubeId: "QFufx0pye4U",
  videoTitle: "Inside Our Eatontown, NJ Autism Center (A Safe & Fun Tour for Parents)",
  videoDescription:
    "A parent-facing tour of the Bierman Autism Centers clinic in Eatontown, New Jersey. See the therapy spaces, meet the team, and learn about ABA therapy services.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Bierman Autism Centers in Eatontown provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Monmouth County and surrounding New Jersey communities.",
  insuranceText:
    "Bierman Eatontown accepts most major insurance plans. We work with families to verify coverage and navigate the insurance process. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  reviews: [
    {
      slug: "bierman-parent-eatontown-1",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "I can't thank the Bierman team enough. Our child was there for 4 years, beginning at age 20 months. We didn't know what ABA was at all prior to starting. Now he is thriving in public school, chattering away about his favorite dinosaurs.",
      initials: "BP",
      avatarColor: "#2563eb",
    },
    {
      slug: "bierman-parent-eatontown-2",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "Bierman truly saved my life at a time when I could not manage my child's behaviors and had no hope that our lives would get better. My child was able to build her tolerance and patience, coping, and calming strategies.",
      initials: "BP",
      avatarColor: "#ea580c",
    },
    {
      slug: "bierman-parent-eatontown-3",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "This place saved my son's and my family's lives. They have extremely high-quality care, communication, problem-solving, support, environment, and staff. Everything and every experience we had with Bierman was top-notch.",
      initials: "BP",
      avatarColor: "#7c3aed",
    },
    {
      slug: "bierman-parent-eatontown-4",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "During a time when I didn't have much direction upon learning about my son's diagnosis, Bierman ABA has helped my family every step of the way. If you are seeking these services for your family, stop looking. This is your answer.",
      initials: "BP",
      avatarColor: "#16a34a",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Does Bierman Autism Centers in Eatontown accept insurance?",
      a: "Yes. Bierman Eatontown accepts most major insurance plans including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact us to verify your specific coverage.",
    },
    {
      q: "What age groups does the Eatontown center serve?",
      a: "The Eatontown center serves children from early intervention age through adolescence. Services are individualized based on each child's needs and developmental stage.",
    },
    {
      q: "How do I get started with services at the Eatontown location?",
      a: "The first step is completing our intake request. A member of our team will contact you to discuss your child's needs, verify insurance, and schedule an initial consultation.",
    },
    {
      q: "Where is the Bierman Autism Centers Eatontown clinic located?",
      a: "The Eatontown clinic is located at 40 Christopher Way, Suite 103, Eatontown, NJ 07724, serving families in Monmouth County and surrounding areas.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child's goals and delivered by trained therapists.",
    },
    {
      q: "Is ABA therapy available near Eatontown, NJ?",
      a: "Yes. Bierman Autism Centers operates a clinic in Eatontown, NJ at 40 Christopher Way, Suite 103, providing ABA therapy to families in Monmouth County, Ocean County, and surrounding communities including Red Bank, Long Branch, and Tinton Falls.",
    },
    {
      q: "Does Bierman Eatontown offer speech therapy for children with autism?",
      a: "Yes. Speech-language therapy is available at the Eatontown center, delivered by licensed speech-language pathologists as part of a coordinated care plan.",
    },
    {
      q: "Does Bierman Eatontown offer occupational therapy?",
      a: "Yes. Occupational therapy services are available at the Eatontown location, focusing on sensory integration, fine motor skills, and daily living activities.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Princeton, NJ", url: "/locations/nj/princeton/" },
    { name: "Piscataway, NJ", url: "/locations/nj/piscataway/" },
    { name: "Berkeley Heights, NJ", url: "/locations/nj/berkeley-heights/" },
    { name: "Cranford, NJ", url: "/locations/nj/cranford/" },
    { name: "Moorestown, NJ", url: "/locations/nj/moorestown/" },
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
    facilityAlt: "Bierman Autism Centers Eatontown, NJ — clinic interior",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://bierman-proof-layer.manus.space/locations/nj/eatontown/",
    baseId: "https://bierman-proof-layer.manus.space/locations/nj/eatontown/",
    pageTitle: "ABA Therapy in Eatontown, NJ | Bierman Autism Centers",
    pageDescription:
      "Bierman Autism Centers in Eatontown, NJ provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Monmouth County and surrounding New Jersey communities.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    // areaServed: Verified from biermanautism.com/location/eatontown-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Monmouth County, NJ", sameAs: "https://en.wikipedia.org/wiki/Monmouth_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Middlesex County, NJ", sameAs: "https://en.wikipedia.org/wiki/Middlesex_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Ocean County, NJ", sameAs: "https://en.wikipedia.org/wiki/Ocean_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Mercer County, NJ", sameAs: "https://en.wikipedia.org/wiki/Mercer_County,_New_Jersey" },
      { type: "City", name: "Eatontown, NJ" },
      { type: "City", name: "Red Bank, NJ" },
      { type: "City", name: "Shrewsbury, NJ" },
      { type: "City", name: "Tinton Falls, NJ" },
      { type: "City", name: "Long Branch, NJ" },
      { type: "City", name: "Asbury Park, NJ" },
      { type: "City", name: "Neptune, NJ" },
      { type: "City", name: "Old Bridge, NJ" },
      { type: "City", name: "Sayreville, NJ" },
      { type: "City", name: "South Amboy, NJ" },
      { type: "City", name: "Perth Amboy, NJ" },
      { type: "City", name: "Edison, NJ" },
      { type: "City", name: "Lakewood, NJ" },
      { type: "City", name: "Toms River, NJ" },
      { type: "City", name: "Brick, NJ" },
      { type: "City", name: "Point Pleasant, NJ" },
      { type: "City", name: "Manasquan, NJ" },
      { type: "City", name: "Hamilton, NJ" },
      { type: "City", name: "Trenton, NJ" },
      { type: "City", name: "Princeton, NJ" },
      { type: "City", name: "Lawrence, NJ" },
      { type: "City", name: "Hopewell, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/eatontown-nj/ (May 2026)

  serviceArea: [
    "Eatontown", "Red Bank", "Shrewsbury", "Tinton Falls", "Long Branch",
    "Asbury Park", "Neptune",
    "Old Bridge", "Sayreville", "South Amboy", "Perth Amboy", "Edison",
    "Lakewood", "Toms River", "Brick", "Point Pleasant", "Manasquan",
    "Hamilton", "Trenton", "Princeton", "Lawrence", "Hopewell",
  ],

  // visitLogistics: Verbatim from biermanautism.com/location/eatontown-nj/ — "Accessible Location" bullet (May 2026)
  visitLogistics: {
    parking: "Free parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Near major landmarks",
  },

  // schoolRelationships: Verbatim from biermanautism.com/location/eatontown-nj/ — "Why Choose" section (May 2026)
  schoolRelationships:
    "Working relationships with Eatontown Public Schools and area districts",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};
