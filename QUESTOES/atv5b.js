/*b) Crie uma calculadora. Nela, você deverá criar uma função que recebe dois números como
parâmetro para cada operação básica (adição, subtração, divisão e multiplicação) e retorna o
valor para onde a função for chamada. Ao final, executar cada operação 2 vezes com valores
diferentes. */
const prompt = require("prompt-sync")();
console.log("digte os seus dois valores:");
let numero1 = Number(prompt("--> "));
let numero2 = Number(prompt("--> "));

let resultsoma = somar(numero1, numero2);
let resultsub = subtrair(numero1, numero2);
let resultmult = multiplicar(numero1, numero2);
let resultdiv = dividir(numero1, numero2);

console.log(`Esse é o resultado da sua soma:${resultsoma}`);
console.log(`Esse é o resultado da sua subtração:${resultsub}`);
console.log(`Esse é o resultado da sua multiplicação:${resultmult}`);
console.log(`Esse é o resultado da sua divisão:${resultdiv}`);






function somar(num1, num2){
    return num1 + num2;
}
function subtrair(num1, num2){
    return num1 - num2;
}
function multiplicar(num1, num2){
    return num1 * num2;
}
function dividir(num1, num2){
    if (num2 !== 0){
        return num1 / num2;
    } else {
        return 'Erro';
    }
}
