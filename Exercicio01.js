// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console. 

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021,
    cor: "Prata"
  };

  for (let carros in carro) {
    console.log(`${carros}: ${carro[carros]}`);
  }