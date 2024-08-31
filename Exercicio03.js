// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let produto = {
  nome: "PS5",
  preco: 3000,
  quantidade: 5,
};

function novoObjeto(produto, valor) {
    let resultado = {};
  
    for (let produtos in produto) {
      if (produto[produtos] > valor) {
        resultado[produtos] = produto[produtos];
      }
    }
  
    return resultado;
  }
  
 
  let valor = 10;
  let produtoFiltrado = novoObjeto(produto, valor);
  
  console.log(produtoFiltrado);