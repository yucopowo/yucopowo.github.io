/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/inform7) es2022 development */
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

// esm-build-518d5d868fe7860ef733cfbd59371186fa0952f3-ecce82f0/node_modules/highlight.js/lib/languages/inform7.js
var require_inform7 = __commonJS({
  'esm-build-518d5d868fe7860ef733cfbd59371186fa0952f3-ecce82f0/node_modules/highlight.js/lib/languages/inform7.js'(
    exports,
    module
  ) {
    function inform7(hljs) {
      const START_BRACKET = '\\[';
      const END_BRACKET = '\\]';
      return {
        name: 'Inform 7',
        aliases: ['i7'],
        case_insensitive: true,
        keywords: {
          keyword:
            'thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule'
        },
        contains: [
          {
            className: 'string',
            begin: '"',
            end: '"',
            relevance: 0,
            contains: [
              {
                className: 'subst',
                begin: START_BRACKET,
                end: END_BRACKET
              }
            ]
          },
          {
            className: 'section',
            begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
            end: '$'
          },
          {
            begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
            end: ':',
            contains: [
              {
                begin: '\\(This',
                end: '\\)'
              }
            ]
          },
          {
            className: 'comment',
            begin: START_BRACKET,
            end: END_BRACKET,
            contains: ['self']
          }
        ]
      };
    }
    module.exports = inform7;
  }
});

// esm-build-518d5d868fe7860ef733cfbd59371186fa0952f3-ecce82f0/mod.js
var __module = __toESM(require_inform7());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
