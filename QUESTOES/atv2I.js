/*I) Calcule a quantidade de dinheiro gasto por um fumante. Realizar a leitura do número de anos
que ele fuma, número de cigarros fumados por dia e o preço de uma carteira com 20 cigarros.
Considere o ano sempre com 365 dias. Indicar com a mensagem “Você já gastou muito” se o
gasto for maior que R$ 10.000,00.*/
const prompt = require("prompt-sync")();
let cigarros, dias = 20, anos = 365, vall1, vall2;
console.log("ha quantos anos você fuma?");
cigarros = prompt(`--->`);
vall1 = dias * anos;
vall2 = vall1 * cigarros;
if (vall2 >= 10000){
    console.log("Você já gastou muito!!!", `no caso ${vall2} reais que você gastou`);
}
else {
    console.log(`você gstou ao total: ${vall2}`);
}