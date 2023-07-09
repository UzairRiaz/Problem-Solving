

const regixSearch = (str, regix) => {
    let result = str.match(regix);
    console.log(result);
}

let str = "Hello World";

let regix = /Hello/;

regixSearch(str, regix); // [ 'Hello', index: 0, input: 'Hello World', groups: undefined ]