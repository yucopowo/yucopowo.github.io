/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/hy) es2022 development */
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

// esm-build-22d89ade50868f32c794eb5eee0223cc80cf3ca0-3dc03ae8/node_modules/highlight.js/lib/languages/hy.js
var require_hy = __commonJS({
  'esm-build-22d89ade50868f32c794eb5eee0223cc80cf3ca0-3dc03ae8/node_modules/highlight.js/lib/languages/hy.js'(
    exports,
    module
  ) {
    function hy(hljs) {
      var SYMBOLSTART = "a-zA-Z_\\-!.?+*=<>&#'";
      var SYMBOL_RE = '[' + SYMBOLSTART + '][' + SYMBOLSTART + '0-9/;:]*';
      var keywords = {
        $pattern: SYMBOL_RE,
        'builtin-name':
          '!= % %= & &= * ** **= *= *map + += , --build-class-- --import-- -= . / // //= /= < << <<= <= = > >= >> >>= @ @= ^ ^= abs accumulate all and any ap-compose ap-dotimes ap-each ap-each-while ap-filter ap-first ap-if ap-last ap-map ap-map-when ap-pipe ap-reduce ap-reject apply as-> ascii assert assoc bin break butlast callable calling-module-name car case cdr chain chr coll? combinations compile compress cond cons cons? continue count curry cut cycle dec def default-method defclass defmacro defmacro-alias defmacro/g! defmain defmethod defmulti defn defn-alias defnc defnr defreader defseq del delattr delete-route dict-comp dir disassemble dispatch-reader-macro distinct divmod do doto drop drop-last drop-while empty? end-sequence eval eval-and-compile eval-when-compile even? every? except exec filter first flatten float? fn fnc fnr for for* format fraction genexpr gensym get getattr global globals group-by hasattr hash hex id identity if if* if-not if-python2 import in inc input instance? integer integer-char? integer? interleave interpose is is-coll is-cons is-empty is-even is-every is-float is-instance is-integer is-integer-char is-iterable is-iterator is-keyword is-neg is-none is-not is-numeric is-odd is-pos is-string is-symbol is-zero isinstance islice issubclass iter iterable? iterate iterator? keyword keyword? lambda last len let lif lif-not list* list-comp locals loop macro-error macroexpand macroexpand-1 macroexpand-all map max merge-with method-decorator min multi-decorator multicombinations name neg? next none? nonlocal not not-in not? nth numeric? oct odd? open or ord partition permutations pos? post-route postwalk pow prewalk print product profile/calls profile/cpu put-route quasiquote quote raise range read read-str recursive-replace reduce remove repeat repeatedly repr require rest round route route-with-methods rwm second seq set-comp setattr setv some sorted string string? sum switch symbol? take take-nth take-while tee try unless unquote unquote-splicing vars walk when while with with* with-decorator with-gensyms xi xor yield yield-from zero? zip zip-longest | |= ~'
      };
      var SIMPLE_NUMBER_RE = '[-+]?\\d+(\\.\\d+)?';
      var SYMBOL = {
        begin: SYMBOL_RE,
        relevance: 0
      };
      var NUMBER = {
        className: 'number',
        begin: SIMPLE_NUMBER_RE,
        relevance: 0
      };
      var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null
      });
      var COMMENT = hljs.COMMENT(';', '$', {
        relevance: 0
      });
      var LITERAL = {
        className: 'literal',
        begin: /\b([Tt]rue|[Ff]alse|nil|None)\b/
      };
      var COLLECTION = {
        begin: '[\\[\\{]',
        end: '[\\]\\}]'
      };
      var HINT = {
        className: 'comment',
        begin: '\\^' + SYMBOL_RE
      };
      var HINT_COL = hljs.COMMENT('\\^\\{', '\\}');
      var KEY = {
        className: 'symbol',
        begin: '[:]{1,2}' + SYMBOL_RE
      };
      var LIST = {
        begin: '\\(',
        end: '\\)'
      };
      var BODY = {
        endsWithParent: true,
        relevance: 0
      };
      var NAME = {
        className: 'name',
        relevance: 0,
        keywords,
        begin: SYMBOL_RE,
        starts: BODY
      };
      var DEFAULT_CONTAINS = [LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL, SYMBOL];
      LIST.contains = [hljs.COMMENT('comment', ''), NAME, BODY];
      BODY.contains = DEFAULT_CONTAINS;
      COLLECTION.contains = DEFAULT_CONTAINS;
      return {
        name: 'Hy',
        aliases: ['hylang'],
        illegal: /\S/,
        contains: [hljs.SHEBANG(), LIST, STRING, HINT, HINT_COL, COMMENT, KEY, COLLECTION, NUMBER, LITERAL]
      };
    }
    module.exports = hy;
  }
});

// esm-build-22d89ade50868f32c794eb5eee0223cc80cf3ca0-3dc03ae8/mod.js
var __module = __toESM(require_hy());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
