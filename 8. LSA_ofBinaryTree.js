class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new Node(value);
        return this.left;
    }
    insertRight(value) {
        this.right = new Node(value);
        return this.right;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert = (value) => {
        if (this.root === null) {
            this.root = new Node(value);
            return this.root;
        }
        else {
            let currentNode = this.root;
            while (currentNode) {
                if (value < currentNode.value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.insertLeft(value);
                        break;
                    }
                } else {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.insertRight(value);
                        break;
                    }
                }
            }
        }
    }

    print = (currentNode = this.root) => {
        if (currentNode.left) {
            this.print(currentNode.left);
        }
        console.log(currentNode.value);
        if (currentNode.right) {
            this.print(currentNode.right);
        }
    }

    // LSA of Binary Tree

    LSA = (currentNode, p, q) => {
        if (currentNode === null) {
            return -1;
        }
        if (currentNode.value === p || currentNode.value === q) {
            return currentNode.value;
        }
        if (currentNode.value > p && currentNode.value > q) {
            return this.LSA(currentNode.left, p, q);
        } else if (currentNode.value < p && currentNode.value < q) {
            return this.LSA(currentNode.right, p, q);
        }
        return currentNode.value;
    }
}

var arr = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];

const t = new BinaryTree();

arr = arr.map((item) => {
    t.insert(item);
});


const lsa = t.LSA(t.root, 2, 4);

console.log(lsa);
