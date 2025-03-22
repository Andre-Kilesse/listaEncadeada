const Una = require('./una');

class UnaExtends extends Una {
    searchValue(value) { 
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
}

module.exports = UnaExtends;