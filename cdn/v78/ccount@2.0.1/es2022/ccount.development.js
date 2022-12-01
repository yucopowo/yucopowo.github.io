/* esm.sh - esbuild bundle(ccount@2.0.1) es2022 development */
// esm-build-50e05419d68ec8fff6cbf3e9827a6c663fb8549d-08beef46/node_modules/ccount/index.js
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
