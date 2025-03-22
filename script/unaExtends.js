const Una = require('./una');

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
                // remoção de um nó no meio ou no final
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
            // avança para o próximo nó
            previousNode = currentNode;
            currentNode = currentNode.getNext();
        }

        throw new Error("Valor não encontrado!");
    }

    // se lista está vazia
    isEmpty() {
        return this.totalElements === 0;
    }
}

module.exports = UnaExtends;