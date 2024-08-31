// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let carrinho = {
  itens: [
    { nome: "PS5", quantidade: 2, precoUnitario: 3000 },
    { nome: "TV", quantidade: 1, precoUnitario: 2500 },
  ]
};

let valorTotalCarrinho = 0;

carrinho.itens.forEach(item => {
  let valorItem = item.quantidade * item.precoUnitario;
  valorTotalCarrinho += valorItem;
});

console.log(`Valor total do carrinho: R$${valorTotalCarrinho}`);