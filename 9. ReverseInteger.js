
const int = 123;

const reverse = (int) => {
    const reversed = int.toString().split('').reverse().join('');
    return parseInt(reversed);
}

console.log(reverse(int));
