class Connection {
    constructor(node1 = 0, node2 = 0) {
        this.node1 = node1;
        this.node2 = node2;
    }
};

class ObjectPool {
    constructor() {
        this.pool = [];
    }
    get() {
        let length = this.pool.length;
        let connection;
        if (!length) {
            connection = new Connection();
            console.log('Create new connection');
            this.pool.push(connection);
        } else {
            console.log('Reuse connection');
        }
        connection = this.pool.pop();
        return connection;
    }

    put(obj) {
        this.pool.push(obj);
    }
}

const pool = new ObjectPool();
const nodes = [new Connection(1, 3), new Connection(3, 4)];

for (let i = 0; i < nodes.length; i++) {
    pool.put(nodes[i]);
}

console.log(pool.get());
console.log(pool.get());
console.log(pool.get());
console.log(pool.put());
console.log(pool.put());
console.log(pool.get());