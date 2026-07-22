/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: Princeton, NJ
 *
 * Source of truth for all Princeton-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Confirmed from GBP listing (May 2026)
 * Address: 746 Alexander Rd, Princeton, NJ 08540
 * Phone: (267) 508-7941
 * Reviews: 2 real public GBP reviews with text, sourced May 2026
 */

import type { LocationData } from "../types";

export const princetonData: LocationData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  slug: "princeton",
  displayName: "Princeton, NJ",
  entityName: "Bierman Autism Centers — Princeton",

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: {
    street: "746 Alexander Rd",
    city: "Princeton",
    state: "NJ",
    zip: "08540",
    county: "Mercer County",
  },
  phone: "(267) 508-7941",
  geo: {
    lat: 40.3419,
    lng: -74.6630,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=princeton-nj&utm_source=local-hub&utm_medium=referral&utm_campaign=nj-pilot-princeton",
  gbpUrl: "https://maps.app.goo.gl/AoANRxYghyy2sdJC8",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.0!2d-74.6630!3d40.3419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s746+Alexander+Rd%2C+Princeton%2C+NJ+08540!5e0!3m2!1sen!2sus!4v1620000000004",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday–Friday, 8:30 AM – 4:30 PM",
  openingHours: "Mo-Fr 08:30-16:30",

  // ── Video ─────────────────────────────────────────────────────────────────
  youtubeId: "QFufx0pye4U",
  videoTitle: "Inside Our Princeton, NJ Autism Center (A Safe & Fun Tour for Parents)",
  videoDescription:
    "A parent-facing tour of the Bierman Autism Centers clinic in Princeton, New Jersey. See the therapy spaces, meet the team, and learn about ABA therapy services.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Bierman Autism Centers in Princeton provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Mercer County and surrounding New Jersey communities.",
  insuranceText:
    "Bierman Princeton works with a variety of insurance providers. Contact our Intake Team to verify your coverage before your first visit. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  reviews: [
    {
      slug: "paradise",
      name: "Bierman Parent",
      meta: "Local Guide · 147 reviews · 210 photos",
      date: "6 months ago",
      stars: 5,
      text: "This place is everything autism! Someone told us about it — we have an autistic grandson and nephew. It's not only a school; Bierman also finds different ways to involve the community through various events, whether it be a holiday or something extra for enjoyment. Thank you Bierman Team!",
      initials: "BP",
      avatarColor: "#7c3aed",
    },
    {
      slug: "klassydolly",
      name: "Bierman Parent",
      meta: "11 reviews · 2 photos",
      date: "1 year ago",
      stars: 5,
      text: "My babies had so much fun at the Bierman Trunk O Treat! All the teachers got dressed up and handed out candies to all the kids! It was very sweet!",
      initials: "BP",
      avatarColor: "#ea580c",
    },
    {
      slug: "bierman-parent-princeton-1",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "I can't thank the Bierman team enough. Our child was there for 4 years, beginning at age 20 months. We didn't know what ABA was at all prior to starting. Now he is thriving in public school, chattering away about his favorite dinosaurs.",
      initials: "BP",
      avatarColor: "#2563eb",
    },
    {
      slug: "bierman-parent-princeton-2",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "This place saved my son's and my family's lives. They have extremely high-quality care, communication, problem-solving, support, environment, and staff. Everything and every experience we had with Bierman was top-notch.",
      initials: "BP",
      avatarColor: "#16a34a",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Does Bierman Autism Centers in Princeton accept insurance?",
      a: "Yes. Bierman Princeton works with a variety of insurance providers, including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact us to verify your specific coverage.",
    },
    {
      q: "What age groups does the Princeton center serve?",
      a: "The Princeton center serves children from early intervention age through adolescence. Services are individualized based on each child's needs and developmental stage.",
    },
    {
      q: "How do I get started with services at the Princeton location?",
      a: "The first step is completing our intake request. A member of our team will contact you to discuss your child's needs, verify insurance, and schedule an initial consultation.",
    },
    {
      q: "Where is the Bierman Autism Centers Princeton clinic located?",
      a: "The Princeton clinic is located at 746 Alexander Rd, Princeton, NJ 08540, serving families in Mercer County and surrounding areas.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child's goals and delivered by trained therapists.",
    },
    {
      q: "Is ABA therapy available near Princeton, NJ?",
      a: "Yes. Bierman Autism Centers operates a clinic in Princeton, NJ at 746 Alexander Rd, providing ABA therapy to families in Mercer County, Somerset County, and surrounding communities including Trenton, Hamilton, and Lawrence Township.",
    },
    {
      q: "Does Bierman Princeton offer speech therapy for children with autism?",
      a: "Yes. Speech-language therapy is available at the Princeton center, delivered by licensed speech-language pathologists as part of a coordinated care plan. Service availability may vary. Contact our Intake Team to confirm availability at your preferred center.",
    },
    {
      q: "Does Bierman Princeton offer occupational therapy?",
      a: "Yes. Occupational therapy services are available at the Princeton location, focusing on sensory integration, fine motor skills, and daily living activities. Service availability may vary. Contact our Intake Team to confirm availability at your preferred center.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Piscataway, NJ", url: "/locations/nj/piscataway/" },
    { name: "Cranford, NJ", url: "/locations/nj/cranford/" },
    { name: "Eatontown, NJ", url: "/locations/nj/eatontown/" },
    { name: "Berkeley Heights, NJ", url: "/locations/nj/berkeley-heights/" },
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
    facilityAlt: "Bierman Autism Centers Princeton, NJ — clinic interior",
    heroImage: "/manus-storage/nj_city_hero_static_light_2abb0770.png",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
    facilityYoutubeId: "QFufx0pye4U",
    ogImage: "/manus-storage/bierman-autism-centers-aba-therapy-princeton-nj-og_eceea8ab.jpg",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://local.biermanautism.com/locations/nj/princeton/",
    baseId: "https://local.biermanautism.com/locations/nj/princeton/",
    pageTitle: "ABA Therapy Near Me | Princeton, NJ | Bierman Autism Centers",
    pageDescription:
      "BCBA-supervised ABA therapy near Princeton, NJ. Bierman Autism Centers serves Mercer County children with evidence-based autism care. Insurance accepted.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    facilityVideoUploadDate: "2024-02-26T00:00:00+00:00",
    facilityVideoDuration: "PT2M19S",
    // areaServed: Verified from biermanautism.com/location/princeton-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Mercer County, NJ", sameAs: "https://en.wikipedia.org/wiki/Mercer_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Middlesex County, NJ", sameAs: "https://en.wikipedia.org/wiki/Middlesex_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Somerset County, NJ", sameAs: "https://en.wikipedia.org/wiki/Somerset_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Hunterdon County, NJ", sameAs: "https://en.wikipedia.org/wiki/Hunterdon_County,_New_Jersey" },
      { type: "City", name: "Princeton, NJ", sameAs: "https://en.wikipedia.org/wiki/Princeton,_New_Jersey" },
      { type: "City", name: "West Windsor, NJ" },
      { type: "City", name: "Plainsboro, NJ" },
      { type: "City", name: "East Windsor, NJ" },
      { type: "City", name: "Hamilton, NJ" },
      { type: "City", name: "Trenton, NJ" },
      { type: "City", name: "Lawrence, NJ" },
      { type: "City", name: "Hopewell, NJ" },
      { type: "City", name: "South Brunswick, NJ" },
      { type: "City", name: "North Brunswick, NJ" },
      { type: "City", name: "Franklin, NJ" },
      { type: "City", name: "New Brunswick, NJ" },
      { type: "City", name: "Edison, NJ" },
      { type: "City", name: "Montgomery, NJ" },
      { type: "City", name: "Hillsborough, NJ" },
      { type: "City", name: "Manville, NJ" },
      { type: "City", name: "Somerville, NJ" },
      { type: "City", name: "Bridgewater, NJ" },
      { type: "City", name: "Pennington, NJ" },
      { type: "City", name: "Lambertville, NJ" },
      { type: "City", name: "Flemington, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/princeton-nj/ (May 2026)

  serviceArea: [
    "Princeton", "West Windsor", "Plainsboro", "East Windsor", "Hamilton",
    "Trenton", "Lawrence", "Hopewell",
    "South Brunswick", "North Brunswick", "Franklin", "New Brunswick", "Edison",
    "Montgomery", "Hillsborough", "Manville", "Somerville", "Bridgewater",
    "Pennington", "Lambertville", "Flemington",
  ],

  // visitLogistics: Verbatim from biermanautism.com/location/princeton-nj/ — "Accessible Location" bullet (May 2026)
  visitLogistics: {
    parking: "Free parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Near major landmarks",
  },

  // schoolRelationships: Verbatim from biermanautism.com/location/princeton-nj/ — "Why Choose" section (May 2026)
  schoolRelationships:
    "Working relationships with Princeton Public Schools and area districts",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};
