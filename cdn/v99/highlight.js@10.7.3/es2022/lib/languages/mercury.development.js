/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/mercury) es2022 development */
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

// esm-build-2fb20eb0341aa59f435eefceae99001cafe6a63a-e1c3b818/node_modules/highlight.js/lib/languages/mercury.js
var require_mercury = __commonJS({
  'esm-build-2fb20eb0341aa59f435eefceae99001cafe6a63a-e1c3b818/node_modules/highlight.js/lib/languages/mercury.js'(
    exports,
    module
  ) {
    function mercury(hljs) {
      const KEYWORDS = {
        keyword:
          'module use_module import_module include_module end_module initialise mutable initialize finalize finalise interface implementation pred mode func type inst solver any_pred any_func is semidet det nondet multi erroneous failure cc_nondet cc_multi typeclass instance where pragma promise external trace atomic or_else require_complete_switch require_det require_semidet require_multi require_nondet require_cc_multi require_cc_nondet require_erroneous require_failure',
        meta:
          'inline no_inline type_spec source_file fact_table obsolete memo loop_check minimal_model terminates does_not_terminate check_termination promise_equivalent_clauses foreign_proc foreign_decl foreign_code foreign_type foreign_import_module foreign_export_enum foreign_export foreign_enum may_call_mercury will_not_call_mercury thread_safe not_thread_safe maybe_thread_safe promise_pure promise_semipure tabled_for_io local untrailed trailed attach_to_io_state can_pass_as_mercury_type stable will_not_throw_exception may_modify_trail will_not_modify_trail may_duplicate may_not_duplicate affects_liveness does_not_affect_liveness doesnt_affect_liveness no_sharing unknown_sharing sharing',
        built_in:
          'some all not if then else true fail false try catch catch_any semidet_true semidet_false semidet_fail impure_true impure semipure'
      };
      const COMMENT = hljs.COMMENT('%', '$');
      const NUMCODE = {
        className: 'number',
        begin: "0'.\\|0[box][0-9a-fA-F]*"
      };
      const ATOM = hljs.inherit(hljs.APOS_STRING_MODE, {
        relevance: 0
      });
      const STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        relevance: 0
      });
      const STRING_FMT = {
        className: 'subst',
        begin: '\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]',
        relevance: 0
      };
      STRING.contains = STRING.contains.slice();
      STRING.contains.push(STRING_FMT);
      const IMPLICATION = {
        className: 'built_in',
        variants: [
          {
            begin: '<=>'
          },
          {
            begin: '<=',
            relevance: 0
          },
          {
            begin: '=>',
            relevance: 0
          },
          {
            begin: '/\\\\'
          },
          {
            begin: '\\\\/'
          }
        ]
      };
      const HEAD_BODY_CONJUNCTION = {
        className: 'built_in',
        variants: [
          {
            begin: ':-\\|-->'
          },
          {
            begin: '=',
            relevance: 0
          }
        ]
      };
      return {
        name: 'Mercury',
        aliases: ['m', 'moo'],
        keywords: KEYWORDS,
        contains: [
          IMPLICATION,
          HEAD_BODY_CONJUNCTION,
          COMMENT,
          hljs.C_BLOCK_COMMENT_MODE,
          NUMCODE,
          hljs.NUMBER_MODE,
          ATOM,
          STRING,
          {
            begin: /:-/
          },
          {
            begin: /\.$/
          }
        ]
      };
    }
    module.exports = mercury;
  }
});

// esm-build-2fb20eb0341aa59f435eefceae99001cafe6a63a-e1c3b818/mod.js
var __module = __toESM(require_mercury());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
