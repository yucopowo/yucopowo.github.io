/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.3.0/lib/util/association.js) es2022 development */
// esm-build-52e88fbbf531e2e271372c2b82b92971860c66c1-32baf2fc/node_modules/mdast-util-to-markdown/lib/util/association.js
import { decodeString } from '/cdn/v78/micromark-util-decode-string@1.0.2/es2022/micromark-util-decode-string.development.js';
function association(node) {
  if (node.label || !node.identifier) {
    return node.label || '';
  }
  return decodeString(node.identifier);
}
export { association };
