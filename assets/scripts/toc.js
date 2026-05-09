(function () {
  'use strict';

  var docArticle = document.querySelector('.doc-article');
  var tocNav = document.querySelector('[data-toc]');
  var drawerTocNav = document.querySelector('[data-drawer-toc-nav]');
  var drawerTocBlock = document.querySelector('[data-drawer-toc]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function slugify(s) {
    return s.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }

  function buildToc() {
    if (!docArticle || !tocNav) return null;
    // Only top-level (H2) sections in the TOC. H3 subsections are
    // visible in the body but not in the sidebar -- matches Shopify's
    // legal-page pattern, keeps the rail digestible on long policies.
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
      if (!h.id) h.id = slugify(h.textContent);
      var className = 'toc-link is-' + h.tagName.toLowerCase();

      var sideLink = document.createElement('a');
      sideLink.href = '#' + h.id;
      sideLink.className = className;
      sideLink.textContent = h.textContent.trim();
      sidebarFrag.appendChild(sideLink);

      var drawerLink = sideLink.cloneNode(true);
      drawerFrag.appendChild(drawerLink);

      items.push({ id: h.id, el: h, links: [sideLink, drawerLink] });
    });
    tocNav.appendChild(sidebarFrag);
    if (drawerTocNav && drawerTocBlock) {
      drawerTocNav.appendChild(drawerFrag);
      drawerTocBlock.hidden = false;
    }
    return items;
  }

  // Drawer state
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
    burger.setAttribute('aria-expanded', 'true');
    document.body.dataset.drawerOpen = 'true';
    var focusable = drawer.querySelector('a, button');
    if (focusable) focusable.focus();
  }

  function closeDrawer() {
    if (!drawer || !backdrop) return;
    drawerOpen = false;
    delete drawer.dataset.open;
    delete backdrop.dataset.open;
    if (burger) burger.setAttribute('aria-expanded', 'false');
    delete document.body.dataset.drawerOpen;
    var hideDelay = reduceMotion ? 0 : 220;
    setTimeout(function () {
      if (!drawerOpen) {
        drawer.hidden = true;
        backdrop.hidden = true;
      }
    }, hideDelay);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function bindClicks(items) {
    if (!items) return;
    document.querySelectorAll('.toc-link').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
        history.replaceState(null, '', '#' + id);
        if (drawerOpen) closeDrawer();
      });
    });
  }

  function bindScrollspy(items) {
    if (!items || !items.length) return;
    var byId = {};
    items.forEach(function (i) { byId[i.id] = i; });

    var visible = new Set();
    var activeId = null;

    function setActive(id) {
      if (id === activeId) return;
      activeId = id;
      items.forEach(function (i) {
        i.links.forEach(function (link) {
          if (i.id === id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      });
      var firstVisible = items.find(function (i) { return visible.has(i.id); });
      if (firstVisible) setActive(firstVisible.id);
    }, {
      rootMargin: '-80px 0px -70% 0px',
      threshold: 0
    });

    items.forEach(function (i) { io.observe(i.el); });
    setActive(items[0].id);
  }

  if (burger) {
    burger.addEventListener('click', function () {
      drawerOpen ? closeDrawer() : openDrawer();
    });
  }
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawerOpen) closeDrawer();
    if (e.key === 'Tab' && drawerOpen && drawer && !drawer.contains(document.activeElement)) {
      e.preventDefault();
      var f = drawer.querySelector('a, button');
      if (f) f.focus();
    }
  });
  window.addEventListener('resize', function () {
    if (drawerOpen && window.innerWidth >= 1024) closeDrawer();
  });

  var items = buildToc();
  bindClicks(items);
  if (items) bindScrollspy(items);
})();
