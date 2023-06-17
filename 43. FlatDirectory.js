const dir = {
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
};

const flatten = (prefix = '', dir) => {
    let result = {};
    if (dir == null) {
        return result;
    }
    for (let key in dir) {
        if (typeof dir[key] === 'object') {
            result = {
                ...result,
                ...flatten(`${prefix}${key}.`, dir[key])
            }
        } else {
            result[`${prefix}${key}`] = dir[key];
        }
    }
    return result;
}


console.log(flatten('', dir))
