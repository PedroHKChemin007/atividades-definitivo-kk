/*g) Crie um sistema de validação de cadastro, onde o usuário vai preencher nome, idade e e-mail.
O sistema deverá verificar:
 Se o nome foi preenchido
 Se a idade é maior ou igual a 18
 Se o e-mail contém "@"
Em seguida, deverá mostrar no console “Cadastro realizado com sucesso!” ou “Preencha os dados
corretamente.” */
const prompt = require("prompt-sync")();

let idade, email, nome;
nome  = prompt("digite seu nome: " );
idade = prompt("digite sua idade: ");
email = prompt("digite seu email: ");

console.log("Idade preenchida!");
console.log("Nome preenchido!");

if(email.includes("@") ){
console.log("email correto");
console.log("Cadastro realizado com sucesso!");
}
else{
    console.log("você digitou errado o email, tente novamente");
}