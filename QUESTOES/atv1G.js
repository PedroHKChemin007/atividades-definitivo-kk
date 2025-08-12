/* g) Escreva um algoritmo que receba um número e imprima uma das seguintes mensagens: “É
múltiplo de três” ou “Não é múltiplo de três”.*/
let numero = parseInt(prompt("Digite um número inteiro:"));

if (numero % 3 === 0) {
    alert("O número " + numero + " É múltiplo de três.");
} else {
    alert("O número " + numero + " NÃO é múltiplo de três.");
}
