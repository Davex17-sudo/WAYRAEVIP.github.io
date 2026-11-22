const header=document.getElementById('header');
const menu=document.getElementById('menuBtn');
const links=document.getElementById('navlinks');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>70),{passive:true});
menu.addEventListener('click',()=>{links.classList.toggle('open');menu.textContent=links.classList.contains('open')?'×':'☰';});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.textContent='☰';}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
