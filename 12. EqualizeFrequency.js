// You must remove 1 character to equalize the frequency of the String. (if Possible =>True)


const string = "bbcccaa";

const EqualizeFrequency = (str) => {
    for (let i = 0; i < str.length; i++) {
        const hash = {}
        for (let j = 0; j < str.length; j++) {
            if (i !== j) {
                const ch = str[j]
                hash[ch] = (hash[ch] || 0) + 1
            }
        }

        const hashSet = new Set()

        for (let prop in hash) {
            hashSet.add(hash[prop])
        }
        if (hashSet.size === 1) {
            return true
        }
    }


    return false
};


console.log(EqualizeFrequency(string))