---
layout: page
title: AI Push-Up Counter
seo_title: "AI Push-Up Counter — Your Camera Counts the Reps | FitToll"
description: >-
  A push-up counter that reads your elbow angle with on-device pose detection.
  Half-reps don't count, nothing is recorded or uploaded, and it works offline.
eyebrow: Guide
faq:
  - q: Does it count push-ups automatically?
    a: >-
      Yes. Prop the phone up so your upper body is in frame and start a session.
      Pose detection tracks your joints and counts each rep as you finish it.
      There's nothing to tap between reps.
  - q: Can I cheat it by shaking the phone?
    a: >-
      No. The counter reads the angle at your elbow, not motion. Shaking the
      phone, waving at it, or tapping the screen doesn't produce a rep, because
      none of that changes your elbow angle.
  - q: Do half-reps count?
    a: >-
      No. A rep lands only after you've been all the way down and all the way
      back up. Stop halfway and the number doesn't move.
  - q: Is my camera footage uploaded anywhere?
    a: >-
      No video is recorded and nothing is uploaded. Detection runs on your
      phone, frames never leave it, and the whole thing works in airplane mode.
  - q: Do I need to block apps to use the counter?
    a: >-
      No. Tap Test Exercise on the home screen and you get a counting session on
      its own, without blocking anything.
  - q: What does it cost?
    a: >-
      FitToll is free to download and both exercises are included. Premium
      ($5.99/month or $29.99/year) lifts the one-app limit on blocking. It
      doesn't gate the counter.
---

Most push-up counters want you to tap a button, or they read the
accelerometer and count anything that jiggles. FitToll counts the way
someone watching you would — by looking at your arms.

## How the counter works

The camera feeds an on-device pose model — Apple Vision on iOS, ML Kit on
Android — which returns where your joints are, many times a second. From
that, FitToll works out the angle at your elbow and follows it.

A push-up is a shape the counter knows: arms straight at the top, bending
past a threshold on the way down, bottoming out, then straightening back
through the top. Complete that circuit and the number goes up. Angles are
smoothed across recent frames, so one bad reading can't nudge the count.

## What counts as a rep

Half-reps don't. Go partway down and come back up and the counter has
watched you leave the top and return without ever reaching the bottom, so
nothing lands.

There's a form check at the bottom too. Your hip angle has to stay above a
minimum, which is the difference between a push-up and a sag. Break form
down there and FitToll says so instead of quietly banking the rep.

## Three strictness levels

Your push-up and mine are probably not the same push-up. Beginner,
Intermediate and Advanced move the thresholds — how far down counts as
down, how straight counts as straight — so the counter can be honest
without being discouraging. Pick the one that matches where you actually
are.

## Nothing leaves your phone

No video is recorded. Nothing is uploaded. The model runs locally, so
frames stay on the device and are thrown away as they're processed. It
works in airplane mode, which is the shortest proof that nothing is going
anywhere.

## Using it on its own

You don't have to block anything to use the counter. **Test Exercise** on
the home screen starts a session by itself — handy for checking your
framing, trying a strictness level, or just counting a set.

## Where the counter came from

FitToll is an app blocker first. You pick the apps you lose time to, and
when you open one, the exercise gate shows up instead. Reps are the toll.
That's why the counting had to be honest — a counter you can trick is a
blocker you can walk through.

The same engine counts [squats](/squat-counter/), and the technical side is
in [AI rep counter](/ai-rep-counter/).

{% include faq.html %}

<p class="page-cta page-cta-duo"><a class="btn btn-primary" href="https://apps.apple.com/us/app/fittoll/id6761677416">Download on the App Store</a><a class="btn btn-primary" href="https://play.google.com/store/apps/details?id=com.scrollblocker.android">Get it on Google Play</a></p>
