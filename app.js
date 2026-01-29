// Année automatique dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll (Safari friendly)
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
