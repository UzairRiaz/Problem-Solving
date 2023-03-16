const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];

const setZeros = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                for (let k = 0; k < matrix.length; k++) {
                    if (matrix[k][j] !== 0) {
                        matrix[k][j] = 'x';
                    }
                }
                for (let k = 0; k < matrix[i].length; k++) {
                    if (matrix[i][k] !== 0) {
                        matrix[i][k] = 'x';
                    }
                }
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'x') {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

console.log(setZeros(matrix));