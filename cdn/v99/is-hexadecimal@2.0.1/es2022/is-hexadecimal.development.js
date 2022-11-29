/* esm.sh - esbuild bundle(is-hexadecimal@2.0.1) es2022 development */
// esm-build-33a8a547b69b408079dc542cc63ec70a07f99521-8f7f75b8/node_modules/is-hexadecimal/index.js
function isHexadecimal(character) {
  const code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return (code >= 97 && code <= 102) || (code >= 65 && code <= 70) || (code >= 48 && code <= 57);
}
export { isHexadecimal };
