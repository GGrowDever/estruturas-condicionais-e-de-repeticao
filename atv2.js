let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar = true;

while (continuar) {
  let salario = parseFloat(prompt("Digite o salário do funcionário:"));
  let sexo = prompt("Digite o sexo do funcionário (M ou F):").toUpperCase();

  if (sexo === 'M') {
    totalSalarioHomens += salario;
  } else if (sexo === 'F') {
    totalSalarioMulheres += salario;
  } else {
    console.log("Sexo inválido.");
  }

  let opcao = prompt("Deseja continuar? (S/N)").toUpperCase();
  if (opcao === "N") {
    continuar = false;
  }
}

console.log("Total de salários pagos aos homens:", totalSalarioHomens);
console.log("Total de salários pagos às mulheres:", totalSalarioMulheres);
