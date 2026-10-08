(function () {
  var burger = document.querySelector('.burger'), menu = document.getElementById('menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') menu.classList.remove('open'); });

  var roles = ['Data Entry', 'Document Control', 'IT Support', 'Editing Konten'], i = 0, el = document.getElementById('role');
  setInterval(function () { i = (i + 1) % roles.length; el.textContent = roles[i]; }, 2200);

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
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
  document.querySelectorAll('.cert img').forEach(function(im){im.addEventListener('click',function(){closeLb();var o=document.createElement('div');o.className='lb';o.innerHTML='<img alt="">';o.firstChild.src=im.src;o.firstChild.alt=im.alt;o.addEventListener('click',closeLb);document.body.appendChild(o);});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeLb();});
  document.getElementById('year').textContent = new Date().getFullYear();
})();
