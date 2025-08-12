/*d) Crie um código em que o usuário digite a idade e o sexo de uma pessoa. O programa deve
responder se o alistamento militar é obrigatório para aquela pessoa naquele ano. */
let idade = parseInt(prompt("Digite a idade da pessoa:"));

let sexo = prompt("Digite o sexo da pessoa (M para Masculino, F para Feminino):").toLowerCase();

let mensagemAlistamento = "";

if (isNaN(idade) || idade < 0) {
    mensagemAlistamento = "Idade inválida. Por favor, digite um número positivo.";
} else if (sexo !== 'm' && sexo !== 'f') {
    mensagemAlistamento = "Sexo inválido. Por favor, digite 'M' para Masculino ou 'F' para Feminino.";
} else {

    if (sexo === 'm' && idade === 18) {
        mensagemAlistamento = "Seu alistamento militar é OBRIGATÓRIO neste ano.";
    } else if (sexo === 'm' && idade > 18) {
        mensagemAlistamento = "Seu alistamento militar é OBRIGATÓRIO, e você já deveria ter se alistado. Procure a Junta de Serviço Militar mais próxima para regularizar sua situação.";
    } else if (sexo === 'm' && idade < 18) {
        mensagemAlistamento = `Seu alistamento militar será obrigatório quando você completar 18 anos. Faltam ${18 - idade} ano(s) para o seu alistamento.`;
    } else { // sexo === 'f'
        mensagemAlistamento = "Para mulheres, o alistamento militar não é obrigatório em tempo de paz.";
    }
}

alert(mensagemAlistamento);