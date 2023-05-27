const input = require('readline-sync');

//acumulador

for(let i = 0; i < 4; i++){
    console.log('Repetição ', i)
}

console.clear();

let nota;
let soma = 0;

for(let i = 1; i <= 3; i++){

    nota = Number(input.question(`Informe a nota ${i} do aluno:`)); //aspas para usar variavel na string
    
    soma = soma + nota;

}
console.log(`A média do aluno é ${soma / 3}`);

