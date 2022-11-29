/* esm.sh - esbuild bundle(is-decimal@2.0.1) es2022 development */
// esm-build-d91dd469fee42f4c96694ef9b717f38bb9b92040-7e569c96/node_modules/is-decimal/index.js
function isDecimal(character) {
  const code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return code >= 48 && code <= 57;
}
export { isDecimal };