/* esm.sh - esbuild bundle(unist-util-size@3.0.0) es2022 development */
// esm-build-4402f836e46f9a96c11286044423defcca18b86c-334fad96/node_modules/unist-util-size/index.js
import { convert } from '/cdn/v99/unist-util-is@5.1.1/es2022/unist-util-is.development.js';
var empty;
function size(node, test) {
  var is = convert(test);
  return fastSize(node);
  function fastSize(node2) {
    var children = (node2 && node2.children) || empty;
    var count = 0;
    var index = -1;
    if (children && children.length > 0) {
      while (++index < children.length) {
        if (is(children[index], index, node2)) count++;
        count += fastSize(children[index]);
      }
    }
    return count;
  }
}
export { size };
