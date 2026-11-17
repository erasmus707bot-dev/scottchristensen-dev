/* Light by default; the choice is remembered (localStorage). Runs in <head> so there's no flash. */
(function(){
  var K='scd-theme', d=document.documentElement;
  try{ var t=localStorage.getItem(K); if(t==='dark'||t==='light') d.dataset.theme=t; }catch(e){}
  document.addEventListener('click',function(e){
    if(!e.target.closest('[data-theme-toggle]')) return;
    var n=d.dataset.theme==='dark'?'light':'dark'; d.dataset.theme=n;
    try{ localStorage.setItem(K,n); }catch(e){}
  });
})();
