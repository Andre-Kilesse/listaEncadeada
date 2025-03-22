const prompt = require('prompt-sync')();
const UnaExtends = require('./unaExtends');

const myList = new UnaExtends();

for (let i = 0; i < 10; i++) {
    myList.insertAtBeginning(i + 1);
}
console.log(myList.toString());

try {
    const value = Number(prompt("Digite o valor a ser pesquisado: ")); 
    const node = myList.searchValue(value); 
    console.log("Valor encontrado: " + node.getValue());
} catch (error) {
    console.log("Erro: " + error.message); 
}