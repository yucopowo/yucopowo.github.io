/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/gams) es2022 development */
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

// esm-build-48e197ae3d79176335976abdaf03fd2b6503e129-a5dd7518/node_modules/highlight.js/lib/languages/gams.js
var require_gams = __commonJS({
  'esm-build-48e197ae3d79176335976abdaf03fd2b6503e129-a5dd7518/node_modules/highlight.js/lib/languages/gams.js'(
    exports,
    module
  ) {
    function source(re) {
      if (!re) return null;
      if (typeof re === 'string') return re;
      return re.source;
    }
    function anyNumberOfTimes(re) {
      return concat('(', re, ')*');
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function gams(hljs) {
      const KEYWORDS = {
        keyword:
          'abort acronym acronyms alias all and assign binary card diag display else eq file files for free ge gt if integer le loop lt maximizing minimizing model models ne negative no not option options or ord positive prod put putpage puttl repeat sameas semicont semiint smax smin solve sos1 sos2 sum system table then until using while xor yes',
        literal: 'eps inf na',
        built_in:
          'abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power randBinomial randLinear randTriangle round rPower sigmoid sign signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion handleCollect handleDelete handleStatus handleSubmit heapFree heapLimit heapSize jobHandle jobKill jobStatus jobTerminate licenseLevel licenseStatus maxExecError sleep timeClose timeComp timeElapsed timeExec timeStart'
      };
      const PARAMS = {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true
      };
      const SYMBOLS = {
        className: 'symbol',
        variants: [
          {
            begin: /=[lgenxc]=/
          },
          {
            begin: /\$/
          }
        ]
      };
      const QSTR = {
        className: 'comment',
        variants: [
          {
            begin: "'",
            end: "'"
          },
          {
            begin: '"',
            end: '"'
          }
        ],
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      const ASSIGNMENT = {
        begin: '/',
        end: '/',
        keywords: KEYWORDS,
        contains: [
          QSTR,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          hljs.C_NUMBER_MODE
        ]
      };
      const COMMENT_WORD = /[a-z0-9&#*=?@\\><:,()$[\]_.{}!+%^-]+/;
      const DESCTEXT = {
        begin: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
        excludeBegin: true,
        end: '$',
        endsWithParent: true,
        contains: [
          QSTR,
          ASSIGNMENT,
          {
            className: 'comment',
            begin: concat(COMMENT_WORD, anyNumberOfTimes(concat(/[ ]+/, COMMENT_WORD))),
            relevance: 0
          }
        ]
      };
      return {
        name: 'GAMS',
        aliases: ['gms'],
        case_insensitive: true,
        keywords: KEYWORDS,
        contains: [
          hljs.COMMENT(/^\$ontext/, /^\$offtext/),
          {
            className: 'meta',
            begin: '^\\$[a-z0-9]+',
            end: '$',
            returnBegin: true,
            contains: [
              {
                className: 'meta-keyword',
                begin: '^\\$[a-z0-9]+'
              }
            ]
          },
          hljs.COMMENT('^\\*', '$'),
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          {
            beginKeywords: 'set sets parameter parameters variable variables scalar scalars equation equations',
            end: ';',
            contains: [
              hljs.COMMENT('^\\*', '$'),
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.APOS_STRING_MODE,
              ASSIGNMENT,
              DESCTEXT
            ]
          },
          {
            beginKeywords: 'table',
            end: ';',
            returnBegin: true,
            contains: [
              {
                beginKeywords: 'table',
                end: '$',
                contains: [DESCTEXT]
              },
              hljs.COMMENT('^\\*', '$'),
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.APOS_STRING_MODE,
              hljs.C_NUMBER_MODE
            ]
          },
          {
            className: 'function',
            begin: /^[a-z][a-z0-9_,\-+' ()$]+\.{2}/,
            returnBegin: true,
            contains: [
              {
                className: 'title',
                begin: /^[a-z0-9_]+/
              },
              PARAMS,
              SYMBOLS
            ]
          },
          hljs.C_NUMBER_MODE,
          SYMBOLS
        ]
      };
    }
    module.exports = gams;
  }
});

// esm-build-48e197ae3d79176335976abdaf03fd2b6503e129-a5dd7518/mod.js
var __module = __toESM(require_gams());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
