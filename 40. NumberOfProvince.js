// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

const isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];

const findCircleNum = (isConnected) => {
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[0].length; j++) {
            if (isConnected[i][j] === 1) {
                isConnected[i][j] = 0;
                isConnected[j][i] = 0;
                dfs(isConnected, j);
            }
        }
    }
    return isConnected;
}

const dfs = (isConnected, j) => {
    for (let i = 0; i < isConnected.length; i++) {
        if (isConnected[j][i] === 1) {
            isConnected[j][i] = 0;
            isConnected[i][j] = 0;
            dfs(isConnected, i);
        }
    }
}

console.log(findCircleNum(isConnected));
