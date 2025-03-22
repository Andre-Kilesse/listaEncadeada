const prompt = require('prompt-sync')();
const UnaExtends = require('./unaExtends');

const myList = new UnaExtends();

console.log(`Tamanho atual da lista: ${myList.length()}`);
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
    console.log(`Valor encontrado: ${node.getValue()}`);
} catch (error) {
    console.log(`Erro: ${error.message}`); 
}

console.log('-'.repeat(50));

// Remoção por valor
try {
    const value = Number(prompt("Qual valor deseja remover: "))
    myList.removeByKey(value); 
    console.log(`Lista após remoção: ${myList.toString()}`);
} catch (error) {
    console.log(`Erro: ${error.message}`);
}

console.log('-'.repeat(50));

// inserção
try {
    const position = parseInt(prompt("Digite a posição para inserir: "));
    const value = prompt("Digite o valor a ser inserido: ");
    myList.insertAt(position, value);
    console.log(`Lista atual: ${myList.toString()}`);
} catch (error) {
    console.log(`Erro: ${error.message}`);
}

console.log('-'.repeat(50));

// remover pelo indice
try {
    const index = parseInt(prompt("Digite o índice do nó a ser removido: "));
    const removedNode = myList.removeAt(index);
    console.log(`Nó removido: ${removedNode.getValue()}`);
    console.log(`Lista atual: ${myList.toString()}`);
} catch (error) {
    console.log(`Erro: ${error.message}`);
}

console.log('-'.repeat(50));

// altera pelo indice
try {
    const index = parseInt(prompt("Digite o índice do nó a ser atualizado: "));
    const newValue = prompt("Digite o novo valor: ");
    myList.update(index, newValue);
    console.log(`Lista atual: ${myList.toString()}`);
} catch (error) {
    console.log(`Erro: ${error.message}`);
}