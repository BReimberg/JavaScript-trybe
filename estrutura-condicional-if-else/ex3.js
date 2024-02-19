/*
 Verifique se é par ou ímpar 🔢

Crie um algoritmo que verifica se o valor da variável num é par ou ímpar.
 */

let num = 22;
let mensagem;

function ifElseExercise() {
  if(num % 2 === 0){
    mensagem = `${num} é par!`;
    console.log(mensagem);
  } else {
    mensagem = `${num} é ímpar!`;
    console.log(mensagem);
  }
}

ifElseExercise();