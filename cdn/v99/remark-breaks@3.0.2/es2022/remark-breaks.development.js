/* esm.sh - esbuild bundle(remark-breaks@3.0.2) es2022 development */
// esm-build-1a5319f1f02b415420466c33eaf3a92556e9b31f-5fb1964a/node_modules/remark-breaks/index.js
import { visit } from '/cdn/v99/unist-util-visit@4.1.1/es2022/unist-util-visit.development.js';
var find = /[\t ]*(?:\r?\n|\r)/g;
function remarkBreaks() {
  return tree => {
    visit(tree, 'text', (node, index, parent) => {
      const result = [];
      let start = 0;
      find.lastIndex = 0;
      let match = find.exec(node.value);
      while (match) {
        const position = match.index;
        if (start !== position) {
          result.push({
            type: 'text',
            value: node.value.slice(start, position)
          });
        }
        result.push({
          type: 'break'
        });
        start = position + match[0].length;
        match = find.exec(node.value);
      }
      if (result.length > 0 && parent && typeof index === 'number') {
        if (start < node.value.length) {
          result.push({
            type: 'text',
            value: node.value.slice(start)
          });
        }
        parent.children.splice(index, 1, ...result);
        return index + result.length;
      }
    });
  };
}
export { remarkBreaks as default };
