// How to swap two numbers without using a third variable

function swap(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    return [x, y];
}

const obj = {
    x: 10,
    y: 20
};

[obj.x, obj.y] = swap(obj.x, obj.y);

console.log(obj);