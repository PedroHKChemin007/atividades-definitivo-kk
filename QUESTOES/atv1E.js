/*e) Crie um programa onde o usuário preencha a distância de uma viagem, o consumo médio do
carro em km/l e o preço da gasolina. O sistema deve exibir quantos litros de combustível serão
necessários e quanto a viagem vai custar. */
let distanciaViagem = parseFloat(prompt("Digite a distância total da viagem em km:"));

let consumoMedio = parseFloat(prompt("Digite o consumo médio do seu carro em km/l:"));

let precoGasolina = parseFloat(prompt("Digite o preço atual da gasolina por litro:"));

let litrosNecessarios = distanciaViagem / consumoMedio;

let custoTotalViagem = litrosNecessarios * precoGasolina;

alert("Para a sua viagem de " + distanciaViagem + " km:\n\n" +
      "Você precisará de aproximadamente " + litrosNecessarios.toFixed(2) + " litros de combustível.\n" +
      "O custo total da viagem será de R$ " + custoTotalViagem.toFixed(2) + ".");