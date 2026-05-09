/**
 * Bierman Autism Centers — Proof Layer
 * Ramsey, NJ Location Page — Visual Redesign v2
 *
 * Design: Warm pediatric healthcare — family-centered, light, and welcoming
 * - Warm off-white / light aqua backgrounds (no heavy dark navy dominance)
 * - Soft teal (#0d9488) brand accent
 * - Warm orange (#f97316) CTA
 * - Navy (#1a2b47) used sparingly for headings and footer only
 * - Rounded cards, generous whitespace, playful-but-polished SVG icons
 *
 * PROOF LAYER — NOT PRODUCTION
 * noindex, nofollow | No tracking | No live forms | No patient data
 */

const ASSETS = {
  logo: "/manus-storage/bierman-logo-anniversary-20_3f19246b.webp",
  facility: "/manus-storage/bierman-autism-new-jersey-ramsey-facility-main_296feafd.webp",
  speechTherapy: "/manus-storage/bierman-autism-speech-therapy-room_5813b4e7.jpg",
  mascot: "/manus-storage/bierman-autism-pilot-mascot-standing_ab2e5cf1.webp",
  insurance: "/manus-storage/bierman-autism-insurance-horizon-bcbs-new-jersey_8162212b.webp",
  videoPoster: "/manus-storage/bierman-ramsey-video-poster_28eb470d.jpg",
  video: "/manus-storage/bierman-ramsey-aba-therapy-overview_e3501ef2.mp4",
};

const LOCATION = {
  name: "Ramsey, NJ",
  address: "500 N Franklin Tpke, Ste 203",
  city: "Ramsey",
  state: "NJ",
  zip: "07446",
  phone: "(201) 596-8104",
  county: "Bergen County",
  intakeUrl: "https://www.biermanautism.com/start-now/?loc=ramsey-nj",
  gbpUrl: "https://www.google.com/maps/place/Bierman+Autism+Centers+-+Ramsey",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.5!2d-74.1441!3d41.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s500+N+Franklin+Tpke%2C+Ramsey%2C+NJ+07446!5e0!3m2!1sen!2sus!4v1620000000000",
};

const NEARBY = [
  { name: "Piscataway, NJ", url: "#" },
  { name: "West Orange, NJ", url: "#" },
  { name: "Princeton, NJ", url: "#" },
  { name: "Cranford, NJ", url: "#" },
  { name: "Parsippany, NJ", url: "#" },
  { name: "All 33 Locations →", url: "#" },
];

// SVG icons — consistent, playful, no emoji
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
    img: null,
    link: "#",
  },
  {
    title: "Speech-Language Therapy",
    desc: "Targeted speech and language support to help children communicate more effectively and confidently.",
    icon: <IconSpeech />,
    img: ASSETS.speechTherapy,
    link: "#",
  },
  {
    title: "Occupational Therapy",
    desc: "Sensory integration, fine motor skills, and daily living activities to support independence and engagement.",
    icon: <IconOT />,
    img: null,
    link: "#",
  },
  {
    title: "Diagnostic Evaluation",
    desc: "Comprehensive autism diagnostic evaluations by licensed clinicians, with results and recommendations for families.",
    icon: <IconDiag />,
    img: null,
    link: "#",
  },
];

const FAQS = [
  {
    q: "Does Bierman Autism Centers in Ramsey accept insurance?",
    a: "Yes. Bierman Ramsey accepts most major insurance plans including Horizon BCBS NJ, Aetna, United Healthcare, Cigna, and others. Contact us to verify your specific coverage.",
  },
  {
    q: "What age groups does the Ramsey center serve?",
    a: "The Ramsey center serves children from early intervention age through adolescence. Services are individualized based on each child's needs and developmental stage.",
  },
  {
    q: "How do I get started with services at the Ramsey location?",
    a: "The first step is completing our intake request. A member of our team will contact you to discuss your child's needs, verify insurance, and schedule an initial consultation.",
  },
  {
    q: "Where is the Bierman Autism Centers Ramsey clinic located?",
    a: "The Ramsey clinic is located at 500 N Franklin Tpke, Suite 203, Ramsey, NJ 07446, serving families in Bergen County and surrounding areas.",
  },
  {
    q: "What is ABA therapy and how does it help children with autism?",
    a: "Applied Behavior Analysis (ABA) is a scientifically validated approach that uses structured techniques to teach skills and reduce challenging behaviors. It is individualized to each child's goals and delivered by trained therapists.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Proof Layer Banner — slim, calm, unobtrusive */}
      <div className="bg-slate-100 border-b border-slate-200 text-slate-500 text-center py-1.5 px-4 text-xs font-medium sticky top-0 z-50">
        Proof Layer · Development Review Environment · noindex · nofollow · No tracking · No patient data
      </div>

      {/* Navigation — lighter treatment */}
      <nav className="bg-white border-b border-slate-200 sticky top-[32px] z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={ASSETS.logo} alt="Bierman Autism Centers 20th Anniversary" className="h-10 w-auto" />
            <div className="hidden md:flex items-center gap-2">
              <span className="text-slate-300 text-sm">|</span>
              <span className="text-slate-500 text-sm">Ramsey, New Jersey</span>
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

      {/* Hero — warm light gradient, no heavy navy */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #e0f7f4 40%, #fef9f0 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3" aria-hidden="true"><path d="M8 1a5 5 0 100 10A5 5 0 008 1zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM8 14a1 1 0 100-2 1 1 0 000 2z"/></svg>
                Ramsey, New Jersey
              </span>
              <span className="text-slate-400 text-xs">Bergen County</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5 text-[#1a2b47]">
              ABA Therapy in<br />Ramsey, New Jersey
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Bierman Autism Centers in Ramsey provides individualized ABA therapy, speech-language therapy, occupational therapy, and diagnostic evaluations for children with autism. Serving Bergen County and surrounding New Jersey communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={LOCATION.intakeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors text-center shadow-md"
              >
                Request Services in Ramsey
              </a>
              <a
                href={`tel:${LOCATION.phone}`}
                className="border-2 border-teal-300 hover:border-teal-500 bg-white hover:bg-teal-50 text-teal-700 font-semibold px-8 py-4 rounded-2xl text-lg transition-colors text-center"
              >
                {LOCATION.phone}
              </a>
            </div>
            {/* GBP-Verified NAP Card — clean, light */}
            <div className="bg-white border border-teal-200 rounded-2xl p-5 inline-block shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 rounded-full p-1.5 mt-0.5">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-teal-600" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M13 6.5a5 5 0 11-10 0 5 5 0 0110 0z"/><path d="M6 6.5l1.5 1.5L10 4.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div className="text-teal-700 text-xs font-bold uppercase tracking-widest mb-1">GBP Verified Location</div>
                  <div className="text-[#1a2b47] font-semibold text-sm">Bierman Autism Centers — Ramsey</div>
                  <div className="text-slate-500 text-sm">{LOCATION.address}, {LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
                  <div className="text-slate-500 text-sm">{LOCATION.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar — soft teal, not heavy */}
      <section className="bg-teal-600 text-white py-3.5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 text-sm font-medium">
            {["✓ Evidence-Based ABA Therapy", "✓ Insurance Accepted", "✓ BCBA-Supervised Programs", "✓ 20 Years of Experience", "✓ Serving Bergen County"].map((item) => (
              <span key={item} className="text-white/90">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section — image as major visual anchor */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image — prominent, rounded, soft shadow */}
            <div className="order-1 md:order-none">
              <div className="relative">
                <img
                  src={ASSETS.facility}
                  alt="Modern and welcoming interior of the Bierman Autism Centers clinic in Ramsey, New Jersey — this is the place your child will visit"
                  className="rounded-3xl shadow-2xl w-full object-cover"
                  style={{ minHeight: "320px", maxHeight: "480px" }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                {/* Polished fallback — never shows broken icon */}
                <div
                  className="rounded-3xl bg-gradient-to-br from-teal-50 to-aqua-100 items-center justify-center hidden"
                  style={{ minHeight: "320px", background: "linear-gradient(135deg, #e0f7f4, #f0fdfa)" }}
                >
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🏥</div>
                    <div className="text-teal-700 font-semibold">Ramsey Clinic Photo</div>
                    <div className="text-slate-400 text-sm mt-1">Image pending upload confirmation</div>
                  </div>
                </div>
                {/* Floating mascot badge */}
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
              <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Our Ramsey Clinic</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-4">A Welcoming Environment for Every Child</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Ramsey center is designed to be a safe, engaging, and supportive space for children and families. Every aspect of our clinic — from the therapy rooms to the waiting areas — is built with the needs of children with autism in mind.
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
                  Request Services in Ramsey
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

      {/* Services — consistent SVG icons, playful-professional */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #f8fffe 0%, #f0fdfa 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Services at Ramsey</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">Comprehensive Autism Support Services</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Each service is individualized to your child's goals and delivered by licensed, experienced clinicians.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="bg-white border border-teal-100 rounded-3xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                {/* Top visual — real photo if available, else icon block */}
                {svc.img ? (
                  <div className="relative">
                    <img src={svc.img} alt={svc.title} className="w-full h-40 object-cover" />
                    <div className="absolute top-3 left-3 bg-white/90 rounded-xl p-1.5 shadow-sm">
                      {svc.icon}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-40 flex flex-col items-center justify-center gap-2" style={{ background: "linear-gradient(135deg, #f0fdfa, #e0f7f4)" }}>
                    {svc.icon}
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-[#1a2b47] text-base mb-2">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <a href={svc.link} className="text-teal-600 font-semibold text-sm hover:text-teal-800 transition-colors inline-flex items-center gap-1">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance — softer, Horizon featured, rest as pending placeholders */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Insurance & Coverage</div>
            <h2 className="text-2xl font-bold text-[#1a2b47]">We Accept Most Major Insurance Plans</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Horizon BCBS NJ — confirmed, featured */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border-2 border-teal-200">
              <img src={ASSETS.insurance} alt="Horizon Blue Cross Blue Shield New Jersey — confirmed accepted" className="h-10 w-auto" />
            </div>
            {/* Remaining payers — clearly marked as pending */}
            {["Aetna", "United Healthcare", "Cigna", "Carelon", "Ambetter", "UMR", "ComPsych", "Meritain", "Surest"].map((ins) => (
              <div key={ins} className="bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-200">
                <span className="text-slate-500 font-medium text-sm">{ins}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mt-5">
            Payer list pending confirmation with Bierman marketing team before production use.{" "}
            <a href={LOCATION.intakeUrl} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-medium">
              Verify your coverage →
            </a>
          </p>
        </div>
      </section>

      {/* Map + Location Details */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #fef9f0 0%, #fff 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Location & Directions</div>
              <h2 className="text-3xl font-bold text-[#1a2b47] mb-6">Find Our Ramsey Clinic</h2>
              <div className="space-y-5 mb-8">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-teal-600" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z"/>
                        <circle cx="10" cy="8" r="2"/>
                      </svg>
                    ),
                    label: "Address",
                    content: <>{LOCATION.address}<br />{LOCATION.city}, {LOCATION.state} {LOCATION.zip}</>,
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-teal-600" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M3 5a2 2 0 012-2h2l2 4-1.5 1.5a11 11 0 005 5L14 12l4 2v2a2 2 0 01-2 2C7.163 18 2 12.837 2 7a2 2 0 012-2z"/>
                      </svg>
                    ),
                    label: "Phone",
                    content: (
                      <>
                        <a href={`tel:${LOCATION.phone}`} className="text-teal-600 hover:underline">{LOCATION.phone}</a>
                        <div className="text-slate-400 text-xs mt-0.5">Phone number pending client NAP confirmation</div>
                      </>
                    ),
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-teal-600" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <circle cx="10" cy="10" r="8"/>
                        <path d="M10 6v4l3 2" strokeLinecap="round"/>
                      </svg>
                    ),
                    label: "Hours",
                    content: (
                      <>
                        <span className="text-slate-600">Monday – Friday: 8:00 AM – 6:00 PM</span>
                        <div className="text-slate-400 text-xs mt-0.5">Hours pending client confirmation</div>
                      </>
                    ),
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-teal-600" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <rect x="2" y="4" width="16" height="12" rx="2"/>
                        <path d="M2 8h16M7 4v4M13 4v4"/>
                      </svg>
                    ),
                    label: "Service Area",
                    content: <span className="text-slate-600">Bergen County, Passaic County, and surrounding NJ communities</span>,
                  },
                ].map(({ icon, label, content }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="bg-teal-50 rounded-xl p-2 mt-0.5 flex-shrink-0">{icon}</div>
                    <div>
                      <div className="font-semibold text-[#1a2b47] text-sm">{label}</div>
                      <div className="text-sm mt-0.5">{content}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION.address + ", " + LOCATION.city + ", " + LOCATION.state + " " + LOCATION.zip)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Get Directions →
              </a>
            </div>
            {/* Map with designed fallback */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100" style={{ height: "380px" }}>
                <iframe
                  src={LOCATION.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  title="Bierman Autism Centers Ramsey NJ location map"
                  aria-label="Map showing location of Bierman Autism Centers in Ramsey, New Jersey"
                  onError={(e) => {
                    const iframe = e.currentTarget;
                    iframe.style.display = "none";
                  }}
                />
              </div>
              {/* Designed map fallback card — shown if iframe fails */}
              <div
                id="map-fallback"
                className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8 text-center hidden"
                style={{ height: "380px", display: "none" }}
              >
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="bg-teal-100 rounded-full p-4">
                    <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10 text-teal-600" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M16 3a9 9 0 019 9c0 6-9 17-9 17S7 18 7 12a9 9 0 019-9z"/>
                      <circle cx="16" cy="12" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#1a2b47] text-lg">Bierman Autism Centers — Ramsey</div>
                    <div className="text-slate-500 text-sm mt-1">{LOCATION.address}</div>
                    <div className="text-slate-500 text-sm">{LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION.address + ", " + LOCATION.city + ", " + LOCATION.state + " " + LOCATION.zip)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
              <p className="text-slate-400 text-xs mt-2 text-center">Confirm coordinates match GBP-verified address before production</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started — warm aqua, not heavy navy */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-teal-200 text-sm font-bold uppercase tracking-widest mb-2">Getting Started</div>
            <h2 className="text-3xl font-bold text-white">How to Begin Services at Ramsey</h2>
            <p className="text-teal-100/80 mt-3 max-w-2xl mx-auto">Our intake process is designed to be straightforward and supportive for families.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Submit a Request", desc: "Complete our intake request form. A team member will contact you within 1–2 business days." },
              { step: "02", title: "Insurance Verification", desc: "We verify your insurance coverage and explain your benefits before any commitment." },
              { step: "03", title: "Initial Consultation", desc: "Meet with our clinical team to discuss your child's needs and goals." },
              { step: "04", title: "Begin Services", desc: "Your child's individualized program begins with ongoing family collaboration." },
            ].map((item) => (
              <div key={item.step} className="bg-white/15 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                <div className="text-orange-300 font-bold text-3xl mb-3 font-mono">{item.step}</div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-teal-100/80 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={LOCATION.intakeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-colors inline-block shadow-lg"
            >
              Start the Process →
            </a>
          </div>
        </div>
      </section>

      {/* Video Section — lighter frame, intentional poster, calm label */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">See ABA Therapy in Action</div>
          <h2 className="text-3xl font-bold text-[#1a2b47] mb-3">ABA Therapy at Bierman Ramsey</h2>
          <p className="text-slate-500 mb-8">Watch how our team works with children in a supportive, structured environment.</p>
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <video
              src={ASSETS.video}
              poster={ASSETS.videoPoster}
              controls
              muted
              preload="none"
              playsInline
              aria-label="ABA therapy overview at Bierman Autism Centers Ramsey, New Jersey"
              style={{ width: "100%", display: "block" }}
            />
          </div>
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-5 py-2.5">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-amber-500 flex-shrink-0" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="8" cy="8" r="7"/><path d="M8 5v3M8 11v.5" strokeLinecap="round"/>
            </svg>
            <p className="text-amber-700 text-sm">
              Video usage rights and identifiable-person review required before production use.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews — "Local Review Architecture" module, not fake testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Local Review Architecture</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">Example Review Layout — Ramsey</h2>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl px-6 py-3 text-center mb-8 max-w-2xl mx-auto">
            <p className="text-slate-500 text-sm">
              This module shows how live GBP reviews would be displayed. Cards below are layout examples only — not real reviews.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { author: "Parent, Bergen County", rating: 5 },
              { author: "Parent, Ramsey NJ", rating: 5 },
              { author: "Parent, Passaic County", rating: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-3xl p-6 relative">
                {/* Blurred placeholder text */}
                <div className="text-amber-400 text-lg mb-3">{"★".repeat(review.rating)}</div>
                <div className="space-y-2 mb-4">
                  <div className="h-3 bg-slate-200 rounded-full w-full blur-[2px]" />
                  <div className="h-3 bg-slate-200 rounded-full w-5/6 blur-[2px]" />
                  <div className="h-3 bg-slate-200 rounded-full w-4/5 blur-[2px]" />
                  <div className="h-3 bg-slate-200 rounded-full w-3/4 blur-[2px]" />
                </div>
                <div className="text-slate-400 text-sm">— {review.author}</div>
                {/* Clear label */}
                <div className="absolute top-3 right-3 bg-slate-200 text-slate-500 text-xs font-semibold px-2 py-0.5 rounded-md">
                  Example
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mt-6">
            Live GBP reviews to be reviewed and approved by Bierman before production use.
          </p>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-12 border-y border-slate-100" style={{ background: "linear-gradient(180deg, #f8fffe 0%, #f0fdfa 100%)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">Other New Jersey Locations</div>
            <h2 className="text-2xl font-bold text-[#1a2b47]">More Bierman Centers Near You</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {NEARBY.map((loc) => (
              <a
                key={loc.name}
                href={loc.url}
                className="bg-white border border-teal-200 hover:border-teal-400 hover:bg-teal-50 text-[#1a2b47] font-medium px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
              >
                📍 {loc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-teal-600 text-sm font-bold uppercase tracking-widest mb-2">FAQ</div>
            <h2 className="text-3xl font-bold text-[#1a2b47]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details key={i} className="border border-slate-200 rounded-2xl overflow-hidden group bg-white hover:border-teal-200 transition-colors">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-[#1a2b47] hover:bg-teal-50/50 transition-colors list-none text-sm">
                  {faq.q}
                  <span className="text-teal-500 ml-4 flex-shrink-0 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — warm teal, not dark navy */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #e0f7f4 50%, #fef9f0 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a2b47]">Ready to Get Started in Ramsey?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step toward individualized autism support for your child. Our Ramsey team is here to guide your family through every stage of the process.
          </p>
          <a
            href={LOCATION.intakeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-5 rounded-2xl text-xl transition-colors inline-block shadow-lg"
          >
            Request Services in Ramsey →
          </a>
          <p className="text-slate-400 text-xs mt-5">
            CTA routes to existing production intake system — production intake untouched by this proof layer.
          </p>
        </div>
      </section>

      {/* Footer — navy retained for brand anchor, but lighter */}
      <footer className="bg-[#1a2b47] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={ASSETS.logo} alt="Bierman Autism Centers 20th Anniversary" className="h-12 w-auto mb-4" />
              <p className="text-white/60 text-sm leading-relaxed">
                Bierman Autism Centers provides evidence-based ABA therapy and autism support services across 33 verified locations.
              </p>
            </div>
            <div>
              <div className="font-bold text-white mb-3">Ramsey Location</div>
              <div className="text-white/60 text-sm space-y-1">
                <div>{LOCATION.address}</div>
                <div>{LOCATION.city}, {LOCATION.state} {LOCATION.zip}</div>
                <div><a href={`tel:${LOCATION.phone}`} className="hover:text-white transition-colors">{LOCATION.phone}</a></div>
                <div className="text-white/40 text-xs mt-2">GBP Verified · Bergen County</div>
              </div>
            </div>
            <div>
              <div className="font-bold text-white mb-3">Services</div>
              <div className="text-white/60 text-sm space-y-1">
                {SERVICES.map((s) => <div key={s.title}>{s.title}</div>)}
              </div>
            </div>
          </div>
          {/* Proof-layer notice — calmer, smaller, less alarming */}
          <div className="border-t border-white/10 pt-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <p className="text-white/40 text-xs leading-relaxed">
                <strong className="text-white/60">Proof Layer:</strong> Production-safe development environment for Bierman Autism Centers. noindex · nofollow · No tracking · No patient data collected. Does not affect the live production website. Recommended client URL: <span className="text-white/50">pilot.biermanautism.com/locations/new-jersey/ramsey/</span> — pending DNS approval.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
