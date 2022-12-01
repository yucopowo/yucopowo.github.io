/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/matlab) es2022 development */
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

// esm-build-7fea8558329581d914c812b0326012e720b92265-c416690e/node_modules/highlight.js/lib/languages/matlab.js
var require_matlab = __commonJS({
  'esm-build-7fea8558329581d914c812b0326012e720b92265-c416690e/node_modules/highlight.js/lib/languages/matlab.js'(
    exports,
    module
  ) {
    function matlab(hljs) {
      var TRANSPOSE_RE = "('|\\.')+";
      var TRANSPOSE = {
        relevance: 0,
        contains: [
          {
            begin: TRANSPOSE_RE
          }
        ]
      };
      return {
        name: 'Matlab',
        keywords: {
          keyword:
            'arguments break case catch classdef continue else elseif end enumeration events for function global if methods otherwise parfor persistent properties return spmd switch try while',
          built_in:
            'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i|0 inf nan isnan isinf isfinite j|0 why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun legend intersect ismember procrustes hold num2cell '
        },
        illegal: '(//|"|#|/\\*|\\s+/\\w+)',
        contains: [
          {
            className: 'function',
            beginKeywords: 'function',
            end: '$',
            contains: [
              hljs.UNDERSCORE_TITLE_MODE,
              {
                className: 'params',
                variants: [
                  {
                    begin: '\\(',
                    end: '\\)'
                  },
                  {
                    begin: '\\[',
                    end: '\\]'
                  }
                ]
              }
            ]
          },
          {
            className: 'built_in',
            begin: /true|false/,
            relevance: 0,
            starts: TRANSPOSE
          },
          {
            begin: '[a-zA-Z][a-zA-Z_0-9]*' + TRANSPOSE_RE,
            relevance: 0
          },
          {
            className: 'number',
            begin: hljs.C_NUMBER_RE,
            relevance: 0,
            starts: TRANSPOSE
          },
          {
            className: 'string',
            begin: "'",
            end: "'",
            contains: [
              hljs.BACKSLASH_ESCAPE,
              {
                begin: "''"
              }
            ]
          },
          {
            begin: /\]|\}|\)/,
            relevance: 0,
            starts: TRANSPOSE
          },
          {
            className: 'string',
            begin: '"',
            end: '"',
            contains: [
              hljs.BACKSLASH_ESCAPE,
              {
                begin: '""'
              }
            ],
            starts: TRANSPOSE
          },
          hljs.COMMENT('^\\s*%\\{\\s*$', '^\\s*%\\}\\s*$'),
          hljs.COMMENT('%', '$')
        ]
      };
    }
    module.exports = matlab;
  }
});

// esm-build-7fea8558329581d914c812b0326012e720b92265-c416690e/mod.js
var __module = __toESM(require_matlab());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
