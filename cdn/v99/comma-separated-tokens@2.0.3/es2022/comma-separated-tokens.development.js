/* esm.sh - esbuild bundle(comma-separated-tokens@2.0.3) es2022 development */
// esm-build-94ba2fee81124e548d1948f7e9da734a83862bd5-71dfb583/node_modules/comma-separated-tokens/index.js
function parse(value) {
  const tokens = [];
  const input = String(value || '');
  let index = input.indexOf(',');
  let start = 0;
  let end = false;
  while (!end) {
    if (index === -1) {
      index = input.length;
      end = true;
    }
    const token = input.slice(start, index).trim();
    if (token || !end) {
      tokens.push(token);
    }
    start = index + 1;
    index = input.indexOf(',', start);
  }
  return tokens;
}
function stringify(values, options) {
  const settings = options || {};
  const input = values[values.length - 1] === '' ? [...values, ''] : values;
  return input.join((settings.padRight ? ' ' : '') + ',' + (settings.padLeft === false ? '' : ' ')).trim();
}
export { parse, stringify };
