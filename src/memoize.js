const cache = new Map();
function generator(args) {
    const hashTest = [];
    for (let i = 0; i <= args.length - 1; i += 1) {
        const hashPart = args[i] + typeof args[i];
        hashTest.push(hashPart);
    }
    const final = hashTest.join('');
    return final;
}

export function memoize(fn, ...args) {
    if (typeof (fn) !== 'function') {
        return null;
    }
    return () => {
        const args1 = [];
        for (let i = 1; i < arguments.length; i += 1) {
            args1.push(args[i]);
        }
        const key = generator(args1);
        if (cache.has(key)) {
            return cache.get;
        } {
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    };
}

function add2(x) {
    return x + 2;
}
memoize(add2, 4);
// console.log(memoize(add2,4));
