/*
Estado da Lâmpada 💡
*/

let lampada = 'ligada';
let estadoLampada = true;

function ifElseExercise() {
   if (estadoLampada === true) {
     estadoLampada = 'A lâmpada está ligada!';
     console.log(estadoLampada);
   } else {
     estadoLampada = 'A lâmpada está desligada!';
     console.log(estadoLampada);
   }
}

ifElseExercise();