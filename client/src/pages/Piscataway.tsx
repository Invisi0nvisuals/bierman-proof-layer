/*
 * Bierman Autism Centers — Proof Layer
 * Piscataway, NJ Location Page — Phase 2 Replication
 *
 * Design: Warm pediatric healthcare — family-centered, light, and welcoming
 * - Warm off-white / light aqua backgrounds
 * - Soft teal (#0d9488) brand accent
 * - Warm orange (#f97316) CTA
 * - Navy (#1a2b47) used sparingly for headings and footer only
 *
 * PROOF LAYER — NOT PRODUCTION
 * noindex, nofollow | No tracking | No live forms | No patient data
 *
 * VARIABLE SWAPS FROM RAMSEY TEMPLATE (9):
 * 1. location name: Piscataway, NJ
 * 2. address: 200 Centennial Ave, Suite 200
 * 3. city: Piscataway
 * 4. zip: 08854
 * 5. phone: (732) 655-2056
 * 6. county: Middlesex County
 * 7. YouTube video ID: QFufx0pye4U
 * 8. nearby locations: updated to reflect Piscataway neighbors
 * 9. GBP URL: Bierman Autism Centers - Piscataway
 *
 * REVIEWS: 4 real public GBP reviews (Stacy Jones, Kimona Smith, Amauris Corniel, Sowbagya S P)
 * Source: Google Business Profile — Bierman Autism Centers - Piscataway (May 2026)
 */
import { useState, useEffect } from "react";

const TRUST_BADGES = [
  { src: "/manus-storage/bierman-trust-group-of-year-2022_866c3645.webp", alt: "Group of the Year 2022 Award" },
  { src: "/manus-storage/bierman-trust-bacb-ace-provider_f1995271.webp", alt: "BACB ACE Authorized Continuing Education Provider" },
  { src: "/manus-storage/bierman-trust-casp-member_7cc1f427.webp", alt: "CASP — Council of Autism Service Providers Member" },
];

const INSURANCE_LOGOS = [
  { src: "/manus-storage/bierman-insurance-aetna_f6d238ed.webp", alt: "Aetna health insurance — accepted at Bierman Autism Centers Piscataway" },
  { src: "/manus-storage/bierman-insurance-ambetter_34baba91.webp", alt: "Ambetter health insurance — accepted at Bierman Autism Centers Piscataway" },
  { src: "/manus-storage/bierman-insurance-carelon_4a70fbdd.webp", alt: "Carelon health insurance — accepted at Bierman Autism Centers Piscataway" },
  { src: "/manus-storage/bierman-insurance-cigna_1c21165d.webp", alt: "Cigna health insurance — accepted at Bierman Autism Centers Piscataway" },
  { src: "/manus-storage/bierman-insurance-compsych_657fa980.webp", alt: "ComPsych health insurance — accepted at Bierman Autism Centers Piscataway" },
  { src: "/manus-storage/bierman-insurance-meritain-health_bc730b51.webp", alt: "Meritain Health insurance — accepted at Bierman Autism Centers Piscataway" },
  { src: "/manus-storage/bierman-insurance-surest_3872fe70.webp", alt: "Surest health insurance — accepted at Bierman Autism Centers Piscataway" },
  { src: "/manus-storage/bierman-insurance-umr_9c11ff1b.webp", alt: "UMR health insurance — accepted at Bierman Autism Centers Piscataway" },
  { src: "/manus-storage/bierman-insurance-united-healthcare_0b5b310b.webp", alt: "United Healthcare — accepted at Bierman Autism Centers Piscataway" },
];

const ASSETS = {
  logo: "/manus-storage/bierman-logo-anniversary-20_3f19246b.webp",
  facility: "/manus-storage/bierman-autism-new-jersey-ramsey-facility-main_296feafd.webp",
  mascot: "/manus-storage/bierman-brand-nj-penguin-accent_64e9cbdd.webp",
  insurance: "/manus-storage/bierman-autism-insurance-horizon-bcbs-new-jersey_8162212b.webp",
  videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
  hillaryGenovese: "/manus-storage/bierman-team-hillary-genovese_19abd385.webp",
  victoriaVerdun: "/manus-storage/bierman-team-victoria-verdun_4dbdee42.webp",
  themeBcbaGuidance: "/manus-storage/theme-card-bcba-guidance_f4421e19.png",
  themeFamilyPartnership: "/manus-storage/theme-card-family-partnership_7fd858a1.png",
  themeProgressFocused: "/manus-storage/theme-card-progress-focused_1582d40e.png",
  // Piscataway GBP review cards — generated clean cards, sourced from public GBP reviews May 2026
  reviewStacy: "/manus-storage/review-card-stacy-jones_82039847.png",
  reviewKimona: "/manus-storage/review-card-kimona-smith_9dd372e6.png",
  reviewAmauris: "/manus-storage/review-card-amauris-corniel_88b4d308.png",
  reviewSowbagya: "/manus-storage/review-card-sowbagya-sp_721aa464.png",
};

// ─── LOCATION DATA ───────────────────────────────────────────────────────────
const LOCATION = {
  name: "Piscataway, NJ",
  address: "200 Centennial Ave, Suite 200",
  city: "Piscataway",
  state: "NJ",
  zip: "08854",
  phone: "(732) 655-2056",
  county: "Middlesex County",
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=piscataway-nj",
  gbpUrl: "https://www.google.com/maps/place/Bierman+Autism+Centers+-+Piscataway",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.0!2d-74.4774!3d40.5493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s200+Centennial+Ave%2C+Piscataway%2C+NJ+08854!5e0!3m2!1sen!2sus!4v1620000000001",
  youtubeId: "QFufx0pye4U",
};

const NEARBY = [
  { name: "Ramsey, NJ", url: "/locations/nj/ramsey/" },
  { name: "West Orange, NJ", url: "#" },
  { name: "Princeton, NJ", url: "#" },
  { name: "Cranford, NJ", url: "#" },
  { name: "Parsippany, NJ", url: "#" },
  { name: "All 33 Locations →", url: "#" },
];

// ─── REVIEW DATA ─────────────────────────────────────────────────────────────
const GBP_REVIEWS = [
  {
    name: "Stacy Jones",
    meta: "2 reviews · 1 photo",
    date: "3 days ago",
    stars: 5,
    text: "I should be clear: My child doesn't attend our local Bierman Autism Center. However, we did visit their recent free petting zoo event. I am glad that Bierman is part of our community and grateful that they host events. I found all the staff to be warm, welcoming and very kind.",
    initials: "SJ",
    avatarColor: "#ea580c",
    img: ASSETS.reviewStacy,
    reviewBody: "I should be clear: My child doesn't attend our local Bierman Autism Center. However, we did visit their recent free petting zoo event. I am glad that Bierman is part of our community and grateful that they host events. I found all the staff to be warm, welcoming and very kind.",
  },
  {
    name: "Kimona Smith",
    meta: "Local Guide · 34 reviews · 81 photos",
    date: "5 days ago",
    stars: 5,
    text: "I took my nephew to the petting zoo. He thoroughly enjoyed himself and the variety of animals that were present was welcoming. Definitely would love to see this happen more often.",
    initials: "KS",
    avatarColor: "#7c3aed",
    img: ASSETS.reviewKimona,
    reviewBody: "I took my nephew to the petting zoo. He thoroughly enjoyed himself and the variety of animals that were present was welcoming. Definitely would love to see this happen more often.",
  },
  {
    name: "Amauris Corniel",
    meta: "2 reviews",
    date: "5 days ago",
    stars: 5,
    text: "Took my nephew to the petting zoo Bierman hosted. It was a experience. The team was genuinely welcoming and not just surface level nice. If you are curious about their services, they actually take the time to explain things with real insight instead of giving you generic answers. A lot of happy, smiling faces all around!",
    initials: "AC",
    avatarColor: "#2563eb",
    img: ASSETS.reviewAmauris,
    reviewBody: "Took my nephew to the petting zoo Bierman hosted. It was a experience. The team was genuinely welcoming and not just surface level nice. If you are curious about their services, they actually take the time to explain things with real insight instead of giving you generic answers. A lot of happy, smiling faces all around!",
  },
  {
    name: "Sowbagya S P",
    meta: "Local Guide · 24 reviews · 215 photos",
    date: "5 days ago",
    stars: 5,
    text: "It was really great! Kids had so much fun! Thanks for organizing this amazing event. Animals were so friendly and staff were so supportive!",
    initials: "SS",
    avatarColor: "#16a34a",
    img: ASSETS.reviewSowbagya,
    reviewBody: "It was really great! Kids had so much fun! Thanks for organizing this amazing event. Animals were so friendly and staff were so supportive!",
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Does Bierman Autism Centers in Piscataway accept insurance?",
    a: "Yes. Bierman Piscataway accepts most major insurance plans including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact us to verify your specific coverage.",
  },
  {
    q: "What age groups does the Piscataway center serve?",
    a: "The Piscataway center serves children from early intervention age through adolescence. Services are individualized based on each child's needs and developmental stage.",
  },
  {
    q: "How do I get started with services at the Piscataway location?",
    a: "The first step is completing our intake request. A member of our team will contact you to discuss your child's needs, verify insurance, and schedule an initial consultation.",
  },
  {
    q: "Where is the Bierman Autism Centers Piscataway clinic located?",
    a: "The Piscataway clinic is located at 200 Centennial Ave, Suite 200, Piscataway, NJ 08854, serving families in Middlesex County and surrounding areas.",
  },
  {
    q: "What is ABA therapy and how does it help children with autism?",
    a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child's goals and delivered by trained therapists.",
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
];

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconABA = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
    <path d="M16 32c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="18" r="5" stroke="#0d9488" strokeWidth="2.5"/>
    <path d="M20 26l-4 6M28 26l4 6" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconSpeech = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
    <path d="M14 20c0-5.523 4.477-10 10-10s10 4.477 10 10c0 4.418-2.86 8.166-6.857 9.497L26 34h-4l-.857-4.503C17.146 28.166 14 24.418 14 20z" stroke="#0d9488" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M20 20h8M20 24h5" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconOT = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
    <path d="M18 28c0-3.314 2.686-6 6-6s6 2.686 6 6v4H18v-4z" stroke="#0d9488" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="24" cy="18" r="3.5" stroke="#0d9488" strokeWidth="2.5"/>
    <path d="M14 36h20" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 28h2M32 28h2" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconDiag = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="24" cy="24" r="22" fill="#ccfbf1" />
    <rect x="14" y="13" width="20" height="24" rx="3" stroke="#0d9488" strokeWidth="2.5"/>
    <path d="M19 20h10M19 25h10M19 30h6" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="5" fill="#ccfbf1" stroke="#f97316" strokeWidth="2"/>
    <path d="M32 30v4M30 32h4" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SERVICES = [
  {
    title: "ABA Therapy",
    desc: "Applied Behavior Analysis — individualized, evidence-based therapy designed to build communication, social, and daily living skills.",
    icon: <IconABA />,
    img: "/manus-storage/bierman-service-aba-therapy-card_d7ddabc1.webp",
    link: "#",
  },
  {
    title: "Speech-Language Therapy",
    desc: "Targeted speech and language support to help children communicate more effectively and confidently.",
    icon: <IconSpeech />,
    img: "https://d2xsxph8kpxj0f.cloudfront.net/91389010/QxDhxTcSVFBCVe6sC7dKv5/bierman-service-speech-language-therapy-card-U56PgjdAJCh3qfqqeXDCyK.webp",
    link: "#",
  },
  {
    title: "Occupational Therapy",
    desc: "Sensory integration, fine motor skills, and daily living activities to support independence and engagement.",
    icon: <IconOT />,
    img: "/manus-storage/bierman-service-occupational-therapy-card_2cffd7a2.webp",
    link: "#",
  },
  {
    title: "Diagnostic Evaluation",
    desc: "Comprehensive autism diagnostic evaluations by licensed clinicians, with results and recommendations for families.",
    icon: <IconDiag />,
    img: "https://d2xsxph8kpxj0f.cloudfront.net/91389010/QxDhxTcSVFBCVe6sC7dKv5/bierman-service-diagnostic-evaluation-card-7MEyR3pXUm3dwqH5E9PnMK.webp",
    link: "#",
  },
];

// ─── Dismiss Button ────────────────────────────────────────────────────────────
const DismissBtn = ({ onDismiss, label = "Dismiss" }: { onDismiss: () => void; label?: string }) => (
  <button
    onClick={onDismiss}
    aria-label={label}
    className="ml-2 flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
  >
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round"/>
    </svg>
  </button>
);

// ─── Star Rating ──────────────────────────────────────────────────────────────
const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 16 16" fill={i < count ? "#f59e0b" : "#d1d5db"} className="w-4 h-4" aria-hidden="true">
        <path d="M8 1l1.854 3.756 4.146.602-3 2.924.708 4.128L8 10.25l-3.708 1.16.708-4.128-3-2.924 4.146-.602z"/>
      </svg>
    ))}
  </div>
);

// ─── GBP Review Card ──────────────────────────────────────────────────────────
const GBPReviewCard = ({ review }: { review: typeof GBP_REVIEWS[0] }) => {
  const [expanded, setExpanded] = useState(false);
  const TRUNCATE_AT = 160;
  const isTruncatable = review.text.length > TRUNCATE_AT;
  const displayText = !expanded && isTruncatable
    ? review.text.slice(0, TRUNCATE_AT).trimEnd() + "…"
    : review.text;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col gap-3 h-full">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: review.avatarColor }}
          aria-hidden="true"
        >
          {review.initials}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-[#1a2b47] text-sm leading-tight truncate">{review.name}</div>
          <div className="text-slate-400 text-xs truncate">{review.meta}</div>
        </div>
      </div>
      {/* Stars + date */}
      <div className="flex items-center gap-2">
        <StarRating count={review.stars} />
        <span className="text-slate-400 text-xs">{review.date}</span>
      </div>
      {/* Review text */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">
        {displayText}
        {isTruncatable && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 text-teal-600 font-semibold text-xs hover:text-teal-800 transition-colors"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>
      {/* Google badge */}
      <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-slate-400 text-xs">Posted on Google</span>
      </div>
    </div>
  );
};

// ─── GBP Review Grid ──────────────────────────────────────────────────────────
const GBPReviewGrid = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
    {GBP_REVIEWS.map((review) => (
      <GBPReviewCard key={review.name} review={review} />
    ))}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Piscataway() {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [videoNoticeVisible, setVideoNoticeVisible] = useState(true);
  const [reviewsNoticeVisible, setReviewsNoticeVisible] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isCleanPreview = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("preview") === "clean";

  useEffect(() => {
    if (sessionStorage.getItem("pl_banner_dismissed_piscataway")) setBannerDismissed(true);
    if (sessionStorage.getItem("pl_video_notice_dismissed_piscataway")) setVideoNoticeVisible(false);
    if (sessionStorage.getItem("pl_reviews_notice_dismissed_piscataway")) setReviewsNoticeVisible(false);
  }, []);

  const dismissBanner = () => {
    sessionStorage.setItem("pl_banner_dismissed_piscataway", "1");
    setBannerDismissed(true);
  };
  const dismissVideoNotice = () => {
    sessionStorage.setItem("pl_video_notice_dismissed_piscataway", "1");
    setVideoNoticeVisible(false);
  };
  const dismissReviewsNotice = () => {
    sessionStorage.setItem("pl_reviews_notice_dismissed_piscataway", "1");
    setReviewsNoticeVisible(false);
  };

  const navTop = !isCleanPreview && !bannerDismissed ? "40px" : "0px";

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Proof Layer Banner */}
      {!isCleanPreview && !bannerDismissed && (
        <div className="bg-[#1a2b47] text-white text-xs py-2.5 px-4 flex items-center justify-center gap-3 text-center" style={{ minHeight: "40px" }}>
          <span>Proof Layer · Development Review Environment · noindex · nofollow · No tracking · No patient data</span>
          <DismissBtn onDismiss={dismissBanner} />
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 z-40 shadow-sm" style={{ position: "sticky", top: navTop }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="Bierman Autism Centers 20th Anniversary" className="h-10 w-auto" />
            <div className="hidden md:flex items-center gap-2">
              <span className="text-slate-300 text-sm">|</span>
              <span className="text-slate-500 text-sm">Piscataway, New Jersey</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={`tel:${LOCATION.phone}`} className="hidden md:block text-slate-600 hover:text-teal-700 text-sm font-medium transition-colors">
              {LOCATION.phone}
            </a>
            <a
              href={LOCATION.intakeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors shadow-sm"
            >
              Request Services
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #e0f7f4 40%, #fef9f0 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3" aria-hidden="true"><path d="M8 1a5 5 0 100 10A5 5 0 008 1zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM8 14a1 1 0 100-2 1 1 0 000 2z"/></svg>
                Piscataway, New Jersey
              </span>
              <span className="text-slate-400 text-xs">Middlesex County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-[#1a2b47]">
              ABA Therapy in<br />Piscataway, New Jersey
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Bierman Autism Centers in Piscataway provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Middlesex County and surrounding New Jersey communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={LOCATION.intakeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors text-center shadow-md"
              >
                Request Services in Piscataway
              </a>
              <a
                href={`tel:${LOCATION.phone}`}
                className="border-2 border-teal-300 hover:border-teal-500 bg-white hover:bg-teal-50 text-teal-700 font-semibold px-8 py-4 rounded-2xl text-lg transition-colors text-center"
              >
                {LOCATION.phone}
              </a>
            </div>
            {/* GBP-Verified NAP Card */}
            <div className="bg-white border border-teal-200 rounded-2xl p-5 inline-block shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 rounded-full p-1.5 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-teal-600" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M13 6.5a5 5 0 11-10 0 5 5 0 0110 0z"/><path d="M6 6.5l1.5 1.5L10 4.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div className="text-teal-700 text-xs font-bold uppercase tracking-widest mb-1">GBP Verified Location</div>
                  <div className="text-[#1a2b47] font-semibold text-sm">Bierman Autism Centers — Piscataway</div>
                  <div className="text-slate-500 text-sm">{LOCATION.address}, {LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
                  <div className="text-slate-500 text-sm">{LOCATION.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-teal-600 text-white py-3.5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 text-sm font-medium">
            {["✓ Evidence-Based ABA Therapy", "✓ Insurance Accepted", "✓ BCBA-Supervised Programs", "✓ 20 Years of Experience", "✓ Serving Middlesex County"].map((item) => (
              <span key={item} className="text-white/90">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Credential Badges */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.alt} className="flex items-center justify-center" style={{ height: "64px" }}>
                <img src={badge.src} alt={badge.alt} style={{ maxHeight: "56px", width: "auto", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-none">
              <div className="relative">
                <img
                  src={ASSETS.facility}
                  alt="Modern and welcoming interior of the Bierman Autism Centers clinic in Piscataway, New Jersey"
                  className="rounded-3xl shadow-2xl w-full object-cover"
                  style={{ minHeight: "320px", maxHeight: "480px" }}
                />
                <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-teal-100">
                  <img src={ASSETS.mascot} alt="Pilot the Penguin mascot" className="h-12 w-auto" />
                  <div>
                    <div className="text-[#1a2b47] font-semibold text-xs">Pilot the Penguin</div>
                    <div className="text-slate-400 text-xs">Bierman's friendly guide</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Our Piscataway Clinic</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-4">A Welcoming Environment for Every Child</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Piscataway center is designed to be a safe, engaging, and supportive space for children and families. Every aspect of our clinic — from the therapy rooms to the waiting areas — is built with the needs of children with autism in mind.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our clinical team includes Board Certified Behavior Analysts (BCBAs), Registered Behavior Technicians (RBTs), speech-language pathologists, and occupational therapists working collaboratively on each child's individualized plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={LOCATION.intakeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-center text-sm"
                >
                  Request Services in Piscataway
                </a>
                <a
                  href={`tel:${LOCATION.phone}`}
                  className="border border-teal-300 hover:bg-teal-50 text-teal-700 font-semibold px-6 py-3 rounded-xl transition-colors text-center text-sm"
                >
                  {LOCATION.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #f8fffe 0%, #f0fdfa 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Services at Piscataway</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">Comprehensive Autism Support Services</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Each service is individualized to your child's goals and delivered by licensed, experienced clinicians.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="h-40 overflow-hidden">
                  <img src={svc.img} alt={`${svc.title} at Bierman Autism Centers Piscataway`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    {svc.icon}
                    <h3 className="font-bold text-[#1a2b47] text-sm leading-tight">{svc.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <a href={svc.link} className="inline-flex items-center gap-1 text-teal-600 font-semibold text-xs hover:text-teal-800 transition-colors mt-auto">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Insurance</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-4">Insurance Accepted at Piscataway</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Bierman Piscataway accepts most major insurance plans. We work with families to verify coverage and navigate the insurance process. Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others are accepted.
              </p>
              <p className="text-slate-500 text-sm mb-6">
                Contact our Piscataway team to verify your specific plan and coverage details before starting services.
              </p>
              <a
                href={LOCATION.intakeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-sm"
              >
                Verify Insurance Coverage <span aria-hidden="true">→</span>
              </a>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4 items-center">
                {INSURANCE_LOGOS.map((logo) => (
                  <div key={logo.alt} className="flex items-center justify-center bg-slate-50 rounded-xl p-3" style={{ height: "72px" }}>
                    <img src={logo.src} alt={logo.alt} style={{ maxHeight: "44px", width: "auto", objectFit: "contain" }} loading="lazy" />
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs mt-4 text-center">
                Insurance acceptance may vary. Contact the Piscataway center to verify your specific plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Directions + Map */}
      <section className="py-16 border-t border-slate-100" style={{ background: "linear-gradient(180deg, #f8fffe 0%, #f0fdfa 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Directions</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-4">
                Visit Our Autism Center in<br />
                <span className="text-teal-600">Piscataway, New Jersey</span>
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 rounded-full p-1.5 mt-0.5 flex-shrink-0">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-teal-600" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M8 1a5 5 0 100 10A5 5 0 008 1z"/><path d="M8 14v-3" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a2b47] text-sm">{LOCATION.address}</div>
                    <div className="text-slate-500 text-sm">{LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 rounded-full p-1.5 flex-shrink-0">
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-teal-600" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 3l10 5-10 5V3z" strokeLinejoin="round"/></svg>
                  </div>
                  <a href={`tel:${LOCATION.phone}`} className="text-teal-700 font-semibold text-sm hover:underline">{LOCATION.phone}</a>
                </div>
              </div>
              <a
                href={LOCATION.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shadow-sm"
              >
                Get Directions on Google Maps <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200" style={{ height: "360px" }}>
              <iframe
                src={LOCATION.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bierman Autism Centers Piscataway — Google Maps"
                aria-label="Map showing the location of Bierman Autism Centers in Piscataway, NJ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wide mr-1">Other NJ Locations:</span>
            {NEARBY.map((loc) => (
              <a
                key={loc.name}
                href={loc.url}
                className="text-teal-700 text-xs font-medium hover:underline underline-offset-2 transition-colors"
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">See Inside</div>
          <h2 className="text-3xl font-bold text-[#1a2b47] mb-4">A Tour of Our Autism Center</h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto text-sm">
            See what a day at Bierman Autism Centers looks like — the therapy spaces, the team, and the environment we create for every child.
          </p>
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-900" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={`https://www.youtube.com/embed/${LOCATION.youtubeId}?rel=0&modestbranding=1`}
              title="Inside Our Piscataway, NJ Autism Center — a parent-facing tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              aria-label="YouTube video: Inside Our Piscataway, NJ Autism Center — a parent-facing tour"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
          {videoNoticeVisible && (
            <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-5 py-2.5">
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-amber-500 flex-shrink-0" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="8" cy="8" r="7"/><path d="M8 5v3M8 11v.5" strokeLinecap="round"/>
              </svg>
              <p className="text-amber-700 text-sm">
                Video usage rights and identifiable-person review required before production use.
              </p>
              <DismissBtn onDismiss={dismissVideoNotice} label="Dismiss video notice" />
            </div>
          )}
        </div>
      </section>

      {/* Review Themes */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">What Families Value</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">What Families Value at Piscataway</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              Public review evidence and Bierman testimonial themes suggest families value community engagement, welcoming staff, and a child-centered environment.
            </p>
          </div>

          {!isCleanPreview && reviewsNoticeVisible && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-3 text-center mb-8 max-w-2xl mx-auto flex items-center justify-center gap-2">
              <p className="text-slate-500 text-sm">
                Review themes are based on public review evidence and Bierman testimonial patterns. Final review copy requires Bierman approval before production use.
              </p>
              <DismissBtn onDismiss={dismissReviewsNotice} label="Dismiss review themes notice" />
            </div>
          )}
          {!isCleanPreview && !reviewsNoticeVisible && <div className="mb-8" />}

          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-sm bg-transparent">
              <img src={ASSETS.themeBcbaGuidance} alt="Supportive BCBA Guidance — families value hands-on clinical team communication at Bierman Piscataway" className="w-full h-auto object-contain" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm bg-transparent">
              <img src={ASSETS.themeFamilyPartnership} alt="Family Partnership — parents highlight clear communication and feeling known by the Bierman care team" className="w-full h-auto object-contain" loading="lazy" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm bg-transparent">
              <img src={ASSETS.themeProgressFocused} alt="Progress-Focused Support — individualized goals and steady progress at Bierman Autism Centers Piscataway NJ" className="w-full h-auto object-contain" loading="lazy" />
            </div>
          </div>

          <p className="text-center text-slate-400 text-xs mt-8">
            Themes derived from public GBP review evidence and Bierman corporate testimonials.
            Source: Gemini GBP Review Evidence Report, May 2026.
          </p>

          {/* Real GBP Reviews — 4 public reviews */}
          <div className="mt-14">
            <div className="text-center mb-10">
              <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Google Reviews</div>
              <h3 className="text-2xl font-bold text-[#1a2b47]">What Families Are Saying</h3>
              <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
                Real reviews from families at Bierman Autism Centers — Piscataway, NJ.
              </p>
            </div>
            <GBPReviewGrid />
            <p className="text-center text-slate-400 text-xs mt-8">
              Reviews sourced from Google Business Profile — public. Displayed for proof-layer review purposes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-slate-100" style={{ background: "linear-gradient(180deg, #f8fffe 0%, #f0fdfa 100%)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">FAQ</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">Frequently Asked Questions</h2>
            <p className="text-slate-500 mt-3 text-sm">Common questions about ABA therapy and services at Bierman Autism Centers Piscataway.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-[#1a2b47] text-sm leading-snug">{faq.q}</span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`w-4 h-4 text-teal-600 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Leadership */}
      <section className="py-20 bg-[#1a2b47]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-96 flex-shrink-0">
              <div className="inline-block bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">New Jersey Clinical Leadership</div>
              <h2 className="text-3xl font-bold text-white leading-tight mb-4">The Team Behind Your Child's Care</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Bierman's New Jersey centers are supported by experienced clinical leaders who guide care quality, staff development, and family-centered service delivery across the region.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <img src={ASSETS.mascot} alt="Pilot the Penguin — Bierman mascot" className="w-10 h-10 object-contain" />
                <span className="text-teal-300 text-xs font-medium">Bierman Autism Centers · New Jersey</span>
              </div>
            </div>
            <div className="flex-1 grid sm:grid-cols-2 gap-6">
              {[
                {
                  name: "Victoria Verdun",
                  credentials: "Ph.D., BCBA-D, LBA",
                  title: "Director of Clinical Excellence",
                  region: "New Jersey",
                  photo: ASSETS.victoriaVerdun,
                  alt: "Victoria Verdun, Ph.D., BCBA-D, LBA — Director of Clinical Excellence, New Jersey, Bierman Autism Centers",
                  tags: ["Clinical Excellence", "BCBA Supervision", "Caregiver Training", "ABA Therapy"],
                },
                {
                  name: "Hillary Genovese",
                  credentials: "M.A., BCBA",
                  title: "Director of Services",
                  region: "New Jersey",
                  photo: ASSETS.hillaryGenovese,
                  alt: "Hillary Genovese, M.A., BCBA — Director of Services, New Jersey, Bierman Autism Centers",
                  tags: ["Service Delivery", "BCBA Supervision", "ABA Therapy", "New Jersey"],
                },
              ].map((person) => (
                <div key={person.name} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/8 transition-all duration-200">
                  <div className="relative">
                    <img src={person.photo} alt={person.alt} className="w-full aspect-square object-cover object-top" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b47]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-white font-bold text-sm">{person.name}</div>
                      <div className="text-teal-300 text-xs">{person.credentials}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-slate-300 text-xs mb-3">{person.title} · {person.region}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {person.tags.map((tag) => (
                        <span key={tag} className="bg-teal-500/20 text-teal-300 text-xs px-2 py-0.5 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-block bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">Get Started</div>
          <h2 className="text-4xl font-bold text-[#1a2b47] mb-4">Ready to Start in Piscataway?</h2>
          <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            Take the first step. Our Piscataway team will help you verify insurance, discuss your child's needs, and schedule an initial consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={LOCATION.intakeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-colors shadow-md"
            >
              Request Services in Piscataway
            </a>
            <a
              href={`tel:${LOCATION.phone}`}
              className="border-2 border-teal-300 hover:border-teal-500 bg-white hover:bg-teal-50 text-teal-700 font-semibold px-10 py-4 rounded-2xl text-lg transition-colors"
            >
              {LOCATION.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2b47] text-slate-400 py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div>
              <img src={ASSETS.logo} alt="Bierman Autism Centers" className="h-10 w-auto mb-3 opacity-90" />
              <div className="text-sm text-slate-300 font-semibold">Bierman Autism Centers — Piscataway</div>
              <div className="text-xs mt-1">{LOCATION.address}</div>
              <div className="text-xs">{LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
              <div className="text-xs mt-1">
                <a href={`tel:${LOCATION.phone}`} className="hover:text-teal-300 transition-colors">{LOCATION.phone}</a>
              </div>
            </div>
            <div className="text-xs space-y-1.5">
              <div className="text-slate-300 font-semibold text-sm mb-2">Proof Layer Notice</div>
              <div>This page is a development proof layer.</div>
              <div>noindex · nofollow · No tracking · No patient data</div>
              <div>Not affiliated with or replacing biermanautism.com</div>
              <div className="pt-2">
                <a href="/" className="text-teal-400 hover:text-teal-300 transition-colors">← Ramsey Location</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-xs text-center">
            © 2026 Bierman Autism Centers. All rights reserved. · Proof layer for internal review only.
          </div>
        </div>
      </footer>

    </div>
  );
}
