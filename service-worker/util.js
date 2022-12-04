export function getContentType(type) {
    switch (type) {
        case 'text': {
            return 'text/plain; charset=utf-8';
        }
        case 'css': {
            return 'text/css; charset=utf-8';
        }
        case 'js': {
            return 'text/javascript; charset=utf-8';
        }
        case 'html': {
            return 'text/html; charset=utf-8';
        }
        case 'json': {
            return 'application/json; charset=utf-8';
        }
        default: {
            return 'text/plain; charset=utf-8';
        }
    }
}

export function getType(type) {
    if(!type) {
        return 'text';
    }
    if(type.includes('json')) return 'json';
    if(type.includes('jsx')) return 'js';
    if(type.includes('javascript')) return 'js';
    if(type.includes('css')) return 'css';
    if(type.includes('html')) return 'html';
    return 'text';
}


export function isRelative(p) {
    return !(!p || p[0] === '.' || p[0] === '/' || p[0] === 'h');
}

export function hashCode(keyString){
    // return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    let hash = 0;
    for (let charIndex = 0; charIndex < keyString.length; ++charIndex)
    {
        hash += keyString.charCodeAt(charIndex);
        hash += hash << 10;
        hash ^= hash >> 6;
    }
    hash += hash << 3;
    hash ^= hash >> 11;
    //4,294,967,295 is FFFFFFFF, the maximum 32 bit unsigned integer value, used here as a mask.
    return (((hash + (hash << 15)) & 4294967295) >>> 0).toString(16)
}

export function escapeTemplateString(s) {
    if(!s) return '';
    return s.replace(/`/g, "\`");
}
