(function(){
  var btn = document.querySelector('button#theme-toggle, .theme-toggle, button[title="Toggle theme"]');
  if(!btn) return;
  btn.addEventListener('click', function(){
    try {
      var current = localStorage.getItem('pref-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('pref-theme', next);
    } catch(e){}
  }, { once:false });
})();
