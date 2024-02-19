/*
Multiplique números: faça a tabuada do 3 e do 7 🧑‍🏫
*/

const multiplicador = [3, 7];
let resultado = '';

for(let i = 0; i < multiplicador.length; i++){
    for(i2 = 1; i2 <= 9; i2++){
        resultado = multiplicador[i] * i2;
        console.log(`${multiplicador[i]} x ${i2} = ${resultado}`);
    }
}