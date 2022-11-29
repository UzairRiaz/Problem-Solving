const keypadMap = {
    1: ['.', ',', '?', '!', ':'],
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z'],
    0: [' ']
}

const keypad = (num) => {
    let arr = [];
    let inputMap = new Map()
    const input = num.toString().split('')
    for (let i = 0; i < input.length; i++) {
        if (inputMap.has(input[i])) {
            inputMap.set(input[i], inputMap.get(input) + 1)
        } else {
            inputMap.set(input[i], 1)
        }
    };
    for (let [key, value] of inputMap) {
        arr.push(keypadMap[key][value - 1])
    }
    return arr.join('');
}

console.log(keypad(23));