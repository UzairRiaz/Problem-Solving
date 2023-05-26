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
    const json = [];
    for (let i = 1; i < matrix.length; i++) {
        let obj = {};
        let rec = matrix[i];
        for (let j = 0; j < rec.length; j++) {
            obj[matrix[0][j]] = rec[j]
        }
        json.push(obj);
    }
    return json;
}
console.log(matrixToJson(matrix))