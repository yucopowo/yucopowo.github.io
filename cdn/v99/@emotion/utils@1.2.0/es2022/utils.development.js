/* esm.sh - esbuild bundle(@emotion/utils@1.2.0) es2022 development */
// esm-build-51846b3fd033e9944f4d2216b69d7f9a189689b9-7022e800/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ';');
    } else {
      rawClassName += className + ' ';
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag) {
  var className = cache.key + '-' + serialized.name;
  if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + '-' + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      var maybeStyles = cache.insert(serialized === current ? '.' + className : '', current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
export { getRegisteredStyles, insertStyles, registerStyles };
