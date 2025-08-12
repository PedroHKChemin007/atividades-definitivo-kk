/*B) Faça um algoritmo que apresente na tela as tabuadas de 2 a 9.*/
let t1;
for (let i = 2; i <= 9; i++){
    for (let j = 1; j <= 10; j++){
        t1 = j * i;
        console.log(`${i} x ${j} = ${t1}` );        
    }
    console.log('-------');
}