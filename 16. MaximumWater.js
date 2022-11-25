const arr = [1, 3, 5, 7, 9, 0, 7, 6, 8, 9, 1];

// big O(n^2) - My solution
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

// big O: O(n) - Not my solution
const maxWater2 = (arr) => {
    let max = 0;
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let x = j - i;
        let y = arr[i] > arr[j] ? arr[j] : arr[i];
        let area = x * y;
        max = max > area ? max : area;
        if (arr[i] > arr[j]) {
            j--;
        } else {
            i++;
        }
    }
    return max;
}

console.log(maxWater(arr));