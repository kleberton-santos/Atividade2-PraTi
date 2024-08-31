// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
  { nome: "PS5", preco: 3000, desconto: 0.1 },
  { nome: "TV", preco: 2500, desconto: 0.1 },
];

produtos.forEach(produto => {
  let desconto = produto.preco * produto.desconto;
  let novoPreco = produto.preco - desconto;

  produto.preco = novoPreco;
  
  console.log(`Produto: ${produto.nome}, Novo Preço: R$${novoPreco}`);
});