/* esm.sh - esbuild bundle(micromark-util-encode@1.0.1) es2022 development */
// esm-build-bbf3f1937020e51bdde3b6748893b2021fefa757-5e7763f4/node_modules/micromark-util-encode/index.js
var characterReferences = {
  '"': 'quot',
  '&': 'amp',
  '<': 'lt',
  '>': 'gt'
};
function encode(value) {
  return value.replace(/["&<>]/g, replace);
  function replace(value2) {
    return '&' + characterReferences[value2] + ';';
  }
}
export { encode };
