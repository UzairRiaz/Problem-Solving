
const fun1 = (a, b) => {
    a = a + 1;
    b = b + 2;
    return [a, b];
};

const fun2 = (a, b) => {
    a = a + 2;
    b = b + 2;
    return [a, b];
}

const fun3 = (a, b) => {
    a = a + 3;
    b = b + 3;
    if (a > 10) {
        console.log('error can be thrown from any level of the call stack');
        throw new Error('a is greater than 10');
    }
    return [a, b];
}

const fun4 = (a, b) => {
    a = a + 4;
    b = b + 4;
    return [a, b];
}

const HOC = (...funs) => (a, b) => {
    try {
        funs.forEach(fun => {
            if (a > 10) {
                console.log('error can be thrown from any level of the call stack');
                throw new Error('a is greater than 10');
            }
            [a, b] = fun(a, b);
        });
    } catch (error) {
        console.log(error.message);
    }
    return [a, b];
}

const [finalA, finalB] = HOC(fun1, fun2, fun3, fun4)(4, 0);
console.log(finalA, finalB);
