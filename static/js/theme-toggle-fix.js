/* Nudge PaperMod theme toggle if it fails to initialize for any reason */
(function(){
  function apply(theme){
    var root=document.documentElement;
    if(theme==="dark"){ root.classList.add('dark'); root.classList.remove('light'); }
    else if(theme==="light"){ root.classList.add('light'); root.classList.remove('dark'); }
    else { // auto
      var prefers=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
      apply(prefers); return;
    }
  }
  function init(){
    var key='pref-theme';
    var current=localStorage.getItem(key)||'auto';
    apply(current);
    var btn=document.querySelector('.theme-toggle, #theme-toggle');
    if(btn && !btn.dataset.bound){
      btn.dataset.bound="1";
      btn.addEventListener('click', function(){
        var now=localStorage.getItem(key)||'auto';
        var next= now==='dark' ? 'light' : 'dark';
        localStorage.setItem(key, next);
        apply(next);
      }, {passive:true});
    }
  }
  if(document.readyState==="loading") document.addEventListener('DOMContentLoaded', init);
  else init();
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(){ init(); });
})();
