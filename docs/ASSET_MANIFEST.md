# Asset Manifest
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026

---

## Overview

All assets in the proof layer are served from the Manus CDN (`/manus-storage/` paths). No local binary assets are stored in the project directory. This document catalogs every asset used in the proof layer, including CDN path, dimensions, alt text, schema usage, and approval status.

---

## Naming Conventions

| Asset Type | Pattern | Example |
|---|---|---|
| OG image | `bierman-{location}-og-{variant}_{hash}.png` | `bierman-ramsey-og-final_a86c4957.png` |
| Facility photo | `bierman-{location}-{descriptor}_{hash}.jpg` | `bierman-ramsey-facility_b1c2d3e4.jpg` |
| Service image | `bierman-{service-slug}_{hash}.jpg` | `bierman-speech-therapy_f5g6h7i8.jpg` |
| Team headshot | `bierman-team-{name-slug}_{hash}.jpg` | `bierman-team-hillary-genovese_j9k0l1m2.jpg` |
| Insurance logo | `insurance-{carrier-slug}_{hash}.png` | `insurance-aetna_n3o4p5q6.png` |
| Theme card | `bierman-theme-{descriptor}_{hash}.png` | `bierman-theme-bcba-guidance_r7s8t9u0.png` |
| Trust badge | `badge-{descriptor}_{hash}.png` | `badge-group-of-year-2022_v1w2x3y4.png` |

---

## Brand Assets

| Asset | CDN Path | Dimensions | Alt Text | Schema | Approval |
|---|---|---|---|---|---|
| Bierman 20th anniversary logo | `/manus-storage/bierman-logo-20th_*.png` | 200×60 | "Bierman Autism Centers 20th Anniversary" | `Organization.logo` | ✅ Public |
| BACB ACE badge | `/manus-storage/badge-bacb-ace_*.png` | 120×60 | "BACB Approved Continuing Education Provider" | — | ✅ Public |
| CASP badge | `/manus-storage/badge-casp_*.png` | 120×60 | "Council of Autism Service Providers member" | — | ✅ Public |
| Group of the Year 2022 badge | `/manus-storage/badge-group-of-year-2022_*.png` | 120×60 | "Behavioral Health Group of the Year 2022" | — | ✅ Public |

---

## OG / Social Image

| Asset | CDN Path | Dimensions | Alt Text | Schema | Approval |
|---|---|---|---|---|---|
| Ramsey OG image | `/manus-storage/bierman-ramsey-og-final_a86c4957.png` | 1731×909 | "ABA Therapy in Ramsey, NJ — Bierman Autism Centers, Bergen County" | `og:image` | ✅ Generated |

---

## Facility Photos

| Asset | CDN Path | Dimensions | Alt Text | Schema | Approval |
|---|---|---|---|---|---|
| Ramsey facility exterior | `/manus-storage/bierman-ramsey-facility_*.jpg` | 1200×800 | "Bierman Autism Centers Ramsey NJ facility exterior" | `ImageObject` | ⚠️ Needs Bierman approval |
| Speech therapy room | `/manus-storage/bierman-speech-room_*.jpg` | 1200×800 | "Speech therapy room at Bierman Autism Centers Ramsey" | — | ⚠️ Needs Bierman approval |
| NJ Penguin mascot | `/manus-storage/bierman-nj-penguin_*.png` | 400×400 | "Bierman Autism Centers NJ mascot" | — | ⚠️ Needs Bierman approval |

---

## Service Card Images (AI-Generated Theme Cards)

| Asset | CDN Path | Dimensions | Alt Text | Schema | Approval |
|---|---|---|---|---|---|
| BCBA Guidance theme card | `/manus-storage/bierman-theme-bcba-guidance_*.png` | 800×600 | "BCBA-guided ABA therapy at Bierman Autism Centers" | `ImageObject` | ✅ AI-generated |
| Family Partnership theme card | `/manus-storage/bierman-theme-family-partnership_*.png` | 800×600 | "Family partnership approach at Bierman Autism Centers" | `ImageObject` | ✅ AI-generated |
| Progress-Focused theme card | `/manus-storage/bierman-theme-progress-focused_*.png` | 800×600 | "Progress-focused therapy outcomes at Bierman Autism Centers" | `ImageObject` | ✅ AI-generated |

---

## Team Headshots

| Asset | CDN Path | Dimensions | Alt Text | Schema | Approval |
|---|---|---|---|---|---|
| Hillary Genovese headshot | `/manus-storage/bierman-team-hillary-genovese_*.jpg` | 400×400 | "Hillary Genovese, Clinical Director, BCBA — Bierman Autism Centers Ramsey" | `Person.image` | ⚠️ Needs Bierman approval |
| Victoria Verdun headshot | `/manus-storage/bierman-team-victoria-verdun_*.jpg` | 400×400 | "Victoria Verdun, BCBA — Bierman Autism Centers Ramsey" | `Person.image` | ⚠️ Needs Bierman approval |

---

## Video Assets

| Asset | CDN Path / URL | Format | Alt Text | Schema | Approval |
|---|---|---|---|---|---|
| Ramsey ABA therapy overview video | YouTube embed | MP4/YouTube | "ABA therapy overview at Bierman Autism Centers Ramsey NJ" | `VideoObject` | ⚠️ Needs Bierman approval |
| Video poster/thumbnail | `/manus-storage/bierman-ramsey-video-poster_*.jpg` | JPG | "ABA therapy video — Bierman Autism Centers Ramsey" | `VideoObject.thumbnailUrl` | ⚠️ Needs Bierman approval |

---

## Insurance Logos

| Carrier | CDN Path | Dimensions | Alt Text | Schema | Approval |
|---|---|---|---|---|---|
| Aetna | `/manus-storage/insurance-aetna_*.png` | 160×60 | "Aetna insurance accepted" | — | ✅ Public brand |
| Cigna | `/manus-storage/insurance-cigna_*.png` | 160×60 | "Cigna insurance accepted" | — | ✅ Public brand |
| United Healthcare | `/manus-storage/insurance-united-healthcare_*.png` | 160×60 | "United Healthcare insurance accepted" | — | ✅ Public brand |
| Horizon BCBS NJ | `/manus-storage/insurance-horizon-bcbs-nj_*.png` | 160×60 | "Horizon Blue Cross Blue Shield of NJ accepted" | — | ✅ Public brand |
| AmeriHealth NJ | `/manus-storage/insurance-amerihealth-nj_*.png` | 160×60 | "AmeriHealth NJ insurance accepted" | — | ✅ Public brand |
| Oxford Health | `/manus-storage/insurance-oxford-health_*.png` | 160×60 | "Oxford Health insurance accepted" | — | ✅ Public brand |
| Tricare | `/manus-storage/insurance-tricare_*.png` | 160×60 | "Tricare insurance accepted" | — | ✅ Public brand |
| Medicaid NJ | `/manus-storage/insurance-medicaid-nj_*.png` | 160×60 | "NJ Medicaid accepted" | — | ✅ Public brand |
| Magellan Health | `/manus-storage/insurance-magellan_*.png` | 160×60 | "Magellan Health insurance accepted" | — | ✅ Public brand |

---

## Approval-Needed Assets Summary

The following assets require explicit Bierman approval before production deployment:

| Asset | Reason |
|---|---|
| Facility photos | May be from GBP; ownership and usage rights need confirmation |
| Team headshots | Employee image usage requires HR/employee consent |
| Video | Usage rights and content approval needed |
| GBP reviews | Brand approval for featuring specific reviews |

---

## Image SEO Notes

- All images must have descriptive `alt` text that includes the location name and service type where relevant
- All `ImageObject` schema nodes must have `contentUrl`, `url`, `caption`, and `description`
- OG image must be 1200×630 minimum (current: 1731×909 — compliant)
- All images must be served from HTTPS
- All images must load within 2 seconds on a standard connection (CDN delivery meets this requirement)
