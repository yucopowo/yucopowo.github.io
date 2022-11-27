/* esm.sh - esbuild bundle(nano-css@5.3.5) es2022 development */
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

// esm-build-3ee957bdf8588e476564337ddce082df619c8303-7408bbed/node_modules/nano-css/index.js
var require_nano_css = __commonJS({
  'esm-build-3ee957bdf8588e476564337ddce082df619c8303-7408bbed/node_modules/nano-css/index.js'(exports) {
    'use strict';

    var KEBAB_REGEX = /[A-Z]/g;
    var hash = function(str) {
      var h = 5381,
        i = str.length;
      while (i) h = (h * 33) ^ str.charCodeAt(--i);
      return '_' + (h >>> 0).toString(36);
    };
    exports.create = function(config) {
      config = config || {};
      var assign = config.assign || Object.assign;
      var client = typeof window === 'object';
      if (true) {
        if (client) {
          if (typeof document !== 'object' || !document.getElementsByTagName('HTML')) {
            console.error(
              'nano-css detected browser environment because of "window" global, but "document" global seems to be defective.'
            );
          }
        }
      }
      var renderer = assign(
        {
          raw: '',
          pfx: '_',
          client,
          assign,
          stringify: JSON.stringify,
          kebab: function(prop) {
            return prop.replace(KEBAB_REGEX, '-$&').toLowerCase();
          },
          decl: function(key, value) {
            key = renderer.kebab(key);
            return key + ':' + value + ';';
          },
          hash: function(obj) {
            return hash(renderer.stringify(obj));
          },
          selector: function(parent, selector) {
            return parent + (selector[0] === ':' ? '' : ' ') + selector;
          },
          putRaw: function(rawCssRule) {
            renderer.raw += rawCssRule;
          }
        },
        config
      );
      if (renderer.client) {
        if (!renderer.sh) document.head.appendChild((renderer.sh = document.createElement('style')));
        if (true) {
          renderer.sh.setAttribute('data-nano-css-dev', '');
          renderer.shTest = document.createElement('style');
          renderer.shTest.setAttribute('data-nano-css-dev-tests', '');
          document.head.appendChild(renderer.shTest);
        }
        renderer.putRaw = function(rawCssRule) {
          if (false) {
            var sheet = renderer.sh.sheet;
            try {
              sheet.insertRule(rawCssRule, sheet.cssRules.length);
            } catch (error) {}
          } else {
            try {
              renderer.shTest.sheet.insertRule(rawCssRule, renderer.shTest.sheet.cssRules.length);
            } catch (error) {
              if (config.verbose) {
                console.error(error);
              }
            }
            renderer.sh.appendChild(document.createTextNode(rawCssRule));
          }
        };
      }
      renderer.put = function(selector, decls, atrule) {
        var str = '';
        var prop, value;
        var postponed = [];
        for (prop in decls) {
          value = decls[prop];
          if (value instanceof Object && !(value instanceof Array)) {
            postponed.push(prop);
          } else {
            if (!renderer.sourcemaps) {
              str += '    ' + renderer.decl(prop, value, selector, atrule) + '\n';
            } else {
              str += renderer.decl(prop, value, selector, atrule);
            }
          }
        }
        if (str) {
          if (!renderer.sourcemaps) {
            str = '\n' + selector + ' {\n' + str + '}\n';
          } else {
            str = selector + '{' + str + '}';
          }
          renderer.putRaw(atrule ? atrule + '{' + str + '}' : str);
        }
        for (var i = 0; i < postponed.length; i++) {
          prop = postponed[i];
          if (prop[0] === '@' && prop !== '@font-face') {
            renderer.putAt(selector, decls[prop], prop);
          } else {
            renderer.put(renderer.selector(selector, prop), decls[prop], atrule);
          }
        }
      };
      renderer.putAt = renderer.put;
      return renderer;
    };
  }
});

// esm-build-3ee957bdf8588e476564337ddce082df619c8303-7408bbed/mod.js
var __module = __toESM(require_nano_css());
var { create } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { create, mod_default as default };
