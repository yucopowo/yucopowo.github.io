/* esm.sh - esbuild bundle(space-separated-tokens@2.0.2) es2022 development */
// esm-build-6dd80f899b3d546f08b66cd13a92610e715d2dd0-4d595e47/node_modules/space-separated-tokens/index.js
function parse(value) {
  const input = String(value || '').trim();
  return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
  return values.join(' ').trim();
}
export { parse, stringify };
