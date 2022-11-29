/* esm.sh - esbuild bundle(parse5@6.0.1/lib/tokenizer/preprocessor) es2022 development */
import __parse5_lib_common_error_codes$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/error-codes.development.js';
import __parse5_lib_common_unicode$ from '/cdn/v99/parse5@6.0.1/es2022/lib/common/unicode.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/tokenizer/preprocessor.js
var require_preprocessor = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/tokenizer/preprocessor.js'(
    exports,
    module
  ) {
    'use strict';

    var unicode = __parse5_lib_common_unicode$;
    var ERR = __parse5_lib_common_error_codes$;
    var $ = unicode.CODE_POINTS;
    var DEFAULT_BUFFER_WATERLINE = 1 << 16;
    var Preprocessor = class {
      constructor() {
        this.html = null;
        this.pos = -1;
        this.lastGapPos = -1;
        this.lastCharPos = -1;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
      }
      _err() {}
      _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
      }
      _processSurrogate(cp) {
        if (this.pos !== this.lastCharPos) {
          const nextCp = this.html.charCodeAt(this.pos + 1);
          if (unicode.isSurrogatePair(nextCp)) {
            this.pos++;
            this._addGap();
            return unicode.getSurrogatePairCodePoint(cp, nextCp);
          }
        } else if (!this.lastChunkWritten) {
          this.endOfChunkHit = true;
          return $.EOF;
        }
        this._err(ERR.surrogateInInputStream);
        return cp;
      }
      dropParsedChunk() {
        if (this.pos > this.bufferWaterline) {
          this.lastCharPos -= this.pos;
          this.html = this.html.substring(this.pos);
          this.pos = 0;
          this.lastGapPos = -1;
          this.gapStack = [];
        }
      }
      write(chunk, isLastChunk) {
        if (this.html) {
          this.html += chunk;
        } else {
          this.html = chunk;
        }
        this.lastCharPos = this.html.length - 1;
        this.endOfChunkHit = false;
        this.lastChunkWritten = isLastChunk;
      }
      insertHtmlAtCurrentPos(chunk) {
        this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1, this.html.length);
        this.lastCharPos = this.html.length - 1;
        this.endOfChunkHit = false;
      }
      advance() {
        this.pos++;
        if (this.pos > this.lastCharPos) {
          this.endOfChunkHit = !this.lastChunkWritten;
          return $.EOF;
        }
        let cp = this.html.charCodeAt(this.pos);
        if (this.skipNextNewLine && cp === $.LINE_FEED) {
          this.skipNextNewLine = false;
          this._addGap();
          return this.advance();
        }
        if (cp === $.CARRIAGE_RETURN) {
          this.skipNextNewLine = true;
          return $.LINE_FEED;
        }
        this.skipNextNewLine = false;
        if (unicode.isSurrogate(cp)) {
          cp = this._processSurrogate(cp);
        }
        const isCommonValidRange =
          (cp > 31 && cp < 127) || cp === $.LINE_FEED || cp === $.CARRIAGE_RETURN || (cp > 159 && cp < 64976);
        if (!isCommonValidRange) {
          this._checkForProblematicCharacters(cp);
        }
        return cp;
      }
      _checkForProblematicCharacters(cp) {
        if (unicode.isControlCodePoint(cp)) {
          this._err(ERR.controlCharacterInInputStream);
        } else if (unicode.isUndefinedCodePoint(cp)) {
          this._err(ERR.noncharacterInInputStream);
        }
      }
      retreat() {
        if (this.pos === this.lastGapPos) {
          this.lastGapPos = this.gapStack.pop();
          this.pos--;
        }
        this.pos--;
      }
    };
    module.exports = Preprocessor;
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_preprocessor());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
