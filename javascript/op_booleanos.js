const numero = 10;

console.log(numero > 20);
console.log(numero == 10);  // == compara conteúdo

console.log(numero === '10'); // === compara também o tipo de variável

console.clear(); //limpa o console

console.log(numero != '10');
console.log(numero !== '10'); // !== compara o também o tipo de variável

let idade = 17;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true; //ambas precisam ser verdadeiras
console.log('Posso dirigir ', possoDirigir);

const possoDirigir2 = idade >= 18 || tenhoCNH === true; //apenas uma precisa ser verdadeira
console.log('Posso dirigir ', possoDirigir2);

const testando = false;

console.log(testando);
console.log(!testando);// ! NOT - inverte o valor do booleano