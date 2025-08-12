/*f) Calcular a soma de todos os números ímpares maiores que 10 e menores que 30. */
let somaImpares = 0; 

for (let i = 11; i < 30; i++) {

    if (i % 2 !== 0) {
        somaImpares += i; 
    }
}

console.log("A soma dos números ímpares maiores que 10 e menores que 30 é:", somaImpares);
alert("A soma dos números ímpares maiores que 10 e menores que 30 é: " + somaImpares);