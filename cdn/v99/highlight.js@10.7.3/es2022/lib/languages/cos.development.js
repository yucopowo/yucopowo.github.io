/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/cos) es2022 development */
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

// esm-build-e96094859ba1e5742b92b9aebffe75062d993e43-8913ecbf/node_modules/highlight.js/lib/languages/cos.js
var require_cos = __commonJS({
  'esm-build-e96094859ba1e5742b92b9aebffe75062d993e43-8913ecbf/node_modules/highlight.js/lib/languages/cos.js'(
    exports,
    module
  ) {
    function cos(hljs) {
      const STRINGS = {
        className: 'string',
        variants: [
          {
            begin: '"',
            end: '"',
            contains: [
              {
                begin: '""',
                relevance: 0
              }
            ]
          }
        ]
      };
      const NUMBERS = {
        className: 'number',
        begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)',
        relevance: 0
      };
      const COS_KEYWORDS =
        'property parameter class classmethod clientmethod extends as break catch close continue do d|0 else elseif for goto halt hang h|0 if job j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 tcommit throw trollback try tstart use view while write w|0 xecute x|0 zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit zsync ascii';
      return {
        name: 'Cach\xE9 Object Script',
        case_insensitive: true,
        aliases: ['cls'],
        keywords: COS_KEYWORDS,
        contains: [
          NUMBERS,
          STRINGS,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: 'comment',
            begin: /;/,
            end: '$',
            relevance: 0
          },
          {
            className: 'built_in',
            begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
          },
          {
            className: 'built_in',
            begin: /\$\$\$[a-zA-Z]+/
          },
          {
            className: 'built_in',
            begin: /%[a-z]+(?:\.[a-z]+)*/
          },
          {
            className: 'symbol',
            begin: /\^%?[a-zA-Z][\w]*/
          },
          {
            className: 'keyword',
            begin: /##class|##super|#define|#dim/
          },
          {
            begin: /&sql\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            subLanguage: 'sql'
          },
          {
            begin: /&(js|jscript|javascript)</,
            end: />/,
            excludeBegin: true,
            excludeEnd: true,
            subLanguage: 'javascript'
          },
          {
            begin: /&html<\s*</,
            end: />\s*>/,
            subLanguage: 'xml'
          }
        ]
      };
    }
    module.exports = cos;
  }
});

// esm-build-e96094859ba1e5742b92b9aebffe75062d993e43-8913ecbf/mod.js
var __module = __toESM(require_cos());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
