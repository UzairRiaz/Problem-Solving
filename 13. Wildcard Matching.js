const s = "aa";
const p = "*";

const wildCardMatcher = (s, p) => {
    let sIndex = 0, pIndex = 0, star, ss = sIndex
    while (sIndex < s.length) {
        if (p[pIndex] == "?" || p[pIndex] == s[sIndex]) { sIndex++; pIndex++ }
        else if (p[pIndex] == "*") { star = pIndex++; ss = sIndex }
        else if (star != undefined) { pIndex = star + 1; sIndex = ++ss }
        else return false
    }
    while (p[pIndex] == "*") { pIndex++ }
    return pIndex == p.length
}

console.log(wildCardMatcher(s, p));
