
const fun1 = (a, b) => {
    a = a + '-1';
    b = b + '-1';
    return [a, b];
};

const fun2 = (a, b) => {
    a = a + '-2';
    b = b + '-2';
    return [a, b];
}

const fun3 = (a, b) => {
    a = a + '-3';
    b = b + '-3';
    return [a, b];
}

const fun4 = (a, b) => {
    a = a + '-4';
    b = b + '-4';
    return [a, b];
}

const HOC = (...funs) => (a, b) => {
    funs.forEach(fun => {
        [a, b] = fun(a, b);
    });
    return [a, b];
}

const [finalA, finalB] = HOC(fun1, fun2, fun3, fun4)('a', 'b');
console.log(finalA, finalB); // a-1-2-3-4 b-1-2-3-4