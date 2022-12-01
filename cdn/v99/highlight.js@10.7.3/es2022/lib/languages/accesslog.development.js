/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/accesslog) es2022 development */
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

// esm-build-263191428037df70b1d34047c7103e8c53924a90-0807f130/node_modules/highlight.js/lib/languages/accesslog.js
var require_accesslog = __commonJS({
  'esm-build-263191428037df70b1d34047c7103e8c53924a90-0807f130/node_modules/highlight.js/lib/languages/accesslog.js'(
    exports,
    module
  ) {
    function source(re) {
      if (!re) return null;
      if (typeof re === 'string') return re;
      return re.source;
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function either(...args) {
      const joined = '(' + args.map(x => source(x)).join('|') + ')';
      return joined;
    }
    function accesslog(_hljs) {
      const HTTP_VERBS = ['GET', 'POST', 'HEAD', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'PATCH', 'TRACE'];
      return {
        name: 'Apache Access Log',
        contains: [
          {
            className: 'number',
            begin: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,
            relevance: 5
          },
          {
            className: 'number',
            begin: /\b\d+\b/,
            relevance: 0
          },
          {
            className: 'string',
            begin: concat(/"/, either(...HTTP_VERBS)),
            end: /"/,
            keywords: HTTP_VERBS,
            illegal: /\n/,
            relevance: 5,
            contains: [
              {
                begin: /HTTP\/[12]\.\d'/,
                relevance: 5
              }
            ]
          },
          {
            className: 'string',
            begin: /\[\d[^\]\n]{8,}\]/,
            illegal: /\n/,
            relevance: 1
          },
          {
            className: 'string',
            begin: /\[/,
            end: /\]/,
            illegal: /\n/,
            relevance: 0
          },
          {
            className: 'string',
            begin: /"Mozilla\/\d\.\d \(/,
            end: /"/,
            illegal: /\n/,
            relevance: 3
          },
          {
            className: 'string',
            begin: /"/,
            end: /"/,
            illegal: /\n/,
            relevance: 0
          }
        ]
      };
    }
    module.exports = accesslog;
  }
});

// esm-build-263191428037df70b1d34047c7103e8c53924a90-0807f130/mod.js
var __module = __toESM(require_accesslog());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
