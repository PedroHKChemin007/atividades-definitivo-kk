/* a) Crie um programa que simule 10 batalhas de um personagem. Use um laço for para exibir no
console a seguinte mensagem a cada batalha: Batalha 1: Você ganhou 10 pontos de experiência! Ao
final exibir o total de experiência recebida. */
let exp = 0;

for (let i = 1; i <= 10; i++) {
  console.log(`Batalha ${i}: Você ganhou 10 pontos de experiência!`);
  exp += 10;
}

console.log(`Total de experiência recebida: ${exp} pontos.`);