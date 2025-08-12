/* a) Crie um programa em que o usuário digite o nome, idade e altura de uma pessoa, armazene em
variáveis e imprima a seguinte frase: "Meu nome é ..., tenho ... anos e ...m de altura".*/
const prompt = require("prompt-sync")();
let altura, idade, nome;
nome = prompt("digite seu nome: ");
altura = prompt("digite sua altura: ");
idade = prompt("digite sua idade: ");
console.log("seu nome:",nome,"\nsua altura:",altura,"\nsua idade:",idade);