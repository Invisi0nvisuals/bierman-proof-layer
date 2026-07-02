/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: Ramsey, NJ
 *
 * Source of truth for all Ramsey-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Confirmed from GBP listing (May 2026)
 * Phone: (201) 928-5245 — Final Public Phone per Launch Readiness Workbook SOT
 * Reviews: 6 real public GBP reviews, sourced May 2026
 */

import type { LocationData } from "../types";

export const ramseyData: LocationData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  slug: "ramsey",
  displayName: "Ramsey, NJ",
  entityName: "Bierman Autism Centers \u2014 Ramsey",

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: {
    street: "500 N Franklin Tpke, Ste 203",
    city: "Ramsey",
    state: "NJ",
    zip: "07446",
    county: "Bergen County",
  },
  phone: "(201) 928-5245",
  geo: {
    lat: 41.0579,
    lng: -74.1441,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=ramsey-nj&utm_source=local-hub&utm_medium=referral&utm_campaign=nj-pilot-ramsey",
  gbpUrl: "https://www.google.com/maps/place/Bierman+Autism+Centers+-+Ramsey",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.5!2d-74.1441!3d41.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s500+N+Franklin+Tpke%2C+Ramsey%2C+NJ+07446!5e0!3m2!1sen!2sus!4v1620000000000",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday\u2013Friday, 8:30 AM \u2013 4:30 PM",
  openingHours: "Mo-Fr 08:30-16:30",

  // ── Video ─────────────────────────────────────────────────────────────────
  youtubeId: "UqMnEBJqFkQ",
  videoTitle: "Inside Our Ramsey, NJ Autism Center (A Safe & Fun Tour for Parents)",
  videoDescription:
    "A parent-facing tour of the Bierman Autism Centers clinic in Ramsey, New Jersey. See the therapy spaces, meet the team, and learn about ABA therapy services.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Bierman Autism Centers in Ramsey provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Bergen County and surrounding New Jersey communities.",
  insuranceText:
    "Bierman Ramsey accepts most major insurance plans. We work with families to verify coverage and navigate the insurance process. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  reviews: [
    {
      slug: "ambar-arias",
      name: "Ambar Arias",
      meta: "Local Guide \u00b7 31 reviews",
      date: "8 weeks ago",
      stars: 5,
      text: "If I could give this center 10 stars, I would!! My son has been here for a little over a year, and I am beyond thankful for all the help he has received. I would like to thank all of the therapists, aides, and clinical directors who contributed to my son\u2019s progress and positive evolution. I would highly recommend this center to anyone who is looking to get their child more support with therapies. It has personally been one of the best decisions I\u2019ve made for my son\u2019s ADS journey.",
      initials: "AA",
      avatarColor: "#ea580c",
    },
    {
      slug: "sohayb-stiti",
      name: "Sohayb Stiti",
      meta: "Local Guide \u00b7 17 reviews",
      date: "13 weeks ago",
      stars: 5,
      text: "I would like to express my gratitude to Dr. Catherine Lark, who was incredibly helpful during our son\u2019s assessment. She was professional, kind, and very knowledgeable. She took the time to explain everything clearly and truly listened to our concerns as parents. We felt supported and confident throughout the process.",
      initials: "SS",
      avatarColor: "#7c3aed",
    },
    {
      slug: "kim-sedlacek",
      name: "Kim Sedlacek",
      meta: "Local Guide \u00b7 13 reviews",
      date: "41 weeks ago",
      stars: 5,
      text: "The Practice Manager, Kelsey, and all the Behavior Technicians are very knowledgeable and caring. They are making a huge difference for the children they serve.",
      initials: "KS",
      avatarColor: "#0d9488",
    },
    {
      slug: "margarita-morales",
      name: "Margarita Morales",
      meta: "6 reviews",
      date: "8 weeks ago",
      stars: 5,
      text: "Staff was great! Nice experience! Thank you",
      initials: "MM",
      avatarColor: "#2563eb",
    },
    {
      slug: "anthony-siciliano",
      name: "Anthony Siciliano",
      meta: "Local Guide \u00b7 33 reviews",
      date: "8 weeks ago",
      stars: 5,
      text: "Went here for a public event \u2014 nice, clean center and friendly staff :)",
      initials: "AS",
      avatarColor: "#16a34a",
    },
    {
      slug: "nancy-passano",
      name: "Nancy Passano",
      meta: "5 reviews",
      date: "Mar 10, 2025",
      stars: 5,
      text: "Amazing experience at the Reptile Encounter \u2014 our son loved seeing and touching all the reptiles. Such a great family event!",
      initials: "NP",
      avatarColor: "#db2777",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Does Bierman Autism Centers in Ramsey accept insurance?",
      a: "Yes. Bierman Ramsey accepts most major insurance plans including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact us to verify your specific coverage.",
    },
    {
      q: "What age groups does the Ramsey center serve?",
      a: "The Ramsey center serves children from early intervention age through adolescence. Services are individualized based on each child\u2019s needs and developmental stage.",
    },
    {
      q: "How do I get started with services at the Ramsey location?",
      a: "The first step is completing our intake request. A member of our team will contact you to discuss your child\u2019s needs, verify insurance, and schedule an initial consultation.",
    },
    {
      q: "Where is the Bierman Autism Centers Ramsey clinic located?",
      a: "The Ramsey clinic is located at 500 N Franklin Tpke, Suite 203, Ramsey, NJ 07446, serving families in Bergen County and surrounding areas.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child\u2019s goals and delivered by trained therapists.",
    },
    {
      q: "Is ABA therapy available near Ramsey, NJ?",
      a: "Yes. Bierman Autism Centers operates a clinic in Ramsey, NJ at 500 N Franklin Tpke, Ste 203, providing ABA therapy to families in Bergen County, Passaic County, and surrounding communities including Mahwah, Ridgewood, and Paramus.",
    },
    {
      q: "Does Bierman Ramsey offer speech therapy for children with autism?",
      a: "Yes. Speech-language therapy is available at the Ramsey center, delivered by licensed speech-language pathologists as part of a coordinated care plan.",
    },
    {
      q: "Does Bierman Ramsey offer occupational therapy for children with autism?",
      a: "Yes. Occupational therapy is available at the Ramsey clinic. Services focus on fine motor skills, sensory processing, and building daily living independence in a supportive environment.",
    },
    {
      q: "Does Bierman Ramsey offer diagnostic evaluations for autism?",
      a: "Yes. Bierman Ramsey offers comprehensive diagnostic evaluations to help families understand their child\u2019s developmental profile and determine appropriate next steps for support and therapy.",
    },
    {
      q: "Does Bierman serve families in Bergen County?",
      a: "Yes. The Ramsey clinic is located in Bergen County and serves families throughout Bergen County, Passaic County, and surrounding New Jersey communities including Mahwah, Ridgewood, Paramus, and nearby towns.",
    },
    {
      q: "How do I start autism services near me in Ramsey, NJ?",
      a: "Contact the Ramsey center directly or submit an intake request online. A member of our team will reach out to discuss your child\u2019s needs, verify insurance coverage, and guide you through next steps.",
    },
    {
      q: "Does Bierman offer caregiver training resources?",
      a: "Yes. Bierman offers caregiver training resources to help families support communication, daily routines, independence, and behavior management at home. These resources are designed to extend the impact of therapy beyond the clinic.",
    },
    {
      q: "What is ASD?",
      a: "ASD stands for Autism Spectrum Disorder. It describes a range of developmental differences that can affect communication, social interaction, behavior, and learning. Every child on the spectrum has unique strengths and support needs.",
    },
    {
      q: "What is Level 1 autism?",
      a: "Level 1 autism, formerly referred to as Asperger\u2019s syndrome, describes individuals who require some support. GSC data indicates strong search demand around this topic, reflecting that many families are seeking clarity about what Level 1 autism means for their child.",
    },
    {
      q: "Can autism be cured?",
      a: "Autism is not something to cure. Support focuses on helping each child build communication skills, independence, and confidence over time. ABA therapy, speech therapy, and occupational therapy can all play a meaningful role in a child\u2019s development.",
    },
    {
      q: "How can ABA therapy support communication and independence?",
      a: "ABA therapy uses individualized goals and structured support to help children build communication, daily living, social, and learning skills. Programs are tailored to each child\u2019s developmental profile and delivered by trained, BCBA-supervised therapists.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Piscataway, NJ", url: "/locations/nj/piscataway/" },
    { name: "West Orange, NJ", url: "/locations/nj/west-orange/" },
    { name: "Princeton, NJ", url: "/locations/nj/princeton/" },
    { name: "Cranford, NJ", url: "/locations/nj/cranford/" },
    { name: "Parsippany, NJ", url: "/locations/nj/parsippany/" },
    { name: "All 35 Locations \u2192", url: "/" },
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
    facilityAlt: "Bierman Autism Centers Ramsey, NJ — clinic interior",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
    videoFile: "/manus-storage/bierman-ramsey-aba-therapy-overview_e3501ef2.mp4",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://bierman-proof-layer.manus.space/locations/nj/ramsey/",
    baseId: "https://bierman-proof-layer.manus.space/locations/nj/ramsey/",
    pageTitle: "ABA Therapy Near Me | Ramsey, NJ | Bierman Autism Centers",
    pageDescription:
      "ABA therapy, speech therapy, occupational therapy & autism diagnostics near Ramsey, NJ. Bierman Autism Centers serves Bergen County families. Insurance accepted.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    // areaServed: Verified from biermanautism.com/location/ramsey/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Bergen County, NJ", sameAs: "https://en.wikipedia.org/wiki/Bergen_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Passaic County, NJ", sameAs: "https://en.wikipedia.org/wiki/Passaic_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Morris County, NJ", sameAs: "https://en.wikipedia.org/wiki/Morris_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Sussex County, NJ", sameAs: "https://en.wikipedia.org/wiki/Sussex_County,_New_Jersey" },
      { type: "City", name: "Ramsey, NJ", sameAs: "https://en.wikipedia.org/wiki/Ramsey,_New_Jersey" },
      { type: "City", name: "Mahwah, NJ" },
      { type: "City", name: "Allendale, NJ" },
      { type: "City", name: "Saddle River, NJ" },
      { type: "City", name: "Upper Saddle River, NJ" },
      { type: "City", name: "Wyckoff, NJ" },
      { type: "City", name: "Franklin Lakes, NJ" },
      { type: "City", name: "Ringwood, NJ" },
      { type: "City", name: "Wanaque, NJ" },
      { type: "City", name: "Pompton Lakes, NJ" },
      { type: "City", name: "Oakland, NJ" },
      { type: "City", name: "Wayne, NJ" },
      { type: "City", name: "Kinnelon, NJ" },
      { type: "City", name: "Butler, NJ" },
      { type: "City", name: "Boonton, NJ" },
      { type: "City", name: "Mountain Lakes, NJ" },
      { type: "City", name: "Parsippany, NJ" },
      { type: "City", name: "Vernon, NJ" },
      { type: "City", name: "Hamburg, NJ" },
      { type: "City", name: "Franklin, NJ" },
      { type: "City", name: "Sparta, NJ" },
      { type: "City", name: "Andover, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ────────────────────────────────────────────────────────────────
  // Source: biermanautism.com/location/ramsey/ (May 2026)

  // serviceArea: All towns listed in the "Counties Served" section
  serviceArea: [
    "Ramsey", "Mahwah", "Allendale", "Saddle River", "Upper Saddle River",
    "Wyckoff", "Franklin Lakes",
    "Ringwood", "Wanaque", "Pompton Lakes", "Oakland", "Wayne",
    "Kinnelon", "Butler", "Boonton", "Mountain Lakes", "Parsippany",
    "Vernon", "Hamburg", "Franklin", "Sparta", "Andover",
  ],

  // visitLogistics: Confirmed from production page "Why Choose" section
  // visitLogistics: Verbatim from biermanautism.com/location/ramsey/ — "Accessible Location" bullet (May 2026)
  visitLogistics: {
    parking: "Free parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Near major landmarks",
  },

  // schoolRelationships: Verbatim from biermanautism.com/location/ramsey/ — "Why Choose" section (May 2026)
  schoolRelationships:
    "Working relationships with Ramsey Community Schools and area districts",

  // communityLinks: Verified URLs from production page footer section
  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};
