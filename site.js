// 預覽用：?palette=2|3 換配色（記在 sessionStorage，換頁後仍保留）；手機選單開關。Wix 用原生選單，不需要這個檔案。
(function () {
  var d = document.documentElement;
  var q = new URLSearchParams(location.search).get('palette');
  try { if (q) sessionStorage.setItem('palette', q); q = sessionStorage.getItem('palette'); } catch (e) {}
  if (q) d.setAttribute('data-palette', q);

  var t = document.querySelector('.menu-toggle');
  var m = document.getElementById('menu');
  if (!t || !m) return;
  function set(open) {
    m.classList.toggle('open', open);
    t.setAttribute('aria-expanded', String(open));
    t.setAttribute('aria-label', open ? '關閉選單' : '開啟選單');
  }
  t.addEventListener('click', function () { set(!m.classList.contains('open')); });
  m.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
})();
