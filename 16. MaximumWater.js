const arr = [1, 3, 5, 7, 9, 0, 7, 6, 8, 9, 1];

const maxWater = (arr) => {
    let max = 0;
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            let x = j - i;
            let y = arr[i] > arr[j] ? arr[j] : arr[i];
            let area = x * y;
            max = max > area ? max : area;
        }
    }
    return max;
}

console.log(maxWater(arr));