/* esm.sh - esbuild bundle(unist-util-find-all-after@4.0.0) es2022 development */
// esm-build-e43ee571529439279356dc7d34b03819832e13bc-eeb8446a/node_modules/unist-util-find-all-after/index.js
import { convert } from '/cdn/v99/unist-util-is@5.1.1/es2022/unist-util-is.development.js';
var findAllAfter = function(parent, index, test) {
  var is = convert(test);
  var results = [];
  if (!parent || !parent.type || !parent.children) {
    throw new Error('Expected parent node');
  }
  if (typeof index === 'number') {
    if (index < 0 || index === Number.POSITIVE_INFINITY) {
      throw new Error('Expected positive finite number as index');
    }
  } else {
    index = parent.children.indexOf(index);
    if (index < 0) {
      throw new Error('Expected child node or index');
    }
  }
  while (++index < parent.children.length) {
    if (is(parent.children[index], index, parent)) {
      results.push(parent.children[index]);
    }
  }
  return results;
};
export { findAllAfter };
