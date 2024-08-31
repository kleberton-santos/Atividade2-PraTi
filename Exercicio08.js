// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

let filmes = [
  { titulo: "O Senhor dos Anéis As Duas Torres", diretor: "Petter Jackson", anoLancamento: 2003 },
  { titulo: "Star Wars", diretor: "George Lucas", anoLancamento: 1987 }
];

let titulos = [];

filmes.forEach(filme => {
  titulos.push(filme.titulo);
});

console.log(titulos);