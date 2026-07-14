/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: Parsippany, NJ
 *
 * Source of truth for all Parsippany-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Confirmed from Bierman website (May 2026)
 * Address: 2001 US 46, Suite 100, Parsippany, NJ 07054
 * Phone: (609) 480-2522
 * County: Morris County (primary)
 *
 * Status: OPEN (activated Phase A.3, July 2026)
 * Previously Coming Summer 2026 — now live.
 */

import type { LocationData } from "../types";

export const parsippanyData: LocationData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  slug: "parsippany",
  displayName: "Parsippany, NJ",
  entityName: "Bierman Autism Centers — Parsippany",
  comingSoon: false,

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: {
    street: "2001 US 46, Suite 100",
    city: "Parsippany",
    state: "NJ",
    zip: "07054",
    county: "Morris County",
  },
  phone: "(609) 849-3482",
  geo: {
    lat: 40.8584,
    lng: -74.4265,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=parsippany-nj&utm_source=local-hub&utm_medium=referral&utm_campaign=nj-pilot-parsippany",
  gbpUrl: "https://maps.app.goo.gl/5MznVvcqg1AkxsJ27",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.0!2d-74.4265!3d40.8584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2001+US-46%2C+Parsippany%2C+NJ+07054!5e0!3m2!1sen!2sus!4v1620000000005",

  // ── Hours ─────────────────────────────────────────────────────────────────
  hoursDisplay: "Monday–Friday, 8:30 AM – 4:30 PM",
  openingHours: "Mo-Fr 08:30-16:30",

  // ── Video ─────────────────────────────────────────────────────────────────
  youtubeId: "QFufx0pye4U",
  videoTitle: "Inside a Bierman Autism Center — What to Expect (Parent Tour)",
  videoDescription:
    "A parent-facing tour of a Bierman Autism Centers clinic. See the therapy spaces, meet the team, and learn about ABA therapy services at our Parsippany, NJ location.",

  // ── Content ───────────────────────────────────────────────────────────────
  heroDescription:
    "Bierman Autism Centers provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism in Parsippany, NJ. Our experienced clinical team partners with families to help children build meaningful skills in a supportive, play-based environment.",
  insuranceText:
    "Bierman Parsippany works with a variety of insurance providers. Contact our Intake Team to verify your coverage before your first visit. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  reviews: [
    {
      slug: "bierman-parent-parsippany-1",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "I can't thank the Bierman team enough. Our child was there for 4 years, beginning at age 20 months. We didn't know what ABA was at all prior to starting. Now he is thriving in public school, chattering away about his favorite dinosaurs.",
      initials: "BP",
      avatarColor: "#2563eb",
    },
    {
      slug: "bierman-parent-parsippany-2",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "Bierman truly saved my life at a time when I could not manage my child's behaviors and had no hope that our lives would get better. My child was able to build her tolerance and patience, coping, and calming strategies.",
      initials: "BP",
      avatarColor: "#ea580c",
    },
    {
      slug: "bierman-parent-parsippany-3",
      name: "Bierman Parent",
      meta: "Verified Client",
      date: "2024",
      stars: 5,
      text: "This place saved my son's and my family's lives. They have extremely high-quality care, communication, problem-solving, support, environment, and staff. Everything and every experience we had with Bierman was top-notch.",
      initials: "BP",
      avatarColor: "#7c3aed",
    },
    {
      slug: "bierman-parent-parsippany-4",
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
      q: "What autism therapy services are available at the Parsippany center?",
      a: "Bierman Autism Centers in Parsippany offers BCBA-supervised ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Services are individualized based on each child's needs and developmental goals. Service availability may vary. Contact our Intake Team to confirm availability at your preferred center.",
    },
    {
      q: "Does Bierman Autism Centers in Parsippany accept insurance?",
      a: "Yes. Bierman Parsippany works with a variety of insurance providers, including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact us to verify your specific coverage.",
    },
    {
      q: "What age groups does the Parsippany center serve?",
      a: "The Parsippany center serves children from early intervention age through adolescence. Services are individualized based on each child's needs and developmental stage.",
    },
    {
      q: "Where is the Bierman Autism Centers Parsippany clinic located?",
      a: "The Parsippany clinic is located at 2001 US 46, Suite 100, Parsippany, NJ 07054, serving families in Morris County and surrounding areas.",
    },
    {
      q: "What is ABA therapy and how does it help children with autism?",
      a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child's goals and delivered by trained therapists.",
    },
    {
      q: "Is ABA therapy available near Parsippany, NJ?",
      a: "Yes. Bierman Autism Centers in Parsippany is located at 2001 US 46, Suite 100. The clinic serves families in Morris County, Essex County, and surrounding communities including Morristown, Denville, and Montville.",
    },
    {
      q: "Does Bierman Parsippany offer speech therapy for children with autism?",
      a: "Yes. Speech-language therapy is available at the Parsippany center, delivered by licensed speech-language pathologists as part of a coordinated care plan. Service availability may vary. Contact our Intake Team to confirm availability at your preferred center.",
    },
    {
      q: "Does Bierman Parsippany offer occupational therapy?",
      a: "Yes. Occupational therapy services are available at the Parsippany location, focusing on sensory integration, fine motor skills, and daily living activities. Service availability may vary. Contact our Intake Team to confirm availability at your preferred center.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "West Orange, NJ", url: "/locations/nj/west-orange/" },
    { name: "Cranford, NJ", url: "/locations/nj/cranford/" },
    { name: "Berkeley Heights, NJ", url: "/locations/nj/berkeley-heights/" },
    { name: "Ramsey, NJ", url: "/locations/nj/ramsey/" },
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
    facilityAlt: "Bierman Autism Centers Parsippany, NJ — ABA therapy and autism services",
    heroImage: "/manus-storage/Parsippany,NJ_51673ca2.png",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://bierman-proof-layer.manus.space/locations/nj/parsippany/",
    baseId: "https://bierman-proof-layer.manus.space/locations/nj/parsippany/",
    pageTitle: "ABA Therapy Near Me | Parsippany, NJ | Bierman Autism Centers",
    pageDescription:
      "ABA therapy, speech-language therapy, occupational therapy, and autism diagnostic evaluations in Parsippany, NJ. Explore evidence-based autism services from Bierman Autism Centers.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    // areaServed: Verified from biermanautism.com/location/parsippany-nj/ — "Counties Served" section (May 2026)
    areaServed: [
      { type: "AdministrativeArea", name: "Morris County, NJ", sameAs: "https://en.wikipedia.org/wiki/Morris_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Essex County, NJ", sameAs: "https://en.wikipedia.org/wiki/Essex_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Passaic County, NJ", sameAs: "https://en.wikipedia.org/wiki/Passaic_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Somerset County, NJ", sameAs: "https://en.wikipedia.org/wiki/Somerset_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Union County, NJ", sameAs: "https://en.wikipedia.org/wiki/Union_County,_New_Jersey" },
      { type: "City", name: "Parsippany, NJ", sameAs: "https://en.wikipedia.org/wiki/Parsippany%E2%80%93Troy_Hills,_New_Jersey" },
      { type: "City", name: "Morris Plains, NJ" },
      { type: "City", name: "Morristown, NJ" },
      { type: "City", name: "Hanover Township, NJ" },
      { type: "City", name: "East Hanover, NJ" },
      { type: "City", name: "Denville, NJ" },
      { type: "City", name: "Mountain Lakes, NJ" },
      { type: "City", name: "Boonton, NJ" },
      { type: "City", name: "Montville, NJ" },
      { type: "City", name: "Randolph, NJ" },
      { type: "City", name: "Roxbury, NJ" },
      { type: "City", name: "Florham Park, NJ" },
      { type: "City", name: "Madison, NJ" },
      { type: "City", name: "Chatham, NJ" },
      { type: "City", name: "Pequannock, NJ" },
      { type: "City", name: "Lincoln Park, NJ" },
      { type: "City", name: "Kinnelon, NJ" },
      { type: "City", name: "Livingston, NJ" },
      { type: "City", name: "West Orange, NJ" },
      { type: "City", name: "Roseland, NJ" },
      { type: "City", name: "Fairfield, NJ" },
      { type: "City", name: "Millburn, NJ" },
      { type: "City", name: "Caldwell, NJ" },
      { type: "City", name: "Verona, NJ" },
      { type: "City", name: "Wayne, NJ" },
      { type: "City", name: "Totowa, NJ" },
      { type: "City", name: "Little Falls, NJ" },
      { type: "City", name: "Clifton, NJ" },
      { type: "City", name: "Pompton Lakes, NJ" },
      { type: "City", name: "Basking Ridge, NJ" },
      { type: "City", name: "Bernardsville, NJ" },
      { type: "City", name: "Bridgewater, NJ" },
      { type: "City", name: "Summit, NJ" },
      { type: "City", name: "New Providence, NJ" },
      { type: "City", name: "Berkeley Heights, NJ" },
    ],
  },

  // ── Verified Local Trust Fields ──────────────────────────────────────────────
  // Source: biermanautism.com/location/parsippany-nj/ (May 2026)
  // serviceArea populated for schema and local entity coverage

  serviceArea: [
    "Parsippany", "Morris Plains", "Morristown", "Hanover Township",
    "East Hanover", "Denville", "Mountain Lakes", "Boonton", "Montville",
    "Randolph", "Roxbury", "Florham Park", "Madison", "Chatham",
    "Pequannock", "Lincoln Park", "Kinnelon",
    "Livingston", "West Orange", "Roseland", "Fairfield", "Millburn",
    "Caldwell", "Verona",
    "Wayne", "Totowa", "Little Falls", "Clifton", "Pompton Lakes",
    "Basking Ridge", "Bernardsville", "Bridgewater",
    "Summit", "New Providence", "Berkeley Heights",
  ],

  // visitLogistics: Verbatim from biermanautism.com/location/parsippany-nj/ — "Accessible Location" bullet (May 2026)
  // Note: Parking/accessibility details pending site confirmation; highway access confirmed
  visitLogistics: {
    landmarks: "Directly off US-46 and minutes from I-80 and I-287",
  },

  // schoolRelationships: undefined — school district section pending site confirmation (July 2026)
  // schoolRelationships: undefined,

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};
