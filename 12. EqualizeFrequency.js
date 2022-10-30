// You are allowed to remove maximum 1 character to equalize the frequency of the String. (if Possible =>True)


const string = "ssswwwiiijjjaaa";

const EqualizeFrequency = (str) => {
    const dir = {};
    let diff = 0;
    let arr = [];
    let change = 0;
    str.split("").map((s) => {
        if (dir[s]) {
            dir[s] = dir[s] + 1;
        } else {
            dir[s] = 1;
        }
    })
    for (key in dir) {
        arr.push(dir[key]);
    }
    arr.map((a) => {
        diff = Math.abs(arr[0] - a)
        if (diff) {
            change++;
        }
    })
    if (change > 1 || diff > 1) {
        return false;
    }
    return true
}

console.log(EqualizeFrequency(string))