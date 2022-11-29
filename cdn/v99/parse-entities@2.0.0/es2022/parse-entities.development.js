/* esm.sh - esbuild bundle(parse-entities@2.0.0) es2022 development */
import __is_decimal$ from '/cdn/v99/is-decimal@1.0.4/es2022/is-decimal.development.js';
import __character_reference_invalid$ from '/cdn/v99/character-reference-invalid@1.1.4/es2022/character-reference-invalid.development.js';
import __character_entities_legacy$ from '/cdn/v99/character-entities-legacy@1.1.4/es2022/character-entities-legacy.development.js';
import __is_alphanumerical$ from '/cdn/v99/is-alphanumerical@1.0.4/es2022/is-alphanumerical.development.js';
import __is_hexadecimal$ from '/cdn/v99/is-hexadecimal@1.0.4/es2022/is-hexadecimal.development.js';
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

// esm-build-9593a19207067789bfa86401f45291e734c463d5-81a554f2/node_modules/parse-entities/decode-entity.browser.js
var require_decode_entity_browser = __commonJS({
  'esm-build-9593a19207067789bfa86401f45291e734c463d5-81a554f2/node_modules/parse-entities/decode-entity.browser.js'(
    exports,
    module
  ) {
    'use strict';

    var el;
    var semicolon = 59;
    module.exports = decodeEntity;
    function decodeEntity(characters) {
      var entity = '&' + characters + ';';
      var char;
      el = el || document.createElement('i');
      el.innerHTML = entity;
      char = el.textContent;
      if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
        return false;
      }
      return char === entity ? false : char;
    }
  }
});

// esm-build-9593a19207067789bfa86401f45291e734c463d5-81a554f2/node_modules/parse-entities/index.js
var require_parse_entities = __commonJS({
  'esm-build-9593a19207067789bfa86401f45291e734c463d5-81a554f2/node_modules/parse-entities/index.js'(exports, module) {
    'use strict';

    var legacy = __character_entities_legacy$;
    var invalid = __character_reference_invalid$;
    var decimal = __is_decimal$;
    var hexadecimal = __is_hexadecimal$;
    var alphanumerical = __is_alphanumerical$;
    var decodeEntity = require_decode_entity_browser();
    module.exports = parseEntities;
    var own = {}.hasOwnProperty;
    var fromCharCode = String.fromCharCode;
    var noop = Function.prototype;
    var defaults = {
      warning: null,
      reference: null,
      text: null,
      warningContext: null,
      referenceContext: null,
      textContext: null,
      position: {},
      additional: null,
      attribute: false,
      nonTerminated: true
    };
    var tab = 9;
    var lineFeed = 10;
    var formFeed = 12;
    var space = 32;
    var ampersand = 38;
    var semicolon = 59;
    var lessThan = 60;
    var equalsTo = 61;
    var numberSign = 35;
    var uppercaseX = 88;
    var lowercaseX = 120;
    var replacementCharacter = 65533;
    var name = 'named';
    var hexa = 'hexadecimal';
    var deci = 'decimal';
    var bases = {};
    bases[hexa] = 16;
    bases[deci] = 10;
    var tests = {};
    tests[name] = alphanumerical;
    tests[deci] = decimal;
    tests[hexa] = hexadecimal;
    var namedNotTerminated = 1;
    var numericNotTerminated = 2;
    var namedEmpty = 3;
    var numericEmpty = 4;
    var namedUnknown = 5;
    var numericDisallowed = 6;
    var numericProhibited = 7;
    var messages = {};
    messages[namedNotTerminated] = 'Named character references must be terminated by a semicolon';
    messages[numericNotTerminated] = 'Numeric character references must be terminated by a semicolon';
    messages[namedEmpty] = 'Named character references cannot be empty';
    messages[numericEmpty] = 'Numeric character references cannot be empty';
    messages[namedUnknown] = 'Named character references must be known';
    messages[numericDisallowed] = 'Numeric character references cannot be disallowed';
    messages[numericProhibited] = 'Numeric character references cannot be outside the permissible Unicode range';
    function parseEntities(value, options) {
      var settings = {};
      var option;
      var key;
      if (!options) {
        options = {};
      }
      for (key in defaults) {
        option = options[key];
        settings[key] = option === null || option === void 0 ? defaults[key] : option;
      }
      if (settings.position.indent || settings.position.start) {
        settings.indent = settings.position.indent || [];
        settings.position = settings.position.start;
      }
      return parse(value, settings);
    }
    function parse(value, settings) {
      var additional = settings.additional;
      var nonTerminated = settings.nonTerminated;
      var handleText = settings.text;
      var handleReference = settings.reference;
      var handleWarning = settings.warning;
      var textContext = settings.textContext;
      var referenceContext = settings.referenceContext;
      var warningContext = settings.warningContext;
      var pos = settings.position;
      var indent = settings.indent || [];
      var length = value.length;
      var index = 0;
      var lines = -1;
      var column = pos.column || 1;
      var line = pos.line || 1;
      var queue = '';
      var result = [];
      var entityCharacters;
      var namedEntity;
      var terminated;
      var characters;
      var character;
      var reference;
      var following;
      var warning;
      var reason;
      var output;
      var entity;
      var begin;
      var start;
      var type;
      var test;
      var prev;
      var next;
      var diff;
      var end;
      if (typeof additional === 'string') {
        additional = additional.charCodeAt(0);
      }
      prev = now();
      warning = handleWarning ? parseError : noop;
      index--;
      length++;
      while (++index < length) {
        if (character === lineFeed) {
          column = indent[lines] || 1;
        }
        character = value.charCodeAt(index);
        if (character === ampersand) {
          following = value.charCodeAt(index + 1);
          if (
            following === tab ||
            following === lineFeed ||
            following === formFeed ||
            following === space ||
            following === ampersand ||
            following === lessThan ||
            following !== following ||
            (additional && following === additional)
          ) {
            queue += fromCharCode(character);
            column++;
            continue;
          }
          start = index + 1;
          begin = start;
          end = start;
          if (following === numberSign) {
            end = ++begin;
            following = value.charCodeAt(end);
            if (following === uppercaseX || following === lowercaseX) {
              type = hexa;
              end = ++begin;
            } else {
              type = deci;
            }
          } else {
            type = name;
          }
          entityCharacters = '';
          entity = '';
          characters = '';
          test = tests[type];
          end--;
          while (++end < length) {
            following = value.charCodeAt(end);
            if (!test(following)) {
              break;
            }
            characters += fromCharCode(following);
            if (type === name && own.call(legacy, characters)) {
              entityCharacters = characters;
              entity = legacy[characters];
            }
          }
          terminated = value.charCodeAt(end) === semicolon;
          if (terminated) {
            end++;
            namedEntity = type === name ? decodeEntity(characters) : false;
            if (namedEntity) {
              entityCharacters = characters;
              entity = namedEntity;
            }
          }
          diff = 1 + end - start;
          if (!terminated && !nonTerminated) {
          } else if (!characters) {
            if (type !== name) {
              warning(numericEmpty, diff);
            }
          } else if (type === name) {
            if (terminated && !entity) {
              warning(namedUnknown, 1);
            } else {
              if (entityCharacters !== characters) {
                end = begin + entityCharacters.length;
                diff = 1 + end - begin;
                terminated = false;
              }
              if (!terminated) {
                reason = entityCharacters ? namedNotTerminated : namedEmpty;
                if (settings.attribute) {
                  following = value.charCodeAt(end);
                  if (following === equalsTo) {
                    warning(reason, diff);
                    entity = null;
                  } else if (alphanumerical(following)) {
                    entity = null;
                  } else {
                    warning(reason, diff);
                  }
                } else {
                  warning(reason, diff);
                }
              }
            }
            reference = entity;
          } else {
            if (!terminated) {
              warning(numericNotTerminated, diff);
            }
            reference = parseInt(characters, bases[type]);
            if (prohibited(reference)) {
              warning(numericProhibited, diff);
              reference = fromCharCode(replacementCharacter);
            } else if (reference in invalid) {
              warning(numericDisallowed, diff);
              reference = invalid[reference];
            } else {
              output = '';
              if (disallowed(reference)) {
                warning(numericDisallowed, diff);
              }
              if (reference > 65535) {
                reference -= 65536;
                output += fromCharCode((reference >>> (10 & 1023)) | 55296);
                reference = 56320 | (reference & 1023);
              }
              reference = output + fromCharCode(reference);
            }
          }
          if (reference) {
            flush();
            prev = now();
            index = end - 1;
            column += end - start + 1;
            result.push(reference);
            next = now();
            next.offset++;
            if (handleReference) {
              handleReference.call(
                referenceContext,
                reference,
                {
                  start: prev,
                  end: next
                },
                value.slice(start - 1, end)
              );
            }
            prev = next;
          } else {
            characters = value.slice(start - 1, end);
            queue += characters;
            column += characters.length;
            index = end - 1;
          }
        } else {
          if (character === 10) {
            line++;
            lines++;
            column = 0;
          }
          if (character === character) {
            queue += fromCharCode(character);
            column++;
          } else {
            flush();
          }
        }
      }
      return result.join('');
      function now() {
        return {
          line,
          column,
          offset: index + (pos.offset || 0)
        };
      }
      function parseError(code, offset) {
        var position = now();
        position.column += offset;
        position.offset += offset;
        handleWarning.call(warningContext, messages[code], position, code);
      }
      function flush() {
        if (queue) {
          result.push(queue);
          if (handleText) {
            handleText.call(textContext, queue, {
              start: prev,
              end: now()
            });
          }
          queue = '';
        }
      }
    }
    function prohibited(code) {
      return (code >= 55296 && code <= 57343) || code > 1114111;
    }
    function disallowed(code) {
      return (
        (code >= 1 && code <= 8) ||
        code === 11 ||
        (code >= 13 && code <= 31) ||
        (code >= 127 && code <= 159) ||
        (code >= 64976 && code <= 65007) ||
        (code & 65535) === 65535 ||
        (code & 65535) === 65534
      );
    }
  }
});

// esm-build-9593a19207067789bfa86401f45291e734c463d5-81a554f2/mod.js
var __module = __toESM(require_parse_entities());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
