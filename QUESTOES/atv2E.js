/*e) Faça um programa que receba 5 números informados pelo usuário e em seguida apresente uma
mensagem informando qual é o maior e qual é o menor dentre os números informados. */
let numeros = [];

for (let i = 0; i < 5; i++) {
    let input = prompt(`Digite o ${i + 1}º número:`);
    let numero = parseFloat(input);

    if (isNaN(numero)) {
        alert("Entrada inválida. Por favor, digite apenas números.");
        i--; 
    } else {
        numeros.push(numero);
    }
}

let maiorNumero = numeros[0];
let menorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }

    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
}

alert(`Entre os números informados (${numeros.join(', ')}):\n\n` +
      `O maior número é: ${maiorNumero}\n` +
      `O menor número é: ${menorNumero}`);