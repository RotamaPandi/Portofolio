(function(){
var rows=document.querySelectorAll('#checks li .st'),count=0,verdict=document.getElementById('verdict');
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function mark(i){rows[i].textContent='passed';rows[i].className='st ok';if(i===rows.length-1)verdict.textContent='All checks passed. Ready to release.'}
rows.forEach(function(_,i){if(reduce)mark(i);else setTimeout(function(){mark(i)},1000+i*600)});
var g=document.getElementById('glow');
if(!reduce)window.addEventListener('pointermove',function(e){g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
document.getElementById('tg').addEventListener('click',function(){
var r=document.documentElement,dark=r.getAttribute('data-theme')?r.getAttribute('data-theme')==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;
r.setAttribute('data-theme',dark?'light':'dark');});
})();
