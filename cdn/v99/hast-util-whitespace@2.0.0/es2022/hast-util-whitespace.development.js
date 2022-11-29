/* esm.sh - esbuild bundle(hast-util-whitespace@2.0.0) es2022 development */
// esm-build-3c7846676b0c91161c4df23373128e0f2fd6bc00-317eb153/node_modules/hast-util-whitespace/index.js
function whitespace(thing) {
  var value = thing && typeof thing === 'object' && thing.type === 'text' ? thing.value || '' : thing;
  return typeof value === 'string' && value.replace(/[ \t\n\f\r]/g, '') === '';
}
export { whitespace };