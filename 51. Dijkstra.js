class Node {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }
}

class Edge {
    constructor(node1, node2, weight) {
        this.node1 = node1;
        this.node2 = node2;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode(value) {
        const node = new Node(value);
        this.nodes.push(node);
    }

    addEdge(node1, node2, weight) {
        const edge = new Edge(node1, node2, weight);
        this.edges.push(edge);
        node1.edges.push(edge);
        node2.edges.push(edge);
    }

    getNeighbors(node) {
        return node.edges
            .map(edge => edge.node1 === node ? edge.node2 : edge.node1);
    }

    getEdge(node1, node2) {
        return this.edges.find(edge =>
            (edge.node1 === node1 && edge.node2 === node2) ||
            (edge.node1 === node2 && edge.node2 === node1));
    }

    getEdgeWeight(node1, node2) {
        return this.getEdge(node1, node2).weight;
    }

    getNodes() {
        return this.nodes;
    }

    getEdges() {
        return this.edges;
    }
}


function dijkstra(graph, start, end) {
    const distances = new Map();
    const previous = new Map();
    const nodes = graph.getNodes();
    const edges = graph.getEdges();
    const queue = [];

    for (let node of nodes) {
        distances.set(node, Infinity);
        previous.set(node, null);
        queue.push(node);
    }

    distances.set(start, 0);

    while (queue.length > 0) {
        const sorted = queue.sort((a, b) => distances.get(a) - distances.get(b));
        const current = sorted.shift();

        if (current === end) {
            const path = [];
            let node = end;
            while (node !== null) {
                path.push(node);
                node = previous.get(node);
            }
            return path.reverse();
        }

        for (let neighbor of graph.getNeighbors(current)) {
            const distance = distances.get(current) + graph.getEdgeWeight(current, neighbor);
            if (distance < distances.get(neighbor)) {
                distances.set(neighbor, distance);
                previous.set(neighbor, current);
            }
        }
    }
}

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge(graph.nodes[0], graph.nodes[1], 6);
graph.addEdge(graph.nodes[0], graph.nodes[3], 1);
graph.addEdge(graph.nodes[1], graph.nodes[2], 5);
graph.addEdge(graph.nodes[1], graph.nodes[3], 2);

graph.addEdge(graph.nodes[2], graph.nodes[4], 2);

graph.addEdge(graph.nodes[3], graph.nodes[4], 5);

console.log(dijkstra(graph, graph.nodes[0], graph.nodes[4])); // [ Node { value: 'A', edges: [ [Edge] ] },