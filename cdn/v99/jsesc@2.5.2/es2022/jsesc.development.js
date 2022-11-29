/* esm.sh - esbuild bundle(jsesc@2.5.2) es2022 development */
import { Buffer as __Buffer$ } from '/cdn/v99/node_buffer.js';
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

// esm-build-a0e90de5b6f50b450a17e10c2867e8a93d704df4-0655bc8c/node_modules/jsesc/jsesc.js
var require_jsesc = __commonJS({
  'esm-build-a0e90de5b6f50b450a17e10c2867e8a93d704df4-0655bc8c/node_modules/jsesc/jsesc.js'(exports, module) {
    'use strict';

    var object = {};
    var hasOwnProperty = object.hasOwnProperty;
    var forOwn = (object2, callback) => {
      for (const key in object2) {
        if (hasOwnProperty.call(object2, key)) {
          callback(key, object2[key]);
        }
      }
    };
    var extend = (destination, source) => {
      if (!source) {
        return destination;
      }
      forOwn(source, (key, value) => {
        destination[key] = value;
      });
      return destination;
    };
    var forEach = (array, callback) => {
      const length = array.length;
      let index = -1;
      while (++index < length) {
        callback(array[index]);
      }
    };
    var toString = object.toString;
    var isArray = Array.isArray;
    var isBuffer = __Buffer$.isBuffer;
    var isObject = value => {
      return toString.call(value) == '[object Object]';
    };
    var isString = value => {
      return typeof value == 'string' || toString.call(value) == '[object String]';
    };
    var isNumber = value => {
      return typeof value == 'number' || toString.call(value) == '[object Number]';
    };
    var isFunction = value => {
      return typeof value == 'function';
    };
    var isMap = value => {
      return toString.call(value) == '[object Map]';
    };
    var isSet = value => {
      return toString.call(value) == '[object Set]';
    };
    var singleEscapes = {
      '"': '\\"',
      "'": "\\'",
      '\\': '\\\\',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '	': '\\t'
    };
    var regexSingleEscape = /["'\\\b\f\n\r\t]/;
    var regexDigit = /[0-9]/;
    var regexWhitelist = /[ !#-&\(-\[\]-_a-~]/;
    var jsesc = (argument, options) => {
      const increaseIndentation = () => {
        oldIndent = indent;
        ++options.indentLevel;
        indent = options.indent.repeat(options.indentLevel);
      };
      const defaults = {
        escapeEverything: false,
        minimal: false,
        isScriptContext: false,
        quotes: 'single',
        wrap: false,
        es6: false,
        json: false,
        compact: true,
        lowercaseHex: false,
        numbers: 'decimal',
        indent: '	',
        indentLevel: 0,
        __inline1__: false,
        __inline2__: false
      };
      const json = options && options.json;
      if (json) {
        defaults.quotes = 'double';
        defaults.wrap = true;
      }
      options = extend(defaults, options);
      if (options.quotes != 'single' && options.quotes != 'double' && options.quotes != 'backtick') {
        options.quotes = 'single';
      }
      const quote = options.quotes == 'double' ? '"' : options.quotes == 'backtick' ? '`' : "'";
      const compact = options.compact;
      const lowercaseHex = options.lowercaseHex;
      let indent = options.indent.repeat(options.indentLevel);
      let oldIndent = '';
      const inline1 = options.__inline1__;
      const inline2 = options.__inline2__;
      const newLine = compact ? '' : '\n';
      let result;
      let isEmpty = true;
      const useBinNumbers = options.numbers == 'binary';
      const useOctNumbers = options.numbers == 'octal';
      const useDecNumbers = options.numbers == 'decimal';
      const useHexNumbers = options.numbers == 'hexadecimal';
      if (json && argument && isFunction(argument.toJSON)) {
        argument = argument.toJSON();
      }
      if (!isString(argument)) {
        if (isMap(argument)) {
          if (argument.size == 0) {
            return 'new Map()';
          }
          if (!compact) {
            options.__inline1__ = true;
            options.__inline2__ = false;
          }
          return 'new Map(' + jsesc(Array.from(argument), options) + ')';
        }
        if (isSet(argument)) {
          if (argument.size == 0) {
            return 'new Set()';
          }
          return 'new Set(' + jsesc(Array.from(argument), options) + ')';
        }
        if (isBuffer(argument)) {
          if (argument.length == 0) {
            return 'Buffer.from([])';
          }
          return 'Buffer.from(' + jsesc(Array.from(argument), options) + ')';
        }
        if (isArray(argument)) {
          result = [];
          options.wrap = true;
          if (inline1) {
            options.__inline1__ = false;
            options.__inline2__ = true;
          }
          if (!inline2) {
            increaseIndentation();
          }
          forEach(argument, value => {
            isEmpty = false;
            if (inline2) {
              options.__inline2__ = false;
            }
            result.push((compact || inline2 ? '' : indent) + jsesc(value, options));
          });
          if (isEmpty) {
            return '[]';
          }
          if (inline2) {
            return '[' + result.join(', ') + ']';
          }
          return '[' + newLine + result.join(',' + newLine) + newLine + (compact ? '' : oldIndent) + ']';
        } else if (isNumber(argument)) {
          if (json) {
            return JSON.stringify(argument);
          }
          if (useDecNumbers) {
            return String(argument);
          }
          if (useHexNumbers) {
            let hexadecimal = argument.toString(16);
            if (!lowercaseHex) {
              hexadecimal = hexadecimal.toUpperCase();
            }
            return '0x' + hexadecimal;
          }
          if (useBinNumbers) {
            return '0b' + argument.toString(2);
          }
          if (useOctNumbers) {
            return '0o' + argument.toString(8);
          }
        } else if (!isObject(argument)) {
          if (json) {
            return JSON.stringify(argument) || 'null';
          }
          return String(argument);
        } else {
          result = [];
          options.wrap = true;
          increaseIndentation();
          forOwn(argument, (key, value) => {
            isEmpty = false;
            result.push(
              (compact ? '' : indent) + jsesc(key, options) + ':' + (compact ? '' : ' ') + jsesc(value, options)
            );
          });
          if (isEmpty) {
            return '{}';
          }
          return '{' + newLine + result.join(',' + newLine) + newLine + (compact ? '' : oldIndent) + '}';
        }
      }
      const string = argument;
      let index = -1;
      const length = string.length;
      result = '';
      while (++index < length) {
        const character = string.charAt(index);
        if (options.es6) {
          const first = string.charCodeAt(index);
          if (first >= 55296 && first <= 56319 && length > index + 1) {
            const second = string.charCodeAt(index + 1);
            if (second >= 56320 && second <= 57343) {
              const codePoint = (first - 55296) * 1024 + second - 56320 + 65536;
              let hexadecimal2 = codePoint.toString(16);
              if (!lowercaseHex) {
                hexadecimal2 = hexadecimal2.toUpperCase();
              }
              result += '\\u{' + hexadecimal2 + '}';
              ++index;
              continue;
            }
          }
        }
        if (!options.escapeEverything) {
          if (regexWhitelist.test(character)) {
            result += character;
            continue;
          }
          if (character == '"') {
            result += quote == character ? '\\"' : character;
            continue;
          }
          if (character == '`') {
            result += quote == character ? '\\`' : character;
            continue;
          }
          if (character == "'") {
            result += quote == character ? "\\'" : character;
            continue;
          }
        }
        if (character == '\0' && !json && !regexDigit.test(string.charAt(index + 1))) {
          result += '\\0';
          continue;
        }
        if (regexSingleEscape.test(character)) {
          result += singleEscapes[character];
          continue;
        }
        const charCode = character.charCodeAt(0);
        if (options.minimal && charCode != 8232 && charCode != 8233) {
          result += character;
          continue;
        }
        let hexadecimal = charCode.toString(16);
        if (!lowercaseHex) {
          hexadecimal = hexadecimal.toUpperCase();
        }
        const longhand = hexadecimal.length > 2 || json;
        const escaped = '\\' + (longhand ? 'u' : 'x') + ('0000' + hexadecimal).slice(longhand ? -4 : -2);
        result += escaped;
        continue;
      }
      if (options.wrap) {
        result = quote + result + quote;
      }
      if (quote == '`') {
        result = result.replace(/\$\{/g, '\\${');
      }
      if (options.isScriptContext) {
        return result.replace(/<\/(script|style)/gi, '<\\/$1').replace(/<!--/g, json ? '\\u003C!--' : '\\x3C!--');
      }
      return result;
    };
    jsesc.version = '2.5.2';
    module.exports = jsesc;
  }
});

// esm-build-a0e90de5b6f50b450a17e10c2867e8a93d704df4-0655bc8c/mod.js
var __module = __toESM(require_jsesc());
var { version } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, version };
