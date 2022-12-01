/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/php-template) es2022 development */
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

// esm-build-ea619a305c15d383c003b5aabb785236486da572-da5a8286/node_modules/highlight.js/lib/languages/php-template.js
var require_php_template = __commonJS({
  'esm-build-ea619a305c15d383c003b5aabb785236486da572-da5a8286/node_modules/highlight.js/lib/languages/php-template.js'(
    exports,
    module
  ) {
    function phpTemplate(hljs) {
      return {
        name: 'PHP template',
        subLanguage: 'xml',
        contains: [
          {
            begin: /<\?(php|=)?/,
            end: /\?>/,
            subLanguage: 'php',
            contains: [
              {
                begin: '/\\*',
                end: '\\*/',
                skip: true
              },
              {
                begin: 'b"',
                end: '"',
                skip: true
              },
              {
                begin: "b'",
                end: "'",
                skip: true
              },
              hljs.inherit(hljs.APOS_STRING_MODE, {
                illegal: null,
                className: null,
                contains: null,
                skip: true
              }),
              hljs.inherit(hljs.QUOTE_STRING_MODE, {
                illegal: null,
                className: null,
                contains: null,
                skip: true
              })
            ]
          }
        ]
      };
    }
    module.exports = phpTemplate;
  }
});

// esm-build-ea619a305c15d383c003b5aabb785236486da572-da5a8286/mod.js
var __module = __toESM(require_php_template());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
