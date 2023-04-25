const arr1 = new Array(10).fill(0).map(() => Math.floor(Math.random() * 20) + 1).sort((a, b) => a - b);
const arr2 = new Array(10).fill(0).map(() => Math.floor(Math.random() * 20) + 1).sort((a, b) => a - b);
const arr3 = new Array(10).fill(0).map(() => Math.floor(Math.random() * 20) + 1).sort((a, b) => a - b);

let lists = [arr1, arr2, arr3];

console.log({ arr1, arr2, arr3 });
const result = [];

const pushIntoResult = (...lists) => {
    let l;
    const mins = lists.map(list => {
        if (list.length) {
            return list[0];
        }
        return Number.POSITIVE_INFINITY;
    });
    const min = Math.min(...mins);
    l = mins.indexOf(min);
    result.push(min);
    lists[l].shift();
}

while (lists.some(list => list.length)) {
    pushIntoResult(arr1, arr2, arr3);
}

console.log(result);