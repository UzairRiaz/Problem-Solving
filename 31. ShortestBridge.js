

const grid = [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]];

// convert grid to graph

class Node {
    constructor(val) {
        this.val = val;
        this.edges = [];
    }
}

class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode = (val) => {
        this.nodes.push(new Node(val));
    }

    addEdge = (node1, node2) => {
        node1.edges.push(node2);
        node2.edges.push(node1);
    }
}


const gridToGraph = (grid) => {
    const graph = new Graph();
    const m = grid.length;
    const n = grid[0].length;
    const getNode = (i, j) => {
        return graph.nodes[i * n + j];
    }
    for (let i = 0; i < m * n; i++) {
        graph.addNode(i);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (grid[i][j] === 1) {
                graph.addEdge(getNode(i, j), getNode(i, j + 1));
            }
        }
    }
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                graph.addEdge(getNode(i, j), getNode(i + 1, j));
            }
        }
    }
    return graph;
}

// find shortest path from 0 to 1

const shortestPath = (start, end) => {
    const queue = [];
    const visited = new Set();
    queue.push([start, 0]);
    while (queue.length > 0) {
        const [node, dist] = queue.shift();
        if (node === end) {
            return dist;
        }
        if (!visited.has(node)) {
            visited.add(node);
            for (let edge of node.edges) {
                queue.push([edge, dist + 1]);
            }
        }
    }
    return -1;
}

const shortestBridge = (grid) => {
    const graph = gridToGraph(grid);
    const m = grid.length;
    const n = grid[0].length;
    for (let i = 0; i < m * n; i++) {
        if (graph.nodes[i].val === 1) {
            return shortestPath(graph, graph.nodes[i], graph.nodes[0]);
        }
    }
}

console.log(shortestBridge(grid));