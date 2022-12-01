/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/django) es2022 development */
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

// esm-build-b543b47da4e2e2117a39f96bd5c6addb5bb52c5a-fb3c400a/node_modules/highlight.js/lib/languages/django.js
var require_django = __commonJS({
  'esm-build-b543b47da4e2e2117a39f96bd5c6addb5bb52c5a-fb3c400a/node_modules/highlight.js/lib/languages/django.js'(
    exports,
    module
  ) {
    function django(hljs) {
      const FILTER = {
        begin: /\|[A-Za-z]+:?/,
        keywords: {
          name:
            'truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone'
        },
        contains: [hljs.QUOTE_STRING_MODE, hljs.APOS_STRING_MODE]
      };
      return {
        name: 'Django',
        aliases: ['jinja'],
        case_insensitive: true,
        subLanguage: 'xml',
        contains: [
          hljs.COMMENT(/\{%\s*comment\s*%\}/, /\{%\s*endcomment\s*%\}/),
          hljs.COMMENT(/\{#/, /#\}/),
          {
            className: 'template-tag',
            begin: /\{%/,
            end: /%\}/,
            contains: [
              {
                className: 'name',
                begin: /\w+/,
                keywords: {
                  name:
                    'comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim'
                },
                starts: {
                  endsWithParent: true,
                  keywords: 'in by as',
                  contains: [FILTER],
                  relevance: 0
                }
              }
            ]
          },
          {
            className: 'template-variable',
            begin: /\{\{/,
            end: /\}\}/,
            contains: [FILTER]
          }
        ]
      };
    }
    module.exports = django;
  }
});

// esm-build-b543b47da4e2e2117a39f96bd5c6addb5bb52c5a-fb3c400a/mod.js
var __module = __toESM(require_django());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
