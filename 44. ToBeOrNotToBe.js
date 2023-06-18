
const expect = (value) => ({
    toBe: (exp) => exp === value,
});

console.log(expect(10).toBe(10));
