const templates = {
  home: `
    <section>
      <h2>Bem-vindo ao Projeto Cadastro de Integrantes</h2>
      <p>Este projeto demonstra versionamento, acessibilidade e deploy com GitHub Pages.</p>
      <img src="https://loremflickr.com/400/200/technology" alt="Imagem ilustrativa de um gato fofo" />
    </section>
  `,

  cadastro: `
    <section>
      <h2>Cadastro</h2>
      <form id="formCadastro" aria-label="Formulário de cadastro">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required />

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required />

        <button type="submit" class="submit">Cadastrar</button>
      </form>
    </section>
  `,

  lista: `
    <section>
      <h2>Lista de Cadastros</h2>
      <ul id="listaCadastros"></ul>
    </section>
  `
};
