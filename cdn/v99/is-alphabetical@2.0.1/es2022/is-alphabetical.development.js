/* esm.sh - esbuild bundle(is-alphabetical@2.0.1) es2022 development */
// esm-build-dcb2369a77af9dcb46470d2ac5f0ee4dfe338e7c-a1e07eee/node_modules/is-alphabetical/index.js
function isAlphabetical(character) {
  const code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return (code >= 97 && code <= 122) || (code >= 65 && code <= 90);
}
export { isAlphabetical };
