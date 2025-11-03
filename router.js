function navegarPara(route) {
  const app = document.getElementById("app");
  app.innerHTML = templates[route];
  app.focus();

  if (route === "cadastro") {
    const form = document.getElementById("formCadastro");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validarFormulario(form)) {
        const data = Storage.get();
        data.push({
          nome: form.nome.value,
          email: form.email.value
        });
        Storage.save(data);
        alert("Cadastro realizado com sucesso!");
        form.reset();
      }
    });
  }

  if (route === "lista") {
    const lista = document.getElementById("listaCadastros");
    const data = Storage.get();
    lista.innerHTML = data.map(item => `<li>${item.nome} - ${item.email}</li>`).join("");
  }
}
