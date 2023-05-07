const string = "3322251";
let previous = [];

const degitsToNumberMap = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

const countAndSay = (string) => {
    let result = ''
    for (c of string) {
        if (!previous.length || previous.includes(c)) {
            previous.push(c)
        } else {
            result += `${previous.length}${previous.pop()}`
            previous = [c];
        }
    }
    result += `${previous.length}${previous.pop()}`
    return result
};

console.log('input: ', string)
console.log('output: ', countAndSay(string))
