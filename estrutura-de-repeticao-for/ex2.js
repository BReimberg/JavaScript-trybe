/*
Calcule os preços 🏷
*/

const valoresProdutos = [10, 12, 8];
let somaTotal = 0;

for(let i = 0; i < valoresProdutos.length; i++){
  somaTotal = somaTotal + valoresProdutos[i];
};

console.log(somaTotal);