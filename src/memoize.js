// const cache = new Map();
function generator(args) {
    const hashArray = [];
    for (let i = 0; i <= args.length - 1; i += 1) {
        const hashPart = args[i] + typeof args[i];
        hashArray.push(hashPart);
    }
    const finalHash = hashArray.join('');
    return finalHash;
}

export function memoize(fn) {
    const cache = {};
    if (typeof (fn) !== 'function') {
        return null;
    }
    const context = {};
    return (...args) => {
        const args1 = [];
        for (let i = 0; i < args.length; i += 1) {
            args1.push(args[i]);
        }
        const key = generator(args1);
        if (key in cache) {
            return cache[key];
        } {
            const result = fn.call(context, ...args);
            cache[key] = result;
            return result;
        }
    };
}

function add2(x) {
    return x + 2;
}
memoize(add2, 4);
// console.log(memoize(add2,4));
