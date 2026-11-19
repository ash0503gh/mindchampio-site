(function(){document.documentElement.classList.add('js');
var b=document.querySelector('.menu');if(b){b.addEventListener('click',function(){var o=document.body.classList.toggle('open');b.setAttribute('aria-expanded',o);});
document.querySelectorAll('.nav a').forEach(function(a){a.addEventListener('click',function(){document.body.classList.remove('open');b.setAttribute('aria-expanded','false');});});}
var h=document.querySelector('header');addEventListener('scroll',function(){h&&h.classList.toggle('scrolled',scrollY>8);},{passive:true});
var els=document.querySelectorAll('.rv');if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});els.forEach(function(e){io.observe(e);});}else els.forEach(function(e){e.classList.add('in');});})();
