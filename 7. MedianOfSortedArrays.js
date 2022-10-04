const arr = [1, 2, 5, 9];
const arr2 = [3, 4, 6, 7, 8, 10];


const medianOfSortedArrays = (arr, arr2) => {
    const totalLength = arr.length + arr2.length;
    let median = null;
    if (totalLength % 2 === 0) {
        for (let i = 0; i < (totalLength / 2) - 1; i++) {
            console.log(i);
            if (arr[0] < arr2[0]) {
                arr.shift();
            } else {
                arr2.shift();
            }
            median = (arr[0] + arr2[0]) / 2;
        }
        return median;
    } else {
        for (let i = 0; i < (totalLength / 2) - 1; i++) {
            if (arr[0] < arr2[0]) {
                arr.shift();
            } else {
                arr2.shift();
            }
            arr[0] > arr2[0] ? median = arr2[0] : median = arr[0];
        }
    }
    return median;
};

console.log(medianOfSortedArrays(arr, arr2));
