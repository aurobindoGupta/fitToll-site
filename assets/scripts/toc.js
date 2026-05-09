(function () {
  'use strict';

  var docArticle = document.querySelector('.doc-article');
  var tocNav = document.querySelector('[data-toc]');
  var drawerTocNav = document.querySelector('[data-drawer-toc-nav]');
  var drawerTocBlock = document.querySelector('[data-drawer-toc]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- TOC build ---------------------------------------------------
  function buildToc() {
    if (!docArticle || !tocNav) return null;
    // Top-level (H2) only -- matches Shopify legal-page pattern.
    var headings = docArticle.querySelectorAll('.doc-body h2');
    if (!headings.length) {
      var sidebar = document.querySelector('.doc-toc');
      if (sidebar) sidebar.style.display = 'none';
      return null;
    }
    var items = [];
    var sidebarFrag = document.createDocumentFragment();
    var drawerFrag = document.createDocumentFragment();

    headings.forEach(function (h) {
      // Kramdown auto-generates IDs; this is just a safety net.
      if (!h.id) {
        h.id = h.textContent.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-');
      }
      var item = { id: h.id, el: h, links: [] };

      var sideLink = document.createElement('a');
      sideLink.href = '#' + h.id;
      sideLink.className = 'toc-link is-h2';
      sideLink.textContent = h.textContent.trim();
      // Stash the item reference on the link so the click handler
      // doesn't have to do a getElementById lookup that can fail
      // silently if kramdown's ID doesn't match our expectation.
      sideLink.__tocItem = item;
      item.links.push(sideLink);
      sidebarFrag.appendChild(sideLink);

      var drawerLink = document.createElement('a');
      drawerLink.href = '#' + h.id;
      drawerLink.className = 'toc-link is-h2';
      drawerLink.textContent = h.textContent.trim();
      drawerLink.__tocItem = item;
      item.links.push(drawerLink);
      drawerFrag.appendChild(drawerLink);

      items.push(item);
    });
    tocNav.appendChild(sidebarFrag);
    if (drawerTocNav && drawerTocBlock) {
      drawerTocNav.appendChild(drawerFrag);
      drawerTocBlock.hidden = false;
    }
    return items;
  }

  // ---- Active item tracking ---------------------------------------
  var currentActive = null;
  function setActiveItem(item) {
    if (!item || item === currentActive) return;
    if (currentActive) {
      currentActive.links.forEach(function (l) { l.removeAttribute('aria-current'); });
    }
    item.links.forEach(function (l) { l.setAttribute('aria-current', 'location'); });
    currentActive = item;
  }

  // ---- Drawer state ------------------------------------------------
  var burger = document.querySelector('[data-drawer-toggle]');
  var drawer = document.querySelector('[data-drawer]');
  var backdrop = document.querySelector('[data-drawer-backdrop]');
  var drawerOpen = false;
  var lastFocus = null;

  function openDrawer() {
    if (!drawer || !backdrop) return;
    drawerOpen = true;
    lastFocus = document.activeElement;
    drawer.hidden = false;
    backdrop.hidden = false;
    requestAnimationFrame(function () {
      drawer.dataset.open = 'true';
      backdrop.dataset.open = 'true';
    });
    if (burger) burger.setAttribute('aria-expanded', 'true');
    document.body.dataset.drawerOpen = 'true';
    var firstFocusable = drawer.querySelector('a, button');
    if (firstFocusable) firstFocusable.focus({ preventScroll: true });
  }

  function closeDrawer(opts) {
    opts = opts || {};
    if (!drawer || !backdrop) return;
    drawerOpen = false;
    delete drawer.dataset.open;
    delete backdrop.dataset.open;
    if (burger) burger.setAttribute('aria-expanded', 'false');
    // Synchronously remove the body scroll-lock so any scroll() that
    // fires immediately after this call actually moves the page.
    delete document.body.dataset.drawerOpen;
    var hideDelay = reduceMotion ? 0 : 220;
    setTimeout(function () {
      if (!drawerOpen) {
        drawer.hidden = true;
        backdrop.hidden = true;
      }
    }, hideDelay);
    if (lastFocus && lastFocus.focus && opts.restoreFocus !== false) {
      // preventScroll: don't snap the page back to the burger button.
      lastFocus.focus({ preventScroll: true });
    }
  }

  // ---- TOC click ---------------------------------------------------
  function onTocClick(e) {
    var link = e.currentTarget;
    var item = link.__tocItem;
    if (!item || !item.el) return;
    e.preventDefault();

    // CRITICAL: close drawer BEFORE scrolling. While drawer is open,
    // body has overflow:hidden -- a window/scrollIntoView call during
    // that state silently no-ops in some browsers, leaving the user
    // at the top after the drawer animates closed. We close first so
    // overflow:hidden is gone, then scroll on the next frame.
    var wasInDrawer = drawerOpen && drawer && drawer.contains(link);
    if (drawerOpen) {
      closeDrawer({ restoreFocus: false });
    }

    var doScroll = function () {
      // scrollIntoView + the CSS scroll-margin-top on h2 handles the
      // sticky-header offset natively. No manual math, no race with
      // sticky-header layout changes.
      item.el.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start'
      });
      history.replaceState(null, '', '#' + item.id);
      setActiveItem(item);
      // Move focus to the heading so screen readers and keyboard
      // users land at the section, not stuck on the closed-drawer link.
      // tabindex=-1 + preventScroll keeps focus there without re-scrolling.
      if (!item.el.hasAttribute('tabindex')) item.el.setAttribute('tabindex', '-1');
      item.el.focus({ preventScroll: true });
    };

    if (wasInDrawer) {
      // Give the drawer one frame to release overflow:hidden before scrolling.
      requestAnimationFrame(doScroll);
    } else {
      doScroll();
    }
  }

  function bindClicks() {
    document.querySelectorAll('.toc-link').forEach(function (link) {
      link.addEventListener('click', onTocClick);
    });
  }

  // ---- Scrollspy: scroll-position based, not IO band --------------
  // Algorithm: active = the LAST heading whose top is at-or-above the
  // trigger line (header height + small margin). At document bottom,
  // force the last heading active so users at the end always see
  // their position reflected. Throttled with requestAnimationFrame.
  function bindScrollspy(items) {
    if (!items || !items.length) return;

    var TRIGGER = 100; // px from viewport top -- tweakable

    function update() {
      var scrollY = window.scrollY || window.pageYOffset;
      var docH = document.documentElement.scrollHeight;
      var winH = window.innerHeight;
      var atBottom = (scrollY + winH) >= (docH - 4);

      if (atBottom) {
        setActiveItem(items[items.length - 1]);
        return;
      }

      var activeIdx = 0;
      for (var i = 0; i < items.length; i++) {
        var rect = items[i].el.getBoundingClientRect();
        if (rect.top - TRIGGER <= 0) {
          activeIdx = i;
        } else {
          break; // headings are in document order
        }
      }
      setActiveItem(items[activeIdx]);
    }

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        update();
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  // ---- Drawer wiring + focus trap ---------------------------------
  function getFocusableInDrawer() {
    if (!drawer) return [];
    return Array.prototype.slice.call(
      drawer.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );
  }

  if (burger) {
    burger.addEventListener('click', function () {
      drawerOpen ? closeDrawer() : openDrawer();
    });
  }
  if (backdrop) backdrop.addEventListener('click', function () { closeDrawer(); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawerOpen) {
      closeDrawer();
      return;
    }
    if (e.key !== 'Tab' || !drawerOpen) return;
    var focusables = getFocusableInDrawer();
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    var active = document.activeElement;

    if (e.shiftKey) {
      if (active === first || !drawer.contains(active)) {
        e.preventDefault();
        last.focus({ preventScroll: true });
      }
    } else {
      if (active === last || !drawer.contains(active)) {
        e.preventDefault();
        first.focus({ preventScroll: true });
      }
    }
  });

  window.addEventListener('resize', function () {
    if (drawerOpen && window.innerWidth >= 1024) closeDrawer();
  });

  // ---- Init --------------------------------------------------------
  var items = buildToc();
  if (items) {
    bindClicks();
    bindScrollspy(items);
  }
})();
