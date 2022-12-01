/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/n1ql) es2022 development */
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

// esm-build-d583d4ca5727a8f3d31a2a3ad10168487b7fedef-4b31baff/node_modules/highlight.js/lib/languages/n1ql.js
var require_n1ql = __commonJS({
  'esm-build-d583d4ca5727a8f3d31a2a3ad10168487b7fedef-4b31baff/node_modules/highlight.js/lib/languages/n1ql.js'(
    exports,
    module
  ) {
    function n1ql(hljs) {
      return {
        name: 'N1QL',
        case_insensitive: true,
        contains: [
          {
            beginKeywords:
              'build create index delete drop explain infer|10 insert merge prepare select update upsert|10',
            end: /;/,
            endsWithParent: true,
            keywords: {
              keyword:
                'all alter analyze and any array as asc begin between binary boolean break bucket build by call case cast cluster collate collection commit connect continue correlate cover create database dataset datastore declare decrement delete derived desc describe distinct do drop each element else end every except exclude execute exists explain fetch first flatten for force from function grant group gsi having if ignore ilike in include increment index infer inline inner insert intersect into is join key keys keyspace known last left let letting like limit lsm map mapping matched materialized merge minus namespace nest not number object offset on option or order outer over parse partition password path pool prepare primary private privilege procedure public raw realm reduce rename return returning revoke right role rollback satisfies schema select self semi set show some start statistics string system then to transaction trigger truncate under union unique unknown unnest unset update upsert use user using validate value valued values via view when where while with within work xor',
              literal: 'true false null missing|5',
              built_in:
                'array_agg array_append array_concat array_contains array_count array_distinct array_ifnull array_length array_max array_min array_position array_prepend array_put array_range array_remove array_repeat array_replace array_reverse array_sort array_sum avg count max min sum greatest least ifmissing ifmissingornull ifnull missingif nullif ifinf ifnan ifnanorinf naninf neginfif posinfif clock_millis clock_str date_add_millis date_add_str date_diff_millis date_diff_str date_part_millis date_part_str date_trunc_millis date_trunc_str duration_to_str millis str_to_millis millis_to_str millis_to_utc millis_to_zone_name now_millis now_str str_to_duration str_to_utc str_to_zone_name decode_json encode_json encoded_size poly_length base64 base64_encode base64_decode meta uuid abs acos asin atan atan2 ceil cos degrees e exp ln log floor pi power radians random round sign sin sqrt tan trunc object_length object_names object_pairs object_inner_pairs object_values object_inner_values object_add object_put object_remove object_unwrap regexp_contains regexp_like regexp_position regexp_replace contains initcap length lower ltrim position repeat replace rtrim split substr title trim upper isarray isatom isboolean isnumber isobject isstring type toarray toatom toboolean tonumber toobject tostring'
            },
            contains: [
              {
                className: 'string',
                begin: "'",
                end: "'",
                contains: [hljs.BACKSLASH_ESCAPE]
              },
              {
                className: 'string',
                begin: '"',
                end: '"',
                contains: [hljs.BACKSLASH_ESCAPE]
              },
              {
                className: 'symbol',
                begin: '`',
                end: '`',
                contains: [hljs.BACKSLASH_ESCAPE],
                relevance: 2
              },
              hljs.C_NUMBER_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_BLOCK_COMMENT_MODE
        ]
      };
    }
    module.exports = n1ql;
  }
});

// esm-build-d583d4ca5727a8f3d31a2a3ad10168487b7fedef-4b31baff/mod.js
var __module = __toESM(require_n1ql());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
