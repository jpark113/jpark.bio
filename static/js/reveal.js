(function(){
  function rot47(s){
    return s.replace(/[\x21-\x7E]/g, function(c){
      return String.fromCharCode(33 + ((c.charCodeAt(0) - 33 + 47) % 94));
    });
  }
  function clickHandler(ev){
    var b=ev.currentTarget;
    if(b.dataset.shown==="1") return;
    var kind=b.dataset.kind;
    var val=rot47(b.dataset.payload);
    if(kind==="email"){
      var a=document.createElement('a');
      a.href='mailto:'+val;
      a.textContent=val;
      b.replaceWith(a);
    }else if(kind==="phone"){
      var a=document.createElement('a');
      a.href='tel:'+val.replace(/\s+/g,'');
      a.textContent=val;
      b.replaceWith(a);
    }
    b.dataset.shown="1";
  }
  function ready(){
    document.querySelectorAll('[data-reveal]').forEach(function(btn){
      btn.addEventListener('click', clickHandler, {passive:true});
    });
  }
  if(document.readyState==="loading") document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();
