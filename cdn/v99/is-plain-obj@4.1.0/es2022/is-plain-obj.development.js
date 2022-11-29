/* esm.sh - esbuild bundle(is-plain-obj@4.1.0) es2022 development */
// esm-build-5721c435091c5b67bf1508f42ea6a81963af9a0c-47e0e63a/node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (
    (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) &&
    !(Symbol.toStringTag in value) &&
    !(Symbol.iterator in value)
  );
}
export { isPlainObject as default };