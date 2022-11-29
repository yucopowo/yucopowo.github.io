/* esm.sh - esbuild bundle(micromark-util-encode@1.0.1) es2022 development */
// esm-build-2ee15c71a5b37c68f53b20066bf56e534e706071-06898cd4/node_modules/micromark-util-encode/index.js
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
