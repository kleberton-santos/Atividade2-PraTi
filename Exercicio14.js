// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

let empresa = {
  departamentos: [
    {
      nome: "RH",
      funcionarios: [
        { nome: "Kleber", cargo: "Gerente" },
        { nome: "Leticia", cargo: "Assistente" }
      ]
    },
    {
      nome: "Desenvolvimento",
      funcionarios: [
        { nome: "Mayara", cargo: "Desenvolvedora Front-end" },
        { nome: "Wellinton", cargo: "Desenvolvedor Back-end" }
      ]
    }
  ]
};

for (let departamento in empresa.departamentos) {
  let depto = empresa.departamentos[departamento];
  console.log(`Departamento: ${depto.nome}`);

  for (let funcionario of depto.funcionarios) {
    console.log(`Funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
  }
}