// Find Greatest Common Denominator of array of numbers
// Euclidean algorithm
// https://en.wikipedia.org/wiki/Euclidean_algorithm
// https://en.wikipedia.org/wiki/Greatest_common_divisor
// https://en.wikipedia.org/wiki/Least_common_multiple
// https://en.wikipedia.org/wiki/Least_common_multiple#Reduction_by_the_greatest_common_divisor
// https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor

const numbers = [8, 12, 16, 20, 24, 28, 32, 36, 40];

const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
}

const gcdOfArray = (numbers) => {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = gcd(result, numbers[i]);
    }
    return result;
}

console.log(gcdOfArray(numbers)); // 4
