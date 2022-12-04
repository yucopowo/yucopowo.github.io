/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/htmlbars) es2022 development */
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

// esm-build-0c8fbc7c3cd57ba1c64f420bc1fc5a5efd243c39-0a4f24ff/node_modules/highlight.js/lib/languages/htmlbars.js
var require_htmlbars = __commonJS({
  'esm-build-0c8fbc7c3cd57ba1c64f420bc1fc5a5efd243c39-0a4f24ff/node_modules/highlight.js/lib/languages/htmlbars.js'(
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
    function optional(re) {
      return concat('(', re, ')?');
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function either(...args) {
      const joined = '(' + args.map(x => source(x)).join('|') + ')';
      return joined;
    }
    function handlebars(hljs) {
      const BUILT_INS = {
        'builtin-name': [
          'action',
          'bindattr',
          'collection',
          'component',
          'concat',
          'debugger',
          'each',
          'each-in',
          'get',
          'hash',
          'if',
          'in',
          'input',
          'link-to',
          'loc',
          'log',
          'lookup',
          'mut',
          'outlet',
          'partial',
          'query-params',
          'render',
          'template',
          'textarea',
          'unbound',
          'unless',
          'view',
          'with',
          'yield'
        ]
      };
      const LITERALS = {
        literal: ['true', 'false', 'undefined', 'null']
      };
      const DOUBLE_QUOTED_ID_REGEX = /""|"[^"]+"/;
      const SINGLE_QUOTED_ID_REGEX = /''|'[^']+'/;
      const BRACKET_QUOTED_ID_REGEX = /\[\]|\[[^\]]+\]/;
      const PLAIN_ID_REGEX = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/;
      const PATH_DELIMITER_REGEX = /(\.|\/)/;
      const ANY_ID = either(DOUBLE_QUOTED_ID_REGEX, SINGLE_QUOTED_ID_REGEX, BRACKET_QUOTED_ID_REGEX, PLAIN_ID_REGEX);
      const IDENTIFIER_REGEX = concat(
        optional(/\.|\.\/|\//),
        ANY_ID,
        anyNumberOfTimes(concat(PATH_DELIMITER_REGEX, ANY_ID))
      );
      const HASH_PARAM_REGEX = concat('(', BRACKET_QUOTED_ID_REGEX, '|', PLAIN_ID_REGEX, ')(?==)');
      const HELPER_NAME_OR_PATH_EXPRESSION = {
        begin: IDENTIFIER_REGEX,
        lexemes: /[\w.\/]+/
      };
      const HELPER_PARAMETER = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
        keywords: LITERALS
      });
      const SUB_EXPRESSION = {
        begin: /\(/,
        end: /\)/
      };
      const HASH = {
        className: 'attr',
        begin: HASH_PARAM_REGEX,
        relevance: 0,
        starts: {
          begin: /=/,
          end: /=/,
          starts: {
            contains: [
              hljs.NUMBER_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.APOS_STRING_MODE,
              HELPER_PARAMETER,
              SUB_EXPRESSION
            ]
          }
        }
      };
      const BLOCK_PARAMS = {
        begin: /as\s+\|/,
        keywords: {
          keyword: 'as'
        },
        end: /\|/,
        contains: [
          {
            begin: /\w+/
          }
        ]
      };
      const HELPER_PARAMETERS = {
        contains: [
          hljs.NUMBER_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          BLOCK_PARAMS,
          HASH,
          HELPER_PARAMETER,
          SUB_EXPRESSION
        ],
        returnEnd: true
      };
      const SUB_EXPRESSION_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
        className: 'name',
        keywords: BUILT_INS,
        starts: hljs.inherit(HELPER_PARAMETERS, {
          end: /\)/
        })
      });
      SUB_EXPRESSION.contains = [SUB_EXPRESSION_CONTENTS];
      const OPENING_BLOCK_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
        keywords: BUILT_INS,
        className: 'name',
        starts: hljs.inherit(HELPER_PARAMETERS, {
          end: /\}\}/
        })
      });
      const CLOSING_BLOCK_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
        keywords: BUILT_INS,
        className: 'name'
      });
      const BASIC_MUSTACHE_CONTENTS = hljs.inherit(HELPER_NAME_OR_PATH_EXPRESSION, {
        className: 'name',
        keywords: BUILT_INS,
        starts: hljs.inherit(HELPER_PARAMETERS, {
          end: /\}\}/
        })
      });
      const ESCAPE_MUSTACHE_WITH_PRECEEDING_BACKSLASH = {
        begin: /\\\{\{/,
        skip: true
      };
      const PREVENT_ESCAPE_WITH_ANOTHER_PRECEEDING_BACKSLASH = {
        begin: /\\\\(?=\{\{)/,
        skip: true
      };
      return {
        name: 'Handlebars',
        aliases: ['hbs', 'html.hbs', 'html.handlebars', 'htmlbars'],
        case_insensitive: true,
        subLanguage: 'xml',
        contains: [
          ESCAPE_MUSTACHE_WITH_PRECEEDING_BACKSLASH,
          PREVENT_ESCAPE_WITH_ANOTHER_PRECEEDING_BACKSLASH,
          hljs.COMMENT(/\{\{!--/, /--\}\}/),
          hljs.COMMENT(/\{\{!/, /\}\}/),
          {
            className: 'template-tag',
            begin: /\{\{\{\{(?!\/)/,
            end: /\}\}\}\}/,
            contains: [OPENING_BLOCK_MUSTACHE_CONTENTS],
            starts: {
              end: /\{\{\{\{\//,
              returnEnd: true,
              subLanguage: 'xml'
            }
          },
          {
            className: 'template-tag',
            begin: /\{\{\{\{\//,
            end: /\}\}\}\}/,
            contains: [CLOSING_BLOCK_MUSTACHE_CONTENTS]
          },
          {
            className: 'template-tag',
            begin: /\{\{#/,
            end: /\}\}/,
            contains: [OPENING_BLOCK_MUSTACHE_CONTENTS]
          },
          {
            className: 'template-tag',
            begin: /\{\{(?=else\}\})/,
            end: /\}\}/,
            keywords: 'else'
          },
          {
            className: 'template-tag',
            begin: /\{\{(?=else if)/,
            end: /\}\}/,
            keywords: 'else if'
          },
          {
            className: 'template-tag',
            begin: /\{\{\//,
            end: /\}\}/,
            contains: [CLOSING_BLOCK_MUSTACHE_CONTENTS]
          },
          {
            className: 'template-variable',
            begin: /\{\{\{/,
            end: /\}\}\}/,
            contains: [BASIC_MUSTACHE_CONTENTS]
          },
          {
            className: 'template-variable',
            begin: /\{\{/,
            end: /\}\}/,
            contains: [BASIC_MUSTACHE_CONTENTS]
          }
        ]
      };
    }
    function htmlbars(hljs) {
      const definition = handlebars(hljs);
      definition.name = 'HTMLbars';
      if (hljs.getLanguage('handlebars')) {
        definition.disableAutodetect = true;
      }
      return definition;
    }
    module.exports = htmlbars;
  }
});

// esm-build-0c8fbc7c3cd57ba1c64f420bc1fc5a5efd243c39-0a4f24ff/mod.js
var __module = __toESM(require_htmlbars());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };