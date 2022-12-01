/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/twig) es2022 development */
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

// esm-build-e6ed0f21851671444c66ccaf5119b43a4b568489-79ed5b8a/node_modules/highlight.js/lib/languages/twig.js
var require_twig = __commonJS({
  'esm-build-e6ed0f21851671444c66ccaf5119b43a4b568489-79ed5b8a/node_modules/highlight.js/lib/languages/twig.js'(
    exports,
    module
  ) {
    function twig(hljs) {
      var PARAMS = {
        className: 'params',
        begin: '\\(',
        end: '\\)'
      };
      var FUNCTION_NAMES =
        'attribute block constant cycle date dump include max min parent random range source template_from_string';
      var FUNCTIONS = {
        beginKeywords: FUNCTION_NAMES,
        keywords: {
          name: FUNCTION_NAMES
        },
        relevance: 0,
        contains: [PARAMS]
      };
      var FILTER = {
        begin: /\|[A-Za-z_]+:?/,
        keywords:
          'abs batch capitalize column convert_encoding date date_modify default escape filter first format inky_to_html inline_css join json_encode keys last length lower map markdown merge nl2br number_format raw reduce replace reverse round slice sort spaceless split striptags title trim upper url_encode',
        contains: [FUNCTIONS]
      };
      var TAGS =
        'apply autoescape block deprecated do embed extends filter flush for from if import include macro sandbox set use verbatim with';
      TAGS =
        TAGS +
        ' ' +
        TAGS.split(' ')
          .map(function(t) {
            return 'end' + t;
          })
          .join(' ');
      return {
        name: 'Twig',
        aliases: ['craftcms'],
        case_insensitive: true,
        subLanguage: 'xml',
        contains: [
          hljs.COMMENT(/\{#/, /#\}/),
          {
            className: 'template-tag',
            begin: /\{%/,
            end: /%\}/,
            contains: [
              {
                className: 'name',
                begin: /\w+/,
                keywords: TAGS,
                starts: {
                  endsWithParent: true,
                  contains: [FILTER, FUNCTIONS],
                  relevance: 0
                }
              }
            ]
          },
          {
            className: 'template-variable',
            begin: /\{\{/,
            end: /\}\}/,
            contains: ['self', FILTER, FUNCTIONS]
          }
        ]
      };
    }
    module.exports = twig;
  }
});

// esm-build-e6ed0f21851671444c66ccaf5119b43a4b568489-79ed5b8a/mod.js
var __module = __toESM(require_twig());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
