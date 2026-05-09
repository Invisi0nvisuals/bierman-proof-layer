# Bierman Autism Centers — Location Page Confirmation Questions

**Prepared by:** SEO Strategy Team  
**Date:** May 2026  
**Purpose:** Confirm key location data before deploying the new location page architecture to production.

These questions are grouped by category and prioritized. Items marked **Critical** are blocking — we cannot build or deploy the affected location page until they are resolved. Items marked **High** affect content accuracy across multiple locations. Items marked **Standard** are important but not blocking.

Please reply with answers inline, or schedule a 30-minute call to walk through them together.

---

## Section 1 — Phone Numbers

### Critical: Ramsey, NJ

We have three different phone numbers appearing across our source documents for the Ramsey location:

- `(201) 596-8104`
- `(201) 308-3735`
- `(201) 928-5245`

**Question:** What is the correct, canonical phone number for the Ramsey front desk? The fastest way to confirm is to call the front desk directly or check the Google Business Profile while logged in as the account owner.

---

### Critical: Piscataway, NJ

We have two different phone numbers for Piscataway:

- `(732) 426-5470`
- `(732) 479-7225`

**Question:** What is the correct phone number for the Piscataway location?

---

### High: All Other Locations

For the remaining locations in the network, we will use the phone number listed on each Google Business Profile as the canonical value unless you tell us otherwise.

**Question:** Are there any locations where the GBP phone number is incorrect or outdated? If so, please list the location name and the correct number.

---

## Section 2 — Addresses

### Critical: Piscataway, NJ

We have two different street addresses for Piscataway:

- `200 Centennial Ave`
- `280 Centennial Ave`

**Question:** What is the correct street address for the Piscataway location? Please include suite number if applicable.

---

## Section 3 — Location Count and Status

### High: How many locations does Bierman currently operate?

Our source data shows 33 verified Google Business Profile listings, but we want to confirm the number you use in client-facing communications (website, marketing materials, etc.).

**Question:** Is the canonical client-facing location count 32, 33, or a different number?

---

### High: Avon or Avondale — which city, which state?

One location in our matrix appears as both "Avon" and "Avondale" in different documents. These are different cities in different states.

**Question:** What is the correct city name and state for this location? Please check the GBP profile to confirm.

---

### High: Brooklyn Park — active, planned, or closed?

We are uncertain whether the Brooklyn Park location is currently active, in a soft-launch phase, or closed.

**Question:** What is the current status of the Brooklyn Park location?

---

### High: Broad Ripple (Indianapolis area) — duplicate GBP profiles

The Broad Ripple location appears to have two separate Google Business Profile listings. Duplicate profiles split review equity and can suppress local rankings.

**Question:** Which GBP profile is the canonical one for Broad Ripple? We recommend marking the duplicate as such in Google Business Profile. Can you confirm which profile to keep?

---

## Section 4 — Content Usage Approval

### High: Team Headshots

We are using headshots for Hillary Genovese (Clinical Director, BCBA) and Victoria Verdun (BCBA) on the Ramsey location page.

**Question:** Do both team members consent to their headshots being used on the website? Please confirm before we deploy to production.

---

### High: Location Overview Video

We have embedded the Ramsey ABA therapy overview video on the proof layer page.

**Question:** Is this video approved for use on the location page? Are there any content or licensing restrictions we should be aware of?

---

### High: Google Reviews

We are displaying 6 public Google reviews on the Ramsey page. All 6 are publicly visible on Google Maps. The reviewers are: Ambar Arias, Sohayb Stiti, Kim Sedlacek, Margarita Morales, Anthony Siciliano, and Nancy Passano.

**Question:** Is it approved to display these reviews on the location page? If any review should be excluded, please let us know which one and why.

---

## Section 5 — Insurance

### High: Ramsey Insurance List

The Ramsey page currently lists the following accepted insurance plans: Aetna, Cigna, United Healthcare, Horizon Blue Cross Blue Shield of NJ, AmeriHealth NJ, Oxford Health, Tricare, NJ Medicaid, and Magellan Health.

**Question:** Is this list accurate and complete for the Ramsey location?

---

### High: Insurance Varies by Location?

**Question:** Does the accepted insurance list vary by location, or is it consistent across the network? If it varies, please provide the correct list for each location, or flag the locations where the list differs from Ramsey.

---

## Section 6 — Hours

### Standard: Ramsey Operating Hours

The Ramsey page currently shows: Monday–Friday 8:00 AM–6:00 PM, Saturday–Sunday Closed.

**Question:** Are these hours current and accurate for Ramsey?

---

### Standard: Hours Vary by Location?

**Question:** Do operating hours vary by location? If so, please provide the correct hours for each location, or confirm that all locations use the same schedule.

---

## Section 7 — Clinical Leadership

### Standard: Current Clinical Leaders at Ramsey

The Ramsey page features Hillary Genovese (Clinical Director, BCBA) and Victoria Verdun (BCBA).

**Question:** Are their names, titles, and credentials current and accurate?

---

### Standard: Clinical Profiles on All Location Pages?

**Question:** Should every location page feature 1–2 BCBA clinical leader profiles, or is this approach limited to specific locations?

---

## Section 8 — Pilot and Production Decisions

### Standard: Pilot Subdomain Interest

We can deploy the Ramsey and Piscataway pages to a subdomain (e.g., `pilot.biermanautism.com`) for live testing before any changes are made to the main website. This would allow your team and the agency to review the new architecture in a real environment.

**Question:** Is there interest in a pilot subdomain? If yes, who manages DNS for biermanautism.com, and what is the approval process for creating a new subdomain?

---

### Standard: Future Production Migration

**Question:** Is there interest in eventually migrating the main biermanautism.com location pages to the new architecture? This is not a near-term decision — it would require a planned redirect strategy and coordination with the current agency. We just want to understand the direction.

---

## Summary — Critical Items Only

If you only have time to answer three questions right now, these are the ones that are blocking the next build:

| # | Question | Why It's Blocking |
|---|---|---|
| 1 | What is the correct phone number for Ramsey? | Phone appears in 5 places on the page and in schema. Wrong number = NAP error. |
| 2 | What is the correct phone number for Piscataway? | Cannot build the Piscataway page without a confirmed phone. |
| 3 | What is the correct street address for Piscataway? | Cannot build the Piscataway page without a confirmed address. |

Everything else can follow in a second round. Thank you.
