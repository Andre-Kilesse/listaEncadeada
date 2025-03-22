const Una = require('./una');
const Node = require('./node');

class UnaExtends extends Una {
    // busca por valor do nó
    search(value) {
        if (this.totalElements === 0) {
            throw new Error("A lista está vazia!");
        }

        let currentNode = this.firstNode;
        while (currentNode !== null) {
            if (currentNode.getValue() === value) {
                return currentNode;
            }
            currentNode = currentNode.getNext();
        }

        throw new Error("Item não encontrado na lista!");
    }

    // remove por valor
    removeByKey(key) {
        if (this.totalElements === 0) {
            throw new Error("A lista está vazia!");
        }

        let currentNode = this.firstNode;
        let previousNode = null;

        while (currentNode !== null) {
            if (currentNode.getValue() === key) {
                // remoção do primeiro nó
                if (previousNode === null) {
                    this.firstNode = currentNode.getNext();
                    // se o primeiro nó for o único nó
                    if (this.firstNode === null) {
                        this.lastNode = null;
                    }
                } else {
                    previousNode.setNext(currentNode.getNext());
                    if (currentNode.getNext() === null) {
                        // atualiza o lastNode se o último nó foi removido
                        this.lastNode = previousNode;
                    }
                }
                this.totalElements--;
                return currentNode;
            }
            
            previousNode = currentNode;
            currentNode = currentNode.getNext();
        }

        throw new Error("Valor não encontrado!");
    }

    // se lista está vazia
    isEmpty() {
        return this.totalElements === 0;
    }

    // inserir onde o usuario desejar
    insertAt(position, value) {
        if (position < 0 || position > this.totalElements) {
            throw new Error("Posição inválida");
        }

        const newNode = new Node(value);

        if (position === 0) {
            newNode.setNext(this.firstNode);
            this.firstNode = newNode;
            if (this.lastNode === null) {
                this.lastNode = newNode;
            }
        } else {
            let currentNode = this.firstNode;
            let previousNode = null;
            let currentPosition = 0;

            while (currentPosition < position) {
                previousNode = currentNode;
                currentNode = currentNode.getNext();
                currentPosition++;
            }

            previousNode.setNext(newNode);
            newNode.setNext(currentNode);

            // atualiza o lastNode se a inserção foi no final
            if (currentNode === null) {
                this.lastNode = newNode;
            }
        }

        this.totalElements++;
    }

    // tamanho da lista
    length(){
        return this.totalElements;
    }

    // remove pelo indice
    removeAt(index) {
        if (index < 0 || index > this.totalElements) {
            throw new Error("Índice inválido!");
        }
    
        if (index === 0) {
            const removedNode = this.firstNode;
            this.firstNode = this.firstNode.getNext();
            if (this.firstNode === null) {
                this.lastNode = null; 
            }
            this.totalElements--;
            return removedNode;
        }
    
        let currentNode = this.firstNode;
        let previousNode = null;
        let currentPosition = 0;
    
        while (currentPosition < index) {
            previousNode = currentNode;
            currentNode = currentNode.getNext();
            currentPosition++;
        }
    
        previousNode.setNext(currentNode.getNext());
    
        if (currentNode.getNext() === null) {
            this.lastNode = previousNode;
        }
    
        this.totalElements--;
        return currentNode; 
    }

    // altera o valor do indice
    update(index, newValue) {
        if (index < 0 || index >= this.totalElements) {
            throw new Error("Índice inválido!");
        }
    
        let currentNode = this.firstNode;
        let currentPosition = 0;
    
        while (currentPosition < index) {
            currentNode = currentNode.getNext();
            currentPosition++;
        }
    
        currentNode.value = newValue;
    }
}

module.exports = UnaExtends;