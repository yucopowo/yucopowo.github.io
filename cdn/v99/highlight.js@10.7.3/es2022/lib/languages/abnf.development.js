/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/abnf) es2022 development */
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

// esm-build-92d1b886fe4c402e0197b6e8b59d26734539387b-cf199e89/node_modules/highlight.js/lib/languages/abnf.js
var require_abnf = __commonJS({
  'esm-build-92d1b886fe4c402e0197b6e8b59d26734539387b-cf199e89/node_modules/highlight.js/lib/languages/abnf.js'(
    exports,
    module
  ) {
    function source(re) {
      if (!re) return null;
      if (typeof re === 'string') return re;
      return re.source;
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function abnf(hljs) {
      const regexes = {
        ruleDeclaration: /^[a-zA-Z][a-zA-Z0-9-]*/,
        unexpectedChars: /[!@#$^&',?+~`|:]/
      };
      const keywords = [
        'ALPHA',
        'BIT',
        'CHAR',
        'CR',
        'CRLF',
        'CTL',
        'DIGIT',
        'DQUOTE',
        'HEXDIG',
        'HTAB',
        'LF',
        'LWSP',
        'OCTET',
        'SP',
        'VCHAR',
        'WSP'
      ];
      const commentMode = hljs.COMMENT(/;/, /$/);
      const terminalBinaryMode = {
        className: 'symbol',
        begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
      };
      const terminalDecimalMode = {
        className: 'symbol',
        begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
      };
      const terminalHexadecimalMode = {
        className: 'symbol',
        begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/
      };
      const caseSensitivityIndicatorMode = {
        className: 'symbol',
        begin: /%[si]/
      };
      const ruleDeclarationMode = {
        className: 'attribute',
        begin: concat(regexes.ruleDeclaration, /(?=\s*=)/)
      };
      return {
        name: 'Augmented Backus-Naur Form',
        illegal: regexes.unexpectedChars,
        keywords,
        contains: [
          ruleDeclarationMode,
          commentMode,
          terminalBinaryMode,
          terminalDecimalMode,
          terminalHexadecimalMode,
          caseSensitivityIndicatorMode,
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE
        ]
      };
    }
    module.exports = abnf;
  }
});

// esm-build-92d1b886fe4c402e0197b6e8b59d26734539387b-cf199e89/mod.js
var __module = __toESM(require_abnf());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
