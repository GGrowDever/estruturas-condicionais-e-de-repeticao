let distanciaKm = parseInt(prompt('Qual a distância desejada?'));
let valorKmCurto = 0.5;
let valorKmlongo = 0.45;

if (distanciaKm <= 200) {
	valorPassagem = distanciaKm * valorKmCurto;
	console.log(valorPassagem);
} else {
	valorPassagem = distanciaKm * valorKmlongo;
	console.log(valorPassagem);
}
