const Node = require('./node');

class Una {
    constructor() {
        this.firstNode = null;
        this.lastNode = null;
        this.totalElements = 0;
    }

    getPenultimateNode() {
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
            const penultimateNode = this.getPenultimateNode();
            let aux = this.lastNode;
            penultimateNode.setNext(null);
            this.lastNode = penultimateNode;
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
}

module.exports = Una;