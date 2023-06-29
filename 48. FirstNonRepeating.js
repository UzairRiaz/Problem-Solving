const string = "a green apple, a red apple, a yellow apple, a red apple, a yellow apple";

function firstNonRepeatingCharacter(string) {
    const chars = string.split("");
    const charCount = {};
    for (const char of chars) {
        if (!(char in charCount)) charCount[char] = 0;
        charCount[char]++;
    }
    for (const [index, char] of chars.entries()) {
        if (charCount[char] === 1) return index;
    }
    return -1;
}

console.log(firstNonRepeatingCharacter(string)); 