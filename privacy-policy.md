# FitToll - Privacy Policy

**Last Updated:** April 5, 2026

## Introduction

Welcome to FitToll. We built this app to help you break doom-scrolling habits through real physical exercise. Your privacy matters to us, and we designed FitToll with a privacy-first approach. This Privacy Policy explains what data we collect, how we use it, and your rights.

## Who We Are

FitToll is developed and maintained by Aurobindo Gupta ("we", "us", "our"). If you have questions about this policy, you can reach us at aurogpt10@gmail.com.

## Data We Collect

### Information You Provide

- **Account Information:** When you create an account, we collect your email address and display name through our authentication providers (Google Sign-In, Apple Sign-In, Facebook Login, or email/password). This information is used solely for account creation and login.

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

- **Analytics or Tracking:** We do not use third-party analytics, advertising SDKs, or tracking tools.

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

Your authentication credentials (email, authentication tokens) are managed by Firebase Authentication, a Google service. Firebase Authentication data is governed by [Google's Privacy Policy](https://policies.google.com/privacy). We use Firebase Authentication for login and Firebase Cloud Functions for promo code validation. No other Firebase services (Analytics, Crashlytics, etc.) are used.

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
| Firebase Cloud Functions | Promo code validation | Promo code text, authentication token |
| [RevenueCat](https://www.revenuecat.com/privacy/) | Subscription management and billing | Firebase UID, purchase transactions, device metadata |
| Google Sign-In | Optional login method | Authentication credentials (handled by Google) |
| Apple Sign-In | Optional login method | Authentication credentials (handled by Apple) |
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

## International Data Transfers

FitToll is developed in India. Authentication data processed by Firebase and subscription data processed by RevenueCat may be stored and processed in the United States or other countries. These transfers are governed by the service providers' Standard Contractual Clauses and data processing agreements. By using FitToll, you consent to this transfer of information.

## Children's Privacy

FitToll is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at aurogpt10@gmail.com and we will take steps to remove that information.

For users in the European Economic Area, the applicable minimum age may be up to 16 years depending on your country of residence, in accordance with local implementations of the GDPR.

## Your Rights

You have the following rights regarding your data:

- **Access:** You can view all your data directly within the app (exercise history, preferences, statistics).
- **Deletion:** You can delete your account and all associated data by contacting us at aurogpt10@gmail.com. Local data can be deleted by uninstalling the app.
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

*This privacy policy is effective as of April 5, 2026.*
