class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add = (value) => {
        let n = new Node(value);
        if (this.head === null) {
            this.head = n
        } else {
            var currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = n;
        }
    }

    print = () => {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value)
            currentNode = currentNode.next
        }
    }

    ReverseKNodes = (k, start = this.head) => {
        var arr = [];
        let currentNode = start;
        while (currentNode !== null && k > arr.length) {
            arr.push(currentNode.value);
            currentNode = currentNode.next
        }
        currentNode = start;
        while (currentNode !== null && arr.length > 0) {
            currentNode.value = arr.pop();
            currentNode = currentNode.next
        }
        if (currentNode !== null) {
            this.ReverseKNodes(k, currentNode)
        }
    }

    toArray = () => {
        let currentNode = this.head;
        let result = []
        while (currentNode !== null) {
            result.push(currentNode.value);
            currentNode = currentNode.next
        }
        return result
    }
}

const l1 = new LinkedList();

l1.add(5);
l1.add(11);
l1.add(7);
l1.add(8);
l1.add(0)
l1.add(9)


console.log(l1.ReverseKNodes(3))