const n = 138;
// 10 random numbers between 1 and 100
const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);

const map = new Map();

for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const diff = n - num;
    if (map.has(diff)) {
        console.log(`Found ${num} and ${diff}`);
    }
    map.set(num, true);
}
