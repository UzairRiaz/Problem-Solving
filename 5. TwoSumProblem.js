/*
    l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
*/

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

const addTwoNumbers = (l1, l2) => {
    let n1 = l1.reverse().join("");
    let n2 = l2.reverse().join("");
    return (parseInt(n1) + parseInt(n2)).toString().split("").reverse();
};

console.log(addTwoNumbers(l1, l2));