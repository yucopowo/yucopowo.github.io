/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/xl) es2022 development */
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

// esm-build-466d6414bab8719cbc59e68349ec7a36e4b7ca89-a8365e83/node_modules/highlight.js/lib/languages/xl.js
var require_xl = __commonJS({
  'esm-build-466d6414bab8719cbc59e68349ec7a36e4b7ca89-a8365e83/node_modules/highlight.js/lib/languages/xl.js'(
    exports,
    module
  ) {
    function xl(hljs) {
      const BUILTIN_MODULES =
        'ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts';
      const XL_KEYWORDS = {
        $pattern: /[a-zA-Z][a-zA-Z0-9_?]*/,
        keyword:
          'if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree',
        literal: 'true false nil',
        built_in:
          'in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons ' +
          BUILTIN_MODULES
      };
      const DOUBLE_QUOTE_TEXT = {
        className: 'string',
        begin: '"',
        end: '"',
        illegal: '\\n'
      };
      const SINGLE_QUOTE_TEXT = {
        className: 'string',
        begin: "'",
        end: "'",
        illegal: '\\n'
      };
      const LONG_TEXT = {
        className: 'string',
        begin: '<<',
        end: '>>'
      };
      const BASED_NUMBER = {
        className: 'number',
        begin: '[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?'
      };
      const IMPORT = {
        beginKeywords: 'import',
        end: '$',
        keywords: XL_KEYWORDS,
        contains: [DOUBLE_QUOTE_TEXT]
      };
      const FUNCTION_DEFINITION = {
        className: 'function',
        begin: /[a-z][^\n]*->/,
        returnBegin: true,
        end: /->/,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            starts: {
              endsWithParent: true,
              keywords: XL_KEYWORDS
            }
          })
        ]
      };
      return {
        name: 'XL',
        aliases: ['tao'],
        keywords: XL_KEYWORDS,
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          DOUBLE_QUOTE_TEXT,
          SINGLE_QUOTE_TEXT,
          LONG_TEXT,
          FUNCTION_DEFINITION,
          IMPORT,
          BASED_NUMBER,
          hljs.NUMBER_MODE
        ]
      };
    }
    module.exports = xl;
  }
});

// esm-build-466d6414bab8719cbc59e68349ec7a36e4b7ca89-a8365e83/mod.js
var __module = __toESM(require_xl());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
