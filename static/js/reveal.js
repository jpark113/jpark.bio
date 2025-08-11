(function(){
  function rot13(s){
    return s.replace(/[a-zA-Z]/g, function(c){
      return String.fromCharCode(
        (c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
      );
    });
  }
  function decodePayload(raw){
    // We allow either rot13 or base64 for convenience.
    try {
      // Try base64 first
      return atob(raw);
    } catch(e){
      // Fallback to rot13
      return rot13(raw);
    }
  }
  function reveal(e){
    var t = e.target;
    if(!t || t.tagName !== 'BUTTON') return;
    var kind = t.getAttribute('data-kind');
    var payload = decodePayload(t.getAttribute('data-payload')||'');
    if(!payload) return;

    if(kind === 'email'){
      // Show as a mailto link
      var a = document.createElement('a');
      a.href = 'mailto:' + payload;
      a.textContent = payload;
      t.replaceWith(a);
    } else if(kind === 'phone'){
      var a = document.createElement('a');
      a.href = 'tel:' + payload.replace(/\s+/g,'');
      a.textContent = payload;
      t.replaceWith(a);
    }
  }

  document.addEventListener('click', function(e){
    if(e.target && e.target.matches('button[data-kind][data-payload]')){
      reveal(e);
    }
  }, false);
})();
