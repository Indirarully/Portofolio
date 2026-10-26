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
  document.querySelectorAll('.cert img,.shots img').forEach(function(im){im.addEventListener('click',function(){closeLb();var o=document.createElement('div');var th0=(im.closest('section')||{}).id,mp={experience:'pink',analytics:'aq',academic:'lil'};o.className='lb theme-'+(mp[th0]||'sky');o.innerHTML='<img alt=""><p class="lb-cap"></p>';var li=o.querySelector('img');li.src=im.src;li.alt=im.alt;o.querySelector('.lb-cap').textContent=im.alt||'';o.addEventListener('click',closeLb);document.body.appendChild(o);});});
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
  var PAL = [['#B6FF5C', '#6FD83A'], ['#FF9CC8', '#F27DA9'], ['#8CC8FA', '#4DA3F0'], ['#C9B8FF', '#8F88DB'], ['#FFF3B0', '#FFC24D'], ['#B6FF5C', '#6FD83A']];
  PAL.forEach(function (p, k) {
    var b = document.createElement('span'); b.className = 'bf';
    b.style.cssText = '--t:' + (8 + k * 13) + '%;--s:' + (34 + (k % 3) * 12) + 'px;--d:' + (34 + k * 6) + 's;--dl:-' + (k * 7) + 's;--l:' + (10 + k * 15) + '%';
    b.innerHTML = '<svg viewBox="0 0 100 70" aria-hidden="true"><g class="wl"><path d="M50 35C40 8 8 0 6 22C5 36 28 44 50 35Z" fill="' + p[0] + '"/><path d="M50 35C42 52 22 68 14 56C8 47 30 40 50 35Z" fill="' + p[1] + '"/></g><g class="wr"><path d="M50 35C60 8 92 0 94 22C95 36 72 44 50 35Z" fill="' + p[0] + '"/><path d="M50 35C58 52 78 68 86 56C92 47 70 40 50 35Z" fill="' + p[1] + '"/></g><rect x="48.5" y="22" width="3" height="26" rx="1.5" fill="#2E3A52"/></svg>';
    sp.appendChild(b);
  });
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

(function () {
  var BG = ['pasir', 'senja', 'malam', 'padang', 'game'], bi = 0;
  try { var s = localStorage.getItem('irp-bg'); if (s && BG.indexOf(s) > -1) bi = BG.indexOf(s); } catch (e) {}
  function setBg() { if (BG[bi] === 'pasir') document.body.removeAttribute('data-bg'); else document.body.setAttribute('data-bg', BG[bi]); try { localStorage.setItem('irp-bg', BG[bi]); } catch (e) {} }
  setBg(); setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 800);
  var bb = document.querySelector('.bg-btn'); if (bb) bb.addEventListener('click', function () { bi = (bi + 1) % BG.length; setBg(); setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 350); });

  document.querySelectorAll('.playlist').forEach(function (b) {
    var el = document.getElementById('pl-' + b.getAttribute('data-pl')); if (!el) return;
    var d = JSON.parse(el.textContent).slice(0, 3), old = b.querySelector('.stack'), n = old && old.querySelector('em') ? old.querySelector('em').textContent : '';
    var fan = document.createElement('span'); fan.className = 'fan';
    d.forEach(function (x) { var i = document.createElement('img'); i.src = x.src; i.alt = ''; fan.appendChild(i); });
    var em = document.createElement('em'); em.textContent = n; fan.appendChild(em);
    if (old) old.replaceWith(fan); else b.insertBefore(fan, b.firstChild);
  });

  function modal(theme, title, html) {
    var o = document.createElement('div'); o.className = 'pl-modal theme-' + theme; o.setAttribute('role', 'dialog'); o.setAttribute('aria-modal', 'true');
    o.innerHTML = '<div class="pl-box"><button class="pl-close" aria-label="Tutup">&times;</button><h3 class="pl-title"></h3><div class="pl-body"></div></div>';
    o.querySelector('.pl-title').textContent = title; o.querySelector('.pl-body').innerHTML = html;
    function close() { document.removeEventListener('keydown', key); o.remove(); document.body.style.overflow = ''; }
    function key(e) { if (e.key === 'Escape') close(); }
    o.addEventListener('click', function (e) { if (e.target === o || e.target.classList.contains('pl-close')) close(); });
    document.addEventListener('keydown', key); document.body.appendChild(o); document.body.style.overflow = 'hidden'; return o;
  }
  window.irpModal = modal;


  function contact() {
    var html = '<h4>Profile Contact</h4><p class="chips"><a class="chip pink" href="mailto:Navrida.indira@gmail.com">Navrida.indira@gmail.com</a><a class="chip aq" href="https://wa.me/6285776093937" target="_blank" rel="noopener">+62 857-7609-3937</a><a class="chip sky" href="https://www.linkedin.com/in/indira-rully-pricilia-56661528b" target="_blank" rel="noopener">LinkedIn</a><a class="chip lil" href="https://github.com/Indirarully" target="_blank" rel="noopener">GitHub</a><a class="chip pink" href="https://indirarully.github.io/Portofolio/" target="_blank" rel="noopener">Portofolio</a></p><p class="chips"><button class="chip lime" data-copy="Navrida.indira@gmail.com" type="button">Salin email</button><button class="chip lime" data-copy="+6285776093937" type="button">Salin nomor WA</button></p>' +
      '<h4>Motivasi Mendaftar Magang</h4><p>Saya lulusan baru S1 Teknik Informatika yang ingin mengubah bekal akademik menjadi pengalaman kerja yang nyata. Magang di Pusdatin BASARNAS menunjukkan bahwa saya menikmati pekerjaan yang menuntut ketelitian: mengelola data ratusan pegawai, merekonsiliasi laporan, dan mengarsipkan dokumen dengan akurasi tinggi.</p>' +
      '<p>Melalui MagangHub saya ingin belajar standar kerja profesional di perusahaan, memperdalam kemampuan administrasi data dan IT support (Excel, SQL, dan troubleshooting), serta berkontribusi dengan disiplin dan kemauan belajar yang cepat. Saya siap menjalani program penuh waktu sesuai ketentuan dan terbuka terhadap bimbingan mentor.</p>';
    modal('gold', 'Profile Contact & Motivasi', html);
  }
  var oc = document.getElementById('open-contact'); if (oc) oc.addEventListener('click', contact);
})();

(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var pb = document.createElement('div'); pb.className = 'prog'; pb.innerHTML = '<i></i>'; document.body.appendChild(pb);
  var tt = document.createElement('button'); tt.className = 'totop'; tt.type = 'button'; tt.setAttribute('aria-label', 'Kembali ke atas'); tt.textContent = '\u25B2'; document.body.appendChild(tt);
  tt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  window.addEventListener('scroll', function () { var h = document.documentElement, p = h.scrollTop / ((h.scrollHeight - h.clientHeight) || 1); pb.firstChild.style.width = (p * 100) + '%'; tt.classList.toggle('show', h.scrollTop > 500); });

  var toast = document.createElement('div'); toast.className = 'toast'; document.body.appendChild(toast);
  function say(t) { toast.textContent = t; toast.classList.add('show'); clearTimeout(say.t); say.t = setTimeout(function () { toast.classList.remove('show'); }, 1700); }
  document.addEventListener('click', function (e) { var b = e.target.closest('[data-copy]'); if (!b) return; var v = b.getAttribute('data-copy'); if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(function () { say('Tersalin: ' + v); }); else say(v); });

  if (!reduce && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (es) { es.forEach(function (e) {
      if (!e.isIntersecting) return; cio.unobserve(e.target);
      var t = e.target, txt = t.textContent.trim(), pct = /%$/.test(txt), dec = /,/.test(txt), v = parseFloat(txt.replace(',', '.')), st = null; if (isNaN(v) || !/^[\d.,]+%?$/.test(txt)) return;
      (function f(ts) { if (!st) st = ts; var p = Math.min((ts - st) / 1200, 1), cur = v * (1 - Math.pow(1 - p, 3)); t.textContent = (dec ? cur.toFixed(2).replace('.', ',') : Math.round(cur)) + (pct ? '%' : ''); if (p < 1) requestAnimationFrame(f); })(performance.now());
    }); }, { threshold: .6 });
    document.querySelectorAll('.stat b').forEach(function (x) { cio.observe(x); });
  }

  var SPR = [
    { m: ['.##.##.', '#######', '#######', '.#####.', '..###..', '...#...'], c: '#FF3B6B' },
    { m: ['..##..', '.####.', '######', '######', '.####.', '..##..'], c: '#FFD93B' },
    { m: ['...#...', '...#...', '#######', '.#####.', '..###..', '.##.##.', '.#...#.'], c: '#FFE45C' }
  ];
  function sprite(sp) { var h = sp.m.length, w = sp.m[0].length, r = ''; sp.m.forEach(function (row, y) { for (var x = 0; x < w; x++) if (row[x] === '#') r += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>'; }); return '<svg viewBox="0 0 ' + w + ' ' + h + '" shape-rendering="crispEdges" fill="' + sp.c + '" aria-hidden="true">' + r + '</svg>'; }
  var host = document.querySelector('.sparks');
  if (host) for (var k = 0; k < 9; k++) { var px = document.createElement('span'); px.className = 'px'; px.style.cssText = '--l:' + (5 + k * 10.5) + '%;--s:' + (24 + (k % 3) * 8) + 'px;--d:' + (14 + (k % 4) * 4) + 's;--dl:-' + (k * 3) + 's'; px.innerHTML = sprite(SPR[k % 3]); host.appendChild(px); }

})();

(function () {
  var LI = 'https://www.linkedin.com/in/indira-rully-pricilia-56661528b';
  var Q = {
    bakat: ['pink', 'Bakat Saya', '<h4>Yang paling natural</h4><ul><li><b>Teliti dengan data dan angka.</b> Terbiasa mengecek ulang dan menghitung cepat; akurasi input 100% saat magang di BASARNAS.</li><li><b>Cepat belajar tools baru.</b> Dari Excel dan phpMyAdmin sampai Figma, saya terbiasa mencoba lalu menguasainya.</li><li><b>Merangkai konten.</b> Mengedit video pendek dan menulis caption secara konsisten; kanal mencapai 5,7 juta+ penayangan.</li><li><b>Logika dan analisis.</b> Skripsi saya menganalisis data preferensi pengguna; nilai UN Matematika 100.</li><li><b>Musik dan bahasa.</b> Pernah aktif di marching band dan English Club; Inggris B2 (TOEFL Prediction 563), Korea dasar.</li></ul>'],
    profil: ['sky', 'Profil Singkat', '<div class="kv"><b>Nama</b><span>Indira Rully Pricilia, S.Kom</span><b>Domisili</b><span>Bekasi, Jawa Barat</span><b>Pendidikan</b><span>S1 Teknik Informatika, Universitas Pelita Bangsa; IPK 3,74; Predikat Pujian; lulus 26 Juli 2026</span><b>Target</b><span>Staf Administrasi, Data Entry, IT Support (pemula)</span><b>Bahasa</b><span>Indonesia (mahir), Inggris (TOEFL Prediction 563), Korea (dasar)</span><b>Pengalaman</b><span>Magang administrasi data Pusdatin BASARNAS (2025); asisten administrasi kantor pemasaran; editor konten fanbase</span></div><div class="btnrow"><a class="btn" href="' + LI + '" target="_blank" rel="noopener">LinkedIn</a><a class="btn ghost" href="mailto:Navrida.indira@gmail.com">Kirim email</a></div>'],
    kerja: ['aq', 'Cara Kerja Saya', '<h4>Kebiasaan kerja</h4><ul><li>Mengecek ulang (cross-check) sebelum menyerahkan pekerjaan.</li><li>Memecah pekerjaan besar menjadi bagian kecil dengan tenggat sendiri.</li><li>Menyimpan arsip rapi: nama file, versi, dan kategori yang jelas.</li><li>Bertanya lebih dulu jika ragu, daripada menebak.</li></ul><h4>Kalau datanya banyak</h4><ul><li>Dibagi per batch, memakai template dan validasi data.</li><li>Memeriksa total dan sampel acak setelah tiap batch.</li><li>Menyimpan cadangan sebelum mengubah data.</li></ul>'],
    belajar: ['lil', 'Sedang Saya Asah', '<ul><li><b>Microsoft Excel:</b> XLOOKUP dan Pivot Table (dasar).</li><li><b>SQL dan basis data:</b> latihan lewat proyek MySQL dan phpMyAdmin.</li><li><b>UI/UX:</b> Figma, prototipe, dan pengujian pengguna.</li><li><b>Digital marketing:</b> mini course RevoU (Oktober 2026).</li><li><b>Otomasi:</b> AI Workflow n8n (Bisa.ai) dan webinar UiPath.</li><li><b>Bahasa Inggris:</b> latihan TOEFL untuk skor yang lebih tinggi.</li></ul><p>Saya senang belajar dengan membuat sesuatu yang nyata, bukan hanya membaca teori.</p>'],
    magang: ['lime', 'Siap Magang', '<p>Saya lulusan baru S1 Teknik Informatika yang ingin mengubah bekal akademik menjadi pengalaman kerja nyata. Magang di Pusdatin BASARNAS menunjukkan bahwa saya menikmati pekerjaan yang menuntut ketelitian.</p><ul><li>Siap menjalani program penuh waktu sesuai ketentuan MagangHub Kemnaker.</li><li>Terbuka terhadap bimbingan mentor dan penempatan sesuai kebutuhan perusahaan.</li><li>Posisi yang diincar: Staf Administrasi, Data Entry, atau IT Support / administrasi data.</li></ul><div class="btnrow"><a class="btn" href="https://maganghub.kemnaker.go.id" target="_blank" rel="noopener">Buka MagangHub</a><a class="btn ghost" href="https://wa.me/6285776093937" target="_blank" rel="noopener">Hubungi via WhatsApp</a></div>']
  };
  document.querySelectorAll('.qbtn').forEach(function (b) { b.addEventListener('click', function () { var q = Q[b.getAttribute('data-q')]; if (q && window.irpModal) window.irpModal(q[0], q[1], q[2]); }); });
})();
