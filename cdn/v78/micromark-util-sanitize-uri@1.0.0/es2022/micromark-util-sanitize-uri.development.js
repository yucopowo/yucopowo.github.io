/* esm.sh - esbuild bundle(micromark-util-sanitize-uri@1.0.0) es2022 development */
// esm-build-6cfa33848530e845025995344f6fadf1d2e17ced-70a05e61/node_modules/micromark-util-sanitize-uri/dev/index.js
import { asciiAlphanumeric } from '/cdn/v78/micromark-util-character@1.1.0/es2022/micromark-util-character.development.js';
import { encode } from '/cdn/v78/micromark-util-encode@1.0.1/es2022/micromark-util-encode.development.js';
import { codes } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { values } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/values.development.js';
function sanitizeUri(url, protocol) {
  const value = encode(normalizeUri(url || ''));
  if (!protocol) {
    return value;
  }
  const colon = value.indexOf(':');
  const questionMark = value.indexOf('?');
  const numberSign = value.indexOf('#');
  const slash = value.indexOf('/');
  if (
    colon < 0 ||
    (slash > -1 && colon > slash) ||
    (questionMark > -1 && colon > questionMark) ||
    (numberSign > -1 && colon > numberSign) ||
    protocol.test(value.slice(0, colon))
  ) {
    return value;
  }
  return '';
}
function normalizeUri(value) {
  const result = [];
  let index = -1;
  let start = 0;
  let skip = 0;
  while (++index < value.length) {
    const code = value.charCodeAt(index);
    let replace = '';
    if (
      code === codes.percentSign &&
      asciiAlphanumeric(value.charCodeAt(index + 1)) &&
      asciiAlphanumeric(value.charCodeAt(index + 2))
    ) {
      skip = 2;
    } else if (code < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
        replace = String.fromCharCode(code);
      }
    } else if (code > 55295 && code < 57344) {
      const next = value.charCodeAt(index + 1);
      if (code < 56320 && next > 56319 && next < 57344) {
        replace = String.fromCharCode(code, next);
        skip = 1;
      } else {
        replace = values.replacementCharacter;
      }
    } else {
      replace = String.fromCharCode(code);
    }
    if (replace) {
      result.push(value.slice(start, index), encodeURIComponent(replace));
      start = index + skip + 1;
      replace = '';
    }
    if (skip) {
      index += skip;
      skip = 0;
    }
  }
  return result.join('') + value.slice(start);
}
export { sanitizeUri };