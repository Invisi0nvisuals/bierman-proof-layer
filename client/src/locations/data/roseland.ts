/**
 * Bierman Autism Centers — Proof Layer
 * Location Data: Roseland, NJ
 *
 * Source of truth for all Roseland-specific variables.
 * Consumed by LocationPage renderer and buildLocationSchema utility.
 *
 * NAP status: Sourced from biermanautism.com/location/roseland-nj/ and GBP (June 2026)
 * Phone note: (800) 931-8113 publicly observed — CALLRAIL VALIDATION REQUIRED
 * Opening status: "Opening Fall 2026" per official site
 *   ⚠ GBP conflict: GBP shows "Opens June" — needs correction with Bierman
 *   ⚠ Address formatting: official site uses "Ste 120", GBP uses "Suite 120" — standardize to "Ste 120"
 * Reviews: Borrowed from Bierman NJ pool — location-specific reviews not yet available
 */
import type { LocationData } from "../types";

export const roselandData: LocationData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  slug: "roseland",
  displayName: "Roseland, NJ",
  entityName: "Bierman Autism Centers — Roseland",
  comingSoon: true,
  comingSoonLabel: "Opening Fall 2026",

  // ── NAP ───────────────────────────────────────────────────────────────────
  address: {
    street: "103 Eisenhower Pkwy, Ste 120",
    city: "Roseland",
    state: "NJ",
    zip: "07068",
    county: "Essex County",
  },
  phone: "(973) 832-1716",
  geo: {
    lat: 40.8204,
    lng: -74.3021,
  },

  // ── URLs ──────────────────────────────────────────────────────────────────
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=roseland-nj&utm_source=local-hub&utm_medium=referral&utm_campaign=nj-pilot-roseland",
  gbpUrl: "https://maps.app.goo.gl/yhdYY5oYzQauMwdq6",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.4!2d-74.3021!3d40.8204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s103+Eisenhower+Pkwy%2C+Ste+120%2C+Roseland%2C+NJ+07068!5e0!3m2!1sen!2sus!4v1620000000000",

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
    "Bierman Autism Centers in Roseland provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Essex County, Morris County, and surrounding North Jersey communities.",
  insuranceText:
    "Bierman Roseland works with a variety of insurance providers. Contact our Intake Team to verify your coverage before your first visit. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.",

  // ── Reviews ───────────────────────────────────────────────────────────────
  // Note: Roseland is opening Fall 2026. Reviews below are from Bierman NJ centers
  // and reflect the Bierman brand experience. Location-specific reviews will be added post-launch.
  reviews: [
    {
      slug: "nj-review-roseland-1",
      name: "Bierman Parent",
      meta: "Bierman NJ Family",
      date: "4 months ago",
      stars: 5,
      text: "My 10-year-old autistic son has been coming to Bierman since the center first opened. This center has a lot of structure, open communication, and everything is well-documented — lots of support for the parents, including parent training. Speech and OT is also offered at the center, which is a plus!",
      initials: "BP",
      avatarColor: "#0284c7",
    },
    {
      slug: "nj-review-roseland-2",
      name: "Bierman Parent",
      meta: "Bierman NJ Family",
      date: "5 months ago",
      stars: 5,
      text: "Great facility and caring and supportive team. I would like to express my gratitude to the clinical director, who was incredibly helpful during our son's assessment. She was professional, kind, and very knowledgeable. She took the time to explain everything clearly and truly listened to our concerns as parents.",
      initials: "BP",
      avatarColor: "#16a34a",
    },
    {
      slug: "nj-review-roseland-3",
      name: "Bierman Parent",
      meta: "Bierman NJ Family",
      date: "7 months ago",
      stars: 5,
      text: "Bierman truly saved my life at a time when I could not manage my child's behaviors and had no hope that our lives would get better. My child was able to build her tolerance and patience, coping, and calming strategies. I received weekly parenting sessions, which helped me be a better parent.",
      initials: "BP",
      avatarColor: "#ea580c",
    },
  ],

  // ── FAQs ──────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "When will the Bierman Autism Centers Roseland location open?",
      a: "The Roseland center is opening Fall 2026. Families can submit an intake request now to get on our list and be contacted as soon as we are ready to schedule.",
    },
    {
      q: "Where is the Bierman Autism Centers Roseland clinic located?",
      a: "The Roseland clinic is located at 103 Eisenhower Pkwy, Ste 120, Roseland, NJ 07068, serving families in Essex County, Morris County, Passaic County, and Union County.",
    },
    {
      q: "What services will be available at the Roseland location?",
      a: "The Roseland center will offer ABA therapy, diagnostic evaluations, speech therapy, and occupational therapy. Services are delivered by BCBA-supervised clinical teams and tailored to each child's individual needs. Service availability may vary. Contact our Intake Team to confirm availability at your preferred center.",
    },
    {
      q: "What counties does the Roseland location serve?",
      a: "The Roseland center serves families in Essex County, Morris County, Passaic County, and Union County, including communities such as Livingston, West Orange, Caldwell, Montclair, Wayne, Clifton, Summit, and Union.",
    },
    {
      q: "How do I get started with ABA therapy near Roseland, NJ?",
      a: "Submit an intake request online or call us at (800) 931-8113. A member of our team will reach out to discuss your child's needs, verify insurance, and walk you through next steps.",
    },
    {
      q: "Does Bierman Roseland accept insurance?",
      a: "Yes. Bierman Roseland works with a variety of insurance providers, including Horizon BCBS NJ, Aetna, United Healthcare, and Cigna. Our team will help verify your coverage before services begin.",
    },
    {
      q: "Is the Roseland center accessible and easy to reach?",
      a: "Yes. The center is conveniently located near I-280, the Garden State Parkway, Route 10, and Routes 46 and 80. On-site parking and a wheelchair-accessible facility are available.",
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
      q: "Is ABA therapy available near Essex County, NJ?",
      a: "Yes. Bierman Autism Centers is opening a clinic in Roseland, NJ at 103 Eisenhower Pkwy, Ste 120, providing ABA therapy to families in Essex County, Morris County, Passaic County, and Union County, including Livingston, West Orange, Montclair, and surrounding communities.",
    },
  ],

  // ── Nearby ────────────────────────────────────────────────────────────────
  nearby: [
    { name: "Bierman Parent", url: "/locations/nj/west-orange/" },
    { name: "Bierman Parent", url: "/locations/nj/parsippany/" },
    { name: "Bierman Parent", url: "/locations/nj/cranford/" },
    { name: "Bierman Parent", url: "/locations/nj/ramsey/" },
    { name: "Bierman Parent", url: "/locations/nj/moorestown/" },
    { name: "Bierman Parent", url: "/" },
  ],

  // ── Clinical Leadership ───────────────────────────────────────────────────
  clinicalLeadership: [
    {
      name: "Bierman Parent",
      credentials: "Ph.D., BCBA-D, LBA",
      role: "Director of Clinical Excellence · New Jersey",
      headshot: "/manus-storage/bierman-team-victoria-verdun_4dbdee42.webp",
      tags: ["Clinical Excellence", "BCBA Supervision", "Caregiver Training", "ABA Therapy"],
    },
    {
      name: "Bierman Parent",
      credentials: "M.A., BCBA",
      role: "Director of Services · New Jersey",
      headshot: "/manus-storage/bierman-team-hillary-genovese_19abd385.webp",
      tags: ["Service Delivery", "BCBA Supervision", "ABA Therapy", "New Jersey"],
    },
  ],

  // ── Assets ────────────────────────────────────────────────────────────────
  assets: {
    facility: "/manus-storage/bierman-autism-new-jersey-ramsey-facility-main_296feafd.webp",
    facilityAlt: "Bierman Autism Centers Roseland, NJ — therapy center interior",
    heroImage: "/manus-storage/Roseland,NJ_14fa16be.png",
    videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
    videoFile: "/manus-storage/bierman-ramsey-aba-therapy-overview_e3501ef2.mp4",
  },

  // ── Schema ────────────────────────────────────────────────────────────────
  schema: {
    pageUrl: "https://bierman-proof-layer.manus.space/locations/nj/roseland/",
    baseId: "https://bierman-proof-layer.manus.space/locations/nj/roseland/",
    pageTitle: "ABA Therapy Near Me | Roseland, NJ | Bierman Autism Centers",
    pageDescription:
      "ABA therapy, speech, OT & diagnostics coming to Roseland, NJ — Fall 2026. Pre-register now for Essex County families. Bierman Autism Centers.",
    videoUploadDate: "2023-10-19T00:00:00+00:00",
    areaServed: [
      { type: "AdministrativeArea", name: "Bierman Parent", sameAs: "https://en.wikipedia.org/wiki/Essex_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Bierman Parent", sameAs: "https://en.wikipedia.org/wiki/Morris_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Bierman Parent", sameAs: "https://en.wikipedia.org/wiki/Passaic_County,_New_Jersey" },
      { type: "AdministrativeArea", name: "Bierman Parent", sameAs: "https://en.wikipedia.org/wiki/Union_County,_New_Jersey" },
      { type: "City", name: "Bierman Parent", sameAs: "https://en.wikipedia.org/wiki/Roseland,_New_Jersey" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
      { type: "City", name: "Bierman Parent" },
    ],
  },

  serviceArea: [
    "Roseland", "Livingston", "West Orange", "Caldwell", "West Caldwell",
    "North Caldwell", "Essex Fells", "Fairfield", "Verona", "Cedar Grove",
    "Montclair", "Bloomfield", "Nutley", "Maplewood", "South Orange",
    "Millburn", "Short Hills", "East Hanover", "Florham Park", "Madison",
    "Chatham", "Morristown", "Wayne", "Little Falls", "Clifton",
    "Springfield", "Summit", "Union",
  ],

  visitLogistics: {
    parking: "Free on-site parking",
    accessibility: "Wheelchair accessible",
    landmarks: "Near I-280, Garden State Parkway, Route 10, Routes 46 and 80",
  },

  schoolRelationships:
    "Working relationships with Roseland Public Schools, West Essex Regional, Livingston, Caldwell–West Caldwell, and Fairfield school districts",

  communityLinks: {
    facebookGroup: "https://www.facebook.com/groups/1428401534785409/",
    eventsUrl: "https://www.biermanautism.com/resources/sensory-friendly-events/",
  },
};
