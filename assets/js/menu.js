// ======== menu.js ========
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector("nav ul.flex--nav");

  // Abrir / fechar menu
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("ativo");
    const expanded = navList.classList.contains("ativo");
    menuToggle.setAttribute("aria-expanded", expanded);
    menuToggle.textContent = expanded ? "✕" : "☰";
  });

  // Fechar menu ao clicar em um link
  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("ativo");
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-expanded", false);
    });
  });
});
