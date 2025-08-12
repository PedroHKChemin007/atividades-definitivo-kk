/* c) OPCIONAL: Com base na calculadora do exercício anterior, utilizando um switch, de modo
que o usuário digita uma operação, dois números e veja o resultado.*/
const prompt = require("prompt-sync")();
console.log("digte os seus dois valores:");
let numero1 = Number(prompt("---> "));
let numero2 = Number(prompt("---> "));
console.log("--------------------------------------");
console.log('1 - Soma');
console.log('2 - Subtração');
console.log('3 - Multiplicação');
console.log('4 - Divisão');
console.log("Digite a operação:");
let op = Number(prompt("---> "));
console.log("--------------------------------------");
switch(op){
    case 1:
        let resultsoma = somar(numero1, numero2);
        console.log(`Esse é o resultado da sua soma:${resultsoma}`);
        break;
    case 2:
        let resultsub = subtrair(numero1, numero2);
        console.log(`Esse é o resultado da sua subtração:${resultsub}`);
        break;
    case 3:
        let resultmult = multiplicar(numero1, numero2);
        console.log(`Esse é o resultado da sua multiplicação:${resultmult}`);
        break;
    case 4:
        let resultdiv = dividir(numero1, numero2);
        console.log(`Esse é o resultado da sua divisão:${resultdiv}`);
        break;
    default:
        return 0;
}

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