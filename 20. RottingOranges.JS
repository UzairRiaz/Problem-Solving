const grid = [[1, 1, 1], [1, 1, 0], [0, 0, 1]];

const m = grid[0].length
const n = grid[0].length
const rotOrange = (grid, i, j) => {
    // check current value
    if (grid[i] && (grid[i][j] === 0 || grid[i][j] === 2)) {
        if (i >= m - 1 && j >= n - 1) {
            return
        } else {
            if (j >= n - 1) {
                rotOrange(grid, i + 1, 0)
            } else {
                rotOrange(grid, i, j + 1)
            }
        }
    } else {
        if (grid[i - 1] && grid[i - 1][j] === 2) {
            grid[i][j] = 2
            rotOrange(grid, 0, 0)
            return
        }
        if (grid[i] && grid[i][j + 1] === 2) {
            grid[i][j] = 2
            rotOrange(grid, 0, 0)
            return
        }
        if (grid[i + 1] && grid[i + 1][j] === 2) {
            grid[i][j] = 2
            rotOrange(grid, 0, 0)
            return
        }
        if (grid[i] && grid[i][j - 1] === 2) {
            grid[i][j] = 2
            rotOrange(grid, 0, 0)
            return
        }
    }
}
rotOrange(grid, 0, 0)


console.log(rottingOranges(grid));