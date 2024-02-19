/*
 Corrija o código 💻

O seguinte código retorna um erro:

const email = email@trybe.com;
email = outroEmail@trybe.com;

Faça as alterações necessárias para que o código funcione corretamente.
*/

function corrigeCodigo() {
    try {

      let email = 'email@trybe.com';
      email = 'outroEmail@trybe.com';
  
    } catch (e) {
      return 'incorrect'
    }
    return 'correct'
  }