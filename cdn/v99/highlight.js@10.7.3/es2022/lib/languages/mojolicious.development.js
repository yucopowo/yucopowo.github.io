/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/mojolicious) es2022 development */
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

// esm-build-6f41dcffae595b46da9f1abdfe13f1d89cda3059-3cfdeacc/node_modules/highlight.js/lib/languages/mojolicious.js
var require_mojolicious = __commonJS({
  'esm-build-6f41dcffae595b46da9f1abdfe13f1d89cda3059-3cfdeacc/node_modules/highlight.js/lib/languages/mojolicious.js'(
    exports,
    module
  ) {
    function mojolicious(hljs) {
      return {
        name: 'Mojolicious',
        subLanguage: 'xml',
        contains: [
          {
            className: 'meta',
            begin: '^__(END|DATA)__$'
          },
          {
            begin: '^\\s*%{1,2}={0,2}',
            end: '$',
            subLanguage: 'perl'
          },
          {
            begin: '<%{1,2}={0,2}',
            end: '={0,1}%>',
            subLanguage: 'perl',
            excludeBegin: true,
            excludeEnd: true
          }
        ]
      };
    }
    module.exports = mojolicious;
  }
});

// esm-build-6f41dcffae595b46da9f1abdfe13f1d89cda3059-3cfdeacc/mod.js
var __module = __toESM(require_mojolicious());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
