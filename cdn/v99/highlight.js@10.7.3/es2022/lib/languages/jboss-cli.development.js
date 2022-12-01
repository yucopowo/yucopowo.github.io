/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/jboss-cli) es2022 development */
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

// esm-build-eda7faedc47933685cf05cd0cf0ea190d8acd3bf-0d664ec4/node_modules/highlight.js/lib/languages/jboss-cli.js
var require_jboss_cli = __commonJS({
  'esm-build-eda7faedc47933685cf05cd0cf0ea190d8acd3bf-0d664ec4/node_modules/highlight.js/lib/languages/jboss-cli.js'(
    exports,
    module
  ) {
    function jbossCli(hljs) {
      const PARAM = {
        begin: /[\w-]+ *=/,
        returnBegin: true,
        relevance: 0,
        contains: [
          {
            className: 'attr',
            begin: /[\w-]+/
          }
        ]
      };
      const PARAMSBLOCK = {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        contains: [PARAM],
        relevance: 0
      };
      const OPERATION = {
        className: 'function',
        begin: /:[\w\-.]+/,
        relevance: 0
      };
      const PATH = {
        className: 'string',
        begin: /\B([\/.])[\w\-.\/=]+/
      };
      const COMMAND_PARAMS = {
        className: 'params',
        begin: /--[\w\-=\/]+/
      };
      return {
        name: 'JBoss CLI',
        aliases: ['wildfly-cli'],
        keywords: {
          $pattern: '[a-z-]+',
          keyword:
            'alias batch cd clear command connect connection-factory connection-info data-source deploy deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias undeploy unset version xa-data-source',
          literal: 'true false'
        },
        contains: [hljs.HASH_COMMENT_MODE, hljs.QUOTE_STRING_MODE, COMMAND_PARAMS, OPERATION, PATH, PARAMSBLOCK]
      };
    }
    module.exports = jbossCli;
  }
});

// esm-build-eda7faedc47933685cf05cd0cf0ea190d8acd3bf-0d664ec4/mod.js
var __module = __toESM(require_jboss_cli());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
