/* Landing hero: the rep counter counts to the target, then unlocks.
   The product's core interaction doubles as the page's entrance.
   Honours prefers-reduced-motion by jumping straight to the end state. */
(function () {
  "use strict";

  var TARGET = 10;
  var STEP_MS = 190;

  var frame = document.querySelector(".counter-frame");
  if (!frame) return;

  var out = frame.querySelector("[data-count]");
  var bar = frame.querySelector("[data-bar]");
  var state = frame.querySelector("[data-state]");
  if (!out || !bar || !state) return;

  function finish() {
    out.textContent = String(TARGET);
    bar.style.width = "100%";
    state.textContent = "Unlocked";
    frame.classList.add("is-done");
  }

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    finish();
    return;
  }

  var n = 0;
  var timer = window.setInterval(function () {
    n += 1;
    out.textContent = String(n);
    bar.style.width = (n / TARGET) * 100 + "%";
    if (n >= TARGET) {
      window.clearInterval(timer);
      window.setTimeout(finish, 260);
    }
  }, STEP_MS);
})();
