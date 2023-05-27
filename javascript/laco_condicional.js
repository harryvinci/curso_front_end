const input = require('readline-sync') //importanto biblioteca do Node

const numeroSorteado = 5;
let numero = Number( input.question('Qual numero voce escolhe?') ); //função pra rodar a biblioteca

while(numero !== numeroSorteado){
    console.log('voce errou. Tente novamente...');
    numero = Number( input.question('Qual numero voce escolhe?') );
}
console.log('voce acertou!');
