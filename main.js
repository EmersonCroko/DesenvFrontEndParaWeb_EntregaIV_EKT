document.addEventListener("DOMContentLoaded", () => {
  // Navegação SPA
  const botoes = document.querySelectorAll(".nav-btn");
  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      const rota = btn.dataset.route;
      navegarPara(rota);
    });
  });

  // Carrega a Home por padrão
  navegarPara("home");

  // Acessibilidade - Modo escuro e alto contraste
  document.getElementById("toggle-darkmode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  document.getElementById("toggle-contrast").addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });
});
