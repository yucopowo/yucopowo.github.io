/* esm.sh - esbuild bundle(ccount@2.0.1) es2022 development */
// esm-build-1e2fd7a0598cac33e18967ff187c2a5955ee6e76-d32eb415/node_modules/ccount/index.js
function ccount(value, character) {
  const source = String(value);
  if (typeof character !== 'string') {
    throw new TypeError('Expected character');
  }
  let count = 0;
  let index = source.indexOf(character);
  while (index !== -1) {
    count++;
    index = source.indexOf(character, index + character.length);
  }
  return count;
}
export { ccount };