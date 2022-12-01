/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/yaml) es2022 development */
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

// esm-build-bce58f7d891924c054a63dd76e6874eef1886f87-6e6443ea/node_modules/highlight.js/lib/languages/yaml.js
var require_yaml = __commonJS({
  'esm-build-bce58f7d891924c054a63dd76e6874eef1886f87-6e6443ea/node_modules/highlight.js/lib/languages/yaml.js'(
    exports,
    module
  ) {
    function yaml(hljs) {
      var LITERALS = 'true false yes no null';
      var URI_CHARACTERS = "[\\w#;/?:@&=+$,.~*'()[\\]]+";
      var KEY = {
        className: 'attr',
        variants: [
          {
            begin: '\\w[\\w :\\/.-]*:(?=[ 	]|$)'
          },
          {
            begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)'
          },
          {
            begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)"
          }
        ]
      };
      var TEMPLATE_VARIABLES = {
        className: 'template-variable',
        variants: [
          {
            begin: /\{\{/,
            end: /\}\}/
          },
          {
            begin: /%\{/,
            end: /\}/
          }
        ]
      };
      var STRING = {
        className: 'string',
        relevance: 0,
        variants: [
          {
            begin: /'/,
            end: /'/
          },
          {
            begin: /"/,
            end: /"/
          },
          {
            begin: /\S+/
          }
        ],
        contains: [hljs.BACKSLASH_ESCAPE, TEMPLATE_VARIABLES]
      };
      var CONTAINER_STRING = hljs.inherit(STRING, {
        variants: [
          {
            begin: /'/,
            end: /'/
          },
          {
            begin: /"/,
            end: /"/
          },
          {
            begin: /[^\s,{}[\]]+/
          }
        ]
      });
      var DATE_RE = '[0-9]{4}(-[0-9][0-9]){0,2}';
      var TIME_RE = '([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?';
      var FRACTION_RE = '(\\.[0-9]*)?';
      var ZONE_RE = '([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?';
      var TIMESTAMP = {
        className: 'number',
        begin: '\\b' + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + '\\b'
      };
      var VALUE_CONTAINER = {
        end: ',',
        endsWithParent: true,
        excludeEnd: true,
        keywords: LITERALS,
        relevance: 0
      };
      var OBJECT = {
        begin: /\{/,
        end: /\}/,
        contains: [VALUE_CONTAINER],
        illegal: '\\n',
        relevance: 0
      };
      var ARRAY = {
        begin: '\\[',
        end: '\\]',
        contains: [VALUE_CONTAINER],
        illegal: '\\n',
        relevance: 0
      };
      var MODES = [
        KEY,
        {
          className: 'meta',
          begin: '^---\\s*$',
          relevance: 10
        },
        {
          className: 'string',
          begin: '[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*'
        },
        {
          begin: '<%[%=-]?',
          end: '[%-]?%>',
          subLanguage: 'ruby',
          excludeBegin: true,
          excludeEnd: true,
          relevance: 0
        },
        {
          className: 'type',
          begin: '!\\w+!' + URI_CHARACTERS
        },
        {
          className: 'type',
          begin: '!<' + URI_CHARACTERS + '>'
        },
        {
          className: 'type',
          begin: '!' + URI_CHARACTERS
        },
        {
          className: 'type',
          begin: '!!' + URI_CHARACTERS
        },
        {
          className: 'meta',
          begin: '&' + hljs.UNDERSCORE_IDENT_RE + '$'
        },
        {
          className: 'meta',
          begin: '\\*' + hljs.UNDERSCORE_IDENT_RE + '$'
        },
        {
          className: 'bullet',
          begin: '-(?=[ ]|$)',
          relevance: 0
        },
        hljs.HASH_COMMENT_MODE,
        {
          beginKeywords: LITERALS,
          keywords: {
            literal: LITERALS
          }
        },
        TIMESTAMP,
        {
          className: 'number',
          begin: hljs.C_NUMBER_RE + '\\b',
          relevance: 0
        },
        OBJECT,
        ARRAY,
        STRING
      ];
      var VALUE_MODES = [...MODES];
      VALUE_MODES.pop();
      VALUE_MODES.push(CONTAINER_STRING);
      VALUE_CONTAINER.contains = VALUE_MODES;
      return {
        name: 'YAML',
        case_insensitive: true,
        aliases: ['yml'],
        contains: MODES
      };
    }
    module.exports = yaml;
  }
});

// esm-build-bce58f7d891924c054a63dd76e6874eef1886f87-6e6443ea/mod.js
var __module = __toESM(require_yaml());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
