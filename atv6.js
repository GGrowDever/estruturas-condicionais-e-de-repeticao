let largura = parseInt(prompt('Digite a Largura do terreno?'))
let comprimento = parseInt(prompt('Digite o Comprimento do terreno?'))
let areaM2 = largura * comprimento

if( areaM2 <= 100){
     console.log('TERRENO POPULAR');
}else if( areaM2  > 100 && areaM2 <= 500){
     console.log('TERRENO MASTER');
}else {
     console.log('TERRENO VIP');
}