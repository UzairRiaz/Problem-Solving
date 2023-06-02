const matrix = [
    ['name', 'age'],
    ['John', 21],
    ['Mike', 20],
    ['jj', 21],
    ['mm', 20],
    ['jw', 21],
    ['mil', 20]
]

const matrixToJson = (matrix) => {
    let result = [];
    let keys = matrix[0];
    let values = matrix.slice(1);
    for (let i = 0; i < values.length; i++) {
        let obj = {};
        for (let j = 0; j < keys.length; j++) {
            obj[keys[j]] = values[i][j];
        }
        result.push(obj);
    }
    return result;
}
console.log(matrixToJson(matrix))