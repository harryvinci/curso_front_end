
//coerção Explícita (manual)

const numero = 10;

console.log(numero, typeof numero);

const numeroCovertido = String(numero); //converter em string ( inicial maiúscula)
console.log(numeroCovertido, typeof numeroCovertido);

console.log(Number('8908798')); //converter em number ( inicial maiúscula)

console.log(parseFloat('4546.889')); //converte pra numero flutuante
console.log(parseInt('4546.889')); //converte pra numero inteiro
console.log(Boolean(45)); //converte pra false se for zero, true pra qualquer outro numero

console.clear();

//coerção implícita (automática)

console.log('10' + 1); //problema na soma...ele concatena os 2 ao invés de somar
console.log('10' - 1);
console.log(1 - 'asas'); //retorna NaN (not a number)