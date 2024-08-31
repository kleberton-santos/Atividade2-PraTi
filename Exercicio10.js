// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let vendas = [
  { produto: "PS5", quantidade: 3, valor: 3000 },
  { produto: "TV", quantidade: 5, valor: 2500 },
];

let valordeVendas = 0;

vendas.forEach(venda => {
  valordeVendas += venda.quantidade * venda.valor;
});

console.log(`Valor de vendas: R$${valordeVendas}`);