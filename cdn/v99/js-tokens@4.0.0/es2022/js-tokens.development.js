/* esm.sh - esbuild bundle(js-tokens@4.0.0) es2022 development */
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

// esm-build-b0cab6b7a09289ddd46917b5eb1ed4afcfeae93c-756fd9b0/node_modules/js-tokens/index.js
var require_js_tokens = __commonJS({
  'esm-build-b0cab6b7a09289ddd46917b5eb1ed4afcfeae93c-756fd9b0/node_modules/js-tokens/index.js'(exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g;
    exports.matchToToken = function(match) {
      var token = {
        type: 'invalid',
        value: match[0],
        closed: void 0
      };
      if (match[1]) (token.type = 'string'), (token.closed = !!(match[3] || match[4]));
      else if (match[5]) token.type = 'comment';
      else if (match[6]) (token.type = 'comment'), (token.closed = !!match[7]);
      else if (match[8]) token.type = 'regex';
      else if (match[9]) token.type = 'number';
      else if (match[10]) token.type = 'name';
      else if (match[11]) token.type = 'punctuator';
      else if (match[12]) token.type = 'whitespace';
      return token;
    };
  }
});

// esm-build-b0cab6b7a09289ddd46917b5eb1ed4afcfeae93c-756fd9b0/mod.js
var __module = __toESM(require_js_tokens());
var __esModule = true;
var { matchToToken } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default, matchToToken };
