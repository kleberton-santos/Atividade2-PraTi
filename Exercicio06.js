// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    { nome: "Edvaldo", cargo: "Auxiliar Hospitalar", salario: 7000 },
    { nome: "Sirlene", cargo: "Agente de Saúde", salario: 4500 },
  ];

  for (let funcionario of funcionarios) {
    if (funcionario.salario > 5000) {
      console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salario: ${funcionario.salario}`);
    }
  }