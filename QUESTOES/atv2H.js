/*h) Considere as seguintes classificações de estabelecimentos tendo em conta a sua área:
 0 a 49 m2 – Mercearia
 50 a 399 m2 - Mercadinho
 400 a 999 m2 - Mercado
 1000 a 2499 m2 - Supermercado
 >=2500 m2 – Hipermercado
Escreva um programa que leia os valores de largura e profundidade de um terreno, calcule a área de
um estabelecimento e o classifique segundo o critério referido */
const prompt = require("prompt-sync")();
let comprimento = Number(prompt("digite a largura do seu terreno: "));
let altura = Number(prompt("digite a altura do seu terreno: "));
let valor ;
valor = altura * comprimento;
if (valor >= 0 && valor <=49){
 console.log("voce tem uma mercearia");

} else if(valor >=50 && valor <=399){
    console.log("voce tem uma mercadinho");

} else if(valor >=400 && valor <=999){
    console.log("voce tem uma mercado");

} else if(valor >= 1000 && valor <=2499){
    console.log("voce tem uma supermercado");

} else if(valor >=2500){
    console.log("voce tem uma hipermercado");
}