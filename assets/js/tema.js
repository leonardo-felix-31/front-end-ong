// ======== tema.js ========
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "theme-toggle";
  toggleBtn.textContent = "🌓 Modo Escuro";
  toggleBtn.setAttribute("aria-label", "Alternar modo escuro");
  document.body.prepend(toggleBtn);

 
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
    toggleBtn.textContent = "🌞 Modo Claro";
  }

  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    const isDark = document.documentElement.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "🌞 Modo Claro" : "🌓 Modo Escuro";
  });
});
