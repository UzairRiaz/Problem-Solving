const arr = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10) + 1);

const product = arr.reduce((acc, num) => acc * num, 1);

const result = arr.map(num => product / num);

console.log({ arr, result });