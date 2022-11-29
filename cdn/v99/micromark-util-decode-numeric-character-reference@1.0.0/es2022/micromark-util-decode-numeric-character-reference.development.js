/* esm.sh - esbuild bundle(micromark-util-decode-numeric-character-reference@1.0.0) es2022 development */
// esm-build-5c9095703cd00292dbec15d2e89e4b8b1a96e992-b8ec779f/node_modules/micromark-util-decode-numeric-character-reference/dev/index.js
import { codes } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/codes.development.js';
import { values } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/values.development.js';
function decodeNumericCharacterReference(value, base) {
  const code = Number.parseInt(value, base);
  if (
    code < codes.ht ||
    code === codes.vt ||
    (code > codes.cr && code < codes.space) ||
    (code > codes.tilde && code < 160) ||
    (code > 55295 && code < 57344) ||
    (code > 64975 && code < 65008) ||
    (code & 65535) === 65535 ||
    (code & 65535) === 65534 ||
    code > 1114111
  ) {
    return values.replacementCharacter;
  }
  return String.fromCharCode(code);
}
export { decodeNumericCharacterReference };
