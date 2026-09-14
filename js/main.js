/* ========================================
   ISPD Asia Pacific Chapter - Main JS
   ======================================== */

(function () {
  'use strict';

  /* --- Mobile menu --- */
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var mobileNavClose = document.querySelector('.mobile-nav-close');

  function openMenu() {
    if (!mobileNav) return;
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMenu);
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* --- Sticky header shadow --- */
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10 ? '0 2px 12px rgba(0,0,0,0.08)' : '';
    });
  }

  /* --- Smooth scroll for same-page anchors --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* --- Learning Center tabs ---
     Delegated so it works without inline handlers or the non-standard
     global `event` object (which is undefined in Firefox). */
  var tabNav = document.querySelector('.tab-nav');
  if (tabNav) {
    tabNav.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-tab]');
      if (!btn) return;
      var panel = document.getElementById('tab-' + btn.getAttribute('data-tab'));
      if (!panel) return;
      document.querySelectorAll('.tab-panel').forEach(function (p) {
        p.classList.remove('active');
      });
      tabNav.querySelectorAll('button').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panel.classList.add('active');
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    });
  }

  /* --- Newsletter archive accordions --- */
  document.querySelectorAll('.year-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var content = btn.nextElementSibling;
      if (!content) return;
      var open = content.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* --- Video playlists: load the YouTube player only when asked --- */
  document.querySelectorAll('.video-thumb[data-playlist]').forEach(function (thumb) {
    var poster = thumb.querySelector('.video-poster');
    var play = thumb.querySelector('.video-play');
    var list = thumb.getAttribute('data-playlist');
    if (poster) {
      // no internet, or YouTube unreachable: fall back to the plain brand panel
      poster.addEventListener('error', function () { thumb.classList.add('no-poster'); });
    }
    if (!play) return;
    play.addEventListener('click', function () {
      // Opened straight from disk the page origin is "null" and the YouTube
      // player refuses to configure, so send the viewer to YouTube instead.
      if (window.location.protocol === 'file:') {
        window.open('https://www.youtube.com/playlist?list=' + list, '_blank', 'noopener');
        return;
      }
      var frame = document.createElement('iframe');
      frame.src = 'https://www.youtube.com/embed/videoseries?list=' + list + '&autoplay=1';
      frame.title = play.getAttribute('aria-label') || 'YouTube playlist';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      frame.allowFullscreen = true;
      thumb.innerHTML = '';
      thumb.appendChild(frame);
    });
  });
})();
