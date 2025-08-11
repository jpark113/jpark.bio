(function(){
  function b64dec(s){try{return atob(s);}catch(e){return ""}}
  function makeLink(t, v){
    if(t==="phone"){ return ["tel:"+v.replace(/\s+/g,""), v]; }
    return ["mailto:"+v, v];
  }
  document.addEventListener("click", function(e){
    var btn = e.target.closest(".btn-reveal");
    if(!btn) return;
    var wrap = btn.closest(".reveal-wrap");
    var type = wrap.getAttribute("data-type");
    var enc  = wrap.getAttribute("data-enc");
    var val  = b64dec(enc);
    if(!val) return;
    var a = document.createElement("a");
    var pair = makeLink(type, val);
    a.href = pair[0];
    a.rel  = "nofollow noopener";
    a.textContent = pair[1];
    var tgt = wrap.querySelector(".reveal-target");
    if(tgt){ tgt.innerHTML=""; tgt.appendChild(a); }
    btn.remove(); // remove the button after reveal
  });
})();
