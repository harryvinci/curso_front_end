//Funções

//definindo a função
function saudacao() {
    console.log('Olá, seja bem-vindo!');
}

saudacao(); //chamando a função

console.clear();

//enviando parâmentros

function saudacao(nome, curso = 'Front-End') { //definindo parâmetros para a função. A segunda está com um valor defaut definido.
    console.log(`Olá, ${nome}! Seja bem-vindo ao curso de ${curso}!`);
}

saudacao('Harry');

console.clear();

//Retorno da Função

function soma(numero1, numero2){
    return numero1 + numero2; //retorna o valor para ser usado novamente em outro lugar do código.
    //o return finaliza a função
}
let resultado = soma(10, 20);

console.log(resultado);