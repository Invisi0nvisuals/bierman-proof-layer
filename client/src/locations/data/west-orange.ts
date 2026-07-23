/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: West Orange, NJ
 *
 * Source of truth for all West Orange-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Confirmed from GBP listing (May 2026)
 * Address: 300 Executive Drive, Suite 070, West Orange, NJ 07052
 * Phone: (908) 632-2068
 * GBP reviews: 1 public review (Taesoo Kim — 5 stars, no review body text)
 * Review section: Uses corporate testimonials from biermanautism.com/what-our-clients-are-saying/
 * Flag: GBP review count is very thin (1). Recommend review acquisition campaign.
 *
 * Counties served (per biermanautism.com/location/west-orange-nj/):
 *   Essex County, Morris County, Union County, Passaic County
 */

import type { LocationData } from "../types";

export const westOrangeData: LocationData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  slug: "west-orange",
  displayName: "West Orange, NJ",
  entityName: "Bierman Autism Centers \u2014 West Orange",

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: {
    street: "300 Executive Drive, Suite 070",
    city: "West Orange",
    state: "NJ",
    zip: "07052",
    county: "Essex County",
  },
  phone: "(847) 232-4997",
  geo: {
    lat: 40.7965,
    lng: -74.2617,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=west-orange-nj&utm_source=local-hub&utm_medium=referral&utm_campaign=nj-pilot-west-orange",
  gbpUrl: "https://maps.app.goo.gl/gcVuRHyetFgWknR87",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.0!2d-74.2617!3d40.7965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ab428ca5d0af%3A0x1edc5c9c28051cae!2sBierman+Autism+Centers+-+West+Orange!5e0!3m2!1sen!2sus!4v1620000000002",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday–Friday, 8:30 AM – 4:30 PM",
  openingHours: "Mo-Fr 08:30-16:30",

  // ── Video ─────────────────────────────────────────────────────────────────
  // No West Orange-specific tour video confirmed. Using the Princeton center tour
  // as a representative NJ center tour. Replace with West Orange-specific video
  // when available.
  youtubeId: "QFufx0pye4U",
  videoTitle: "Inside a Bierman Autism Center (A Safe & Fun Tour for Parents)",
  videoDescription:
    "A parent-facing tour of a Bierman Autism Centers clinic in New Jersey. See the therapy spaces, meet the team, and learn about ABA therapy services available in West Orange.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Bierman Autism Centers in West Orange provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Essex County, Morris County, Union County, and surrounding New Jersey communities.",
  insuranceText:
    "Bierman West Orange works with a variety of insurance providers. Contact our Intake Team to verify your coverage before your first visit. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  // GBP note: Only 1 public GBP review (Taesoo Kim — 5 stars, no body text).
  // Using corporate testimonials from biermanautism.com/what-our-clients-are-saying/
  // These are attributed to Bierman clients generally, not West Orange specifically.
  // Flag for Bierman review: confirm attribution before production use.
  reviews: [
    {
      slug: "client-a",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "Recent",
      stars: 5,
      text: "This place saved my son\u2019s and my family\u2019s lives. They have extremely high-quality care, communication, problem-solving, support, environment, staff\u2014everything. Every experience we had with Bierman was top-notch, and I am forever grateful for them.",
      initials: "BP",
      avatarColor: "#EF4E72",
    },
    {
      slug: "client-b",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "Recent",
      stars: 5,
      text: "My 10-year-old autistic son has been coming here since the center first opened. This center has a lot of structure, open communication, and everything is well-documented\u2014lots of support for the parents, including parent training. Speech and OT are also offered at the center, which is a plus!",
      initials: "BP",
      avatarColor: "#003B71",
    },
    {
      slug: "client-c",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "Recent",
      stars: 5,
      text: "Bierman truly saved my life at a time when I could not manage my child\u2019s behaviors and had no hope that our lives would get better. My child was able to build her tolerance and patience, coping, and calming strategies. I received weekly parenting sessions, which helped me be a better parent.",
      initials: "BP",
      avatarColor: "#004C97",
    },
    {
      slug: "client-d",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "Recent",
      stars: 5,
      text: "We didn\u2019t know what ABA was at all prior to starting. When our child entered Bierman, we had no idea if he would even speak, and now he is thriving in public school, chattering away about his favorite dinosaurs and taking on challenge after challenge.",
      initials: "BP",
      avatarColor: "#05C3DE",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Does Bierman Autism Centers in West Orange accept insurance?",
      a: "Yes. Bierman West Orange works with a variety of insurance providers, including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. <a href="#request-services">Contact us</a> to verify your specific coverage.",
    },
    {
      q: "What age groups does the West Orange center serve?",
      a: "The West Orange center serves children from early intervention age through adolescence. Services are individualized based on each child\u2019s needs and developmental stage.",
    },
    {
      q: "How do I get started with services at the West Orange location?",
      a: "The first step is <a href="#request-services">completing our intake request</a>. A member of our team will contact you to discuss your child\u2019s needs, verify insurance, and schedule an initial consultation.",
    },
    {
      q: "Where is the Bierman Autism Centers West Orange clinic located?",
      a: "The West Orange clinic is located at <a href="https://maps.app.goo.gl/gcVuRHyetFgWknR87" target="_blank" rel="noopener noreferrer">300 Executive Drive, Suite 070, West Orange, NJ 07052</a>, serving families in Essex County and surrounding areas.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child\u2019s goals and delivered by trained therapists.",
    },
    {
      q: "Is ABA therapy available near West Orange, NJ?",
      a: "Yes. Bierman Autism Centers operates a clinic in West Orange, NJ at <a href="https://maps.app.goo.gl/gcVuRHyetFgWknR87" target="_blank" rel="noopener noreferrer">300 Executive Drive, Suite 070</a>, providing ABA therapy to families in Essex County, Morris County, Union County, and surrounding communities including Livingston, Millburn, Morristown, and Summit.",
    },
    {
      q: "Does Bierman West Orange offer speech therapy for children with autism?",
      a: "Yes. Speech-language therapy is available at the West Orange center, delivered by licensed speech-language pathologists as part of a coordinated care plan. Service availability may vary. <a href="#request-services">Contact our Intake Team</a> to confirm availability at your preferred center.",
    },
    {
      q: "Does Bierman West Orange offer occupational therapy?",
      a: "Yes. Occupational therapy services are available at the West Orange location, focusing on sensory integration, fine motor skills, and daily living activities. Service availability may vary. <a href="#request-services">Contact our Intake Team</a> to confirm availability at your preferred center.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Ramsey, NJ", url: "/locations/nj/ramsey/" },
    { name: "Piscataway, NJ", url: "/locations/nj/piscataway/" },
    { name: "Roseland, NJ", url: "/locations/nj/roseland/" },
    { name: "Cranford, NJ", url: "/locations/nj/cranford/" },
    { name: "Parsippany, NJ", url: "/locations/nj/parsippany/" },
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
    facilityAlt: "Bierman Autism Centers West Orange, NJ \u2014 clinic interior",
    heroImage: "/manus-storage/nj_city_hero_static_light_2abb0770.png",
    ogImage: "/manus-storage/bierman-autism-centers-aba-therapy-west-orange-nj-og_93fb6c98.jpg",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://local.biermanautism.com/locations/nj/west-orange/",
    baseId: "https://local.biermanautism.com/locations/nj/west-orange/",
    pageTitle: "ABA Therapy Near Me | West Orange, NJ | Bierman Autism Centers",
    pageDescription:
      "BCBA-supervised ABA therapy near West Orange, NJ. Bierman Autism Centers serves Essex County families with evidence-based autism care. Insurance accepted.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    // areaServed: Verified from biermanautism.com/location/west-orange-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Essex County, NJ", sameAs: "https://en.wikipedia.org/wiki/Essex_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Morris County, NJ", sameAs: "https://en.wikipedia.org/wiki/Morris_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Union County, NJ", sameAs: "https://en.wikipedia.org/wiki/Union_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Passaic County, NJ", sameAs: "https://en.wikipedia.org/wiki/Passaic_County,_New_Jersey" },
      { type: "City", name: "West Orange, NJ", sameAs: "https://en.wikipedia.org/wiki/West_Orange,_New_Jersey" },
      { type: "City", name: "Orange, NJ" },
      { type: "City", name: "East Orange, NJ" },
      { type: "City", name: "South Orange, NJ" },
      { type: "City", name: "Maplewood, NJ" },
      { type: "City", name: "Millburn, NJ" },
      { type: "City", name: "Livingston, NJ" },
      { type: "City", name: "Roseland, NJ" },
      { type: "City", name: "Morristown, NJ" },
      { type: "City", name: "Madison, NJ" },
      { type: "City", name: "Chatham, NJ" },
      { type: "City", name: "Florham Park, NJ" },
      { type: "City", name: "Morris Plains, NJ" },
      { type: "City", name: "Summit, NJ" },
      { type: "City", name: "New Providence, NJ" },
      { type: "City", name: "Berkeley Heights, NJ" },
      { type: "City", name: "Mountainside, NJ" },
      { type: "City", name: "Springfield, NJ" },
      { type: "City", name: "Montclair, NJ" },
      { type: "City", name: "Clifton, NJ" },
      { type: "City", name: "Passaic, NJ" },
      { type: "City", name: "Paterson, NJ" },
      { type: "City", name: "Wayne, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/west-orange-nj/ (May 2026)

  serviceArea: [
    "West Orange", "Orange", "East Orange", "South Orange", "Maplewood",
    "Millburn", "Livingston", "Roseland",
    "Morristown", "Madison", "Chatham", "Florham Park", "Morris Plains",
    "Summit", "New Providence", "Berkeley Heights", "Mountainside", "Springfield",
    "Montclair", "Clifton", "Passaic", "Paterson", "Wayne",
  ],

  // visitLogistics: Verbatim from biermanautism.com/location/west-orange-nj/ — "Accessible Location" bullet (May 2026)
  visitLogistics: {
    parking: "Free parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Near major landmarks",
  },

  // schoolRelationships: Verbatim from biermanautism.com/location/west-orange-nj/ — "Why Choose" section (May 2026)
  schoolRelationships:
    "Working relationships with West Orange Community Schools and area districts",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};
