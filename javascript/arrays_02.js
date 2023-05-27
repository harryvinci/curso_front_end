//métodos de arrays

let arr01 = [30, 12, 45, 34, 29];

//fatiamento: slice

console.log(arr01.slice(0, 2)); //(start, end) end é "menor que"
console.log(arr01.slice(2)); //pega tudo a partir do índice indicado

console.clear();

//adicionando elementos (push e unshift)

let arr02 = [];

console.log('antes de adicionar com push: ', arr02);

arr02.push(10, 20, 30); //adiciona elementos ao final da array

console.log('depois de adicionar  com push: ', arr02);

console.log('antes de adicionar com unshift: ', arr02);

arr02.unshift(0); //adiciona elementos no início da array

console.log('depois de adicionar com unshift: ', arr02);

console.clear();

//removendo elementos (pop e shift)

console.log('antes de remover com pop: ', arr02);

arr02.pop(); //remove o último elemento do array. Armazena o valor removido e pode ser resgatado.

console.log('depois de remover com pop: ', arr02);

console.log('antes de remover com shift: ', arr02);

arr02.shift(); //remove o primeiro elemento do array. Armazena o valor removido e pode ser resgatado.

console.log('depois de remover com shift: ', arr02);

console.clear();

//concatenando arrays (concat)

console.log('arru01: ', arr01);
console.log('arr02: ', arr02);

let concatenacaoArrays = arr01.concat(arr02); //concatena adiciona o 02 ao final do 01

console.log(concatenacaoArrays);

console.clear();

//buscando elementos (indexOf e lastIndexOf)

let arr03 = [1, 2, 3, 5, 3, 4, 7, 3];

console.log(arr03.indexOf(3)); //encontra o indice do primeiro elemento 3 no array

console.log(arr03.lastIndexOf(3)); //encontra o indice do ultimo elemento 3 no array

console.clear();

//descobrindo a existência de um elemento (includes)

console.log(arr01);

console.log(arr01.includes(10)); //confere se tem o elemento 10 no array. Retorna true ou false
console.log(arr01.includes(45)); //confere se tem o elemento 45 no array. Retorna true ou false

console.clear();

//invertendo arrays(reverse)

console.log(arr01);

let arr01Invertido = arr01.reverse(); //inverte a ordem do array

console.log(arr01Invertido);