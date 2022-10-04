

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

printFibonacci(10);
