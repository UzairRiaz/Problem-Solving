
const checkBase = (num, base) => {
    const logValue = Math.log(num) / Math.log(base);
    return Math.floor(logValue) === logValue;
}

console.log(checkBase(1024, 2));
