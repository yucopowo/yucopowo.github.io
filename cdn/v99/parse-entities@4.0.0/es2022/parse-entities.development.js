/* esm.sh - esbuild bundle(parse-entities@4.0.0) es2022 development */
// esm-build-58b3fd9ee249265780bf3ad6f708225855189eee-2de6c737/node_modules/parse-entities/lib/index.js
import { characterEntitiesLegacy } from '/cdn/v99/character-entities-legacy@3.0.0/es2022/character-entities-legacy.development.js';
import { characterReferenceInvalid } from '/cdn/v99/character-reference-invalid@2.0.1/es2022/character-reference-invalid.development.js';
import { isDecimal } from '/cdn/v99/is-decimal@2.0.1/es2022/is-decimal.development.js';
import { isHexadecimal } from '/cdn/v99/is-hexadecimal@2.0.1/es2022/is-hexadecimal.development.js';
import { isAlphanumerical } from '/cdn/v99/is-alphanumerical@2.0.1/es2022/is-alphanumerical.development.js';
import { decodeNamedCharacterReference } from '/cdn/v99/decode-named-character-reference@1.0.2/es2022/decode-named-character-reference.development.js';
var fromCharCode = String.fromCharCode;
var messages = [
  '',
  'Named character references must be terminated by a semicolon',
  'Numeric character references must be terminated by a semicolon',
  'Named character references cannot be empty',
  'Numeric character references cannot be empty',
  'Named character references must be known',
  'Numeric character references cannot be disallowed',
  'Numeric character references cannot be outside the permissible Unicode range'
];
function parseEntities(value, options = {}) {
  const additional = typeof options.additional === 'string' ? options.additional.charCodeAt(0) : options.additional;
  const result = [];
  let index = 0;
  let lines = -1;
  let queue = '';
  let point;
  let indent;
  if (options.position) {
    if ('start' in options.position || 'indent' in options.position) {
      indent = options.position.indent;
      point = options.position.start;
    } else {
      point = options.position;
    }
  }
  let line = (point ? point.line : 0) || 1;
  let column = (point ? point.column : 0) || 1;
  let previous = now();
  let character;
  index--;
  while (++index <= value.length) {
    if (character === 10) {
      column = (indent ? indent[lines] : 0) || 1;
    }
    character = value.charCodeAt(index);
    if (character === 38) {
      const following = value.charCodeAt(index + 1);
      if (
        following === 9 ||
        following === 10 ||
        following === 12 ||
        following === 32 ||
        following === 38 ||
        following === 60 ||
        Number.isNaN(following) ||
        (additional && following === additional)
      ) {
        queue += fromCharCode(character);
        column++;
        continue;
      }
      const start = index + 1;
      let begin = start;
      let end = start;
      let type;
      if (following === 35) {
        end = ++begin;
        const following2 = value.charCodeAt(end);
        if (following2 === 88 || following2 === 120) {
          type = 'hexadecimal';
          end = ++begin;
        } else {
          type = 'decimal';
        }
      } else {
        type = 'named';
      }
      let characterReferenceCharacters = '';
      let characterReference = '';
      let characters = '';
      const test = type === 'named' ? isAlphanumerical : type === 'decimal' ? isDecimal : isHexadecimal;
      end--;
      while (++end <= value.length) {
        const following2 = value.charCodeAt(end);
        if (!test(following2)) {
          break;
        }
        characters += fromCharCode(following2);
        if (type === 'named' && characterEntitiesLegacy.includes(characters)) {
          characterReferenceCharacters = characters;
          characterReference = decodeNamedCharacterReference(characters);
        }
      }
      let terminated = value.charCodeAt(end) === 59;
      if (terminated) {
        end++;
        const namedReference = type === 'named' ? decodeNamedCharacterReference(characters) : false;
        if (namedReference) {
          characterReferenceCharacters = characters;
          characterReference = namedReference;
        }
      }
      let diff = 1 + end - start;
      let reference = '';
      if (!terminated && options.nonTerminated === false) {
      } else if (!characters) {
        if (type !== 'named') {
          warning(4, diff);
        }
      } else if (type === 'named') {
        if (terminated && !characterReference) {
          warning(5, 1);
        } else {
          if (characterReferenceCharacters !== characters) {
            end = begin + characterReferenceCharacters.length;
            diff = 1 + end - begin;
            terminated = false;
          }
          if (!terminated) {
            const reason = characterReferenceCharacters ? 1 : 3;
            if (options.attribute) {
              const following2 = value.charCodeAt(end);
              if (following2 === 61) {
                warning(reason, diff);
                characterReference = '';
              } else if (isAlphanumerical(following2)) {
                characterReference = '';
              } else {
                warning(reason, diff);
              }
            } else {
              warning(reason, diff);
            }
          }
        }
        reference = characterReference;
      } else {
        if (!terminated) {
          warning(2, diff);
        }
        let referenceCode = Number.parseInt(characters, type === 'hexadecimal' ? 16 : 10);
        if (prohibited(referenceCode)) {
          warning(7, diff);
          reference = fromCharCode(65533);
        } else if (referenceCode in characterReferenceInvalid) {
          warning(6, diff);
          reference = characterReferenceInvalid[referenceCode];
        } else {
          let output = '';
          if (disallowed(referenceCode)) {
            warning(6, diff);
          }
          if (referenceCode > 65535) {
            referenceCode -= 65536;
            output += fromCharCode((referenceCode >>> (10 & 1023)) | 55296);
            referenceCode = 56320 | (referenceCode & 1023);
          }
          reference = output + fromCharCode(referenceCode);
        }
      }
      if (reference) {
        flush();
        previous = now();
        index = end - 1;
        column += end - start + 1;
        result.push(reference);
        const next = now();
        next.offset++;
        if (options.reference) {
          options.reference.call(
            options.referenceContext,
            reference,
            {
              start: previous,
              end: next
            },
            value.slice(start - 1, end)
          );
        }
        previous = next;
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
      if (Number.isNaN(character)) {
        flush();
      } else {
        queue += fromCharCode(character);
        column++;
      }
    }
  }
  return result.join('');
  function now() {
    return {
      line,
      column,
      offset: index + ((point ? point.offset : 0) || 0)
    };
  }
  function warning(code, offset) {
    let position;
    if (options.warning) {
      position = now();
      position.column += offset;
      position.offset += offset;
      options.warning.call(options.warningContext, messages[code], position, code);
    }
  }
  function flush() {
    if (queue) {
      result.push(queue);
      if (options.text) {
        options.text.call(options.textContext, queue, {
          start: previous,
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
export { parseEntities };