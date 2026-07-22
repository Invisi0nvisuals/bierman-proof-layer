/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: Cranford, NJ
 *
 * Source of truth for all Cranford-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Confirmed from Bierman website (May 2026)
 * Address: 65 Jackson Drive, Suite 302, Cranford, NJ 07016
 * Phone: (609) 798-2428 — Final Public Phone per Launch Readiness Workbook SOT
 * County: Union County (primary)
 */

import type { LocationData } from "../types";

export const cranfordData: LocationData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  slug: "cranford",
  displayName: "Cranford, NJ",
  entityName: "Bierman Autism Centers — Cranford",

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: {
    street: "65 Jackson Drive, Suite 302",
    city: "Cranford",
    state: "NJ",
    zip: "07016",
    county: "Union County",
  },
  phone: "(609) 798-2428",
  geo: {
    lat: 40.6576,
    lng: -74.2982,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=cranford-nj&utm_source=local-hub&utm_medium=referral&utm_campaign=nj-pilot-cranford",
  gbpUrl: "https://maps.app.goo.gl/mBJGYojAXJek27WD6",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.0!2d-74.2982!3d40.6576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s65+Jackson+Drive%2C+Cranford%2C+NJ+07016!5e0!3m2!1sen!2sus!4v1620000000002",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday–Friday, 8:30 AM – 4:30 PM",
  openingHours: "Mo-Fr 08:30-16:30",

  // ── Video ─────────────────────────────────────────────────────────────────
  youtubeId: "QFufx0pye4U",
  videoTitle: "Inside Our Cranford, NJ Autism Center (A Safe & Fun Tour for Parents)",
  videoDescription:
    "A parent-facing tour of the Bierman Autism Centers clinic in Cranford, New Jersey. See the therapy spaces, meet the team, and learn about ABA therapy services.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Bierman Autism Centers in Cranford provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Union County and surrounding New Jersey communities.",
  insuranceText:
    "Bierman Cranford works with a variety of insurance providers. Contact our Intake Team to verify your coverage before your first visit. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  reviews: [
    {
      slug: "bierman-parent-cranford-1",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "I can't thank the Bierman team enough. Our child was there for 4 years, beginning at age 20 months. We didn't know what ABA was at all prior to starting. Now he is thriving in public school, chattering away about his favorite dinosaurs.",
      initials: "BP",
      avatarColor: "#2563eb",
    },
    {
      slug: "bierman-parent-cranford-2",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "Bierman truly saved my life at a time when I could not manage my child's behaviors and had no hope that our lives would get better. My child was able to build her tolerance and patience, coping, and calming strategies.",
      initials: "BP",
      avatarColor: "#ea580c",
    },
    {
      slug: "bierman-parent-cranford-3",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "This place saved my son's and my family's lives. They have extremely high-quality care, communication, problem-solving, support, environment, and staff. Everything and every experience we had with Bierman was top-notch.",
      initials: "BP",
      avatarColor: "#7c3aed",
    },
    {
      slug: "bierman-parent-cranford-4",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "My 10-year-old autistic son has been coming here since the center first opened. This center has a lot of structure, open communication, and everything is well-documented — lots of support for the parents, including parent training. Speech and OT are also offered at the center, which is a plus!",
      initials: "BP",
      avatarColor: "#16a34a",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Does Bierman Autism Centers in Cranford accept insurance?",
      a: "Yes. Bierman Cranford works with a variety of insurance providers, including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact us to verify your specific coverage.",
    },
    {
      q: "What age groups does the Cranford center serve?",
      a: "The Cranford center serves children from early intervention age through adolescence. Services are individualized based on each child's needs and developmental stage.",
    },
    {
      q: "How do I get started with services at the Cranford location?",
      a: "The first step is completing our intake request. A member of our team will contact you to discuss your child's needs, verify insurance, and schedule an initial consultation.",
    },
    {
      q: "Where is the Bierman Autism Centers Cranford clinic located?",
      a: "The Cranford clinic is located at 65 Jackson Drive, Suite 302, Cranford, NJ 07016, serving families in Union County and surrounding areas.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child's goals and delivered by trained therapists.",
    },
    {
      q: "Is ABA therapy available near Cranford, NJ?",
      a: "Yes. Bierman Autism Centers operates a clinic in Cranford, NJ at 65 Jackson Drive, Suite 302, providing ABA therapy to families in Union County, Essex County, and surrounding communities including Westfield, Clark, and Scotch Plains.",
    },
    {
      q: "Does Bierman Cranford offer speech therapy for children with autism?",
      a: "Yes. Speech-language therapy is available at the Cranford center, delivered by licensed speech-language pathologists as part of a coordinated care plan. Service availability may vary. Contact our Intake Team to confirm availability at your preferred center.",
    },
    {
      q: "Does Bierman Cranford offer occupational therapy?",
      a: "Yes. Occupational therapy services are available at the Cranford location, focusing on sensory integration, fine motor skills, and daily living activities. Service availability may vary. Contact our Intake Team to confirm availability at your preferred center.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Berkeley Heights, NJ", url: "/locations/nj/berkeley-heights/" },
    { name: "West Orange, NJ", url: "/locations/nj/west-orange/" },
    { name: "Princeton, NJ", url: "/locations/nj/princeton/" },
    { name: "Piscataway, NJ", url: "/locations/nj/piscataway/" },
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
    facilityAlt: "Bierman Autism Centers Cranford, NJ — clinic interior",
    heroImage: "/manus-storage/nj_city_hero_static_light_2abb0770.png",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
    facilityYoutubeId: "JpLs9Q_eRGk",
    ogImage: "/manus-storage/bierman-autism-centers-aba-therapy-cranford-nj-og_b1945716.jpg",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://local.biermanautism.com/locations/nj/cranford/",
    baseId: "https://local.biermanautism.com/locations/nj/cranford/",
    pageTitle: "ABA Therapy Near Me | Cranford, NJ | Bierman Autism Centers",
    pageDescription:
      "ABA therapy, speech-language therapy & occupational therapy near Cranford, NJ. Bierman Autism Centers serves Union County families. Evidence-based care.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    facilityVideoUploadDate: "2026-06-25T00:00:00+00:00",
    facilityVideoDuration: "PT2M8S",
    // areaServed: Verified from biermanautism.com/location/cranford-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Union County, NJ", sameAs: "https://en.wikipedia.org/wiki/Union_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Essex County, NJ", sameAs: "https://en.wikipedia.org/wiki/Essex_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Middlesex County, NJ", sameAs: "https://en.wikipedia.org/wiki/Middlesex_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Somerset County, NJ", sameAs: "https://en.wikipedia.org/wiki/Somerset_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Morris County, NJ", sameAs: "https://en.wikipedia.org/wiki/Morris_County,_New_Jersey" },
      { type: "City", name: "Cranford, NJ", sameAs: "https://en.wikipedia.org/wiki/Cranford,_New_Jersey" },
      { type: "City", name: "Westfield, NJ" },
      { type: "City", name: "Clark, NJ" },
      { type: "City", name: "Scotch Plains, NJ" },
      { type: "City", name: "Fanwood, NJ" },
      { type: "City", name: "Garwood, NJ" },
      { type: "City", name: "Kenilworth, NJ" },
      { type: "City", name: "Springfield, NJ" },
      { type: "City", name: "Mountainside, NJ" },
      { type: "City", name: "Union, NJ" },
      { type: "City", name: "Roselle Park, NJ" },
      { type: "City", name: "Linden, NJ" },
      { type: "City", name: "Elizabeth, NJ" },
      { type: "City", name: "Maplewood, NJ" },
      { type: "City", name: "South Orange, NJ" },
      { type: "City", name: "Millburn, NJ" },
      { type: "City", name: "Newark, NJ" },
      { type: "City", name: "Irvington, NJ" },
      { type: "City", name: "Livingston, NJ" },
      { type: "City", name: "Woodbridge, NJ" },
      { type: "City", name: "Iselin, NJ" },
      { type: "City", name: "Colonia, NJ" },
      { type: "City", name: "Edison, NJ" },
      { type: "City", name: "Metuchen, NJ" },
      { type: "City", name: "Carteret, NJ" },
      { type: "City", name: "Watchung, NJ" },
      { type: "City", name: "Warren, NJ" },
      { type: "City", name: "Green Brook, NJ" },
      { type: "City", name: "Bridgewater, NJ" },
      { type: "City", name: "Basking Ridge, NJ" },
      { type: "City", name: "Chatham, NJ" },
      { type: "City", name: "Madison, NJ" },
      { type: "City", name: "Florham Park, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/cranford-nj/ (May 2026)

  serviceArea: [
    "Cranford", "Westfield", "Clark", "Scotch Plains", "Fanwood",
    "Garwood", "Kenilworth", "Springfield", "Mountainside", "Union",
    "Roselle Park", "Linden", "Elizabeth",
    "Maplewood", "South Orange", "Millburn", "Newark", "Irvington", "Livingston",
    "Woodbridge", "Iselin", "Colonia", "Edison", "Metuchen", "Carteret",
    "Watchung", "Warren", "Green Brook", "Bridgewater", "Basking Ridge",
    "Chatham", "Madison", "Florham Park",
  ],

  // visitLogistics: Verbatim from biermanautism.com/location/cranford-nj/ — "Accessible Location" bullet (May 2026)
  visitLogistics: {
    parking: "Free parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Near major landmarks",
  },

  // schoolRelationships: Verbatim from biermanautism.com/location/cranford-nj/ — "Why Choose" section (May 2026)
  schoolRelationships:
    "Working relationships with Cranford Public Schools and area districts",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};
