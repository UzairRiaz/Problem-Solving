

var printFibonacci = function (n) {
    if (n <= 0) {
        return;
    }
    var first = 0;
    var second = 1;
    var third = 2;
    for (var i = 0; i < n; i++) {
        console.log(first);
        first = second;
        second = third;
        third = first + second;
    }
}

// print first 10 fibonacci numbers
let printFibonacciRecursive = function (total, first = 0, second = 1) {
    if (total <= 0) {
        return;
    }
    if (first === 0) {
        console.log(first);
        console.log(second);
        total = total - 2;
    }
    console.log(first + second);
    printFibonacciRecursive(total - 1, second, first + second);
}

console.time('printFibonacciRecursive');
printFibonacciRecursive(10);
console.timeEnd('printFibonacciRecursive');
