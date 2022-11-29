/* esm.sh - esbuild bundle(parse5@6.0.1/lib/extensions/location-info/tokenizer-mixin) es2022 development */
import __parse5_lib_utils_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/utils/mixin.development.js';
import __parse5_lib_extensions_position_tracking_preprocessor_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/extensions/position-tracking/preprocessor-mixin.development.js';
import __parse5_lib_tokenizer$ from '/cdn/v99/parse5@6.0.1/es2022/lib/tokenizer.development.js';
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/extensions/location-info/tokenizer-mixin.js
var require_tokenizer_mixin = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/extensions/location-info/tokenizer-mixin.js'(
    exports,
    module
  ) {
    'use strict';

    var Mixin = __parse5_lib_utils_mixin$;
    var Tokenizer = __parse5_lib_tokenizer$;
    var PositionTrackingPreprocessorMixin = __parse5_lib_extensions_position_tracking_preprocessor_mixin$;
    var LocationInfoTokenizerMixin = class extends Mixin {
      constructor(tokenizer) {
        super(tokenizer);
        this.tokenizer = tokenizer;
        this.posTracker = Mixin.install(tokenizer.preprocessor, PositionTrackingPreprocessorMixin);
        this.currentAttrLocation = null;
        this.ctLoc = null;
      }
      _getCurrentLocation() {
        return {
          startLine: this.posTracker.line,
          startCol: this.posTracker.col,
          startOffset: this.posTracker.offset,
          endLine: -1,
          endCol: -1,
          endOffset: -1
        };
      }
      _attachCurrentAttrLocationInfo() {
        this.currentAttrLocation.endLine = this.posTracker.line;
        this.currentAttrLocation.endCol = this.posTracker.col;
        this.currentAttrLocation.endOffset = this.posTracker.offset;
        const currentToken = this.tokenizer.currentToken;
        const currentAttr = this.tokenizer.currentAttr;
        if (!currentToken.location.attrs) {
          currentToken.location.attrs = /* @__PURE__ */ Object.create(null);
        }
        currentToken.location.attrs[currentAttr.name] = this.currentAttrLocation;
      }
      _getOverriddenMethods(mxn, orig) {
        const methods = {
          _createStartTagToken() {
            orig._createStartTagToken.call(this);
            this.currentToken.location = mxn.ctLoc;
          },
          _createEndTagToken() {
            orig._createEndTagToken.call(this);
            this.currentToken.location = mxn.ctLoc;
          },
          _createCommentToken() {
            orig._createCommentToken.call(this);
            this.currentToken.location = mxn.ctLoc;
          },
          _createDoctypeToken(initialName) {
            orig._createDoctypeToken.call(this, initialName);
            this.currentToken.location = mxn.ctLoc;
          },
          _createCharacterToken(type, ch) {
            orig._createCharacterToken.call(this, type, ch);
            this.currentCharacterToken.location = mxn.ctLoc;
          },
          _createEOFToken() {
            orig._createEOFToken.call(this);
            this.currentToken.location = mxn._getCurrentLocation();
          },
          _createAttr(attrNameFirstCh) {
            orig._createAttr.call(this, attrNameFirstCh);
            mxn.currentAttrLocation = mxn._getCurrentLocation();
          },
          _leaveAttrName(toState) {
            orig._leaveAttrName.call(this, toState);
            mxn._attachCurrentAttrLocationInfo();
          },
          _leaveAttrValue(toState) {
            orig._leaveAttrValue.call(this, toState);
            mxn._attachCurrentAttrLocationInfo();
          },
          _emitCurrentToken() {
            const ctLoc = this.currentToken.location;
            if (this.currentCharacterToken) {
              this.currentCharacterToken.location.endLine = ctLoc.startLine;
              this.currentCharacterToken.location.endCol = ctLoc.startCol;
              this.currentCharacterToken.location.endOffset = ctLoc.startOffset;
            }
            if (this.currentToken.type === Tokenizer.EOF_TOKEN) {
              ctLoc.endLine = ctLoc.startLine;
              ctLoc.endCol = ctLoc.startCol;
              ctLoc.endOffset = ctLoc.startOffset;
            } else {
              ctLoc.endLine = mxn.posTracker.line;
              ctLoc.endCol = mxn.posTracker.col + 1;
              ctLoc.endOffset = mxn.posTracker.offset + 1;
            }
            orig._emitCurrentToken.call(this);
          },
          _emitCurrentCharacterToken() {
            const ctLoc = this.currentCharacterToken && this.currentCharacterToken.location;
            if (ctLoc && ctLoc.endOffset === -1) {
              ctLoc.endLine = mxn.posTracker.line;
              ctLoc.endCol = mxn.posTracker.col;
              ctLoc.endOffset = mxn.posTracker.offset;
            }
            orig._emitCurrentCharacterToken.call(this);
          }
        };
        Object.keys(Tokenizer.MODE).forEach(modeName => {
          const state = Tokenizer.MODE[modeName];
          methods[state] = function(cp) {
            mxn.ctLoc = mxn._getCurrentLocation();
            orig[state].call(this, cp);
          };
        });
        return methods;
      }
    };
    module.exports = LocationInfoTokenizerMixin;
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_tokenizer_mixin());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
