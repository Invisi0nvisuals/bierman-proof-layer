/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: Moorestown, NJ
 *
 * Source of truth for all Moorestown-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Sourced from biermanautism.com/location/moorestown-nj/ (June 2026)
 * Phone note: (847) 232-4997 publicly observed — CALLRAIL VALIDATION REQUIRED
 * Opening status: "Opening Fall 2026" per official site
 * Reviews: Borrowed from Bierman NJ pool (Ramsey/Cranford) — location-specific reviews not yet available
 */
import type { LocationData } from "../types";

export const moorestownData: LocationData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  slug: "moorestown",
  displayName: "Moorestown, NJ",
  entityName: "Bierman Autism Centers — Moorestown",
  comingSoon: true,
  comingSoonLabel: "Opening Fall 2026",

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: {
    street: "505 Pleasant Valley Ave",
    city: "Moorestown",
    state: "NJ",
    zip: "08057",
    county: "Burlington County",
  },
  phone: "(847) 232-4997",
  geo: {
    lat: 39.9712,
    lng: -74.9488,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=moorestown-nj&utm_source=local-hub&utm_medium=referral&utm_campaign=nj-pilot-moorestown",
  gbpUrl: "https://maps.app.goo.gl/wCJ1eqeL74PxBiBW7",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.2!2d-74.9488!3d39.9712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s505+Pleasant+Valley+Ave%2C+Moorestown%2C+NJ+08057!5e0!3m2!1sen!2sus!4v1620000000000",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday–Friday, 8:30 AM – 4:30 PM",
  openingHours: "Mo-Fr 08:30-16:30",

  // ── Video ─────────────────────────────────────────────────────────────────
  youtubeId: "UqMnEBJqFkQ",
  videoTitle: "Inside a Bierman Autism Centers Clinic — What Families Can Expect",
  videoDescription:
    "A parent-facing overview of Bierman Autism Centers' ABA therapy approach. Learn about the therapy spaces, clinical team, and what to expect when you get started.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Bierman Autism Centers in Moorestown provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Burlington County, Camden County, and surrounding South Jersey communities.",
  insuranceText:
    "Bierman Moorestown works with a variety of insurance providers. Contact our Intake Team to verify your coverage before your first visit. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  // Note: Moorestown is opening Fall 2026. Reviews below are from Bierman NJ centers
  // and reflect the Bierman brand experience. Location-specific reviews will be added post-launch.
  reviews: [
    {
      slug: "nj-review-moorestown-1",
      name: "Bierman Parent",
      meta: "Bierman NJ Family",
      date: "3 months ago",
      stars: 5,
      text: "I can't thank the Bierman team enough. Our child was there for 4 years, beginning at age 20 months, so it was a tremendous journey through key developmental years. We didn't know what ABA was at all prior to starting. When our child entered Bierman, we had no idea if he would even speak, and now he is thriving in public school, chattering away about his favorite dinosaurs and taking on challenge after challenge.",
      initials: "BP",
      avatarColor: "#05C3DE",
    },
    {
      slug: "nj-review-moorestown-2",
      name: "Bierman Parent",
      meta: "Bierman NJ Family",
      date: "5 months ago",
      stars: 5,
      text: "Bierman truly saved my life at a time when I could not manage my child's behaviors and had no hope that our lives would get better. My child was able to build her tolerance and patience, coping, and calming strategies. The full day gave me the separation that I needed. I received weekly parenting sessions, which helped me be a better parent.",
      initials: "BP",
      avatarColor: "#003B71",
    },
    {
      slug: "nj-review-moorestown-3",
      name: "Bierman Parent",
      meta: "Bierman NJ Family",
      date: "6 months ago",
      stars: 5,
      text: "This place saved my son's and my family's lives. They have extremely high-quality care, communication, problem-solving, support, environment, staff — everything. Every experience we had with Bierman was top-notch, and I am forever grateful for them. I highly recommend them.",
      initials: "BP",
      avatarColor: "#EF4E72",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "When will the Bierman Autism Centers Moorestown location open?",
      a: "The Moorestown center is opening Fall 2026. Families can <a href="#request-services">submit an intake request now</a> to get on our list and be contacted as soon as we are ready to schedule.",
    },
    {
      q: "Where is the Bierman Autism Centers Moorestown clinic located?",
      a: "The Moorestown clinic is located at <a href="https://maps.app.goo.gl/wCJ1eqeL74PxBiBW7" target="_blank" rel="noopener noreferrer">505 Pleasant Valley Ave, Moorestown, NJ 08057</a>, serving families in Burlington County, Camden County, and surrounding South Jersey communities.",
    },
    {
      q: "What services will be available at the Moorestown location?",
      a: "The Moorestown center will offer ABA therapy, diagnostic evaluations, speech therapy, and occupational therapy. Services are delivered by BCBA-supervised clinical teams and tailored to each child's individual needs. Service availability may vary. <a href="#request-services">Contact our Intake Team</a> to confirm availability at your preferred center.",
    },
    {
      q: "What counties does the Moorestown location serve?",
      a: "The Moorestown center serves families in Burlington County, Camden County, Gloucester County, and Mercer County, including communities such as Mount Laurel, Cherry Hill, Haddonfield, Voorhees, Hamilton, and Princeton.",
    },
    {
      q: "How do I get started with ABA therapy near Moorestown, NJ?",
      a: "<a href="#request-services">Submit an intake request online</a> or call us at (847) 232-4997. A member of our team will reach out to discuss your child's needs, verify insurance, and walk you through next steps.",
    },
    {
      q: "Does Bierman Moorestown accept insurance?",
      a: "Yes. Bierman Moorestown works with a variety of insurance providers, including Horizon BCBS NJ, Aetna, United Healthcare, and Cigna. Our team will help verify your coverage before services begin.",
    },
    {
      q: "Is the Moorestown center accessible and easy to reach?",
      a: "Yes. The center is conveniently located near I-295, Route 38, and Route 73, with the NJ Turnpike just minutes away. On-site parking and a wheelchair-accessible facility are available.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child's goals and delivered by trained, BCBA-supervised therapists.",
    },
    {
      q: "Does Bierman offer caregiver training resources?",
      a: "Yes. Bierman offers caregiver training resources to help families support communication, daily routines, independence, and behavior management at home. These resources are designed to extend the impact of therapy beyond the clinic.",
    },
    {
      q: "What is the difference between Comprehensive and Focused ABA therapy?",
      a: "Comprehensive ABA addresses a broad range of developmental skills with more weekly hours. Focused Therapy targets a specific, well-defined set of goals with fewer weekly hours. Both are BCBA-led and individualized. Our intake team works with every family to determine the right fit.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Princeton, NJ", url: "/locations/nj/princeton/" },
    { name: "Cranford, NJ", url: "/locations/nj/cranford/" },
    { name: "Piscataway, NJ", url: "/locations/nj/piscataway/" },
    { name: "Eatontown, NJ", url: "/locations/nj/eatontown/" },
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
    facilityAlt: "Bierman Autism Centers Moorestown, NJ — therapy center interior",
    heroImage: "/manus-storage/nj_city_hero_static_light_2abb0770.png",
    ogImage: "/manus-storage/bierman-autism-centers-aba-therapy-moorestown-nj-og_66014183.jpg",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
    videoFile: "/manus-storage/bierman-ramsey-aba-therapy-overview_e3501ef2.mp4",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://local.biermanautism.com/locations/nj/moorestown/",
    baseId: "https://local.biermanautism.com/locations/nj/moorestown/",
    pageTitle: "ABA Therapy Near Me | Moorestown, NJ | Bierman Autism Centers",
    pageDescription:
      "ABA therapy, speech, OT & diagnostics coming to Moorestown, NJ — Fall 2026. Pre-register now for Burlington County families. Bierman Autism Centers.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    areaServed: [
      { type: "AdministrativeArea", name: "Burlington County, NJ", sameAs: "https://en.wikipedia.org/wiki/Burlington_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Camden County, NJ", sameAs: "https://en.wikipedia.org/wiki/Camden_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Gloucester County, NJ", sameAs: "https://en.wikipedia.org/wiki/Gloucester_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Mercer County, NJ", sameAs: "https://en.wikipedia.org/wiki/Mercer_County,_New_Jersey" },
      { type: "City", name: "Moorestown, NJ", sameAs: "https://en.wikipedia.org/wiki/Moorestown,_New_Jersey" },
      { type: "City", name: "Mount Laurel, NJ" },
      { type: "City", name: "Maple Shade, NJ" },
      { type: "City", name: "Cinnaminson, NJ" },
      { type: "City", name: "Delran, NJ" },
      { type: "City", name: "Cherry Hill, NJ" },
      { type: "City", name: "Voorhees, NJ" },
      { type: "City", name: "Haddonfield, NJ" },
      { type: "City", name: "Haddon Township, NJ" },
      { type: "City", name: "Collingswood, NJ" },
      { type: "City", name: "Deptford, NJ" },
      { type: "City", name: "Washington Township, NJ" },
      { type: "City", name: "Hamilton, NJ" },
      { type: "City", name: "Robbinsville, NJ" },
      { type: "City", name: "Princeton, NJ" },
    ],
  },

  serviceArea: [
    "Moorestown", "Mount Laurel", "Maple Shade", "Cinnaminson", "Delran",
    "Riverton", "Palmyra", "Willingboro", "Marlton", "Medford",
    "Cherry Hill", "Voorhees", "Haddonfield", "Haddon Township", "Collingswood",
    "Deptford", "Washington Township", "Sewell", "Glassboro", "Woodbury",
    "Hamilton", "Robbinsville", "Hightstown", "Princeton", "Lawrenceville",
  ],

  visitLogistics: {
    parking: "Free on-site parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Near I-295, Route 38, Route 73, and NJ Turnpike",
  },

  schoolRelationships:
    "Working relationships with Moorestown Township Public Schools, Mount Laurel, Cinnaminson, Maple Shade, and Delran school districts",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};
