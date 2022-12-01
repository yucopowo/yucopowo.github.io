/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/mizar) es2022 development */
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

// esm-build-5d69be98f4c002a9ca9428d9513fb12c3f4c9249-0d1588ec/node_modules/highlight.js/lib/languages/mizar.js
var require_mizar = __commonJS({
  'esm-build-5d69be98f4c002a9ca9428d9513fb12c3f4c9249-0d1588ec/node_modules/highlight.js/lib/languages/mizar.js'(
    exports,
    module
  ) {
    function mizar(hljs) {
      return {
        name: 'Mizar',
        keywords:
          'environ vocabularies notations constructors definitions registrations theorems schemes requirements begin end definition registration cluster existence pred func defpred deffunc theorem proof let take assume then thus hence ex for st holds consider reconsider such that and in provided of as from be being by means equals implies iff redefine define now not or attr is mode suppose per cases set thesis contradiction scheme reserve struct correctness compatibility coherence symmetry assymetry reflexivity irreflexivity connectedness uniqueness commutativity idempotence involutiveness projectivity',
        contains: [hljs.COMMENT('::', '$')]
      };
    }
    module.exports = mizar;
  }
});

// esm-build-5d69be98f4c002a9ca9428d9513fb12c3f4c9249-0d1588ec/mod.js
var __module = __toESM(require_mizar());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
