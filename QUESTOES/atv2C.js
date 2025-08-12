/*c) Crie um programa que pergunte a idade de uma pessoa e classifique:
 Até 12 anos: "Criança"
 De 13 a 17: "Adolescente"
 De 18 a 64: "Adulto"
 65 ou mais: "Idoso" */
let idade = parseInt(prompt("Digite a idade da pessoa:"));

let classificacao;

if (isNaN(idade) || idade < 0) {
    classificacao = "Idade inválida. Por favor, digite um número positivo.";
} else if (idade <= 12) {
    classificacao = "Criança";
} else if (idade >= 13 && idade <= 17) {
    classificacao = "Adolescente";
} else if (idade >= 18 && idade <= 64) {
    classificacao = "Adulto";
} else {
    classificacao = "Idoso";
}

alert("A pessoa é classificada como: " + classificacao);