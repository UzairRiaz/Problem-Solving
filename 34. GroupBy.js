// create a function that takes an array of objects and a key and returns an object with the values grouped by the value of the key.

Object.defineProperties(
    Array.prototype,
    {
        groupBy: {
            value: function (fun) {
                const map = new Map();
                for (let item of this) {
                    const key = fun(item);
                    if (map.has(key)) {
                        map.get(key).push(item);
                    } else {
                        map.set(key, [item]);
                    }
                }
                return map;
            }
        }
    })

const arr = [
    { name: 'John', age: 21 },
    { name: 'Mike', age: 20 },
    { name: 'jj', age: 21 },
    { name: 'mm', age: 20 },
    { name: 'jw', age: 21 },
    { name: 'mil', age: 20 },
];

const mp = arr.groupBy(item => item.age);

for (let [key, value] of mp) {
    console.log(key, " =>", value.length);
}
