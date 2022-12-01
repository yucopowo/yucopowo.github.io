/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/vala) es2022 development */
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

// esm-build-e035c2394d34561f242ba55b99cd322d198c06a6-af610726/node_modules/highlight.js/lib/languages/vala.js
var require_vala = __commonJS({
  'esm-build-e035c2394d34561f242ba55b99cd322d198c06a6-af610726/node_modules/highlight.js/lib/languages/vala.js'(
    exports,
    module
  ) {
    function vala(hljs) {
      return {
        name: 'Vala',
        keywords: {
          keyword:
            'char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override virtual delegate if while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var',
          built_in: 'DBus GLib CCode Gee Object Gtk Posix',
          literal: 'false true null'
        },
        contains: [
          {
            className: 'class',
            beginKeywords: 'class interface namespace',
            end: /\{/,
            excludeEnd: true,
            illegal: '[^,:\\n\\s\\.]',
            contains: [hljs.UNDERSCORE_TITLE_MODE]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: 'string',
            begin: '"""',
            end: '"""',
            relevance: 5
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.C_NUMBER_MODE,
          {
            className: 'meta',
            begin: '^#',
            end: '$',
            relevance: 2
          }
        ]
      };
    }
    module.exports = vala;
  }
});

// esm-build-e035c2394d34561f242ba55b99cd322d198c06a6-af610726/mod.js
var __module = __toESM(require_vala());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
