const matrix = [
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9]
]

/*
    Direction of traverse
    
        ^       ^       ^
    |   |   |   |   |   |
    |   |   |   |   |   |
    |   |   |   |   |   |
    |   |   |   |   |   |
    |   |   |   |   |   |
    v       V       V     

*/

const snailTraverse = (matrix) => {
    const triverse = (matrix, direction) => {
        if (matrix.length == 0 || matrix[0].length == 0) {
            return
        }
        if (direction == 'up') {
            for (let i = matrix.length - 1; i >= 0; i--) {
                console.log(matrix[i].shift())
            }
            triverse(matrix, 'down')
        } else if (direction == 'down') {
            for (let i = 0; i < matrix.length; i++) {
                console.log(matrix[i].shift())
            }
            triverse(matrix, 'up')
        }
    }

    let direction = 'down'
    triverse(matrix, direction)
}

snailTraverse(matrix);