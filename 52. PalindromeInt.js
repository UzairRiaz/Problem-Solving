let Integer = 123210;

function isPalindromeInt(dividend) {
    let divisor = 1;
    while (dividend / divisor >= 10) {
        divisor *= 10;
    }

    while (dividend !== 0) {
        let left = Math.floor(dividend / divisor);
        let right = dividend % 10;
        if (left !== right) {
            return false;
        }

        dividend = Math.floor((dividend % divisor) / 10);
        divisor /= 100;
    }

    return true;
}


// Path: 53. PalindromeString.js
console.log(isPalindromeInt(Integer));
