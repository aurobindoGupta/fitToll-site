# Apple Support Follow-up — FamilyControls Distribution Entitlement

> **RESOLVED — 2026-04-08.** FamilyControls Distribution entitlement was approved by Apple on the morning of 2026-04-08, before this email was ever sent. This draft is retained for historical reference only. **Do not send.** The canonical URL for FitToll's public documentation is now `https://fittoll.com` (custom domain on GitHub Pages, replacing the `aurobindogupta.github.io/fitToll-site/` URLs referenced below).

**Drafted:** 2026-04-07
**Purpose:** Status request + URL correction for FamilyControls Distribution entitlement submission
**Sent via:** Never sent — entitlement approved before dispatch
**Status:** Obsolete — retained for record

---

## Subject line

```
FamilyControls Distribution Entitlement — Status Request and URL Correction — Team FAKFA6F6L3 — FitToll
```

---

## Email body

```
Hello Apple Developer Support,

I am writing to follow up on a FamilyControls Distribution Entitlement
request I submitted recently for my iOS app, "FitToll". I have two
reasons for contacting you:

  1. To request a status update on the entitlement review.
  2. To correct a GitHub URL I may have entered incorrectly in my
     original submission.

Submission details
------------------
  Apple Developer Team ID:  FAKFA6F6L3
  App name (public brand):  FitToll
  Bundle ID (main app):     com.pandascrollblocker.app
  Extension bundle IDs:
      com.pandascrollblocker.app.ShieldConfigurationExtension
      com.pandascrollblocker.app.ShieldActionExtension
      com.pandascrollblocker.app.DeviceActivityMonitorExtension
  Entitlement requested:    com.apple.developer.family-controls
                            (Distribution)
  Submission form:          https://developer.apple.com/contact/request/
                            family-controls-distribution
  Approximate submission date: 05 April 2026

A note on naming: the bundle ID prefix "com.pandascrollblocker" reflects
the app's earlier working name. The current public-facing brand is
"FitToll". The functionality, developer team, and Apple Developer
account are unchanged.


1. Status request
-----------------

Could you please confirm whether my submission has been received and is
currently under review, and if possible provide an estimated timeline
for a decision? I want to make sure the request is in the queue and has
not been blocked due to incomplete or incorrect information from my
side.


2. URL correction
-----------------

I am concerned that the URL I provided in my original submission may
have contained a spelling error or incorrect casing. The correct,
definitive URLs for FitToll's public documentation are:

  Documentation site (GitHub Pages — public, render as HTML):
    https://aurobindogupta.github.io/fitToll-site/

  Privacy Policy:
    https://aurobindogupta.github.io/fitToll-site/privacy-policy.html

  Terms of Use:
    https://aurobindogupta.github.io/fitToll-site/terms-of-use.html

  Source repository (for reference only; use the Pages URLs above for
  any link a reviewer or user will visit):
    https://github.com/aurobindoGupta/fitToll-site

Please note the casing: the repository name is "fitToll-site" with a
capital "T" in the second word. If the URL on file with my submission
uses different casing (for example "fittoll-site" all lowercase) or
points to a github.com /blob/ URL instead of the GitHub Pages URL
above, please consider this email an authoritative correction and
update accordingly. The Privacy Policy URL listed above is the
canonical, public-facing URL for FitToll's privacy disclosures.


Brief description of the app
----------------------------

FitToll is an exercise-gated screen-time management app for iOS. When a
user opens an app they have chosen to block, FitToll requires them to
complete camera-verified physical exercises (push-ups or squats) before
the blocked app unlocks for a user-configured duration. Pose estimation
runs entirely on-device using the Apple Vision framework
(VNDetectHumanBodyPoseRequest). No video, image, or pose data leaves
the user's device.

The FamilyControls, ManagedSettings, and DeviceActivity APIs are used
to apply shields to user-selected apps, respond to shield actions, and
re-block apps when the unlock window expires. The use of FamilyControls
is core to the product — without the entitlement, the iOS version of
the app cannot ship.

Thank you for your time. Please let me know if you need any additional
information, screenshots, a demo build, or clarification from my side
to complete the review.

Best regards,
Aurobindo Gupta
Apple Developer Team: FAKFA6F6L3
Email: aurogpt10@gmail.com
```

---

## Sending notes

### Recommended channels (in order of reliability)

1. **Reply to the original confirmation email** from when you submitted the FamilyControls Distribution form. Apple uses email thread context to track cases, so replying preserves the case ID and increases the chance a human reads it instead of an auto-router. Search your inbox for replies from `developer@apple.com`, `noreply@email.apple.com`, or `appstoreconnect@apple.com`. **This is the most reliable option.**

2. **https://developer.apple.com/contact/** → "Membership and Account" → look for an "App Entitlements" or "Special Entitlements" sub-option. Paste the email body into the description field. Use the Subject line above (or the first ~80 characters of it) as the Subject.

3. **https://developer.apple.com/contact/** → "Certificates, Identifiers, and Provisioning Profiles" subtopic. This is a plausible route since entitlements are conceptually related to provisioning profiles, but it is generally for issues with cert/profile generation rather than special-entitlement approvals. Apple may internally re-route the request anyway.

4. **Re-submit via the dedicated form** https://developer.apple.com/contact/request/family-controls-distribution noting in the description that this is a follow-up to a prior submission and including the same correction information. Use only as a last resort if no email thread or contact-form route works.

### Before sending — checklist

- [ ] Fill in the approximate submission date
- [ ] Send from the email tied to your Apple Developer account
- [ ] If you remember the specific bad URL from the original submission, add a sentence above the corrected URL: _"I believe I may have entered the URL as `<wrong version>`, which is incorrect."_ This helps the reviewer locate the original case faster.
- [ ] Save a copy of the actual sent message (forward to yourself or screenshot the contact form submission confirmation)

### After sending

- Wait at least **3 weeks** before any follow-up. Multiple pings push your case to the back of the queue, not the front.
- Watch the inbox tied to your Apple Developer account for replies from `developer@apple.com`, `noreply@email.apple.com`, or `appstoreconnect@apple.com`. Check spam / promotions / updates folders too — Apple's notifications often land there.
- The fastest empirical signal that the entitlement is approved is to attempt a TestFlight Archive → Upload. If validation succeeds, the entitlement is live. If it fails on `Missing entitlement`, still waiting.
