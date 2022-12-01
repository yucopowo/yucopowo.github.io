/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/tcl) es2022 development */
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

// esm-build-f002b07d93c699dbe69d945fb8209a6cb96753b1-0ac7b65d/node_modules/highlight.js/lib/languages/tcl.js
var require_tcl = __commonJS({
  'esm-build-f002b07d93c699dbe69d945fb8209a6cb96753b1-0ac7b65d/node_modules/highlight.js/lib/languages/tcl.js'(
    exports,
    module
  ) {
    function source(re) {
      if (!re) return null;
      if (typeof re === 'string') return re;
      return re.source;
    }
    function optional(re) {
      return concat('(', re, ')?');
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function tcl(hljs) {
      const TCL_IDENT = /[a-zA-Z_][a-zA-Z0-9_]*/;
      const NUMBER = {
        className: 'number',
        variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]
      };
      return {
        name: 'Tcl',
        aliases: ['tk'],
        keywords:
          'after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while',
        contains: [
          hljs.COMMENT(';[ \\t]*#', '$'),
          hljs.COMMENT('^[ \\t]*#', '$'),
          {
            beginKeywords: 'proc',
            end: '[\\{]',
            excludeEnd: true,
            contains: [
              {
                className: 'title',
                begin: '[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
                end: '[ \\t\\n\\r]',
                endsWithParent: true,
                excludeEnd: true
              }
            ]
          },
          {
            className: 'variable',
            variants: [
              {
                begin: concat(/\$/, optional(/::/), TCL_IDENT, '(::', TCL_IDENT, ')*')
              },
              {
                begin: '\\$\\{(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*',
                end: '\\}',
                contains: [NUMBER]
              }
            ]
          },
          {
            className: 'string',
            contains: [hljs.BACKSLASH_ESCAPE],
            variants: [
              hljs.inherit(hljs.QUOTE_STRING_MODE, {
                illegal: null
              })
            ]
          },
          NUMBER
        ]
      };
    }
    module.exports = tcl;
  }
});

// esm-build-f002b07d93c699dbe69d945fb8209a6cb96753b1-0ac7b65d/mod.js
var __module = __toESM(require_tcl());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
