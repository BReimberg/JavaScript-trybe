/*
Valide as informações de login 🧑‍💻
*/

let usuario = 'tryber';
let senha = 'tr1b3';
let autenticacao;

function ifElseExercise() {
  if(usuario === 'tryber' && senha === 'tr1b3'){
    autenticacao = 'Autenticação válida!';
    console.log(autenticacao);
  } else {
    autenticacao = 'Login e/ou senha incorretos';
    console.log(autenticacao);
  }
}

ifElseExercise();