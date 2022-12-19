

const generateParantheses = (n) => {
    const result = [];
    let str = '';
    console.log(n * '(')
    str = str + (n * '(') + (n * ')');
    result.push(str);
    return result;
}




console.log(generateParantheses(3))