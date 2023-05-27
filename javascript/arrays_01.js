let arr = ['Leonardo', 37, 1.72 ,true];

console.log(arr);

console.log(arr[0]); //chamar elemento específio do array..contagem começa no zero

console.log(arr.length); //saber quantos elementos tem o array

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.clear();

for (let elemento of arr){ //percorrer todos os elementos do array
    console.log(elemento);
}

for (let indice in arr){ //percorre os indices do valor
    console.log(indice);
}

for (let indice in arr){ //percorre os indices do valor
    console.log(indice, arr[indice]);
}