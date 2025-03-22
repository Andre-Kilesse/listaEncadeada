const Node = require('./node');

class Una {
    constructor() {
        this.firstNode = null;
        this.totalElements = 0;
    }

    insertAtBeginning(value) {
        const newNode = new Node(value);
        newNode.setNext(this.firstNode);
        this.firstNode = newNode;
        this.totalElements++;
    }

    removeAtBeginning() {
        if (this.totalElements === 0) {
            return null;
        }
        const aux = this.firstNode;
        this.firstNode = this.firstNode.getNext();
        this.totalElements--;
        return aux;
    }

    insertAtEnding(value) {
        const newNode = new Node(value);

        if(this.firstNode == null){
            this.firstNode = newNode;
        } else {
            let currentNode = this.firstNode;
            while(currentNode.getNext() != null){
                currentNode = currentNode.getNext();
            }
            currentNode.setNext(newNode);
        }
        this.totalElements++;
    }

    removeAtEnding() {
        if (this.totalElements === 0) {
            return null;
        } else if (this.firstNode.getNext() == null){
            let aux = this.firstNode;
            this.firstNode = null;
            this.totalElements--;
            return aux;
        } else {
            let currentNode = this.firstNode;
            while(currentNode.getNext().getNext() != null){
                currentNode = currentNode.getNext();
            }
            let aux = currentNode.getNext();
            currentNode.setNext(null);
            this.totalElements--;
            return aux;
        }
        
    }

    toString() {
        if (this.totalElements === 0) {
            return "[ ]";
        }

        let currentNode = this.firstNode;
        let builder = "[";

        for (let i = 0; i < this.totalElements; i++) {
            builder += currentNode.getValue();
            if (i < this.totalElements - 1) {
                builder += ", ";
            }
            currentNode = currentNode.getNext();
        }

        builder += "]";
        return builder;
    }

    // Implementar outros métodos da lista aqui:
    // Inserir no final, inserir em ordem, remover no final,
    // remover elementos por valor, buscar um elemento.
}

module.exports = Una;