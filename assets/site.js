/* Light/dark: a saved choice wins; otherwise the visitor's phone/computer setting (and it follows that
   setting live until they press 🌓). Runs in <head> so there's no flash. site.css has a no-JS fallback. */
(function(){
  var K='scd-theme', d=document.documentElement, mq=window.matchMedia&&matchMedia('(prefers-color-scheme: dark)');
  function saved(){ try{ var t=localStorage.getItem(K); return (t==='dark'||t==='light')?t:''; }catch(e){ return ''; } }
  function apply(){ d.dataset.theme=saved()||(mq&&mq.matches?'dark':'light'); }
  apply();
  if(mq){ var on=function(){ if(!saved()) apply(); }; mq.addEventListener?mq.addEventListener('change',on):mq.addListener&&mq.addListener(on); }
  document.addEventListener('click',function(e){
    if(!e.target.closest('[data-theme-toggle]')) return;
    var n=d.dataset.theme==='dark'?'light':'dark'; d.dataset.theme=n;
    try{ localStorage.setItem(K,n); }catch(e){}
  });
})();
