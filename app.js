// Drawer mobile
const burger = document.getElementById('jmBurger');
const drawer = document.getElementById('jmDrawer');

function setDrawer(open){
  drawer.style.display = open ? 'block' : 'none';
  drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
}

burger?.addEventListener('click', () => {
  const isOpen = burger.getAttribute('aria-expanded') === 'true';
  setDrawer(!isOpen);
});

// Close drawer on link click
drawer?.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=> setDrawer(false));
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click", (e)=>{
    const id = a.getAttribute("href");
    if(!id || id === "#") return;
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior:"smooth", block:"start" });
  });
});
