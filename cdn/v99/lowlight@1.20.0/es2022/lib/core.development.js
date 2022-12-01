/* esm.sh - esbuild bundle(lowlight@1.20.0/lib/core) es2022 development */
import __fault$ from '/cdn/v99/fault@1.0.4/es2022/fault.development.js';
import __highlight_js_lib_core$ from '/cdn/v99/highlight.js@10.7.3/es2022/lib/core.development.js';
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

// esm-build-536d8e150a02a6e501aa7b49928d5778b36e8c01-01ec3b48/node_modules/lowlight/lib/core.js
var require_core = __commonJS({
  'esm-build-536d8e150a02a6e501aa7b49928d5778b36e8c01-01ec3b48/node_modules/lowlight/lib/core.js'(exports) {
    'use strict';

    var high = __highlight_js_lib_core$;
    var fault = __fault$;
    exports.highlight = highlight2;
    exports.highlightAuto = highlightAuto2;
    exports.registerLanguage = registerLanguage2;
    exports.listLanguages = listLanguages2;
    exports.registerAlias = registerAlias2;
    Emitter.prototype.addText = text;
    Emitter.prototype.addKeyword = addKeyword;
    Emitter.prototype.addSublanguage = addSublanguage;
    Emitter.prototype.openNode = open;
    Emitter.prototype.closeNode = close;
    Emitter.prototype.closeAllNodes = noop;
    Emitter.prototype.finalize = noop;
    Emitter.prototype.toHTML = toHtmlNoop;
    var defaultPrefix = 'hljs-';
    function highlight2(name, value, options) {
      var before = high.configure({});
      var settings = options || {};
      var prefix = settings.prefix;
      var result;
      if (typeof name !== 'string') {
        throw fault('Expected `string` for name, got `%s`', name);
      }
      if (!high.getLanguage(name)) {
        throw fault('Unknown language: `%s` is not registered', name);
      }
      if (typeof value !== 'string') {
        throw fault('Expected `string` for value, got `%s`', value);
      }
      if (prefix === null || prefix === void 0) {
        prefix = defaultPrefix;
      }
      high.configure({
        __emitter: Emitter,
        classPrefix: prefix
      });
      result = high.highlight(value, {
        language: name,
        ignoreIllegals: true
      });
      high.configure(before || {});
      if (result.errorRaised) {
        throw result.errorRaised;
      }
      return {
        relevance: result.relevance,
        language: result.language,
        value: result.emitter.rootNode.children
      };
    }
    function highlightAuto2(value, options) {
      var settings = options || {};
      var subset = settings.subset || high.listLanguages();
      var prefix = settings.prefix;
      var length = subset.length;
      var index = -1;
      var result;
      var secondBest;
      var current;
      var name;
      if (prefix === null || prefix === void 0) {
        prefix = defaultPrefix;
      }
      if (typeof value !== 'string') {
        throw fault('Expected `string` for value, got `%s`', value);
      }
      secondBest = {
        relevance: 0,
        language: null,
        value: []
      };
      result = {
        relevance: 0,
        language: null,
        value: []
      };
      while (++index < length) {
        name = subset[index];
        if (!high.getLanguage(name)) {
          continue;
        }
        current = highlight2(name, value, options);
        current.language = name;
        if (current.relevance > secondBest.relevance) {
          secondBest = current;
        }
        if (current.relevance > result.relevance) {
          secondBest = result;
          result = current;
        }
      }
      if (secondBest.language) {
        result.secondBest = secondBest;
      }
      return result;
    }
    function registerLanguage2(name, syntax) {
      high.registerLanguage(name, syntax);
    }
    function listLanguages2() {
      return high.listLanguages();
    }
    function registerAlias2(name, alias) {
      var map = name;
      var key;
      if (alias) {
        map = {};
        map[name] = alias;
      }
      for (key in map) {
        high.registerAliases(map[key], {
          languageName: key
        });
      }
    }
    function Emitter(options) {
      this.options = options;
      this.rootNode = {
        children: []
      };
      this.stack = [this.rootNode];
    }
    function addKeyword(value, name) {
      this.openNode(name);
      this.addText(value);
      this.closeNode();
    }
    function addSublanguage(other, name) {
      var stack = this.stack;
      var current = stack[stack.length - 1];
      var results = other.rootNode.children;
      var node = name
        ? {
            type: 'element',
            tagName: 'span',
            properties: {
              className: [name]
            },
            children: results
          }
        : results;
      current.children = current.children.concat(node);
    }
    function text(value) {
      var stack = this.stack;
      var current;
      var tail;
      if (value === '') return;
      current = stack[stack.length - 1];
      tail = current.children[current.children.length - 1];
      if (tail && tail.type === 'text') {
        tail.value += value;
      } else {
        current.children.push({
          type: 'text',
          value
        });
      }
    }
    function open(name) {
      var stack = this.stack;
      var className = this.options.classPrefix + name;
      var current = stack[stack.length - 1];
      var child = {
        type: 'element',
        tagName: 'span',
        properties: {
          className: [className]
        },
        children: []
      };
      current.children.push(child);
      stack.push(child);
    }
    function close() {
      this.stack.pop();
    }
    function toHtmlNoop() {
      return '';
    }
    function noop() {}
  }
});

// esm-build-536d8e150a02a6e501aa7b49928d5778b36e8c01-01ec3b48/mod.js
var __module = __toESM(require_core());
var { highlight, highlightAuto, registerLanguage, listLanguages, registerAlias } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, highlight, highlightAuto, listLanguages, registerAlias, registerLanguage };
