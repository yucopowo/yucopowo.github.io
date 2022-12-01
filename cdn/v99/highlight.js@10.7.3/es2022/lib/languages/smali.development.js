/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/smali) es2022 development */
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

// esm-build-f96f98f9c6113c79d2a3871350a80b9890779fa1-996a2fce/node_modules/highlight.js/lib/languages/smali.js
var require_smali = __commonJS({
  'esm-build-f96f98f9c6113c79d2a3871350a80b9890779fa1-996a2fce/node_modules/highlight.js/lib/languages/smali.js'(
    exports,
    module
  ) {
    function smali(hljs) {
      const smali_instr_low_prio = [
        'add',
        'and',
        'cmp',
        'cmpg',
        'cmpl',
        'const',
        'div',
        'double',
        'float',
        'goto',
        'if',
        'int',
        'long',
        'move',
        'mul',
        'neg',
        'new',
        'nop',
        'not',
        'or',
        'rem',
        'return',
        'shl',
        'shr',
        'sput',
        'sub',
        'throw',
        'ushr',
        'xor'
      ];
      const smali_instr_high_prio = [
        'aget',
        'aput',
        'array',
        'check',
        'execute',
        'fill',
        'filled',
        'goto/16',
        'goto/32',
        'iget',
        'instance',
        'invoke',
        'iput',
        'monitor',
        'packed',
        'sget',
        'sparse'
      ];
      const smali_keywords = [
        'transient',
        'constructor',
        'abstract',
        'final',
        'synthetic',
        'public',
        'private',
        'protected',
        'static',
        'bridge',
        'system'
      ];
      return {
        name: 'Smali',
        contains: [
          {
            className: 'string',
            begin: '"',
            end: '"',
            relevance: 0
          },
          hljs.COMMENT('#', '$', {
            relevance: 0
          }),
          {
            className: 'keyword',
            variants: [
              {
                begin: '\\s*\\.end\\s[a-zA-Z0-9]*'
              },
              {
                begin: '^[ ]*\\.[a-zA-Z]*',
                relevance: 0
              },
              {
                begin: '\\s:[a-zA-Z_0-9]*',
                relevance: 0
              },
              {
                begin: '\\s(' + smali_keywords.join('|') + ')'
              }
            ]
          },
          {
            className: 'built_in',
            variants: [
              {
                begin: '\\s(' + smali_instr_low_prio.join('|') + ')\\s'
              },
              {
                begin: '\\s(' + smali_instr_low_prio.join('|') + ')((-|/)[a-zA-Z0-9]+)+\\s',
                relevance: 10
              },
              {
                begin: '\\s(' + smali_instr_high_prio.join('|') + ')((-|/)[a-zA-Z0-9]+)*\\s',
                relevance: 10
              }
            ]
          },
          {
            className: 'class',
            begin: 'L[^(;:\n]*;',
            relevance: 0
          },
          {
            begin: '[vp][0-9]+'
          }
        ]
      };
    }
    module.exports = smali;
  }
});

// esm-build-f96f98f9c6113c79d2a3871350a80b9890779fa1-996a2fce/mod.js
var __module = __toESM(require_smali());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
