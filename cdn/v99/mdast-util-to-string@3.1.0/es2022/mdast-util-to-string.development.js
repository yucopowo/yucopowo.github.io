/* esm.sh - esbuild bundle(mdast-util-to-string@3.1.0) es2022 development */
// esm-build-904eff589cde4c7f60b52f9bde9044b070a27dd9-3a2a5d6e/node_modules/mdast-util-to-string/index.js
function toString(node, options) {
  var { includeImageAlt = true } = options || {};
  return one(node, includeImageAlt);
}
function one(node, includeImageAlt) {
  return (
    (node &&
      typeof node === 'object' &&
      (node.value ||
        (includeImageAlt ? node.alt : '') ||
        ('children' in node && all(node.children, includeImageAlt)) ||
        (Array.isArray(node) && all(node, includeImageAlt)))) ||
    ''
  );
}
function all(values, includeImageAlt) {
  var result = [];
  var index = -1;
  while (++index < values.length) {
    result[index] = one(values[index], includeImageAlt);
  }
  return result.join('');
}
export { toString };
