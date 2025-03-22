const prompt = require('prompt-sync')();
const UnaExtends = require('./unaExtends');

const myList = new UnaExtends();

console.log(`A lista está vazia? ${myList.isEmpty()}`);

console.log('-'.repeat(50));

// inserindo valores na lista
for (let i = 0; i < 10; i++) {
    myList.insertAtBeginning(i + 1);
}
console.log(`Lista inicial: ${myList.toString()}`);
console.log(`A lista está vazia? ${myList.isEmpty()}`);

console.log('-'.repeat(50));

// pesquisa
try {
    const value = Number(prompt("Digite o valor a ser pesquisado: ")); 
    const node = myList.search(value); 
    console.log("Valor encontrado: " + node.getValue());
} catch (error) {
    console.log("Erro: " + error.message); 
}

console.log('-'.repeat(50));

// Remoção por valor
try {
    myList.removeByKey(5); 
    console.log("Lista após remoção: " + myList.toString());
} catch (error) {
    console.log("Erro: " + error.message);
}
