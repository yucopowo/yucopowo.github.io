/* esm.sh - esbuild bundle(rc-util@5.24.6/es/Dom/canUseDom) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-27f82ceb57fe1fd59df413e4c77a113621e4b260-a575d347/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom_exports = {};
__export(canUseDom_exports, {
  default: () => canUseDom
});
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

// esm-build-27f82ceb57fe1fd59df413e4c77a113621e4b260-a575d347/mod.js
var { default: __default, ...__rest } = canUseDom_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
