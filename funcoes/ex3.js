/*
Pedido na pizzaria 🍕
Crie uma função clientePedido que receba um parâmetro numeroPedido.
*/

let numeroPedido = 5;

function clientePedido(numeroPedido){
  if(numeroPedido === 1){
    //retur 'Pizza de Calabresa'
    console.log('Pizza de Calabresa');
  } else if(numeroPedido === 2){
    //return 'Pizza de Quatro Queijos'
    console.log('Pizza de Quatro Queijos');
  } else if(numeroPedido === 3){
    //return 'Pizza de Frango com Catupiry'
    console.log('Pizza de Frango com Catupiry');
  } else if(numeroPedido === 4){
    //return 'Pizza de Brigadeiro'
    console.log('Pizza de Brigadeiro');
  } else {
    //return 'Número do pedido inválido!'
    console.log('Número do pedido inválido!');
  }
}

clientePedido(numeroPedido);