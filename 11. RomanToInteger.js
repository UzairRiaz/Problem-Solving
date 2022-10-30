const dir = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

const RomanToInteger = (rom) => {
    rom = rom.toUpperCase()
    const romArr = rom.split("").reverse();
    let result = 0;
    let prev = '';
    romArr.map((c) => {
        let i = dir[c];
        if (i >= dir[prev] || prev === '') {
            result += i
        } else {
            result -= i;
        }
        prev = c;
    })
    return result;
}

console.log(RomanToInteger('CMXLIX'));