/*b) Crie um código que verifique se um número é par ou ímpar. */
let numero = parseInt(prompt("Digite um número inteiro:"));

if (isNaN(numero)) {
    alert("Entrada inválida. Por favor, digite um número.");
} else {

    if (numero % 2 === 0) {
        alert("O número " + numero + " é PAR.");
    } else {
        alert("O número " + numero + " é ÍMPAR.");
    }
}