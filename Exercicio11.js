// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

let pedidos = [
  { cliente: "Kleber", produto: "PS5", quantidade: 1 },
  { cliente: "Leticia", produto: "Sapato", quantidade: 2 },
  { cliente: "Heitor", produto: "Brinquedo", quantidade: 1 },
];

let totalCliente = {};

pedidos.forEach(pedido => {

  if (!totalCliente[pedido.cliente]) {
    totalCliente[pedido.cliente] = 0;
  }

  totalCliente[pedido.cliente] += pedido.quantidade;
});

console.log(totalCliente);