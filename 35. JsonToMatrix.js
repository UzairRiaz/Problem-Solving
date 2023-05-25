const arr = [
    { name: 'John', age: 21 },
    { name: 'Mike', age: 20 },
    { name: 'jj', age: 21 },
    { name: 'mm', age: 20 },
    { name: 'jw', age: 21 },
    { name: 'mil', age: 20 },
]

const jsonToMatrix = (json) => {
    const keys = Object.keys(json[0]);
    const matrix = [keys];
    for (let item of json) {
        matrix.push(keys.map(key => item[key]));
    }
    return matrix;
}

console.log(jsonToMatrix(arr));
