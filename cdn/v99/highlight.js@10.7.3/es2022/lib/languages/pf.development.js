/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/pf) es2022 development */
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

// esm-build-31e621274c58e3d357b97457547bce87c1535858-78cd3544/node_modules/highlight.js/lib/languages/pf.js
var require_pf = __commonJS({
  'esm-build-31e621274c58e3d357b97457547bce87c1535858-78cd3544/node_modules/highlight.js/lib/languages/pf.js'(
    exports,
    module
  ) {
    function pf(hljs) {
      const MACRO = {
        className: 'variable',
        begin: /\$[\w\d#@][\w\d_]*/
      };
      const TABLE = {
        className: 'variable',
        begin: /<(?!\/)/,
        end: />/
      };
      return {
        name: 'Packet Filter config',
        aliases: ['pf.conf'],
        keywords: {
          $pattern: /[a-z0-9_<>-]+/,
          built_in: 'block match pass load anchor|5 antispoof|10 set table',
          keyword:
            'in out log quick on rdomain inet inet6 proto from port os to route allow-opts divert-packet divert-reply divert-to flags group icmp-type icmp6-type label once probability recieved-on rtable prio queue tos tag tagged user keep fragment for os drop af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin source-hash static-port dup-to reply-to route-to parent bandwidth default min max qlimit block-policy debug fingerprints hostid limit loginterface optimization reassemble ruleset-optimization basic none profile skip state-defaults state-policy timeout const counters persist no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy source-track global rule max-src-nodes max-src-states max-src-conn max-src-conn-rate overload flush scrub|5 max-mss min-ttl no-df|10 random-id',
          literal: 'all any no-route self urpf-failed egress|5 unknown'
        },
        contains: [hljs.HASH_COMMENT_MODE, hljs.NUMBER_MODE, hljs.QUOTE_STRING_MODE, MACRO, TABLE]
      };
    }
    module.exports = pf;
  }
});

// esm-build-31e621274c58e3d357b97457547bce87c1535858-78cd3544/mod.js
var __module = __toESM(require_pf());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
