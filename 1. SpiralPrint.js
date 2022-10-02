// How to do Spiral Print of a Matrix using recursion

const arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

function spiralPrint(x, y, right, down) {
    if (arr[x][y] == undefined) {
        return;
    }
    console.log(arr[x][y]);
    arr[x][y] = undefined;
    if (right) {
        if (arr[x][y + 1] != undefined) {
            spiralPrint(x, y + 1, right, down);
        } else {
            spiralPrint(x + 1, y, false, down);
        }
    }
    if (down) {
        if (arr[x + 1] != undefined && arr[x + 1][y] != undefined) {
            spiralPrint(x + 1, y, right, down);
        } else {
            spiralPrint(x, y - 1, right, false);
        }
    }
    if (!right) {
        if (arr[x][y - 1] != undefined) {
            spiralPrint(x, y - 1, right, down);
        } else {
            spiralPrint(x - 1, y, right, false);
        }
    }
    if (!down) {
        if (arr[x - 1] != undefined && arr[x - 1][y] != undefined) {
            spiralPrint(x - 1, y, right, down);
        } else {
            spiralPrint(x, y + 1, true, down);
        }
    }
}

spiralPrint(0, 0, true, true);
