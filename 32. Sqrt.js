

const squrt = (num) => {
    const isNegative = num < 0;
    if (isNegative) {
        return NaN;
    }
    if (num === 0 || num === 1) {
        return num;
    }
    return (10 ** (Math.log10(num) / 2)).toFixed(2);
}

console.log(squrt(9));
console.log(squrt(16));
console.log(squrt(25));
console.log(squrt(36));