/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001434/dist/unpacker/agents) es2022 development */
import __caniuse_lite_data_agents$ from '/cdn/v99/caniuse-lite@1.0.30001434/es2022/data/agents.development.js';
import { browserVersions as __caniuse_lite_dist_unpacker_browserVersions$browserVersions } from '/cdn/v99/caniuse-lite@1.0.30001434/es2022/dist/unpacker/browserVersions.development.js';
import { browsers as __caniuse_lite_dist_unpacker_browsers$browsers } from '/cdn/v99/caniuse-lite@1.0.30001434/es2022/dist/unpacker/browsers.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
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

// esm-build-14f343cfb187a61daecd185a09b87ea6f5804535-bec5d544/node_modules/caniuse-lite/dist/unpacker/agents.js
var require_agents = __commonJS({
  'esm-build-14f343cfb187a61daecd185a09b87ea6f5804535-bec5d544/node_modules/caniuse-lite/dist/unpacker/agents.js'(
    exports,
    module
  ) {
    'use strict';

    var browsers = __caniuse_lite_dist_unpacker_browsers$browsers;
    var versions = __caniuse_lite_dist_unpacker_browserVersions$browserVersions;
    var agentsData = __caniuse_lite_data_agents$;
    function unpackBrowserVersions(versionsData) {
      return Object.keys(versionsData).reduce((usage, version) => {
        usage[versions[version]] = versionsData[version];
        return usage;
      }, {});
    }
    module.exports.agents = Object.keys(agentsData).reduce((map, key) => {
      let versionsData = agentsData[key];
      map[browsers[key]] = Object.keys(versionsData).reduce((data, entry) => {
        if (entry === 'A') {
          data.usage_global = unpackBrowserVersions(versionsData[entry]);
        } else if (entry === 'C') {
          data.versions = versionsData[entry].reduce((list, version) => {
            if (version === '') {
              list.push(null);
            } else {
              list.push(versions[version]);
            }
            return list;
          }, []);
        } else if (entry === 'D') {
          data.prefix_exceptions = unpackBrowserVersions(versionsData[entry]);
        } else if (entry === 'E') {
          data.browser = versionsData[entry];
        } else if (entry === 'F') {
          data.release_date = Object.keys(versionsData[entry]).reduce((map2, key2) => {
            map2[versions[key2]] = versionsData[entry][key2];
            return map2;
          }, {});
        } else {
          data.prefix = versionsData[entry];
        }
        return data;
      }, {});
      return map;
    }, {});
  }
});

// esm-build-14f343cfb187a61daecd185a09b87ea6f5804535-bec5d544/mod.js
var __module = __toESM(require_agents());
var { agents } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { agents, mod_default as default };
