/* esm.sh - esbuild bundle(@emotion/utils@0.11.3) es2022 development */
// esm-build-b6de7b2a2274f57c0da42e20226d5d83a63b3b71-5b9412c9/node_modules/@emotion/utils/dist/utils.esm.js
var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + ' ';
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  var className = cache.key + '-' + serialized.name;
  if (
    (isStringTag === false || (isBrowser === false && cache.compat !== void 0)) &&
    cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
  if (cache.inserted[serialized.name] === void 0) {
    var stylesForSSR = '';
    var current = serialized;
    do {
      var maybeStyles = cache.insert('.' + className, current, cache.sheet, true);
      if (!isBrowser && maybeStyles !== void 0) {
        stylesForSSR += maybeStyles;
      }
      current = current.next;
    } while (current !== void 0);
    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};
export { getRegisteredStyles, insertStyles };
