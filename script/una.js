const Node = require('./node');

class Una {
    // construtor da lista, inicialmente vazio
    constructor() {
        this.firstNode = null;
        this.lastNode = null;
        this.totalElements = 0;
    }

    // insere novo nó no cmeço
    insertAtBeginning(value) {
        const newNode = new Node(value);
        if(this.firstNode == null){
            newNode.setNext(this.firstNode);
            this.firstNode = newNode;
            this.lastNode = newNode;
        }else{
            newNode.setNext(this.firstNode);
            this.firstNode = newNode;
        }
        this.totalElements++;
    }

    // remove nó do começo
    removeAtBeginning() {
        if (this.totalElements == 0) {
            return null;
        }
        const aux = this.firstNode;
        this.firstNode = this.firstNode.getNext();
        this.totalElements--;
        if(this.totalElements == 0){
            this.lastNode = null;
        }
        return aux;
    }

    // insere novo nó ao final
    insertAtEnding(value) {
        const newNode = new Node(value);
        if(this.firstNode == null){
            this.firstNode = newNode;
            this.lastNode = newNode;
        } else {
            this.lastNode.setNext(newNode);
            this.lastNode = newNode;
        }
        this.totalElements++;
    }

    // remove nó do final
    removeAtEnding() {
        if (this.totalElements == 0) {
            return null;
        } else if (this.totalElements == 1){
            let aux = this.firstNode;
            this.firstNode = null;
            this.lastNode = null    
            this.totalElements--;
            return aux;
        } else {
            const penultimateNode = this._getPenultimateNode();
            let aux = this.lastNode;
            penultimateNode.setNext(null);
            this.lastNode = penultimateNode;
            this.totalElements--;
            return aux;
        }
        
    }

    // builder da lista
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

    // rotina para movimentar até o penultimo nó
    _getPenultimateNode() {
        if (this.totalElements < 2) {
            return null;
        } else {
            let currentNode = this.firstNode;
            while (currentNode.getNext() !== this.lastNode) {
                currentNode = currentNode.getNext();
            }
            return currentNode; 
        }
    }
}

module.exports = Una;