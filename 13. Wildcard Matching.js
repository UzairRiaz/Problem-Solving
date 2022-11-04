const s = "aa";
const p = "*";

const wildCardMatcher = (s, p) => {
    let sIndex = 0;
    let pIndex = 0;

    while (sIndex <= s.length) {
        if (s[sIndex] !== p[pIndex]) {
            if (p[pIndex] !== '*' && p[pIndex] !== '?') {
                return false;
            }
        }
        if (p[pIndex] === '*') {
            sIndex++;
        } else {
            sIndex++;
            pIndex++;
        }
    }
    return true
}

console.log(wildCardMatcher(s, p));