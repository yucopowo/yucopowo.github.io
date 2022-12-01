/* esm.sh - esbuild bundle(micromark-util-decode-string@1.0.2) es2022 development */
// esm-build-067530f08d0c4c8e49270b3aedb76b7303bf1f52-c44320ff/node_modules/micromark-util-decode-string/dev/index.js
import { decodeNamedCharacterReference } from '/cdn/v78/decode-named-character-reference@1.0.1/es2022/decode-named-character-reference.development.js';
import { decodeNumericCharacterReference } from '/cdn/v78/micromark-util-decode-numeric-character-reference@1.0.0/es2022/micromark-util-decode-numeric-character-reference.development.js';
import { codes } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { constants } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/constants.development.js';
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1) {
    return $1;
  }
  const head = $2.charCodeAt(0);
  if (head === codes.numberSign) {
    const head2 = $2.charCodeAt(1);
    const hex = head2 === codes.lowercaseX || head2 === codes.uppercaseX;
    return decodeNumericCharacterReference(
      $2.slice(hex ? 2 : 1),
      hex ? constants.numericBaseHexadecimal : constants.numericBaseDecimal
    );
  }
  return decodeNamedCharacterReference($2) || $0;
}
export { decodeString };
