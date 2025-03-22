const prompt = require('prompt-sync')();
const Una = require('./una'); 
const Node = require('./node');

const myList = new Una();

for (let i = 0; i < 10; i++) {
    myList.insertAtBeginning(i + 1);
    console.log(myList.toString());
}

console.log(myList.toString());

myList.removeAtBeginning();

console.log(myList.toString());

myList.insertAtEnding(3);

console.log(myList.toString());

myList.removeAtEnding();

console.log(myList.toString());