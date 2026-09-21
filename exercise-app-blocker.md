---
layout: page
title: Exercise App Blocker
seo_title: "Exercise App Blocker for iPhone and Android | FitToll"
description: >-
  An app blocker that asks for push-ups or squats before a blocked app opens.
  Your camera counts the reps on-device. Free on iPhone and Android.
eyebrow: Guide
faq:
  - q: What is an exercise app blocker?
    a: >-
      An app blocker that puts a physical task between you and a distracting
      app. Instead of tapping past a reminder, you do reps. FitToll counts them
      with your camera, so the app opens only after the work is done.
  - q: Does it work on Android as well as iPhone?
    a: >-
      Yes, both. FitToll runs on iOS 16.0 or later and Android 8.0 or later.
  - q: Which exercises can it count?
    a: >-
      Push-ups and squats. Both are included free, at every difficulty level.
  - q: Do I have to pay to use it?
    a: >-
      No. The free tier blocks one app and includes both exercises at all three
      strictness levels. Premium ($5.99/month or $29.99/year) lifts the one-app
      limit and allows longer unlock durations.
  - q: Does it need an internet connection?
    a: >-
      No. Pose detection runs on your phone, so counting works in airplane mode.
  - q: What stops me from just deleting the app?
    a: >-
      Nothing — you own your phone. FitToll is built to beat the reflex to open
      an app, not to beat a determined decision to stop using it.
---

An exercise app blocker puts a physical cost between you and the app you
open without thinking. FitToll's cost is push-ups or squats, counted by
your camera before the blocked app will open.

## How the gate works

You pick the apps you want blocked and how many reps they cost. When you
open one, FitToll takes the screen first.

The camera watches you through an on-device pose model — Apple Vision on
iOS, Google ML Kit on Android. It reads the angles at your joints and
counts a rep when you complete the full range of movement. When you reach
the number, the blocked app opens.

There is no button that skips this.

## Why it counts joint angles instead of motion

A counter that reads the accelerometer counts anything that shakes. That
makes it trivially cheatable, and it also makes it wrong — it cannot tell a
push-up from a phone bouncing in a pocket.

FitToll reads the geometry of your body instead. Push-ups are counted from
your elbow angle, with a hip-angle check at the bottom that separates a
push-up from a sag. Squats calibrate to your body and your distance from the
camera at the start of every session, then count from knee angle.

Two consequences follow. Shaking the phone, waving at the camera, or tapping
the screen produces no reps, because none of those change a joint angle. And
half-reps do not count — the rep lands only after you have been all the way
down and all the way back up.

## Three strictness levels

Beginner, Intermediate and Pro change how much range the counter demands
before it accepts a rep. All three are available on the free tier. Strictness
is about what counts as a rep, not about how many reps you owe — that number
is yours to set per app.

## Every unlock has an end

FitToll's unlock window runs on real time. Earn fifteen minutes and you get
fifteen minutes from the moment the app unlocks; close the app and the clock
keeps running. When it runs out, the app is blocked again and opening it costs
another set of reps.

That is the point of the gate. A window that paused whenever you looked away
could stay open indefinitely for someone who only dips in, and a gate that
stays open is not a gate.

## When you genuinely cannot do reps

There are three emergency bypasses a day. They exist because sometimes you
need an app now and a floor is not available.

They are not free. Each bypass doubles the reps that app costs on your next
unlock, and the doubling clears only after one clean unlock at the higher
price. Spend all three in a day and your blocking setup resets, so you have
to deliberately build it again.

The design goal is that a bypass is always available and never comfortable.

## What runs on your phone and what does not

Camera frames are processed on the device and discarded. No image, no video,
and no pose data is recorded or uploaded. Counting works with the phone in
airplane mode, which is the simplest way to confirm nothing is leaving it.

Exercise sessions are stored on the device and deleted after 90 days on both
the free and paid tiers.

## What it costs

FitToll is free to download. The free tier blocks one app, includes push-ups
and squats at all three strictness levels, and shows the last 7 days of your
exercise history.

Premium is $5.99/month or $29.99/year. It lifts the one-app limit, allows
longer unlock durations, and keeps the full 90 days of stored history. Prices
are shown in USD; local pricing applies at checkout in your store's currency.

{% include faq.html %}

## Getting it

FitToll is on the [App Store](https://apps.apple.com/us/app/fittoll/id6761677416)
for iOS 16.0 or later, and on
[Google Play](https://play.google.com/store/apps/details?id=com.scrollblocker.android)
for Android 8.0 or later.

If you want the detail on how counting works, there are separate write-ups on
the [AI rep counter]({{ '/ai-rep-counter/' | relative_url }}), the
[push-up counter]({{ '/push-up-counter/' | relative_url }}) and the
[squat counter]({{ '/squat-counter/' | relative_url }}).
