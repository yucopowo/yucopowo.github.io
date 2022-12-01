/* esm.sh - esbuild bundle(micromark-util-normalize-identifier@1.0.0) es2022 development */
// esm-build-a115c4f28fdde28e7f14aca25ba9fe53e6e3f0f0-3b5fcaa4/node_modules/micromark-util-normalize-identifier/dev/index.js
import { values } from '/cdn/v78/micromark-util-symbol@1.0.1/es2022/values.development.js';
function normalizeIdentifier(value) {
  return value
    .replace(/[\t\n\r ]+/g, values.space)
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
export { normalizeIdentifier };
