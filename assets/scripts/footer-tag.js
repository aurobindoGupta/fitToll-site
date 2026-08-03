/* Splits the footer tagline into per-letter spans so it can animate as a
   rolling wave on hover. Done at runtime rather than hardcoded so the text
   stays sourced from site.description in _config.yml.

   Accessibility: the wrapper keeps the full string as its accessible name and
   the letter spans are hidden from assistive tech — otherwise screen readers
   announce the tagline one character at a time. */
(function () {
  "use strict";

  var tag = document.querySelector(".site-footer-tag");
  if (!tag || tag.dataset.split === "true") return;

  var text = tag.textContent.trim();
  if (!text) return;

  tag.setAttribute("aria-label", text);
  tag.setAttribute("role", "text");
  tag.textContent = "";

  var chars = Array.from(text);
  for (var i = 0; i < chars.length; i++) {
    var ch = chars[i];
    var span = document.createElement("span");
    span.className = "tag-letter";
    span.setAttribute("aria-hidden", "true");
    // Preserve spaces as non-collapsing, but don't animate them.
    if (ch === " ") {
      span.classList.add("is-space");
      span.textContent = " "; // literal nbsp — no innerHTML needed
    } else {
      span.textContent = ch;
    }
    span.style.setProperty("--i", i);
    tag.appendChild(span);
  }

  tag.dataset.split = "true";
})();
