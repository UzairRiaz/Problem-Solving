const nums = [1, 4, 6, 6]
const target = 12

const sumEqualsToTarget = function (nums, target) {
    const map = new Map();

    for (n of nums) {
        if (map.has(n)) {
            let x = nums.indexOf(map.get(n));
            nums[x] = "x";
            return [nums.indexOf(n), x];
        } else {
            map.set(target - n, n);
        }
    }
    return ["No match found"];
}

console.log(sumEqualsToTarget(nums, target));