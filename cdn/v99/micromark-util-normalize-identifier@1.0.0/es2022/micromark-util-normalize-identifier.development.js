/* esm.sh - esbuild bundle(micromark-util-normalize-identifier@1.0.0) es2022 development */
// esm-build-2132769dc718fe93cfad80b44f6fe3916bd658d6-44acae31/node_modules/micromark-util-normalize-identifier/dev/index.js
import { values } from '/cdn/v99/micromark-util-symbol@1.0.1/es2022/values.development.js';
function normalizeIdentifier(value) {
  return value
    .replace(/[\t\n\r ]+/g, values.space)
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
export { normalizeIdentifier };
