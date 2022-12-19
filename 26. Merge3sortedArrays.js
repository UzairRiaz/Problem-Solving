const arr1 = new Array(10).fill(0).map(() => Math.floor(Math.random() * 20) + 1).sort((a, b) => a - b);
const arr2 = new Array(10).fill(0).map(() => Math.floor(Math.random() * 20) + 1).sort((a, b) => a - b);
const arr3 = new Array(10).fill(0).map(() => Math.floor(Math.random() * 20) + 1).sort((a, b) => a - b);

console.log({ arr1, arr2, arr3 });

const result = [];

const pushIntoResult = (arr1, arr2, arr3) => {
    const min = Math.min(arr1[0] ?? Number.POSITIVE_INFINITY, arr2[0] ?? Number.POSITIVE_INFINITY, arr3[0] ?? Number.POSITIVE_INFINITY);
    result.push(min);
    if (arr1[0] === min) {
        arr1.shift();
    }
    if (arr2[0] === min) {
        arr2.shift();
    }
    if (arr3[0] === min) {
        arr3.shift();
    }
}

while (arr1.length || arr2.length || arr3.length) {
    pushIntoResult(arr1, arr2, arr3);
}

console.log(result);