/*
 Verifique o intervalo entre números: será que é par? 🤔
Neste exercício você vai desenvolver um programa que verifica 
se um número está no intervalo entre 20 e 50 e se o número é par.
 */

let numero = 30;

let verificar = numero >= 20 && numero <= 50 && 50 % 2 === 0;

let resultado = verificar;

console.log(resultado);