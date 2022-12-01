/* esm.sh - esbuild bundle(format@0.2.2) es2022 development */
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

// esm-build-87579a22b0723aff307083df3c87ced0dcaf91a0-58513321/node_modules/format/format.js
var require_format = __commonJS({
  'esm-build-87579a22b0723aff307083df3c87ced0dcaf91a0-58513321/node_modules/format/format.js'(exports, module) {
    (function() {
      var namespace;
      if (typeof module !== 'undefined') {
        namespace = module.exports = format;
      } else {
        namespace = (function() {
          return this || (1, eval)('this');
        })();
      }
      namespace.format = format;
      namespace.vsprintf = vsprintf;
      if (typeof console !== 'undefined' && typeof console.log === 'function') {
        namespace.printf = printf;
      }
      function printf() {
        console.log(format.apply(null, arguments));
      }
      function vsprintf(fmt, replacements) {
        return format.apply(null, [fmt].concat(replacements));
      }
      function format(fmt) {
        var argIndex = 1,
          args = [].slice.call(arguments),
          i = 0,
          n = fmt.length,
          result = '',
          c,
          escaped = false,
          arg,
          tmp,
          leadingZero = false,
          precision,
          nextArg = function() {
            return args[argIndex++];
          },
          slurpNumber = function() {
            var digits = '';
            while (/\d/.test(fmt[i])) {
              digits += fmt[i++];
              c = fmt[i];
            }
            return digits.length > 0 ? parseInt(digits) : null;
          };
        for (; i < n; ++i) {
          c = fmt[i];
          if (escaped) {
            escaped = false;
            if (c == '.') {
              leadingZero = false;
              c = fmt[++i];
            } else if (c == '0' && fmt[i + 1] == '.') {
              leadingZero = true;
              i += 2;
              c = fmt[i];
            } else {
              leadingZero = true;
            }
            precision = slurpNumber();
            switch (c) {
              case 'b':
                result += parseInt(nextArg(), 10).toString(2);
                break;
              case 'c':
                arg = nextArg();
                if (typeof arg === 'string' || arg instanceof String) result += arg;
                else result += String.fromCharCode(parseInt(arg, 10));
                break;
              case 'd':
                result += parseInt(nextArg(), 10);
                break;
              case 'f':
                tmp = String(parseFloat(nextArg()).toFixed(precision || 6));
                result += leadingZero ? tmp : tmp.replace(/^0/, '');
                break;
              case 'j':
                result += JSON.stringify(nextArg());
                break;
              case 'o':
                result += '0' + parseInt(nextArg(), 10).toString(8);
                break;
              case 's':
                result += nextArg();
                break;
              case 'x':
                result += '0x' + parseInt(nextArg(), 10).toString(16);
                break;
              case 'X':
                result +=
                  '0x' +
                  parseInt(nextArg(), 10)
                    .toString(16)
                    .toUpperCase();
                break;
              default:
                result += c;
                break;
            }
          } else if (c === '%') {
            escaped = true;
          } else {
            result += c;
          }
        }
        return result;
      }
    })();
  }
});

// esm-build-87579a22b0723aff307083df3c87ced0dcaf91a0-58513321/mod.js
var __module = __toESM(require_format());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
