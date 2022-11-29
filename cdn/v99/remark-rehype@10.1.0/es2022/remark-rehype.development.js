/* esm.sh - esbuild bundle(remark-rehype@10.1.0) es2022 development */
// esm-build-e7dc97b6ba2a520fb84a1b688bc84bf1e943db87-64e01836/node_modules/remark-rehype/index.js
import { defaultHandlers, all, one } from '/cdn/v99/mdast-util-to-hast@12.2.4/es2022/mdast-util-to-hast.development.js';

// esm-build-e7dc97b6ba2a520fb84a1b688bc84bf1e943db87-64e01836/node_modules/remark-rehype/lib/index.js
import { toHast } from '/cdn/v99/mdast-util-to-hast@12.2.4/es2022/mdast-util-to-hast.development.js';
var remarkRehype = function(destination, options) {
  return destination && 'run' in destination ? bridge(destination, options) : mutate(destination || options);
};
var lib_default = remarkRehype;
function bridge(destination, options) {
  return (node, file, next) => {
    destination.run(toHast(node, options), file, error => {
      next(error);
    });
  };
}
function mutate(options) {
  return node => toHast(node, options);
}
export { all, lib_default as default, defaultHandlers, one };
