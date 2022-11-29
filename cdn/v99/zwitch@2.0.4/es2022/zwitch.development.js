/* esm.sh - esbuild bundle(zwitch@2.0.4) es2022 development */
// esm-build-dd9aaf1c7ed0530bbdfcf9c3bf91b39c505202b2-aa3de7e7/node_modules/zwitch/index.js
var own = {}.hasOwnProperty;
function zwitch(key, options) {
  const settings = options || {};
  function one(value, ...parameters) {
    let fn = one.invalid;
    const handlers = one.handlers;
    if (value && own.call(value, key)) {
      const id = String(value[key]);
      fn = own.call(handlers, id) ? handlers[id] : one.unknown;
    }
    if (fn) {
      return fn.call(this, value, ...parameters);
    }
  }
  one.handlers = settings.handlers || {};
  one.invalid = settings.invalid;
  one.unknown = settings.unknown;
  return one;
}
export { zwitch };