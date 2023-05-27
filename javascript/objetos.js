//Objetos

//criando objetos
let pessoa = {
    nome: 'Harry',
    idade: 37,
}

console.log(pessoa);
console.log(pessoa.nome); //chama a chave do objeto
console.log(pessoa['nome']); //forma alternativa para chamar a chave

//adicionando uma par chave-valor

pessoa.altura = 1.77;
pessoa.nome = 'Leonardo'; //para trocar o valor

console.log(pessoa);

//remover uma chave

delete pessoa.altura

console.log(pessoa);

console.clear();

//percorrendo o objeto

for (let chave in pessoa){
    console.log(chave);
}