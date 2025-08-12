/*a) Crie um programa que receba 3 notas de um aluno (entre 0 e 10) e verifique se ele está aprovado
(média 7). */
let nota1 = parseFloat(prompt("Digite a primeira nota (entre 0 e 10):"));
let nota2 = parseFloat(prompt("Digite a segunda nota (entre 0 e 10):"));
let nota3 = parseFloat(prompt("Digite a terceira nota (entre 0 e 10):"));

if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    alert("Por favor, digite notas entre 0 e 10.");
} else {

    let media = (nota1 + nota2 + nota3) / 3;

    console.log("Média do aluno:", media.toFixed(2));

    if (media >= 7) {
        alert("Aluno APROVADO! Média: " + media.toFixed(2));
    } else {
        alert("Aluno REPROVADO. Média: " + media.toFixed(2));
    }
}