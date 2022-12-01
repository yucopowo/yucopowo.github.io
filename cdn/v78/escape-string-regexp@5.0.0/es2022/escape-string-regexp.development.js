/* esm.sh - esbuild bundle(escape-string-regexp@5.0.0) es2022 development */
// esm-build-d56aa7cc610006d26dcd51fc32c21a86f1085801-38042e83/node_modules/escape-string-regexp/index.js
function escapeStringRegexp(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  }
  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
export { escapeStringRegexp as default };
