// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clientes = [
  { nome: "Rafa", idade: 20, cidade: "São Paulo" },
  { nome: "Manoela", idade: 31, cidade: "Rio de Janeiro" },
  { nome: "João Pedro", idade: 18, cidade: "São Paulo" },
];

let acimaDe30 = 0;

clientes.forEach(cliente => {
  if (cliente.idade > 30) {
    acimaDe30++;
  }
});

console.log(`Clientes com mais de 30 anos: ${acimaDe30}`);