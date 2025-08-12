/*f) Romário tem 1,50m e cresce 2 centímetros por ano, enquanto Bebeto tem 1,10 e cresce 3
centímetros por ano. Construa um algoritmo que calcule em quantos anos Bebeto será maior que
Romário. */
const prompt = require("prompt-sync")();
let altura_romario = 150;
let altura_bebeto = 110;
let anos = 0;
while (altura_romario>=altura_bebeto){
    altura_bebeto += 3;
    altura_romario += 2;
    anos ++;
}
console.log(`Em ${anos} anos Bebeto será mais alto`);