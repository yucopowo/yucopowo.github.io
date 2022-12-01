/* esm.sh - esbuild bundle(refractor@3.6.0/core) es2022 development */
var __global$ = globalThis || (typeof window !== 'undefined' ? window : self);
import __refractor_lang_javascript$ from '/cdn/v99/refractor@3.6.0/es2022/lang/javascript.development.js';
import __refractor_lang_clike$ from '/cdn/v99/refractor@3.6.0/es2022/lang/clike.development.js';
import __refractor_lang_css$ from '/cdn/v99/refractor@3.6.0/es2022/lang/css.development.js';
import __refractor_lang_markup$ from '/cdn/v99/refractor@3.6.0/es2022/lang/markup.development.js';
import __prismjs_components_prism_core$ from '/cdn/v99/prismjs@1.27.0/es2022/components/prism-core.development.js';
import __parse_entities$ from '/cdn/v99/parse-entities@2.0.0/es2022/parse-entities.development.js';
import __hastscript$ from '/cdn/v99/hastscript@6.0.0/es2022/hastscript.development.js';
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

// esm-build-68f0b1bcb6f57be51d49c9e6aa21d7e51677896c-97879e04/node_modules/refractor/core.js
var require_core = __commonJS({
  'esm-build-68f0b1bcb6f57be51d49c9e6aa21d7e51677896c-97879e04/node_modules/refractor/core.js'(exports, module) {
    'use strict';

    var ctx =
      typeof globalThis === 'object'
        ? globalThis
        : typeof self === 'object'
        ? self
        : typeof window === 'object'
        ? window
        : typeof __global$ === 'object'
        ? __global$
        : {};
    var restore = capture();
    ctx.Prism = {
      manual: true,
      disableWorkerMessageHandler: true
    };
    var h = __hastscript$;
    var decode = __parse_entities$;
    var Prism = __prismjs_components_prism_core$;
    var markup = __refractor_lang_markup$;
    var css = __refractor_lang_css$;
    var clike = __refractor_lang_clike$;
    var js = __refractor_lang_javascript$;
    restore();
    var own = {}.hasOwnProperty;
    function Refractor() {}
    Refractor.prototype = Prism;
    var refract = new Refractor();
    module.exports = refract;
    refract.highlight = highlight;
    refract.register = register;
    refract.alias = alias;
    refract.registered = registered;
    refract.listLanguages = listLanguages;
    register(markup);
    register(css);
    register(clike);
    register(js);
    refract.util.encode = encode;
    refract.Token.stringify = stringify;
    function register(grammar) {
      if (typeof grammar !== 'function' || !grammar.displayName) {
        throw new Error('Expected `function` for `grammar`, got `' + grammar + '`');
      }
      if (refract.languages[grammar.displayName] === void 0) {
        grammar(refract);
      }
    }
    function alias(name, alias2) {
      var languages = refract.languages;
      var map = name;
      var key;
      var list;
      var length;
      var index;
      if (alias2) {
        map = {};
        map[name] = alias2;
      }
      for (key in map) {
        list = map[key];
        list = typeof list === 'string' ? [list] : list;
        length = list.length;
        index = -1;
        while (++index < length) {
          languages[list[index]] = languages[key];
        }
      }
    }
    function highlight(value, name) {
      var sup = Prism.highlight;
      var grammar;
      if (typeof value !== 'string') {
        throw new Error('Expected `string` for `value`, got `' + value + '`');
      }
      if (refract.util.type(name) === 'Object') {
        grammar = name;
        name = null;
      } else {
        if (typeof name !== 'string') {
          throw new Error('Expected `string` for `name`, got `' + name + '`');
        }
        if (own.call(refract.languages, name)) {
          grammar = refract.languages[name];
        } else {
          throw new Error('Unknown language: `' + name + '` is not registered');
        }
      }
      return sup.call(this, value, grammar, name);
    }
    function registered(language) {
      if (typeof language !== 'string') {
        throw new Error('Expected `string` for `language`, got `' + language + '`');
      }
      return own.call(refract.languages, language);
    }
    function listLanguages() {
      var languages = refract.languages;
      var list = [];
      var language;
      for (language in languages) {
        if (own.call(languages, language) && typeof languages[language] === 'object') {
          list.push(language);
        }
      }
      return list;
    }
    function stringify(value, language, parent) {
      var env;
      if (typeof value === 'string') {
        return {
          type: 'text',
          value
        };
      }
      if (refract.util.type(value) === 'Array') {
        return stringifyAll(value, language);
      }
      env = {
        type: value.type,
        content: refract.Token.stringify(value.content, language, parent),
        tag: 'span',
        classes: ['token', value.type],
        attributes: {},
        language,
        parent
      };
      if (value.alias) {
        env.classes = env.classes.concat(value.alias);
      }
      refract.hooks.run('wrap', env);
      return h(env.tag + '.' + env.classes.join('.'), attributes(env.attributes), env.content);
    }
    function stringifyAll(values, language) {
      var result = [];
      var length = values.length;
      var index = -1;
      var value;
      while (++index < length) {
        value = values[index];
        if (value !== '' && value !== null && value !== void 0) {
          result.push(value);
        }
      }
      index = -1;
      length = result.length;
      while (++index < length) {
        value = result[index];
        result[index] = refract.Token.stringify(value, language, result);
      }
      return result;
    }
    function encode(tokens) {
      return tokens;
    }
    function attributes(attrs) {
      var key;
      for (key in attrs) {
        attrs[key] = decode(attrs[key]);
      }
      return attrs;
    }
    function capture() {
      var defined = 'Prism' in ctx;
      var current = defined ? ctx.Prism : void 0;
      return restore2;
      function restore2() {
        if (defined) {
          ctx.Prism = current;
        } else {
          delete ctx.Prism;
        }
        defined = void 0;
        current = void 0;
      }
    }
  }
});

// esm-build-68f0b1bcb6f57be51d49c9e6aa21d7e51677896c-97879e04/mod.js
var __module = __toESM(require_core());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
