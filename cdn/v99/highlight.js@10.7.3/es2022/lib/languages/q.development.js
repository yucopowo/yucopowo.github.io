/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/q) es2022 development */
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

// esm-build-9a6c64fde6cfb0da2f5d7fc394e5f745232df953-a847da45/node_modules/highlight.js/lib/languages/q.js
var require_q = __commonJS({
  'esm-build-9a6c64fde6cfb0da2f5d7fc394e5f745232df953-a847da45/node_modules/highlight.js/lib/languages/q.js'(
    exports,
    module
  ) {
    function q(hljs) {
      const KEYWORDS = {
        $pattern: /(`?)[A-Za-z0-9_]+\b/,
        keyword: 'do while select delete by update from',
        literal: '0b 1b',
        built_in:
          'neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum',
        type:
          '`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid'
      };
      return {
        name: 'Q',
        aliases: ['k', 'kdb'],
        keywords: KEYWORDS,
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE]
      };
    }
    module.exports = q;
  }
});

// esm-build-9a6c64fde6cfb0da2f5d7fc394e5f745232df953-a847da45/mod.js
var __module = __toESM(require_q());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
