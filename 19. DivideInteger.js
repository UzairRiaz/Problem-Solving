

const divide = (dividend, divisor) => {
    let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
    let answer = 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    while (dividend > divisor) {
        dividend -= divisor
        answer++
    }
    return sign * answer
}

console.log(divide(7, -3))