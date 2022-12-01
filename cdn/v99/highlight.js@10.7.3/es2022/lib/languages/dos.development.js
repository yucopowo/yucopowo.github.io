/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/dos) es2022 development */
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

// esm-build-07ccd4486f0df9d05ba2538ba9e3d70eb9751e5c-17a1bf6c/node_modules/highlight.js/lib/languages/dos.js
var require_dos = __commonJS({
  'esm-build-07ccd4486f0df9d05ba2538ba9e3d70eb9751e5c-17a1bf6c/node_modules/highlight.js/lib/languages/dos.js'(
    exports,
    module
  ) {
    function dos(hljs) {
      const COMMENT = hljs.COMMENT(/^\s*@?rem\b/, /$/, {
        relevance: 10
      });
      const LABEL = {
        className: 'symbol',
        begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
        relevance: 0
      };
      return {
        name: 'Batch file (DOS)',
        aliases: ['bat', 'cmd'],
        case_insensitive: true,
        illegal: /\/\*/,
        keywords: {
          keyword: 'if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq',
          built_in:
            'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shift sort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del'
        },
        contains: [
          {
            className: 'variable',
            begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
          },
          {
            className: 'function',
            begin: LABEL.begin,
            end: 'goto:eof',
            contains: [
              hljs.inherit(hljs.TITLE_MODE, {
                begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'
              }),
              COMMENT
            ]
          },
          {
            className: 'number',
            begin: '\\b\\d+',
            relevance: 0
          },
          COMMENT
        ]
      };
    }
    module.exports = dos;
  }
});

// esm-build-07ccd4486f0df9d05ba2538ba9e3d70eb9751e5c-17a1bf6c/mod.js
var __module = __toESM(require_dos());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
