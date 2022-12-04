/* esm.sh - esbuild bundle(@babel/preset-react@7.18.6) es2022 development */
import * as ___babel_plugin_transform_react_pure_annotations$ from '/cdn/v99/@babel/plugin-transform-react-pure-annotations@7.18.6/es2022/plugin-transform-react-pure-annotations.development.js';
import * as ___babel_plugin_transform_react_display_name$ from '/cdn/v99/@babel/plugin-transform-react-display-name@7.18.6/es2022/plugin-transform-react-display-name.development.js';
import * as ___babel_plugin_transform_react_jsx_development$ from '/cdn/v99/@babel/plugin-transform-react-jsx-development@7.18.6/es2022/plugin-transform-react-jsx-development.development.js';
import * as ___babel_plugin_transform_react_jsx$ from '/cdn/v99/@babel/plugin-transform-react-jsx@7.19.0/es2022/plugin-transform-react-jsx.development.js';
import ___babel_helper_plugin_utils$ from '/cdn/v99/@babel/helper-plugin-utils@7.20.2/es2022/helper-plugin-utils.development.js';
import ___babel_helper_validator_option$ from '/cdn/v99/@babel/helper-validator-option@7.18.6/es2022/helper-validator-option.development.js';
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

// esm-build-6836b451fd353e6ae61df18ddf02a178e5d2bb74-accd2eef/node_modules/@babel/preset-react/lib/index.js
var require_lib = __commonJS({
  'esm-build-6836b451fd353e6ae61df18ddf02a178e5d2bb74-accd2eef/node_modules/@babel/preset-react/lib/index.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    var helperPluginUtils = ___babel_helper_plugin_utils$;
    var transformReactJSX = ___babel_plugin_transform_react_jsx$;
    var transformReactJSXDevelopment = ___babel_plugin_transform_react_jsx_development$;
    var transformReactDisplayName = ___babel_plugin_transform_react_display_name$;
    var transformReactPure = ___babel_plugin_transform_react_pure_annotations$;
    var helperValidatorOption = ___babel_helper_validator_option$;
    function _interopDefaultLegacy(e) {
      return e && typeof e === 'object' && 'default' in e
        ? e
        : {
            default: e
          };
    }
    var transformReactJSX__default = /* @__PURE__ */ _interopDefaultLegacy(transformReactJSX);
    var transformReactJSXDevelopment__default = /* @__PURE__ */ _interopDefaultLegacy(transformReactJSXDevelopment);
    var transformReactDisplayName__default = /* @__PURE__ */ _interopDefaultLegacy(transformReactDisplayName);
    var transformReactPure__default = /* @__PURE__ */ _interopDefaultLegacy(transformReactPure);
    new helperValidatorOption.OptionValidator('@babel/preset-react');
    function normalizeOptions(options = {}) {
      {
        let { pragma, pragmaFrag } = options;
        const { pure, throwIfNamespace = true, runtime = 'classic', importSource, useBuiltIns, useSpread } = options;
        if (runtime === 'classic') {
          pragma = pragma || 'React.createElement';
          pragmaFrag = pragmaFrag || 'React.Fragment';
        }
        const development = !!options.development;
        return {
          development,
          importSource,
          pragma,
          pragmaFrag,
          pure,
          runtime,
          throwIfNamespace,
          useBuiltIns,
          useSpread
        };
      }
    }
    var index = helperPluginUtils.declarePreset((api, opts) => {
      api.assertVersion(7);
      const { development, importSource, pragma, pragmaFrag, pure, runtime, throwIfNamespace } = normalizeOptions(opts);
      return {
        plugins: [
          [
            development ? transformReactJSXDevelopment__default['default'] : transformReactJSX__default['default'],
            {
              importSource,
              pragma,
              pragmaFrag,
              runtime,
              throwIfNamespace,
              pure,
              useBuiltIns: !!opts.useBuiltIns,
              useSpread: opts.useSpread
            }
          ],
          transformReactDisplayName__default['default'],
          pure !== false && transformReactPure__default['default']
        ].filter(Boolean)
      };
    });
    exports['default'] = index;
  }
});

// esm-build-6836b451fd353e6ae61df18ddf02a178e5d2bb74-accd2eef/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
