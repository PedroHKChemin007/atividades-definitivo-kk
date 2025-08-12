/*f) Faça um algoritmo que receba o valor total da conta de uma mesa em um restaurante e a
quantidade de clientes que efetuarão o pagamento. Calcule quanto cada um deverá pagar dividindo
igualmente para todos. */
let valorTotalConta = parseFloat(prompt("Digite o valor total da conta do restaurante:"));

let quantidadeClientes = parseInt(prompt("Digite a quantidade de clientes que efetuarão o pagamento:"));

if (quantidadeClientes > 0) {

    let valorPorCliente = valorTotalConta / quantidadeClientes;


    alert("Cada cliente deverá pagar R$ " + valorPorCliente.toFixed(2) + ".");
} else {

    alert("A quantidade de clientes deve ser um número maior que zero. Por favor, tente novamente.");
}