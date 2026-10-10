(function () {
  var burger = document.querySelector('.burger'), menu = document.getElementById('menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') menu.classList.remove('open'); });

  var roles = ['Data Entry', 'Document Control', 'IT Support', 'Editing Konten'], i = 0, el = document.getElementById('role');
  setInterval(function () { i = (i + 1) % roles.length; el.textContent = roles[i]; }, 2200);

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.querySelectorAll('.card li,.card>p,.stat').forEach(function (x, k) { x.style.transitionDelay = (k % 12) * 60 + 'ms'; }); e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (s) { io.observe(s); });

  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    document.querySelectorAll('.tilt').forEach(function (c) {
      c.addEventListener('mousemove', function (e) {
        var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        c.style.transform = 'perspective(800px) rotateY(' + (x * 7) + 'deg) rotateX(' + (-y * 7) + 'deg) translateY(-3px)';
      });
      c.addEventListener('mouseleave', function () { c.style.transform = ''; });
    });
  }
  function closeLb(){var o=document.querySelector('.lb');if(o)o.remove();}
  document.querySelectorAll('.cert img').forEach(function(im){im.addEventListener('click',function(){closeLb();var o=document.createElement('div');var th0=(im.closest('section')||{}).id,mp={experience:'pink',analytics:'aq',academic:'lil'};o.className='lb theme-'+(mp[th0]||'sky');o.innerHTML='<img alt="">';o.firstChild.src=im.src;o.firstChild.alt=im.alt;o.addEventListener('click',closeLb);document.body.appendChild(o);});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLb();});
  document.getElementById('year').textContent = new Date().getFullYear();
})();

(function () {
  function open(id, theme) {
    var el = document.getElementById('pl-' + id); if (!el) return;
    var data = JSON.parse(el.textContent), i = 0, x0 = 0;
    var o = document.createElement('div'); o.className = 'pl-modal theme-' + (theme || 'pink'); o.setAttribute('role', 'dialog'); o.setAttribute('aria-modal', 'true');
    o.innerHTML = '<div class="pl-box"><button class="pl-close" aria-label="Tutup">&times;</button><div class="pl-main"><button class="pl-nav" data-d="-1" aria-label="Sebelumnya">&#8249;</button><div class="pl-stage"><img alt=""></div><button class="pl-nav" data-d="1" aria-label="Berikutnya">&#8250;</button></div><p class="pl-cap"></p><div class="pl-thumbs"></div></div>';
    var img = o.querySelector('.pl-stage img'), cap = o.querySelector('.pl-cap'), th = o.querySelector('.pl-thumbs');
    data.forEach(function (d, k) { var t = document.createElement('img'); t.src = d.src; t.alt = d.cap; t.addEventListener('click', function (e) { e.stopPropagation(); go(k); }); th.appendChild(t); });
    function mark() { [].forEach.call(th.children, function (t, n) { t.classList.toggle('on', n === i); }); th.children[i].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' }); }
    function set() { img.src = data[i].src; img.alt = data[i].cap; cap.textContent = (i + 1) + '/' + data.length + ' \u00b7 ' + data[i].cap; mark(); }
    function go(k) {
      var dir = k >= i ? 1 : -1; i = (k + data.length) % data.length;
      img.style.opacity = 0; img.style.transform = 'translateX(' + (dir * 28) + 'px)'; cap.style.opacity = 0;
      setTimeout(function () { set(); img.style.transition = 'none'; img.style.transform = 'translateX(' + (-dir * 28) + 'px)'; void img.offsetWidth; img.style.transition = ''; img.style.opacity = 1; img.style.transform = 'none'; cap.style.opacity = 1; }, 200);
    }
    function close() { document.removeEventListener('keydown', key); o.remove(); document.body.style.overflow = ''; }
    function key(e) { if (e.key === 'Escape') close(); else if (e.key === 'ArrowRight') go(i + 1); else if (e.key === 'ArrowLeft') go(i - 1); }
    o.addEventListener('click', function (e) { if (e.target === o || e.target.classList.contains('pl-close')) { close(); return; } var b = e.target.closest('.pl-nav'); if (b) go(i + parseInt(b.getAttribute('data-d'), 10)); });
    o.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    o.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1)); });
    document.addEventListener('keydown', key); document.body.appendChild(o); document.body.style.overflow = 'hidden'; set();
  }
  document.querySelectorAll('.playlist').forEach(function (b) { b.addEventListener('click', function () { open(b.getAttribute('data-pl'), b.getAttribute('data-theme')); }); });
})();

(function () {
  var sp = document.createElement('div'); sp.className = 'sparks'; sp.setAttribute('aria-hidden', 'true');
  for (var k = 0; k < 8; k++) { var s = document.createElement('i'), z = 10 + Math.random() * 18; s.style.cssText = 'left:' + (Math.random() * 96) + '%;top:' + (Math.random() * 94) + '%;width:' + z + 'px;height:' + z + 'px;animation-duration:' + (3 + Math.random() * 4) + 's;animation-delay:' + (Math.random() * 5) + 's'; sp.appendChild(s); }
  document.body.insertBefore(sp, document.body.firstChild);
  function split() {
    document.querySelectorAll('main p, main li, main figcaption').forEach(function (el) {
      if (el.dataset.orig === undefined) { if (el.children.length) return; el.dataset.orig = el.textContent; }
      var t = el.dataset.orig.trim(); if (!t) return;
      el.classList.remove('split'); el.textContent = '';
      var spans = t.split(/\s+/).map(function (w) { var s = document.createElement('span'); s.textContent = w; s.style.display = 'inline'; el.appendChild(s); el.appendChild(document.createTextNode(' ')); return s; });
      var lines = [], last = null;
      spans.forEach(function (s) { var tp = s.offsetTop; if (last === null || Math.abs(tp - last) > 4) { lines.push([]); last = tp; } lines[lines.length - 1].push(s.textContent); });
      el.textContent = '';
      lines.forEach(function (ws) { var l = document.createElement('span'); l.className = 'ln'; l.textContent = ws.join(' '); el.appendChild(l); });
      el.classList.add('split');
    });
    document.querySelectorAll('.reveal').forEach(function (sec) { sec.querySelectorAll('.ln').forEach(function (l, k) { l.style.transitionDelay = (k % 26) * 60 + 'ms'; }); });
  }
  split(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(split);
  var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(split, 250); });
})();

(function () { var b = document.querySelector('.deco-btn'); if (b) b.addEventListener('click', function () { document.body.classList.toggle('nodeco'); }); })();
