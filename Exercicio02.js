// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
    titulo: "O Hobbit",
    autor: "Tolkien",
    anoPublicacao: 1954,
    genero: "Aventura"
  };

  let existeEditora = false;

  for (let livros in livro) {
    if (livros === "editora") {
      existeEditora = true;
      break;
    }
  }

  if (!existeEditora) {
    livro.editora = "WMF Martins Fontes";
  }

  console.log(livro);