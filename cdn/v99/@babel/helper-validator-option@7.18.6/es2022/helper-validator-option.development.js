/* esm.sh - esbuild bundle(@babel/helper-validator-option@7.18.6) es2022 development */
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

// esm-build-934303d7bcb589766b58dfd0aa192ad4af65e235-30172376/node_modules/@babel/helper-validator-option/lib/find-suggestion.js
var require_find_suggestion = __commonJS({
  'esm-build-934303d7bcb589766b58dfd0aa192ad4af65e235-30172376/node_modules/@babel/helper-validator-option/lib/find-suggestion.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.findSuggestion = findSuggestion2;
    var { min } = Math;
    function levenshtein(a, b) {
      let t = [],
        u = [],
        i,
        j;
      const m = a.length,
        n = b.length;
      if (!m) {
        return n;
      }
      if (!n) {
        return m;
      }
      for (j = 0; j <= n; j++) {
        t[j] = j;
      }
      for (i = 1; i <= m; i++) {
        for (u = [i], j = 1; j <= n; j++) {
          u[j] = a[i - 1] === b[j - 1] ? t[j - 1] : min(t[j - 1], t[j], u[j - 1]) + 1;
        }
        t = u;
      }
      return u[n];
    }
    function findSuggestion2(str, arr) {
      const distances = arr.map(el => levenshtein(el, str));
      return arr[distances.indexOf(min(...distances))];
    }
  }
});

// esm-build-934303d7bcb589766b58dfd0aa192ad4af65e235-30172376/node_modules/@babel/helper-validator-option/lib/validator.js
var require_validator = __commonJS({
  'esm-build-934303d7bcb589766b58dfd0aa192ad4af65e235-30172376/node_modules/@babel/helper-validator-option/lib/validator.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.OptionValidator = void 0;
    var _findSuggestion = require_find_suggestion();
    var OptionValidator2 = class {
      constructor(descriptor) {
        this.descriptor = descriptor;
      }
      validateTopLevelOptions(options, TopLevelOptionShape) {
        const validOptionNames = Object.keys(TopLevelOptionShape);
        for (const option of Object.keys(options)) {
          if (!validOptionNames.includes(option)) {
            throw new Error(
              this.formatMessage(`'${option}' is not a valid top-level option.
- Did you mean '${(0, _findSuggestion.findSuggestion)(option, validOptionNames)}'?`)
            );
          }
        }
      }
      validateBooleanOption(name, value, defaultValue) {
        if (value === void 0) {
          return defaultValue;
        } else {
          this.invariant(typeof value === 'boolean', `'${name}' option must be a boolean.`);
        }
        return value;
      }
      validateStringOption(name, value, defaultValue) {
        if (value === void 0) {
          return defaultValue;
        } else {
          this.invariant(typeof value === 'string', `'${name}' option must be a string.`);
        }
        return value;
      }
      invariant(condition, message) {
        if (!condition) {
          throw new Error(this.formatMessage(message));
        }
      }
      formatMessage(message) {
        return `${this.descriptor}: ${message}`;
      }
    };
    exports.OptionValidator = OptionValidator2;
  }
});

// esm-build-934303d7bcb589766b58dfd0aa192ad4af65e235-30172376/node_modules/@babel/helper-validator-option/lib/index.js
var require_lib = __commonJS({
  'esm-build-934303d7bcb589766b58dfd0aa192ad4af65e235-30172376/node_modules/@babel/helper-validator-option/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    Object.defineProperty(exports, 'OptionValidator', {
      enumerable: true,
      get: function() {
        return _validator.OptionValidator;
      }
    });
    Object.defineProperty(exports, 'findSuggestion', {
      enumerable: true,
      get: function() {
        return _findSuggestion.findSuggestion;
      }
    });
    var _validator = require_validator();
    var _findSuggestion = require_find_suggestion();
  }
});

// esm-build-934303d7bcb589766b58dfd0aa192ad4af65e235-30172376/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { OptionValidator, findSuggestion } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { OptionValidator, __esModule, mod_default as default, findSuggestion };
