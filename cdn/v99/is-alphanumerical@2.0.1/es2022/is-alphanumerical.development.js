/* esm.sh - esbuild bundle(is-alphanumerical@2.0.1) es2022 development */
// esm-build-2d7bdced91926f138504f1b54e7894ecf3c7e6a6-122a6bc9/node_modules/is-alphanumerical/index.js
import { isAlphabetical } from '/cdn/v99/is-alphabetical@2.0.1/es2022/is-alphabetical.development.js';
import { isDecimal } from '/cdn/v99/is-decimal@2.0.1/es2022/is-decimal.development.js';
function isAlphanumerical(character) {
  return isAlphabetical(character) || isDecimal(character);
}
export { isAlphanumerical };
