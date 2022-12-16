const grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];

const willRoteNext = (grid, m, n) => {
    if (grid[m][n] === 2) return 3;
    if (grid[m][n] === 1) {
        if (grid[m - 1] && grid[m - 1][n] === 2) {
            return 2
        }
        if (grid[m] && grid[m][n + 1] === 2) {
            return 2
        }
        if (grid[m + 1] && grid[m + 1][n] === 2) {
            return 2
        }
        if (grid[m] && grid[m][n - 1] === 2) {
            return 2
        }
        return 1;
    }
    return 0;
}

const rottingOranges = (grid) => {
    const
        m = grid.length
    n = grid[0].length
    const rotOrange = (grid, i, j) => {
        // check current value
        if (grid[i] && (grid[i][j] === 0 || grid[i][j] === 2)) {
            if (i >= m && j >= n) {
                return
            } else {
                if (j >= n) {
                    rotOrange(grid, i + 1, 0)
                } else {
                    rotOrange(grid, i, j++)
                }
            }
        } else {
            if (grid[i - 1] && grid[i - 1][j] === 2) {
                grid[i][j] = 2
                rotOrange(grid, 0, 0)
                return
            }
            if (grid[i][j + 1] === 2) {
                grid[i][j] = 2
                rotOrange(grid, 0, 0)
                return
            }
            if (grid[i + 1] && grid[i + 1][j] === 2) {
                grid[i][j] = 2
                rotOrange(grid, 0, 0)
                return
            }
            if (grid[i][j - 1] === 2) {
                grid[i][j] = 2
                rotOrange(grid, 0, 0)
                ret
            }
            return
        }
    }
    rotOrange(grid, 0, 0)
};

console.log(rottingOranges(grid));