/* esm.sh - esbuild bundle(parse5@6.0.1/lib/common/unicode) es2022 development */
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/common/unicode.js
var require_unicode = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/common/unicode.js'(exports) {
    'use strict';

    var UNDEFINED_CODE_POINTS = [
      65534,
      65535,
      131070,
      131071,
      196606,
      196607,
      262142,
      262143,
      327678,
      327679,
      393214,
      393215,
      458750,
      458751,
      524286,
      524287,
      589822,
      589823,
      655358,
      655359,
      720894,
      720895,
      786430,
      786431,
      851966,
      851967,
      917502,
      917503,
      983038,
      983039,
      1048574,
      1048575,
      1114110,
      1114111
    ];
    exports.REPLACEMENT_CHARACTER = '\uFFFD';
    exports.CODE_POINTS = {
      EOF: -1,
      NULL: 0,
      TABULATION: 9,
      CARRIAGE_RETURN: 13,
      LINE_FEED: 10,
      FORM_FEED: 12,
      SPACE: 32,
      EXCLAMATION_MARK: 33,
      QUOTATION_MARK: 34,
      NUMBER_SIGN: 35,
      AMPERSAND: 38,
      APOSTROPHE: 39,
      HYPHEN_MINUS: 45,
      SOLIDUS: 47,
      DIGIT_0: 48,
      DIGIT_9: 57,
      SEMICOLON: 59,
      LESS_THAN_SIGN: 60,
      EQUALS_SIGN: 61,
      GREATER_THAN_SIGN: 62,
      QUESTION_MARK: 63,
      LATIN_CAPITAL_A: 65,
      LATIN_CAPITAL_F: 70,
      LATIN_CAPITAL_X: 88,
      LATIN_CAPITAL_Z: 90,
      RIGHT_SQUARE_BRACKET: 93,
      GRAVE_ACCENT: 96,
      LATIN_SMALL_A: 97,
      LATIN_SMALL_F: 102,
      LATIN_SMALL_X: 120,
      LATIN_SMALL_Z: 122,
      REPLACEMENT_CHARACTER: 65533
    };
    exports.CODE_POINT_SEQUENCES = {
      DASH_DASH_STRING: [45, 45],
      DOCTYPE_STRING: [68, 79, 67, 84, 89, 80, 69],
      CDATA_START_STRING: [91, 67, 68, 65, 84, 65, 91],
      SCRIPT_STRING: [115, 99, 114, 105, 112, 116],
      PUBLIC_STRING: [80, 85, 66, 76, 73, 67],
      SYSTEM_STRING: [83, 89, 83, 84, 69, 77]
    };
    exports.isSurrogate = function(cp) {
      return cp >= 55296 && cp <= 57343;
    };
    exports.isSurrogatePair = function(cp) {
      return cp >= 56320 && cp <= 57343;
    };
    exports.getSurrogatePairCodePoint = function(cp1, cp2) {
      return (cp1 - 55296) * 1024 + 9216 + cp2;
    };
    exports.isControlCodePoint = function(cp) {
      return (
        (cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31) ||
        (cp >= 127 && cp <= 159)
      );
    };
    exports.isUndefinedCodePoint = function(cp) {
      return (cp >= 64976 && cp <= 65007) || UNDEFINED_CODE_POINTS.indexOf(cp) > -1;
    };
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_unicode());
var {
  REPLACEMENT_CHARACTER,
  CODE_POINTS,
  CODE_POINT_SEQUENCES,
  isSurrogate,
  isSurrogatePair,
  getSurrogatePairCodePoint,
  isControlCodePoint,
  isUndefinedCodePoint
} = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export {
  CODE_POINTS,
  CODE_POINT_SEQUENCES,
  REPLACEMENT_CHARACTER,
  mod_default as default,
  getSurrogatePairCodePoint,
  isControlCodePoint,
  isSurrogate,
  isSurrogatePair,
  isUndefinedCodePoint
};
