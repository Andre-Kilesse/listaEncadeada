class Node {
    // construtor do nó
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    // "anda" dentro da lista
    getNext() {
        return this.next;
    }

    // altera valor do proximo
    setNext(next) {
        this.next = next;
    }

    // retorna o valor do nó
    getValue() {
        return this.value;
    }

    // converte valor do nó para string
    toString() {
        return this.value.toString();
    }
}

module.exports = Node;