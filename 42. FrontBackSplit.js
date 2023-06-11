const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const frontBackSplit = (arr) => {
    let front = [];
    let back = [];
    while (arr.length) {
        front.push(arr.shift());
        if (!arr.length) break;
        back.unshift(arr.pop());
    }
    return [front, back];
}

console.log(frontBackSplit(arr))
