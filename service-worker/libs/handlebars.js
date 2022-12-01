import Handlebars from '/cdn/handlebars.js';


const utils = {};
utils.isObject = function(val) {
    return typeof val === "object";
};
utils.isBlock = function(options) {
    return utils.isOptions(options) && typeof options.fn === "function" && typeof options.inverse === "function";
};
utils.value = function(val, context, options) {
    if (utils.isOptions(val)) {
        return utils.value(null, val, options);
    }
    if (utils.isOptions(context)) {
        return utils.value(val, {}, context);
    }
    if (utils.isBlock(options)) {
        return !!val ? options.fn(context) : options.inverse(context);
    }
    return val;
};
utils.isOptions = function(val) {
    return utils.isObject(val) && utils.isObject(val.hash);
};

Handlebars.registerHelper('compare' , function(a, operator, b, options) {
    /*eslint eqeqeq: 0*/

    if (arguments.length < 4) {
        throw new Error('handlebars Helper {{compare}} expects 4 arguments');
    }

    var result;
    switch (operator) {
        case '==':
            result = a == b;
            break;
        case '===':
            result = a === b;
            break;
        case '!=':
            result = a != b;
            break;
        case '!==':
            result = a !== b;
            break;
        case '<':
            result = a < b;
            break;
        case '>':
            result = a > b;
            break;
        case '<=':
            result = a <= b;
            break;
        case '>=':
            result = a >= b;
            break;
        case 'typeof':
            result = typeof a === b;
            break;
        default: {
            throw new Error('helper {{compare}}: invalid operator: `' + operator + '`');
        }
    }

    return utils.value(result, this, options);
});


export default Handlebars;
