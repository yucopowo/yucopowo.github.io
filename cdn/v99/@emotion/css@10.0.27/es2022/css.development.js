/* esm.sh - esbuild bundle(@emotion/css@10.0.27) es2022 development */
// esm-build-da1448aee7d460cf3fa95983bc0583dd651f9939-687577ed/node_modules/@emotion/css/dist/css.esm.js
import { serializeStyles } from '/cdn/v99/@emotion/serialize@0.11.16/es2022/serialize.development.js';
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var css_esm_default = css;
export { css_esm_default as default };
