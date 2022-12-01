/* esm.sh - esbuild bundle(refractor@3.6.0/lang/css) es2022 development */
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

// esm-build-68f0b1bcb6f57be51d49c9e6aa21d7e51677896c-97879e04/node_modules/refractor/lang/css.js
var require_css = __commonJS({
  'esm-build-68f0b1bcb6f57be51d49c9e6aa21d7e51677896c-97879e04/node_modules/refractor/lang/css.js'(exports, module) {
    'use strict';

    module.exports = css;
    css.displayName = 'css';
    css.aliases = [];
    function css(Prism) {
      (function(Prism2) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism2.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
              rule: /^@[\w-]+/,
              'selector-function-argument': {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: true,
                alias: 'selector'
              },
              keyword: {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: true
              }
            }
          },
          url: {
            pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
            greedy: true,
            inside: {
              function: /^url/i,
              punctuation: /^\(|\)$/,
              string: {
                pattern: RegExp('^' + string.source + '$'),
                alias: 'url'
              }
            }
          },
          selector: {
            pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ')*(?=\\s*\\{)'),
            lookbehind: true
          },
          string: {
            pattern: string,
            greedy: true
          },
          property: {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
          },
          important: /!important\b/i,
          function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
          },
          punctuation: /[(){};:,]/
        };
        Prism2.languages.css['atrule'].inside.rest = Prism2.languages.css;
        var markup = Prism2.languages.markup;
        if (markup) {
          markup.tag.addInlined('style', 'css');
          markup.tag.addAttribute('style', 'css');
        }
      })(Prism);
    }
  }
});

// esm-build-68f0b1bcb6f57be51d49c9e6aa21d7e51677896c-97879e04/mod.js
var __module = __toESM(require_css());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
