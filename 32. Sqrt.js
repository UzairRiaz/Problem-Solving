

const squrt = (num) => {
    const isNegative = num < 0;
    if (isNegative) {
        return NaN;
    }
    if (num === 0 || num === 1) {
        return num;
    }
    return (10 ** (Math.log10(num) * 2)).toFixed(2);
}

console.time('squrt');
console.log(squrt(9));
console.log(squrt(16));
console.log(squrt(25));
console.log(squrt(36));
console.log(squrt(49));
console.timeEnd('squrt');

console.time('Math.sqrt');
console.log(Math.sqrt(9));
console.log(Math.sqrt(16));
console.log(Math.sqrt(25));
console.log(Math.sqrt(36));
console.log(Math.sqrt(49));
console.timeEnd('Math.sqrt');

// The Math.sqrt is faster than my function. 😔
// Maybe I am a bad programmer. 😔
// Maybe I am failure. 😔 
// Maybe I should quit programming. 😔