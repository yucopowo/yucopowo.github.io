/* esm.sh - esbuild bundle(unist-util-remove-position@4.0.1) es2022 development */
// esm-build-8c7c5339ea2e7383c9f28fe553667415f6db6625-0c396a15/node_modules/unist-util-remove-position/index.js
import { visit } from '/cdn/v99/unist-util-visit@4.1.1/es2022/unist-util-visit.development.js';
var removePosition = function(node, force) {
  visit(node, remove);
  return node;
  function remove(node2) {
    if (force) {
      delete node2.position;
    } else {
      node2.position = void 0;
    }
  }
};
export { removePosition };
