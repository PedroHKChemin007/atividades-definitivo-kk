/*d) Crie um código que, com base no valor de um produto de R$120,00:
 Aplique um desconto de 15%.
 Calcule o valor final com desconto.
 Depois, adicione uma taxa de entrega de R$ 10.
 Mostre o valor final do pedido. */
let valorProduto = 120.00;

let percentualDesconto = 0.15; // 15%

let taxaEntrega = 10.00;

let valorDesconto = valorProduto * percentualDesconto;

let valorComDesconto = valorProduto - valorDesconto;

let valorFinalPedido = valorComDesconto + taxaEntrega;

console.log("Valor do produto: R$", valorProduto.toFixed(2));
console.log("Desconto aplicado (15%): R$", valorDesconto.toFixed(2));
console.log("Valor do produto com desconto: R$", valorComDesconto.toFixed(2));
console.log("Taxa de entrega: R$", taxaEntrega.toFixed(2));
console.log("Valor final do pedido: R$", valorFinalPedido.toFixed(2));