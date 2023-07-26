let primeiroValor = parseInt(prompt("Digite o primeiro valor:"));
let ultimoValor = parseInt(prompt("Digite o último valor:"));
let incremento = parseInt(prompt("Digite o incremento:"));

console.log("Contagem:");

for (let i = primeiroValor; i <= ultimoValor; i += incremento) {
  console.log(i);
}

console.log("Acabou!");


