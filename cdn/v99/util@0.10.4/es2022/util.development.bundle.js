/* esm.sh - esbuild bundle(util@0.10.4) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {}
          }).exports,
          mod
        ),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', {
          value: mod,
          enumerable: true
        })
      : target,
    mod
  )
);

// esm-build-752a6fd218adfd43206065f2c61cb9f92cd2f852-32404912/node_modules/util/support/isBufferBrowser.js
var require_isBufferBrowser = __commonJS({
  'esm-build-752a6fd218adfd43206065f2c61cb9f92cd2f852-32404912/node_modules/util/support/isBufferBrowser.js'(
    exports,
    module
  ) {
    module.exports = function isBuffer2(arg) {
      return (
        arg &&
        typeof arg === 'object' &&
        typeof arg.copy === 'function' &&
        typeof arg.fill === 'function' &&
        typeof arg.readUInt8 === 'function'
      );
    };
  }
});

// esm-build-752a6fd218adfd43206065f2c61cb9f92cd2f852-32404912/node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  'esm-build-752a6fd218adfd43206065f2c61cb9f92cd2f852-32404912/node_modules/inherits/inherits_browser.js'(
    exports,
    module
  ) {
    if (typeof Object.create === 'function') {
      module.exports = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      module.exports = function inherits2(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
  }
});

// esm-build-752a6fd218adfd43206065f2c61cb9f92cd2f852-32404912/node_modules/util/util.js
var require_util = __commonJS({
  'esm-build-752a6fd218adfd43206065f2c61cb9f92cd2f852-32404912/node_modules/util/util.js'(exports) {
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString2(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect2(arguments[i]));
        }
        return objects.join(' ');
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x2) {
        if (x2 === '%%') return '%';
        if (i >= len) return x2;
        switch (x2) {
          case '%s':
            return String(args[i++]);
          case '%d':
            return Number(args[i++]);
          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return '[Circular]';
            }
          default:
            return x2;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull2(x) || !isObject2(x)) {
          str += ' ' + x;
        } else {
          str += ' ' + inspect2(x);
        }
      }
      return str;
    };
    exports.deprecate = function(fn, msg) {
      if (isUndefined2(__Process$)) {
        return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }
      if (__Process$.noDeprecation === true) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (__Process$.throwDeprecation) {
            throw new Error(msg);
          } else if (__Process$.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnviron;
    exports.debuglog = function(set) {
      if (isUndefined2(debugEnviron)) debugEnviron = __Process$.env.NODE_DEBUG || '';
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
          var pid = __Process$.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error('%s %d: %s', set, pid, msg);
          };
        } else {
          debugs[set] = function() {};
        }
      }
      return debugs[set];
    };
    function inspect2(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];
      if (isBoolean2(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined2(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined2(ctx.depth)) ctx.depth = 2;
      if (isUndefined2(ctx.colors)) ctx.colors = false;
      if (isUndefined2(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect2;
    inspect2.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    };
    inspect2.styles = {
      special: 'cyan',
      number: 'yellow',
      boolean: 'yellow',
      undefined: 'grey',
      null: 'bold',
      string: 'green',
      date: 'magenta',
      regexp: 'red'
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect2.styles[styleType];
      if (style) {
        return '\x1B[' + inspect2.colors[style][0] + 'm' + str + '\x1B[' + inspect2.colors[style][1] + 'm';
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function(val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (
        ctx.customInspect &&
        value &&
        isFunction2(value.inspect) &&
        value.inspect !== exports.inspect &&
        !(value.constructor && value.constructor.prototype === value)
      ) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString2(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError2(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction2(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp2(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate2(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError2(value)) {
          return formatError(value);
        }
      }
      var base = '',
        array = false,
        braces = ['{', '}'];
      if (isArray2(value)) {
        array = true;
        braces = ['[', ']'];
      }
      if (isFunction2(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      }
      if (isRegExp2(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }
      if (isDate2(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }
      if (isError2(value)) {
        base = ' ' + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp2(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined2(value)) return ctx.stylize('undefined', 'undefined');
      if (isString2(value)) {
        var simple =
          "'" +
          JSON.stringify(value)
            .replace(/^"|"$/g, '')
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"') +
          "'";
        return ctx.stylize(simple, 'string');
      }
      if (isNumber2(value)) return ctx.stylize('' + value, 'number');
      if (isBoolean2(value)) return ctx.stylize('' + value, 'boolean');
      if (isNull2(value)) return ctx.stylize('null', 'null');
    }
    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
      };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull2(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str
                .split('\n')
                .map(function(line) {
                  return '  ' + line;
                })
                .join('\n')
                .substr(2);
            } else {
              str =
                '\n' +
                str
                  .split('\n')
                  .map(function(line) {
                    return '   ' + line;
                  })
                  .join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (isUndefined2(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name
            .replace(/'/g, "\\'")
            .replace(/\\"/g, '"')
            .replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }
      return name + ': ' + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
      }
      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }
    function isArray2(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray2;
    function isBoolean2(arg) {
      return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean2;
    function isNull2(arg) {
      return arg === null;
    }
    exports.isNull = isNull2;
    function isNullOrUndefined2(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined2;
    function isNumber2(arg) {
      return typeof arg === 'number';
    }
    exports.isNumber = isNumber2;
    function isString2(arg) {
      return typeof arg === 'string';
    }
    exports.isString = isString2;
    function isSymbol2(arg) {
      return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol2;
    function isUndefined2(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined2;
    function isRegExp2(re) {
      return isObject2(re) && objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp2;
    function isObject2(arg) {
      return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject2;
    function isDate2(d) {
      return isObject2(d) && objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate2;
    function isError2(e) {
      return isObject2(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError2;
    function isFunction2(arg) {
      return typeof arg === 'function';
    }
    exports.isFunction = isFunction2;
    function isPrimitive2(arg) {
      return (
        arg === null ||
        typeof arg === 'boolean' ||
        typeof arg === 'number' ||
        typeof arg === 'string' ||
        typeof arg === 'symbol' ||
        typeof arg === 'undefined'
      );
    }
    exports.isPrimitive = isPrimitive2;
    exports.isBuffer = require_isBufferBrowser();
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    function timestamp() {
      var d = new Date();
      var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
      return [d.getDate(), months[d.getMonth()], time].join(' ');
    }
    exports.log = function() {
      console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = require_inherits_browser();
    exports._extend = function(origin, add) {
      if (!add || !isObject2(add)) return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  }
});

// esm-build-752a6fd218adfd43206065f2c61cb9f92cd2f852-32404912/mod.js
var __module = __toESM(require_util());
var {
  format,
  deprecate,
  debuglog,
  inspect,
  isArray,
  isBoolean,
  isNull,
  isNullOrUndefined,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
  isRegExp,
  isObject,
  isDate,
  isError,
  isFunction,
  isPrimitive,
  isBuffer,
  log,
  inherits,
  _extend
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  _extend,
  debuglog,
  mod_default as default,
  deprecate,
  format,
  inherits,
  inspect,
  isArray,
  isBoolean,
  isBuffer,
  isDate,
  isError,
  isFunction,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isPrimitive,
  isRegExp,
  isString,
  isSymbol,
  isUndefined,
  log
};
