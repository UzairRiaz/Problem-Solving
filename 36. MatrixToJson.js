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
<<<<<<< HEAD
        for (let j = 0; j < keys.length; j++) {
            obj[keys[j]] = values[i][j];
        }
        result.push(obj);
    }
    return result;
=======
        let rec = matrix[i];
        for (let j = 0; j < rec.length; j++) {
            obj[matrix[0][j]] = rec[j]
        }
        json.push(obj);
    }
    return json;
>>>>>>> 414e94cd8c16b94c2f8231fe2d7fd3aeab36dd98
}
console.log(matrixToJson(matrix))