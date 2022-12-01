/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/sas) es2022 development */
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

// esm-build-853f859686fb1b41db9e6ef82615d1d0d3d0f360-f2d2712c/node_modules/highlight.js/lib/languages/sas.js
var require_sas = __commonJS({
  'esm-build-853f859686fb1b41db9e6ef82615d1d0d3d0f360-f2d2712c/node_modules/highlight.js/lib/languages/sas.js'(
    exports,
    module
  ) {
    function sas(hljs) {
      const SAS_KEYWORDS =
        'do if then else end until while abort array attrib by call cards cards4 catname continue datalines datalines4 delete delim delimiter display dm drop endsas error file filename footnote format goto in infile informat input keep label leave length libname link list lostcard merge missing modify options output out page put redirect remove rename replace retain return select set skip startsas stop title update waitsas where window x systask add and alter as cascade check create delete describe distinct drop foreign from group having index insert into in key like message modify msgtype not null on or order primary references reset restrict select set table unique update validate view where';
      const SAS_FUN =
        'abs|addr|airy|arcos|arsin|atan|attrc|attrn|band|betainv|blshift|bnot|bor|brshift|bxor|byte|cdf|ceil|cexist|cinv|close|cnonct|collate|compbl|compound|compress|cos|cosh|css|curobs|cv|daccdb|daccdbsl|daccsl|daccsyd|dacctab|dairy|date|datejul|datepart|datetime|day|dclose|depdb|depdbsl|depdbsl|depsl|depsl|depsyd|depsyd|deptab|deptab|dequote|dhms|dif|digamma|dim|dinfo|dnum|dopen|doptname|doptnum|dread|dropnote|dsname|erf|erfc|exist|exp|fappend|fclose|fcol|fdelete|fetch|fetchobs|fexist|fget|fileexist|filename|fileref|finfo|finv|fipname|fipnamel|fipstate|floor|fnonct|fnote|fopen|foptname|foptnum|fpoint|fpos|fput|fread|frewind|frlen|fsep|fuzz|fwrite|gaminv|gamma|getoption|getvarc|getvarn|hbound|hms|hosthelp|hour|ibessel|index|indexc|indexw|input|inputc|inputn|int|intck|intnx|intrr|irr|jbessel|juldate|kurtosis|lag|lbound|left|length|lgamma|libname|libref|log|log10|log2|logpdf|logpmf|logsdf|lowcase|max|mdy|mean|min|minute|mod|month|mopen|mort|n|netpv|nmiss|normal|note|npv|open|ordinal|pathname|pdf|peek|peekc|pmf|point|poisson|poke|probbeta|probbnml|probchi|probf|probgam|probhypr|probit|probnegb|probnorm|probt|put|putc|putn|qtr|quote|ranbin|rancau|ranexp|rangam|range|rank|rannor|ranpoi|rantbl|rantri|ranuni|repeat|resolve|reverse|rewind|right|round|saving|scan|sdf|second|sign|sin|sinh|skewness|soundex|spedis|sqrt|std|stderr|stfips|stname|stnamel|substr|sum|symget|sysget|sysmsg|sysprod|sysrc|system|tan|tanh|time|timepart|tinv|tnonct|today|translate|tranwrd|trigamma|trim|trimn|trunc|uniform|upcase|uss|var|varfmt|varinfmt|varlabel|varlen|varname|varnum|varray|varrayx|vartype|verify|vformat|vformatd|vformatdx|vformatn|vformatnx|vformatw|vformatwx|vformatx|vinarray|vinarrayx|vinformat|vinformatd|vinformatdx|vinformatn|vinformatnx|vinformatw|vinformatwx|vinformatx|vlabel|vlabelx|vlength|vlengthx|vname|vnamex|vtype|vtypex|weekday|year|yyq|zipfips|zipname|zipnamel|zipstate';
      const SAS_MACRO_FUN =
        'bquote|nrbquote|cmpres|qcmpres|compstor|datatyp|display|do|else|end|eval|global|goto|if|index|input|keydef|label|left|length|let|local|lowcase|macro|mend|nrbquote|nrquote|nrstr|put|qcmpres|qleft|qlowcase|qscan|qsubstr|qsysfunc|qtrim|quote|qupcase|scan|str|substr|superq|syscall|sysevalf|sysexec|sysfunc|sysget|syslput|sysprod|sysrc|sysrput|then|to|trim|unquote|until|upcase|verify|while|window';
      return {
        name: 'SAS',
        case_insensitive: true,
        keywords: {
          literal: 'null missing _all_ _automatic_ _character_ _infile_ _n_ _name_ _null_ _numeric_ _user_ _webout_',
          meta: SAS_KEYWORDS
        },
        contains: [
          {
            className: 'keyword',
            begin: /^\s*(proc [\w\d_]+|data|run|quit)[\s;]/
          },
          {
            className: 'variable',
            begin: /&[a-zA-Z_&][a-zA-Z0-9_]*\.?/
          },
          {
            className: 'emphasis',
            begin: /^\s*datalines|cards.*;/,
            end: /^\s*;\s*$/
          },
          {
            className: 'built_in',
            begin: '%(' + SAS_MACRO_FUN + ')'
          },
          {
            className: 'name',
            begin: /%[a-zA-Z_][a-zA-Z_0-9]*/
          },
          {
            className: 'meta',
            begin: '[^%](' + SAS_FUN + ')[(]'
          },
          {
            className: 'string',
            variants: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]
          },
          hljs.COMMENT('\\*', ';'),
          hljs.C_BLOCK_COMMENT_MODE
        ]
      };
    }
    module.exports = sas;
  }
});

// esm-build-853f859686fb1b41db9e6ef82615d1d0d3d0f360-f2d2712c/mod.js
var __module = __toESM(require_sas());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
