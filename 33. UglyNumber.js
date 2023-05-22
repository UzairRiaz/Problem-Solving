// Ugly Number is a number whose only prime factors are limited to 2, 3, and 5.


const isUgly = (num) => {
    if (num <= 0) {
        return false;
    }
    while (num % 2 === 0) {
        num /= 2;
    }
    while (num % 3 === 0) {
        num /= 3;
    }
    while (num % 5 === 0) {
        num /= 5;
    }
    return num === 1;
}

console.log(isUgly(1));