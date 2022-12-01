/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/crmsh) es2022 development */
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

// esm-build-8516946b251cdc97a8d6c212744e49f622478358-f5851023/node_modules/highlight.js/lib/languages/crmsh.js
var require_crmsh = __commonJS({
  'esm-build-8516946b251cdc97a8d6c212744e49f622478358-f5851023/node_modules/highlight.js/lib/languages/crmsh.js'(
    exports,
    module
  ) {
    function crmsh(hljs) {
      const RESOURCES = 'primitive rsc_template';
      const COMMANDS =
        'group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml';
      const PROPERTY_SETS = 'property rsc_defaults op_defaults';
      const KEYWORDS = 'params meta operations op rule attributes utilization';
      const OPERATORS =
        'read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\';
      const TYPES = 'number string';
      const LITERALS = 'Master Started Slave Stopped start promote demote stop monitor true false';
      return {
        name: 'crmsh',
        aliases: ['crm', 'pcmk'],
        case_insensitive: true,
        keywords: {
          keyword: KEYWORDS + ' ' + OPERATORS + ' ' + TYPES,
          literal: LITERALS
        },
        contains: [
          hljs.HASH_COMMENT_MODE,
          {
            beginKeywords: 'node',
            starts: {
              end: '\\s*([\\w_-]+:)?',
              starts: {
                className: 'title',
                end: '\\s*[\\$\\w_][\\w_-]*'
              }
            }
          },
          {
            beginKeywords: RESOURCES,
            starts: {
              className: 'title',
              end: '\\s*[\\$\\w_][\\w_-]*',
              starts: {
                end: '\\s*@?[\\w_][\\w_\\.:-]*'
              }
            }
          },
          {
            begin: '\\b(' + COMMANDS.split(' ').join('|') + ')\\s+',
            keywords: COMMANDS,
            starts: {
              className: 'title',
              end: '[\\$\\w_][\\w_-]*'
            }
          },
          {
            beginKeywords: PROPERTY_SETS,
            starts: {
              className: 'title',
              end: '\\s*([\\w_-]+:)?'
            }
          },
          hljs.QUOTE_STRING_MODE,
          {
            className: 'meta',
            begin: '(ocf|systemd|service|lsb):[\\w_:-]+',
            relevance: 0
          },
          {
            className: 'number',
            begin: '\\b\\d+(\\.\\d+)?(ms|s|h|m)?',
            relevance: 0
          },
          {
            className: 'literal',
            begin: '[-]?(infinity|inf)',
            relevance: 0
          },
          {
            className: 'attr',
            begin: /([A-Za-z$_#][\w_-]+)=/,
            relevance: 0
          },
          {
            className: 'tag',
            begin: '</?',
            end: '/?>',
            relevance: 0
          }
        ]
      };
    }
    module.exports = crmsh;
  }
});

// esm-build-8516946b251cdc97a8d6c212744e49f622478358-f5851023/mod.js
var __module = __toESM(require_crmsh());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
