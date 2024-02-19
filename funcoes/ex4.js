/*
 Fazendo média 🔢

Crie uma função chamada mediaDosNumeros que recebe como parâmetro um 
array de números chamado arrayNumeros e retorna a média desses números.
*/

function mediaDosNumeros(arrayNumeros){
let soma = 0;
let media = 0;

for(let i = 0; i < arrayNumeros.length; i++){
  soma = soma + arrayNumeros[i];
}

media = soma / arrayNumeros.length;

return(media);
}
