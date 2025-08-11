(function(){
  var root = document.documentElement;
  function setTheme(mode){
    if(mode==="dark"){ root.classList.add("dark"); }
    else { root.classList.remove("dark"); }
    localStorage.setItem("pref-theme", mode);
  }
  document.addEventListener("click", function(e){
    var t = e.target.closest("#theme-toggle");
    if(!t) return;
    var isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });
})();
