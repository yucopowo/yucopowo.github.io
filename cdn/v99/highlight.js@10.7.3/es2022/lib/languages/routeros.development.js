/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/routeros) es2022 development */
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

// esm-build-d5aa940610a38ed01eca9c1d269dbac8e03a06c3-345901eb/node_modules/highlight.js/lib/languages/routeros.js
var require_routeros = __commonJS({
  'esm-build-d5aa940610a38ed01eca9c1d269dbac8e03a06c3-345901eb/node_modules/highlight.js/lib/languages/routeros.js'(
    exports,
    module
  ) {
    function routeros(hljs) {
      const STATEMENTS = 'foreach do while for if from to step else on-error and or not in';
      const GLOBAL_COMMANDS =
        'global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime';
      const COMMON_COMMANDS = 'add remove enable disable set get print export edit find run debug error info warning';
      const LITERALS = 'true false yes no nothing nil null';
      const OBJECTS =
        'traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw';
      const VAR = {
        className: 'variable',
        variants: [
          {
            begin: /\$[\w\d#@][\w\d_]*/
          },
          {
            begin: /\$\{(.*?)\}/
          }
        ]
      };
      const QUOTE_STRING = {
        className: 'string',
        begin: /"/,
        end: /"/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          VAR,
          {
            className: 'variable',
            begin: /\$\(/,
            end: /\)/,
            contains: [hljs.BACKSLASH_ESCAPE]
          }
        ]
      };
      const APOS_STRING = {
        className: 'string',
        begin: /'/,
        end: /'/
      };
      return {
        name: 'Microtik RouterOS script',
        aliases: ['mikrotik'],
        case_insensitive: true,
        keywords: {
          $pattern: /:?[\w-]+/,
          literal: LITERALS,
          keyword: STATEMENTS + ' :' + STATEMENTS.split(' ').join(' :') + ' :' + GLOBAL_COMMANDS.split(' ').join(' :')
        },
        contains: [
          {
            variants: [
              {
                begin: /\/\*/,
                end: /\*\//
              },
              {
                begin: /\/\//,
                end: /$/
              },
              {
                begin: /<\//,
                end: />/
              }
            ],
            illegal: /./
          },
          hljs.COMMENT('^#', '$'),
          QUOTE_STRING,
          APOS_STRING,
          VAR,
          {
            begin: /[\w-]+=([^\s{}[\]()>]+)/,
            relevance: 0,
            returnBegin: true,
            contains: [
              {
                className: 'attribute',
                begin: /[^=]+/
              },
              {
                begin: /=/,
                endsWithParent: true,
                relevance: 0,
                contains: [
                  QUOTE_STRING,
                  APOS_STRING,
                  VAR,
                  {
                    className: 'literal',
                    begin: '\\b(' + LITERALS.split(' ').join('|') + ')\\b'
                  },
                  {
                    begin: /("[^"]*"|[^\s{}[\]]+)/
                  }
                ]
              }
            ]
          },
          {
            className: 'number',
            begin: /\*[0-9a-fA-F]+/
          },
          {
            begin: '\\b(' + COMMON_COMMANDS.split(' ').join('|') + ')([\\s[(\\]|])',
            returnBegin: true,
            contains: [
              {
                className: 'builtin-name',
                begin: /\w+/
              }
            ]
          },
          {
            className: 'built_in',
            variants: [
              {
                begin: '(\\.\\./|/|\\s)((' + OBJECTS.split(' ').join('|') + ');?\\s)+'
              },
              {
                begin: /\.\./,
                relevance: 0
              }
            ]
          }
        ]
      };
    }
    module.exports = routeros;
  }
});

// esm-build-d5aa940610a38ed01eca9c1d269dbac8e03a06c3-345901eb/mod.js
var __module = __toESM(require_routeros());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
