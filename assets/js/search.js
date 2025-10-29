// ======== busca.js ========
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".search-form");
  const input = form.querySelector("input[name='q']");
  const sections = document.querySelectorAll("main section");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const termo = input.value.toLowerCase().trim();
    if (!termo) return;

    let encontrou = false;

    sections.forEach(section => {
      const texto = section.textContent.toLowerCase();
      if (texto.includes(termo)) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        section.classList.add("destacado");
        setTimeout(() => section.classList.remove("destacado"), 2000);
        encontrou = true;
      }
    });

    if (!encontrou) {
      alert("Nenhum resultado encontrado para: " + termo);
    }
  });
});
