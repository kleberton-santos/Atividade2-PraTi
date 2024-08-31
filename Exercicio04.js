// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.


let pessoas = [
    { nome: "Kleber", idade: 37, cidade: "São Paulo" },
    { nome: "Leticia", idade: 35, cidade: "São Paulo" },
  ];
  
  for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }