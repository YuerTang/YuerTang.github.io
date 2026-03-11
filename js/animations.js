/* ==========================================================================
   Animation Infrastructure — yuertang.dev
   Scroll reveals, filter, nav toggle, citation copy
   ========================================================================== */

(function () {
  'use strict';

  /* --- Scroll Reveal via Intersection Observer --- */
  var revealElements = document.querySelectorAll(
    '.reveal, .reveal--left, .reveal--right, .reveal--scale, .stagger-children'
  );

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: '0px 0px 60px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* --- Filter Buttons (Andy Zeng style) --- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var listItems = document.querySelectorAll('.list-item, .pub-card');

  function applyFilter(filter) {
    listItems.forEach(function (item) {
      if (item.classList.contains(filter)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  if (filterBtns.length > 0 && listItems.length > 0) {
    // Apply default filter on load
    var activeBtn = document.querySelector('.filter-btn.active');
    if (activeBtn) {
      applyFilter(activeBtn.getAttribute('data-filter'));
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');

        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        applyFilter(filter);
      });
    });
  }

  /* --- Mobile Nav Toggle --- */
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }


  /* --- Copy Citation --- */
  document.querySelectorAll('.citation-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = btn.parentElement.querySelector('pre');
      if (pre) {
        navigator.clipboard.writeText(pre.textContent).then(function () {
          btn.textContent = 'Copied!';
          setTimeout(function () {
            btn.textContent = 'Copy';
          }, 2000);
        });
      }
    });
  });
})();
