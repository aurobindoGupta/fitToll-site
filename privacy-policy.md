---
layout: page
title: Privacy Policy
eyebrow: Legal
last_updated: April 24, 2026
---

## Introduction

Welcome to FitToll. We built this app to help you break doom-scrolling habits through real physical exercise. Your privacy matters to us, and we designed FitToll with a privacy-first approach. This Privacy Policy explains what data we collect, how we use it, and your rights.

## Who We Are

FitToll is developed and maintained by Aurobindo Gupta ("we", "us", "our"). If you have questions about this policy, you can reach us at aurogpt10@gmail.com.

## Data We Collect

### Information You Provide

- **Account Information:** When you create an account, we collect your email address and display name through our authentication providers (Sign in with Google, Sign in with Apple, Facebook Login, or email/password). This information is used solely for account creation and login.

- **App Preferences:** Your settings, such as which apps you choose to block, exercise difficulty level, and unlock duration. These preferences are stored locally on your device.

### Information Collected Automatically

- **Exercise Session Data:** When you complete exercises, we record basic session data such as exercise type, number of repetitions completed, and session duration. This data is stored locally on your device.

- **Streak and Statistics:** Your exercise streaks and usage statistics are calculated and stored locally on your device.

### Information We Do NOT Collect

- **Camera Data:** FitToll uses your device camera to verify exercises through on-device pose estimation. Camera frames are processed entirely on your device using Apple Vision (iOS) or ML Kit (Android). No images, video, or pose data is ever transmitted, stored, or sent to any server. Camera data exists only in memory during active exercise sessions and is immediately discarded after processing.

- **App Usage Data Beyond Blocking:** We do not track, log, or monitor which apps you use, how long you use them, or your browsing habits. The app blocking feature only detects when a blocked app is opened — it does not record or transmit this information.

- **Location Data:** We do not collect your location.

- **Contacts or Address Book:** We do not access your contacts.

- **Health Data:** While FitToll involves physical exercise, we do not integrate with Apple Health, Google Fit, or any health data platform.

- **Analytics or Tracking:** We do not use third-party behavioral analytics SDKs (such as Google Analytics, Mixpanel, or Amplitude), advertising SDKs, or cross-app tracking tools. Firebase Analytics is included on Android only as a transitive dependency of Firebase Crashlytics (for crash breadcrumbs); we do not collect or consume any behavioral analytics data. RevenueCat (used for subscription billing) collects standard device metadata necessary for entitlement management — see the Third-Party Services section below for the full disclosure. We use Firebase Crashlytics for crash diagnostics — see the Crashlytics section below.

## How We Use Your Data

We use the data we collect for the following purposes only:

1. **Account Management:** To create and maintain your account, and to authenticate you when you sign in.

2. **App Functionality:** To remember your preferences (blocked apps, exercise settings) and to track your exercise progress and streaks.

3. **Exercise Verification:** To verify that exercises are performed correctly using on-device pose estimation. This processing happens entirely on your device.

## Data Storage and Security

### Local Storage

The majority of your data is stored locally on your device using platform-native secure storage mechanisms:

- **iOS:** Data is stored using iOS DataStore and Keychain where appropriate.
- **Android:** Data is stored using Android DataStore and encrypted shared preferences where appropriate.

### Firebase Authentication

Your authentication credentials (email, authentication tokens) are managed by Firebase Authentication, a Google service. Firebase Authentication data is governed by [Google's Privacy Policy](https://policies.google.com/privacy). We use Firebase Authentication for login, Firebase Cloud Functions for promo code validation and trial entitlement, and Firebase Crashlytics for crash diagnostics (see the Crashlytics section below for full disclosure).

### Firebase Crashlytics

We use **Firebase Crashlytics** (a crash-reporting service from Google) to detect and diagnose app crashes. Crashlytics collects:

- Crash stack traces (no personal data; no biometric data; no exercise content)
- Device model and OS version
- App version and build number
- A randomly-generated installation UUID (linked to the install, not to your identity)
- IP address (used by Google during data transit; not stored long-term)

Crashlytics data is treated as **Linked-to-User** per Google's privacy manifest. We use it solely for app-functionality (fixing crashes) and never for tracking or advertising.

You can opt out of crash reporting in **Settings → Privacy → Crash Reporting** (toggle off to disable). Your preference is persisted on your device and applies on next app launch.

We also use the operating system's native crash diagnostic APIs — **Apple MetricKit** on iOS and **Android ApplicationExitInfo** on Android — to capture crashes that Crashlytics may miss; these forward into the same Crashlytics dashboard. No additional data is collected beyond what Crashlytics already collects.

### Promotional Code Validation

When you attempt to redeem a promotional code, FitToll temporarily records your email address, the code you attempted, and a running attempt count in a secure Firestore collection named `promo_attempts`. This record exists solely to prevent abuse of single-use codes (for example, automated scraping or brute-force redemption attempts).

These records are:

- **Limited in scope:** email + attempted code + attempt count only. No device identifiers, IP addresses, or profile data are stored.
- **Short-lived:** automatically deleted seven (7) days after your most recent attempt.
- **Siloed:** not linked to your public user profile, your exercise history, or your subscription record.
- **Not shared:** never transmitted to third-party services for advertising, analytics, or any purpose other than our own anti-abuse enforcement.

If you never use a promo code, no entry is ever created.

### Data Retention

- **Local Data:** Your exercise data, preferences, and statistics remain on your device until you delete the app or clear app data.
- **Account Data:** Your authentication account data is retained as long as your account is active. You can request account deletion at any time (see Your Rights below).

## Data Sharing

We do not sell, rent, or trade your personal data. We share limited data with service providers only as necessary to operate the app (see Third-Party Services below).

Data shared with external services is limited to what is listed in the Third-Party Services table below. All exercise verification and pose detection processing happens entirely on your device.

## Third-Party Services

FitToll uses the following third-party services:

| Service | Purpose | Data Shared |
|---------|---------|-------------|
| Firebase Authentication | User login and account management | Email address, authentication tokens |
| Firebase Cloud Functions | Promo code validation, trial entitlement | Promo code text, authentication token, App Check token |
| Firebase Crashlytics | Crash diagnostics | Stack traces, device model, OS version, app version, installation UUID, IP address (transit only) |
| [RevenueCat](https://www.revenuecat.com/privacy/) | Subscription management and billing | Firebase UID, purchase transactions, device metadata |
| Sign in with Google | Optional login method | Authentication credentials (handled by Google) |
| Sign in with Apple | Optional login method | Authentication credentials (handled by Apple) |
| Facebook Login | Optional login method | Authentication credentials (handled by Facebook) |

Each of these services has its own privacy policy. We encourage you to review them:

- [Google Privacy Policy](https://policies.google.com/privacy)
- [Apple Privacy Policy](https://www.apple.com/legal/privacy/)
- [Facebook Privacy Policy](https://www.facebook.com/privacy/policy/)

## Device Permissions

FitToll requires certain device permissions to function:

| Permission | Why We Need It | When It's Used |
|------------|---------------|----------------|
| **Camera** | To verify exercises through pose estimation | Only during active exercise sessions |
| **Screen Time / Usage Access** | To detect when blocked apps are opened and apply shields | Continuously in the background (iOS: FamilyControls; Android: UsageStats/Accessibility) |
| **App Groups (iOS)** | To share blocking preferences between the main app and system extensions | Continuously in the background |
| **Display Over Other Apps** (Android) | To show the exercise screen when a blocked app is opened | When a blocked app is detected |
| **App List Access** (Android) | To identify installed apps for blocking selection | When selecting apps to block |
| **Notifications** | To alert you when bypass windows are expiring | When a bypass is active |
| **Background Service** (Android) | To monitor blocked app launches in the background | Continuously while blocking is enabled |

You can revoke any permission at any time through your device settings. Revoking the camera permission will prevent exercise verification. Revoking Screen Time / Usage Access will disable the app blocking feature.

## Android Accessibility Service

On Android, FitToll uses the Android Accessibility Service to detect when you open a blocked app so that the blocking screen can appear in real time. This is the only mechanism Android provides for third-party apps to observe which app is currently in the foreground for blocking purposes.

**What we use it for:**

- Detecting the foreground package name the moment a blocked app comes to the front, so FitToll can present the exercise gate before you start scrolling.

**What we explicitly do NOT do:**

- We do NOT read the content of your screen.
- We do NOT extract text from the apps you use.
- We do NOT record keystrokes, taps, or any user input.
- We do NOT transmit any accessibility data off your device — not to our own servers, not to analytics providers, not to anyone.
- We do NOT use accessibility data for profiling, advertising, or any secondary purpose.

All accessibility observation runs entirely on your device. The only signal FitToll acts on is the foreground package name, and only to decide whether a blocking screen should be shown.

You can revoke this permission at any time from your device at **Settings → Accessibility → FitToll**. Revoking it will disable the Android app-blocking feature.

## International Data Transfers

FitToll is developed in India. Authentication data processed by Firebase and subscription data processed by RevenueCat may be stored and processed in the United States or other countries. These transfers are governed by the service providers' Standard Contractual Clauses and data processing agreements. By using FitToll, you consent to this transfer of information.

## Children's Privacy

FitToll is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at aurogpt10@gmail.com and we will take steps to remove that information.

For users in the European Economic Area, the applicable minimum age may be up to 16 years depending on your country of residence, in accordance with local implementations of the GDPR.

## Your Rights

You have the following rights regarding your data:

- **Access:** You can view all your data directly within the app (exercise history, preferences, statistics).
- **Deletion:** You can permanently delete your account directly from within the app: open **Settings** (profile icon on Home), scroll to the bottom, and tap **Delete Account**. This irreversibly deletes your Firebase authentication record. Local app data (blocking config, exercise history, statistics) stays on your device until you uninstall the app or clear app data. If you cannot access the in-app option for any reason, you can also request deletion by emailing aurogpt10@gmail.com.
- **Portability:** Since your data is stored locally on your device, you already have direct access to it.
- **Opt-Out:** You can stop using any feature at any time. Uninstalling the app removes all local data.

### For EU/EEA Users (GDPR)

If you are located in the European Union or European Economic Area, you have additional rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, and data portability. To exercise these rights, contact us at aurogpt10@gmail.com.

Our legal bases for processing your data under GDPR Article 6 are:
- **Contractual necessity** (Art. 6(1)(b)): Account creation, authentication, and core app functionality
- **Legitimate interest** (Art. 6(1)(f)): Exercise verification for app blocking (the core service you signed up for)

### For California Users (CCPA)

If you are a California resident, you have the right to know what personal information we collect, request deletion of your data, and opt out of the sale of your data. We do not sell personal data. To exercise your rights, contact us at aurogpt10@gmail.com.

## On-Device Processing Guarantee

We want to be absolutely clear: **all machine learning and pose estimation processing happens entirely on your device.** FitToll uses Apple Vision (iOS) and ML Kit (Android) for exercise verification. These are on-device ML frameworks provided by Apple and Google respectively. No camera data, pose landmarks, body measurements, or exercise footage is ever transmitted off your device under any circumstances.

## Changes to This Policy

We may update this Privacy Policy from time to time. When we make changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically.

For significant changes, we will notify you through the app or via email.

## Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:

- **Email:** aurogpt10@gmail.com

---

*This privacy policy is effective as of April 24, 2026.*
