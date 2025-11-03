function validarFormulario(form) {
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();

  if (!nome || !email) {
    alert("Por favor, preencha todos os campos!");
    return false;
  }

  if (!email.includes("@")) {
    alert("Digite um e-mail válido!");
    return false;
  }

  return true;
}
