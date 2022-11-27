/* esm.sh - esbuild bundle(nano-css@5.3.5/addon/vcssom/cssToTree) es2022 development */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {}
          }).exports,
          mod
        ),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', {
          value: mod,
          enumerable: true
        })
      : target,
    mod
  )
);

// esm-build-bb7aa185b942c01ea777fb3c63ff7602363ae72d-c546100f/node_modules/nano-css/addon/vcssom/cssToTree.js
var require_cssToTree = __commonJS({
  'esm-build-bb7aa185b942c01ea777fb3c63ff7602363ae72d-c546100f/node_modules/nano-css/addon/vcssom/cssToTree.js'(
    exports
  ) {
    function cssToTree2(tree, css, selector, prelude) {
      var declarations = {};
      var hasDeclarations = false;
      var key, value;
      for (key in css) {
        value = css[key];
        if (typeof value !== 'object') {
          hasDeclarations = true;
          declarations[key] = value;
        }
      }
      if (hasDeclarations) {
        if (!tree[prelude]) tree[prelude] = {};
        tree[prelude][selector] = declarations;
      }
      for (key in css) {
        value = css[key];
        if (typeof value === 'object') {
          if (key[0] === '@') {
            cssToTree2(tree, value, selector, key);
          } else {
            var hasCurrentSymbol = key.indexOf('&') > -1;
            var selectorParts = selector.split(',');
            if (hasCurrentSymbol) {
              for (var i = 0; i < selectorParts.length; i++) {
                selectorParts[i] = key.replace(/&/g, selectorParts[i]);
              }
            } else {
              for (var i = 0; i < selectorParts.length; i++) {
                selectorParts[i] = selectorParts[i] + ' ' + key;
              }
            }
            cssToTree2(tree, value, selectorParts.join(','), prelude);
          }
        }
      }
    }
    exports.cssToTree = cssToTree2;
  }
});

// esm-build-bb7aa185b942c01ea777fb3c63ff7602363ae72d-c546100f/mod.js
var __module = __toESM(require_cssToTree());
var { cssToTree } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { cssToTree, mod_default as default };
