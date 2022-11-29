/* esm.sh - esbuild bundle(mdast-util-to-markdown@1.3.0/lib/util/indent-lines.js) es2022 development */
// esm-build-2cde2fff52528ff45577d6097f5343378fd71afc-606aa72d/node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
var eol = /\r?\n|\r/g;
function indentLines(value, map) {
  const result = [];
  let start = 0;
  let line = 0;
  let match;
  while ((match = eol.exec(value))) {
    one(value.slice(start, match.index));
    result.push(match[0]);
    start = match.index + match[0].length;
    line++;
  }
  one(value.slice(start));
  return result.join('');
  function one(value2) {
    result.push(map(value2, line, !value2));
  }
}
export { indentLines };
