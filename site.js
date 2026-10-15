(function(){
var d=document.documentElement;d.classList.add('js');
try{if(!CSS.supports('selector(:has(*))'))d.classList.add('no-has');}catch(e){d.classList.add('no-has');}
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});els.forEach(function(el){io.observe(el);});}
else{els.forEach(function(el){el.classList.add('in');});}
var f=document.getElementById('req');
if(f){
 var m=location.search.match(/type=([a-z-]+)/);
 if(m){var r=f.querySelector('input[name=type][value="'+m[1]+'"]');if(r){r.checked=true;if(/^(c-|bid)/.test(m[1])){var c=document.getElementById('s-com');if(c)c.checked=true;}}}
 f.addEventListener('submit',function(ev){ev.preventDefault();var msg=document.getElementById('form-msg');msg.classList.add('show');msg.focus();});
}
})();
