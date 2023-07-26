let nome = prompt("Digite o nome do cliente:");
let sexo = prompt("Digite o sexo do cliente (M para masculino ou F para feminino):");
let valorCompras = parseFloat(prompt("Digite o valor das compras:"));
let desconto = 0;

if (sexo.toUpperCase() === "M") {
  desconto = valorCompras * 0.05; // 5% de desconto para homens
} else if (sexo.toUpperCase() === "F") {
  desconto = valorCompras * 0.13; // 13% de desconto para mulheres
}

let precoComDesconto = valorCompras - desconto;

console.log("Cliente: " + nome);
console.log("Valor das Compras: R$" + valorCompras.toFixed(2));
console.log("Desconto: R$" + desconto.toFixed(2));
console.log("Preço com Desconto: R$" + precoComDesconto.toFixed(2));
