/*
Encontre a classe do personagem 🧙‍♀️

Imagine que em uma partida de RPG (Role-playing game) você deve jogar
um dado de 20 lados (D20) para determinar a classe de um personagem, 
ou seja, de acordo com o número sorteado pelo dado uma classe será escolhida.
Considere as regras a seguir:

    Número menor que 4 = Guerreiro(a);
    Número maior ou igual a 4 e menor que 8 = Ladino(a);
    Número maior ou igual a 8 e menor que 12 = Curandeiro(a);
    Número maior ou igual a 12 e menor que 16 = Arqueiro(a);
    Número maior ou igual a 16 = Feiticeiro(a);

Crie um algoritmo que informa a classe escolhida de acordo com o número 
sorteado pelo dado de 20 lados e atribua o resultado na variável resultado.
*/

let dadoNumero = 4;
let classe = '';
let resultado;

function ifElseExercise() {
  if(dadoNumero < 4){
    classe = 'Guerreiro(a)';
    resultado = `Sua classe é: ${classe}`;
    console.log(resultado);
  } else if(dadoNumero >= 4 && dadoNumero < 8){
    classe = 'Ladino(a)';
    resultado = `Sua classe é: ${classe}`;
    console.log(resultado);
  } else if(dadoNumero >= 8 && dadoNumero < 12){
    classe = 'Curandeiro(a)';
    resultado = `Sua classe é: ${classe}`;
    console.log(resultado);
  } else if(dadoNumero >= 12 && dadoNumero <16){
    classe = 'Arqueiro(a)';
    resultado = `Sua classe é: ${classe}`;
    console.log(resultado);
  } else if(dadoNumero >= 16){
    classe = 'Feiticeiro(a)';
    resultado = `Sua classe é: ${classe}`;
    console.log(resultado);
  }
}

ifElseExercise();