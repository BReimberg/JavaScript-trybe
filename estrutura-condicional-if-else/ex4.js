/*
Calcule a média 🧮

Crie um algoritmo que use duas notas, armazenadas nas variáveis 
nota1 e nota2, de uma pessoa estudante para calcular a média e 
utilize a variável resultado para exibir se a pessoa está ou não aprovada
*/

let nota1 = 8;
let nota2 = 6;
let media = (nota1 + nota2) / 2;
let resultado;


function ifElseExercise() {
  if(media >= 7){
    resultado = 'Pessoa estudante aprovada'; 
    console.log(resultado);
  } else {
    resultado = 'Pessoa estudante reprovada';
    console.log(resultado);
  }
}

ifElseExercise();