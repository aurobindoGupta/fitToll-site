---
layout: page
title: AI Rep Counter
seo_title: "AI Rep Counter — On-Device Rep Counting | FitToll"
description: >-
  How FitToll counts reps: on-device pose detection reads real joint angles, so
  shaking the phone does nothing. Push-ups and squats, offline, nothing uploaded.
eyebrow: Guide
faq:
  - q: What does the AI actually do?
    a: >-
      It finds where your joints are in each camera frame. FitToll turns those
      positions into angles — your elbow for push-ups, your knees for squats —
      and counts a rep when the angle travels through a full range.
  - q: Which AI does it use?
    a: >-
      Apple Vision on iOS and Google's ML Kit pose detection on Android. Both
      run on the device itself. There's no server in the loop.
  - q: Does it work without internet?
    a: >-
      Yes. Counting is entirely on-device, so it works in airplane mode.
  - q: Can it be fooled?
    a: >-
      Not by motion. The counter reads joint angles, so shaking the phone,
      waving at the camera, or tapping the screen produces nothing. You have to
      actually do the rep.
  - q: Which exercises can it count?
    a: >-
      Push-ups and squats. Both are included free.
  - q: Is my camera footage stored?
    a: >-
      No video is recorded and nothing is uploaded. Frames are processed and
      discarded on your phone.
---

"AI rep counter" covers a lot of things. Some count taps. Some watch the
accelerometer and take your word for it. FitToll's reads your body.

## Joints, not motion

Each camera frame goes to an on-device pose model, which returns the
positions of your joints — shoulders, elbows, hips, knees. FitToll turns
those into angles and watches the angles move.

That distinction is the whole design. A counter reading acceleration can't
tell a push-up from a phone being shaken, because both are just motion. A
counter reading your elbow angle can, because a shaken phone doesn't bend
your arm. Waving at the camera doesn't either. Neither does tapping the
screen.

## A rep is a full range

The counter follows your angle through a circuit: top, past a threshold
going down, bottom, then back through the top. Only the complete trip
counts. Halfway down and back up leaves the number alone.

Readings are smoothed across recent frames, so one glitchy frame can't
invent a rep or drop one.

## It measures you, not a template

Squats calibrate at the start of every session — the counter looks at you
standing where you actually are, at whatever distance the phone happens to
be, and scales to that. Heights and room sizes differ; a fixed threshold
would work for one body and fail for the next.

On top of that sit three strictness levels. Beginner, Intermediate and Pro
move how far counts as far, so the count stays honest without being
useless to whoever is doing it.

## Push-ups check form, too

For push-ups there's a second gate at the bottom of the movement: your hip
angle has to hold. That's what tells a push-up apart from a sag. For
squats, form coaching comes from the side view, where depth and forward
lean are actually visible.

## On-device, and that's the point

Apple Vision on iOS. ML Kit on Android. Both run locally. No video is
recorded, nothing is uploaded, camera frames are discarded as they're
processed, and the whole thing works in airplane mode — which is the
simplest way to prove nothing is being sent anywhere.

## Where to start

[Push-up counter](/push-up-counter/) and [squat counter](/squat-counter/)
cover camera placement and what counts for each.

You don't need to block anything to use it: **Test Exercise** on the home
screen runs a session on its own. But the counter exists because FitToll is
an app blocker — you pick the apps you lose time to, and reps are the toll
to open one. A counter you can trick would make the whole thing pointless,
which is why it counts the way it does.

{% include faq.html %}

<p class="page-cta page-cta-duo"><a class="btn btn-primary" href="https://apps.apple.com/us/app/fittoll/id6761677416">Download on the App Store</a><a class="btn btn-primary" href="https://play.google.com/store/apps/details?id=com.scrollblocker.android">Get it on Google Play</a></p>
