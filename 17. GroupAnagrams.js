const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = (strs) => {
    const map = new Map();
    for (let str of strs) {
        const key = str.split("").sort().join("");
        if (map.has(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return [...map.values()];
}

console.log(groupAnagrams(strs))