/* esm.sh - esbuild bundle(chalk@2.4.2) es2022 development */
import __Process$ from '/cdn/v99/node_process.js';
import { stdout as __supports_color$stdout } from '/cdn/v99/supports-color@5.5.0/es2022/supports-color.development.js';
import __ansi_styles$ from '/cdn/v99/ansi-styles@3.2.1/es2022/ansi-styles.development.js';
import __escape_string_regexp$ from '/cdn/v99/escape-string-regexp@1.0.5/es2022/escape-string-regexp.development.js';
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

// esm-build-237c0eea5e3f3895770a9634f1d278b9f4dfb14c-a7374baa/node_modules/chalk/templates.js
var require_templates = __commonJS({
  'esm-build-237c0eea5e3f3895770a9634f1d278b9f4dfb14c-a7374baa/node_modules/chalk/templates.js'(exports, module) {
    'use strict';

    var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = /* @__PURE__ */ new Map([
      ['n', '\n'],
      ['r', '\r'],
      ['t', '	'],
      ['b', '\b'],
      ['f', '\f'],
      ['v', '\v'],
      ['0', '\0'],
      ['\\', '\\'],
      ['e', '\x1B'],
      ['a', '\x07']
    ]);
    function unescape(c) {
      if ((c[0] === 'u' && c.length === 5) || (c[0] === 'x' && c.length === 3)) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, args) {
      const results = [];
      const chunks = args.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        if (!isNaN(chunk)) {
          results.push(Number(chunk));
        } else if ((matches = chunk.match(STRING_REGEX))) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => (escape ? unescape(escape) : chr)));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const styleName of Object.keys(enabled)) {
        if (Array.isArray(enabled[styleName])) {
          if (!(styleName in current)) {
            throw new Error(`Unknown Chalk style: ${styleName}`);
          }
          if (enabled[styleName].length > 0) {
            current = current[styleName].apply(current, enabled[styleName]);
          } else {
            current = current[styleName];
          }
        }
      }
      return current;
    }
    module.exports = (chalk, tmp) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
        if (escapeChar) {
          chunk.push(unescape(escapeChar));
        } else if (style) {
          const str = chunk.join('');
          chunk = [];
          chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
          styles.push({
            inverse,
            styles: parseStyle(style)
          });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error('Found extraneous } in Chalk template literal');
          }
          chunks.push(buildStyle(chalk, styles)(chunk.join('')));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(chr);
        }
      });
      chunks.push(chunk.join(''));
      if (styles.length > 0) {
        const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${
          styles.length === 1 ? '' : 's'
        } (\`}\`)`;
        throw new Error(errMsg);
      }
      return chunks.join('');
    };
  }
});

// esm-build-237c0eea5e3f3895770a9634f1d278b9f4dfb14c-a7374baa/node_modules/chalk/index.js
var require_chalk = __commonJS({
  'esm-build-237c0eea5e3f3895770a9634f1d278b9f4dfb14c-a7374baa/node_modules/chalk/index.js'(exports, module) {
    'use strict';

    var escapeStringRegexp = __escape_string_regexp$;
    var ansiStyles = __ansi_styles$;
    var stdoutColor = __supports_color$stdout;
    var template = require_templates();
    var isSimpleWindowsTerm =
      __Process$.platform === 'win32' && !(__Process$.env.TERM || '').toLowerCase().startsWith('xterm');
    var levelMapping = ['ansi', 'ansi', 'ansi256', 'ansi16m'];
    var skipModels = /* @__PURE__ */ new Set(['gray']);
    var styles = /* @__PURE__ */ Object.create(null);
    function applyOptions(obj, options) {
      options = options || {};
      const scLevel = stdoutColor ? stdoutColor.level : 0;
      obj.level = options.level === void 0 ? scLevel : options.level;
      obj.enabled = 'enabled' in options ? options.enabled : obj.level > 0;
    }
    function Chalk(options) {
      if (!this || !(this instanceof Chalk) || this.template) {
        const chalk = {};
        applyOptions(chalk, options);
        chalk.template = function() {
          const args = [].slice.call(arguments);
          return chalkTag.apply(null, [chalk.template].concat(args));
        };
        Object.setPrototypeOf(chalk, Chalk.prototype);
        Object.setPrototypeOf(chalk.template, chalk);
        chalk.template.constructor = Chalk;
        return chalk.template;
      }
      applyOptions(this, options);
    }
    if (isSimpleWindowsTerm) {
      ansiStyles.blue.open = '\x1B[94m';
    }
    for (const key of Object.keys(ansiStyles)) {
      ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
      styles[key] = {
        get() {
          const codes = ansiStyles[key];
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
        }
      };
    }
    styles.visible = {
      get() {
        return build.call(this, this._styles || [], true, 'visible');
      }
    };
    ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), 'g');
    for (const model of Object.keys(ansiStyles.color.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      styles[model] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.color.close,
              closeRe: ansiStyles.color.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
          };
        }
      };
    }
    ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), 'g');
    for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      const bgModel = 'bg' + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.bgColor.close,
              closeRe: ansiStyles.bgColor.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {}, styles);
    function build(_styles, _empty, key) {
      const builder = function() {
        return applyStyle.apply(builder, arguments);
      };
      builder._styles = _styles;
      builder._empty = _empty;
      const self = this;
      Object.defineProperty(builder, 'level', {
        enumerable: true,
        get() {
          return self.level;
        },
        set(level) {
          self.level = level;
        }
      });
      Object.defineProperty(builder, 'enabled', {
        enumerable: true,
        get() {
          return self.enabled;
        },
        set(enabled) {
          self.enabled = enabled;
        }
      });
      builder.hasGrey = this.hasGrey || key === 'gray' || key === 'grey';
      builder.__proto__ = proto;
      return builder;
    }
    function applyStyle() {
      const args = arguments;
      const argsLen = args.length;
      let str = String(arguments[0]);
      if (argsLen === 0) {
        return '';
      }
      if (argsLen > 1) {
        for (let a = 1; a < argsLen; a++) {
          str += ' ' + args[a];
        }
      }
      if (!this.enabled || this.level <= 0 || !str) {
        return this._empty ? '' : str;
      }
      const originalDim = ansiStyles.dim.open;
      if (isSimpleWindowsTerm && this.hasGrey) {
        ansiStyles.dim.open = '';
      }
      for (const code of this._styles.slice().reverse()) {
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
      }
      ansiStyles.dim.open = originalDim;
      return str;
    }
    function chalkTag(chalk, strings) {
      if (!Array.isArray(strings)) {
        return [].slice.call(arguments, 1).join(' ');
      }
      const args = [].slice.call(arguments, 2);
      const parts = [strings.raw[0]];
      for (let i = 1; i < strings.length; i++) {
        parts.push(String(args[i - 1]).replace(/[{}\\]/g, '\\$&'));
        parts.push(String(strings.raw[i]));
      }
      return template(chalk, parts.join(''));
    }
    Object.defineProperties(Chalk.prototype, styles);
    module.exports = Chalk();
    module.exports.supportsColor = stdoutColor;
    module.exports.default = module.exports;
  }
});

// esm-build-237c0eea5e3f3895770a9634f1d278b9f4dfb14c-a7374baa/mod.js
var __module = __toESM(require_chalk());
var { supportsColor } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, supportsColor };
