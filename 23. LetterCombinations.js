const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

const letterCombinations = (digits) => {
    if (!digits.length) return [];
    const result = [];
    const dfs = (str, index) => {
        if (index === digits.length) {
            result.push(str);
            return;
        }
        const letters = map[digits[index]];
        for (let i = 0; i < letters.length; i++) {
            dfs(str + letters[i], index + 1);
        }
    }
    dfs('', 0);
    return result;
}

console.log(letterCombinations('435'))