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
  phone: "(732) 655-2056",
  geo: {
    lat: 40.5493,
    lng: -74.4774,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=piscataway-nj",
  gbpUrl: "https://www.google.com/maps/place/Bierman+Autism+Centers+-+Piscataway",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.0!2d-74.4774!3d40.5493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s200+Centennial+Ave%2C+Piscataway%2C+NJ+08854!5e0!3m2!1sen!2sus!4v1620000000001",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday\u2013Friday, 8:00 AM \u2013 6:00 PM",
  openingHours: "Mo-Fr 08:00-18:00",

  // ── Video ─────────────────────────────────────────────────────────────────
  youtubeId: "QFufx0pye4U",
  videoTitle: "Inside Our Piscataway, NJ Autism Center (A Safe & Fun Tour for Parents)",
  videoDescription:
    "A parent-facing tour of the Bierman Autism Centers clinic in Piscataway, New Jersey. See the therapy spaces, meet the team, and learn about ABA therapy services.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Bierman Autism Centers in Piscataway provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Middlesex County and surrounding New Jersey communities.",
  insuranceText:
    "Bierman Piscataway accepts most major insurance plans. We work with families to verify coverage and navigate the insurance process. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  reviews: [
    {
      slug: "stacy-jones",
      name: "Stacy Jones",
      meta: "2 reviews \u00b7 1 photo",
      date: "3 days ago",
      stars: 5,
      text: "I should be clear: My child doesn\u2019t attend our local Bierman Autism Center. However, we did visit their recent free petting zoo event. I am glad that Bierman is part of our community and grateful that they host events. I found all the staff to be warm, welcoming and very kind.",
      initials: "SJ",
      avatarColor: "#ea580c",
    },
    {
      slug: "kimona-smith",
      name: "Kimona Smith",
      meta: "Local Guide \u00b7 34 reviews \u00b7 81 photos",
      date: "5 days ago",
      stars: 5,
      text: "I took my nephew to the petting zoo. He thoroughly enjoyed himself and the variety of animals that were present was welcoming. Definitely would love to see this happen more often.",
      initials: "KS",
      avatarColor: "#7c3aed",
    },
    {
      slug: "amauris-corniel",
      name: "Amauris Corniel",
      meta: "2 reviews",
      date: "5 days ago",
      stars: 5,
      text: "Took my nephew to the petting zoo Bierman hosted. It was a experience. The team was genuinely welcoming and not just surface level nice. If you are curious about their services, they actually take the time to explain things with real insight instead of giving you generic answers. A lot of happy, smiling faces all around!",
      initials: "AC",
      avatarColor: "#2563eb",
    },
    {
      slug: "sowbagya-sp",
      name: "Sowbagya S P",
      meta: "Local Guide \u00b7 24 reviews \u00b7 215 photos",
      date: "5 days ago",
      stars: 5,
      text: "It was really great! Kids had so much fun! Thanks for organizing this amazing event. Animals were so friendly and staff were so supportive!",
      initials: "SS",
      avatarColor: "#16a34a",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Does Bierman Autism Centers in Piscataway accept insurance?",
      a: "Yes. Bierman Piscataway accepts most major insurance plans including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact us to verify your specific coverage.",
    },
    {
      q: "What age groups does the Piscataway center serve?",
      a: "The Piscataway center serves children from early intervention age through adolescence. Services are individualized based on each child\u2019s needs and developmental stage.",
    },
    {
      q: "How do I get started with services at the Piscataway location?",
      a: "The first step is completing our intake request. A member of our team will contact you to discuss your child\u2019s needs, verify insurance, and schedule an initial consultation.",
    },
    {
      q: "Where is the Bierman Autism Centers Piscataway clinic located?",
      a: "The Piscataway clinic is located at 200 Centennial Ave, Suite 200, Piscataway, NJ 08854, serving families in Middlesex County and surrounding areas.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child\u2019s goals and delivered by trained therapists.",
    },
    {
      q: "Is ABA therapy available near Piscataway, NJ?",
      a: "Yes. Bierman Autism Centers operates a clinic in Piscataway, NJ at 200 Centennial Ave, Suite 200, providing ABA therapy to families in Middlesex County, Somerset County, and surrounding communities including Edison, New Brunswick, and South Plainfield.",
    },
    {
      q: "Does Bierman Piscataway offer speech therapy for children with autism?",
      a: "Yes. Speech-language therapy is available at the Piscataway center, delivered by licensed speech-language pathologists as part of a coordinated care plan.",
    },
    {
      q: "Does Bierman Piscataway offer occupational therapy?",
      a: "Yes. Occupational therapy services are available at the Piscataway location, focusing on sensory integration, fine motor skills, and daily living activities.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Ramsey, NJ", url: "/locations/nj/ramsey/" },
    { name: "West Orange, NJ", url: "#" },
    { name: "Princeton, NJ", url: "#" },
    { name: "Cranford, NJ", url: "#" },
    { name: "Parsippany, NJ", url: "#" },
    { name: "All 33 Locations \u2192", url: "#" },
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
    facilityAlt: "Bierman Autism Centers Piscataway, NJ \u2014 clinic interior",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://bierman-proof-layer.manus.space/locations/nj/piscataway/",
    baseId: "https://bierman-proof-layer.manus.space/locations/nj/piscataway/",
    pageTitle: "ABA Therapy in Piscataway, NJ | Bierman Autism Centers",
    pageDescription:
      "Bierman Autism Centers in Piscataway, NJ provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Middlesex County and surrounding New Jersey communities.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    areaServed: [
      { type: "AdministrativeArea", name: "Middlesex County, NJ" },
      { type: "AdministrativeArea", name: "Somerset County, NJ" },
      { type: "City", name: "Piscataway, NJ" },
      { type: "City", name: "Edison, NJ" },
      { type: "City", name: "New Brunswick, NJ" },
      { type: "City", name: "South Plainfield, NJ" },
    ],
  },
};
