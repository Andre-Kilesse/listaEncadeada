class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    getNext() {
        return this.next;
    }

    setNext(next) {
        this.next = next;
    }

    getValue() {
        return this.value;
    }

    toString() {
        return this.value.toString();
    }
}

module.exports = Node;