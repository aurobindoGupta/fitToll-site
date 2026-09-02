---
layout: page
title: Active-Use Unlock Timer
seo_title: "An Unlock Timer That Pauses When You Close the App | FitToll"
description: >-
  FitToll's unlock window counts active use, not wall-clock time. Close the
  blocked app and the timer stops. You get the minutes you actually asked for.
eyebrow: Guide
faq:
  - q: What does "active use" mean?
    a: >-
      The unlock timer runs while the blocked app is in front of you. Close it
      or switch away and the clock pauses, then resumes when you come back.
  - q: So the window doesn't expire while my phone is in my pocket?
    a: >-
      Correct. Time you aren't using the app isn't spent. A fifteen-minute
      window is fifteen minutes of use, not fifteen minutes of wall clock.
  - q: Why does that matter?
    a: >-
      A wall-clock window rewards you for scrolling faster, because the minutes
      drain whether you look or not. A window that pauses removes that pressure.
  - q: How long can an unlock window be?
    a: >-
      Free unlock windows are 15 minutes. Premium allows longer durations.
  - q: What happens when the window ends?
    a: >-
      The app is blocked again. Opening it means doing the reps again.
---

FitToll's unlock window counts the time you spend **in** the app. Close it,
and the clock stops.

That sounds like a small implementation detail. It changes how the whole
thing feels to use.

## The problem with a wall-clock window

Almost every timed unlock works on wall-clock time. You earn fifteen minutes,
and those fifteen minutes tick down from the moment they start — whether the
phone is in your hand, in your pocket, or face-down on a table.

Two things follow, and both are bad.

**It punishes you for stopping.** You did the reps. You open the app, read the
thing you wanted, and put the phone down after four minutes. The other eleven
evaporate. Next time, the lesson your brain has learned is to stay in the app
and use the window up.

**It creates urgency.** A draining clock is a reason to scroll faster and to
keep scrolling. The blocker ends up manufacturing exactly the compulsive
attention it was installed to interrupt.

## What FitToll does instead

The timer runs while the blocked app is in the foreground. Switch away and it
pauses. Come back and it resumes from where it stopped.

If you do your reps, open the app, spend four minutes, and close it, you have
eleven minutes left. They will still be there later. Nothing is lost by
stopping, so stopping is easy.

That is the entire point. The unlock is a budget you spend, not a fuse you
have lit.

## Why it is worth the extra work

Wall-clock timers are simpler to build. A single expiry timestamp and you are
done. Counting active use means tracking the foreground app continuously,
handling the phone being locked, backgrounded, restarted, or idle overnight,
and making all of that survive a reboot without either leaking time or
accidentally granting free access.

It is worth it because the wall-clock version quietly works against the user,
and a blocker whose incentives point the wrong way will not be kept installed.

## How it fits with the rest of the gate

The timer is the reward half of a system whose other half is deliberately
unforgiving:

- **No skip button.** Three emergency bypasses a day, and each doubles the reps
  you owe next time. More on
  [why there is no skip button]({{ '/no-skip-button/' | relative_url }}).
- **Reps that cannot be faked.** Counting reads joint angles rather than
  motion, and half-reps do not count.
- **Nothing leaves the phone.** Pose detection runs on-device and works in
  airplane mode. No video is recorded or uploaded.

Strict about earning the time; generous about letting you keep it.

## Window lengths

Free unlock windows are 15 minutes of active use. Premium ($5.99/month or
$29.99/year) allows longer durations, alongside lifting the one-app blocking
limit. Prices shown in USD; local pricing applies at checkout.

When the window is spent, the app blocks again, and opening it means doing the
reps again.

## Get FitToll

Free on the [App Store](https://apps.apple.com/us/app/fittoll/id6761677416)
(iOS 16.0+) and
[Google Play](https://play.google.com/store/apps/details?id=com.scrollblocker.android)
(Android 8.0+).
