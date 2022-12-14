const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = (arr) => {
    let max = arr[0], sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = Math.max(arr[i], sum + arr[i])
        max = Math.max(max, sum)
    }
    return max
}

console.log(maxSubArray(arr));