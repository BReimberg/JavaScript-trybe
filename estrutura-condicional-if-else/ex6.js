/*
Encontre a pessoa mais velha 👵
Julia e Erick estão aprendendo a programar em JavaScript pela Trybe.
Juntos eles querem construir um algoritmo capaz de informar, no console, 
qual dos dois é mais velho.
*/

let idadeJulia = 25;
let idadeErick = 21;
let verificaIdadePessoas = '';

function ifElseExercise() {
  if(idadeJulia > idadeErick){
    verificaIdadePessoas = 'Julia é mais velha que Erick';
    console.log(verificaIdadePessoas);
  } else if(idadeErick > idadeJulia){
    verificaIdadePessoas = 'Erick é mais velho que Julia';
    console.log(verificaIdadePessoas);
  } else {
    verificaIdadePessoas = 'Possuem a mesma idade';
    console.log(verificaIdadePessoas);
  }
}

ifElseExercise();