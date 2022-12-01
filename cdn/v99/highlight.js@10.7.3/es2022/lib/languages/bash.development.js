/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/bash) es2022 development */
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

// esm-build-855b5e2b0e9360f2cc88212bd1529fa5b84647cc-c399ed89/node_modules/highlight.js/lib/languages/bash.js
var require_bash = __commonJS({
  'esm-build-855b5e2b0e9360f2cc88212bd1529fa5b84647cc-c399ed89/node_modules/highlight.js/lib/languages/bash.js'(
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
    function bash(hljs) {
      const VAR = {};
      const BRACED_VAR = {
        begin: /\$\{/,
        end: /\}/,
        contains: [
          'self',
          {
            begin: /:-/,
            contains: [VAR]
          }
        ]
      };
      Object.assign(VAR, {
        className: 'variable',
        variants: [
          {
            begin: concat(/\$[\w\d#@][\w\d_]*/, `(?![\\w\\d])(?![$])`)
          },
          BRACED_VAR
        ]
      });
      const SUBST = {
        className: 'subst',
        begin: /\$\(/,
        end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      const HERE_DOC = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
          contains: [
            hljs.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              className: 'string'
            })
          ]
        }
      };
      const QUOTE_STRING = {
        className: 'string',
        begin: /"/,
        end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE, VAR, SUBST]
      };
      SUBST.contains.push(QUOTE_STRING);
      const ESCAPED_QUOTE = {
        className: '',
        begin: /\\"/
      };
      const APOS_STRING = {
        className: 'string',
        begin: /'/,
        end: /'/
      };
      const ARITHMETIC = {
        begin: /\$\(\(/,
        end: /\)\)/,
        contains: [
          {
            begin: /\d+#[0-9a-f]+/,
            className: 'number'
          },
          hljs.NUMBER_MODE,
          VAR
        ]
      };
      const SH_LIKE_SHELLS = ['fish', 'bash', 'zsh', 'sh', 'csh', 'ksh', 'tcsh', 'dash', 'scsh'];
      const KNOWN_SHEBANG = hljs.SHEBANG({
        binary: `(${SH_LIKE_SHELLS.join('|')})`,
        relevance: 10
      });
      const FUNCTION = {
        className: 'function',
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: /\w[\w\d_]*/
          })
        ],
        relevance: 0
      };
      return {
        name: 'Bash',
        aliases: ['sh', 'zsh'],
        keywords: {
          $pattern: /\b[a-z._-]+\b/,
          keyword: 'if then else elif fi for while in do done case esac function',
          literal: 'true false',
          built_in:
            'break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp'
        },
        contains: [
          KNOWN_SHEBANG,
          hljs.SHEBANG(),
          FUNCTION,
          ARITHMETIC,
          hljs.HASH_COMMENT_MODE,
          HERE_DOC,
          QUOTE_STRING,
          ESCAPED_QUOTE,
          APOS_STRING,
          VAR
        ]
      };
    }
    module.exports = bash;
  }
});

// esm-build-855b5e2b0e9360f2cc88212bd1529fa5b84647cc-c399ed89/mod.js
var __module = __toESM(require_bash());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
