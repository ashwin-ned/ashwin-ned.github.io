// Theme toggle
(function () {
  var root = document.documentElement, t = document.getElementById('theme-toggle');
  if (t) t.addEventListener('click', function () {
    var n = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', n);
    try { localStorage.setItem('theme', n); } catch (e) {}
  });
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener && mq.addEventListener('change', function (e) {
    try { if (localStorage.getItem('theme')) return; } catch (err) {}
    root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  });
})();

// Mobile menu
(function () {
  var b = document.getElementById('menu-btn'), l = document.getElementById('nav-links');
  if (!b || !l) return;
  b.addEventListener('click', function () {
    var o = l.classList.toggle('open'); b.setAttribute('aria-expanded', o ? 'true' : 'false');
  });
  l.addEventListener('click', function (e) { if (e.target.classList.contains('nav-link')) l.classList.remove('open'); });
})();

// Lightbox for art gallery
(function () {
  var lb = document.getElementById('lightbox');
  if (!lb) return;
  var img = document.getElementById('lb-img'), cap = document.getElementById('lb-cap');
  var closeBtn = document.getElementById('lb-close');
  function open(src, caption) {
    img.src = src; img.alt = caption || '';
    cap.textContent = caption || ''; cap.style.display = caption ? '' : 'none';
    lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; img.src = '';
  }
  document.addEventListener('click', function (e) {
    var card = e.target.closest('.art-card');
    if (card) {
      var im = card.querySelector('img');
      var name = card.querySelector('.art-name'), med = card.querySelector('.art-medium');
      var c = name ? name.textContent + (med ? ' — ' + med.textContent : '') : im.alt;
      e.preventDefault(); open(im.src, c); return;
    }
    var t = e.target.closest('[data-lightbox]');
    if (t) {
      e.preventDefault();
      var src = t.tagName === 'IMG' ? t.src : t.getAttribute('href');
      open(src, t.getAttribute('data-caption') || t.querySelector('img') && t.querySelector('img').alt || t.alt);
    }
  });
  closeBtn.addEventListener('click', close);
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb-figure')) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && lb.classList.contains('open')) close(); });
})();

// Active-section nav highlight
(function () {
  var secs = [].slice.call(document.querySelectorAll('section[id], header[id]'));
  var links = {};
  document.querySelectorAll('.nav-link').forEach(function (a) {
    var h = a.getAttribute('href'); if (h && h[0] === '#') links[h.slice(1)] = a;
  });
  if (!secs.length || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (en.isIntersecting) {
        Object.keys(links).forEach(function (k) { links[k].classList.remove('is-active'); });
        if (links[en.target.id]) links[en.target.id].classList.add('is-active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach(function (s) { io.observe(s); });
})();
