/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/vhdl) es2022 development */
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

// esm-build-05c035ace71f2e2c23b50c929bf49908c2722b38-9f74de5f/node_modules/highlight.js/lib/languages/vhdl.js
var require_vhdl = __commonJS({
  'esm-build-05c035ace71f2e2c23b50c929bf49908c2722b38-9f74de5f/node_modules/highlight.js/lib/languages/vhdl.js'(
    exports,
    module
  ) {
    function vhdl(hljs) {
      const INTEGER_RE = '\\d(_|\\d)*';
      const EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
      const DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?(' + EXPONENT_RE + ')?';
      const BASED_INTEGER_RE = '\\w+';
      const BASED_LITERAL_RE =
        INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?#(' + EXPONENT_RE + ')?';
      const NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';
      return {
        name: 'VHDL',
        case_insensitive: true,
        keywords: {
          keyword:
            'abs access after alias all and architecture array assert assume assume_guarantee attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package parameter port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable view vmode vprop vunit wait when while with xnor xor',
          built_in:
            'boolean bit character integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_logic std_logic_vector unsigned signed boolean_vector integer_vector std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signed real_vector time_vector',
          literal: 'false true note warning error failure line text side width'
        },
        illegal: /\{/,
        contains: [
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.COMMENT('--', '$'),
          hljs.QUOTE_STRING_MODE,
          {
            className: 'number',
            begin: NUMBER_RE,
            relevance: 0
          },
          {
            className: 'string',
            begin: "'(U|X|0|1|Z|W|L|H|-)'",
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            className: 'symbol',
            begin: "'[A-Za-z](_?[A-Za-z0-9])*",
            contains: [hljs.BACKSLASH_ESCAPE]
          }
        ]
      };
    }
    module.exports = vhdl;
  }
});

// esm-build-05c035ace71f2e2c23b50c929bf49908c2722b38-9f74de5f/mod.js
var __module = __toESM(require_vhdl());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
