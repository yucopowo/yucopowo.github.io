/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/openscad) es2022 development */
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

// esm-build-6eb460f47c699b79ef5422a92d4995deef82046a-57af6013/node_modules/highlight.js/lib/languages/openscad.js
var require_openscad = __commonJS({
  'esm-build-6eb460f47c699b79ef5422a92d4995deef82046a-57af6013/node_modules/highlight.js/lib/languages/openscad.js'(
    exports,
    module
  ) {
    function openscad(hljs) {
      const SPECIAL_VARS = {
        className: 'keyword',
        begin: '\\$(f[asn]|t|vp[rtd]|children)'
      };
      const LITERALS = {
        className: 'literal',
        begin: 'false|true|PI|undef'
      };
      const NUMBERS = {
        className: 'number',
        begin: '\\b\\d+(\\.\\d+)?(e-?\\d+)?',
        relevance: 0
      };
      const STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null
      });
      const PREPRO = {
        className: 'meta',
        keywords: {
          'meta-keyword': 'include use'
        },
        begin: 'include|use <',
        end: '>'
      };
      const PARAMS = {
        className: 'params',
        begin: '\\(',
        end: '\\)',
        contains: ['self', NUMBERS, STRING, SPECIAL_VARS, LITERALS]
      };
      const MODIFIERS = {
        begin: '[*!#%]',
        relevance: 0
      };
      const FUNCTIONS = {
        className: 'function',
        beginKeywords: 'module function',
        end: /=|\{/,
        contains: [PARAMS, hljs.UNDERSCORE_TITLE_MODE]
      };
      return {
        name: 'OpenSCAD',
        aliases: ['scad'],
        keywords: {
          keyword: 'function module include use for intersection_for if else \\%',
          literal: 'false true PI undef',
          built_in:
            'circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign'
        },
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          NUMBERS,
          PREPRO,
          STRING,
          SPECIAL_VARS,
          MODIFIERS,
          FUNCTIONS
        ]
      };
    }
    module.exports = openscad;
  }
});

// esm-build-6eb460f47c699b79ef5422a92d4995deef82046a-57af6013/mod.js
var __module = __toESM(require_openscad());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
