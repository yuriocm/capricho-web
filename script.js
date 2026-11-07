const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
const dropdown=document.querySelector('.dropdown');
const dropdownTrigger=document.querySelector('.dropdown-trigger');

menuToggle.addEventListener('click',()=>{
  const isOpen=nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(isOpen));
  menuToggle.setAttribute('aria-label',isOpen?'Cerrar menú':'Abrir menú');
});
dropdownTrigger.addEventListener('click',()=>{
  const isOpen=dropdown.classList.toggle('open');
  dropdownTrigger.setAttribute('aria-expanded',String(isOpen));
});
document.querySelectorAll('.main-nav a').forEach(link=>{
  link.addEventListener('click',()=>{
    nav.classList.remove('open');
    dropdown.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
    dropdownTrigger.setAttribute('aria-expanded','false');
  });
});
document.addEventListener('click',event=>{
  if(!dropdown.contains(event.target)){
    dropdown.classList.remove('open');
    dropdownTrigger.setAttribute('aria-expanded','false');
  }
});

const revealItems=document.querySelectorAll('.product-section,.coffee-section,.contact-section,.intro-band,.collection-heading');
revealItems.forEach(item=>item.classList.add('reveal'));
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12});
  revealItems.forEach(item=>observer.observe(item));
}else{
  revealItems.forEach(item=>item.classList.add('visible'));
}

window.addEventListener('resize',()=>{
  if(window.innerWidth>680){
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
  }
});
