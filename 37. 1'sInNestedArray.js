const array = [1, 2, [1, 1, 2], 1, 2, 2, 3, [1, 0, 0, [1, 2], 1, [1],], 1]


const countOnes = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            count += countOnes(array[i]);
        } else if (array[i] === 1) {
            count++;
        }
    }
    return count;
}

console.log(countOnes(array));