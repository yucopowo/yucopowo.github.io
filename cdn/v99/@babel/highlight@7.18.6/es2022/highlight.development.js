/* esm.sh - esbuild bundle(@babel/highlight@7.18.6) es2022 development */
import __chalk$ from '/cdn/v99/chalk@2.4.2/es2022/chalk.development.js';
import ___babel_helper_validator_identifier$ from '/cdn/v99/@babel/helper-validator-identifier@7.19.1/es2022/helper-validator-identifier.development.js';
import * as __js_tokens$ from '/cdn/v99/js-tokens@4.0.0/es2022/js-tokens.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
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

// esm-build-066da43c5daa0b21128f056ca73c019dd3d92b82-7c5686fe/node_modules/@babel/highlight/lib/index.js
var require_lib = __commonJS({
  'esm-build-066da43c5daa0b21128f056ca73c019dd3d92b82-7c5686fe/node_modules/@babel/highlight/lib/index.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = highlight;
    exports.getChalk = getChalk2;
    exports.shouldHighlight = shouldHighlight2;
    var _jsTokens = __js_tokens$;
    var _helperValidatorIdentifier = ___babel_helper_validator_identifier$;
    var _chalk = __chalk$;
    var sometimesKeywords = /* @__PURE__ */ new Set(['as', 'async', 'from', 'get', 'of', 'set']);
    function getDefs(chalk) {
      return {
        keyword: chalk.cyan,
        capitalized: chalk.yellow,
        jsxIdentifier: chalk.yellow,
        punctuator: chalk.yellow,
        number: chalk.magenta,
        string: chalk.green,
        regex: chalk.magenta,
        comment: chalk.grey,
        invalid: chalk.white.bgRed.bold
      };
    }
    var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;
    var BRACKET = /^[()[\]{}]$/;
    var tokenize;
    {
      const JSX_TAG = /^[a-z][\w-]*$/i;
      const getTokenType = function(token, offset, text) {
        if (token.type === 'name') {
          if (
            (0, _helperValidatorIdentifier.isKeyword)(token.value) ||
            (0, _helperValidatorIdentifier.isStrictReservedWord)(token.value, true) ||
            sometimesKeywords.has(token.value)
          ) {
            return 'keyword';
          }
          if (JSX_TAG.test(token.value) && (text[offset - 1] === '<' || text.slice(offset - 2, offset) == '</')) {
            return 'jsxIdentifier';
          }
          if (token.value[0] !== token.value[0].toLowerCase()) {
            return 'capitalized';
          }
        }
        if (token.type === 'punctuator' && BRACKET.test(token.value)) {
          return 'bracket';
        }
        if (token.type === 'invalid' && (token.value === '@' || token.value === '#')) {
          return 'punctuator';
        }
        return token.type;
      };
      tokenize = function*(text) {
        let match;
        while ((match = _jsTokens.default.exec(text))) {
          const token = _jsTokens.matchToToken(match);
          yield {
            type: getTokenType(token, match.index, text),
            value: token.value
          };
        }
      };
    }
    function highlightTokens(defs, text) {
      let highlighted = '';
      for (const { type, value } of tokenize(text)) {
        const colorize = defs[type];
        if (colorize) {
          highlighted += value
            .split(NEWLINE)
            .map(str => colorize(str))
            .join('\n');
        } else {
          highlighted += value;
        }
      }
      return highlighted;
    }
    function shouldHighlight2(options) {
      return !!_chalk.supportsColor || options.forceColor;
    }
    function getChalk2(options) {
      return options.forceColor
        ? new _chalk.constructor({
            enabled: true,
            level: 1
          })
        : _chalk;
    }
    function highlight(code, options = {}) {
      if (code !== '' && shouldHighlight2(options)) {
        const chalk = getChalk2(options);
        const defs = getDefs(chalk);
        return highlightTokens(defs, code);
      } else {
        return code;
      }
    }
  }
});

// esm-build-066da43c5daa0b21128f056ca73c019dd3d92b82-7c5686fe/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { getChalk, shouldHighlight } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default, getChalk, shouldHighlight };
