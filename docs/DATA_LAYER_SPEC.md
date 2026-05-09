# Data Layer Specification
## Bierman Autism Centers — Proof Layer

**Last updated:** May 2026  
**Status:** Specification only — not implemented in proof layer

---

## Overview

This document specifies a safe, privacy-conscious event tracking taxonomy for future implementation on Bierman location pages. The proof layer does not implement any tracking. This specification exists to document what a production tracking implementation should look like — and, critically, what it must never include.

The taxonomy is designed for implementation via Google Tag Manager with GA4 as the analytics destination. All events are behavioral (user interactions), not transactional (form submissions, intake completions). No PHI or PII is collected, stored, or transmitted.

---

## Guiding Principles

1. **Behavioral signals only.** Track what users do on the page, not who they are.
2. **Location context, not user context.** Every event includes location identifiers, not user identifiers.
3. **No form field values.** Never capture the contents of any form field.
4. **No diagnosis or treatment data.** Never capture any clinical information.
5. **No precise location.** Never capture GPS coordinates or IP-derived location beyond city/state.
6. **Explicit disallow list.** Any parameter not on the allowed list is disallowed by default.

---

## Allowed Events

| Event Name | Trigger | Purpose |
|---|---|---|
| `request_services_click` | User clicks any "Request Services" CTA | Measure intake intent by CTA location |
| `phone_click` | User clicks the phone number link | Measure phone call intent |
| `directions_click` | User clicks any directions link or map | Measure local action intent |
| `insurance_verify_click` | User clicks the insurance verification CTA | Measure insurance-related intent |
| `video_play` | User plays the location overview video | Measure video engagement |
| `resource_link_click` | User clicks a caregiver education resource link | Measure educational content engagement |
| `faq_expand` | User expands an FAQ item | Measure FAQ engagement and question interest |
| `nearby_location_click` | User clicks a nearby location link | Measure cross-location navigation |
| `review_read_more_click` | User clicks "Read more" on a truncated review | Measure review engagement |

---

## Allowed Parameters

These parameters may be included in any event payload:

| Parameter | Type | Example | Description |
|---|---|---|---|
| `location_name` | string | `"Bierman Autism Centers — Ramsey"` | Full location display name |
| `location_slug` | string | `"ramsey"` | URL-safe location identifier |
| `city` | string | `"Ramsey"` | City name |
| `state` | string | `"NJ"` | State abbreviation |
| `cta_location` | string | `"hero"`, `"nav"`, `"footer"` | Where on the page the CTA appeared |
| `service_type` | string | `"aba-therapy"` | Service slug if event is service-related |
| `resource_type` | string | `"insurance-guide"` | Resource category if event is resource-related |
| `faq_question` | string | `"Does Bierman accept Medicaid?"` | The FAQ question text (not user input) |
| `map_provider` | string | `"google"` | Map provider for directions events |
| `review_source` | string | `"google"` | Review platform for review events |

---

## Disallowed Parameters

The following parameters must **never** appear in any data layer event, GA4 event, GTM variable, or analytics payload:

| Parameter | Reason |
|---|---|
| `name` | PII — user's name |
| `email` | PII — user's email address |
| `phone` | PII — user's phone number |
| `child_name` | PII — child's name |
| `diagnosis` | PHI — clinical diagnosis information |
| `insurance_details` | PHI — insurance plan, member ID, group number |
| `free_text_form_values` | Any free-text field content (message, notes, etc.) |
| `message_fields` | Any message or inquiry field content |
| `precise_user_location` | GPS coordinates, IP-derived precise location |
| Any form field value | All form field values are disallowed by default |

---

## GTM Implementation Notes

When implementing this taxonomy in GTM:

1. **Use a `dataLayer.push()` pattern** for all custom events. Do not use auto-event tracking for intake form fields.
2. **Create a GTM variable for `location_slug`** that reads from a page-level data attribute or meta tag. Do not hardcode location values in GTM tags.
3. **Use GA4 event tags** — not Universal Analytics. All events should use the GA4 event tag type.
4. **Block form field capture.** Ensure no GTM trigger or variable captures the value of any form input, textarea, or select element.
5. **Test in GTM Preview mode** before publishing. Verify that no disallowed parameters appear in the event payload.
6. **Document all GTM tags, triggers, and variables** in a GTM container audit document.

---

## GA4 Implementation Notes

1. **Create a GA4 property for the proof layer** (separate from the production biermanautism.com property) if tracking is ever enabled on the proof layer.
2. **Do not share the production GA4 property** with the proof layer. The proof layer is a test environment and should not pollute production analytics data.
3. **Use GA4 custom dimensions** for `location_slug`, `city`, and `state` to enable location-level filtering in reports.
4. **Do not enable Google Signals** on the proof layer property. Google Signals enables cross-device tracking and demographic data collection, which is not appropriate for a healthcare provider proof environment.
5. **Set data retention to 2 months** on the proof layer property. This limits the duration of any behavioral data collected during testing.

---

## Privacy Guardrails Summary

| Guardrail | Status |
|---|---|
| No GTM on proof layer | ✅ Enforced |
| No GA4 on proof layer | ✅ Enforced |
| No Meta Pixel on proof layer | ✅ Enforced |
| No CallRail on proof layer | ✅ Enforced |
| No form field capture | ✅ Enforced (no live forms) |
| No PHI/PII parameters | ✅ Enforced (no tracking at all) |
| No patient data collection | ✅ Enforced |
| Data layer spec documented | ✅ This document |
| Production tracking unchanged | ✅ Confirmed |
