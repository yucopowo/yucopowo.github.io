export function isObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]';
}

export function isString(s) {
    return Object.prototype.toString.call(s) === '[object String]';
}

export function isNumber(n) {
    return Object.prototype.toString.call(n) === '[object Number]';
}
